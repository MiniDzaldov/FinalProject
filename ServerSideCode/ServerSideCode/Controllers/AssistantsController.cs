namespace ServerSideCode.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AssistantsController : ControllerBase
{
    IAssistantService assistantDetailsRepo;

    #region ctor
    public AssistantsController(BlManager blManager)
    {
        this.assistantDetailsRepo = blManager.AssistantDetailsRepo;
    }
    #endregion

    #region [HttpGet]
    [HttpGet]
    public async Task<ActionResult<List<AssistantDTO>>> GetAllAssistantDetails()
    {
        return await assistantDetailsRepo.GetAllAssistantDetailsAsync();
    }
    #endregion

    #region [HttpGet("{id}")]

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
    #endregion

    #region [HttpPost]
    [HttpPost]
    public async Task<ActionResult<AssistantDTO>> AddAssistAsync(AssistantDTO assistant)
    {
        return await assistantDetailsRepo.AddAssistantDetailsAsync(assistant);
    }
    #endregion

    #region  [HttpPut("{id}")]
    [HttpPut("{id}")]
    public async Task<ActionResult<AssistantDTO>> UpdateAssistantDetailsAsync(AssistantDTO assistant, string id)
    {
        return await assistantDetailsRepo.UpdateAssistantDetailsAsync(assistant, id);
    }
    #endregion

    #region [HttpDelete("{id}")]
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
    #endregion
}

