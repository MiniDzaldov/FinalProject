namespace BLL.BLLModels;

public class AssistDTO
{
    public string Id { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public int? NumOfChildren { get; set; }

    public string PhoneNumber { get; set; }

    public string Email { get; set; }

    public int AddressCode { get; set; }

    public int CategoryCode { get; set; }

    public virtual AddressDTO AddressCodeNavigation { get; set; }

    public virtual CategoryDTO CategoryCodeNavigation { get; set; }
    public AssistDTO()
    {

    }
}
