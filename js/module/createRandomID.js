import { localStorageIDCustomer } from "../definition_variable.js"
import {setLocalStorage, getLocalStorage } from "../index/localStorage.js"
import {get_customer} from "../bills/get_customer.js"

export function createRandomId(lengthID){// lengthID chuyền vào độ dài của id mong muốn 
    var arrAlphabetLower = ['q','w','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
    var arrAlphabetUpper = []
    var arrId = []
    var arrIdLower = []
    var arrIdUpper = []
        arrAlphabetLower.map((item)=>{
            arrAlphabetUpper.push(item.toUpperCase())
        })
    while(arrId.length<lengthID)
    {
        function random(){
            let ranDomAlphabet = Math.floor(Math.random()* arrAlphabetLower.length)
            return ranDomAlphabet
        }
        arrIdLower.push(arrAlphabetLower[random()])
        arrIdUpper.push(arrAlphabetUpper[random()])
        arrId = arrIdLower.concat(arrIdUpper)
    }
    var IdString=''
    arrId.map(item=>{
        let randomNumber= Math.floor(Math.random()*lengthID)
        IdString = IdString+item+randomNumber
    })
    // kiểm tra id có bị trùng không
    
    // get_customer(function(data){    
    //     var ArrayIDCustomer = []
    //     data.map((info_customer)=>{
    //         ArrayIDCustomer.push(info_customer.id)
    //         setLocalStorage(localStorageIDCustomer,ArrayIDCustomer)
    //     })
        
    // }
    // )
    // var IDCustomer = getLocalStorage(localStorageIDCustomer)
    // if(IDCustomer){
    //     if(IDCustomer.length > 0){
    //         if(IDCustomer.indexOf(IdString) === -1){
    //             return IdString
    //         }
    //     }
    // }
    // else{
    //         createRandomId(lengthID)
    //     }
   return IdString
}
            //createRandomId( nhập độ dài của id )