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

        //public async Task<int> AddAddressAsync(Adress address)
        //{
        //    var existingAddress = await helpContext.Adresses
        //        .FirstOrDefaultAsync(a =>
        //            a.City == address.City &&
        //            a.Street == address.Street &&
        //            a.NumOfBuilding == address.NumOfBuilding &&
        //            a.AptNumber == address.AptNumber &&
        //            a.ZipCode == address.ZipCode);

        //    if (existingAddress != null)
        //    {
        //        // Return the existing address code
        //        return existingAddress.Code;
        //    }

        //    // If address does not exist, add it to the database
        //    helpContext.Adresses.Add(address);
        //    await helpContext.SaveChangesAsync();

        //    // Return the newly added address code
        //    return address.Code;
        //}

        public async Task<int> AddAddressAsync(Adress address)
        {
            var existingAddress = await helpContext.Adresses
                .FirstOrDefaultAsync(a => a.Code == address.Code);

            if (existingAddress != null)
            {
                existingAddress.City = address.City;
                existingAddress.Street = address.Street;
                existingAddress.NumOfBuilding = address.NumOfBuilding;
                existingAddress.AptNumber = address.AptNumber;
                existingAddress.ZipCode = address.ZipCode;
            }
            else
            {
                helpContext.Adresses.Add(address);
            }

            await helpContext.SaveChangesAsync();

            return address.Code;
        }

        public async Task<bool> DeleteAddressAsync(int addressCode)
        {
            Console.WriteLine($"Attempting to delete address with code: {addressCode}");
            var address = await helpContext.Adresses.FirstOrDefaultAsync(a => a.Code == addressCode);
            if (address != null)
            {
                helpContext.Adresses.Remove(address);
                await helpContext.SaveChangesAsync();
                Console.WriteLine($"Address with code {addressCode} deleted successfully.");
                return true;
            }
            Console.WriteLine($"Address with code {addressCode} not found.");
            return false;
        }


    }
}

