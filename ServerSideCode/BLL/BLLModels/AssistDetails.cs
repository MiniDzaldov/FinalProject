using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.BLLModels;

public class AssistDetails
{
    public string Name { get; set; }
    public string PhoneNumber { get; set; }

    public string Email { get; set; }
    public AssistDetails(string name, string phone, string email)
    {
        this.Name = name;
        this.PhoneNumber = phone;
        this.Email = email;
    }
}
