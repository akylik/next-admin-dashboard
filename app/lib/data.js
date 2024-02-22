import { ITEM_PER_PAGE } from "../config";
import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { users, count };
  } catch (error) {
    console.log("Error fetching users:", error);
    throw new Error("Error fetching users");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (error) {
    console.log("Error fetching products:", error);
    throw new Error("Error fetching products");
  }
};
