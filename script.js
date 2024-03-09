function calculateChange() {
    var price = parseFloat(document.getElementById('price').value);
    var payment = parseFloat(document.getElementById('payment').value);
    var change = payment - price;
    
    var date = new Date().toLocaleString();
    var personName = document.getElementById('person_name').value;
    var itemName = document.getElementById('item_name').value;
    
    var record = '<tr>';
    record += '<td>' + date + '</td>';
    record += '<td>' + personName + '</td>';
    record += '<td>' + itemName + '</td>';
    record += '<td>' + price.toFixed(2) + '</td>';
    record += '<td>' + payment.toFixed(2) + '</td>';
    record += '<td>' + change.toFixed(2) + '</td>';
    record += '</tr>';
    
    var recordsBody = document.getElementById('recordsBody');
    recordsBody.innerHTML += record;

    document.getElementById('records').style.display = 'block';

    // Store record in local storage
    var records = JSON.parse(localStorage.getItem('records')) || [];
    records.push({
        date: date,
        personName: personName,
        itemName: itemName,
        price: price,
        payment: payment,
        change: change
    });
    localStorage.setItem('records', JSON.stringify(records));
}

function clearRecords() {
    document.getElementById('recordsBody').innerHTML = '';
    document.getElementById('records').style.display = 'none';

    document.getElementById('person_name').value = '';
    document.getElementById('item_name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('payment').value = '';
}

function retrieveRecords() {
    var records = JSON.parse(localStorage.getItem('records')) || [];
    var recordsBody = document.getElementById('recordsBody');
    recordsBody.innerHTML = '';
    
    records.forEach(function(record) {
        var recordRow = '<tr>';
        recordRow += '<td>' + record.date + '</td>';
        recordRow += '<td>' + record.personName + '</td>';
        recordRow += '<td>' + record.itemName + '</td>';
        recordRow += '<td>' + record.price.toFixed(2) + '</td>';
        recordRow += '<td>' + record.payment.toFixed(2) + '</td>';
        recordRow += '<td>' + record.change.toFixed(2) + '</td>';
        recordRow += '</tr>';
        
        recordsBody.innerHTML += recordRow;
    });

    document.getElementById('records').style.display = 'block';
}