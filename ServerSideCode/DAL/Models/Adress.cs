using System;
using System.Collections.Generic;

namespace DAL.Models;

public partial class Adress
{
    public int Code { get; set; }

    public string City { get; set; }

    public string Street { get; set; }

    public int NumOfBuilding { get; set; }

    public int AptNumber { get; set; }

    public int ZipCode { get; set; }

    public virtual ICollection<Assistant> Assistants { get; set; } = new List<Assistant>();

    public virtual ICollection<Assist> Assists { get; set; } = new List<Assist>();
}
