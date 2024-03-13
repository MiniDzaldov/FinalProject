using BLL.BLLApi;
using BLL.BLLImplementation;
using DAL;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL;

public class BlManager
{
    public IAssistDetailsRepo AssistDetailsRepo { get; }
    public IAssistantDetailsRepo AssistantDetailsRepo { get; }
    public ICategoryDetailsRepo CategoryDetailsRepo { get; }

    public BlManager()
    {
        
        ServiceCollection services = new ServiceCollection();
        services.AddScoped<DalManager>();
        services.AddScoped<IAssistDetailsRepo, AssistDetailsRepo>();
        services.AddScoped<IAssistantDetailsRepo, AssistantDetailsRepo>();
        services.AddScoped<ICategoryDetailsRepo, CategoryDetailsRepo>();

        ServiceProvider servicesProvider = services.BuildServiceProvider();
        AssistDetailsRepo = servicesProvider.GetRequiredService<IAssistDetailsRepo>();
        AssistantDetailsRepo = servicesProvider.GetRequiredService<IAssistantDetailsRepo>();
        CategoryDetailsRepo = servicesProvider.GetRequiredService<ICategoryDetailsRepo>();

    }
}
