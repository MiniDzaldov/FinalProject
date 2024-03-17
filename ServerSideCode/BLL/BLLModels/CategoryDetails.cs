namespace BLL.BLLModels;

public class CategoryDetails
{
    public int Code { get; set; }
    public string Type { get; set; }
    public CategoryDetails(int code, string type)
    {
        this.Code = code;
        this.Type = type;
    }

}
