document.addEventListener("DOMContentLoaded", function () {

    // ==================================
    // 1. FLOATING EMOJIS
    // ==================================

    const emojis = [
        "💗", "🐼", "🧸", "✨",
        "🎀", "🌸", "💕", "⭐",
        "🎈", "🫧", "🍓"
    ];

    const layer = document.getElementById("floaties");

    for (let i = 0; i < 32; i++) {

        const emoji = document.createElement("span");

        emoji.className = "floaty";

        emoji.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.left = Math.random() * 100 + "vw";

        emoji.style.fontSize =
            (16 + Math.random() * 23) + "px";

        emoji.style.animationDuration =
            (9 + Math.random() * 13) + "s";

        emoji.style.animationDelay =
            (-Math.random() * 20) + "s";

        layer.appendChild(emoji);
    }


    // ==================================
    // 2. MAIN SURPRISE BUTTON
    // ==================================

    const surpriseBtn = document.getElementById("surpriseBtn");

    const surprise = document.getElementById("surprise");

    surpriseBtn.addEventListener("click", function () {

        const isOpen = surprise.style.display === "block";

        if (isOpen) {

            surprise.style.display = "none";

            surpriseBtn.textContent =
                "Open Your Little Surprise 🎁";

            closeAllPhotos();

        } else {

            surprise.style.display = "block";

            surpriseBtn.textContent =
                "Close Surprise 💗";

        }

    });


    // ==================================
    // 3. PHOTO DETAILS
    // ==================================

    const photos = {

        1: {
            src: "photo1.jpg",
            caption: "Our Cute Memories 🧸💗"
        },

        2: {
            src: "photo2.jpg",
            caption: "My Favourite Panda 🐼"
        },

        3: {
            src: "photo3.jpg",
            caption: "Forever Special ✨"
        }

    };


    // ==================================
    // 4. PHOTO REVEAL ELEMENTS
    // ==================================

    const reveal = document.getElementById("photoReveal");

    const image = document.getElementById("revealedImage");

    const caption = document.getElementById("photoCaption");

    const closeBtn = document.getElementById("closePhoto");


    // ==================================
    // 5. CLICK TO OPEN A GIFT
    // ==================================

    const giftCards = document.querySelectorAll(".magic-card");

    giftCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const number = this.dataset.photo;

            const photo = photos[number];

            if (!photo) return;

            // Set image and caption
            image.src = photo.src;

            caption.textContent = photo.caption;

            // Show popup
            reveal.classList.remove("show");

            void reveal.offsetWidth;

            reveal.classList.add("show");

            // Mark gift as opened
            this.classList.add("opened");

            this.querySelector(".gift-icon").textContent = "💖";

        });

    });


    // ==================================
    // 6. CLOSE PHOTO POPUP
    // ==================================

    function closeAllPhotos() {

        reveal.classList.remove("show");

        image.src = "";

    }

    closeBtn.addEventListener("click", function () {

        closeAllPhotos();

    });


    // ==================================
    // 7. IMAGE ERROR CHECK
    // ==================================

    image.addEventListener("error", function () {

        caption.textContent =
            "Oops! Please check your photo file name 🥺";

    });

});
