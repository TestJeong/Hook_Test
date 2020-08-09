if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}

//Local 환경에서는 development가
//Deploy(배포) 한후 는 production이 나온다
