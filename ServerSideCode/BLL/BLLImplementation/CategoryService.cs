using DAL.DALApi;
using DAL.DALImplementation;
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
        try
        {
            List<CategoryDTO> categoriesBL = new();
            var categories = await categoryRepo.GetAllAsync() ?? throw new ArgumentNullException("The action failed, please try again later");
            foreach (var category in categories)
            {
                CategoryDTO a = mapper.Map<CategoryDTO>(category);
                categoriesBL.Add(a);
            }
            return categoriesBL;
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (TimeoutException ex) { throw ex; }
        catch (Exception) { throw; }
    }
    #endregion

    #region GetSingle
    public async Task<CategoryDTO> GetSinglecategoryDetailsAsync(int code)
    {
        try
        {
            HelpCategory c = await categoryRepo.GetSingleAsync(code) ?? throw new ArgumentNullException("The category doesn't exist in our system");
            CategoryDTO category = mapper.Map<CategoryDTO>(c);
            return category;
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (TimeoutException ex) { throw ex; }
        catch (Exception) { throw; }
    }
    #endregion

    #region Create 
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

    #region Delete 
    public async Task<CategoryDTO> DeleteCategoryDetailsAsync(int code)
    {
        try
        {
            HelpCategory hc = await categoryRepo.DeleteAsync(code) ?? throw new ArgumentNullException("The category doesn't exist in our system");
            CategoryDTO hcdto = mapper.Map<CategoryDTO>(hc);
            return hcdto;
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (TimeoutException ex) { throw ex; }
        catch (Exception) { throw; }
    }
    #endregion
}
