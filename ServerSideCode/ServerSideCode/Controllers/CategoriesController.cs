namespace ServerSideCode.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        ICategoryDetailsRepo categoryDetailsRepo;
        public CategoriesController(BlManager blManager)
        {
            this.categoryDetailsRepo = blManager.CategoryDetailsRepo;
        }
        [HttpGet]
        public async Task<ActionResult<List<CategoryDetails>>> GetAllCategoryDetails()
        {
            return await categoryDetailsRepo.GetAllCategoryDetailsAsync();
        }
        [HttpGet ("{code}")]
        public async Task<ActionResult<CategoryDetails>> GetSingleCategoryDetails(int code)
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


    }
}

