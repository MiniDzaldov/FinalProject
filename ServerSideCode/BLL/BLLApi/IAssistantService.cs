﻿namespace BLL.BLLApi;

public interface IAssistantService
{
    public Task<List<AssistantDTO>> GetAllAssistantDetailsAsync();
    public Task<AssistantDTO> GetSingleAssistantDetailsAsync(string id);
    public Task<AssistantDTO> AddAssistantDetailsAsync(AssistantDTO asdto);
    public Task<AssistantDTO> UpdateAssistantDetailsAsync(AssistantDTO asdto, string id);
    public Task<AssistantDTO> DeleteAssistantDetailsAsync(string id);

}
