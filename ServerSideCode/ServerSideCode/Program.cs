using BLL;
using BLL.BLLApi;
using BLL.BLLImplementation;
using DAL;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddScoped<BlManager>();

DBActions actions = new DBActions(builder.Configuration);
var connString = actions.GetConnectionString("AssistanceDB");

builder.Services.AddDbContext<HelpContext>(opt => opt.UseSqlServer(connString));
builder.Services.AddCors(options =>
{
    options.AddPolicy("CORSPolicy",
        builder =>
        {
            builder
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowAnyOrigin();
        });
});

/*builder.Services.AddScoped<IAssistDetailsRepo, AssistDetailsRepo>();
builder.Services.AddScoped<IAssistantDetailsRepo, AssistantDetailsRepo>();*/

var app = builder.Build();
app.UseCors("CORSPolicy");
app.MapControllers();

app.Run();
