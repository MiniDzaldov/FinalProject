using BLL.BLLApi;
using BLL.BLLImplementation;
using DAL;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
/*DBActions actions = new DBActions(builder.Configuration);
var connString = actions.GetConnectionString("AssistanceDB");*/


builder.Services.AddScoped<IAssistDetailsRepo, AssistDetailsRepo>();
builder.Services.AddScoped<IAssistantDetailsRepo, AssistantDetailsRepo>();

var app = builder.Build();

app.MapControllers();

app.Run();
