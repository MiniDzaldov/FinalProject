namespace BLL;

public class BlManager
{
    public IAssistService AssistDetailsRepo { get; }
    public IAssistantService AssistantDetailsRepo { get; }
    public ICategoryService CategoryDetailsRepo { get; }
    public BlManager()
    {
        ServiceCollection services = new ServiceCollection();
        services.AddScoped<DalManager>();
        services.AddScoped<IAssistService, AssistServics>();
        services.AddScoped<IAssistantService, AssistantService>();
        services.AddScoped<ICategoryService, CategoryService>();
        //collection.AddAutoMapper(typeof(UserProfile));
        services.AddAutoMapper(typeof(MapperProfile));

        ServiceProvider servicesProvider = services.BuildServiceProvider();
        AssistDetailsRepo = servicesProvider.GetRequiredService<IAssistService>();
        AssistantDetailsRepo = servicesProvider.GetRequiredService<IAssistantService>();
        CategoryDetailsRepo = servicesProvider.GetRequiredService<ICategoryService>();
        
    }
}
