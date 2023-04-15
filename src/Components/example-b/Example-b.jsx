import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./example-b.css";

function ExampleB() {
  const [isEnter, setIsEnter] = useState(true);
  return (
    <div class="container">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
        setIsEnter((v) => !v);
      }}>Transition</button>
      <CSSTransition
        in={isEnter}
        timeout={5000}
        appear={true}
        classNames="myclass"
      >
        <p class="my-paragraph">{isEnter ? "Enter" : "Exit"}</p>
      </CSSTransition>
    </div>
  );
}

export default ExampleB;
