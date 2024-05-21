namespace ServerSideCode.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AssistantsController : ControllerBase
{
    IAssistantService assistantDetailsRepo;
    public AssistantsController(BlManager blManager)
    {
        this.assistantDetailsRepo = blManager.AssistantDetailsRepo;
    }
    [HttpGet]
    public async Task<ActionResult<List<AssistantDTO>>> GetAllAssistantDetails()
    {
        return await assistantDetailsRepo.GetAllAssistantDetailsAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<AssistantDTO>> GetSingleAssistantDetails(string id)
    {
        try
        {
            return await assistantDetailsRepo.GetSingleAssistantDetailsAsync(id);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPost]
    public async Task<ActionResult<AssistantDTO>> AddAssistAsync(AssistantDTO assistant)
    {
        return await assistantDetailsRepo.AddAssistantDetailsAsync(assistant);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<AssistantDTO>> DeleteAssistantDetailsAsync(string id)
    {
        try
        {
            return await assistantDetailsRepo.DeleteAssistantDetailsAsync(id);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

}

