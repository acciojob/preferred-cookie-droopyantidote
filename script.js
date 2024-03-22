document.addEventListener("DOMContentLoaded", function() {
    // Retrieve user preferences from cookies or set default values
    const fontSizeInput = document.getElementById("fontsize");
    const fontColorInput = document.getElementById("fontcolor");
    
    const savedFontSize = getCookie("fontsize");
    const savedFontColor = getCookie("fontcolor");

    // Set input values to saved preferences or defaults
    fontSizeInput.value = savedFontSize || 16;
    fontColorInput.value = savedFontColor || "#000000";

    // Apply user preferences to the page
    applyUserPreferences();

    // Event listener for form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get user preferences from form inputs
        const fontSize = fontSizeInput.value;
        const fontColor = fontColorInput.value;

        // Save user preferences as cookies
        setCookie("fontsize", fontSize, 365);
        setCookie("fontcolor", fontColor, 365);

        // Apply user preferences to the page
        applyUserPreferences();

        alert("Preferences saved successfully!");
    });

    // Function to apply user preferences to the page
    function applyUserPreferences() {
        document.body.style.fontSize = fontSizeInput.value + "px";
        document.body.style.color = fontColorInput.value;
    }

    // Function to set cookie
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + value + ";expires=" + expires.toUTCString();
    }

    // Function to get cookie
    function getCookie(name) {
        const cookies = document.cookie.split(";").map(cookie => cookie.trim());
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split("=");
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return null;
    }
});
