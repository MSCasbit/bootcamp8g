const getUserInfo =()=>{
    let userName= document.querySelector('#user-name').value
    let userAddress=document.querySelector('#user-address').value
    let userPhone=document.querySelector('#user-phone').value

    let objectValues= {userName,userAddress,userPhone}
    console.log(objectValues)
}

const getUserInfoAll=()=>{
    let inputs=document.querySelectorAll('input')
    let inputsArr=[]
    inputs.forEach(input=>{
        inputsArr[input.name]= input.value
    })
    let objectInput={...inputsArr}
    console.log(objectInput)
    }