const express = require('express');
const port = 5000;
const bodyParser = require('body-parser');
const {logic, arr} = require('./Controller/logic');

let userInput = {
  data1: '',
  data2: '',
  data3: '',
  data4: '',
  data5: '',
  data6: '',
  data7: '',
};

const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('formInput.ejs');
});

app.post('/result', (req, res) => {
  userInput.data1 = req.body.no1 == '' ? '<empty>' : req.body.no1;
  userInput.data2 = req.body.no2 == '' ? '<empty>' : req.body.no2;
  userInput.data3 = req.body.no3 == '' ? '<empty>' : req.body.no3;
  userInput.data4 = req.body.no4 == '' ? '<empty>' : req.body.no4;
  userInput.data5 = req.body.no5 == '' ? '<empty>' : req.body.no5;
  userInput.data6 = req.body.no6 == '' ? '<empty>' : req.body.no6;
  userInput.data7 = req.body.no7 == '' ? '<empty>' : req.body.no7;
  //----------------------------------------------------------------
  let result = [
    userInput.data1,
    userInput.data2,
    userInput.data3,
    userInput.data4,
    userInput.data5,
    userInput.data6,
    userInput.data7,
  ];

  logic(result);

  res.render('result.ejs', {
    no1: userInput.data1,
    no2: userInput.data2,
    no3: userInput.data3,
    no4: userInput.data4,
    no5: userInput.data5,
    no6: userInput.data6,
    no7: userInput.data7,
    //for the result
    result1: arr[0],
    result2: arr[1],
    result3: arr[2],
    result4: arr[3],
    result5: arr[4],
    result6: arr[5],
    result7: arr[6],
  });
});

app.listen(port, err => {
  if (!err) console.log('server started running on:' + port);
  else console.log('unable to start server');
});
