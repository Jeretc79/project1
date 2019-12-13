// const numberInput = document.getElementById(‘number’),
//       textInput = document.getElementById(‘msg’),
//       scheduleSelect = document.getElementById(‘schedule’),
//       button = document.getElementById(‘button’),
//       response = document.querySelector(‘.response’);
// button.addEventListener(‘click’, send, false);
// const socket = io();
// socket.on(‘smsStatus’, function(data){
//   if(data.error){
//     response.innerHTML = ‘<h5>Text message sent to ’ + data.error + ‘</h5>‘;
//   }else{
//     response.innerHTML = ‘<h5>Text message sent to ’ + data.number + ‘</h5>’;
//   }
// });
// let timeOut;
// const getTimeSchedule = ({ time, number, text }) => {
//   if(timeOut) clearTimeout(timeOut);
//   timeOut = setTimeout(() => {
//     fetchServer({ number, text });
//   }, time * 60 * 1000);
// };
// const fetchServer = ({ number, text }) => {
//   console.log(‘send’);
//   fetch(‘/’, {
//     method: ‘post’,
//     headers: {
//       ‘Content-type’: ‘application/json’
//     },
//     body: JSON.stringify({ number, text })
//   })
//     .then(function (res) {
//       console.log(res);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// };
// function send() {
//   const number = numberInput.value.replace(/\D/g, ‘’);
//   const text = textInput.value;
//   const time = parseInt(scheduleSelect.value, 10);
//   getTimeSchedule({ number, text, time });
// }
// const express = require(‘express’);
// const bodyParser = require(‘body-parser’);
// const ejs = require(‘ejs’);
// const Nexmo = require(‘nexmo’);
// const socketio = require(‘socket.io’);
// // Init Nexmo
// const nexmo = new Nexmo({
//   apiKey: ‘ee7d5b20’,
//   apiSecret: ‘lYWkUbIvXb2mxmqi’
// }, { debug: true });
// // Init app
// const app = express();
// // Template engine setup
// app.set(‘view engine’, ‘html’);
// app.engine(‘html’, ejs.renderFile);
// // Public folder setup
// app.use(express.static(__dirname + ‘/public’));
// // Body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// // Index route
// app.get(‘/’, (req, res) => {
//   res.render(‘index’);
// });
// // Catch form submit
// app.post(‘/’, (req, res) => {
//   //res.send(req.body);
//   // console.log(req.body);
//   const { number, text } = req.body;
//   nexmo.message.sendSms(
//     ‘19165187475’, number, text, { type: ‘unicode’ },
//     (err, responseData) => {
//       if(err) {
//         console.log(err);
//       } else {
//         const { messages } = responseData;
//         const { [‘message-id’]: id, [‘to’]: number, [‘error-text’]: error  } = messages[0];
//         console.dir(responseData);
//         // Get data from response
//         const data = {
//           id,
//           number,
//           error
//         };
//         // Emit to the client
//         io.emit(‘smsStatus’, data);
//       }
//     }
//   );
// });
// // Define port
// const port = 3000;
// // Start server
// const server = app.listen(port, () => console.log(`Server started on port ${port}`));
// // Connect to socket.io
// const io = socketio(server);
// io.on(‘connection’, (socket) => {
//   console.log(‘Connected’);
//   io.on(‘disconnect’, () => {
//     console.log(‘Disconnected’);
//   })
// });

