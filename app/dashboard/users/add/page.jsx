import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";


const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action='' className={styles.form}>
        <input type="text" placeholder="User name" name='username' required/>
        <input type="email" placeholder="Email" name='email' required/>
        <input type="password" placeholder="Password" name='password' required/>
        <input type="phone" placeholder="Phone" name='phone'/>
        <select name="isAdmin" id="isAdmin" defaultValue={false}>
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive" defaultValue={true}>
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea defaultValue="" name="address" id="address" rows="16" placeholder="Address">
        </textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage