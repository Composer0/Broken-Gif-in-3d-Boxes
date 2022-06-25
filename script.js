const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

function createBoxes() {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            var box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            // the calculations used about for the background position are the same that can be viewed in the index-draft. Index posiion 4 does not occur because of the cut off which works great due to the inital position having to be 0 0 and final position having to be -375 -375.

            boxesContainer.appendChild(box)
        }
    }
}

// btn.addEventListener('click', () => 
// boxesContainer.classList.toggle('big'),
// document.body.style.backgroundImage =
// "url('https://uvassociates.in/sites/default/files/styles/panopoly_image_full/public/images/borders/Red-Valentine-Border-Square-Heart_4.png?itok=F47xHLc0')",
// document.body.style.backgroundRepeat = "no-repeat",
// document.body.style.backgroundSize = "cover",
// document.body.style.backgroundPosition = "center",
// document.body.style.transition = "2s"

// if (btn.innerHTML === 'Click Me!') {
//     btn.innerHTML = "Friendship!"
// } else {
//     btn.innerHTML = "Again?..."
// }
// )

createBoxes();

// btn.addEventListener('click', function switcher() {
//     boxesContainer.classList.toggle('big')
//     document.body.style.backgroundImage =
//     "url('https://uvassociates.in/sites/default/files/styles/panopoly_image_full/public/images/borders/Red-Valentine-Border-Square-Heart_4.png?itok=F47xHLc0')";
//     document.body.style.backgroundRepeat = "no-repeat";
//     document.body.style.backgroundSize = "cover";
//     document.body.style.backgroundPosition = "center";
//     document.body.style.transition = "2s"

//     if (btn.innerHTML === 'Click Me!') {
//         btn.innerHTML = "Friendship!"
//     } else {
//         btn.innerHTML = "Again?..."
//     }
// })

btn.addEventListener("click", switcher) 

function switcher() {
        boxesContainer.classList.toggle('big')
        document.body.style.backgroundImage =
        "url('https://uvassociates.in/sites/default/files/styles/panopoly_image_full/public/images/borders/Red-Valentine-Border-Square-Heart_4.png?itok=F47xHLc0')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.transition = "2s"
    
        if (btn.innerHTML === 'Click Me!') {
            btn.innerHTML = "Friendship!"
        } else {
            btn.innerHTML = "Again?..."
        }
    }


// wanted to practice writing the function in different ways. Learned that using ES6 arrow function works best when you only have one property being changed, overwise it is best to establish a declaration.