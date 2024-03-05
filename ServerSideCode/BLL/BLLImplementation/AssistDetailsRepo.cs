using BLL.BLLApi;
using BLL.BLLModels;
using DAL.DALImplementation;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.BLLImplementation;

public class AssistDetailsRepo : IAssistDetailsRepo
{
    AssistRepo assistRepo = new AssistRepo();


    public async Task<List<AssistDetails>> GetAllAssistDetailsAsync()
    {
        var assistList = await assistRepo.GetAllAsync();
        var assistDetailList = new List<AssistDetails>();
        foreach (var ad in assistList)
        {
            assistDetailList.Add(new AssistDetails(ad.FirstName + " " + ad.LastName, ad.PhoneNumber, ad.Email));
        }
        assistDetailList.Add(new AssistDetails("sar", "4576", "a@b"));
        return assistDetailList;
    }
}
