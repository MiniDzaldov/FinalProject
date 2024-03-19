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

}

