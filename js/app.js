// document.addEventListener('DOMContentLoaded', () => {

//   const searchInput = document.getElementById('food-search-input');

//   if (searchInput) {

//   filteredFoods = foodDatabase;

//   renderFoodDatabasePage();


//   searchInput.addEventListener('input', (e) => {

//     const query = e.target.value.toLowerCase();

//     filteredFoods = foodDatabase.filter(item => 
//       item.name.toLowerCase().includes(query) ||
//       item.category.toLowerCase().includes(query)
//     );


//     currentPage = 1;

//     renderFoodDatabasePage();

//     });

//   }

//   const macroForm = document.getElementById('macro-form');
//   if (macroForm) {
//     macroForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       runMacroSolver();
//     });
//   }

//   const savedContainer = document.getElementById('saved-meals-list');
//   if (savedContainer) {
//     renderSavedMeals();
//   }
// });

document.addEventListener('DOMContentLoaded', () => {


  const searchInput = document.getElementById('food-search-input');


  if (searchInput) {


    filteredFoods = foodDatabase;


    initializeFilters();


    renderFoodDatabasePage();



    // Search while typing

    searchInput.addEventListener('input', (e) => {


      activeFilters.search = e.target.value.toLowerCase();


      applyFilters();


    });



  }




  // APPLY FILTER BUTTON

  const applyBtn = document.getElementById("apply-filter");


  if(applyBtn){


    applyBtn.addEventListener("click",()=>{


      activeFilters.type =
      document.getElementById("type-filter").value;



      activeFilters.category =
      document.getElementById("category-filter").value;



      activeFilters.meal =
      document.getElementById("meal-filter").value;



      activeFilters.tag =
      document.getElementById("tag-filter").value;



      activeFilters.taste =
      document.getElementById("taste-filter").value;



      activeFilters.protein =
      Number(
        document.getElementById("protein-filter").value
      ) || 0;



      activeFilters.calories =
      Number(
        document.getElementById("calorie-filter").value
      ) || 0;




      applyFilters();


    });


  }






  // RESET FILTER BUTTON


  const resetBtn =
  document.getElementById("reset-filter");



  if(resetBtn){


    resetBtn.addEventListener("click",()=>{


      document.querySelectorAll(
        ".food-sidebar select, .food-sidebar input"
      )
      .forEach(element=>{

        element.value="";

      });



      activeFilters={

        search:"",

        type:"",
        category:"",
        meal:"",
        tag:"",
        taste:"",

        protein:0,
        calories:0

      };



      filteredFoods=foodDatabase;


      currentPage=1;


      renderFoodDatabasePage();



    });


  }






  // SORT FUNCTION


  const sortBox =
  document.getElementById("sort-foods");



  if(sortBox){


    sortBox.addEventListener("change",()=>{


      let sorted=[...filteredFoods];



      if(sortBox.value==="Name (A-Z)"){


        sorted.sort(
          (a,b)=>
          a.name.localeCompare(b.name)
        );


      }



      else if(sortBox.value==="Calories Low-High"){


        sorted.sort(
          (a,b)=>
          a.macronutrients.calories -
          b.macronutrients.calories
        );


      }



      else if(sortBox.value==="Protein High-Low"){


        sorted.sort(
          (a,b)=>
          b.macronutrients.protein_g -
          a.macronutrients.protein_g
        );


      }



      filteredFoods=sorted;


      currentPage=1;


      renderFoodDatabasePage();



    });


  }





  // Macro solver page

  const macroForm = document.getElementById('macro-form');


  if (macroForm) {


    macroForm.addEventListener('submit', (e)=>{


      e.preventDefault();


      runMacroSolver();


    });


  }





  // Saved meals page

  const savedContainer =
  document.getElementById('saved-meals-list');



  if(savedContainer){


    renderSavedMeals();


  }



});


const ITEMS_PER_PAGE = 10;

let currentPage = 1;

let filteredFoods = [];


let activeFilters = {

    search:"",

    type:"",
    category:"",
    meal:"",
    tag:"",
    taste:"",

    protein:0,
    calories:0

};

