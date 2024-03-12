using BLL.BLLApi;
using BLL.BLLModels;
using DAL;
using DAL.DALApi;
using DAL.DALImplementation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.BLLImplementation;

public class AssistantDetailsRepo : IAssistantDetailsRepo
{
    IAssistantRepo assistantRepo;
    public AssistantDetailsRepo(DalManager dalmanagerInstance)
    {
        this.assistantRepo = dalmanagerInstance.AssistantRepo;
    }

    public async Task<List<AssistantDetails>> GetAllAssistantDetailsAsync()
    {
        var assistantList = await assistantRepo.GetAllAsync();
        var assistantDetailList = new List<AssistantDetails>();
        foreach(var ad in assistantList)
        {
            assistantDetailList.Add(new AssistantDetails(ad.FirstName + " " + ad.LastName, ad.PhoneNumber, ad.Email, ad.AddressCode, ad.CategoryCode));
        }
        assistantDetailList.Add(new AssistantDetails("Chana", "0548744154", "c@gmail.com", 111, 3));
        return assistantDetailList;
    }



}
