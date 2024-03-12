using DAL.DALApi;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.DALImplementation;

public class CategoryRepo : ICategoryRepo
{
    HelpContext helpContext;
    public CategoryRepo(HelpContext helpContext)
    {
        this.helpContext = helpContext;
    }

    public async Task<List<HelpCategory>> GetAllAsync()
    {
        return await helpContext.HelpCategories.ToListAsync();
    }

    public async Task<HelpCategory> GetSingleAsync(int id)
    {
        return await helpContext.HelpCategories.FirstOrDefaultAsync(ga => ga.Code == id);
    }

    public async Task<HelpCategory> AddAsync(HelpCategory category)
    {
        helpContext.HelpCategories.Add(category);
        await helpContext.SaveChangesAsync();
        return category;
    }

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

  
}