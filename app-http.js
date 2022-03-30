var http = require("http");

http
  .createServer(function (req, res) {
    res.setHeader("Content-Disposition", "attachment; filename=list.csv");
    res.writeHead(200, { "Content-Type": "application/csv" });

    res.write("id,nombre\n");
    res.write("1,qwe\n");
    res.write("2,ewq\n");
    res.write("3,123\n");
    res.write("4,asd\n");
    res.write("5,asd");

    res.end();
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
