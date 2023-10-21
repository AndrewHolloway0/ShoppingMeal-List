import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [listOfMeals, setListOfMeals] = useState([{ ID: 0, short_name: "", name: "", favourited: "" }]);

  useEffect(() => {
    fetch("http://192.168.1.90:3000/current", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((res) => res.json())
    .then((data) => {
      // console.log(JSON.stringify(data))
      setListOfMeals(data);
    });
  }, []);

  return (
    <div className="contentContainer">
      <h1 className="pageTitle">Meal List</h1>
      <Link className="btn btn_square" to="/newlist">Create New List</Link>
      {listOfMeals.map((i) => (
        <p>{i.name}</p>
      ))}
    </div>
  );
}
