
namespace BLL.BLLImplementation;

public class AssistantService : IAssistantService
{
    IAssistantRepo assistantRepo;
    public AssistantService(DalManager dalmanagerInstance)
    {
        this.assistantRepo = dalmanagerInstance.AssistantRepo;
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
}
