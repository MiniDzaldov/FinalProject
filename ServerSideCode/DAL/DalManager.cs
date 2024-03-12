using DAL.DALApi;
using DAL.DALImplementation;
using DAL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL;

public class DalManager
{
    public IAssistRepo AssistRepo {get;}
    public IAssistantRepo AssistantRepo {get;}
    public ICategoryRepo CategoryRepo {get;}

    public DalManager()
    {
        ServiceCollection services = new ServiceCollection();
        services.AddDbContext<HelpContext>();
        services.AddScoped<IAssistRepo, AssistRepo>();
        services.AddScoped<IAssistantRepo, AssistantRepo>();
        services.AddScoped<ICategoryRepo, CategoryRepo>();

        ServiceProvider servicesProvider = services.BuildServiceProvider();
        AssistRepo = servicesProvider.GetRequiredService<IAssistRepo>();
        AssistantRepo = servicesProvider.GetRequiredService<IAssistantRepo>();
        CategoryRepo = servicesProvider.GetRequiredService<ICategoryRepo>();
    }
}
