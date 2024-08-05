export const createPost = async (request, response) => {
  try {
    console.log("request", request.body);
    response.status(200).send({ status: 200 });
  } catch (error) {
    console.log(error);
  }
};
