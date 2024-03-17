namespace BLL.BLLApi;

public interface ICategoryDetailsRepo
{
    public Task<List<CategoryDetails>> GetAllCategoryDetailsAsync();
    public Task<CategoryDetails> GetSinglecategoryDetailsAsync(int code);

}
