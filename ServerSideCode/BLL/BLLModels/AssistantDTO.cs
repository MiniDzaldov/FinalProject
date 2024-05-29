namespace BLL.BLLModels;

public class AssistantDTO
{
    public string Id { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public int Age { get; set; }

    public string PhoneNumber { get; set; }

    public string Email { get; set; }

    public int AddressCode { get; set; }

    public int CategoryCode { get; set; }

    public virtual AddressDTO AddressCodeNavigation { get; set; }

    public virtual CategoryDTO CategoryCodeNavigation { get; set; }
    public AssistantDTO()
    {

    }

    //public AssistantDTO(string firstName, string lastName, string phoneNumber, string email, int addressCode, int categoryCode, int age)
    //{
    //    this.FirstName = firstName;
    //    this.LastName = lastName;
    //    this.PhoneNumber = phoneNumber;
    //    this.Email = email;
    //    this.AddressCode = addressCode;
    //    this.CategoryCode = categoryCode;
    //    this.Age = age; 
    //}
    //public AssistantDTO(string firstName, string lastName, string phoneNumber, string email)
    //{
    //    this.FirstName = firstName;
    //    this.LastName = lastName;
    //    this.PhoneNumber = phoneNumber;
    //    this.Email = email; 
    //}

}

