using DAL.DALApi;
using DAL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
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
    public async Task<List<Assist>> GetAllAsync()
    {
        var assists = helpContext.Assists.Include(x => x.CategoryCodeNavigation);
        return await assists.ToListAsync();
    }
    public async Task<Assist> GetSingleAsync(string id)
    {
        return await helpContext.Assists.FirstOrDefaultAsync(ga => ga.Id == id);
    }

    public async Task<Assist> AddAsync(Assist entity)
    {
        helpContext.Assists.Add(entity);
        await helpContext.SaveChangesAsync();
        return entity;
    }

    public async Task<Assist> DeleteAsync(string id)
    {
        Assist removeAssist = helpContext.Assists.FirstOrDefault(ra => ra.Id == id);
        if (removeAssist != null)
        {
            helpContext.Assists.Remove(removeAssist);
            await helpContext.SaveChangesAsync();
        }
        return removeAssist;
    }

    public async Task<Assist> UpdateAsync(Assist entity, string id)
    {
        Assist a = helpContext.Assists.FirstOrDefault(a => a.Id == id);
        if (a != null)
        {
            a.FirstName = entity.FirstName;
            a.LastName = entity.LastName;
            a.Email = entity.Email;
            a.AddressCode = entity.AddressCode;
            a.PhoneNumber = entity.PhoneNumber;
            a.CategoryCode = entity.CategoryCode;
            await helpContext.SaveChangesAsync();
        }
        return a;
    }
}

