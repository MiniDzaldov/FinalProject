using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.BLLModels;

public class AssistantDetails
{
    public string Name { get; set; }
    public string PhoneNumber { get; set; }
    public string Email { get; set; }
    public int AddressCode { get; set; }
    public int CategoryCode { get; set; }

    public AssistantDetails(string name, string phoneNumber, string email, int addressCode, int categoryCode)
    {
        this.Name = name;
        this.PhoneNumber = phoneNumber;
        this.Email = email;
        this.AddressCode = addressCode;
        this.CategoryCode = categoryCode;
    }
}

