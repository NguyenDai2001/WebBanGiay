
import { split_CodeVsName } from "../module/split_characters.js";
import { API_Provice } from "../listAPI.js";
// bai 8 lấy api dữ liệu Tỉnh, Huyện    
        // PDW là province = 'p' , district = 'd' wards = 'w'

async function get_print_DataAPI(PDW,setSelect,code_PDW){
     let response = await fetch(API_Provice+PDW)
     let dataAPI = await response.json()
    try{
        setSelect.innerHTML = dataAPI.map(item=>{
            if(code_PDW==item.province_code ||code_PDW==item.district_code||  code_PDW=='p')
            {
                 return `
                    <option value="${item.code}-${item.name}">${item.name}</option>  
                ` 
            }
        })
    }
    catch{
       setSelect.innerHTML = '<option>Loading...</option>'
    } 
}



// in dữ liệu ra select tỉnh
function printData_province(){
    let PDW = 'p'
    const SelectId = document.querySelector('#select_province')
    let code_PDW = 'p'
    get_print_DataAPI(PDW,SelectId,code_PDW)

}

    // in dữ liệu ra select huyện/quận
function getDistrictsByProvinceID(){ 
            // bật cho phép nhập
            let showSelectDistrict = document.getElementById('select_district')
            showSelectDistrict.disabled = false
    // PDW là province = 'p' , district = 'd' wards = 'w'
    let PDW = 'd'
    const SelectId = document.querySelector('#select_district')
    // lấy id code province
    let code_PDW = split_CodeVsName(document.getElementById('select_province').value)[0]   
    get_print_DataAPI(PDW,SelectId,code_PDW)
}
     

// in dữ liệu ra selectXa/phường
function getWardsByDistrictsID(){
        // bật cho phép nhập
        let showSelectWards = document.getElementById('select_wards')
        showSelectWards.disabled = false
    // PDW là province = 'p' , district = 'd' wards = 'w'
    let PDW = 'w'
    const SelectId = document.querySelector('#select_wards')
    // lấy id code province
    let code_PDW = split_CodeVsName(document.getElementById('select_district').value)[0]    
    get_print_DataAPI(PDW,SelectId,code_PDW)
}

export {printData_province,getDistrictsByProvinceID,getWardsByDistrictsID}