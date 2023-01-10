import React from "react";
import "../Homecomponent/Section5.css";

const Section5 = () => {
  return (
    <div>
      <div className="sec5">

        <div className="sec5-box1">
            <span>GET IN TOUCH</span>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        </div>
        <div className="sec5-box2">
            <form>
                <label>Name* </label>
                <br />
                <input type="text" className="input1" placeholder="Enter your Name" />
                <br />
                <label>Email* </label>
                <br />
                <input type="text" className="input1" placeholder="Enter your Email" />
                <br />
                <label>Mobile No.* </label>
                <br />
                <input type="text" className="input1" placeholder="Enter your Mob No." />
                <br />
                <button className="button1">Register Now</button>
            </form>
        </div>

      </div>
    </div>
  );
};

export default Section5;
