// ============================================
// 💝 KHADIJA'S VALENTINE WEBSITE - SCRIPT 💝
// ============================================

// Initialize configuration
const config = window.VALENTINE_CONFIG;

// Set page title
document.title = config.pageTitle;

// ============================================
// INITIALIZATION
// ============================================

window.addEventListener('DOMContentLoaded', () => {
    initializePage();
    setupCountdown();
    setupMusicPlayer();
    createFloatingElements();
    generateReasonCards();
    generateLoveLetter();
    setupLoveMeter();
});

// ============================================
// PAGE INITIALIZATION
// ============================================

function initializePage() {
    // Set main title
    document.getElementById('valentineTitle').textContent = `${config.valentineName}, my love...`;
    
    // Set first question texts
    document.getElementById('question1Text').textContent = config.questions.first.text;
    document.getElementById('yesBtn1').textContent = config.questions.first.yesBtn;
    document.getElementById('noBtn1').textContent = config.questions.first.noBtn;
    document.getElementById('secretAnswerBtn').textContent = config.questions.first.secretAnswer;
    
    // Set Batata question texts
    document.getElementById('batataText').textContent = config.questions.batata.text;
    document.getElementById('yesBtnBatata').textContent = config.questions.batata.yesBtn;
    document.getElementById('noBtnBatata').textContent = config.questions.batata.noBtn;
    document.getElementById('secretAnswerBatata').textContent = config.questions.batata.secretAnswer;
    
    // Set love meter question texts
    document.getElementById('question2Text').textContent = config.questions.loveMeter.text;
    document.getElementById('startText').textContent = config.questions.loveMeter.startText;
    document.getElementById('nextBtn').textContent = config.questions.loveMeter.nextBtn;
    
    // Set final question texts
    document.getElementById('question3Text').textContent = config.questions.final.text;
    document.getElementById('yesBtn3').textContent = config.questions.final.yesBtn;
    document.getElementById('noBtn3').textContent = config.questions.final.noBtn;

    // Show landing page first
    showSection('landing');
}

// ============================================
// SECTION NAVIGATION
// ============================================

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show requested section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ============================================
// COUNTDOWN TIMER
// ============================================

function setupCountdown() {
    const countdownElement = document.getElementById('countdown');
    
    // Check if countdown exists and is enabled
    if (!config.countdown || !config.countdown.enabled || !countdownElement) {
        if (countdownElement) {
            countdownElement.style.display = 'none';
        }
        return;
    }

    const countdownTitle = document.getElementById('countdownTitle');
    const countdownMessage = document.getElementById('countdownMessage');
    
    countdownTitle.textContent = config.countdown.title;
    countdownMessage.textContent = config.countdown.message;

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const targetDate = new Date(config.countdown.targetDate).getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// ============================================
// FLOATING ELEMENTS
// ============================================

function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    
    // Create hearts
    config.floatingEmojis.hearts.forEach((heart, index) => {
        for (let i = 0; i < 5; i++) {
            const div = document.createElement('div');
            div.className = 'heart';
            div.innerHTML = heart;
            setRandomPosition(div);
            container.appendChild(div);
        }
    });
}

function setRandomPosition(element) {
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.animationDuration = 15 + Math.random() * 10 + 's';
}

// ============================================
// REASONS WHY I LOVE YOU - FLIP CARDS
// ============================================

function generateReasonCards() {
    const reasonsGrid = document.getElementById('reasonsGrid');
    
    // Check if reasons exist in config
    if (!config.reasonsWhyILoveYou || config.reasonsWhyILoveYou.length === 0) {
        console.error('reasonsWhyILoveYou not found in config');
        return;
    }
    
    config.reasonsWhyILoveYou.forEach((reasonObj) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.onclick = () => flipCard(card);
        
        // Get image path
        const imageName = config.images[reasonObj.image];
        console.log('Loading image:', imageName, 'for reason', reasonObj.id);
        
        card.innerHTML = `
            <div class="card-front">
                <div class="card-number">${reasonObj.id}</div>
                <div class="card-prompt">Click to reveal 💝</div>
            </div>
            <div class="card-back">
                <img src="${imageName}" alt="Cute cat" class="cat-image" onerror="console.error('Failed to load image: ${imageName}')">
                <p class="reason-text">${reasonObj.reason}</p>
            </div>
        `;
        
        reasonsGrid.appendChild(card);
    });
}

function flipCard(card) {
    card.classList.toggle('flipped');
}

