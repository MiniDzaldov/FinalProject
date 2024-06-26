//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace DAL.DALImplementation
//{
//    public class AddressRepo : IAddressRepo
//    {
//        private readonly HelpContext helpContext;
//        #region ctor
//        public AddressRepo(HelpContext helpContext)
//        {
//            this.helpContext = helpContext;
//        }
//#endregion

//        #region addAddress
//        public async Task<int> AddAddressAsync(Adress address)
//        {
//            helpContext.Adresses.Add(address);
//            await helpContext.SaveChangesAsync();
//            return address.Code;
//        }
//        #endregion
//    }
//}

using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace DAL.DALImplementation
{
    public class AddressRepo : IAddressRepo
    {
        private readonly HelpContext helpContext;

        public AddressRepo(HelpContext helpContext)
        {
            this.helpContext = helpContext;
        }

        public async Task<int> AddAddressAsync(Adress address)
        {
            // Check if the address already exists in the database
            var existingAddress = await helpContext.Adresses
                .FirstOrDefaultAsync(a =>
                    a.City == address.City &&
                    a.Street == address.Street &&
                    a.NumOfBuilding == address.NumOfBuilding &&
                    a.AptNumber == address.AptNumber &&
                    a.ZipCode == address.ZipCode);

            if (existingAddress != null)
            {
                // Return the existing address code
                return existingAddress.Code;
            }

            // If address does not exist, add it to the database
            helpContext.Adresses.Add(address);
            await helpContext.SaveChangesAsync();

            // Return the newly added address code
            return address.Code;
        }
    }
}

