// ============================================
// 💝 KHADIJA'S CUSTOM VALENTINE'S WEBSITE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name
    valentineName: "Khadija",

    // Browser tab title
    pageTitle: "Will You Be My Valentine, Krystell? 💝",

    // Countdown to Valentine's Day 2026
    countdown: {
        enabled: true,
        targetDate: "2026-02-14T00:00:00", // February 14, 2026
        title: "Time Until Valentine's Day 2026",
        message: "Days until I can celebrate our love"
    },

    // Cat images for decorations (your uploaded cute cats)
    // IMPORTANT: Rename your images to cat1.jpeg, cat2.jpeg, cat3.jpeg, cat4.jpeg
    // OR update these paths to match your actual image filenames
    images: {
        cat1: "cat1.jpeg", // Pink cat
        cat2: "cat2.jpeg", // Blue cat with flowers
        cat3: "cat3.jpeg", // Blue cat with mustache
        cat4: "cat4.jpeg"  // Gradient cat
    },

    // Floating background - minimal, just soft hearts
    floatingEmojis: {
        hearts: ['💝', '💗', '💕'],  // Soft pink hearts only
        bears: []  // No bears, keeping it minimal
    },

    // Questions flow
    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I don't like you, I love you! ❤️"
        },
        batata: {
            text: "Are you a Batata?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I am YOUR Batata! 💝"
        },
        loveMeter: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next 💝"
        },
        final: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹",
            yesBtn: "Yes! 💕",
            noBtn: "No"
        }
    },

    // NEW FEATURE: 8 Reasons Why I Love You
    reasonsWhyILoveYou: [
        {
            id: 1,
            reason: "Your beautiful eyes that shimmer like a moonlit river",
            image: "cat2" // Blue cat with flowers
        },
        {
            id: 2,
            reason: "The way you light up when you talk about stuff you like",
            image: "cat4" // Gradient cat
        },
        {
            id: 3,
            reason: "How you make me feel understood even when I'm being difficult",
            image: "cat1" // Pink cat
        },
        {
            id: 4,
            reason: "Your beautiful soul that never fails to give me hope",
            image: "cat2" // Blue cat with flowers
        },
        {
            id: 5,
            reason: "The way you always try to make time for me",
            image: "cat3" // Blue cat with mustache
        },
        {
            id: 6,
            reason: "How talented you are, my artist, poet, and engineer",
            image: "cat4" // Gradient cat
        },
        {
            id: 7,
            reason: "Your humor that fixes my soul",
            image: "cat3" // Blue cat with mustache
        },
        {
            id: 8,
            reason: "Every moment with you feels like home",
            image: "cat1" // Pink cat
        }
    ],

    // NEW FEATURE: Love Letter (hover to reveal)
    loveLetter: {
        title: "A Letter For You 💌",
        instruction: "Hover over the words to reveal my message...",
        content: [
            "My dearest Krystell,",
            "From the moment I met you, my world became brighter and full of color.",
            "Your smile lights up my darkest days and your presence makes everything better.",
            "Your laugh is my favorite melody, a sound I never want to stop hearing.",
            "Every moment with you feels like a dream I never want to wake up from.",
            "You understand me in ways no one else can, and you love me even when I'm difficult.",
            "You are my best friend, my partner, my muse, and my everything.",
            "Your talent amazes me - my beautiful artist, poet, and engineer.",
            "I fall more in love with you every single day, discovering new reasons to adore you.",
            "You are my home, my safe place, my forever.",
            "Thank you for choosing me, for loving me, for being you.",
            "Forever and always yours,",
            "Your love 💝"
        ]
    },

    // Love meter messages
    loveMessages: {
        extreme: "WOOOOW You love me THAT much?? 🥰✨💝",
        high: "To infinity and beyond! 🚀💕",
        normal: "And beyond! 💗"
    },

    // Celebration after "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝",
        message: "Now come get your gift: a big warm hug and a huge kiss! 😘",
        emojis: "💝💕💗💖✨🌸"
    },

    // SOFT ROMANTIC PINK COLOR SCHEME (Minimalist)
    colors: {
        backgroundStart: "#FFF0F5",      // Lavender blush (very soft pink)
        backgroundEnd: "#FFE4E9",        // Misty rose (gentle pink)
        buttonBackground: "#FFB6C1",     // Light pink
        buttonHover: "#FF69B4",          // Hot pink (for hover)
        textColor: "#D84B6C",            // Soft berry pink
        accentColor: "#FFC0CB",          // Classic pink
        cardBackground: "#FFFFFF",       // Pure white for cards
        cardShadow: "rgba(255, 182, 193, 0.3)" // Soft pink shadow
    },

    // Animation settings (smooth and elegant)
    animations: {
        floatDuration: "20s",            // Slower, more elegant
        floatDistance: "30px",           // Subtle movement
        bounceSpeed: "0.6s",             // Gentle bounce
        heartExplosionSize: 1.3,         // Subtle explosion
        cardFlipSpeed: "0.6s",           // Smooth card flip
        hoverRevealSpeed: "0.8s"         // Gentle text reveal
    },


};

// Don't modify below this line
window.VALENTINE_CONFIG = CONFIG;