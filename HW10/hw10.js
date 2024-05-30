// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((response) =>{
        let carts = response.carts
        for (const cart of carts) {
            let divCart = document.createElement('div')
            divCart.innerHTML = `discountedTotal: ${cart.discountedTotal}<br> id: ${cart.id}<br> total: ${cart.total}<br> totalProducts: ${cart.totalProducts}<br> totalQuantity: ${cart.totalQuantity}<br> userId: ${cart.userId} <br>Products:<br>`
            let ulProduct = document.createElement('ul')
            for (let i = 0; i<cart.products.length; i++){
                let liProduct = document.createElement('li')
                liProduct.innerHTML += `${cart.products[i].title}<br>`
                ulProduct.appendChild(liProduct)
            }
            divCart.appendChild(ulProduct)
            divCart.innerHTML += `<br>`
            document.body.appendChild(divCart)
        }
        console.log(carts)
    });

// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.

// Я вирішив не додавати такі елементи як id userid tags та подібні,
// залишивши те що може бути потрібно саме для приготування
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((response) =>{
        let recipes = response.recipes
        for (const recipe of recipes) {
            let divRecipe = document.createElement('div')
            divRecipe.innerHTML = `${recipe.name}<br>`
            let imgRecipe = document.createElement('img')
            imgRecipe.src = recipe.image
            divRecipe.appendChild(imgRecipe)
            divRecipe.innerHTML += `<br>Інгредієнти:`
            let ulIngredients = document.createElement('ul')
            for (let i = 0; i<recipe.ingredients.length; i++){
                let liIngredients = document.createElement('li')
                liIngredients.innerHTML = `${recipe.ingredients[i]}`
                ulIngredients.appendChild(liIngredients)
            }
            divRecipe.appendChild(ulIngredients)
            divRecipe.innerHTML += `<br>Інструкція:`
            let ulInstructions = document.createElement('ul')
            for (let i = 0; i<recipe.instructions.length; i++){
                let liInstructions = document.createElement('li')
                liInstructions.innerHTML = `${recipe.instructions[i]}`
                ulInstructions.appendChild(liInstructions)
            }
            divRecipe.appendChild(ulInstructions)
            divRecipe.innerHTML += `<br>Калорій на порцію: ${recipe.caloriesPerServing}<br> 
            Час приготування: ${recipe.cookTimeMinutes}<br> Кухня: ${recipe.cuisine}<br> 
            Складність: ${recipe.difficulty}<br> 
            Час підготовки: ${recipe.prepTimeMinutes}<br> 
            Рейтинг: ${recipe.rating}<br> Кількість відгуків: ${recipe.reviewCount}<br> 
            Порцій: ${recipe.servings}<br><hr>`
            document.body.appendChild(divRecipe)
        }
    });
