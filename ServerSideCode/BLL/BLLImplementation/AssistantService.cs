
namespace BLL.BLLImplementation;

public class AssistantService : IAssistantService
{
    IAssistantRepo assistantRepo;
    IMapper mapper;
    public AssistantService(DalManager dalmanagerInstance, IMapper mapper)
    {
        this.assistantRepo = dalmanagerInstance.AssistantRepo;
        this.mapper = mapper;
    }

    public async Task<List<AssistantDTO>> GetAllAssistantDetailsAsync()
    {
        var assistantList = await assistantRepo.GetAllAsync();
        var assistantDetailList = new List<AssistantDTO>();
        foreach (var ad in assistantList)
        {
            assistantDetailList.Add(new AssistantDTO(ad.FirstName, ad.LastName, ad.PhoneNumber, ad.Email));
        }
        return assistantDetailList;
    }
}
