import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./food.css";
const Food = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 food">
      {food.map((fd) => {
        return (
          <div className="col " key={fd.id}>
            <div className="border-0 card h-100">
              <img src={fd.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">{fd.name}</h5>
                <p className="card-text text-center">{fd.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Food;
