import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const addUser = async (formData) => {
  "use server";  
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.log("Error adding user:", error);
    throw new Error("Error adding user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  "use server";  
  const { title, desc, price, stock, color, size, cat } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
      cat,
    });

    await newProduct.save();
  } catch (error) {
    console.log("Error adding product:", error);
    throw new Error("Error adding product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
