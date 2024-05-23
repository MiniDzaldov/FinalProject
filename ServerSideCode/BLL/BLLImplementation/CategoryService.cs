using DAL.Models;

namespace BLL.BLLImplementation;

public class CategoryService : ICategoryService
{
    ICategoryRepo categoryRepo;
    IMapper mapper;

    #region ctor
    public CategoryService(DalManager dalManagerInstance, IMapper mapper)
    {
        this.categoryRepo = dalManagerInstance.CategoryRepo;
        this.mapper = mapper;
    }
    #endregion  

    #region GatAlll
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
    #endregion

    #region GetSingle
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
    #endregion

    #region Create - doesn't work
    public async Task<CategoryDTO> AddCategoryDetailsAsync(CategoryDTO category)
    {
        try
        {
            HelpCategory categoryData = mapper.Map<HelpCategory>(category) ?? throw new ArgumentNullException("category details are null");
            var result = await categoryRepo.AddAsync(categoryData);
            return mapper.Map<CategoryDTO>(result);
        }

        catch (ArgumentNullException ex) { throw ex; }
        catch (Exception) { throw; }
    }
    #endregion

    #region Delete - doesn't work
    public async Task<CategoryDTO> DeleteCategoryDetailsAsync(int code)
    {
        try
        {
            HelpCategory hc = await categoryRepo.DeleteAsync(code) ?? throw new ArgumentNullException("The category doesn't exist in our system");
            CategoryDTO category = mapper.Map<CategoryDTO>(hc);
            //return category;
            return null;
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (TimeoutException ex) { throw ex; }
        catch (Exception) { throw; }
    }
    #endregion



  

}
