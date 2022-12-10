function askName (){
    let user = document.getElementById('username')
    let result = document.getElementById('result').innerHTML = `Привет, ${user.value}!`;
}
