var darkTheme = false;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('theme').addEventListener('click', () => {
        darkTheme = !darkTheme;
        
        if(darkTheme) {
            dark();
        } else {
            white();
        }
    });
    
    function dark() {
        document.getElementById('theme-link').href = 'css/dark.css';
        Array.from(document.getElementsByClassName('node')).forEach(element => {
            element.style.backgroundColor = '#252525';
        });
    }
    
    function white() {
        document.getElementById('theme-link').href = 'css/white.css';
        Array.from(document.getElementsByClassName('node')).forEach(element => {
            element.style.backgroundColor = 'white';
        });
    }
});