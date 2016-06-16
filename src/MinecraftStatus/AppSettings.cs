using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinecraftStatus
{
    public class AppSettings
    {
        public string MCServerAddress { get; set; }
        public short MCServerPort { get; set; }
        public int PingIntervalMilliseconds { get; set; }
    }
}
