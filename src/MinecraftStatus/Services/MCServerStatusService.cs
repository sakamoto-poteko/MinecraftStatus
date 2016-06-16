using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MCServerStatus;
using Microsoft.Extensions.Options;

namespace MinecraftStatus.Service
{
    public interface IMCServerStatusService
    {
        Status Status { get; }
    }

    public class MCServerStatusService : IMCServerStatusService
    {
        private AppSettings _appSettings;
        private MCPinger _pinger;

        private Status _status;
        public Status Status { get { return _status; } }

        public MCServerStatusService(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
            _pinger = new MCPinger(_appSettings.MCServerAddress, _appSettings.MCServerPort);

            Task.Factory.StartNew(PingLoop);
        }

        private async void PingLoop()
        {
            while (true)
            {
                try
                {
                    _status = await _pinger.Request();
                }
                catch (Exception)
                {
                    _status = null;
                }
                await Task.Delay(_appSettings.PingIntervalMilliseconds);
            }
        }

    }
}
