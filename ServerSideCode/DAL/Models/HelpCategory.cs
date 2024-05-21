using System.Text.Json.Serialization;

namespace DAL.Models;

public partial class HelpCategory
{
    public int Code { get; set; }

    public string Type { get; set; }
    //[JsonIgnore]
    public virtual ICollection<Assistant> Assistants { get; set; } = new List<Assistant>();
    //[JsonIgnore]
    public virtual ICollection<Assist> Assists { get; set; } = new List<Assist>();
}
