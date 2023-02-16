document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('button submit clicked')

    const emailFeild = document.getElementById('email-feild')
    const email = emailFeild.value
    // console.log(email);

    const passewordFeild = document.getElementById('password-feild')
    const password = passewordFeild.value;
    // console.log(password);

    if(email=='admin@gmail.com' && password=='passwordnai'){
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid password');
    }
})
