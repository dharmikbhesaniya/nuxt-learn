import postModel from "~/server/models/Post";

export const getpost = () => {
  return async (e) => {
    try {
      const result = await postModel.find();
      return result;
    } catch (e) {
      return e;
    }
  };
};

export const addpost = () => {
  return async (e) => {
    try {
      const data = {
        title: "Learn Vue js 3",
        body: "Learn Vue js composition api from scratch",
      };
      await postModel.create(data);
    } catch (e) {
      return e;
    }
  };
};
