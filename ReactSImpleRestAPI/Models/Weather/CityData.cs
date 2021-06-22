using System;
using System.Collections.Generic;

namespace ReactSImpleRestAPI.Models.Weather
{
    public class CityData
    {        // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 
        public class Coord
        {
            public double lon { get; set; }
            public double lat { get; set; }
        }

        public class Geoname
        {
            public string cl { get; set; }
            public string code { get; set; }
            public int parent { get; set; }
        }


        public class Stat
        {
            public int level { get; set; }
            public int population { get; set; }
        }

        public class Root
        {
            public int id { get; set; }
            public Coord coord { get; set; }
            public string country { get; set; }
            public Geoname geoname { get; set; }
            public string name { get; set; }
            public Stat stat { get; set; }
            public int zoom { get; set; }
        }


    }
}
