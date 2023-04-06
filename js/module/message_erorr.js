   // thêm thẻ thê sử dụng
   //  <div id="block_message">
   //      <p id="message_box"></p>
   //  </div>
export function message_erorr(message,statu,time){
    let setblock_message = document.getElementById("block_message")
    setblock_message.style.right = '10px'
    let setMessage = document.getElementById("message_box")
    setMessage.innerHTML = message
    
    if(statu === 'warning' ){
       setblock_message.style.border = '5px solid rgb(244, 199, 0)' 
    }
    else if(statu === 'erorr' ){
       setblock_message.style.border = '5px solid rgba(255, 0, 0' 
    }
   setTimeout(()=>{
      setblock_message.style.right = '-250px'
   },time
   )
}
