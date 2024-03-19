namespace BLL.BLLImplementation;

public static class ConvertionClass
{

    #region Convert SimpleAutoMapper function
    /// <summary>
    /// The function converts an object of type U to an object of type T - this is a generic function.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <typeparam name="U"></typeparam>
    /// <param name="obj"></param>
    /// <returns>
    /// An object converted from type U to T.
    /// </returns>

    public static T SimpleAutoMapper<T, U>(U obj)
{
    try
    {
        if (obj != null)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<U, T>().ReverseMap());
            var mapper = config.CreateMapper();
            return mapper.Map<T>(obj);
        }
        else { throw new ArgumentNullException("obj is null!"); }
    }
    catch (ArgumentNullException ex) { throw ex; }
    catch (Exception)
    {

        throw;
    }
}

#endregion
}
