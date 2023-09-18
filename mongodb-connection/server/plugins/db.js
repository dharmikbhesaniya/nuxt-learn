import mongoose from "mongoose";

export default async () => {
  const config = useRuntimeConfig();
  try {
    await mongoose.connect(config.dburl, {
      dbName: "blog",
    });
    console.log("Databse Connected");
  } catch (e) {
    console.log("Connection Error");
    return e;
  }
};
