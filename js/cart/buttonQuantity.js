import { LocalStorageCountCart }from "../definition_variable.js"
import {setLocalStorage, getLocalStorage } from "../index/localStorage.js"
import {addSP,handleIdProduct} from "../index/addProduct.js"
// nút trừ số lượng sản phẩm
        function exceptProduct(idSP){ 
            var dataCart = getLocalStorage(LocalStorageCountCart)
            // lấy ra vị trí cuối cùng của sản phẩm đê xóa (Giúp SP trong giỏ không bị nhẩy)
            var lastIndexSP
            dataCart.map((item2,index) => {
                if(idSP==item2.idSP){
                    lastIndexSP = index
                }
            })
            // xóa theo index
            let arr = []
            var exceptProduct = dataCart.filter((item,index) => {
                    arr.push(item.idSP)
                    let firstIndex = arr.indexOf(idSP)
                    // dừng xóa khi số lượng sp còn 1
                    if(lastIndexSP === firstIndex){
                        return 1
                    }
                    else{
                        if(lastIndexSP !== index){
                            return item
                        }
                    }
            } );
            setLocalStorage(LocalStorageCountCart,exceptProduct)
            // chạy lại hàm gộp id giống nhau trong index/addProduct.js
            handleIdProduct()
         
        }
        // nút thêm số lượng sản phẩm
        function plusProduct(idSP){
            addSP(idSP)
        }

export {exceptProduct,plusProduct}