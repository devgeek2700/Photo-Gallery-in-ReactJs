import { useState } from 'react';
import Listitems from "./Listitems"
import Category from "./Category"
import logo from "./logo_food.png"
import Menu from './Menu';
import './App.css';

const allCatgy = ['All', ...new Set(Menu.map((currElem) => currElem.category ))]

console.log(allCatgy);


function App() {
  const [item, setItems] = useState(Menu);
  const [catitems, setcatitems] = useState(allCatgy);

  const filterItem = (catg) => {
    if(catg === 'All'){
      setItems(Menu);
      return;
    }
    const updateItems = Menu.filter((currVal) => {
      return currVal.category === catg;
    });

    setItems(updateItems);
  }
  return (
    <>
      <div className='gal_box'>
        <img src={logo} className='logo_img' alt="logo" />
        <h1>Menu Filter Gallery</h1>
      </div>

      <Category  filterItem = {filterItem}  catitems = {catitems}  />

      <Listitems item={item} />
    </>
  );
}

export default App;
