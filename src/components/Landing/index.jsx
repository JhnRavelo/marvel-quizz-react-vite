import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Landing() {
  const wolverineImage = useRef(null);
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      wolverineImage.current.classList.add("startingImg");
      setBtn(true);
    }, 1000);

    setTimeout(() => {
      wolverineImage.current.classList.remove("startingImg");
    }, 1500);
  }, []);

  const addRightClaw = () => {
    wolverineImage.current.classList.add("rightImg");
  };

  const addLeftClaw = () => {
    wolverineImage.current.classList.add("leftImg");
  };

  const clearClawImage = () => {
    if (wolverineImage.current.classList.contains("leftImg")) {
      wolverineImage.current.classList.remove("leftImg");
    } else if (wolverineImage.current.classList.contains("rightImg")) {
      wolverineImage.current.classList.remove("rightImg");
    }
  };

  const showBtn = btn && (
    <>
      <div className="leftBox">
        <Link to="/signup">
          <button
            onMouseOver={addLeftClaw}
            onMouseOut={clearClawImage}
            className="btn-welcome"
          >
            Inscription
          </button>
        </Link>
      </div>
      <div className="rightBox">
        <Link to="/login">
          <button
            onMouseOver={addRightClaw}
            onMouseOut={clearClawImage}
            className="btn-welcome"
          >
            Connexion
          </button>
        </Link>
      </div>
    </>
  );

  return (
    <>
      <main ref={wolverineImage} className="welcomePage">
        {showBtn}
      </main>
    </>
  );
}

export default Landing;
