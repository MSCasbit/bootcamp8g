var Savebutton= document.getElementById("submit-button")
Savebutton.addEventListener("click",()=>{
    let inputs=document.querySelectorAll('input')
    let tables=document.querySelector('table tbody')
    let rows=document.createElement('tr')    
    inputs.forEach(element=>{
        let columns=document.createElement('td')
        columns.innerText=element.value
        rows.appendChild(columns)  
    })
    tables.appendChild(rows)     
})