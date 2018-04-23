 document.addEventListener('DOMContentLoaded', function () {

     let div = document.createElement('div');
     div.className = 'header-container';

     let h1 = document.createElement('h1');
     let h1Text = document.createTextNode('This is an h1');
     h1.className = 'h1';
     let h2 = document.createElement('h2');
     let h2Text = document.createTextNode('This is an h2');
     h2.className = 'h2';
     let h3 = document.createElement('h3');
     let h3Text = document.createTextNode('This is an h3');
     h3.className = 'h3';
     let h4 = document.createElement('h4');
     let h4Text = document.createTextNode('This is an h4');
     h4.className = 'h4';
     let h5 = document.createElement('h5');
     let h5Text = document.createTextNode('This is an h5');
     h5.className = 'h5';
     let h6 = document.createElement('h6');
     let h6Text = document.createTextNode('This is an h6');
     h6.className = 'h6';


     h1.appendChild(h1Text);
     h2.appendChild(h2Text);
     h3.appendChild(h3Text);
     h4.appendChild(h4Text);
     h5.appendChild(h5Text);
     h6.appendChild(h6Text);
     div.appendChild(h1);
     div.appendChild(h2);
     div.appendChild(h3);
     div.appendChild(h4);
     div.appendChild(h5);
     div.appendChild(h6);
     document.body.appendChild(div);

     //Array of colors
     let colors = ['orange', 'red', 'yellow', 'blue', 'green', 'black', 'pink'];

     //Changes the headings to a random color from the array above
     h1.addEventListener('dblclick', function () {
         let randomColor = Math.floor(Math.random() * colors.length);
         h1.style.color = colors[randomColor];
     })

     h2.addEventListener('dblclick', function () {
         let randomColor = Math.floor(Math.random() * colors.length);
         h2.style.color = colors[randomColor];
     })

     h3.addEventListener('dblclick', function () {
         let randomColor = Math.floor(Math.random() * colors.length);
         h3.style.color = colors[randomColor];
     })

     h4.addEventListener('dblclick', function () {
         let randomColor = Math.floor(Math.random() * colors.length);
         h4.style.color = colors[randomColor];
     })

     h5.addEventListener('dblclick', function () {
         let randomColor = Math.floor(Math.random() * colors.length);
         h5.style.color = colors[randomColor];
     })

     h6.addEventListener('dblclick', function () {
         let randomColor = Math.floor(Math.random() * colors.length);
         h6.style.color = colors[randomColor];
     })



     // Creating a button that creates list items
     let button = document.createElement('button');
     let btnText = document.createTextNode('Click to add new list item');
     button.className = 'button';
     button.appendChild(btnText);
     document.body.appendChild(button);

     let listItem = 1;

     button.addEventListener('click', function () {
         let p = document.createElement('p');
         let text = document.createTextNode('This is list item ' + listItem);
         p.appendChild(text);
         document.body.appendChild(p);
         listItem++;
         p.addEventListener('click', function () {
             let randomColor = Math.floor(Math.random() * colors.length);
             p.style.color = colors[randomColor];
         });
         p.addEventListener('dblclick', function () {
             this.remove();
         })
     })
 })