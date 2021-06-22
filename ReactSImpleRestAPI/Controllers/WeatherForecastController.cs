using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using ReactSImpleRestAPI.Models;
using ReactSImpleRestAPI.Models.Weather;
using ReactSImpleRestAPI.Repository.Weather;

namespace ReactSImpleRestAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(IOptions<EnvironmentSettings> options)
        {
            var env = options.Value.Environment;
        }

        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<WeatherForecast>))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("SearchByCityName/{name}")]
        [Route("SearchByCityName")]
        public IActionResult SearchByCityName(string name)
        {
            WeatherRepositoryDevelopment wp = new WeatherRepositoryDevelopment();
            var data = wp.SearchByCityName(name);
            if (data == null)
            {
                return NotFound("No record");
            }
            List<WeatherForecast> l = new List<WeatherForecast>();
            l.Add(data);
            return Ok(l);
        }

        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(WeatherForecast))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("SearchByCityNameAsync/{name}")]
        [Route("SearchByCityNameAsync")]
        public async Task<IActionResult> SearchByCityNameAsync(string name)
        {
            WeatherRepositoryDevelopment wp = new WeatherRepositoryDevelopment();
            var data = await wp.SearchByCityNameAsync(name);
            if (data == null)
            {
                return NotFound("No record");
            }
            List<WeatherForecast> l = new List<WeatherForecast>();
            l.Add(data);
            return Ok(l);
        }

        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<CityData.Root>))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [Route("CityList")]
        public  IActionResult CityList()
        {
            WeatherRepositoryDevelopment wp = new WeatherRepositoryDevelopment();
            var data = wp.CityDataList();
            if (data == null)
            {
                return NotFound("No record");
            }
            return Ok(data);
        }
    }
}
