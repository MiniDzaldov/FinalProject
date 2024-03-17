namespace ServerSideCode.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AssistantsController : ControllerBase
{
    IAssistantDetailsRepo assistantDetailsRepo;
    public AssistantsController(BlManager blManager)
    {
        this.assistantDetailsRepo = blManager.AssistantDetailsRepo;
    }
    [HttpGet]
    public async Task<ActionResult<List<AssistantDetails>>> GetAllAssistantDetails()
    {
        return await assistantDetailsRepo.GetAllAssistantDetailsAsync();
    }

}

