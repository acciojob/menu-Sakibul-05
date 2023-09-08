import React,{useState} from 'react';
import '../styles/App.css'
import data from '../data';
import Item from './Item';

const App = () => {
    const [filteredItems, setFilteredItems] = useState(data)
 

  return (
    <div className='app'>
        <h1>Our Menu</h1> 
       
        <div className="category-field">
            <button id='main' onClick={()=>setFilteredItems(data)}>All</button>
            <button id='filter-btn-1' onClick={()=>setFilteredItems(data.filter(e=>e.category==='breakfast'))}>Breakfast</button>
            <button id='filter-btn-2' onClick={()=>setFilteredItems(data.filter(e=>e.category==='lunch'))}>Lunch</button>
            <button id='filter-btn-3' onClick={()=>setFilteredItems(data.filter(e=>e.category==='shakes'))}>Shakes</button>
        </div>
        <div className="items-container">
            {
                filteredItems.map((item)=> {
                    return (<Item key={item.id} title={item.title} category={item.category} price={item.price} img={item.img} desc={item.desc}/>)
                })
            }

        </div>
       
    </div>
  )
}

export default App


