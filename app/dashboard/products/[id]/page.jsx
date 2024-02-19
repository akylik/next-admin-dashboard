import Image from "next/image";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";


const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.userImage}
            src="/noavatar.png"
            alt="user"
            fill
            // sizes="(max-width: 600px) 100vw, 600px"
          />
        </div>
        Android
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="John Doe"/>
          <label>Price</label>
          <input type="number" name="price" placeholder="JohnDoe@gmail.com"/>
          <label>Stock</label>
          <input type="number" name="stock" autoComplete="23"/>
          <label>Color</label>
          <input type="text" name="color" placeholder="red"/>
          <label>Size</label>
          <textarea type='text' name="size" placeholder="Large"/>
          <label>Cat</label>
          <select name="cat" id="cat" defaultValue="kitchen">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea type='text' name="desc" rows="10" placeholder="Description"/>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage