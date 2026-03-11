import React, { useState } from "react";
// create variable and import css from login.module.css
import styles from "./Login.module.css";

function Login() {
    // create variable and set state
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    cfpassword: "",
  });

  // create function oninputchange
  const onInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // create function onsubmit
  const onSubmit = (event) => {
    event.preventDefault();

    if(form.password != form.cfpassword) {
      alert("Password don't match!");
      return;
    }
    // console.log for value submit
    console.log("Submit data:", form);
  };
  return (
    <div className={styles.main_contianer}>
      <div className={styles.login_topic}>
        <h1>login</h1>
      </div>

      <div className={styles.form_container}>
        <form onSubmit={onSubmit}>
          <div className={styles.form_group}>
            <label htmlFor="username">username</label>
            <input
              type="text"
              className={styles.form_controls}
              name="username"
              id="username"
              placeholder="enter your username"
              value={form.username}
              onChange={onInputChange}
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="email">email</label>
            <input
              type="email"
              className={styles.form_controls}
              name="email"
              id="email"
              placeholder="enter your email"
              value={form.email}
              onChange={onInputChange}
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="password">password</label>
            <input
              type="password"
              className={styles.form_controls}
              name="password"
              id="password"
              placeholder="enter your password"
              value={form.password}
              onChange={onInputChange}
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="cfpassword">confirm password</label>
            <input
              type="password"
              className={styles.form_controls}
              name="cfpassword"
              id="cfpassword"
              placeholder="enter your confirm password"
              value={form.cfpassword}
              onChange={onInputChange}
            />
          </div>

          <div className={styles.button_container}>
            <button type="submit" className={styles.button_submit}>
              submit
            </button>
          </div>
        </form>

        <div className={styles.link_container}>
          <span className={styles.span_text}>
            i'm isn't arlardy have account?{" "}
            <a href="#" className={styles.link_register}>
              register
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
