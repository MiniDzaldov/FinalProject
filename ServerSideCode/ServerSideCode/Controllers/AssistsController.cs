using BLL.BLLApi;
using BLL.BLLModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Metrics;

namespace ServerSideCode.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AssistsController : ControllerBase
{
    IAssistDetailsRepo assistDetailsRepo;
    public AssistsController(IAssistDetailsRepo assistDetailsRepo)
    {
        this.assistDetailsRepo = assistDetailsRepo;    
    }
    [HttpGet]
    public async Task<ActionResult<List<AssistDetails>>> GetAllCountry()
    {
        return await assistDetailsRepo.GetAllAssistDetailsAsync();
    }
}
