"use client";
import React from "react";
import styles from "../page.module.css";
import Question from "../components/questions";
import SignUp from "../components/signup";
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";

function Welcome() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Image
        src="/hps.png"
        width={89}
        height={89}
        alt="public/hps.png"
        style={{ marginRight: "60vw", marginBottom: "-8vh" }}
      />
      <Link href="/" style={{ textDecoration: "none" }}>
        <h2 id={styles.home} style={{ color: "#ffffff", fontSize: "5vw" }}>
          Home
        </h2>
      </Link>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={styles.nav}
      >
        <Link href="/">
          <Image
            src="/hwc.png"
            width={89}
            height={89}
            alt="public/hwc.png"
            style={{ borderRadius: "19px" }}
          />
        </Link>
      </div>
      <Question />
      {/* <SignUp /> */}
      <Footer />
    </div>
  );
}

export default Welcome;
