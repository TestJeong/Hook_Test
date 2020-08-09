const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const config = require("./config/key");
const { User } = require("./models/User");

//json 데이터를 분석해서 가져 올 수 있게 해준다
app.use(bodyParser.json());

//분석해서 가져 올 수 있게 해준다
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const mongoose = require("mongoose");

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!~~~~");
});

app.post("/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ succes: true });
  });
});
// 회원 가입 할때 필요한 정보들을 client에서 가저오면 그것들을 데이터 베이스에 넣어준다

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
