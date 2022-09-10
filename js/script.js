let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}




// const form = document.querySelector('.form ');

// function sendMsg(e){
//     e.preventDefault();

//     const name = document.getElementById('name'),
//             email = document.getElementById('email'),
//             msg = document.getElementById('msg')

// // var btn = document.getElementById('btn');
// // btn.addEventListener('click', function(e){
// //     e.preventDefault() 
    
//     Email.send({
//         SecureToken : "ed3847e3-e855-4025-952b-809a6073afb6",
//         To : 'd.m.a.k.dissanayake.1997@gmail.com',
//         From : email.value + "  " + name.value,
//         Subject : "Contact Form",
//         Body : msg.value
//     }).then(message => alert(message));
// }

// form.addEventListener('btn' , sendMsg); 