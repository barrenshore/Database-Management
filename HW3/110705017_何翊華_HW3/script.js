const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.loginlink');
const registerlink = document.querySelector('.registerlink');
const btnpopup = document.querySelector('.loginbutton');

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});