using Microsoft.VisualStudio.TestTools.UnitTesting;
using ReactSImpleRestAPI.Repository.Weather;

namespace UnitTest
{
    [TestClass]
    public class WeaterRepositoryTests
    {
        [TestMethod]
        public void TestMethod1()
        {
            WeatherRepositoryDevelopment wp = new WeatherRepositoryDevelopment();
            var cityList = wp.CityDataList();
            Assert.IsNotNull(cityList);
        }
    }
}
