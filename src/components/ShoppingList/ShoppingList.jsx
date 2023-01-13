import axios from "axios";
import React from "react";

function ShoppingList({ shoppingList, getList }){
    
    function removeItem (id) {

        axios({
            method: 'DELETE',
            url: `/shoppinglist/${id}`
          }).then((response) => {
            getList();
          }).catch((error) => {
            console.log('removeItem() sure broke:', error);
          })

    }

    function clearList(){
        
        axios({
            method: 'DELETE',
            url: '/clear'
          }).then((response) => {
            getList();
          }).catch((error) => {
            console.log('clearList() sure broke:', error);
          })

    }

    function onBuy () {

    }
   
    return (
        <>
            <h2>Shopping List</h2>
            <button>Reset</button>
            <button onClick={clearList}>Clear</button>
            <ul>
            {shoppingList.map(item => (
                <div key={item.id}>
                    <li>
                        {item.name}: {item.quantity}
                    </li>
                    <div>
                        <button onClick={onBuy}>Buy</button>
                        <button onClick={ () => removeItem(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            </ul>
        
        </>
    )
}
export default ShoppingList;