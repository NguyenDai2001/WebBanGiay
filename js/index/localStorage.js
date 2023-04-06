
import {KeyLocalStorageListSP,keyLocalStorageItemCart} from "../definition_variable.js"
//2 hàm lưu dữ liệu trong localstorage
function setLocalStorage(key,value){
        if(value.length>0){
        var result = localStorage.setItem(key,JSON.stringify(value))
        return result
    }
}
//3 hàm lấy dữ liệu trong localstorage
function getLocalStorage(key){
        var result = JSON.parse(localStorage.getItem(key))
        return result
}

export {setLocalStorage,getLocalStorage}

