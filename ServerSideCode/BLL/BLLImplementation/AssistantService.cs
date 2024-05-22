
using DAL.DALApi;
using DAL.DALImplementation;
using DAL.Models;

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

    #region GetAll
    public async Task<List<AssistantDTO>> GetAllAssistantDetailsAsync()
    {
        try
        {
            List<AssistantDTO> assistantBL = new();
            var assistants = await assistantRepo.GetAllAsync() ?? throw new ArgumentNullException("The action failed, please try again later");
            foreach (var assistant in assistants)
            {
                //AssistDTO a = ConvertionClass.SimpleAutoMapper<AssistDTO, Assist>(assist);
                AssistantDTO a = mapper.Map<AssistantDTO>(assistant);
                assistantBL.Add(a);
            }
            return assistantBL;
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (TimeoutException ex) { throw ex; }
        catch (Exception) { throw; }
    }
    #endregion

    public async Task<AssistantDTO> GetSingleAssistantDetailsAsync(string id)
    {
        try
        {
            Assistant a = await assistantRepo.GetSingleAsync(id) ?? throw new ArgumentNullException("The assist doesn't exist in our system");
            AssistantDTO assistant = mapper.Map<AssistantDTO>(a);
            return assistant;
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (TimeoutException ex) { throw ex; }
        catch (Exception) { throw; }
    }

    // doesnt work
    public async Task<AssistantDTO> AddAssistantDetailsAsync(AssistantDTO asdto)
    {
        try
        {
            var assistantData = mapper.Map<Assistant>(asdto) ?? throw new ArgumentNullException("assist details are null");
            var result = await assistantRepo.AddAsync(assistantData);
            return mapper.Map<AssistantDTO>(result);
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (Exception) { throw; }
    }

    public async Task<AssistantDTO> DeleteAssistantDetailsAsync(string id)
    {
        try
        {
            Assistant a = await assistantRepo.DeleteAsync(id) ?? throw new ArgumentNullException("The assistant doesn't exist in our system");
            AssistantDTO assistant = mapper.Map<AssistantDTO>(a);
            return assistant;
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (TimeoutException ex) { throw ex; }
        catch (Exception) { throw; }
    }

    #region Update
    public async Task<AssistantDTO> UpdateAssistantDetailsAsync(AssistantDTO assdto, string id)
    {
        try
        {
            var assistant = mapper.Map<Assistant>(assdto) ?? throw new ArgumentNullException("assistant details are null");
            var result = await assistantRepo.UpdateAsync(assistant, id);
            return mapper.Map<AssistantDTO>(result);
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (Exception) { throw; }
    }
    #endregion
}
