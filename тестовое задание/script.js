class Review {
    render() {
        let htmlReview = ''
        REVIEWS.forEach(({ id, photo, name, city, textReview }) => {

            htmlReview += 
            `<li>
                <div class="phName"><img src="${photo}" class="photo">
                <div class="nameCity"><span class="nameReview">${name}</span><br>
                <span class="cityReview">${city}</span></div></div>
                <span class="textReview">${textReview}</span>
            </li>`
        })

        const html = `
            <ul class="review">
                ${htmlReview}
            </ul>
        `

        ROOT_REVIEWS.innerHTML = html

    }
}

const review = new Review()
review.render()

// arrowBlue and reBlue
const arrows = document.querySelectorAll('.arrow')

for (let i = 0; i < arrows.length; i++) {
    arrows[i].onmouseover = (obj) => {
        let image = obj.target
        image.src = "img/" + image.id + "Blue.svg"
    }
    arrows[i].onmouseout = (obj) => {
        let image = obj.target
        image.src = "img/" + image.id + ".svg"
    }
}


// reviews scroll

const rightScroll = document.querySelector('#arrowRight')
const leftScroll = document.querySelector('#arrowLeft')
const scrollerBox = document.querySelectorAll('.scroll')

//document.getElementById("1").setAttribute("checked", true)

/*rightScroll.onclick = () => {
    console.log("1")
for (let i = 0; i < scrollerBox.length; i++) {
    if (scrollerBox[i].checked) {
        console.log("2")
        let j = i + 1
        console.log("3")
        scrollerBox[i].checked = false
        scrollerBox[j].setAttribute("checked", true)

    }
}
}*/

//Questions and answers

const group98 = document.querySelectorAll(".question")
const imgGroup98 = document.querySelectorAll(".slider")

for (let i = 0; i < group98.length; i++) {
    group98[i].onclick = (obj) => {
        target = obj.target
        if (!group98[i].hasAttribute("open")) {
        imgGroup98[i].src = `img/Group 98-1.svg`
        } else {
            imgGroup98[i].src = `img/Group 98.svg` 
        }
    }
}