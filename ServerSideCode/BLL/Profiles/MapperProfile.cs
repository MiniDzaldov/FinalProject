namespace BLL.Profiles;

public class MapperProfile : Profile
{
    ///<summary>
    ///AutoMapper functions to convert all objects from DTO-objects to DAL-objects and reverse
    ///</summary>
    public MapperProfile()
    {
        CreateMap<Assist, AssistDTO>().ReverseMap();
        CreateMap<Assistant, AssistantDTO>().ReverseMap();
        CreateMap<HelpCategory, CategoryDTO>().ReverseMap();
        CreateMap<Adress, AddressDTO>().ReverseMap();
    }
}
