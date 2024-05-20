using AutoMapper;
using Microsoft.Extensions.Logging;
using System.Diagnostics;

namespace BLL.BLLImplementation;

public class AssistServics : IAssistService
{
    IAssistRepo assistRepo;
    IMapper mapper;
    public AssistServics(DalManager dalManagerInstance, IMapper mapper)
    {
        this.assistRepo = dalManagerInstance.AssistRepo;
        this.mapper = mapper;
    }

    public async Task<List<AssistDTO>> GetAllAssistDetailsAsync()
    {
        try
        {
            List<AssistDTO> assistsBL = new();
            var assists = await assistRepo.GetAllAsync() ?? throw new ArgumentNullException("The action failed, please try again later");
            foreach (var assist in assists)
            {
                AssistDTO a = ConvertionClass.SimpleAutoMapper<AssistDTO, Assist>(assist);
                assistsBL.Add(a);
            }
            return assistsBL;
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (TimeoutException ex) { throw ex; }
        catch (Exception) { throw; }
    }

    public async Task<AssistDTO> GetSingleAssistDetailsAsync(string id)
    {
        try
        {
            Assist a = await assistRepo.GetSingleAsync(id);
            if (a == null)
                throw new ArgumentNullException("The assist doesn't exist in our system");
            AssistDTO ass = mapper.Map<Assist, AssistDTO>(a);
            return ass;
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (TimeoutException ex) { throw ex; }
        catch (Exception) { throw; }

    }
    public async Task<AssistDTO> AddAssitantDetailsAsync(AssistDTO assist)
    {
        try
        {
            var assistData = mapper.Map<AssistDTO, Assist>(assist) ?? throw new ArgumentNullException("assist details are null");
            var result = await assistRepo.AddAsync(assistData);
            return mapper.Map<Assist, AssistDTO>(result);
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (Exception) { throw; }
    }

}
