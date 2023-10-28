"use client"
import { Link } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";

// Import Styles
import "../styles/home.scss";

// Import Hooks
import useMultiStepForm from "../hooks/useMultiStepForm";

export default function Home() {
  const { step, steps, currentStepIndex, back, next } = useMultiStepForm([
    StepOne(),
    StepTwo(),
  ]);

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: FormData) {
    setIsLoading(true)
    await console.log(data.values())
    setIsLoading(false)
    // await console.log("Sumitted: "+ allData)
  }

  return (
    <>
      <div className="contentContainer">
        <h1 className="pageTitle">New Weekly List</h1>
        <h3>Select the meals you would like to have</h3>
        <Link className="btn btn_square" to="/">View Current List</Link>
        {currentStepIndex === 1 ? (
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
        <form className="optionList" action={onSubmit}>
          {step}
          <button disabled={isLoading}>
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}

export function StepOne() {
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState({ isErr: "false", errMsg: "" });

  const [listOfMeals, setListOfMeals] = useState([{ ID: 0, short_name: "", name: "", favourited: "" }]);
  const [currentMealList, setCurrentMealList] = useState([{ ID: 0, short_name: "", name: "", favourited: "" }]);
  const [newSelectedMeals, setNewSelectedMeals] = useState([]);
  
  const getAllMeals = async() =>  {
    setIsLoading(true);
    axios
      .get("http://192.168.1.90:3000/meals")
      .then((res) => {
        setListOfMeals(res.data)
      })
      .catch((err) => {
        setErr({ isErr: "true", errMsg: err.message })
      })
      .finally(() => {
        getSelectedMeals()
      });
  };
  
  const getSelectedMeals = async() =>  {
    axios
      .get("http://192.168.1.90:3000/meals")
      .then((res) => {
        setCurrentMealList(res.data)
      })
      .catch((err) => {
        setErr({ isErr: "true", errMsg: err.message })
        // console.log(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      });
  };

  useEffect(() => {
    getAllMeals();
  }, []);
  
  return (
    <>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : err.isErr == "true" ? (
        <p>An error occurred: {err.errMsg}</p>
      ) : (
        listOfMeals.map((i) => (
          <div key={i.ID} className="checkboxOption">
            {/* <input checked={currentList.includes(i)} type="checkbox" id={i.short_name} /> */}
            <input type="checkbox" id={i.short_name} />
            <label htmlFor={i.short_name}>{i.name}</label>
          </div>
        ))
      )}
    </>
  );
}

export function StepTwo() {
  return <></>;
}
