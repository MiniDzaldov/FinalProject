namespace ServerSideCode.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CategoriesController : ControllerBase
{
    ICategoryService categoryDetailsRepo;

    #region ctor
    public CategoriesController(BlManager blManager)
    {
        this.categoryDetailsRepo = blManager.CategoryDetailsRepo;
    }
    #endregion

   
    #region  [HttpGet]
    [HttpGet]
    public async Task<ActionResult<List<CategoryDTO>>> GetAllCategoryDetails()
    {
        return await categoryDetailsRepo.GetAllCategoryDetailsAsync();
    }
    #endregion

    #region[HttpGet("{code}")]
    [HttpGet ("{code}")]
    public async Task<ActionResult<CategoryDTO>> GetSingleCategoryDetails(int code)
    {
        try
        {
            return await categoryDetailsRepo.GetSinglecategoryDetailsAsync(code);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
    #endregion

    #region [HttpPost]
    [HttpPost]
    public async Task<ActionResult<CategoryDTO>> AddCategoryDetailsAsync(CategoryDTO categoryDTO)
    {
        return await categoryDetailsRepo.AddCategoryDetailsAsync(categoryDTO);
    }
    #endregion

    #region [HttpDelete("{code}")]
    [HttpDelete("{code}")]
    public async Task<ActionResult<CategoryDTO>> DeleteCategoryDetailsAsync(int code)
    {
        try
        {
            return await categoryDetailsRepo.DeleteCategoryDetailsAsync(code);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
    #endregion

}