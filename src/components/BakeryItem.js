// TODO: create a component that displays a single bakery item
import './BakeryItem.css'
import { useState } from 'react'
export default function BakeryItem(props) {
  const [count, setCount] = useState(1);
  var cartItem = function() {
    this.count = count; 
    this.name = props.name;
    this.price = props.price;
  }

  function increment() {
    setCount(count + 1)
  }

  let item = new cartItem()

    return (
      <div id="card">
        <img src={props.image} alt={props.desc} />
        <h3>{props.name}</h3>
        <h4>{props.price}</h4>
        <button onClick={() => {
          let filtered = props.cart.filter(a => a.id !== item.name)
            props.setCart([
              ...filtered, {id: item.name, name: item}
            ]);
            increment();
            props.setTotal(props.total + item.price);

        }}> Add to Cart </button> 
      </div>
    );
  }