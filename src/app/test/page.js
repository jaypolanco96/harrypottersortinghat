"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

function Test() {
  const [hufflepuff, setHuffleP] = useState(0);
  const [ravenclaw, setRavenC] = useState(0);
  const [gryffindor, setGryffindor] = useState(0);
  const [slytherin, setSlytherin] = useState(0);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={styles.nav}
      >
        <Link href="/" style={{textDecoration: "none"}}>
          <h2 style={{ color: "#ffffff"}}>Home</h2>
        </Link>
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
      <div className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          1. When faced with a difficult problem, which approach would you be
          more likely to take?
        </h1>
        <button id={styles.answer} onClick={() => setRavenC(ravenclaw - 2)}>
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            A&#41; Use my intelligence and wit to find a clever solution.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button
          id={styles.answer}
          onClick={() => setGryffindor(gryffindor - 2)}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            B&#41; Trust my instincts and rely on my courage to face it head-on.{" "}
          </p>
        </button>
      </div>
      <div className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          2. What kind of adventure would you most enjoy?
        </h1>
        <button id={styles.answer} onClick={() => setHuffleP(hufflepuff - 2)}>
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            A&#41; A mysterious journey through an ancient forest.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button
          id={styles.answer}
          onClick={() => setGryffindor(gryffindor - 2)}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            B&#41; An exciting quest full of danger and challenges.
          </p>
        </button>
      </div>
      <div className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          3. What trait do you value most in a friend?
        </h1>
        <button id={styles.answer} onClick={() => setHuffleP(hufflepuff - 2)}>
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            A&#41; Loyalty and unwavering support.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button id={styles.answer} onClick={() => setRavenC(ravenclaw - 2)}>
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            B&#41; Intelligence and the ability to challenge me intellectually.{" "}
          </p>
        </button>
      </div>
      <div className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          4. In a group project, which role would you naturally take on?
        </h1>
        <button id={styles.answer} onClick={() => setHuffleP(hufflepuff - 2)}>
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            A&#41; Ensuring everyone gets along and feels included.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button
          id={styles.answer}
          onClick={() => setGryffindor(gryffindor - 2)}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            B&#41; Taking the lead and organizing the team.{" "}
          </p>
        </button>
      </div>
      <div className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          5. What would you do if you found an old, dusty book with no title?
        </h1>
        <button id={styles.answer} onClick={() => setRavenC(ravenclaw - 2)}>
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            A&#41; Take it to the library to see if anyone knows its history.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button id={styles.answer} onClick={() => setSlytherin(slytherin - 2)}>
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            B&#41; Open it to see if there are any hidden secrets inside.{" "}
          </p>
        </button>
      </div>
      <div className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          6. Which quality do you find most admirable in a wizard or witch?
        </h1>
        <button id={styles.answer} onClick={() => setHuffleP(hufflepuff - 2)}>
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            A&#41; Kindness and compassion for others.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button id={styles.answer} onClick={() => setSlytherin(slytherin - 2)}>
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            B&#41; Ambition and a desire for greatness.{" "}
          </p>
        </button>
      </div>
      <div className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          7. Whats your favorite way to spend a rainy day?
        </h1>
        <button id={styles.answer} onClick={() => setRavenC(ravenclaw - 2)}>
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            A&#41; Curled up with a good book in a cozy corner.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button
          id={styles.answer}
          onClick={() => setGryffindor(gryffindor - 2)}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            B&#41; Exploring new places or trying something adventurous.{" "}
          </p>
        </button>
      </div>
      <div className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          8. What do you value most in a magical object?
        </h1>
        <button id={styles.answer} onClick={() => setHuffleP(hufflepuff - 2)}>
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            A&#41; Its ability to bring joy and happiness to people.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button id={styles.answer} onClick={() => setSlytherin(slytherin - 2)}>
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            B&#41; Its power and potential for achieving great feats.{" "}
          </p>
        </button>
      </div>
      <div className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          9. Whats your approach to dealing with a difficult adversary?
        </h1>
        <button id={styles.answer} onClick={() => setHuffleP(hufflepuff - 2)}>
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            A&#41; Trying to find a peaceful resolution through negotiation.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button
          id={styles.answer}
          onClick={() => setGryffindor(gryffindor - 2)}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            B&#41; Standing up and facing the challenge head-on, no matter the
            risks.{" "}
          </p>
        </button>
      </div>
      <div className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          10. Whats your greatest desire in life?
        </h1>
        <button id={styles.answer} onClick={() => setHuffleP(hufflepuff - 2)}>
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            A&#41; To make lasting, meaningful connections with others.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button id={styles.answer} onClick={() => setSlytherin(slytherin - 2)}>
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            B&#41; To achieve greatness and leave a lasting legacy.{" "}
          </p>
        </button>
      </div>
      <div className={styles.results}>
        <p style={{ color: "#ffffff", fontSize: "5vw" }}>
          Gryffindor: {gryffindor}
        </p>
        <p style={{ color: "#ffffff", fontSize: "5vw" }}>
          RavenClaw: {ravenclaw}
        </p>
        <p style={{ color: "#ffffff", fontSize: "5vw" }}>
          HufflePuff: {hufflepuff}
        </p>
        <p style={{ color: "#ffffff", fontSize: "5vw" }}>
          Slytherin: {slytherin}
        </p>
      </div>
    </div>
  );
}

export default Test;
