const button = document.getElementById("myBtn");
        button.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
        });

        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        