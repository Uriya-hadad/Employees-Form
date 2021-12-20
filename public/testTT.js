const msg = document.querySelector('#msg');
const inputNum = document.querySelector('#inputNum')
const submit = document.querySelector('#bth');
const clearDb = document.querySelector('#clearDb');
inputNum.addEventListener('click', () => {
    msg.style.visibility = 'hidden';
})
submit.addEventListener('click', async () => {
    let text;
    try {
        const a = await axios.post('/', {inputNum: inputNum.value})
        text = `The data is been created successfully with the value of ${a.data.result}.`
    } catch (e) {
        text = `we cannot connect to dataBase`
    } finally {
        msg.innerHTML = text;
        msg.style.visibility = 'visible';
    }
})

clearDb.addEventListener('click', async () => {
    try {
        const a = await axios.delete('/');
        console.log(a)
        msg.innerHTML = `the number of item we deleted is ${a.data.count}.`
    } catch (e) {
        console.log(e)
    }
})

