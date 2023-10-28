import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

type ListOfMealsType = {
  ID: number;
  short_name: string;
  name: string;
  favourited: string;
};

type InitialListOfMealsType = {
  initialListOfMeals: ListOfMealsType[];
};

export default function Home() {
  const [listOfMeals, setListOfMeals] = useState([{ ID: 0, short_name: "", name: "", favourited: "" }]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState({ isErr: "false", errMsg: "" });

  const getSelectedMeals = async() =>  {
    setIsLoading(true);
    axios
      .get("http://192.168.1.90:3000/current")
      .then((res) => {
        setListOfMeals(res.data)
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
    getSelectedMeals();
  }, []);

  return (
    <div className="contentContainer">
      <h1 className="pageTitle">Meal List</h1>
      <Link className="btn btn_square" to="/newlist">
        Create New List
      </Link>
      <ul>
        {isLoading ? (
          <h4>Loading...</h4>
        ) : err.isErr === "true" ? (
          <p>An error occurred: {err.errMsg}</p>
        ) : (
          listOfMeals.map((i) => <li key={i.ID}>{i.name}</li>)
        )}
      </ul>
    </div>
  );
}
