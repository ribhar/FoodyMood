
document.onclick = function (event) {
    let inp = document.getElementById("searchInput");
    let srbox = document.getElementById("srbox");
    if (event.target.id !== "search_input") {
        srbox.style.display = "none";
        inp.value = "";
        inp.style.borderBottomLeftRadius = "15px";
        inp.style.borderBottomRightRadius = "15px";
    }

}

async function searchrecipe(){
    let inp = document.getElementById("searchInput");


    try{
        if(inp.value!==""){
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp.value}`);

            let data = await res.json();
            // console.log("data :", data)
            return data;
        }
        
        
    }
    catch (e){
        
        console.log("error :", e)
        
    }
    

}

let timerid;
let srboxapnd = async (data)=>{
    let inp = document.getElementById("searchInput");
    console.log(data)
    let srbox = document.getElementById("srbox");
    srbox.innerHTML = "";

    if(data.length>3){
        srbox.style.height= "370px"
        srbox.style.overflowY = "scroll";
    }
    


   
    let container = document.getElementById("container");
    try{
        data.forEach((el) => {

            let card = document.createElement("div");
            card.id = "srbcard";
            card.onclick = ()=>{
                container.innerHTML = ""; 
                srbox.innerHTML = "";
                inp.value = "";
                if(inp.value === ""){
                    srbox.style.display = "none";
                    inp.style.borderBottomLeftRadius = "15px";
                    inp.style.borderBottomRightRadius = "15px";
                }
                else{
                    srbox.style.display = "block";
                    inp.style.borderBottomLeftRadius = 0;
                    inp.style.borderBottomRightRadius = 0;
            
                }
                let mrcon = document.createElement("div")
                mrcon.id = "mrcon";
                let imgd = document.createElement("div");
                imgd.id = "mrcimgd";
                let image = document.createElement("img")
                image.src = el.strMealThumb; imgd.append(image);

                let condiv = document.createElement("div");
                condiv.id = "mrcondiv";
                let name = document.createElement('p');
                name.innerText = el.strMeal
                
                let category = document.createElement("p")
                category.innerHTML = "<b>Category</b> : "+el.strCategory;

                let region = document.createElement("p");
                region.innerHTML = "<b>Region</b> : "+el.strArea;

                let instrucion = document.createElement("p");
                instrucion.innerHTML = "<b>Instrucions</b> : "+el.strInstructions;

                let ingdnt = document.createElement("table");
                let r1 = document.createElement("tr");
                let r1c1 = document.createElement("th"); r1c1.innerHTML = "<b>Ingredients</b>";
                let r1c2 = document.createElement("td"); r1c2.innerHTML = el.strIngredient1;
                let r1c3 = document.createElement("td"); r1c3.innerHTML = el.strIngredient2;
                let r1c4 = document.createElement("td"); r1c4.innerHTML = el.strIngredient3;
                let r1c5 = document.createElement("td"); r1c5.innerHTML = el.strIngredient4;
                let r1c6 = document.createElement("td"); r1c6.innerHTML = el.strIngredient4;
                let r1c7 = document.createElement("td"); r1c7.innerHTML = el.strIngredient5;
                let r1c8 = document.createElement("td"); r1c8.innerHTML = el.strIngredient6;
                let r1c9 = document.createElement("td"); r1c9.innerHTML = el.strIngredient7;
                let r1c10 = document.createElement("td"); r1c10.innerHTML = el.strIngredient8;
                let r1c11 = document.createElement("td"); r1c11.innerHTML = el.strIngredient9;
                let r1c12 = document.createElement("td"); r1c12.innerHTML = el.strIngredient10;
                let r1c13 = document.createElement("td"); r1c13.innerHTML = el.strIngredient12;
                let r1c14 = document.createElement("td"); r1c14.innerHTML = el.strIngredient13;
                let r1c15 = document.createElement("td"); r1c15.innerHTML = el.strIngredient14;
                let r1c16 = document.createElement("td"); r1c16.innerHTML = el.strIngredient15;
                let r1c17 = document.createElement("td"); r1c17.innerHTML = el.strIngredient16;
                let r1c18 = document.createElement("td"); r1c18.innerHTML = el.strIngredient17;
                let r1c19 = document.createElement("td"); r1c19.innerHTML = el.strIngredient18;
                let r1c20 = document.createElement("td"); r1c20.innerHTML = el.strIngredient19;
                let r1c21 = document.createElement("td"); r1c21.innerHTML = el.strIngredient20;
                r1.append(r1c1,r1c2,r1c3,r1c4,r1c5,r1c6,r1c7,r1c8,r1c9,r1c10,r1c11,r1c12,r1c13,r1c14,r1c15,r1c16,r1c17,r1c18,r1c19,r1c20,r1c21)
                let r2 = document.createElement("tr");
                let r2c1 = document.createElement("th"); r2c1.innerHTML = "<b>Quantity</b>";
                let r2c2 = document.createElement("td"); r2c2.innerHTML = el.strMeasure1;
                let r2c3 = document.createElement("td"); r2c3.innerHTML = el.strMeasure2;
                let r2c4 = document.createElement("td"); r2c4.innerHTML = el.strMeasure3;
                let r2c5 = document.createElement("td"); r2c5.innerHTML = el.strMeasure4;
                let r2c6 = document.createElement("td"); r2c6.innerHTML = el.strMeasure5;
                let r2c7 = document.createElement("td"); r2c7.innerHTML = el.strMeasure6;
                let r2c8 = document.createElement("td"); r2c8.innerHTML = el.strMeasure7;
                let r2c9 = document.createElement("td"); r2c9.innerHTML = el.strMeasure8;
                let r2c10 = document.createElement("td"); r2c10.innerHTML = el.strMeasure9;
                let r2c11 = document.createElement("td"); r2c11.innerHTML = el.strMeasure10;
                let r2c12 = document.createElement("td"); r2c12.innerHTML = el.strMeasure11;
                let r2c13 = document.createElement("td"); r2c13.innerHTML = el.strMeasure12;
                let r2c14 = document.createElement("td"); r2c14.innerHTML = el.strMeasure13;
                let r2c15 = document.createElement("td"); r2c15.innerHTML = el.strMeasure14;
                let r2c16 = document.createElement("td"); r2c16.innerHTML = el.strMeasure15;
                let r2c17 = document.createElement("td"); r2c17.innerHTML = el.strMeasure16;
                let r2c18 = document.createElement("td"); r2c18.innerHTML = el.strMeasure17;
                let r2c19 = document.createElement("td"); r2c19.innerHTML = el.strMeasure18;
                let r2c20 = document.createElement("td"); r2c20.innerHTML = el.strMeasure19;
                let r2c21 = document.createElement("td"); r2c21.innerHTML = el.strMeasure20;
                r2.append(r2c1,r2c2,r2c3,r2c4,r2c5,r2c6,r2c7,r2c8,r2c9,r2c10,r2c11,r2c12,r2c13,r2c14,r2c15,r2c16,r2c17,r2c18,r2c19,r2c20,r2c21)

                ingdnt.append(r1,r2)
                condiv.append(name,category,region, instrucion,ingdnt)
                mrcon.append(imgd,condiv)
                container.append(mrcon);

            }

            let imgd = document.createElement("div");
            imgd.id = "cimgd";
            let image = document.createElement("img")
            image.src = el.strMealThumb; imgd.append(image);

            let condiv = document.createElement("div");
            condiv.id = "condiv";
            let name = document.createElement('p');
            name.innerText = el.strMeal
            
            let category = document.createElement("p")
            category.innerHTML = "<b>Category</b> : "+el.strCategory;

            let region = document.createElement("p");
            region.innerHTML = "<b>Region</b> : "+el.strArea;
            condiv.append(name,category,region)
            card.append(imgd,condiv)
            srbox.append(card);
        });
        // console.log("mai append karta hu ruko")
    }
    catch(e){
        console.log(e)
    }
    

}



async function main(){
    let srbox = document.getElementById("srbox");
    try{
        let data = await searchrecipe()
    
        if(data == undefined || data.meals ==null){
            srbox.innerHTML = null;
            let  err = document.createElement("div");
            err.id = "notfound";
            let notfound = document.createElement("h3");
            notfound.innerHTML = "No such Recipe found!"
            

            err.append(notfound);
            srbox.append(err)

            // console.log("kuch nhi mila")
            return false;
        }else{
            srboxapnd(data.meals);
        }
       
    }
    catch(e){
        // console.log("error :", e)
    }
}

function debounce(func, delay){
    let inp = document.getElementById("searchInput");
    let srbox = document.getElementById("srbox");
    srbox.innerHTML = null;
    srbox.style.overflow = "hidden";
    srbox.style.height= "auto"
    let  wait = document.createElement("div");
    wait.id = "wait";
    let loading = document.createElement("h3");
    loading.innerHTML = "Loading Recipes..."
    

    wait.append(loading);
    srbox.append(wait)


    if(inp.value === ""){
        srbox.style.display = "none";
        inp.style.borderBottomLeftRadius = "15px";
        inp.style.borderBottomRightRadius = "15px";
    }
    else{
        srbox.style.display = "block";
        inp.style.borderBottomLeftRadius = 0;
        inp.style.borderBottomRightRadius = 0;

    }

    if(timerid){
        clearTimeout(timerid)
    }

    timerid = setTimeout(function (){
        func()
    }, delay);

}