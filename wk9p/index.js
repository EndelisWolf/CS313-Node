const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get("/getRate", function (req, res) {
    // Controller
    console.log("Received a request for the Rate cost");

    var weight = req.query.weight;
    console.log(weight);
    var mail = req.query.mail;
    console.log(mail);

    var result;

    if (mail == 'stampLetter' && weight <= 3.5) {
      if (weight <= 1) {
        result = 0.55;
      }
      else if (weight <= 2) {
        result = 0.70.toFixed(2);
      }
      else if (weight <= 3) {
        result = 0.85;
      }
      else if (weight <= 3.5) {
        result = 1.00.toFixed(2);
      }
    }
    else if (mail == 'meterLetter' && weight <= 3.5) {
      if (weight <= 1) {
        result = 0.55;
      }
      else if (weight <= 2) {
        result = 0.70.toFixed(2);
      }
      else if (weight <= 3) {
        result = 0.85;
      }
      else if (weight <= 3.5) {
        result = 1.00.toFixed(2);
      }
    }
    else if (mail == 'largeEnv' || mail == 'stampedLetter' && weight > 3.5 || mail == 'meterLetter' && weight > 3.5) {
      if (weight <= 1) {
        result = 1.00.toFixed(2);
      }
      else if (weight <= 2) {
        result = 1.15;
      }
      else if (weight <= 3) {
        result = 1.30.toFixed(2);
      }
      else if (weight <= 4) {
        result = 1.45;
      }
      else if (weight <= 5) {
        result = 1.60.toFixed(2);
      }
      else if (weight <= 6) {
        result = 1.75;
      }
      else if (weight <= 7) {
        result = 1.90.toFixed(2);
      }
      else if (weight <= 8) {
        result = 2.05;
      }
      else if (weight <= 9) {
        result = 2.20.toFixed(2);
      }
      else if (weight <= 10) {
        result = 2.35;
      }
      else  if (weight <= 11) {
        result = 2.50.toFixed(2);
      }
      else if (weight <= 12) {
        result = 2.65;
      }
      else if (weight <= 13) {
        result = 2.80.toFixed(2);
      }
    }
    else if (mail == 'package') {
      if (weight <= 1) {
        result = 3.66;
      }
      else if (weight <= 2) {
        result = 3.66;
      }
      else if (weight <= 3) {
        result = 3.66;
      }
      else if (weight <= 4) {
        result = 3.66;
      }
      else if (weight <= 5) {
        result = 4.39;
      }
      else if (weight <= 6) {
        result = 4.39;
      }
      else if (weight <= 7) {
        result = 4.39;
      }
      else if (weight <= 8) {
        result = 4.39;
      }
      else if (weight <= 9) {
        result = 4.39;
      }
      else if (weight <= 10) {
        result = 5.19;
      }
      else if (weight <= 11) {
        result = 5.19;
      }
      else if (weight <= 12) {
        result = 5.19;
      }
      else if (weight <= 13) {
        result = 5.71;
      }
    }
    else {
      result = 'Error';
    }

    console.log("Received a request for an rate.")
    console.log("Your items weight is: " + weight)
    console.log("The type of packge selected is: " + mail)
    console.log("The overall cost is: " + result)

    var total = {weight: weight, mail: mail, result: result};

    res.render("pages/results", total);
    res.end();

    //res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify({
      result: result
    }));
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))