function closeForm()
{
    document.getElementById("add-popup").style.display = "none";
}

function openForm()
{
    document.getElementById("add-popup").style.display = "block";
    const date = new Date();
    var y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate();
    if (m < 10)
        m = "0" + m;
    if (d < 10)
        d = "0" + d;
    const today = y + "-" + m + "-" + d;
    document.getElementById("duedate-id").setAttribute("min", today);
}

const storedDarkMode = localStorage.getItem("darkMode");
if (storedDarkMode === "true") {
    const root_theme = document.querySelector(':root');
    root_theme.style.setProperty('--textColor', '#ffffff');
    switchDarkMode();
}
else {
    const root_theme = document.querySelector(':root');
    root_theme.style.setProperty('--textColor', '#000000');
    switchLightMode();
}

const bgLMcolor = localStorage.getItem("selectedLMColor");
const bgDMcolor = localStorage.getItem("selectedDMColor");

if (bgLMcolor == "" || bgDMcolor == "") {
    if (bgLMcolor == "")
        bgLMcolor = "#FF5C5C";
    if (bgDMcolor == "")
        bgDMcolor = "#000000";
}

// function changeBackgroundImage() {
//     const root_theme = document.documentElement;
//     root_theme.style.setProperty('--bgcolorpage', 'none');
//     root_theme.style.setProperty('--bgcolortask', 'rgba(255, 255, 255, 0.7)');
    
//     const body = document.body;
//     body.style.setProperty('background-image', 'url("https://i.pinimg.com/originals/19/f1/68/19f1683bafa6b3d382a465d41cc62f3c.jpg")');
//     body.style.setProperty('width', '100%');
//     body.style.setProperty('background-size', 'cover');
//     body.style.setProperty('background-repeat', 'no-repeat');
//     body.style.setProperty('background-position', 'center');
// }

function changeBackgroundColor(selectedColor) {
    const storedDarkMode = localStorage.getItem("darkMode");
    const root_theme = document.querySelector(':root');

    if (storedDarkMode === "true") {
        root_theme.style.setProperty('--bgcolorpage', selectedColor);
        root_theme.style.setProperty('--textColor',  '#ffffff');
        localStorage.setItem('selectedDMColor', selectedColor);
    } else {
        root_theme.style.setProperty('--bgcolorpage', selectedColor);
        localStorage.setItem('selectedLMColor', selectedColor);
    }
}

function switchDarkMode()
{
    const storedColor = localStorage.getItem('selectedDMColor');
    const root_theme = document.querySelector(':root');
    localStorage.setItem('darkMode', true);
    document.getElementById('darkModePalette').style.display = 'block';
    document.getElementById('lightModePalette').style.display = 'none';
    document.getElementById('dmcPalette').style.display = 'block';
    document.getElementById('lmcPalette').style.display = 'none';
    root_theme.style.setProperty('--bgcolorpage', storedColor);
    if (storedColor === null)
        root_theme.style.setProperty('--bgcolorpage', '#000000');
    root_theme.style.setProperty('--nav-button', 'white');
    root_theme.style.setProperty('--nav-heading', 'white');
    root_theme.style.setProperty('--page-btn', 'rgba(255, 255, 255, 0.2)');
    root_theme.style.setProperty('--page-btn-hover', 'rgba(255, 255, 255, 0.18)');
    root_theme.style.setProperty('--task-container-bgcolor', 'rgba(255, 255, 255, 0.15)');
    root_theme.style.setProperty('--bgcolortask', 'rgba(255, 255, 255, 0.3)');
    root_theme.style.setProperty('--borderopaque', 'rgba(255, 255, 255, 0.3)');
    root_theme.style.setProperty('--task-btn', '#043a51');
    root_theme.style.setProperty('--task-btn-color', 'white');
    document.getElementById('dmode').style.display = 'none';
    document.getElementById('lmode').style.display = 'block';
    document.getElementById('dbtnmode').style.display = 'none';
    document.getElementById('lbtnmode').style.display = 'block';
    root_theme.style.setProperty('--textColor',  '#ffffff');
    document.getElementById('sign-out').style.color = '#ffffff';
}

