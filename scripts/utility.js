function setInnerTextById(elementId, value){
    document.getElementById(elementId).innerText=value;
}

function handleSeatClick(seatData) {
    
    const tableBody =document.getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerText = seatData;
    cell2.innerText = 'Economy';
    cell3.innerText = 550;
} 