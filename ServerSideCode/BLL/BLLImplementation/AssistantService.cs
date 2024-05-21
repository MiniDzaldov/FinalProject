
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
    
    public async Task<List<AssistantDTO>> GetAllAssistantDetailsAsync()
    {
        var assistantList = await assistantRepo.GetAllAsync();
        var assistantDetailList = new List<AssistantDTO>();
        foreach (var ad in assistantList)
        {
            assistantDetailList.Add(new AssistantDTO(ad.FirstName, ad.LastName, ad.PhoneNumber, ad.Email));
        }
        return assistantDetailList;
    }
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
    public async Task<AssistantDTO> UpdateAssistantDetailsAsync()
    {
        throw new NotImplementedException();
    }
}
