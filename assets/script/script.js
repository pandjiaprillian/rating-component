const circles = document.querySelectorAll('a.circle');
const container = document.querySelector('div.container');
const btnSubmit = document.querySelector('button.submit');
let rating = ``;

for (const circle of circles) {
    circle.addEventListener('click', (e) => {
        e.preventDefault();
        rating = e.target.innerText;
    });
}

btnSubmit.addEventListener('click', (e) => {
    if (rating === ``) {
        alert('Please choose your rating first!');
    } else {
        let result = `<div class="result">
                    <img src="assets/images/illustration-thank-you.svg" alt="">
                    <p class="result-box">You selected <span class="rating-user">${rating}</span> out of 5</p>
                    <h3>Thank you!</h3>
                    <p>
                        We apreciate you taking the time to give a rating. If you ever need more support don't hesitate to get
                        in touch!
                    </p>
                </div>`;
        container.innerHTML = result;
    }
});
