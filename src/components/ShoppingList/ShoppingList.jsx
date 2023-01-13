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
        if (!item.status) {
            return (
                <>
                    <button onClick={() => buyItem(item.id)}>Buy</button>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                </>
            )
        } else {
            return <span>Purchased</span>
        }
    }
    return (
    <>
            <h2>Shopping List</h2>
            <button>Reset</button>
            <button>Clear</button>
        
<ul>
    {shoppingList.map((item) => (
        <li key={item.id}>
            {item.name} {item.quantity}
            <span> 
            {item.status === true ? 'Purchased': 
                    <>   
                        <button onClick={() => buyItem(item.id)}>Buy</button>
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