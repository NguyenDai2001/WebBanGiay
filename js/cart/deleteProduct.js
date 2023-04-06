import {getLocalStorage, setLocalStorage } from "../index/localStorage.js";
import { keyLocalStorageItemCart,LocalStorageCountCart }from "../definition_variable.js"
// xóa giỏ hàng
function delete_cart(idSanPham){ 
    let dataCart = getLocalStorage(keyLocalStorageItemCart)
    let deleteCart = dataCart.filter(item => {
        if(dataCart.length === 1){
            localStorage.clear(keyLocalStorageItemCart)
            window.location = './cart.html'
        }
        else{
            if(item.idSP !== idSanPham)
                {
                    return item
                }     
        }
    });
        setLocalStorage(keyLocalStorageItemCart,deleteCart)
        setLocalStorage(LocalStorageCountCart,deleteCart)
        
}
export {delete_cart}