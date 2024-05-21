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
        //CreateMap<CategoryDTO, HelpCategory>()
        //    .ForMember(ctgr => ctgr.Assists, opt => opt.Ignore())
        //    .ForMember(ctgr => ctgr.Assistants, opt => opt.Ignore());
        CreateMap<HelpCategory, CategoryDTO>().ReverseMap();
        //CreateMap<AddressDTO, Adress>()
        //    .ForMember(addrs => addrs.Assists, opt => opt.Ignore())
        //    .ForMember(addrs => addrs.Assistants, opt => opt.Ignore());
        CreateMap<Adress, AddressDTO>().ReverseMap();

    }
}
