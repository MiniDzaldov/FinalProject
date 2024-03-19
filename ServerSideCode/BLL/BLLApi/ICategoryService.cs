namespace BLL.BLLApi;

public interface ICategoryService
{
    public Task<List<CategoryDTO>> GetAllCategoryDetailsAsync();
    public Task<CategoryDTO> GetSinglecategoryDetailsAsync(int code);

}
