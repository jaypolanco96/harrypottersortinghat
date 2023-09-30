import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

function SignUp() {
  return (
    <div className={styles.signupbox}>
      <Link href="/login">
        <button className={styles.signup}></button>
      </Link>
    </div>
  );
}

export default SignUp;
