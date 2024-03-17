namespace BLL.BLLImplementation;

public class CategoryDetailsRepo : ICategoryDetailsRepo
{
    ICategoryRepo categoryRepo;
    public CategoryDetailsRepo(DalManager dalManagerInstance)
    {
        this.categoryRepo = dalManagerInstance.CategoryRepo;
    }


    public async Task<List<CategoryDetails>> GetAllCategoryDetailsAsync()
    {
        var categoryList = await categoryRepo.GetAllAsync();
        var categoryDetailsList = new List<CategoryDetails>(); 
        foreach (var c in categoryList)
        {
            categoryDetailsList.Add(new CategoryDetails(c.Code, c.Type));
        }
        categoryDetailsList.Add(new CategoryDetails(1, "Cook"));
        categoryDetailsList.Add(new CategoryDetails(2, "Babysitting"));
        return categoryDetailsList;
    }

    public async Task<CategoryDetails> GetSinglecategoryDetailsAsync(int code)
    {
        var category = await categoryRepo.GetSingleAsync(code);
        if(category == null)
        {
            throw new Exception("This Category does not exist");
        }
        var categoryDetails = new CategoryDetails(category.Code, category.Type);
        return categoryDetails;
    }
}
