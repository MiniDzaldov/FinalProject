namespace DAL.DALImplementation;

public class AssistantRepo : IAssistantRepo

{
    HelpContext helpContext;
    public AssistantRepo(HelpContext helpContext)
    {
        this.helpContext = helpContext;
    }

    public async Task<List<Assistant>> GetAllAsync()
    {
        var assistant = helpContext.Assistants.Include(x => x.AddressCodeNavigation).Include(x => x.CategoryCodeNavigation);
        return await assistant.ToListAsync();
    }

    public async Task<Assistant> GetSingleAsync(string id)
    {
        Assistant assistant = await helpContext.Assistants.Include(a => a.AddressCodeNavigation)
           .Include(a => a.CategoryCodeNavigation).FirstOrDefaultAsync(ga => ga.Id == id);
        return assistant;
    }

    public async Task<Assistant> AddAsync(Assistant entity)
    {
        helpContext.Assistants.Add(entity);
        await helpContext.SaveChangesAsync();
        return entity;
    }

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

    public async Task<Assistant> UpdateAsync(Assistant entity, string id)
    {
        Assistant a = helpContext.Assistants.FirstOrDefault(a => a.Id == id);
        if (a != null)
        {
            a.FirstName = entity.FirstName;
            a.LastName = entity.LastName;
            a.Email = entity.Email;
            a.AddressCode = entity.AddressCode;
            a.PhoneNumber = entity.PhoneNumber;
            a.CategoryCode = entity.CategoryCode;
            await helpContext.SaveChangesAsync();
        }
        return a;
    }

}
