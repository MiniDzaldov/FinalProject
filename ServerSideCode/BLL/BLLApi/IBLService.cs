
namespace BL.BLApi
{
    public interface IBLService<T>
    {
        public Task<List<T>> GetAllAsync();
        public Task<T> CreateAsync(T data);
        public Task<T> UpdateAsync(T data);
        public Task<T> DeleteAsync(params string[] list);

    }
}
