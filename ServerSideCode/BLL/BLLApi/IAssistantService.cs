namespace BLL.BLLApi;

public interface IAssistantService
{
    public Task<List<AssistantDTO>> GetAllAssistantDetailsAsync();
}
