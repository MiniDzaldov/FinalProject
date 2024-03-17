namespace BLL.BLLApi;
public interface IAssistDetailsRepo
{
    public Task<List<AssistDetails>> GetAllAssistDetailsAsync();
    public Task<AssistDetails> GetSingleAssistDetailsAsync(string id);
    
}
