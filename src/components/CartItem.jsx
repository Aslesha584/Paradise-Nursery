import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

function CartItem({ setCurrentPage }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    alert("Checkout Coming Soon!");
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="navbar-links">
          <button onClick={() => setCurrentPage("home")}>
            Home
          </button>

          <button onClick={() => setCurrentPage("plants")}>
            Plants
          </button>

          <button onClick={() => setCurrentPage("cart")}>
            🛒 Cart ({cartItems.reduce(
              (total, item) => total + item.quantity,
              0
            )})
          </button>
        </div>
      </nav>

      <main className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div>
            <h2>Your cart is empty</h2>

            <button
              className="continue-shopping-btn"
              onClick={() => setCurrentPage("plants")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {cartItems.map((item) => {
              const itemTotal = item.price * item.quantity;

              return (
                <article className="cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <h2>{item.name}</h2>

                    <p>
                      Unit Price: ${item.price.toFixed(2)}
                    </p>

                    <p>
                      Total: ${itemTotal.toFixed(2)}
                    </p>
                  </div>

                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => handleDecrease(item.id)}
                      disabled={item.quantity === 1}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      className="quantity-btn"
                      onClick={() => handleIncrease(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </article>
              );
            })}

            <div className="cart-total">
              Total Cart Amount: ${totalAmount.toFixed(2)}
            </div>

            <div className="cart-actions">
              <button
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              <button
                className="continue-shopping-btn"
                onClick={() => setCurrentPage("plants")}
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;