namespace DAL.DALImplementation;

public class AssistRepo : IAssistRepo
{
    HelpContext helpContext;
    public AssistRepo(HelpContext helpContext)
    {
        this.helpContext = helpContext;
    }

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


    //doesn't work 😒
    public async Task<Assist> AddAsync(Assist entity)
    {
        helpContext.Assists.Add(entity);
        await helpContext.SaveChangesAsync();
        return entity;
    }

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
    public async Task<Assist> UpdateAsync(Assist entity, string id)
    {
        Assist a = helpContext.Assists.FirstOrDefault(a => a.Id == id);
        if (a != null)
        {
            a.FirstName = entity.FirstName;
            a.LastName = entity.LastName;
            a.Email = entity.Email;
            a.NumOfChildren = entity.NumOfChildren;
            a.AddressCode = entity.AddressCode;
            a.PhoneNumber = entity.PhoneNumber;
            a.CategoryCode = entity.CategoryCode;
            await helpContext.SaveChangesAsync();
        }
        return a;
    }
    #endregion
}

