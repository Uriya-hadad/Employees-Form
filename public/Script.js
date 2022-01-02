import {addChild, messageDisplay, getEmail,$} from './func.js';

const addNewEmployee = $('#btnNewEmployee');
const getAllEmployees = $('#btnGetAll');
const deleteEmployee = $('#btnDeleteEmployee')
const msgError = $('#msgError')
const id = $('#inputId');
const name = $('#inputName');
const address = $('#inputAddress');
const employeesList = $('#employees');

addNewEmployee.addEventListener('click', async () => {
    try {
        const email = getEmail(name.value);
        const result = await axios.post('/', {
            id: id.value,
            name: name.value,
            address: address.value,
            email
        });
        if (result.data.success) {
            msgError.innerHTML = (`${name.value} has been joined successfully!`);
        } else if (result.data.valid) {
            msgError.innerHTML = (`There is ealready a employee with id: ${id.value}`);
        } else {
            msgError.innerHTML = (`insert a valid input!`);
        }
        messageDisplay(msgError);
    } catch (e) {
        console.log(e)
    }
})

getAllEmployees.addEventListener('click', async () => {
    try {
        employeesList.innerHTML = '';
        const allEmployees = await axios.get('/allEmployees');
        if (allEmployees.data.length === 0) {
            msgError.innerHTML = 'Currently there are no employees...';
            messageDisplay(msgError);
        } else {
            allEmployees.data.forEach((employee) => {
                addChild(employee,employeesList);
            })
        }
    } catch (e) {
        console.log(e)
    }
})


deleteEmployee.addEventListener('click', async () => {
    if (id.value.trim() === "") {
        msgError.innerHTML = (`Please provide a valid id`);
        return messageDisplay(msgError);
    }
    msgError.innerHTML = (`There is not employee with id ${id.value}`);
    const result = await axios.delete('/', {data: {id: id.value}});
    if (!result.data) {
    } else {
        msgError.innerHTML = (`Delete employee with id ${id.value}`);
    }
    messageDisplay(msgError);
})
