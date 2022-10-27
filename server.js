const express = require('express');
const app = express();
const port = 4000;
//const router = express.Router()
const data = [
  {
    slackName: 'oluwatomisin',
    age: '19',
    backend: true,
    bio: "Hi,i'm oluwatomisin!...i love to play football..i'm 19yrs old",
  },
];
app.use(express.json());
app.get('/data', (req, res) => {
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`app is been listen to on ${port}.....`);
});
