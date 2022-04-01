const petsData = [
    {
      name: "Maxican",
      species: "Cat",
      favFoods: ["Wet food", "Dry food", "<strong>any</strong> Fish"],
      birthYear: 2019,
      price: 10000,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      name: "Italian",
      species: "Dog",
      birthYear: 2018,
      price: 15000,
      photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      name: "Dutch",
      species: "Cat",
      favFoods: ["Tuna", "Catnip", "Celery"],
      birthYear: 2012,
      price: 20000,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
  ];

//adding an Item to the Arrry
petsData.push(
    {
        name: "Indian",
        species: "Cat",
        birthYear: 2015,
        price: 5000,
        favFoods: ["Rats", "Dry Fish"],
        photo: "../images/myCat.jpg"
    }
);

// get total price //
document.querySelector('.btnPrice').addEventListener("click", getTotalPrice);
let totalPrice = 0;
function getTotalPrice(){
   // totalPrice = `${petsData[0].price + petsData[1].price}`;
   `${petsData.map(totalPetsPrice).join()}`
   
    //console.log(totalPrice);
}
const totalPetsPrice = () => {
     //console.log(petsData[0].price)
     let pr = 0;
    for(let i = 0; i < petsData.length; i++){
        pr += petsData[i].price;

    }

   document.querySelector('.showResult').innerHTML = `
   <div class="prBox">In &#8377; ${pr} you can boy all animals.</div>
   `
}
// only cat
document.querySelector('.btnAllCat').addEventListener("click", getAllCatPrice);
function getAllCatPrice(){
     let myCatPrice = 0;
      myCatPrice = `${petsData[0].price + petsData[2].price + petsData[3].price} `;
    
      document.querySelector('.showResult').innerHTML = `
         <div class="prBox">In &#8377; ${myCatPrice} you can boy all cats.</div>
         `
}
//

  function myFoods(foods) {
    return `
    <h3 class="fabTitle">Favorite foods:</h3>
    <ul>
       ${foods.map(function(foodList){
           return `<li>${foodList}</li>`
       }).join('')}
    </ul>
    `
}


let age = (petBirthYear) => {
    let calculateAge = new Date().getFullYear() - petBirthYear;

//console.log(calculateAge);

    if(calculateAge == 1){
        return '1 year old'
    } else if(calculateAge == 0){
        return 'Baby'
    } else {
        return `${calculateAge} years old`

    }
}


 const petTemplate = (pet) => {
    return `
    <div class="petBox">
        <img src="${pet.photo}">
        <div class="petDetails">
        <p>Pet name : <span>${pet.name}</span></p>
        <p>species : <span>${pet.species}</span></p>
        <p>Age : <span>${age(pet.birthYear)}</span></p>
        <p>Price : <span>&#8377; ${pet.price}</span></p>
        <p>${pet.favFoods ? myFoods(pet.favFoods) : ''}</p>  <!-- favFoods is true ? and call function food(), if  not True : then blank -->
        </div>
    </div>
    `
 }

  document.querySelector('#app').innerHTML =`
  <h2 class="petTitle">Pets ${petsData.length} results</h2>
  
  ${petsData.map(petTemplate).join('')}`


// filter methods...



//

// Show low price pets
 document.querySelector('.btnAllPetName').addEventListener('click', showLowPricePets);

 function showLowPricePets(){
    let lp = [];
    for(let j = 0; j < petsData.length; j++)
    {
        if(petsData[j].price <= 10000){
            lp.push(petsData[j].name);
        }
       
    }
   
    for(let k = 0; k<lp.length; k++){
       // console.log(lp[k])
        document.querySelector('.showResult').innerHTML = `
        <div class="prBox"> Found ${lp.length} results - ${lp.join(', ')}</div>
        `
    }
   
 }
