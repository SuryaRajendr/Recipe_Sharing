async function fetchRecipes() {
    const response = await fetch('http://localhost:3000/api/recipes');
    const recipes = await response.json();

    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = recipes.map(recipe => `
        <div>
            <h3>${recipe.title}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Steps:</strong> ${recipe.steps}</p>
        </div>
    `).join('');
}

fetchRecipes();
