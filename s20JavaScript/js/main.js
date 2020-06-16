//$("#saveButton").click()
var Savebutton = document.getElementById("submit-button")
const btnDelete = document.querySelector('#btnDelete');

Savebutton.addEventListener("click", () => {
    let inputs = document.querySelectorAll('input')
    let tables = document.querySelector('table tbody')
    let rows = document.createElement('tr')
    inputs.forEach(element => {
        let columns = document.createElement('td')
        columns.innerText = element.value
        rows.appendChild(columns)
    })
    tables.appendChild(rows)
})
const deleteData = e => {
    let table = document.querySelector('table tbody')
    lastElement = table.lastChild
    lastElement ? lastElement.remove() : null

}
//btnDelete.addEventListener('click', deleteData)