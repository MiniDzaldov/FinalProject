namespace BLL.BLLApi;

public interface IAssistantDetailsRepo
{
    public Task<List<AssistantDetails>> GetAllAssistantDetailsAsync();
}
