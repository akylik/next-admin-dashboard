import Image from "next/image";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";


const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.userImage}
            src="/noavatar.png"
            alt="user"
            fill
          />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="John Doe"/>
          <label>Email</label>
          <input type="email" name="email" placeholder="JohnDoe@gmail.com"/>
          <label>Password</label>
          <input type="password" name="password" autoComplete="password"/>
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+12345678"/>
          <label>Address</label>
          <textarea type='text' name="address" placeholder="Address"/>
          <label>Is Admin</label>
          <select name="isAdmin" id="isAdmin" defaultValue={false}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active</label>
          <select name="isActive" id="isActive" defaultValue={true}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage