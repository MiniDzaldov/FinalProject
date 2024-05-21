using AutoMapper;
using DAL.DALApi;
using DAL.DALImplementation;

namespace BLL.BLLImplementation;

public class CategoryService : ICategoryService
{
    ICategoryRepo categoryRepo;
    IMapper mapper;
    public CategoryService(DalManager dalManagerInstance)
    {
        this.categoryRepo = dalManagerInstance.CategoryRepo;
    }

    public Task<CategoryDTO> AddCategoryDetailsAsync(CategoryDTO category)
    {
        throw new NotImplementedException();
    }

    public async Task<List<CategoryDTO>> GetAllCategoryDetailsAsync()
    {
        var categoryList = await categoryRepo.GetAllAsync();
        var categoryDetailsList = new List<CategoryDTO>(); 
        foreach (var c in categoryList)
        {
            categoryDetailsList.Add(new CategoryDTO(c.Code, c.Type));
        }
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
    public async Task<CategoryDTO> DeleteCategoryDetailsAsync(int code)
    {
        try
        {
            HelpCategory hc = await categoryRepo.DeleteAsync(code) ?? throw new ArgumentNullException("The category doesn't exist in our system");
            CategoryDTO category = mapper.Map<CategoryDTO>(hc);
            return category;
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (TimeoutException ex) { throw ex; }
        catch (Exception) { throw; }
    }
}
