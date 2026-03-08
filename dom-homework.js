const myDiv = document.getElementById("myDiv");
let i = 1;
myDiv.appendChild(document.createElement("h1")).appendChild(document.createTextNode("Welcome to DOM homework"));
myDiv.appendChild(document.createElement("p")).appendChild(document.createTextNode("This is your first DOM homework assignment"));
myDiv.appendChild(document.createElement("ul")).appendChild(document.createElement("li")).appendChild(document.createTextNode("test1")).parentNode.parentNode.appendChild(document.createElement("li")).appendChild(document.createTextNode("test2")).parentNode.parentNode.appendChild(document.createElement("li")).appendChild(document.createTextNode("test3"));
myDiv.firstChild.setAttribute("class", "highlight");
myDiv.firstChild.style.backgroundColor = "purple";
// I just realized that I could have ised the get element by tag name... lovley
document.getElementsByTagName("body")[0].appendChild(document.createElement("button")).appendChild(document.createTextNode("Add new list item")).parentNode.addEventListener("click", function() {
    document.getElementsByTagName("ul")[0].appendChild(document.createElement("li")).appendChild(document.createTextNode("new list item " + i));
    i++;
});

myDiv.addEventListener("click", function() {
    let hexcodenumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let hexcode = "#";
    for (let i = 0; i < 6; i++) {
        let randomindex = Math.floor(Math.random() * hexcodenumbers.length);
        hexcode += hexcodenumbers[randomindex];
    }
    myDiv.style.backgroundColor = hexcode;
    // code borrowed from https://dev.to/puenehfaith/how-to-randomly-change-background-color-in-javascript-4o91
});