import { Link } from "react-router-dom";

// Import Styles
import "../styles/home.scss";

// Import Hooks
import useMultiStepForm from "../hooks/useMultiStepForm";

export default function Home() {
  const { step, steps, currentStepIndex, back, next } = useMultiStepForm([
    StepOne(),
    StepTwo(),
  ]);

  return (
    <>
      <div className="contentContainer">
        <h1 className="pageTitle">Test</h1>
        <h3>Select the meals you would like to have</h3>
        {currentStepIndex == 1 ? (
          <Link className="formArrows" to="" onClick={back} tabIndex={0}>
            &lt;
          </Link>
        ) : (
          <span></span>
        )}
        {/* <h1>App Title</h1> */}
        {currentStepIndex >= steps.length - 1 ? (
          <span></span>
        ) : (
          <Link className="formArrows" to="" onClick={next} tabIndex={0}>
            &gt;
          </Link>
        )}
        <p>
          {currentStepIndex + 1} / {steps.length}
        </p>
        <form className="optionList">{step}</form>
      </div>
    </>
  );
}

export function StepOne() {
  return (
    <>
      <div className="checkboxOption">
        <input type="checkbox" id="opt_hotdogs" />
        <label htmlFor="opt_hotdogs">Hot Dogs</label>
      </div>
      <div className="checkboxOption">
        <input type="checkbox" id="opt_Tacos" />
        <label htmlFor="opt_Tacos">Tacos</label>
      </div>
      <div className="checkboxOption">
        <input type="checkbox" id="opt_burgers" />
        <label htmlFor="opt_burgers">Burgers</label>
      </div>
      <div className="checkboxOption">
        <input type="checkbox" id="opt_Pilaf" />
        <label htmlFor="opt_Pilaf">Pilaf</label>
      </div>
      <div className="checkboxOption">
        <input type="checkbox" id="opt_Nachos" />
        <label htmlFor="opt_Nachos">Nachos</label>
      </div>
      <div className="checkboxOption">
        <input type="checkbox" id="opt_Spaghetti" />
        <label htmlFor="opt_Spaghetti">Spaghetti Bolognese</label>
      </div>
      <div className="checkboxOption">
        <input type="checkbox" id="opt_ThaiGreenCurry" />
        <label htmlFor="opt_ThaiGreenCurry">Thai Green Curry</label>
      </div>
      <div className="checkboxOption">
        <input type="checkbox" id="opt_PastaMeatballs" />
        <label htmlFor="opt_PastaMeatballs">Pasta and Meatballs</label>
      </div>
      <div className="checkboxOption">
        <input type="checkbox" id="opt_FriedRice" />
        <label htmlFor="opt_FriedRice">Special Fried Rice</label>
      </div>
      <div className="checkboxOption">
        <input type="checkbox" id="opt_Vindaloo" />
        <label htmlFor="opt_Vindaloo">Vindaloo</label>
      </div>
      <div className="checkboxOption">
        <input type="checkbox" id="opt_ShepardsPie" />
        <label htmlFor="opt_ShepardsPie">Shepards Pie</label>
      </div>
      <div className="checkboxOption">
        <input type="checkbox" id="opt_Fettaccini" />
        <label htmlFor="opt_Fettaccini">Fettacinni</label>
      </div>
    </>
  );
}

export function StepTwo() {
  return <></>;
}
