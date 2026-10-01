import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  // ==================== INDOOR PLANTS ====================
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b2f?auto=format&fit=crop&w=600&q=80",
    description: "A hardy indoor plant that is easy to care for.",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
    description: "An elegant plant known for its beautiful white flowers.",
  },
  {
    id: 3,
    name: "Monstera",
    category: "Indoor Plants",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1614594575926-9e2d8c4f4c47?auto=format&fit=crop&w=600&q=80",
    description: "A popular tropical plant with large split leaves.",
  },
  {
    id: 4,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1632207691144-6ef3c5f2c7f4?auto=format&fit=crop&w=600&q=80",
    description: "A low-maintenance plant perfect for indoor spaces.",
  },
  {
    id: 5,
    name: "Pothos",
    category: "Indoor Plants",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1614594575926-9e2d8c4f4c47?auto=format&fit=crop&w=600&q=80",
    description: "A beautiful trailing plant that grows well indoors.",
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80",
    description: "A decorative plant with glossy green leaves.",
  },

  // ==================== FLOWERING PLANTS ====================
  {
    id: 7,
    name: "African Violet",
    category: "Flowering Plants",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
    description: "A compact flowering plant with colorful blooms.",
  },
  {
    id: 8,
    name: "Orchid",
    category: "Flowering Plants",
    price: 27.99,
    image:
      "https://images.unsplash.com/photo-1566907225470-cc1f0b5a0f9d?auto=format&fit=crop&w=600&q=80",
    description: "An elegant flowering plant that adds beauty to any room.",
  },
  {
    id: 9,
    name: "Anthurium",
    category: "Flowering Plants",
    price: 25.99,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
    description: "A tropical flowering plant with vibrant blooms.",
  },
  {
    id: 10,
    name: "Begonia",
    category: "Flowering Plants",
    price: 17.99,
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80",
    description: "A colorful plant suitable for bright indoor spaces.",
  },
  {
    id: 11,
    name: "Geranium",
    category: "Flowering Plants",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
    description: "A cheerful flowering plant with bright blossoms.",
  },
  {
    id: 12,
    name: "Kalanchoe",
    category: "Flowering Plants",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
    description: "A small flowering succulent with long-lasting blooms.",
  },

  // ==================== SUCCULENTS ====================
  {
    id: 13,
    name: "Aloe Vera",
    category: "Succulents",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "A useful succulent that is easy to grow indoors.",
  },
  {
    id: 14,
    name: "Echeveria",
    category: "Succulents",
    price: 11.99,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
    description: "A compact rosette-shaped succulent.",
  },
  {
    id: 15,
    name: "Jade Plant",
    category: "Succulents",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=600&q=80",
    description: "A popular succulent with thick rounded leaves.",
  },
  {
    id: 16,
    name: "Haworthia",
    category: "Succulents",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80",
    description: "A small striped succulent ideal for desks and shelves.",
  },
  {
    id: 17,
    name: "String of Pearls",
    category: "Succulents",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
    description: "A trailing succulent with bead-like leaves.",
  },
  {
    id: 18,
    name: "Burro's Tail",
    category: "Succulents",
    price: 20.99,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
    description: "A trailing succulent with thick, fleshy leaves.",
  },
];

function ProductList({ setCurrentPage }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div>
      {/* Navigation Bar */}
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
            🛒 Cart ({cartCount})
          </button>
        </div>
      </nav>

      {/* Product Listing */}
      <main className="products-page">
        <h1>Our Plants</h1>

        <p>
          Explore our collection of beautiful houseplants.
        </p>

        {/* Categories */}
        {categories.map((category) => (
          <section className="category-section" key={category}>
            <h2>{category}</h2>

            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const isInCart = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <article
                      className="product-card"
                      key={plant.id}
                    >
                      <img
                        src={plant.image}
                        alt={plant.name}
                        onError={(event) => {
                          event.target.style.display = "none";
                        }}
                      />

                      <h3>{plant.name}</h3>

                      <p>{plant.description}</p>

                      <p className="product-price">
                        ${plant.price.toFixed(2)}
                      </p>

                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart}
                      >
                        {isInCart
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </article>
                  );
                })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;