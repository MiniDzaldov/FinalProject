namespace DAL.DALApi;

public interface IRepository<T>
{
    Task<List<T>> GetAllAsync();
    Task<T> GetSingleAsync(string id);
    Task<T> AddAsync(T entity);
    Task<T> UpdateAsync(T entity, string id);
    Task<T> DeleteAsync(string id);
}