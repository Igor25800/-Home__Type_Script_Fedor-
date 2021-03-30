let form = document.forms['form'];
let tbody = document.querySelector('.tbody');
let currentId;
let id = 0;
class User {
    constructor() {
        this.text = form.text.value;
        this.passwordVal = form.password.value;
        this.emeilVal = form.emeil.value;
    }
    block(block, none) {
        form.btnAdd.style.display = none;
        form.btnEdit.style.display = block;
    }
}
let user = new User();
form.btnAdd.addEventListener('click', function () {
    if (form.text.value.length == 0 || form.password.value.length == 0 || form.emeil.value.length == 0) {
    }
    else {
        addUser();
    }
});
let arr = [];
function addUser() {
    user = new User();
    arr.push(user);
    render();
    form.reset();
}
function render() {
    tbody.innerHTML = '';
    arr.forEach((iteam, ind) => {
        let message = `
        <tr>
        <th>${ind + 1}</th>
        <td class="papa" id="${ind}">${iteam.text}</td>
        <td class="papa" id="${ind}">${iteam.passwordVal}</td>
        <td class="papa" id="${ind}">${iteam.emeilVal}</td>
        <td> <button id="${ind}"  type="button" class="btn btn-secondary edit" name="etid">Edit</button></td>
        <td> <button id="${ind}" type="button" class="btn btn-secondary delete">Delete</button> </td>
        </tr>
        `;
        tbody.innerHTML += message;
    });
}
tbody.addEventListener('click', deleteUser);
function deleteUser(event) {
    let target = event.target.innerHTML;
    if (target === 'Delete') {
        let id = event.target.getAttribute('id');
        arr.splice(id, 1);
        form.reset();
        render();
    }
}
tbody.addEventListener('click', editUser);
function editUser(event) {
    let target = event.target.innerHTML;
    if (target === 'Edit') {
        let id = event.target.getAttribute('id');
        arr.forEach((it, i) => {
            if (i == id) {
                form.text.value = it.text,
                    form.password.value = it.passwordVal,
                    form.emeil.value = it.emeilVal;
            }
        });
        currentId = id;
        user.block('block', 'none');
    }
}
form.btnEdit.addEventListener('click', saveEditUser);
function saveEditUser() {
    let user = new User();
    const formText = user.text;
    const password = user.passwordVal;
    const email = user.emeilVal;
    arr.forEach((el, i) => {
        if (i === +currentId) {
            if (el.emeilVal !== email)
                el.emeilVal = email;
            if (el.passwordVal !== password)
                el.passwordVal = password;
            if (el.text !== formText)
                el.text = formText;
        }
    });
    render();
    form.reset();
    user.block('none', 'block');
}
