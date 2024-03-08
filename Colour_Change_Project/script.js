
//FIRST SOLUTION
// window.addEventListener("DOMContentLoaded", (event) => {
//    const grey = document.querySelector('#grey');
//    const white = document.querySelector('#white');
//    const blue = document.querySelector('#blue');
//    const yellow = document.querySelector('#yellow');

// grey.addEventListener('click', () => [
//     document.body.style.background = 'grey'
      
// ])
//     white.addEventListener('click', () => [
//     document.body.style.background = 'white'
      
// ])

//     blue.addEventListener('click', () => [
//     document.body.style.background = 'blue'
      
// ])

//     yellow.addEventListener('click', () => [
//     document.body.style.background = 'yellow'
      
// ])


// });

//SECOND SOLUTION

window.addEventListener("DOMContentLoaded", (event) => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(function (button) {
        button.addEventListener('click', (e) => {

            if (e.target.id === 'grey')
            {
                document.body.style.backgroundColor= e.target.id;
            }
            if (e.target.id === 'white')
            {
                document.body.style.backgroundColor=e.target.id;
            }
            if (e.target.id === 'blue')
            {
                document.body.style.backgroundColor =e.target.id;
            }
            if (e.target.id === 'yellow')
            {
                document.body.style.backgroundColor= e.target.id;
            }
             if (e.target.id === 'purple')
            {
                document.body.style.backgroundColor= e.target.id;
            }
         })
      })

    });