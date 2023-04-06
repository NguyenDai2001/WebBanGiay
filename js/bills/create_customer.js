import { layThongTinKhachHang } from "../cart/handle_infoCustomer.js";
import { infoCustomer_API,productAPI } from "../listAPI.js";
import { keyLocalStorageItemCart,LocalStorageCountCart } from "../definition_variable.js";
import { check_quantity_in_stora } from "../cart/check_quantity_in_stora.js";
import { split_CodeVsName } from "../module/split_characters.js";
function create_customer(){
    var infoCustomer = layThongTinKhachHang()
    if(infoCustomer !== undefined){
        var option = {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(layThongTinKhachHang())
        }
        fetch(infoCustomer_API,option)
            // updata số lượng có trong kho hàng
            .then(()=>{
                check_quantity_in_stora().map(data=>{
                let id = split_CodeVsName(data)[0]
                //SPconlai sản phẩm còn lại trong kho khi đặt mua
                let SPconlai = split_CodeVsName(data)[1]
                var updata_product = {
                    method: "PUT",
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({soLuong: SPconlai+""})
                }
                fetch(productAPI+"/"+id,updata_product)
                .then(()=>{
                        window.location = "index.html"
                    })
                })
            })
            .then(()=>{
                localStorage.removeItem(keyLocalStorageItemCart)
                localStorage.removeItem(LocalStorageCountCart)
                
            })
            
    }
    
}
 
export {create_customer}