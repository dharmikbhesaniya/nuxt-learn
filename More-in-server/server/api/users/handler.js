import db from "../../../db.json";

export const getalldata = () => {
  return (e) => {
    return db.products;
  };
};

export const getsingledata = () => {
  return (e) => {
    const proid = e.context.params.id;
    const dbProducts = db.products.find((val) => val.id == proid);
    return dbProducts || { message: "Product Not Found" };
  };
};

export const addData = () => {
  return (e) => {
    return "Product Added";
  };
};
