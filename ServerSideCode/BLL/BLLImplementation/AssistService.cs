namespace BLL.BLLImplementation;


public class AssistService : IAssistService
{
    private readonly IAssistRepo assistRepo;
    private readonly IMapper mapper;
    private readonly IAddressRepo addressRepo;

    #region ctor
    public AssistService(DalManager dalManagerInstance, IMapper mapper)
    {
        this.assistRepo = dalManagerInstance.AssistRepo;
        this.addressRepo = dalManagerInstance.AddressRepo;
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
            Assist a = await assistRepo.GetSingleAsync(id) ?? throw new KeyNotFoundException("The assist with the specified ID was not found.");
            AssistDTO ass = mapper.Map<AssistDTO>(a);
            return ass;
        }
        catch (KeyNotFoundException ex)
        {
            throw ex; // Rethrow to propagate the exception message
        }
        catch (TimeoutException ex)
        {
            throw ex; // Rethrow to propagate the timeout exception
        }
        catch (Exception ex)
        {
            throw new Exception("An error occurred while fetching assist details.", ex); // Wrap and throw other exceptions
        }
    }

    #endregion

    #region Create
    
    public async Task<AssistDTO> AddAssistDetailsAsync(AssistDTO assist)
    {
        try
        {
            if (assist == null)
            {
                throw new ArgumentNullException(nameof(assist), "Assist details are null");
            }

            Console.WriteLine("Assist details received:");
            Console.WriteLine($"FirstName: {assist.FirstName}");
            Console.WriteLine($"LastName: {assist.LastName}");
            if (assist.AddressCodeNavigation != null)
            {
                Console.WriteLine($"City: {assist.AddressCodeNavigation.City}");
                Console.WriteLine($"Street: {assist.AddressCodeNavigation.Street}");
                Console.WriteLine($"NumOfBuilding: {assist.AddressCodeNavigation.NumOfBuilding}");
                Console.WriteLine($"AptNumber: {assist.AddressCodeNavigation.AptNumber}");
                Console.WriteLine($"ZipCode: {assist.AddressCodeNavigation.ZipCode}");
            }
            else
            {
                Console.WriteLine("AddressCodeNavigation is null");
                throw new ArgumentNullException(nameof(assist.AddressCodeNavigation), "Address details are null");
            }

            var address = new Adress
            {
                City = assist.AddressCodeNavigation.City,
                Street = assist.AddressCodeNavigation.Street,
                NumOfBuilding = assist.AddressCodeNavigation.NumOfBuilding,
                AptNumber = assist.AddressCodeNavigation.AptNumber,
                ZipCode = assist.AddressCodeNavigation.ZipCode
            };

            int addressCode = await addressRepo.AddAddressAsync(address);

            var assistData = mapper.Map<Assist>(assist) ?? throw new ArgumentNullException("assist details are null");
            assistData.AddressCode = addressCode;

            var result = await assistRepo.AddAsync(assistData);

            var assistDTOResult = mapper.Map<AssistDTO>(result);
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
