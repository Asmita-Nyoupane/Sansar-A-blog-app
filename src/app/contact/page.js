import styles from "./contact.module.css";
import Image from "next/image";
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <div>
          <Image
            src="/contact.png"
            alt="contact picture"
            fill
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Adddress" />
          <input type="text" placeholder="Phone number" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
