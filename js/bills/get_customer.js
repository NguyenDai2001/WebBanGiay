import { infoCustomer_API } from "../listAPI.js"
import { setLocalStorage, getLocalStorage } from "../index/localStorage.js"
import { KeyLocalStorageListSP, localStorageIDCustomer } from "../definition_variable.js"
import {delete_customer} from "./delete_customer.js"
    window.delete_customer = delete_customer;
    
let start = ()=>{
    get_customer(renderCustomer)
    get_customer(renderDetails)
}
window.start = start
let get_customer = (callback) =>{
    fetch(infoCustomer_API)
        .then(function(response){
            return response.json()
        })
        .then(callback)
        
    
}
// sử lý của phần kiểm tra id trung nhau (createRandomID.js)


let renderCustomer = (data_customer) =>{  
        
        const render_productList = document.querySelector("#render_customer")
        render_productList.innerHTML = data_customer.map((info_customer,index)=>{
                    
            var totalPrice = 0;
            var totalQuantyti = 0;
            (info_customer.listProduct).map((Product)=>{
                totalQuantyti = totalQuantyti + Product.SLtrongGio
                return getLocalStorage(KeyLocalStorageListSP).map((itemProduct)=>{
                    if(Product.idSP === itemProduct.id){
                        totalPrice = totalPrice + Product.SLtrongGio*itemProduct.price
                    }
                })
            })            
                return ` 
                        <ul>
                            <li class="info_customer">${info_customer.idCustomer}</li>
                            <li class="info_customer">${info_customer.firstName+' '+ info_customer.lastName}</li>
                            <li class="info_customer">${info_customer.date}</li>
                            <li class="info_customer">${(info_customer.listProduct).length}</li>
                            <li class="info_customer">${totalQuantyti}</li>
                            <li class="info_customer">${totalPrice}</li>
                            <li class="info_customer"><button  id="button_delete" onclick="delete_customer('${info_customer.id}',start)"><i class="fa-solid fa-delete-left"></i></button></li>
                            <ul>
                                <li>
                                    <button type='button' class="button_details" id="button_details_${index}" onclick="Show_hiden_details(${index})" >Details <i class="fa-solid fa-caret-down"></i></button>
                                </li>
                                <div class="infocustomer"  id="infocustomer${index}">
                                    <ul class="detail_product title_name">
                                            <li>Images</li>
                                            <li>Product's name</li>
                                            <li>Quantity</li>
                                            <li>Price</li>
                                        </ul>
                                    <div id="render_details_${info_customer.id}"></div>
                                </div>     
                            </ul>
                        </ul>
                    `
            }).join(' ')
     
}
let renderDetails = (data_customer) => {
    
    data_customer.map((info_customer)=>{
            const render_details =  document.querySelector('#render_details_'+info_customer.id)
            render_details.innerHTML = (info_customer.listProduct).map((Product)=>{
                return getLocalStorage(KeyLocalStorageListSP).map((itemProduct)=>{
                    if(Product.idSP == itemProduct.id){
                            return `  
                                <ul class="detail_product">
                                    <li><img src="${itemProduct.image}" ></img></li>
                                    <li>${itemProduct.name}</li>
                                    <li>${Product.SLtrongGio}</li>
                                    <li>${Product.SLtrongGio*itemProduct.price}</li>
                                </ul>
                        ` 
                    }
                }).join(' ')
            })
        })
}

let Show_hiden_details = (index) =>{
    let button_details = document.getElementById('button_details_'+index)
    const infocustomer = document.getElementById('infocustomer'+index)
    if(infocustomer.style.display==='none'||infocustomer.style.display==='')
    {
        infocustomer.style.display = 'block'
        button_details.innerHTML = 'Hiden details <i class="fa-solid fa-caret-up"></i>'
    }
    else{
        infocustomer.style.display = 'none'
        button_details.innerHTML = 'Details <i class="fa-solid fa-caret-down"></i>'
    }
}
    window.Show_hiden_details = Show_hiden_details

export {start,get_customer}

                                // <ul class="detail_product">
                                //     <li><img src="${itemProduct.image}" ></img></li>
                                //     <li>${itemProduct.name}</li>
                                //     <li>${Product.SLtrongGio}</li>
                                //     <li>${Product.SLtrongGio*itemProduct.price}</li>
                                // </ul>