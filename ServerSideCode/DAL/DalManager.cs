namespace DAL;


public class DalManager
{
    public IAssistRepo AssistRepo {get;}
    public IAssistantRepo AssistantRepo {get;}
    public ICategoryRepo CategoryRepo {get;}

    public DalManager(string connection)
    {
        ServiceCollection services = new ServiceCollection();
        services.AddDbContext<HelpContext>(options => options.UseSqlServer(connection));
        services.AddScoped<IAssistRepo, AssistRepo>();
        services.AddScoped<IAssistantRepo, AssistantRepo>();
        services.AddScoped<ICategoryRepo, CategoryRepo>();

        ServiceProvider servicesProvider = services.BuildServiceProvider();
        AssistRepo = servicesProvider.GetRequiredService<IAssistRepo>();
        AssistantRepo = servicesProvider.GetRequiredService<IAssistantRepo>();
        CategoryRepo = servicesProvider.GetRequiredService<ICategoryRepo>();
    }
}
