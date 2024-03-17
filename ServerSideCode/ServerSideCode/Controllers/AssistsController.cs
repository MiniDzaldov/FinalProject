namespace ServerSideCode.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AssistsController : ControllerBase
{
    IAssistDetailsRepo assistDetailsRepo;
    public AssistsController(BlManager blManager)
    {
        this.assistDetailsRepo = blManager.AssistDetailsRepo;
    }

    [HttpGet]
    public async Task<ActionResult<List<AssistDetails>>> GetAllAssistsDetails()
    {
        return await assistDetailsRepo.GetAllAssistDetailsAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<AssistDetails>> GetSingleAssistDetails(string id)
    {
        try
        {
            return await assistDetailsRepo.GetSingleAssistDetailsAsync(id);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
/*    [HttpPost]
*/    /*public async Task<ActionResult<BLAssist>> AddAssistAsync(BLAssist assist)
    {
        return await 
    } */


}
