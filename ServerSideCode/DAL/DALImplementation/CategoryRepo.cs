namespace DAL.DALImplementation;

public class CategoryRepo : ICategoryRepo
{
    HelpContext helpContext;

    #region ctor
    public CategoryRepo(HelpContext helpContext)
    {
        this.helpContext = helpContext;
    }
    #endregion

    #region GetAll
    public async Task<List<HelpCategory>> GetAllAsync()
    {
        return await helpContext.HelpCategories.ToListAsync();
    }
    #endregion

    #region GetSingle
    public async Task<HelpCategory> GetSingleAsync(int id)
    {
        return await helpContext.HelpCategories.FirstOrDefaultAsync(ga => ga.Code == id);
    }
    #endregion

    #region Create
    public async Task<HelpCategory> AddAsync(HelpCategory category)
    {
        helpContext.HelpCategories.Add(category);
        await helpContext.SaveChangesAsync();
        return category;
    }
    #endregion

    #region Delete
    public async Task<HelpCategory> DeleteAsync(int id)
    {
        HelpCategory removeCategory = helpContext.HelpCategories.FirstOrDefault(ra => ra.Code == id);
        if (removeCategory != null)
        {
            helpContext.HelpCategories.Remove(removeCategory);
            await helpContext.SaveChangesAsync();
        }
        return removeCategory;
    }
    #endregion

}