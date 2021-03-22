var btnAdd = document.getElementById('btnAdd');
var array = [];
var todoList = document.getElementById('todoList');
var doneList = document.getElementById('done')
var tbody = document.createElement('tbody');
var tbodyNew = document.createElement('tbody');
var row;
var newArray = [];
const form = document.querySelector(".needs-validation");
var validationActive = document.querySelector('.validation');

// funkcijos

function table() {
    tbody.innerText = "";
    for (i = 0; i < array.length; i++) {

        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerText = array[i];


        // Mygtukai

        var btnDelete = document.createElement('button');
        btnDelete.classList.add('btn-danger', 'btn', 'delete');
        btnDelete.innerText = 'Delete';


        var btnMove = document.createElement('button');
        btnMove.classList.add('btn-success', 'btn', 'move');
        btnMove.innerText = 'Move to Done';


        tr.appendChild(td);
        tr.appendChild(btnDelete);
        tr.appendChild(btnMove);


        // tr.appendChild(tdButton);

        tbody.appendChild(tr);



    }
    todoList.appendChild(tbody);
}

function newTable() {
    tbodyNew.innerText = "";

    for (i = 0; i < newArray.length; i++) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerText = newArray[i];

        var btnDeleteNew = document.createElement('button');
        btnDeleteNew.classList.add('btn-danger', 'btn', 'deleteNew');
        btnDeleteNew.innerText = 'Delete';

        var btnMoveback = document.createElement('button');
        btnMoveback.classList.add('btn-success', 'btn', 'moveback');
        btnMoveback.innerText = 'Move Back';


        tr.appendChild(td);
        tr.appendChild(btnDeleteNew);
        tr.appendChild(btnMoveback);


        tbodyNew.appendChild(tr);





    }
    doneList.appendChild(tbodyNew);
}

// validacija

form.addEventListener("submit", (e) => {
    e.preventDefault();
    var x = document.getElementById('todo-input').value;
    if (x == "") {
        console.log(yes);
    }

})




// eventai
btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    var todoInput = document.getElementById('todo-input').value;
    if (todoInput == "") { validationActive.classList.add('validationActive') } else {
        array.push(todoInput);
        validationActive.classList.remove('validationActive')
    }

    table();



})

tbody.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        row = e.target.closest('tr').rowIndex;
        console.log(row);
        array.splice(row, 1);
        table();

    }
})

tbody.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('move')) {
        row = e.target.closest('tr').rowIndex;
        newArray.push(array[row]);
        console.log(newArray);
        array.splice(row, 1);
        table();
        newTable();



    }
})


tbodyNew.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('deleteNew')) {
        row = e.target.closest('tr').rowIndex;
        newArray.splice(row, 1);
        newTable();

    }
})



tbodyNew.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('moveback')) {
        row = e.target.closest('tr').rowIndex;
        array.push(newArray[row]);
        newArray.splice(row, 1);
        newTable();
        table();



    }
})