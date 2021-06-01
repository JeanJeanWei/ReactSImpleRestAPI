using System;
namespace SimpleRestAPI.Models
{
    public class ColorData
    {
        public int Red { get; set; }
        public int Green { get; set; }
        public int Blue { get; set; }
        public string Hex { get; set; }
        public string Name { get; set; }
        public int Distance { get; set; }
        public string Style => "#" + Hex;
    }
}
