let appendrandom = (data) =>{
    let container = document.getElementById("container");
// container.innerHTML = ""; 

    let mrcon = document.createElement("div")
    mrcon.id = "mrconhome";

    let div = document.createElement("div");
    let welcome = document.createElement("h1")
    welcome.innerText = "Welcome to the 'Foody Mood', your own recipe book.";

    let inst = document.createElement("p")
    inst.innerText = "Search your favourite food recipe in abouve search bar.";

    div.append(welcome, inst)
    mrcon.append(div);
    container.append(mrcon);

}
appendrandom()