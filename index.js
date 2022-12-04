const table = document.createElement('table');
document.body.prepend(table);
let numbersCount = 1;
for (let count = 1; count <= 10; count++) {
    const td = document.createElement('td');
    table.append(td);
    for (let count1 = 1; count1 <= 10; count1++) {
        const tr = document.createElement('tr');
        td.append(tr);
        tr.innerText = `${numbersCount}`;
        numbersCount++;
    }
}


