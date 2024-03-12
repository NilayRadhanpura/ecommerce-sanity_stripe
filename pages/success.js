import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsBagCheckFill } from "react-icons/bs";
const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thannk You For Your Oreder!</h2>
        <p className="description">
          if have any quetions please email{" "}
          <a href="mailto:order@example.com" className="email">
            order@example.com
          </a>
          <Link href="/">
            <button type="button" width="300px" className="btn">
              Continue Shopping
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default success;
