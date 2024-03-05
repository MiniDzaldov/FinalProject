using BLL.BLLApi;
using BLL.BLLImplementation;
using DAL;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

/*DBActions actions = new DBActions(builder.Configuration);
var connString = actions.GetConnectionString("AssistanceDB");*/


builder.Services.AddScoped<IAssistDetailsRepo, AssistDetailsRepo>();
builder.Services.AddScoped<IAssistantDetailsRepo, AssistantDetailsRepo>();
builder.Services.AddControllers();
var app = builder.Build();

app.MapControllers();

app.Run();
