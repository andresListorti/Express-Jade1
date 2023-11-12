// const fs = require('fs');
// const path = require('path');

module.exports = {
  root: function (req, res, next) {
    res.render("index", { title: "Express" });
  },

  w: (req, res, next) => {
    res.write("OLLLLLL");
    console.log(req.url);
    res.end();
  },
  n: (req, res, next) => {
    const ruta = path.join(__dirname, "../public/nosotros.html");
    res.sendFile(ruta);
  },
  wiPost: (req, res, next) => {
    res.write("POSTEADO POR POCHI");
    res.end();
  },

  dosPost: (req, res, next) => {
    res.send("segundeado POR POCHI");
    res.end();
  },

  nPut: (req, res, next) => {
    res.send("PUted POR POCHI");
    res.end();
  },
};
