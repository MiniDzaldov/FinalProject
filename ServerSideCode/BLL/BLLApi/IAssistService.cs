using BL.BLApi;

namespace BLL.BLLApi;
public interface IAssistService
{
    public Task<List<AssistDTO>> GetAllAssistDetailsAsync();
    public Task<AssistDTO> GetSingleAssistDetailsAsync(string id);

    public Task<AssistDTO> AddAssistDetailsAsync(AssistDTO asdto);
    public Task<AssistDTO> UpdateAssistDetailsAsync();
    public Task<AssistDTO> DeleteAssistDetailsAsync(string id);

    
}
