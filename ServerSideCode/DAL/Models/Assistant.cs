using System;
using System.Collections.Generic;

namespace DAL.Models;

public partial class Assistant
{
    public string Id { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public int? Age { get; set; }

    public string PhoneNumber { get; set; }

    public string Email { get; set; }

    public int AddressCode { get; set; }

    public int? CategoryCode { get; set; }

    public virtual Adress AddressCodeNavigation { get; set; }

    public virtual HelpCategory CategoryCodeNavigation { get; set; }
}
