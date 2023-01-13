import axios from "axios";
import React from "react";

<<<<<<< HEAD
=======

>>>>>>> 93e2d02247c3f1449f8af8aa2a78630c19927cb6
function ShoppingList({ shoppingList, getList }){
    
    function removeItem () {
        let idToDelete = shoppingList.id;
        console.log(idToDelete);
<<<<<<< HEAD
=======

>>>>>>> 93e2d02247c3f1449f8af8aa2a78630c19927cb6
        axios({
            method: 'DELETE',
            url: `/shoppinglist/id`
          }).then((response) => {
            getList();
          }).catch((error) => {
            console.log('deleteCreature() sure broke:', error);
          })
<<<<<<< HEAD
    }
    function onBuy () {

    }
   
=======

    }

    function onBuy () {

    }

>>>>>>> 93e2d02247c3f1449f8af8aa2a78630c19927cb6
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
                        <button onClick={removeItem}>Remove</button>
                    </div>
                </div>
            ))}
            </ul>
        
        </>
    )
}
<<<<<<< HEAD
=======

>>>>>>> 93e2d02247c3f1449f8af8aa2a78630c19927cb6
export default ShoppingList;