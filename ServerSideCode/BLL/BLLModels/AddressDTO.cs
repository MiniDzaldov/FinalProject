namespace BLL.BLLModels;

public class AddressDTO
{
    public int Code { get; set; }

    public string City { get; set; }

    public string Street { get; set; }

    public int NumOfBuilding { get; set; }

    public int AptNumber { get; set; }

    public int ZipCode { get; set; }

    [JsonIgnore]
    public virtual ICollection<Assistant> Assistants { get; set; } = new List<Assistant>();

    [JsonIgnore]
    public virtual ICollection<Assist> Assists { get; set; } = new List<Assist>();

    public AddressDTO()
    {

    }

    public AddressDTO(int code, string city, string street, int numOfBuilding, int aptNumber, int zipCode/*, ICollection<Assistant> assistants, ICollection<Assist> assists*/)
    {
        Code = code;
        City = city;
        Street = street;
        NumOfBuilding = numOfBuilding;
        AptNumber = aptNumber;
        ZipCode = zipCode;
    }
    
    /*public AddressDTO(int code, string type)
    {
        this.Code = code;
        this.Type = type;
    }*/
}