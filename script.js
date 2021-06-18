const Pagewrapper = document.createElement('div');

document.body.appendChild(Pagewrapper);

const button = document.querySelector('button');
button.addEventListener('click',showInput);

function showInput(){


    const MyInput= document.createElement('input');
    console.log(MyInput.value);



}