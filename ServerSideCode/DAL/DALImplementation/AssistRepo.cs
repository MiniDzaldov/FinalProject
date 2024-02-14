using DAL.DALApi;
using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DALImplementation;

public class AssistRepo : IAssistRepo
{
    HelpContext helpContext;
    public AssistRepo(HelpContext helpContext)
    {
        this.helpContext = helpContext;   
    }
    public async Task<Assist> AddAsync(Assist entity)
    {
        throw new NotImplementedException();
    }

    public async Task<Assist> DeleteAsync(int id)
    {
        throw new NotImplementedException();
    }

    public async Task<List<Assist>> GetAllAsync()
    {
        return await helpContext.Assists.ToListAsync();
    }

    public async Task<Assist> GetSingleAsync(int id)
    {
        throw new NotImplementedException();
    }

    public async Task<Assist> UpdateAsync(Assist entity)
    {
        throw new NotImplementedException();
    }
}
