function $(source) {
    return document.querySelector(source)
}

const addNewEmployee = $('#btnNewEmployee');
const getAllEmployees = $('#btnGetAll');
const deleteEmployee = $('#btnDeleteEmployee')
const msgEmployee = $('#msgEmployees')
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
        }else {
            msgError.innerHTML = (`insert a valid input!`);
        }
        messageDisplay();
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
            messageDisplay();
        } else {
            allEmployees.data.forEach((employee) => {
                const tag = document.createElement("p",);
                const text = document.createTextNode(employee.name);
                tag.appendChild(text);
                employeesList.appendChild(tag);
            })
        }
    } catch (e) {
        console.log(e)
    }
})


deleteEmployee.addEventListener('click', async () => {
    if (id.value.trim() === "") {
        msgError.innerHTML = (`Please provide a valid id`);
        return messageDisplay();
    }
    msgError.innerHTML = (`There is not employee with id ${id.value}`);
    const result = await axios.delete('/', {data: {id: id.value}});
    if (!result.data) {
    } else {
        msgError.innerHTML = (`Delete employee with id ${id.value}`);
    }
    messageDisplay();
})

const getEmail = (name) => {
    let email = name.trim();
    email = name.replaceAll(' ', ".");
    email += '@mycoolcompany.com';
    return email;
}

function messageDisplay() {
    msgError.style.visibility = 'visible';
    setTimeout(() => {
        msgError.style.visibility = 'hidden'
    }, 2000);
}

