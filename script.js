let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top>= offset && top < offset + height) {


            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);


}

const video = document.getElementById('bresil');

    video.addEventListener('click', function() {
      this.controls = true;
    });

    video.addEventListener('pause', function() {
      this.controls = false;
    });

    video.addEventListener('play', function() {
      setTimeout(() => this.controls = false, 2000);  
    });

    const video2 = document.getElementById('bresil2');

    video2.addEventListener('click', function() {
      this.controls = true;
    });

    video2.addEventListener('pause', function() {
      this.controls = false;
    });

    video2.addEventListener('play', function() {
      setTimeout(() => this.controls = false, 2000);  
    });
    const video3 = document.getElementById('commerce');

    video3.addEventListener('click', function() {
      this.controls = true;
    });

    video3.addEventListener('pause', function() {
      this.controls = false;
    });

    video3.addEventListener('play', function() {
      setTimeout(() => this.controls = false, 2000);  
    });
