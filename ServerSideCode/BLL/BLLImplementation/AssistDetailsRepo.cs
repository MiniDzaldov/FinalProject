    using BLL.BLLApi;
using BLL.BLLModels;
using DAL;
using DAL.DALApi;
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
    IAssistRepo assistRepo;
    public AssistDetailsRepo(DalManager dalManagerInstance)
    {
        this.assistRepo = dalManagerInstance.AssistRepo;
    }

    public async Task<List<AssistDetails>> GetAllAssistDetailsAsync()
    {
        var assistList = await assistRepo.GetAllAsync();
        var assistDetailList = new List<AssistDetails>();
        foreach (var ad in assistList)
        {
            assistDetailList.Add(new AssistDetails(ad.FirstName + " " + ad.LastName, ad.PhoneNumber, ad.Email , ad.CategoryCodeNavigation.Type));
        }
        assistDetailList.Add(new AssistDetails("sari", "4576", "a@b", "bake"));
        return assistDetailList;
    }

    public async Task<AssistDetails> GetSingleAssistDetailsAsync(string id)
    {
        var assist = await assistRepo.GetSingleAsync(id);
        if (assist == null)
        {
            throw new Exception("this id does not exist");
        }
        var assistDetails = new AssistDetails(assist.FirstName + " " + assist.LastName, assist.PhoneNumber, assist.Email, assist.CategoryCodeNavigation.Type);
        return assistDetails;

    }
    public Task<AssistDetails> AddAssistDetailsAsync(AssistDetails assistDetails)
    {
        throw new NotImplementedException();
    }
}