// ============================================
// LOVE LETTER - HOVER TO REVEAL
// ============================================

function generateLoveLetter() {
    const letterContainer = document.getElementById('loveLetterContent');
    const title = document.getElementById('loveLetterTitle');
    const instruction = document.getElementById('loveLetterInstruction');
    
    // Check if love letter exists in config
    if (!config.loveLetter || !config.loveLetter.content) {
        console.error('loveLetter not found in config');
        return;
    }
    
    title.textContent = config.loveLetter.title;
    instruction.textContent = config.loveLetter.instruction;
    
    config.loveLetter.content.forEach((line) => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'letter-line';
        
        // Split line into words
        const words = line.split(' ');
        words.forEach((word, index) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'word';
            wordSpan.textContent = word;
            
            // Add hover event to reveal
            wordSpan.addEventListener('mouseenter', () => {
                wordSpan.classList.add('revealed');
            });
            
            lineDiv.appendChild(wordSpan);
            
            // Add space between words (except last word)
            if (index < words.length - 1) {
                lineDiv.appendChild(document.createTextNode(' '));
            }
        });
        
        letterContainer.appendChild(lineDiv);
    });
}

// ============================================
// LOVE METER
// ============================================

function setupLoveMeter() {
    const loveMeter = document.getElementById('loveMeter');
    const loveValue = document.getElementById('loveValue');
    const extraLove = document.getElementById('extraLove');

    // Set initial value
    loveMeter.value = 100;
    loveValue.textContent = 100;

    loveMeter.addEventListener('input', () => {
        const value = parseInt(loveMeter.value);
        loveValue.textContent = value;
        
        if (value > 100) {
            extraLove.classList.remove('hidden');
            const overflowPercentage = (value - 100) / 9900;
            const extraWidth = overflowPercentage * window.innerWidth * 0.8;
            loveMeter.style.width = `calc(100% + ${extraWidth}px)`;
            loveMeter.style.transition = 'width 0.3s';
            
            // Show different messages based on value
            if (value >= 5000) {
                extraLove.textContent = config.loveMessages.extreme;
            } else if (value > 1000) {
                extraLove.textContent = config.loveMessages.high;
            } else {
                extraLove.textContent = config.loveMessages.normal;
            }
        } else {
            extraLove.classList.add('hidden');
            loveMeter.style.width = '100%';
        }
    });
}

// ============================================
// BUTTON INTERACTIONS
// ============================================

function moveButton(button) {
    const maxX = window.innerWidth - button.offsetWidth - 20;
    const maxY = window.innerHeight - button.offsetHeight - 20;
    
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
    button.style.transition = 'all 0.3s ease';
}

// ============================================
// CELEBRATION
// ============================================

function celebrate() {
    showSection('celebration');
    
    // Set celebration messages
    document.getElementById('celebrationTitle').textContent = config.celebration.title;
    document.getElementById('celebrationMessage').textContent = config.celebration.message;
    document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;
    
    // Add cat images to celebration
    const catsContainer = document.getElementById('celebrationCats');
    catsContainer.innerHTML = '';
    
    Object.values(config.images).forEach((imageName) => {
        const img = document.createElement('img');
        img.src = imageName;
        img.className = 'celebration-cat';
        img.alt = 'Cute cat';
        img.onerror = function() {
            console.error('Failed to load celebration image:', imageName);
            this.style.display = 'none';
        };
        catsContainer.appendChild(img);
    });
    
    // Create heart explosion
    createHeartExplosion();
}

function createHeartExplosion() {
    const container = document.querySelector('.floating-elements');
    
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        const randomHeart = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];
        heart.innerHTML = randomHeart;
        heart.className = 'heart';
        setRandomPosition(heart);
        container.appendChild(heart);
    }
}

// ============================================
// MUSIC PLAYER
// ============================================

function setupMusicPlayer() {
    const musicControls = document.getElementById('musicControls');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicSource = document.getElementById('musicSource');

    // Check if music config exists
    if (!config.music || !config.music.enabled) {
        musicControls.style.display = 'none';
        return;
    }

    // Set music source and volume
    musicSource.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.4;
    bgMusic.load();

    // Try autoplay if enabled
    if (config.music.autoplay) {
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    musicToggle.textContent = config.music.stopText;
                })
                .catch(error => {
                    console.log("Autoplay prevented by browser");
                    musicToggle.textContent = config.music.startText;
                });
        }
    }

    // Toggle music on button click
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText;
        }
    });
}