function initializeFilters(){


const types=[
...new Set(
foodDatabase.map(
f=>f.type
)
)
];


const categories=[
...new Set(
foodDatabase.map(
f=>f.category
)
)
];


const meals=[
...new Set(
foodDatabase.flatMap(
f=>f.meal_type
)
)
];


const tags=[
...new Set(
foodDatabase.flatMap(
f=>f.diet_tags || []
)
)
];


const tastes=[
...new Set(
foodDatabase.map(
f=>f.taste
)
)
];



populateSelect(
"type-filter",
types
);


populateSelect(
"category-filter",
categories
);


populateSelect(
"meal-filter",
meals
);


populateSelect(
"tag-filter",
tags
);


populateSelect(
"taste-filter",
tastes
);


}



function populateSelect(id,values){

const select=document.getElementById(id);

if(!select)return;


values.sort().forEach(v=>{

select.innerHTML += `
<option value="${v}">
${v}
</option>
`;

});

}

function applyFilters(){


filteredFoods = foodDatabase.filter(food => {



    // SEARCH

    if(
    activeFilters.search &&
    !food.name.toLowerCase()
    .includes(activeFilters.search)
    &&
    !food.category.toLowerCase()
    .includes(activeFilters.search)
    )
    {
        return false;
    }




    // TYPE

    if(
    activeFilters.type &&
    food.type !== activeFilters.type
    )
    {
        return false;
    }





    // CATEGORY

    if(
    activeFilters.category &&
    food.category !== activeFilters.category
    )
    {
        return false;
    }





    // MEAL TYPE

    if(
    activeFilters.meal &&
    !food.meal_type.includes(activeFilters.meal)
    )
    {
        return false;
    }





    // DIET TAG

    if(
    activeFilters.tag &&
    !food.diet_tags.includes(activeFilters.tag)
    )
    {
        return false;
    }





    // TASTE

    if(
    activeFilters.taste &&
    food.taste !== activeFilters.taste
    )
    {
        return false;
    }





    // MIN PROTEIN

    if(
    activeFilters.protein &&
    food.macronutrients.protein_g <
    activeFilters.protein
    )
    {
        return false;
    }





    // MAX CALORIES

    if(
    activeFilters.calories &&
    food.macronutrients.calories >
    activeFilters.calories
    )
    {
        return false;
    }



    return true;


});



currentPage=1;


renderFoodDatabasePage();


}

// function renderFoodDatabase(items) {
//   const grid = document.getElementById('food-db-grid');
//   if (!grid) return;
//   grid.innerHTML = items.map(item => `
//     <div class="glass-panel food-card">
//       <img src="${item.image_url}" alt="${item.name}" class="food-card-img" />
//       <div class="food-card-body">
//         <h4 class="food-card-title">${item.name}</h4>
//         <div class="food-card-meta">${item.category} • ${item.serving_size.amount}${item.serving_size.unit} (${item.serving_size.description})</div>
//         <div class="tag-group">
//           ${item.diet_tags ? item.diet_tags.map(t => `<span class="tag tag-orange">${t}</span>`).join('') : ''}
//           <span class="tag">${item.type}</span>
//         </div>
//         <div class="macro-stats">
//           <span style="color: var(--orange);">${item.macronutrients.calories} KCAL</span>
//           <span>P: ${item.macronutrients.protein_g}g</span>
//           <span>C: ${item.macronutrients.carbohydrates_g}g</span>
//           <span>F: ${item.macronutrients.fat_g}g</span>
//         </div>
//       </div>
//     </div>
//   `).join('');
// }


