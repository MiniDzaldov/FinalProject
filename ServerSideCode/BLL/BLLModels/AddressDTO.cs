namespace BLL.BLLModels;

public class AddressDTO
{
    public int Code { get; set; }

    public string City { get; set; }

    public string Street { get; set; }

    public int NumOfBuilding { get; set; }

    public int AptNumber { get; set; }

    public int ZipCode { get; set; }
}