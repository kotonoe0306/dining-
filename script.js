// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });
    
    // Selectors
    const header = document.getElementById('header');
    const burgerMenu = document.querySelector('.burger-menu');
    const navMobile = document.getElementById('nav-mobile');
    const navLinks = document.querySelectorAll('.nav-mobile a');
    const faqItems = document.querySelectorAll('.faq-item');
    const modal = document.getElementById('dish-modal');
    const modalContent = document.getElementById('modal-dish-content');
    const closeModal = document.querySelector('.close-modal');
    const dishModalTriggers = document.querySelectorAll('.dish-modal-trigger');
    
    // Fixed header on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    
    // Mobile navigation toggle
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        navMobile.classList.toggle('open');
        
        // Toggle burger menu animation
        const spans = burgerMenu.querySelectorAll('span');
        if (burgerMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile navigation when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMobile.classList.remove('open');
            burgerMenu.classList.remove('active');
            
            // Reset burger menu
            const spans = burgerMenu.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
    
    // FAQ accordion
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Toggle active class
            item.classList.toggle('active');
            
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
    
    // Dish details modal
    dishModalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            
            const dishId = this.getAttribute('data-dish');
            const modalContent = generateDishModalContent(dishId);
            
            document.getElementById('modal-dish-content').innerHTML = modalContent;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    });
    
    // Generate modal content based on dish id
    function generateDishModalContent(dishId) {
        let content = '';
        
        switch(dishId) {
            case 'dish1':
                content = `
                    <div class="modal-dish">
                        <div class="modal-dish-image">
                            <img src="./imges/A_beautifully_plated_Japanese_dish_of_aburi_shimes-1744520089253.png" alt="炙り〆鯖のカルパッチョ">
                        </div>
                        <div class="modal-dish-info">
                            <h2>炙り〆鯖のカルパッチョ</h2>
                            <p class="modal-dish-caption">香る山葵ソースと共に</p>
                            <div class="modal-dish-description">
                                <p>玄界灘で獲れた新鮮な鯖を丁寧に〆て、表面を軽く炙ることで香ばしさを引き出しました。特製の山葵ソースが鯖の旨味をより一層引き立てます。</p>
                                <p>鮮度にこだわり、毎朝市場から直送される鯖を使用。炙ることで脂の甘みを引き出し、山葵の爽やかな風味と合わせることで、和と洋の融合した味わいを生み出しています。</p>
                                <p>添えられる季節の野菜や彩りも、その時期の最も美しいものを厳選しています。</p>
                                <div class="modal-dish-details">
                                    <p><strong>価格:</strong> 1,800円 (税込)</p>
                                    <p><strong>おすすめドリンク:</strong> 静岡県産 緑茶のペアリング</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'dish2':
                content = `
                    <div class="modal-dish">
                        <div class="modal-dish-image">
                            <img src="https://cdn1.genspark.ai/user-upload-image/5_generated/ac22945f-ef82-4e18-8d09-fe53699533d8_wm" alt="季節の一汁三菜">
                        </div>
                        <div class="modal-dish-info">
                            <h2>季節の一汁三菜</h2>
                            <p class="modal-dish-caption">土と水の恵みを一皿に</p>
                            <div class="modal-dish-description">
                                <p>旬の野菜と地元の食材を使った日替わりの小鉢三種と椀物のセット。季節の移ろいを感じる一品です。</p>
                                <p>「えん」の心臓部とも言える一品。その日一番の旬の食材を、料理長が市場で吟味して調達し、素材それぞれの持ち味を活かした調理法で仕上げています。</p>
                                <p>小鉢は和洋折衷の創作料理。季節を映す彩りと、一口ごとに広がる異なる味わいをお楽しみいただけます。椀物は出汁にこだわり、素材の旨味を最大限に引き出しています。</p>
                                <div class="modal-dish-details">
                                    <p><strong>価格:</strong> 2,200円 (税込)</p>
                                    <p><strong>おすすめドリンク:</strong> 長野県産 辛口純米酒</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'dish3':
                content = `
                    <div class="modal-dish">
                        <div class="modal-dish-image">
                            <img src="https://cdn1.genspark.ai/user-upload-image/5_generated/7c93221d-cfc1-431b-aa8d-6dfffc53aa38_wm" alt="和牛の藁焼き">
                        </div>
                        <div class="modal-dish-info">
                            <h2>和牛の藁焼き</h2>
                            <p class="modal-dish-caption">古の火入れ、現代に蘇る</p>
                            <div class="modal-dish-description">
                                <p>厳選された和牛を稲藁で焼き上げることで、独特の香りと柔らかさを引き出しました。藁の香りが肉の旨味と絶妙に調和します。</p>
                                <p>古来から伝わる藁焼きの技法を現代の調理法と融合させた一品。A5ランクの黒毛和牛を使用し、肉本来の旨味を損なわないよう絶妙な火入れで仕上げています。</p>
                                <p>添えられる特製の醤油ベースのソースは、フランス料理の技法を取り入れた和洋折衷の味わい。塩と柚子胡椒でシンプルに味わうのもおすすめです。</p>
                                <div class="modal-dish-details">
                                    <p><strong>価格:</strong> 3,600円 (税込)</p>
                                    <p><strong>おすすめドリンク:</strong> 山梨県産 赤ワイン</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            default:
                content = '<p>詳細情報が見つかりませんでした。</p>';
                break;
        }
        
        return content;
    }
    
    // Scroll animation for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    document.head.appendChild(style);
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
    
    // Lazy load images
    const lazyImages = document.querySelectorAll('img');
    
    const lazyLoadOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px 100px 0px'
    };
    
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('src');
                
                if (src) {
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.5s ease';
                    
                    img.onload = function() {
                        img.style.opacity = '1';
                    };
                }
                
                observer.unobserve(img);
            }
        });
    }, lazyLoadOptions);
    
    lazyImages.forEach(image => {
        lazyLoadObserver.observe(image);
    });
    
    // Show fixed reservation button after scrolling
    const fixedReservation = document.querySelector('.fixed-reservation');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > window.innerHeight) {
            fixedReservation.style.display = 'block';
            fixedReservation.style.opacity = '1';
        } else {
            fixedReservation.style.opacity = '0';
            setTimeout(() => {
                if (window.scrollY <= window.innerHeight) {
                    fixedReservation.style.display = 'none';
                }
            }, 300);
        }
    });
    
    // Initialize with correct display
    if (window.scrollY <= window.innerHeight) {
        fixedReservation.style.display = 'none';
        fixedReservation.style.opacity = '0';
    }
    
    // Add smooth transition for fixed button
    fixedReservation.style.transition = 'opacity 0.3s ease';
});