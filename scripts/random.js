async function searchrecipe(){
    try{
        
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);

            let data = await res.json();
            console.log(data.meals)
            appendrandom(data.meals[0])

            return data;
       
        
        
    }
    catch (e){
        
        console.log("error :", e)
        
    }
    

}
searchrecipe()
let appendrandom = (data) =>{
    let container = document.getElementById("container");
// container.innerHTML = ""; 

    let mrcon = document.createElement("div")
    mrcon.id = "mrcon";
    let imgd = document.createElement("div");
    imgd.id = "mrcimgd";
    let image = document.createElement("img")
    image.src = data.strMealThumb; imgd.append(image);

    let condiv = document.createElement("div");
    condiv.id = "mrcondiv";
    let name = document.createElement('p');
    name.innerText = data.strMeal
    
    let category = document.createElement("p")
    category.innerHTML = "<b>Category</b> : "+data.strCategory;

    let region = document.createElement("p");
    region.innerHTML = "<b>Region</b> : "+data.strArea;

    let instrucion = document.createElement("p");
    instrucion.innerHTML = "<b>Instrucions</b> : "+data.strInstructions;

    let ingdnt = document.createElement("table");
    let r1 = document.createElement("tr");
    let r1c1 = document.createElement("th"); r1c1.innerHTML = "<b>Ingredients</b>";
    let r1c2 = document.createElement("td"); r1c2.innerHTML = data.strIngredient1;
    let r1c3 = document.createElement("td"); r1c3.innerHTML = data.strIngredient2;
    let r1c4 = document.createElement("td"); r1c4.innerHTML = data.strIngredient3;
    let r1c5 = document.createElement("td"); r1c5.innerHTML = data.strIngredient4;
    let r1c6 = document.createElement("td"); r1c6.innerHTML = data.strIngredient4;
    let r1c7 = document.createElement("td"); r1c7.innerHTML = data.strIngredient5;
    let r1c8 = document.createElement("td"); r1c8.innerHTML = data.strIngredient6;
    let r1c9 = document.createElement("td"); r1c9.innerHTML = data.strIngredient7;
    let r1c10 = document.createElement("td"); r1c10.innerHTML = data.strIngredient8;
    let r1c11 = document.createElement("td"); r1c11.innerHTML = data.strIngredient9;
    let r1c12 = document.createElement("td"); r1c12.innerHTML = data.strIngredient10;
    let r1c13 = document.createElement("td"); r1c13.innerHTML = data.strIngredient12;
    let r1c14 = document.createElement("td"); r1c14.innerHTML = data.strIngredient13;
    let r1c15 = document.createElement("td"); r1c15.innerHTML = data.strIngredient14;
    let r1c16 = document.createElement("td"); r1c16.innerHTML = data.strIngredient15;
    let r1c17 = document.createElement("td"); r1c17.innerHTML = data.strIngredient16;
    let r1c18 = document.createElement("td"); r1c18.innerHTML = data.strIngredient17;
    let r1c19 = document.createElement("td"); r1c19.innerHTML = data.strIngredient18;
    let r1c20 = document.createElement("td"); r1c20.innerHTML = data.strIngredient19;
    let r1c21 = document.createElement("td"); r1c21.innerHTML = data.strIngredient20;
    r1.append(r1c1,r1c2,r1c3,r1c4,r1c5,r1c6,r1c7,r1c8,r1c9,r1c10,r1c11,r1c12,r1c13,r1c14,r1c15,r1c16,r1c17,r1c18,r1c19,r1c20,r1c21)
    let r2 = document.createElement("tr");
    let r2c1 = document.createElement("th"); r2c1.innerHTML = "<b>Quantity</b>";
    let r2c2 = document.createElement("td"); r2c2.innerHTML = data.strMeasure1;
    let r2c3 = document.createElement("td"); r2c3.innerHTML = data.strMeasure2;
    let r2c4 = document.createElement("td"); r2c4.innerHTML = data.strMeasure3;
    let r2c5 = document.createElement("td"); r2c5.innerHTML = data.strMeasure4;
    let r2c6 = document.createElement("td"); r2c6.innerHTML = data.strMeasure5;
    let r2c7 = document.createElement("td"); r2c7.innerHTML = data.strMeasure6;
    let r2c8 = document.createElement("td"); r2c8.innerHTML = data.strMeasure7;
    let r2c9 = document.createElement("td"); r2c9.innerHTML = data.strMeasure8;
    let r2c10 = document.createElement("td"); r2c10.innerHTML = data.strMeasure9;
    let r2c11 = document.createElement("td"); r2c11.innerHTML = data.strMeasure10;
    let r2c12 = document.createElement("td"); r2c12.innerHTML = data.strMeasure11;
    let r2c13 = document.createElement("td"); r2c13.innerHTML = data.strMeasure12;
    let r2c14 = document.createElement("td"); r2c14.innerHTML = data.strMeasure13;
    let r2c15 = document.createElement("td"); r2c15.innerHTML = data.strMeasure14;
    let r2c16 = document.createElement("td"); r2c16.innerHTML = data.strMeasure15;
    let r2c17 = document.createElement("td"); r2c17.innerHTML = data.strMeasure16;
    let r2c18 = document.createElement("td"); r2c18.innerHTML = data.strMeasure17;
    let r2c19 = document.createElement("td"); r2c19.innerHTML = data.strMeasure18;
    let r2c20 = document.createElement("td"); r2c20.innerHTML = data.strMeasure19;
    let r2c21 = document.createElement("td"); r2c21.innerHTML = data.strMeasure20;
    r2.append(r2c1,r2c2,r2c3,r2c4,r2c5,r2c6,r2c7,r2c8,r2c9,r2c10,r2c11,r2c12,r2c13,r2c14,r2c15,r2c16,r2c17,r2c18,r2c19,r2c20,r2c21)

    ingdnt.append(r1,r2)
    condiv.append(name,category,region, instrucion,ingdnt)
    mrcon.append(imgd,condiv)
    container.append(mrcon);
}

