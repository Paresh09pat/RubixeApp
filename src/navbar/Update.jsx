import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../navbar/Homecomponent/css/List.css"


const Update = () => {
  
  const [name, setname] = useState("");
  const [mobileno, setmobileno] = useState("");
  const [email, setemail] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [description, setdescription] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(params);
    getproductdet();
  });

  const getproductdet = async () => {
    let result = await fetch(`https://calm-red-zebra-gear.cyclic.app/product/${params.id}`);
    result = await result.json();

    console.log(result);
    setname(result.name);
    setmobileno(result.mobileno);
    setemail(result.email);
    setstate(result.state);
    setcity(result.city);
    setdescription(result.description);
  };

  const updateproduct = async () => {
    console.log(name, mobileno, email, state, city, description);
    let result = await fetch(`https://calm-red-zebra-gear.cyclic.app/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({
        name,
        mobileno,
        email,
        state,
        city,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    navigate("/list");
  };

  return (
    <div>
    <div className="registration">
      <div className="from-box-1"></div>
      <div className="login-box-2">
        <h1 className="register1">UPDATE</h1>

          <label for="name" className="label1">Name : </label>
          <br/>
          <input type="text" name="name" value={name} onChange={(e)=>{setname(e.target.value)}} />
          <br/>
          <label for="mobile" className="label2">Mobile No. : </label>
          <br/>
          <input type="text" name="mobile" value={mobileno} onChange={(e)=>{setmobileno(e.target.value)}}/>
          <br/>
          <label for="email" className="label3">Email : </label>
          <br/>
          <input type="text" name="email"  value={email} onChange={(e)=>{setemail(e.target.value)}} />
          <br/>
          <label for="state" className="label4">State : </label>
          <br/>
          <input type="text" name="state"  value={state} onChange={(e)=>{setstate(e.target.value)}} />
          <br/>
          <label for="city" className="label5">City : </label>
          <br/>
          <input type="text" name="city"  value={city} onChange={(e)=>{setcity(e.target.value)}}/>
          <br/>
          <label for="des" className="label6">Discription : </label>
          <br/>
          <input type="text" name="des"  value={description} onChange={(e)=>{setdescription(e.target.value)}} />
          <br/>
          
         <Link to="/list">

          <button className="btn1" onClick={updateproduct}>
           UPDATE
          </button>
         </Link>
      </div>
    </div>
  </div>
  );
};

export default Update;