function renderFoodDatabasePage() {

  const grid = document.getElementById('food-db-grid');

  if (!grid) return;


  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const endIndex = startIndex + ITEMS_PER_PAGE;


  const items = filteredFoods.slice(startIndex, endIndex);



if(filteredFoods.length === 0){

    grid.innerHTML = `

    <div class="empty-state glass-panel">

        <h3>
        NO FOOD ITEMS AVAILABLE
        </h3>

        <p>
        Try changing your filters or search criteria.
        </p>

    </div>

    `;


    updateFoodCount();


    document.getElementById("pagination").innerHTML="";


    return;

}



  grid.innerHTML = items.map(item => `

  <div class="glass-panel food-card">


      <img 
      src="${item.image_url}" 
      alt="${item.name}"
      class="food-card-img"
      loading="lazy"
      >



      <div class="food-card-body">


        <div class="tag-group">

          ${
          item.diet_tags 
          ?
          item.diet_tags.slice(0,2).map(tag=>`

          <span class="tag tag-orange">
          ${tag}
          </span>

          `).join('')
          :
          ''
          }

        </div>




        <h4 class="food-card-title">
          ${item.name}
        </h4>




        <div class="food-card-meta">

        ${item.category}
        •
        ${item.serving_size.amount}${item.serving_size.unit}

        </div>





        <div class="macro-stats">


          <span style="color:var(--orange)">
          ${item.macronutrients.calories}
          <small>KCAL</small>
          </span>



          <span>

          ${item.macronutrients.protein_g}g

          <small>P</small>

          </span>




          <span>

          ${item.macronutrients.carbohydrates_g}g

          <small>C</small>

          </span>




          <span>

          ${item.macronutrients.fat_g}g

          <small>F</small>

          </span>



        </div>



      </div>


  </div>


`).join('');



updateFoodCount();

renderPagination();

}

function updateFoodCount(){

const count = document.getElementById("food-count");

if(!count) return;


const start = 
(filteredFoods.length===0)
?
0
:
(currentPage-1)*ITEMS_PER_PAGE+1;


const end = Math.min(
currentPage*ITEMS_PER_PAGE,
filteredFoods.length
);



count.innerHTML = 
`${start}-${end} of ${filteredFoods.length} foods`;

}

function renderPagination(){

    const container = document.getElementById("pagination");

    if(!container) return;


    const totalPages = Math.ceil(
        filteredFoods.length / ITEMS_PER_PAGE
    );


    if(totalPages <= 1){

        container.innerHTML = "";

        return;

    }



    let pages = [];


    // Always show first page
    pages.push(1);



    // Pages around current page

    if(currentPage > 3){

        pages.push("...");

    }



    for(
        let i = Math.max(2,currentPage-1);
        i <= Math.min(totalPages-1,currentPage+1);
        i++
    ){

        pages.push(i);

    }




    // Last page

    if(currentPage < totalPages-2){

        pages.push("...");

    }



    if(totalPages > 1){

        pages.push(totalPages);

    }





    container.innerHTML = `


    <button 
    class="btn btn-secondary"
    onclick="changePage(${currentPage-1})"
    ${currentPage===1?'disabled':''}
    >

    &lt; PREVIOUS

    </button>



    ${
        pages.map(page=>{


            if(page==="..."){

                return `
                <span class="page-dots">
                ...
                </span>
                `;

            }



            return `

            <button

            class="page-btn ${
                page===currentPage 
                ? 
                "active-page"
                :
                ""
            }"

            onclick="changePage(${page})"

            >

            ${page}

            </button>

            `;


        }).join("")
    }





    <button 

    class="btn btn-primary"

    onclick="changePage(${currentPage+1})"

    ${currentPage===totalPages?'disabled':''}

    >

    NEXT &gt;

    </button>



    `;


}


function changePage(page){

const totalPages = Math.ceil(
filteredFoods.length / ITEMS_PER_PAGE
);


if(page < 1 || page > totalPages)
return;


currentPage = page;

renderFoodDatabasePage();

window.scrollTo({
top:0,
behavior:"smooth"
});

}

