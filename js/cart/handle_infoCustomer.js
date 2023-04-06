 import { keyLocalStorageItemCart } from "../definition_variable.js";
 import { createRandomId } from "../module/createRandomID.js";
 import { split_CodeVsName } from "../module/split_characters.js";
 import { setLocalStorage,getLocalStorage } from "../index/localStorage.js";

// kiểm tra thông tin khách hàng
 function xuLyThongTinKhachHang() {
    // kiểm tra dữ liệu được nhập
    let ho = document.getElementById('form_ho');
    let ten = document.getElementById('form_ten');
    let email  = document.getElementById('form_email');
    let sdt = document.getElementById('form_sdt');
    let sonha = document.getElementById('form_sonha');

    let province = document.getElementById('select_province');
    let district = document.getElementById('select_district');
    let wards = document.getElementById('select_wards');

    let loinhan = document.getElementById('form_loinhan');


    // kiểm tra input đã nhập hay chưa
    function kiemTraChuaNhap(tenCanKT){
        if( tenCanKT.value == '' ){
            tenCanKT.setAttribute("placeholder",'Vui lòng nhập!!! ')
            tenCanKT.classList.replace('none-active','active')
        }
        else{
            //trả về 1 khi kết quả nhập hợp lệ
            tenCanKT.classList.replace('active','none-active')
            return 1;
        }
    }
    kiemTraChuaNhap(ho)
    kiemTraChuaNhap(ten)
    kiemTraChuaNhap(email)
    kiemTraChuaNhap(sdt)
    kiemTraChuaNhap(sonha)

        //kiểm tra xe tên có phải kiểu int ko
        function kiemTraHoTen(tenCanKT){
                    if(  !isNaN(tenCanKT.value ) ){
                        tenCanKT.classList.replace('none-active','active')
                        tenCanKT.value = ""  
                    }
                }
                kiemTraHoTen(ho)
                kiemTraHoTen(ten)

    
        // kiểm tra email
    function kiemTraEmail(){
        let dieukien_1 =email.value.search('@')
        let dieukien_2 =email.value.search(' ')
        let dieukien_3 =(email.value.length - email.value.search('.com'))
        var filter = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        if(dieukien_1>0 && dieukien_2<0 && dieukien_3 === 4 && filter.test(email.value)){
                //trả về 1 khi kết quả nhập hợp lệ
                return 1
        }
        else{
            email.setAttribute("placeholder",'Nhập sai định dạng Email!!!')
            email.classList.replace('none-active','active')
            email.value = ""
        }
    }
    kiemTraEmail()



    // kiêm tra số điên thoại
    function kiemTraSDT(){
            if(isNaN(sdt.value) == true || sdt.value == ''){
            sdt.setAttribute("placeholder",'Nhập sai số điện thoại!!!')
            sdt.classList.replace('none-active','active')
            sdt.value = ""  
        }
        else{
            sdt.classList.replace('active','none-active')
             //trả về 1 khi kết quả nhập hợp lệ
            return 1;
        }
    }
    kiemTraSDT()

          

    // kiểm tra Ô select tỉnh,quận,huyện
    function kiemTraSelect(tenSelectCanKT){
        if( split_CodeVsName(tenSelectCanKT.value)[0] == '' ){
            tenSelectCanKT.classList.replace('none-active','active')
        }
        else{
            tenSelectCanKT.classList.replace('active','none-active')
            //trả về 1 khi kết quả nhập hợp lệ
            return 1
        }
    }
    kiemTraSelect(province)
    kiemTraSelect(district)
    kiemTraSelect(wards)
    

   
    
    
        return kiemTraChuaNhap(ho),
        kiemTraChuaNhap(ten), 
        kiemTraChuaNhap(email),
        kiemTraChuaNhap(sdt),
        kiemTraChuaNhap(sonha),
        kiemTraSelect(province),
        kiemTraSelect(district),
        kiemTraSelect(wards)
 }
 // lấy thông tin khách hàng
function layThongTinKhachHang(){
    let ho = document.getElementById('form_ho');
    let ten = document.getElementById('form_ten');
    let email  = document.getElementById('form_email');
    let sdt = document.getElementById('form_sdt');
    let sonha = document.getElementById('form_sonha');
    let province = document.getElementById('select_province');
    let district = document.getElementById('select_district');
    let wards = document.getElementById('select_wards');
    let loinhan = document.getElementById('form_loinhan');
    if( xuLyThongTinKhachHang() === 1 ){
            var dateTime = new Date();
            var ObUser_Cart = {
                idCustomer:createRandomId(5),
                firstName: ho.value,
                lastName: ten.value,
                email: email.value,
                phone: sdt.value,
                address: sonha.value,
                province: province.value,
                district: district.value,
                wards: wards.value,
                message: loinhan.value,
                date: dateTime.getDate()+"/"+dateTime.getMonth()+"/"+dateTime.getFullYear(),
                listProduct: getLocalStorage(keyLocalStorageItemCart)
            }
            // trừ số lượng hàng trong kho
            
            return ObUser_Cart
    }
    
}

export {xuLyThongTinKhachHang,layThongTinKhachHang}