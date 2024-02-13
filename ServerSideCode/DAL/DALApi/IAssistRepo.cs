using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DALApi;

public interface IAssistRepo:IRepository<Assist>
{
   /* public Task<List<Assist>> GetAllAsync();
    public Task<Assist> GetAsync(int id);
    public Task<Assist> PutAsync(int id, Assist assist);
    public Task<Assist> PostAsync(Assist assist);
    public Task<Assist> DeleteAsync(int id);*/
}
