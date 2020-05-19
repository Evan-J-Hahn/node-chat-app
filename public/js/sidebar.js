function closeNav() {
    document.getElementById("sidebar").style.width = "0"
    document.getElementById("closebtn").style.display = "none"
    document.getElementById("openbtn").style.display = "flex"
}

function openNav() {
    document.getElementById("sidebar").style.width = "225px"
    document.getElementById("openbtn").style.display = "none"
    document.getElementById("closebtn").style.display = "flex"
}