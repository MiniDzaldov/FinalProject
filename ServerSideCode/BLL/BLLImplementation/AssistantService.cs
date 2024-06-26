using DAL.DALImplementation;
using DAL.Models;

namespace BLL.BLLImplementation;

public class AssistantService : IAssistantService
{
    private readonly IAssistantRepo assistantRepo;
    private readonly IMapper mapper;
    private readonly IAddressRepo addressRepo;


    #region ctor
    public AssistantService(DalManager dalmanagerInstance, IMapper mapper)
    {
        this.assistantRepo = dalmanagerInstance.AssistantRepo;
        this.addressRepo = dalmanagerInstance.AddressRepo;
        this.mapper = mapper;
    }
    #endregion

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

    #region GetSingle
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
    #endregion

    // doesnt work
    #region Create
    public async Task<AssistantDTO> AddAssistantDetailsAsync(AssistantDTO asdto)
    {
        try
        {
            if (asdto == null)
            {
                throw new ArgumentNullException(nameof(asdto), "Assistant details are null");
            }

            Console.WriteLine("Assist details received:");
            Console.WriteLine($"FirstName: {asdto.FirstName}");
            Console.WriteLine($"LastName: {asdto.LastName}");
            if (asdto.AddressCodeNavigation != null)
            {
                Console.WriteLine($"City: {asdto.AddressCodeNavigation.City}");
                Console.WriteLine($"Street: {asdto.AddressCodeNavigation.Street}");
                Console.WriteLine($"NumOfBuilding: {asdto.AddressCodeNavigation.NumOfBuilding}");
                Console.WriteLine($"AptNumber: {asdto.AddressCodeNavigation.AptNumber}");
                Console.WriteLine($"ZipCode: {asdto.AddressCodeNavigation.ZipCode}");
            }
            else
            {
                Console.WriteLine("AddressCodeNavigation is null");
                throw new ArgumentNullException(nameof(asdto.AddressCodeNavigation), "Address details are null");
            }

            var address = new Adress
            {
                City = asdto.AddressCodeNavigation.City,
                Street = asdto.AddressCodeNavigation.Street,
                NumOfBuilding = asdto.AddressCodeNavigation.NumOfBuilding,
                AptNumber = asdto.AddressCodeNavigation.AptNumber,
                ZipCode = asdto.AddressCodeNavigation.ZipCode
            };

            int addressCode = await addressRepo.AddAddressAsync(address);

            var assistData = mapper.Map<Assistant>(asdto) ?? throw new ArgumentNullException("assist details are null");
            assistData.AddressCode = addressCode;

            var result = await assistantRepo.AddAsync(assistData);

            var assistDTOResult = mapper.Map<AssistantDTO>(result);
            assistDTOResult.AddressCodeNavigation = new AddressDTO
            {
                Code = addressCode,
                City = address.City,
                Street = address.Street,
                NumOfBuilding = address.NumOfBuilding,
                AptNumber = address.AptNumber,
                ZipCode = address.ZipCode
            };

            return assistDTOResult;
        }
        catch (ArgumentNullException ex)
        {
            // הוסף פה לוג או טיפול בשגיאה לפי הצורך
            throw ex;
        }
        catch (Exception ex)
        {
            // הוסף פה לוג או טיפול בשגיאה לפי הצורך
            throw ex;
        }
        //try
        //{
        //    var assistantData = mapper.Map<Assistant>(asdto) ?? throw new ArgumentNullException("assist details are null");
        //    var result = await assistantRepo.AddAsync(assistantData);
        //    return mapper.Map<AssistantDTO>(result);
        //}
        //catch (ArgumentNullException ex) { throw ex; }
        //catch (Exception) { throw; }
    }
    #endregion

    #region Delete
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
    #endregion

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
