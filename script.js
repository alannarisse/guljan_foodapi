'use strict'

const BASE_URL = 
';


function apiRequest(ingredientName){
  let completeUrl = BASE_URL + `filter.php?i=${ingredientName}`;
  
 
  fetch(completeUrl)
    .then( responseJson => {
     
      if (responseJson.ok){
        return responseJson.json();
      }
      else{
       
        throw "Something went wrong.";
      }
    })
    .then( data => {
    
      displayResults(data.meals);
    })
    .catch( err => {
      console.log(err);
    })
}

function displayResults(data){
  
  $(".results").html("");

  for ( let i = 0; i < data.length; i ++){
    $(".results").append(`
                      <h2> ${data[i].strMeal} </h2>
                      <p> ${data[i].strInstructions} </p>
                      <img src="${data[i].strMealThumb}">
                      `);
  }
}

function watchForm(){
  $('.ingredientForm').on('click', '.submitIngredient', function(event){
    event.preventDefault();
    

    const ingredientName = $('.searchTerm').val();

    apiRequest(ingredientName);
  });
}

/*function apiRequestLink (recipeName){
  let completeUrl = BASE_URL + `lookup.php?i=${recipeName}`;*/


$(watchForm);