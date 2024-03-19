namespace BLL.BLLImplementation;

public class CategoryService : ICategoryService
{
    ICategoryRepo categoryRepo;
    public CategoryService(DalManager dalManagerInstance)
    {
        this.categoryRepo = dalManagerInstance.CategoryRepo;
    }


    public async Task<List<CategoryDTO>> GetAllCategoryDetailsAsync()
    {
        var categoryList = await categoryRepo.GetAllAsync();
        var categoryDetailsList = new List<CategoryDTO>(); 
        foreach (var c in categoryList)
        {
            categoryDetailsList.Add(new CategoryDTO(c.Code, c.Type));
        }
        categoryDetailsList.Add(new CategoryDTO(1, "Cook"));
        categoryDetailsList.Add(new CategoryDTO(2, "Babysitting"));
        return categoryDetailsList;
    }

    public async Task<CategoryDTO> GetSinglecategoryDetailsAsync(int code)
    {
        var category = await categoryRepo.GetSingleAsync(code);
        if(category == null)
        {
            throw new Exception("This Category does not exist");
        }
        var categoryDetails = new CategoryDTO(category.Code, category.Type);
        return categoryDetails;
    }
}
