namespace BLL.BLLImplementation;

public class AssistServics : IAssistService
{
    IAssistRepo assistRepo;
    public AssistServics(DalManager dalManagerInstance)
    {
        this.assistRepo = dalManagerInstance.AssistRepo;
    }

    public async Task<List<AssistDTO>> GetAllAssistDetailsAsync()
    {
        var assistList = await assistRepo.GetAllAsync();
        var assistDetailList = new List<AssistDTO>();
        foreach (var ad in assistList)
        {
            assistDetailList.Add(new AssistDTO(ad.FirstName , ad.LastName, ad.PhoneNumber, ad.Email));
        }
        assistDetailList.Add(new AssistDTO("sari", "cohen","4576", "a@b"));
        return assistDetailList;
    }

    public async Task<AssistDTO> GetSingleAssistDetailsAsync(string id)
    {
        var assist = await assistRepo.GetSingleAsync(id);
        if (assist == null)
        {
            throw new Exception("this id does not exist");
        }
        var assistDetails = new AssistDTO(assist.FirstName + " " + assist.LastName, assist.PhoneNumber, assist.Email, assist.CategoryCodeNavigation.Type);
        return assistDetails;

    }
}
