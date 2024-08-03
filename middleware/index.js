export const authMiddleWare = (request, response, next) => {
  console.log("hit every request");
  const isAuth = true;
  if (!isAuth) {
    response.json({
      data: null,
      message: "Not Valid",
    });
  } else {
    next();
  }
};
