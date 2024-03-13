using BLL.BLLModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.BLLApi;

public interface ICategoryDetailsRepo
{
    public Task<List<CategoryDetails>> GetAllCategoryDetailsAsync();
    public Task<CategoryDetails> GetSinglecategoryDetailsAsync(int code);

}
