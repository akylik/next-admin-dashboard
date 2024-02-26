"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import styles from "./createForm.module.css";
import { createUser } from "@/app/lib/actions";
import { useState } from "react";

const CreateForm = () => {
  const [state, formAction] = useFormState(createUser, undefined);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    setIsFormValid(
      formValues.username !== "" && formValues.email !== "" && formValues.password !== ""
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      formAction(formValues);

      setFormValues({
        username: "",
        email: "",
        password: "",
      });

      setIsFormValid(false);
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const inputs = form.querySelectorAll('input');
  //   console.log("🚀 ~ handleSubmit ~ inputs:", inputs)
  //   let isValid = true;

  //   inputs.forEach(input => {
  //     if (!input.value) {
  //       input.classList.add('invalid');
  //       isValid = false;
  //     }
  //   });

  //   if (isValid) {
  //     // Perform form submission
  //     formAction();
  //   }
  // };


  return (
    <div className={`${styles.wrapper}`}>
      <form
        action={formAction}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <h1>Create an account</h1>
        <input type="text" value={formValues.username} placeholder="Username" name="username" onChange={handleInputChange}  />
        <input type="email" value={formValues.email} placeholder="Email" name="email" onChange={handleInputChange}  />
        <input type="password" value={formValues.password} placeholder="Password" name="password" onChange={handleInputChange}  />
        <Link href={`/dashboard/login`}>
          <span>Do you have an account? Login</span>
        </Link>
        <button 
          disabled={!isFormValid}
          className={`${styles.btn} ${isFormValid ? styles.btn_valid : styles.btn_invalid}`}
        >Create</button>
        {state && state}
      </form>
    </div>
  );
};

export default CreateForm;
