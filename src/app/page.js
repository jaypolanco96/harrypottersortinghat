"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";

export default function Home() {
  const [hufflepuff, setHuffleP] = useState(0);
  const [ravenclaw, setRavenC] = useState(0);
  const [gryffindor, setGryffindor] = useState(0);
  const [slytherin, setSlytherin] = useState(0);

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
        </div>
        <div className={styles.start}>
          <button id={styles.strtbtn}></button>
        </div>

        <div className={styles.footer}>
          <code>
            <p style={{ color: "#ffffff" }}>
              Developed By:
              Jordan Polanco
            </p>
            <p style={{ color: "#ffffff" }}>
              Disclaimer: Welcome to our magical Sorting Hat test! This quiz,
              inspired by the world of Harry Potter, is for entertainment
              purposes only. Its not an official Pottermore test. The results
              are meant to add a touch of wizardry to your day! Embrace your
              house, but remember, its all in good fun. Enjoy your journey at
              Hogwarts!
            </p>
          </code>
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
              B&#41; Trust my instincts and rely on my courage to face it
              head-on.{" "}
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
              B&#41; Intelligence and the ability to challenge me
              intellectually.{" "}
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
          <button
            id={styles.answer}
            onClick={() => setSlytherin(slytherin - 2)}
          >
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
          <button
            id={styles.answer}
            onClick={() => setSlytherin(slytherin - 2)}
          >
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
          <button
            id={styles.answer}
            onClick={() => setSlytherin(slytherin - 2)}
          >
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
          <button
            id={styles.answer}
            onClick={() => setSlytherin(slytherin - 2)}
          >
            <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
              B&#41; To achieve greatness and leave a lasting legacy.{" "}
            </p>
          </button>
        </div>
        <div className={styles.results}>
          <p style={{ color: "#ffffff" }}>Gryffindor: {gryffindor}</p>
          <p style={{ color: "#ffffff" }}>Ravenclaw: {ravenclaw}</p>
          <p style={{ color: "#ffffff" }}>Hufflepuff: {hufflepuff}</p>
          <p style={{ color: "#ffffff" }}>Slytherin: {slytherin}</p>
        </div>
      </div>
    </div>
  );
}
