let table = document.getElementById('table_cell');
let count = 1;

for (let i = 0; i < 10; i++) {
    let row = document.createElement('tr');
    for (let y = 0; y < 10; y++) {
        let cell = document.createElement('td');
        cell.textContent = count;
        row.appendChild(cell);
        count++;
        }
    table.appendChild(row);
}