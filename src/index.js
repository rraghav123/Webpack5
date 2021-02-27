const elvenShiledRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
}

const elvenShiledRecipeNew = {
    ...elvenShiledRecipe,
    leather: 20,
    refinedMoonstone: 20,
}


console.log({ elvenShiledRecipe, elvenShiledRecipeNew });
