using BLL.BLLModels;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.BLLApi;
public interface IAssistDetailsRepo
{
    public Task<List<AssistDetails>> GetAllAssistDetailsAsync();
    public Task<AssistDetails> GetSingleAssistDetailsAsync(string id);
    
}
