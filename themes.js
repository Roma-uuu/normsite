var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "light_theme.css";
    let darkTheme = "dark_theme.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
        currTheme = darkTheme;
        theme = "dark";
    }
    else
    {
        currTheme = lightTheme;
        theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}