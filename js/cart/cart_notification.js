// thông báo số lượng trên icon giỏ hàng
// notification_cart
import { keyLocalStorageItemCart } from "../definition_variable.js"
import { getLocalStorage } from "../index/localStorage.js"
function setNotificationToCart(){
    if(getLocalStorage(keyLocalStorageItemCart)){
        let quantity = getLocalStorage(keyLocalStorageItemCart).length
        document.getElementById('notification_cart').innerHTML = quantity
    }
    else{
        document.getElementById('notification_cart').style.display = "none"
    }
    
    
}
export {setNotificationToCart}
  
               