namespace DAL;


public class DalManager
{
    public IAddressRepo AddressRepo { get; }
    public IAssistRepo AssistRepo {get;}
    public IAssistantRepo AssistantRepo {get;}
    public ICategoryRepo CategoryRepo {get;}

    public DalManager(string connection)
    {
        ServiceCollection services = new ServiceCollection();
        services.AddDbContext<HelpContext>(options => options.UseSqlServer(connection));
        services.AddScoped<IAddressRepo, AddressRepo>();
        services.AddScoped<IAssistRepo, AssistRepo>();
        services.AddScoped<IAssistantRepo, AssistantRepo>();
        services.AddScoped<ICategoryRepo, CategoryRepo>();
       

        ServiceProvider servicesProvider = services.BuildServiceProvider();
        AddressRepo = servicesProvider.GetRequiredService<IAddressRepo>();
        AssistRepo = servicesProvider.GetRequiredService<IAssistRepo>();
        AssistantRepo = servicesProvider.GetRequiredService<IAssistantRepo>();
        CategoryRepo = servicesProvider.GetRequiredService<ICategoryRepo>();
        
    }
}
