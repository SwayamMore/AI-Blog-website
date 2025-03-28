const cookieBox = document.querySelector('.cookie-wrapper');
const buttons = document.querySelectorAll('.cookie-button');

// Show cookie box if cookies are not hidden
if (localStorage.getItem('hideCookies') !== 'true') {
    cookieBox.classList.add('show');
}
// Handle button clicks
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        cookieBox.classList.remove('show');
        cookieBox.classList.add('hidden');
        localStorage.setItem('hideCookies', 'true');

        // Set cookie if the user accepts
        if (button.id === 'acceptBtn') {
            document.cookie = `cookieBy=codinglab; max-age=${60 * 60 * 24 * 30}; path=/; SameSite=Lax`;
        }
    });
});
