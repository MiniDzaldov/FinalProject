namespace ServerSideCode.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CategoriesController : ControllerBase
{
    ICategoryService categoryDetailsRepo;
    public CategoriesController(BlManager blManager)
    {
        this.categoryDetailsRepo = blManager.CategoryDetailsRepo;
    }

    [HttpGet]
    public async Task<ActionResult<List<CategoryDTO>>> GetAllCategoryDetails()
    {
        return await categoryDetailsRepo.GetAllCategoryDetailsAsync();
    }

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

    [HttpPost]
    public async Task<ActionResult<CategoryDTO>> AddCategoryDetailsAsync(CategoryDTO categoryDTO)
    {
        return await categoryDetailsRepo.AddCategoryDetailsAsync(categoryDTO);
    }
}