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

      function playVideo(videoSrc) {
      const modal = document.getElementById('videoModal');
      const video = document.getElementById('modalVideo');
      modal.style.display = 'flex'; // Affiche la modal
      video.src = videoSrc; // Charge la source vidéo
      video.load(); // Joue la vidéo automatiquement
    }
    
    
    // Fonction pour fermer la modal
    function closeVideo() {
      const modal = document.getElementById('videoModal');
      const video = document.getElementById('modalVideo');
      modal.style.display = 'none'; // Masque la modal
      video.pause(); // Met en pause la vidéo
      video.src = ''; // Réinitialise la source
    }
    
    
    // Gestion de la fermeture en cliquant à l'extérieur de la modal
    window.addEventListener('click', (e) => {
      const modal = document.getElementById('videoModal');
      if (e.target === modal) {
          closeVideo();
      }
    });
    