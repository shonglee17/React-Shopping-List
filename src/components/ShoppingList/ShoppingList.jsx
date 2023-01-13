import axios from "axios";
import { React, useState } from "react";
function ShoppingList({ shoppingList, getList }){
    const [status,setStatus] = useState (false);

    function removeItem (id) {
        console.log(id);
        axios({
            method: 'DELETE',
            url: `/shoppinglist/${id}`
          }).then((response) => {
            console.log(response);
            getList();
          }).catch((error) => {
            console.log('removeItem() in ShoppingList broke:', error);
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
    
    function resetList(){
        axios({
            method: 'PUT',
            url: '/reset'
          }).then((response) => {
            getList();
          }).catch((error) => {
            console.log('clearList() sure broke:', error);
          })
    }

    function onBuy (status, id) {
        axios({
            method: 'PUT',
            url: `/shoppinglist/${id}`,
            data: {
                status: true
            }
        }).then ((response) => {
            getList();
        }).catch ((error) => {
            console.log('PUT', error);
          })
        if (status === false ) {
            console.log ('hi')
            setStatus (true)
        } else {
            return <span>Purchased</span>
        }
    }
    return (
    <>
            <h2>Shopping List</h2>
            <button onClick={resetList}>Reset</button>
            <button onClick={clearList}>Clear</button>
        
<ul>
    {shoppingList.map((item) => (
        <li key={item.id}>
            {item.name} {item.quantity}
            <span> 
            {item.status === true ? 'Purchased': 
                    <>   
                        <button onClick={() => onBuy(item.status,item.id)}>Buy</button>
                        <button onClick={() => removeItem(item.id)}>Remove</button> 
                    </>
            } 
            </span>
          
            
            

            
        </li>
    ))}
</ul>

   </> 
);
}
export default ShoppingList;