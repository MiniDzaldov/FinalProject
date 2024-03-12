using BLL;
using BLL.BLLApi;
using BLL.BLLModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Metrics;

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
        catch(Exception ex)
        {
            return  BadRequest(ex.Message);
        }
    }
}

