﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DALApi;

public interface IAddressRepo
{
    //Task<int> AddAddressAsync(Adress address);
    Task<int> AddAddressAsync(Adress address);

    Task<bool> DeleteAddressAsync(int addressCode);
}
