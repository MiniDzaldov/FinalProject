namespace ServerSideCode.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AssistsController : ControllerBase
{
    IAssistService assistDetailsRepo;

    #region ctor
    public AssistsController(BlManager blManager)
    {
        this.assistDetailsRepo = blManager.AssistDetailsRepo;
    }
    #endregion

    #region [HttpGet]
    [HttpGet]
    public async Task<ActionResult<List<AssistDTO>>> GetAllAssistsDetails()
    {
        return await assistDetailsRepo.GetAllAssistDetailsAsync();
    }
    #endregion

    #region [HttpGet("{id}")]
    [HttpGet("{id}")]
    public async Task<ActionResult<AssistDTO>> GetSingleAssistDetails(string id)
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
    #endregion

    #region [HttpPost]
    [HttpPost]
    public async Task<ActionResult<AssistDTO>> AddAssistAsync(AssistDTO assist)
    {
        return await assistDetailsRepo.AddAssistDetailsAsync(assist);
    }
    #endregion

    #region  [HttpPut("{id}")]
    [HttpPut("{id}")]
    public async Task<ActionResult<AssistDTO>> UpdateAssistDetailsAsync(AssistDTO assist, string id)
    {
        return await assistDetailsRepo.UpdateAssistDetailsAsync(assist, id);
    }
    #endregion

    #region [HttpDelete("{id}")]
    [HttpDelete("{id}")]
    public async Task<ActionResult<AssistDTO>> DeleteAssistDetailsAsync(string id)
    {
        try
        {
            return await assistDetailsRepo.DeleteAssistDetailsAsync(id);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
    #endregion
}
