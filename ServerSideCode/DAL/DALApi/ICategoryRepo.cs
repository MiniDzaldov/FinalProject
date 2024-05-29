namespace DAL.DALApi;

public interface ICategoryRepo
{
    Task<List<HelpCategory>> GetAllAsync();
    Task<HelpCategory> GetSingleAsync(int id);
    Task<HelpCategory> AddAsync(HelpCategory category);
    Task<HelpCategory> DeleteAsync(int id);
}
