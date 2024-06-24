namespace BLL;

public class BlManager
{
    public IAssistService AssistDetailsRepo { get; }
    public IAssistantService AssistantDetailsRepo { get; }
    public ICategoryService CategoryDetailsRepo { get; }
    public BlManager(string connection)
    {
        ServiceCollection services = new ServiceCollection();
        services.AddScoped<DalManager>(d => new DalManager(connection));
        services.AddScoped<IAssistService, AssistService>();
        services.AddScoped<IAssistantService, AssistantService>();
        services.AddScoped<ICategoryService, CategoryService>();
        services.AddAutoMapper(typeof(MapperProfile));

        ServiceProvider servicesProvider = services.BuildServiceProvider();
        AssistDetailsRepo = servicesProvider.GetRequiredService<IAssistService>();
        AssistantDetailsRepo = servicesProvider.GetRequiredService<IAssistantService>();
        CategoryDetailsRepo = servicesProvider.GetRequiredService<ICategoryService>();
        
    }
}
