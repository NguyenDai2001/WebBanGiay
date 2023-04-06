// cart
//mock api
// bài 14
import { productAPI } from "../listAPI.js"
import { setLocalStorage,getLocalStorage } from "./localStorage.js"
import { KeyLocalStorageListSP } from "../definition_variable.js"
import { addSP } from "./addProduct.js"
import { render_header } from "../header.js"
import { message_erorr } from "../module/message_erorr.js"
            window.addSP = addSP
            window.render_header = render_header
            window.message_erorr = message_erorr


// lấy data từ mock api
function start(){
    getDataProduct(renderHome,renderHome_fail)
}
const getDataProduct = (callback_renderHome,callback_renderHome_fail) =>{
        fetch(productAPI)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            setLocalStorage(KeyLocalStorageListSP,data)
            return data
        })
        .then(callback_renderHome)
        .catch(callback_renderHome_fail)
    }

function renderHome(data) {
    if(Object.keys(data).length === 0){
        localStorage.clear(KeyLocalStorageListSP)
    }
    const Show = document.querySelector('.container')
    Show.innerHTML = getLocalStorage(KeyLocalStorageListSP).map((item) => {
        return `
                <div class="block_product">
                    <img src="${item.image}">
                    <div class="button_add_cart" onclick="addSP(${item.id},1),
                                                            render_header(),
                                                            message_erorr('Đã thêm vào giỏ ^_^','',1000)">
                                                            <i class="fa-solid fa-cart-arrow-down" ></i></div>
                    <div class="info">
                        <h3>${item.name}</h3>
                        <div><span>$${item.price}</span><span>Quality: ${item.soLuong}</span></div>
                    </div>
                </div>
            `
    }).join("")
   
}     
function renderHome_fail() {
    console.log("erorr")
    const Show = document.querySelector('.container')
    Show.innerHTML = render_fail()
    function render_fail(){
        return `
                <div class="block_product_fail"> 
                    <p>Không lấy được API từ</p>  
                    <p><a href="${productAPI}"> ${productAPI}</a></p>
                </div>
            `
    }   
    
    
} 

export {start}



