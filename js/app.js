const reg = () =>{
    const nameField = document.getElementById('name')
    const emailField = document.getElementById('email')
    const passField = document.getElementById('pass')

    const userName = nameField.value;
    const email = emailField.value;
    const pass = passField.value;

    if (userName && email && pass) {
        localStorage.setItem(userName, [email, pass]);
    }

    nameField.value='';
    emailField.value='';
    passField.value='';

    //saveDataToStorage(name, email, pass);
    
}


// const getStoredShoppinguserInfo = () =>{
//     let userInfo = {};
//     const storeduserInfo = localStorage.getItem('userInfo');
//     if(storeduserInfo){
//         userInfo = JSON.parse(storeduserInfo);
//     }
//     return userInfo;
// }

// const saveDataToStorage = (name, email, pass) =>{
//     const userInfo = getStoredShoppinguserInfo();
//     userInfo[email] = name, pass;
//     const userInfoStringified = JSON.stringify(userInfo);
//     localStorage.setItem('userInfo', userInfoStringified)
// }