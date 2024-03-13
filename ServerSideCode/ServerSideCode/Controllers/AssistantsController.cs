using BLL;
using BLL.BLLApi;
using BLL.BLLModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServerSideCode.Controllers;

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

