
let header = document.getElementById("header");

header.innerHTML = `<div id="nav">
<div id="start">
    <a href="./index.html"><h1>Foody Mood</h1></a>
</div>
<div id="center">
    <input type="search" id="searchInput" oninput="debounce(main, 1000)" placeholder="Search your favourite food recipe">
    <div id="srbox"></div>
</div>
<div id="end">
    <div><a href="./rotd.html">Recipe of the day</a></div>
    <div><a href="./random.html">Random recipe</a></div>
</div>`;

export default header;