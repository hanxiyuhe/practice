document.addEventListener('DOMContentLoaded', function() {
    // 滚动监听
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.style.backgroundColor = '#3e8e41';
        } else {
            header.style.backgroundColor = '#4CAF50';
        }
    });

    // 导航栏滚动平滑
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});