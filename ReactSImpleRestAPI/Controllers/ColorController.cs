using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using ReactSImpleRestAPI.Models;
using ReactSImpleRestAPI.Repository;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactSImpleRestAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ColorController : ControllerBase
    {
        private readonly ILogger<ColorController> _logger;

        public ColorController(ILogger<ColorController> logger)
        {
            _logger = logger;
        }

        //public ColorController(IOptions<EnvironmentSettings> options)
        //{
        //    var env = options.Value.Environment;
        //}

        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<ColorData>))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet]
        [Route("allcolordata")]
        public async Task<IActionResult>  AllColorData()
        {

            ColorRepository cp = new ColorRepository();
            var data = await cp.AllColorData();
            if (data == null)
            {
                return NotFound("No record");
            }
            return Ok(data);
        }

        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(List<ColorData>))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("ClosestColorNameByHex/{hex}")]
        [Route("ClosestColorNameByHex")]
        public async Task<IActionResult> ClosestColorNameByHex(string hex)
        {

            ColorRepository cp = new ColorRepository();
            var result = await cp.ClosestColorNameByHex(hex);
            
            if (result == null || result.Name == null)
            {
                return NotFound("No record");
            }
            List<ColorData> data = new List<ColorData>();
            ColorData input = new ColorData
            {
                Name = "Your input color",
                Hex = hex,
            };
            data.Add(input);
            data.Add(result);
            return Ok(data);
        }
    }
}
