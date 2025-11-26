// Simple typewriter effect for the subtitle
(function () {
    const el = document.querySelector(".typewriter");
    if (!el) return;

    const text = el.getAttribute("data-text") || "";
    let index = 0;

    function type() {
        if (index <= text.length) {
            el.textContent = text.slice(0, index);
            index++;
            setTimeout(type, 40); // typing speed
        } else {
            // Blink cursor effect by toggling border
            setInterval(() => {
                if (el.style.borderRightColor === "transparent") {
                    el.style.borderRightColor = "rgba(148, 163, 184, 0.9)";
                } else {
                    el.style.borderRightColor = "transparent";
                }
            }, 500);
        }
    }

    type();
})();

// Set current year in footer
(function () {
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
})();
