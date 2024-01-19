using System;
using System.Collections.Generic;

namespace DAL.Models;

public partial class HelpCategory
{
    public int Code { get; set; }

    public string Type { get; set; }

    public virtual ICollection<Assistant> Assistants { get; set; } = new List<Assistant>();

    public virtual ICollection<Assist> Assists { get; set; } = new List<Assist>();
}
