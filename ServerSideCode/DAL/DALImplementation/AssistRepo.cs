using DAL.Models;

namespace DAL.DALImplementation;

public class AssistRepo : IAssistRepo
{
    private readonly HelpContext helpContext;
    private readonly IAddressRepo addressRepo;
    #region ctor
    public AssistRepo(HelpContext helpContext, IAddressRepo addressRepo)
    {
        this.helpContext = helpContext;
        this.addressRepo = addressRepo;
    }
    #endregion

    #region GetAll
    public async Task<List<Assist>> GetAllAsync()
    {
        var assists = helpContext.Assists.Include(a => a.AddressCodeNavigation)
            .Include(x => x.CategoryCodeNavigation);
        return await assists.ToListAsync();
    }
    #endregion

    #region GetSingle
    public async Task<Assist> GetSingleAsync(string id)
    {
        Assist assist = await helpContext.Assists.Include(a => a.AddressCodeNavigation)
            .Include(a => a.CategoryCodeNavigation).FirstOrDefaultAsync(ga => ga.Id == id);
        return assist;
    }
    #endregion

    #region Create
    public async Task<Assist> AddAsync(Assist entity)
    {
        helpContext.Assists.Add(entity);
        await helpContext.SaveChangesAsync();
        return entity;
    }
    #endregion

    #region Delete
    public async Task<Assist> DeleteAsync(string id)
    {
        Assist removeAssist = helpContext.Assists.FirstOrDefault(ra => ra.Id == id);
        if (removeAssist != null)
        {
            helpContext.Assists.Remove(removeAssist);
            await helpContext.SaveChangesAsync();
        }
        return removeAssist;
    }
    #endregion

    #region Update
    //public async Task<Assist> UpdateAsync(Assist entity, string id)
    //{
    //    //Assist a = helpContext.Assists.FirstOrDefault(a => a.Id == id);
    //    Assist a = await helpContext.Assists.Include(aa => aa.AddressCodeNavigation)
    //                                            .FirstOrDefaultAsync(aa => aa.Id == id);
    //    if (a != null)
    //    {
    //        int addressCode = await addressRepo.AddAddressAsync(entity.AddressCodeNavigation);
    //        entity.AddressCode = addressCode;

    //        a.FirstName = entity.FirstName;
    //        a.LastName = entity.LastName;
    //        a.Email = entity.Email;
    //        a.NumOfChildren = entity.NumOfChildren;
    //        a.AddressCode = entity.AddressCode;
    //        a.PhoneNumber = entity.PhoneNumber;
    //        a.CategoryCode = entity.CategoryCode;

    //        a.AddressCodeNavigation = entity.AddressCodeNavigation;

    //        await helpContext.SaveChangesAsync();
    //    }
    //    return a;
    //}


    //public async Task<Assist> UpdateAsync(Assist entity, string id)
    //{
    //    Assist a = await helpContext.Assists.Include(aa => aa.AddressCodeNavigation)
    //                                        .FirstOrDefaultAsync(aa => aa.Id == id);
    //    if (a != null)
    //    {
    //        int addressCode = await addressRepo.AddOrUpdateAddressAsync(entity.AddressCodeNavigation);
    //        entity.AddressCode = addressCode;

    //        a.FirstName = entity.FirstName;
    //        a.LastName = entity.LastName;
    //        a.Email = entity.Email;
    //        a.NumOfChildren = entity.NumOfChildren;
    //        a.AddressCode = entity.AddressCode;
    //        a.PhoneNumber = entity.PhoneNumber;
    //        a.CategoryCode = entity.CategoryCode;
    //        a.AddressCodeNavigation = entity.AddressCodeNavigation;

    //        await helpContext.SaveChangesAsync();
    //    }
    //    return a;
    //}

    public async Task<Assist> UpdateAsync(Assist entity, string id)
    {
        Assist a = await helpContext.Assists.Include(aa => aa.AddressCodeNavigation)
                                            .FirstOrDefaultAsync(aa => aa.Id == id);
        if (a != null)
        {
            // Create a new address
            int newAddressCode = await addressRepo.AddAddressAsync(entity.AddressCodeNavigation);
            int oldAddressCode = a.AddressCode;
            entity.AddressCode = newAddressCode;

            // Update assist details
            a.FirstName = entity.FirstName;
            a.LastName = entity.LastName;
            a.Email = entity.Email;
            a.NumOfChildren = entity.NumOfChildren;
            a.AddressCode = entity.AddressCode;
            a.PhoneNumber = entity.PhoneNumber;
            a.CategoryCode = entity.CategoryCode;
            a.AddressCodeNavigation = entity.AddressCodeNavigation;

            // Save changes to the assist
            await helpContext.SaveChangesAsync();

            // Delete the old address if different from the new one
            if (oldAddressCode != newAddressCode)
            {
                Console.WriteLine($"Old address code: {oldAddressCode}, new address code: {newAddressCode}");
                await addressRepo.DeleteAddressAsync(oldAddressCode);
            }
        }
        return a;
    }


    #endregion
}

