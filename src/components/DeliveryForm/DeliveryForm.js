import React from "react";
import delivery from "../../images/delivery.png";
import "./DeliveryForm.css";
const DeliveryForm = () => {
  return (
    <div className="container margin-below">
      <div className="row delivery align-items-center ">
        <div className="col-md-6 col-12">
          {/* forms */}

          <h1 className=" fs-3">Edit delivery details</h1>
          <hr className="w-75" />
          <input
            type="text"
            name=""
            id=""
            className="form-control my-3 w-md-100 w-75 "
            value="Delivery to door"
          />
          <input
            type="text"
            name=""
            id=""
            className="form-control my-3 w-75 "
            value="107 Rd No 8 "
          />
          <input
            type="text"
            name=""
            id=""
            className="form-control my-3 w-75 "
            placeholder="Flat,suite or floor"
          />
          <input
            type="text"
            name=""
            id=""
            className="form-control my-3 w-75 "
            placeholder="Business Name"
          />
          <input
            type="text"
            name=""
            id=""
            className="form-control my-3 w-75 "
            placeholder="Add delivery instructor"
          />
          <button className="btn btn-danger w-75">Save and continue</button>
        </div>
        <div className="col-md-6 col-12 my-2">
          <img src={delivery} className=" w-75" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DeliveryForm;