function runMacroSolver() {
  const targetCal = parseFloat(document.getElementById('target-calories').value);
  const tolerancePct = parseFloat(document.getElementById('target-tolerance').value) / 100;

  const minCal = targetCal * (1 - tolerancePct);
  const maxCal = targetCal * (1 + tolerancePct);

  const resultsContainer = document.getElementById('combination-results');
  resultsContainer.innerHTML = '<p class="empty-state">Running subset-sum combination engine...</p>';

  let validCombinations = [];

  function search(index, currentCombo, sumCal, sumP, sumC, sumF) {
    if (sumCal >= minCal && sumCal <= maxCal) {
      validCombinations.push({
        items: [...currentCombo],
        totalCalories: sumCal,
        totalProtein: sumP,
        totalCarbs: sumC,
        totalFat: sumF
      });
    }

    if (sumCal > maxCal || index >= foodDatabase.length) return;

    for (let i = index; i < foodDatabase.length; i++) {
      const item = foodDatabase[i];
      const macros = item.macronutrients;
      search(
        i + 1,
        [...currentCombo, item],
        sumCal + macros.calories,
        sumP + macros.protein_g,
        sumC + macros.carbohydrates_g,
        sumF + macros.fat_g
      );
    }
  }

  search(0, [], 0, 0, 0, 0);

  if (validCombinations.length === 0) {
    resultsContainer.innerHTML = `<p class="empty-state">No combinations hit the target within ±${tolerancePct * 100}%. Try adjusting tolerance or targets.</p>`;
    return;
  }

  resultsContainer.innerHTML = validCombinations.slice(0, 3).map((combo, idx) => `
    <div class="glass-panel food-card" style="margin-bottom: 1rem; padding: 1.25rem;">
      <h4 style="color: var(--orange); font-weight: 900;">SOLVER OPTION #${idx + 1}</h4>
      <p style="font-size: 0.85rem; font-weight: 700; margin-top: 0.4rem; color: var(--navy);">
        ${combo.items.map(i => i.name).join(' + ')}
      </p>
      <div class="macro-stats" style="margin-top: 0.8rem;">
        <span style="color: var(--orange);">${combo.totalCalories.toFixed(0)} KCAL</span>
        <span>P: ${combo.totalProtein.toFixed(1)}g</span>
        <span>C: ${combo.totalCarbs.toFixed(1)}g</span>
        <span>F: ${combo.totalFat.toFixed(1)}g</span>
      </div>
      <button class="btn btn-primary btn-full" style="margin-top: 1rem;" onclick="saveMeal(${idx})">SAVE TO MY MEALS</button>
    </div>
  `).join('');

  window.lastCombos = validCombinations;
}

function saveMeal(idx) {
  if (!window.lastCombos) return;
  let saved = JSON.parse(localStorage.getItem('mv_saved_meals')) || [];
  const combo = window.lastCombos[idx];
  saved.push({
    name: `Meal Combo ${saved.length + 1}`,
    ...combo
  });
  localStorage.setItem('mv_saved_meals', JSON.stringify(saved));
  alert('Meal plan saved to LocalStorage!');
}

function renderSavedMeals() {
  const container = document.getElementById('saved-meals-list');
  let saved = JSON.parse(localStorage.getItem('mv_saved_meals')) || [];

  if (saved.length === 0) {
    container.innerHTML = `<p class="empty-state">No saved meal combinations stored in LocalStorage.</p>`;
    return;
  }

  container.innerHTML = saved.map((meal, index) => `
    <div class="glass-panel food-card" style="padding: 1.25rem;">
      <h4 style="font-weight: 900; color: var(--navy);">${meal.name}</h4>
      <p style="color: var(--orange); font-weight: 700; font-size: 1.1rem; margin-top: 0.2rem;">${meal.totalCalories.toFixed(0)} KCAL</p>
      <p style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600; margin-top: 0.4rem;">
        ${meal.items.map(i => i.name).join(', ')}
      </p>
      <div class="macro-stats" style="margin-top: 1rem;">
        <span>P: ${meal.totalProtein.toFixed(1)}g</span>
        <span>C: ${meal.totalCarbs.toFixed(1)}g</span>
        <span>F: ${meal.totalFat.toFixed(1)}g</span>
      </div>
      <button class="btn btn-secondary btn-full" style="margin-top: 1rem;" onclick="deleteMeal(${index})">DELETE MEAL</button>
    </div>
  `).join('');
}

function deleteMeal(index) {
  let saved = JSON.parse(localStorage.getItem('mv_saved_meals')) || [];
  saved.splice(index, 1);
  localStorage.setItem('mv_saved_meals', JSON.stringify(saved));
  renderSavedMeals();
}