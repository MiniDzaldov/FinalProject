using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DALImplementation
{
    public class AddressRepo : IAddressRepo
    {
        private readonly HelpContext helpContext;
        #region ctor
        public AddressRepo(HelpContext helpContext)
        {
            this.helpContext = helpContext;
        }
#endregion

        #region addAddress
        public async Task<int> AddAddressAsync(Adress address)
        {
            helpContext.Adresses.Add(address);
            await helpContext.SaveChangesAsync();
            return address.Code;
        }
        #endregion
    }
}
