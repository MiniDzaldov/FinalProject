using DAL.DALApi;
using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DALImplementation;

public class AssistantRepo : IAssistantRepo

{
    HelpContext helpContext = new HelpContext(new DbContextOptions<HelpContext>());

    public async Task<Assistant> AddAsync(Assistant entity)
    {
        throw new NotImplementedException();
    }

    public async Task<Assistant> DeleteAsync(int id)
    {
        throw new NotImplementedException();
    }

    public async Task<List<Assistant>> GetAllAsync()
    {
        return await helpContext.Assistants.ToListAsync();
    }
    public async Task<Assistant> GetSingleAsync(int id)
    {
        throw new NotImplementedException();
    }

    public async Task<Assistant> UpdateAsync(Assistant entity)
    {
        throw new NotImplementedException();
    }
}
