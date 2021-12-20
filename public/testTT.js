const msg = document.querySelector('#msg');
const inputNum = document.querySelector('#inputNum')
const submit = document.querySelector('#bth');
submit.addEventListener('click', async () => {
    let text;
    try {
        const a = await axios.post('/', {inputNum: inputNum.value})
        text = `The data is been created successfully with the value of ${a.data.result}.`
    } catch (e) {
        text = `we cannot connect to dataBase`
    }finally {
        msg.innerHTML = text;
        msg.style.visibility = 'visible';
    }
})
