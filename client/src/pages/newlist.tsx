import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
        <h1 className="pageTitle">New Weekly List</h1>
        <h3>Select the meals you would like to have</h3>
        <Link className="btn btn_square" to="/">View Current List</Link>
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
  const [listOfFoods, setListOfFoods] = useState([{ ID: 0, short_name: "", name: "", favourited: "" }]);
  const [currentList, setCurrentList] = useState([{ ID: 0, short_name: "", name: "", favourited: "" }]);
  
  useEffect(() => {
    fetch('http://192.168.1.90:3000/meals', {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then((res) => (res.json()))
    .then((data) => {
      setListOfFoods(data)
      // console.log(listOfFoods)
    })
  }, [])

  useEffect(() => {
    fetch('http://192.168.1.90:3000/current', {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then((res) => (res.json()))
    .then((data) => {
      setCurrentList(data)
      // console.log(currentList)
    })
  }, [listOfFoods])
  
  return (
    <>
      {listOfFoods.map((i) => (
        <div key={i.ID} className="checkboxOption">
          {/* <input checked={currentList.includes(i)} type="checkbox" id={i.short_name} /> */}
          <input type="checkbox" id={i.short_name} />
          <label htmlFor={i.short_name}>{i.name}</label>
        </div>
      ))}
    </>
  );
}

export function StepTwo() {
  return <></>;
}
