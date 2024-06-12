const http = require("http");
const fs = require("fs");
const requests = require("requests");

const port = 3000;
const host = "127.0.0.1";

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceval = (tempdata, val) => {
const tempKelvin = val.main.temp;
const tempCelsius = tempKelvin - 273.15;
const tempmin = val.main.temp_min;
const tempmintemp = tempmin - 273.15;
const tempmax = val.main.temp_max;
const tempmantemp = tempmax - 273.15;

    let temperature = tempdata.replace("{%temp%}",tempCelsius.toFixed(2))
    temperature = temperature.replace("{%mintemp%}",tempmintemp.toFixed(2))
    temperature = temperature.replace("{%maxtemp%}",tempmantemp.toFixed(2))
    temperature = temperature.replace("{%location%}",val.name)
    temperature = temperature.replace("{%country%}",val.sys.country)
    temperature = temperature.replace("{%tempstatus%}",val.weather[0].main)
    return temperature;
};

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=surat&appid=035d7283b991d32c1e57a6317e3bd154")
            .on('data', (chunk) =>{
                const objdata  = JSON.parse(chunk);
                const objarr = [objdata]
                // console. log(objarr);
                // console.log(objarr[0].main.temp);
                const realTimeData = objarr.map(val => replaceval(homeFile, val)).join(" ");
                res.write(realTimeData);
                // console.log(realTimeData);
            })
            .on('end',(err) =>{
                if (err) return console.log('connection closed due to errors', err);
                res.end();
            });
    }
});

server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
});