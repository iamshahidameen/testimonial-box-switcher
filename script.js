const testimonialText = document.querySelector('.testimonial');
const testimonialName = document.querySelector('.username');
const testimonialRole = document.querySelector('.role');
const testimonialImg = document.querySelector('.user-image');

setInterval(changeTestimonial, 10000);

function changeTestimonial(){
    testimonialText.innerText = '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non culpa quo sed. Voluptate distinctio, dolorem architecto modi laudantium deleniti quos?';
    testimonialName.innerText = 'No Name';
    testimonialRole.innerText = 'Manager';
    testimonialImg.src = 'https://picsum.photos/200/300'
    
}