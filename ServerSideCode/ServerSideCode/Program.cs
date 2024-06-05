
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();


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
builder.Services.AddScoped<BlManager>(b => new BlManager(connString));

/*builder.Services.AddScoped<IAssistDetailsRepo, AssistDetailsRepo>();
builder.Services.AddScoped<IAssistantDetailsRepo, AssistantDetailsRepo>();*/

var app = builder.Build();
app.UseCors("CORSPolicy");
app.MapControllers();

app.Run();
