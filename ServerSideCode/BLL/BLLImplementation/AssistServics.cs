namespace BLL.BLLImplementation;

public class AssistServics : IAssistService
{
    IAssistRepo assistRepo;
    IMapper mapper;

    #region ctor
    public AssistServics(DalManager dalManagerInstance, IMapper mapper)
    {
        this.assistRepo = dalManagerInstance.AssistRepo;
        this.mapper = mapper;
    }
    #endregion

    #region GetAll
    public async Task<List<AssistDTO>> GetAllAssistDetailsAsync()
    
    {
        try
        {
            List<AssistDTO> assistsBL = new();
            var assists = await assistRepo.GetAllAsync() ?? throw new ArgumentNullException("The action failed, please try again later");
            foreach (var assist in assists)
            {
                //AssistDTO a = ConvertionClass.SimpleAutoMapper<AssistDTO, Assist>(assist);
                AssistDTO a = mapper.Map<AssistDTO>(assist);
                assistsBL.Add(a);
            }
            return assistsBL;
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (TimeoutException ex) { throw ex; }
        catch (Exception) { throw; }
    }
    #endregion

    #region GetSingle
    public async Task<AssistDTO> GetSingleAssistDetailsAsync(string id)
    {
        try
        {
            Assist a = await assistRepo.GetSingleAsync(id) ?? throw new ArgumentNullException("The assist doesn't exist in our system");
            AssistDTO ass = mapper.Map<AssistDTO>(a);
            return ass;
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (TimeoutException ex) { throw ex; }
        catch (Exception) { throw; }

    }
    #endregion

    #region Create
    public async Task<AssistDTO> AddAssistDetailsAsync(AssistDTO assist)
    {
        try
        {
            var assistData = mapper.Map<Assist>(assist) ?? throw new ArgumentNullException("assist details are null");
            var result = await assistRepo.AddAsync(assistData);
            return mapper.Map<AssistDTO>(result);
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (Exception) { throw; }
    }
    #endregion

    #region Delete
    public async Task<AssistDTO> DeleteAssistDetailsAsync(string id)
    {
        try
        {
            Assist a = await assistRepo.DeleteAsync(id) ?? throw new ArgumentNullException("The assist doesn't exist in our system");
            AssistDTO dass = mapper.Map<AssistDTO>(a);
            return dass;
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (TimeoutException ex) { throw ex; }
        catch (Exception) { throw; }
    }
    #endregion

    #region Update

    public async Task<AssistDTO> UpdateAssistDetailsAsync(AssistDTO assdto, string id)
    {
        try
        {
            var assist = mapper.Map<Assist>(assdto) ?? throw new ArgumentNullException("assist details are null");
            var result = await assistRepo.UpdateAsync(assist, id);
            return mapper.Map<AssistDTO>(result);
        }
        catch (ArgumentNullException ex) { throw ex; }
        catch (Exception) { throw; }
    }
    #endregion

}
