"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div id={styles.stars}></div>
      <div id={styles.stars2}></div>
      <div id={styles.stars3}></div>
      <div className={styles.container}>
        <div className={styles.srtnghat}>
          <Image
            src="/sh.gif"
            width={360}
            height={360}
            alt="public/sh.gif"
            style={{ borderRadius: "19px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "2vw 2vw 0 2vw",
            }}
          >
            <Image
              src="/giphy.png"
              width={115}
              height={25}
              alt="public/giphy.png"
            />
            <code style={{ color: "#ffffff" }}>Credit: &#64;Poupoutte</code>
          </div>
        </div>
        <div className={styles.start}>
          <Link href="/welcome">
            <button id={styles.strtbtn}></button>
          </Link>
          <code style={{ margin: "5vw", color: "#b7813fff" }}>
            By clicking &quot;Start&quot;, you confirm reading and agreeing to
            the disclaimer on this page. Proceed with acknowledgment.
          </code>
        </div>
        <div className={styles.footer}>
          <code>
            <p style={{ color: "#ffffff" }}>
              Disclaimer: Welcome to our Harry Potter Sorting Hat Test! Before
              you embark on this magical journey, please take a moment to read
              the following disclaimer: 1. For Entertainment Purposes Only: This
              test is designed purely for fun and entertainment. It is not an
              official assessment by J.K. Rowling or the creators of the Harry
              Potter series. 2. No Official Affiliation: This website is not
              affiliated with Warner Bros., J.K. Rowling, or the Harry Potter
              franchise in any official capacity. 3. Personal Data Protection:
              We do not collect or store any personal information during this
              test. Your responses are kept completely anonymous. 4. Results May
              Vary: Your house assignment in this test is based on your answers
              to a series of questions. The result is determined by a predefined
              algorithm and should not be considered an official Hogwarts house
              assignment. 5. Not a Replacement for Professional Advice: This
              test does not provide professional advice or psychological
              assessments. It is not a substitute for seeking advice from a
              licensed professional. 6. Age Restrictions: This test is suitable
              for all ages, but younger participants may require parental
              guidance due to the website&apos;s Harry Potter theme. 7. Respect
              and Kindness: We encourage users to be respectful and kind in all
              interactions related to this test. Any form of harassment,
              discrimination, or inappropriate behavior will not be tolerated.
              8. Intellectual Property: All intellectual property rights
              associated with Harry Potter and Hogwarts belong to Warner Bros.,
              J.K. Rowling, and the respective copyright holders. 9. Terms of
              Use: By taking this test, you agree to abide by the terms of use
              outlined on this website. 10. Enjoy the Magic: Have fun, embrace
              the magic, and may the sorting hat reveal the house that best
              suits your personality in the wizarding world! Remember, this test
              is meant to be a lighthearted experience for fans of the Harry
              Potter series. Enjoy the adventure! 🏰🧙‍♂️
            </p>
            <p style={{ color: "#ffffff" }}>Developed By: Jordan Polanco</p>
          </code>
        </div>
      </div>
    </div>
  );
}
