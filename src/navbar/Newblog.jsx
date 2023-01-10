import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Newblog = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    getproducts();
  }, []);

  const getproducts = async () => {
    let result = await fetch(
      "https://calm-red-zebra-gear.cyclic.app/registrations"
    );
    result = await result.json();
    setproducts(result);
  };

  const deleteid = async (id) => {
    let result = await fetch(
      `https://calm-red-zebra-gear.cyclic.app/product/${id}`,
      {
        method: "Delete",
      }
    );
    result = await result.json();
    if (result) {
      alert("deleted");
      getproducts();
    }
  };
  const searchhandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(
        `https://calm-red-zebra-gear.cyclic.app/search/${key}`
      );
      result = await result.json();
      if (result) {
        setproducts(result);
      }
    } else {
      getproducts();
    }
  };
  return (
    <div className="product_list">
      <div className="pagename">
        <h1>USER LIST</h1>
        <div className="underline-1"></div>
      </div>

      <input
        type="text"
        onChange={searchhandle}
        className="searchblog1"
        placeholder="Search User"
      />

      <div className="article-box1">
        <div className="article-box-1">
          <table className="table1" border="1px solid black">
            <tr>
              <td className="td1 td22">S NO.</td>
              <td className="td2 td22">Name</td>
              <td className="td3 td22">Mobile</td>
              <td className="td4 td22">Email</td>
              <td className="td5 td22">State</td>
              <td className="td6 td22">Action</td>
            </tr>
          </table>
          <br />

          {products.length > 0 ? (
            products.map((item, index) => (
              <div className="article-main-box" key={item._id}>
                <table border="1px solid black">
                  <tr>
                    <td className="td1">{index + 1}</td>
                    <td className="td2">{item.name}</td>
                    <td className="td3">{item.mobileno}</td>
                    <td className="td4">{item.email}</td>
                    <td className="td5">{item.state}</td>
                    <td className="td6">
                      <div className="icons">
                        <Link to={"/update/" + item._id}>
                          <FontAwesomeIcon
                            className="edit1"
                            icon={faPenToSquare}
                          />
                        </Link>
                        <div
                          className="deletebtn"
                          onClick={() => deleteid(item._id)}
                        >
                          <FontAwesomeIcon
                            className="delete1"
                            icon={faTrashCan}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            ))
          ) : (
            <h3>No result found</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newblog;
