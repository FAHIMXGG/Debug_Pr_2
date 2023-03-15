const getStoredShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('userName');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}


const getData = () =>{
    const savedCart = getStoredShoppingCart();
    //console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product];
        console.log(quantity[0], quantity[1]);
        //displayProduct(product, quantity);
        login(quantity[0], quantity[1])

    }

}

const login =(email, passWord) =>{
    
    inputID = document.getElementById('logID')
    inputPass = document.getElementById('logPass')

    id = inputID.value;
    pass = inputPass.value;

    console.log(id, pass)
    console.log(email, passWord)
    

    if (id === email && pass === passWord) {
        //console.log('valid user')
        window.location.href = 'gg.html'
    }
    else{
        alert('invalid user')
        //console.log('invalid user')
    }

}
getData()