export default function Recipes(props){
    const displayRecipes = props.recipes.map((eachRecipe) => <li>{eachRecipe}</li>)

    return (
        <div>
            <div className="recipes">
                <div className="recipesheader">
                    <h1>Types of Recipes</h1>
                </div>
                <ul>
                    {displayRecipes}
                </ul>
            </div>
        </div>
    )
}
