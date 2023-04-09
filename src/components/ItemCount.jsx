import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

const ItemCount = ({ id, name, price, stock, Imagen }) => {
  const { cart, addToCart } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const restar = () => {
    if (count < 1) {
      Swal.fire("No puedes tener menos que 0");
    } else {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count >= stock) {
    } else {
      setCount(count + 1);
    }
  };

  const handleAddToCart = () => {
    const prod = {
      id,
      name,
      price,
      cantidad: count,
      Imagen,
    };

    addToCart(prod);
  };

  return (
    <div>
      <div>
        <Button
          className="border border-dark p-2 m-3 rounded-4 "
          onClick={restar}
        >
          -
        </Button>

        <span>{count}</span>

        <Button
          className="border border-dark p-2 m-3 rounded-4 "
          onClick={sumar}
        >
          +
        </Button>
      </div>
      <div>
        <button
          onClick={handleAddToCart}
          className="border border-dark p-2 m-2 rounded-5 "
        >
          <Link to={"/cart"}> Agregar al carrito: {count} </Link>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
