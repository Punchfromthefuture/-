const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;

function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})

show(imageIndex);

const contactForm = document.getElementById('contactForm');
    contactForm.onsubmit = function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const data = {name, phone};
      const action = this.action;
      window.open(action,"_blank").document.write(JSON.stringify(data));
    };