function switchLightMode()
{
    const storedColor = localStorage.getItem('selectedLMColor');
    const root_theme = document.querySelector(':root');
    localStorage.setItem('darkMode', false);
    document.getElementById('darkModePalette').style.display = 'none';
    document.getElementById('lightModePalette').style.display = 'block';
    document.getElementById('dmcPalette').style.display = 'none';
    document.getElementById('lmcPalette').style.display = 'block';
    root_theme.style.setProperty('--bgcolorpage', storedColor);
    root_theme.style.setProperty('--nav-button', 'black');
    root_theme.style.setProperty('--nav-heading', 'black');
    root_theme.style.setProperty('--page-btn', 'rgba(0, 0, 0, 0.1)');
    root_theme.style.setProperty('--page-btn-hover', 'rgba(0, 0, 0, 0.05)');
    root_theme.style.setProperty('--task-container-bgcolor', 'rgba(0, 0, 0, 0.03)');
    root_theme.style.setProperty('--bgcolortask', 'rgba(255, 255, 255, 0.5)');
    root_theme.style.setProperty('--borderopaque', 'rgba(101, 101, 101, 0.5)');
    root_theme.style.setProperty('--task-btn', 'white');
    root_theme.style.setProperty('--task-btn-color', 'black');
    document.getElementById('dmode').style.display = 'block';
    document.getElementById('lmode').style.display = 'none';
    document.getElementById('dbtnmode').style.display = 'block';
    document.getElementById('lbtnmode').style.display = 'none';
    root_theme.style.setProperty('--textColor', '#000000');
    document.getElementById('sign-out').style.color = '#000000';
}

function switchMobileDarkMode()
{
    localStorage.setItem('darkMode', true);
    document.getElementById('dmcPalette').style.display = 'block';
    document.getElementById('lmcPalette').style.display = 'none';
    const storedColor = localStorage.getItem('selectedDMColor');
    const root_theme = document.querySelector(':root');
    root_theme.style.setProperty('--bgcolorpage', storedColor);
    root_theme.style.setProperty('--nav-button', 'white');
    root_theme.style.setProperty('--nav-heading', 'white');
    root_theme.style.setProperty('--page-btn', 'rgba(255, 255, 255, 0.2)');
    root_theme.style.setProperty('--page-btn-hover', 'rgba(255, 255, 255, 0.18)');
    root_theme.style.setProperty('--task-container-bgcolor', 'rgba(255, 255, 255, 0.15)');
    root_theme.style.setProperty('--bgcolortask', 'rgba(255, 255, 255, 0.3)');
    root_theme.style.setProperty('--borderopaque', 'rgba(255, 255, 255, 0.3)');
    root_theme.style.setProperty('--task-btn', '#043a51');
    root_theme.style.setProperty('--task-btn-color', 'white');
    document.getElementById('dbtnmode').style.display = 'none';
    document.getElementById('lbtnmode').style.display = 'block';
}

function switchMobileLightMode()
{
    localStorage.setItem('darkMode', false);
    document.getElementById('dmcPalette').style.display = 'none';
    document.getElementById('lmcPalette').style.display = 'block';
    const storedColor = localStorage.getItem('selectedLMColor');
    const root_theme = document.querySelector(':root');
    root_theme.style.setProperty('--bgcolorpage', storedColor);
    root_theme.style.setProperty('--nav-button', 'black');
    root_theme.style.setProperty('--nav-heading', 'black');
    root_theme.style.setProperty('--page-btn', 'rgba(0, 0, 0, 0.1)');
    root_theme.style.setProperty('--page-btn-hover', 'rgba(0, 0, 0, 0.05)');
    root_theme.style.setProperty('--task-container-bgcolor', 'rgba(0, 0, 0, 0.03)');
    root_theme.style.setProperty('--bgcolortask', 'rgba(255, 255, 255, 0.5)');
    root_theme.style.setProperty('--borderopaque', 'rgba(101, 101, 101, 0.5)');
    root_theme.style.setProperty('--task-btn', 'white');
    root_theme.style.setProperty('--task-btn-color', 'black');
    document.getElementById('dbtnmode').style.display = 'block';
    document.getElementById('lbtnmode').style.display = 'none';
}

var paletteDropdownMenu = document.getElementById('paletteDropdown').style.display = 'none';

function togglePaletteDropdown() {
    var dropdown = document.getElementById("paletteDropdown");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

var userMenu = document.getElementById('user-menu').style.display = 'none';

function toggleUserMenuDropdown() {
    var dropdown = document.getElementById("user-menu");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "flex";
    } else {
        dropdown.style.display = "none";
    }
}

var mobileViewMenu = document.getElementById('mobileView').style.display = 'none';

function toggleMobileViewMenuDropdown() {
    var dropdown = document.getElementById("mobileView");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}