using System;
namespace ReactSImpleRestAPI.Repository
{
    public interface IRepository<T>
    {
        T GetDataSource();
    }
}
