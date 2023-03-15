// const reg = () =>{
//     const nameField = document.getElementById('name')
//     const emailField = document.getElementById('email')
//     const passField = document.getElementById('pass')

//     const userName = nameField.value;
//     const email = emailField.value;
//     const pass = passField.value;

//     if (userName && email && pass) {
//         localStorage.setItem(userName, [email, pass]);
//     }

//     nameField.value='';
//     emailField.value='';
//     passField.value='';

//     //saveDataToStorage(name, email, pass);
    
// }

const reg = () =>{
    const nameField = document.getElementById('name')
    const emailField = document.getElementById('email')
    const passField = document.getElementById('pass')

    const userName = nameField.value;
    const email = emailField.value;
    const pass = passField.value;

    nameField.value='';
    emailField.value='';
    passField.value='';

    saveDataToStorage(userName, email, pass);
    
}

const getStoredShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('userName');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveDataToStorage = (userName, email, pass) => {
    const cart = getStoredShoppingCart();
    cart[userName] = [email, pass];
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('userName', cartStringified)
}



















// ========================================================================
//const dataS = localStorage.getItem('userName');
//console.log(dataS);




