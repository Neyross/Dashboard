const express = require("express");
var requestIp = require('request-ip');
const mariadb = require('mariadb');

const pool = mariadb.createPool({
     host: 'mydb.com', 
     user:'thib', 
     password: 'thib',
     connectionLimit: 5
});
const app = express();

app.listen(8080, () => {
  console.log("Listening on port 8080.");
});

app.get("/about.json", (req, res) => {
  var ip = requestIp.getClientIp(req);
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }  
  var time = Math.floor(new Date().getTime() / 1000)
  const jso = {
    client: {ip},
    server: {
      current_time: time,
      services: [{
        name: 'vaccine',
        widgets: [{
          name: 'country_vaccines',
          description: 'get vaccines per country',
          params: [{
            name: 'country',
            type: 'string'
          }]
        }]
      }]
    }
  }
  res.status(200).json(jso);
})
