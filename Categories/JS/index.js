dWidth() ;
$(document).ready(function() {
    $(".loader").fadeOut(500,function () {
        $(".loading").fadeOut(300,function(){
            $("body").css({overflow:"auto"})
        });
    });
});
$('.close').on("click" ,function(){
    $(".links ul li").animate({top: 300} , 1400)
    $('.close').css({display:"none"});
    $('.open').css({display:"block"});
  let contentWidth  = $('.sidenav').innerWidth();
  $('.sidenav').animate({left:`${-contentWidth +60}`},1000);
});
$('.open').on("click" ,function(){
    $(".links ul li").animate({top: -10},900)
    $('.close').css({display:"block"});
    $('.open').css({display:"none"});
    let contentWidth  = $('.sidenav').innerWidth();
    $('.sidenav').animate({left:`${0}`},1000);
})
function dWidth() {
    let contentWidth  = $('.sidenav').innerWidth();
    $('.sidenav').animate({left:`${-contentWidth +60}`},0);
}


getCategories();

async function getCategories() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    response = await response.json()
    console.log(response);
    displayCategories(response.categories)
}

async function getCategoryMeals(category) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    response = await response.json()
    displayMeals(response.meals.slice(0, 20))
}

function displayCategories(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        cartoona += `
            <div class="col-md-3 mt-5">
                <div onclick="getCategoryMeals('${arr[i].strCategory}')" class="position-relative home-img border-0 rounded-3">
                    <img src="${arr[i].strCategoryThumb}" class='w-100' alt="">
                    <div class="layer position-absolute text-center">
                        <h3>${arr[i].strCategory}</h3>
                        <p>${arr[i].strCategoryDescription}</p>
                    </div>
                </div>
            </div>`  
    }
    document.getElementById("rowData").innerHTML = cartoona;
}

function displayMeals(arr) {
    let cartoona = "";
    for (let i = 0; i < arr.length; i++) {
        cartoona += `
            <div class="col-md-3 mt-5">
                <div onclick="displaySearchData('${arr[i].idMeal}')" class="position-relative home-img border-0 rounded-3 cursor">
                    <img src="${arr[i].strMealThumb}" class="w-100" alt="">
                    <div class="layer position-absolute d-flex justify-content-center align-items-center">
                        <h3>${arr[i].strMeal}</h3>
                    </div>
                </div>
            </div>`
    }
    document.getElementById("rowData").innerHTML = cartoona;
}

async function displaySearchData(id) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    response = await response.json();
    if (response.meals) {
        displaySearch2(response.meals[0]);
    } else {
        console.error('No meal found for the given ID');
    }
}

function displaySearch2(meal) {
    let cartona = `
        <div class="col-md-4">
            <div class="img-Home-search2 mt-5 bg-danger rounded-3">
                <img src="${meal.strMealThumb}" class="w-100" alt="">
            </div>
            <h2 class="text-white">${meal.strMeal}</h2>
        </div>
        <div class="col-md-8">
            <div class="instructions mt-5 text-white">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
            </div>
            <div class="text-white mt-1">
                <h2>Area: ${meal.strArea}</h2>
                <h2>Category: ${meal.strCategory}</h2>
                <h2>Recipes:</h2>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${meal.strIngredient1 ? `<li class="alert alert-info m-2 p-1">${meal.strIngredient1}</li>` : ''}
                    ${meal.strIngredient2 ? `<li class="alert alert-info m-2 p-1">${meal.strIngredient2}</li>` : ''}
                    ${meal.strIngredient3 ? `<li class="alert alert-info m-2 p-1">${meal.strIngredient3}</li>` : ''}
                    ${meal.strIngredient4 ? `<li class="alert alert-info m-2 p-1">${meal.strIngredient4}</li>` : ''}
                    ${meal.strIngredient5 ? `<li class="alert alert-info m-2 p-1">${meal.strIngredient5}</li>` : ''}
                    ${meal.strIngredient6 ? `<li class="alert alert-info m-2 p-1">${meal.strIngredient6}</li>` : ''}
                    ${meal.strIngredient7 ? `<li class="alert alert-info m-2 p-1">${meal.strIngredient7}</li>` : ''}
                    ${meal.strMeasure1 ? `<li class="alert alert-info m-2 p-1">${meal.strMeasure1}</li>` : ''}
                    ${meal.strMeasure2 ? `<li class="alert alert-info m-2 p-1">${meal.strMeasure2}</li>` : ''}
                    ${meal.strMeasure3 ? `<li class="alert alert-info m-2 p-1">${meal.strMeasure3}</li>` : ''}
                    ${meal.strMeasure4 ? `<li class="alert alert-info m-2 p-1">${meal.strMeasure4}</li>` : ''}
                    ${meal.strMeasure5 ? `<li class="alert alert-info m-2 p-1">${meal.strMeasure5}</li>` : ''}
                    ${meal.strMeasure6 ? `<li class="alert alert-info m-2 p-1">${meal.strMeasure6}</li>` : ''}
                </ul>
                <h3>Tags:</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${meal.strTags ? `<li class="alert alert-danger m-2 p-1">${meal.strTags}</li>` : ''}
                </ul>
                <a target="_blank" href="${meal.strSource}" class="btn btn-success mb-5">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger mb-5">Youtube</a>
            </div>
        </div>`;
        
    document.getElementById('rowData').innerHTML = cartona;
}
