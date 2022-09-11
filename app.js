const login_form = document.querySelector("#login_form");
const login_input =document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");
const greeting_name = document.querySelector("#greeting h3");

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function handle_submit(event){
    event.preventDefault();
    console.log(login_input.value);
    login_form.classList.add(HIDDEN_CLASSNAME);
    const username = login_input.value;
    localStorage.setItem(USERNAME_KEY,username);
    paint_greetings(username)
}

function paint_greetings(USERNAME_KEY) {
    greeting_name.innerText = `HELLO ${USERNAME_KEY},\nWhat is your main focus for today?`;
    greeting.classList.remove('hidden');
}


const saved_username = localStorage.getItem('username')

if (saved_username === null) {
    login_form.classList.remove(HIDDEN_CLASSNAME);
    login_form.addEventListener("submit",handle_submit);
} else {
    paint_greetings(saved_username);
}



// const loginForm = document.querySelector ("#login-form")
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = 'hidden';
// const USERNAME_KEY = 'username';

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     localStorage.setItem(USERNAME_KEY,username);
//     paintGreetings(username);
// }

// function paintGreetings(username) {
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);
// if (savedUsername === null ) {
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit",onLoginSubmit);
// } else {
//     paintGreetings(savedUsername);
// }