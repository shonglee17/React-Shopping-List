import axios from "axios";
import { React } from "react";
function ShoppingList({ shoppingList, getList }){
    
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
    function onBuy () {
    }
    return (
        <>
            <h2>Shopping List</h2>
            <button>Reset</button>
            <button>Clear</button>
            <ul>
            {shoppingList.map(item => (
                <div key={item.id}>
                    <li>
                        {item.name}: {item.quantity}
                    </li>
                    <div>
                        <button onClick={onBuy}>Buy</button>
                        <button onClick={ () => removeItem(item.id) }>Remove</button>
                    </div>
                </div>
            ))}
            </ul>
        
        </>
    )
}
export default ShoppingList;