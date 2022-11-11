import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <h1>Toshi's Bakery</h1>
      <hr></hr>

      <row>
        <tr>
          <th id="one">
            {bakeryData.map((item, index) => (
            <BakeryItem cart={cart} total={total} setTotal={setTotal} setCart={setCart} price={item.price} name={item.name} image={item.image} desc={item.description}></BakeryItem>
            ))}
          </th>
          <th id= "two">
          <div>
          <h2>Cart</h2>
          <div id="items">
            {cart.map(item => (
              <div id="item">{item.name.count} x {item.id} {item.name.price}</div>
            ))}
            <hr></hr>
            <p>Total: {total}</p>
          </div>
          </div>
          </th>
        </tr>
      </row>
    </div>
  );
}

export default App;
