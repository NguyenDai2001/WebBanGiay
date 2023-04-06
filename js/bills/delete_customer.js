
import { infoCustomer_API } from "../listAPI.js";
function delete_customer(idCustomer,start){
        var option = {
            method: "DELETE",
            headers: {'Content-Type':'application/json'},
        }
        fetch(infoCustomer_API+'/'+idCustomer,option)  
        .then(start)
}
export {delete_customer}