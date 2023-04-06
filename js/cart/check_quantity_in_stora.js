import { getLocalStorage } from "../index/localStorage.js"
import { keyLocalStorageItemCart,KeyLocalStorageListSP } from "../definition_variable.js"
// kiểm tra số lượng hàng trong kho có đủ đê đặt hàng
function check_quantity_in_stora(){
    var listData = getLocalStorage(KeyLocalStorageListSP)
    var cart = getLocalStorage(keyLocalStorageItemCart)
    var arrayResult = cart.map(itemCart=>{
        return listData.map(item_listdata=>{   
            if(itemCart.idSP == item_listdata.id){
                    if(itemCart.SLtrongGio>item_listdata.soLuong){
                        return 'false';
                    }
                    else{
                        
                        return  (itemCart.idSP+"-"+(item_listdata.soLuong-itemCart.SLtrongGio))
                    }
            }
        }).join('')
    })
    // trả về số lượng còn lại sau khi đặt hàng
    var index = arrayResult.indexOf('false')  
    if(index >= 0){
        var Result = arrayResult[index]
    }
    else{
           var Result = arrayResult
    }
    return Result
}

export {check_quantity_in_stora}