namespace BLL.BLLApi;
public interface IAssistService
{
    public Task<List<AssistDTO>> GetAllAssistDetailsAsync();
    public Task<AssistDTO> GetSingleAssistDetailsAsync(string id);
    
}
