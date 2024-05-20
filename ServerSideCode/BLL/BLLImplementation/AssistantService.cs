
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
        foreach(var ad in assistantList)
        {
            assistantDetailList.Add(new AssistantDTO(ad.FirstName , ad.LastName, ad.PhoneNumber, ad.Email));
        }
        assistantDetailList.Add(new AssistantDTO("Chana", "Levi", "0548744154", "c@gmail.com"));
        return assistantDetailList;
    }
<<<<<<< HEAD
=======

  



>>>>>>> bd5f45e4ec1aea002ac1ad1a5ba226ebb222d405
}
