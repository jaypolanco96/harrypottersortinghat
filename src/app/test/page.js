"use client";
import React, { useState, useRef } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";

function Test() {
  const [hufflepuff, setHuffleP] = useState(0);
  const [ravenclaw, setRavenC] = useState(0);
  const [gryffindor, setGryffindor] = useState(0);
  const [slytherin, setSlytherin] = useState(0);

  const onClear = () => {
    setHuffleP(0);
    setRavenC(0);
    setGryffindor(0);
    setSlytherin(0);
  };

  const targetRef = useRef();
  const handleButtonClick = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const targetRef2 = useRef();
  const handleButtonClick2 = () => {
    targetRef2.current.scrollIntoView({ behavior: "smooth" });
  };
  const targetRef3 = useRef();
  const handleButtonClick3 = () => {
    targetRef3.current.scrollIntoView({ behavior: "smooth" });
  };
  const targetRef4 = useRef();
  const handleButtonClick4 = () => {
    targetRef4.current.scrollIntoView({ behavior: "smooth" });
  };
  const targetRef5 = useRef();
  const handleButtonClick5 = () => {
    targetRef5.current.scrollIntoView({ behavior: "smooth" });
  };
  const targetRef6 = useRef();
  const handleButtonClick6 = () => {
    targetRef6.current.scrollIntoView({ behavior: "smooth" });
  };
  const targetRef7 = useRef();
  const handleButtonClick7 = () => {
    targetRef7.current.scrollIntoView({ behavior: "smooth" });
  };
  const targetRef8 = useRef();
  const handleButtonClick8 = () => {
    targetRef8.current.scrollIntoView({ behavior: "smooth" });
  };
  const targetRef9 = useRef();
  const handleButtonClick9 = () => {
    targetRef9.current.scrollIntoView({ behavior: "smooth" });
  };
  const targetRef10 = useRef();
  const handleButtonClick10 = () => {
    targetRef10.current.scrollIntoView({ behavior: "smooth" });
  };

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
      <div className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          1. When faced with a difficult problem, which approach would you be
          more likely to take?
        </h1>
        <button
          className={styles.answer}
          onClick={() => {
            setRavenC(ravenclaw - 2);
            handleButtonClick();
          }}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>A&#41;</b> Use my intelligence and wit to find a clever solution.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button
          className={styles.answer}
          onClick={() => {
            setGryffindor(gryffindor - 2);
            handleButtonClick();
          }}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>B&#41;</b> Trust my instincts and rely on my courage to face it
            head-on.{" "}
          </p>
        </button>
      </div>
      <div ref={targetRef} className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          2. What kind of adventure would you most enjoy?
        </h1>
        <button
          className={styles.answer}
          onClick={() => {
            setHuffleP(hufflepuff - 2);
            handleButtonClick2();
          }}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>A&#41;</b> A mysterious journey through an ancient forest.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button
          className={styles.answer}
          onClick={() => {
            setGryffindor(gryffindor - 2);
            handleButtonClick2();
          }}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>B&#41;</b> An exciting quest full of danger and challenges.
          </p>
        </button>
      </div>
      <div ref={targetRef2} className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          3. What trait do you value most in a friend?
        </h1>
        <button
          className={styles.answer}
          onClick={() => {
            setHuffleP(hufflepuff - 2);
            handleButtonClick3();
          }}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>A&#41;</b> Loyalty and unwavering support.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button
          className={styles.answer}
          onClick={() => {
            setRavenC(ravenclaw - 2);
            handleButtonClick3();
          }}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>B&#41;</b> Intelligence and the ability to challenge me
            intellectually.{" "}
          </p>
        </button>
      </div>
      <div ref={targetRef3} className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          4. In a group project, which role would you naturally take on?
        </h1>
        <button
          className={styles.answer}
          onClick={() => {
            setHuffleP(hufflepuff - 2);
            handleButtonClick4();
          }}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>A&#41;</b> Ensuring everyone gets along and feels included.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button
          className={styles.answer}
          onClick={() => {
            setGryffindor(gryffindor - 2);
            handleButtonClick4();
          }}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>B&#41;</b> Taking the lead and organizing the team.{" "}
          </p>
        </button>
      </div>
      <div ref={targetRef4} className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          5. What would you do if you found an old, dusty book with no title?
        </h1>
        <button
          className={styles.answer}
          onClick={() => {
            setRavenC(ravenclaw - 2);
            handleButtonClick5();
          }}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>A&#41;</b> Take it to the library to see if anyone knows its
            history.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button
          className={styles.answer}
          onClick={() => {
            setSlytherin(slytherin - 2);
            handleButtonClick5();
          }}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>B&#41;</b> Open it to see if there are any hidden secrets inside.{" "}
          </p>
        </button>
      </div>
      <div ref={targetRef5} className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          6. Which quality do you find most admirable in a wizard or witch?
        </h1>
        <button
          className={styles.answer}
          onClick={() => {
            setHuffleP(hufflepuff - 2);
            handleButtonClick6();
          }}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>A&#41;</b> Kindness and compassion for others.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button
          className={styles.answer}
          onClick={() => {
            setSlytherin(slytherin - 2);
            handleButtonClick6();
          }}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>B&#41;</b> Ambition and a desire for greatness.{" "}
          </p>
        </button>
      </div>
      <div ref={targetRef6} className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          7. Whats your favorite way to spend a rainy day?
        </h1>
        <button
          className={styles.answer}
          onClick={() => {setRavenC(ravenclaw - 2); handleButtonClick7();}}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>A&#41;</b> Curled up with a good book in a cozy corner.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button
          className={styles.answer}
          onClick={() => {setGryffindor(gryffindor - 2); handleButtonClick7();}}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>B&#41;</b> Exploring new places or trying something adventurous.{" "}
          </p>
        </button>
      </div>
      <div ref={targetRef7} className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          8. What do you value most in a magical object?
        </h1>
        <button
          className={styles.answer}
          onClick={() => {setHuffleP(hufflepuff - 2); handleButtonClick8();}}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>A&#41;</b> Its ability to bring joy and happiness to people.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button
          className={styles.answer}
          onClick={() => {setSlytherin(slytherin - 2); handleButtonClick8();}}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>B&#41;</b> Its power and potential for achieving great feats.{" "}
          </p>
        </button>
      </div>
      <div ref={targetRef8} className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          9. Whats your approach to dealing with a difficult adversary?
        </h1>
        <button
          className={styles.answer}
          onClick={() => {setHuffleP(hufflepuff - 2); handleButtonClick9();}}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>A&#41;</b> Trying to find a peaceful resolution through
            negotiation.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button
          className={styles.answer}
          onClick={() => {setGryffindor(gryffindor - 2); handleButtonClick9();}}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>B&#41;</b> Standing up and facing the challenge head-on, no
            matter the risks.{" "}
          </p>
        </button>
      </div>
      <div ref={targetRef9} className={styles.questions}>
        <h1 style={{ color: "#ffffff" }}>
          10. Whats your greatest desire in life?
        </h1>
        <button
          className={styles.answer}
          onClick={() => {setHuffleP(hufflepuff - 2); handleButtonClick10();}}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>A&#41;</b> To make lasting, meaningful connections with others.
          </p>
        </button>
        <h3 style={{ color: "#ffffff" }}>Or</h3>
        <button
          className={styles.answer}
          onClick={() => {setSlytherin(slytherin - 2); handleButtonClick10();}}
        >
          <p style={{ color: "#ffffff", fontSize: "2.5vh" }}>
            <b>B&#41;</b> To achieve greatness and leave a lasting legacy.{" "}
          </p>
        </button>
      </div>
      <div ref={targetRef10} className={styles.results}>
        <p style={{ color: "#000000", fontSize: "7vw" }}>
          Gryffindor: {gryffindor}
        </p>
        <p style={{ color: "#000000", fontSize: "7vw" }}>
          RavenClaw: {ravenclaw}
        </p>
        <p style={{ color: "#000000", fontSize: "7vw" }}>
          HufflePuff: {hufflepuff}
        </p>
        <p style={{ color: "#000000", fontSize: "7vw" }}>
          Slytherin: {slytherin}
        </p>
        <h1
          onClick={onClear}
          style={{
            color: "#800000",
            fontSize: "10vw",
            marginLeft: "35vw",
            cursor: "pointer",
          }}
        >
          <FaTrashAlt />
        </h1>
        <code style={{ fontSize: "2vw", margin: "2vw" }}>
          <i>
            How to Play: Your house is the highest score above. For example
            &quot;-2&quot; would be a higher score than &quot;-8&quot;.
          </i>
        </code>
      </div>
    </div>
  );
}

export default Test;
