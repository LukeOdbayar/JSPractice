import jwt from "jsonwebtoken";

export const autheticateToken = function (request, response, next) {
  const { token } = request.cookies;
  if (!token)
    return response
      .status(401)
      .json({ status: false, message: "Unauthorize - no token provided" });
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decode, token);
    if (!decode) {
      response
        .status(403)
        .json({ status: false, message: "token does not valide" });
    }
    next();
  } catch (error) {
    console.log("AUTHETICATE TOKEN : ", error);
    response.status(500).json({ status: false, message: "server error " });
  }
};
