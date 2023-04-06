import {setLocalStorage, getLocalStorage} from "./localStorage.js"
import { keyLocalStorageItemCart, LocalStorageCountCart } from "../definition_variable.js"    



//4 giỏ hàng ( thêm vào giỏ và sử lý sp có id trùng nhau)

function addSP(dataIdSP,dataSL){
        let dataCart = getLocalStorage(LocalStorageCountCart) 
        var objectCart ={ 
                    idSP:dataIdSP,
                    SLtrongGio: dataSL
                }
        if(dataCart && dataCart.length > 0 ){
            let arrayCart=[...dataCart,objectCart]
            setLocalStorage(LocalStorageCountCart,arrayCart)
            setLocalStorage(keyLocalStorageItemCart,arrayCart)

            //sử lý đơn hàng có id giống nhau
            handleIdProduct()
            
        }
        else{
            let arrayCart=[objectCart]
            setLocalStorage(keyLocalStorageItemCart,arrayCart)
            setLocalStorage(LocalStorageCountCart,arrayCart)
        }              
    }

//Hàm sử lý sản phẩm có id giống ngau
async function handleIdProduct(){
            let getDataCart = getLocalStorage(LocalStorageCountCart)
            var arrayIdSP= []
            getDataCart.map(item=>{
                arrayIdSP.push(item.idSP)
            })
            var GopPhanTuIDCuaMang = new Set(arrayIdSP)
            var arrayIdDaGop = [...GopPhanTuIDCuaMang]
            if(arrayIdDaGop.length<arrayIdSP.length){
                var arrayCartNew =[]
                arrayIdDaGop.forEach((item,index )=> {
                        var MangTrungNhau = arrayIdSP.filter(item2=>{
                            if(item2==item)
                            {
                                return item2
                            }
                        })
                    let objectCartNew ={
                                idSP:item,
                                SLtrongGio: MangTrungNhau.length
                            }
                    arrayCartNew=[...arrayCartNew,objectCartNew]
                });      
                setLocalStorage(keyLocalStorageItemCart,arrayCartNew)  
            }
            else if(arrayIdDaGop.length=arrayIdSP.length){
            
                setLocalStorage(keyLocalStorageItemCart,getDataCart)
                return 1
                     
            }

        
}
export {addSP,handleIdProduct}