using DAL.DALApi;

namespace DAL.DALImplementation;

public class AssistantRepo : IAssistantRepo

{
    private readonly HelpContext helpContext;
    private readonly IAddressRepo addressRepo;

    #region ctor
    public AssistantRepo(HelpContext helpContext, IAddressRepo addressRepo)
    {
        this.helpContext = helpContext;
        this.addressRepo = addressRepo;
    }
    #endregion

    #region GetAll
    public async Task<List<Assistant>> GetAllAsync()
    {
        var assistant = helpContext.Assistants.Include(x => x.AddressCodeNavigation)
            .Include(c => c.CategoryCodeNavigation);
        return await assistant.ToListAsync();
    }
    #endregion

    #region GetSingle
    public async Task<Assistant> GetSingleAsync(string id)
    {
        Assistant assistant = await helpContext.Assistants.Include(a => a.AddressCodeNavigation)
           .Include(a => a.CategoryCodeNavigation).FirstOrDefaultAsync(ga => ga.Id == id);
        return assistant;
    }
    #endregion

    #region Create
    public async Task<Assistant> AddAsync(Assistant entity)
    {
        //order the function - first add the address details and category details and then continue......
        helpContext.Assistants.Add(entity);
        await helpContext.SaveChangesAsync();
        return entity;
    }
    #endregion

    #region Update
    //public async Task<Assistant> UpdateAsync(Assistant entity, string id)
    //{
    //    Assistant a = helpContext.Assistants.FirstOrDefault(a => a.Id == id);
    //    if (a != null)
    //    {
    //        a.FirstName = entity.FirstName;
    //        a.LastName = entity.LastName;
    //        a.Email = entity.Email;
    //        a.AddressCode = entity.AddressCode;
    //        a.PhoneNumber = entity.PhoneNumber;
    //        a.CategoryCode = entity.CategoryCode;
    //        await helpContext.SaveChangesAsync();
    //    }
    //    return a;
    //}

    public async Task<Assistant> UpdateAsync(Assistant entity, string id)
    {
        Assistant a = await helpContext.Assistants.Include(aa => aa.AddressCodeNavigation)
                                            .FirstOrDefaultAsync(aa => aa.Id == id);
        if (a != null)
        {
            int newAddressCode = await addressRepo.AddAddressAsync(entity.AddressCodeNavigation);
            int oldAddressCode = a.AddressCode;
            entity.AddressCode = newAddressCode;

            a.FirstName = entity.FirstName;
            a.LastName = entity.LastName;
            a.Email = entity.Email;
            a.AddressCode = entity.AddressCode;
            a.PhoneNumber = entity.PhoneNumber;
            a.CategoryCode = entity.CategoryCode;
            a.AddressCodeNavigation = entity.AddressCodeNavigation;

            await helpContext.SaveChangesAsync();

            if (oldAddressCode != newAddressCode)
            {
                Console.WriteLine($"Old address code: {oldAddressCode}, new address code: {newAddressCode}");
                await addressRepo.DeleteAddressAsync(oldAddressCode);
            }
        }
        return a;
    }

    #endregion

    #region Delete
    public async Task<Assistant> DeleteAsync(string id)
    {
        Assistant removeAssistant = helpContext.Assistants.FirstOrDefault(ra => ra.Id == id);
        if (removeAssistant != null)
        {
            helpContext.Assistants.Remove(removeAssistant);
            await helpContext.SaveChangesAsync();
        }
        return removeAssistant;
    }
    #endregion

}
