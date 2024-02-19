import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log('Error fetching users:', error);
    throw new Error('Error fetching users');
  }
}