using BLL;
using BLL.BLLApi;
using BLL.BLLImplementation;
using BLL.BLLModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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

