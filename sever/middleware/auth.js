const { User } = require("../models/User");

let auth = (req, res, next) => {
  //인증 처리를 하는 곳

  //클라이언트에서 쿠키에서 토큰을 가져 온다
  let token = req.cookies.x_auth;

  //토큰을 복화 한후 유저를 찾는다
  User;

  //유저가 있으면 인증 오케이

  // 유저가 없으면 인증 no
};

module.exports = { auth };
