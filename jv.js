document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const bannerHeight = document.querySelector('.banner-below-menu').offsetHeight;
    const headerHeight = document.querySelector('header').offsetHeight;
  
    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 10000); // Chuyển ảnh sau mỗi 3 giây
    }
  
    showSlides();
  
    // Điều chỉnh margin-top của banner sau khi có chiều cao menu
    const bannerBelowMenu = document.querySelector('.banner-below-menu');
    if (bannerBelowMenu) {
        bannerBelowMenu.style.marginTop = headerHeight + 'px';
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Hiển thị nút khi người dùng cuộn xuống 20px từ đầu trang
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    // Cuộn lên đầu trang khi nút được nhấp
    scrollToTopBtn.addEventListener('click', function() {
       
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

      
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.media-tabs .tab');
    const videoSection = document.getElementById('video');
    const gallerySection = document.getElementById('gallery');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const tabId = this.getAttribute('data-tab');
            if (tabId === 'video') {
                videoSection.style.display = 'flex'; // Hiển thị flex cho phần video
                gallerySection.style.display = 'none';
            } else if (tabId === 'gallery') {
                videoSection.style.display = 'none';
                gallerySection.style.display = 'grid';
            }
        });
    });

    // Mặc định hiển thị tab Video khi trang tải
    videoSection.style.display = 'flex'; // Hiển thị flex mặc định
    gallerySection.style.display = 'none';
    tabs[0].classList.add('active'); // Kích hoạt tab Video đầu tiên
});