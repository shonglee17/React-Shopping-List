import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';


function App() {
    const [shoppinglist, setList] = useState([]);
    const [nameInput, setNameInput] = useState('');
    const [quantityInput, setQuantityInput] = useState('');

  useEffect(() => {
    getList()
  }, [])


 const getList = () => {
    axios.get('/shoppinglist')
      .then(response => {
        console.log("This is the response", response.data)
        setList(response.data)
      })
      .catch(err => {
        alert('error in GET: getlist');
        console.log(err);
      })
  }

const createList = () => {
  axios.post('/shoppinglist',{
      name: nameInput,
      quantity: quantityInput
  }).then((response) => {
    setNameInput('');
    setQuantityInput('');
    getList();
  }).catch((error) => {
    console.log('createList error:', error);
  })
    return (
<<<<<<< HEAD
        <div className="App">
            <Header />
            <ShoppingList/>
        </div>
    );
=======
  <>
  <h1>Add an Item</h1>
   <Header />
  <form onSubmit={createList}>
    <label>Item: </label>
    <input
    placeholder="name"
    type="text"
    value={nameInput}
    onChange={(event) => {setNameInput(event.target.value)}}
    />
    <label>Quantity: </label>
    <input
    placeholder="quantity"
    type="text"
    value={quantityInput}
    onChange={(event) => {setQuantityInput(event.target.value)}}
    />
    <button type = "submit">Save</button>
  </form>
  <>
   <div className="App">
      <main>
      <ShoppingList shoppingList={shoppingList} getList={getList}/>
      </main>
   </div>
  </>
)
>>>>>>> 93e2d02247c3f1449f8af8aa2a78630c19927cb6
}
export default App;
