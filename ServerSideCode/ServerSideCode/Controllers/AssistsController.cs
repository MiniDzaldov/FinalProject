using BLL.BLLImplementation;

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
    /*  [HttpGet("{id}")]
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
      }*/

    [HttpGet("{id}")]
    public async Task<ActionResult<AssistDTO>> GetSingleAssistDetails(string id)
    {
        try
        {
            // נוודא שה-ID הוא תקין (לדוגמה, באורך 9 ספרות)
            if (string.IsNullOrEmpty(id) || id.Length != 9 || !id.All(char.IsDigit))
            {
                return BadRequest("Invalid ID format");
            }

            var assistDetails = await assistDetailsRepo.GetSingleAssistDetailsAsync(id);
            //if (assistDetails == null)
            //{
            //    return NotFound("ID not found");
            //}
            return Ok(assistDetails);
        }
        catch (Exception ex)
        {
            return NotFound(ex.Message);
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
        try
        {
            var result = await assistDetailsRepo.UpdateAssistDetailsAsync(assist, id);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
        //return await assistDetailsRepo.UpdateAssistDetailsAsync(assist, id);
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
