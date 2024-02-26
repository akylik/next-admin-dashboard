import { auth } from "./auth";
import CreateForm from "./ui/create_form/createForm";

// TODO
const Homepage = async () => {
  const user = await auth();

  return user === null ? (
    <CreateForm />
  ) : (
    <div>Homepage</div>
  );
}

export default Homepage