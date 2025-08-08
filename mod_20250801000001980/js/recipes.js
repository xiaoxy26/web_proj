// Recipe data
const recipes = [
  {
    id: 'chocolate-cake',
    name: {
      en: 'Classic Chocolate Cake',
      fr: 'Gâteau au Chocolat Classique'
    },
    description: {
      en: 'A rich and moist chocolate cake that\'s perfect for any occasion.',
      fr: 'Un riche et moelleux gâteau au chocolat, parfait pour toutes les occasions.'
    },
    image: 'images/chocolate-cake.gif',
    thumbnail: 'images/chocolate-cake-thumb.jpg'
  },
  {
    id: 'garden-salad',
    name: {
      en: 'Fresh Garden Salad',
      fr: 'Salade de Jardin Fraîche'
    },
    description: {
      en: 'A healthy and refreshing salad with fresh vegetables and a light vinaigrette.',
      fr: 'Une salade saine et rafraîchissante avec des légumes frais et une vinaigrette légère.'
    },
    image: 'images/garden-salad.gif',
    thumbnail: 'images/garden-salad-thumb.jpg'
  },
  {
    id: 'grilled-salmon',
    name: {
      en: 'Grilled Salmon',
      fr: 'Saumon Grillé'
    },
    description: {
      en: 'Perfectly grilled salmon with herbs and lemon.',
      fr: 'Saumon parfaitement grillé aux herbes et au citron.'
    },
    image: 'images/grilled-salmon.gif',
    thumbnail: 'images/grilled-salmon-thumb.jpg'
  },
  {
    id: 'chicken-parmesan',
    name: {
      en: 'Chicken Parmesan',
      fr: 'Poulet Parmesan'
    },
    description: {
      en: 'Crispy chicken topped with tomato sauce and melted mozzarella.',
      fr: 'Poulet croustillant garni de sauce tomate et de mozzarella fondue.'
    },
    image: 'images/chicken-parmesan.gif',
    thumbnail: 'images/chicken-parmesan-thumb.jpg'
  },
  {
    id: 'vanilla-ice-cream',
    name: {
      en: 'Vanilla Ice Cream',
      fr: 'Glace à la Vanille'
    },
    description: {
      en: 'Creamy vanilla ice cream made with real vanilla beans.',
      fr: 'Glace vanillée onctueuse faite avec de vraies gousses de vanille.'
    },
    image: 'images/vanilla-ice-cream.gif',
    thumbnail: 'images/vanilla-ice-cream-thumb.jpg'
  },
  {
    id: 'bruschetta',
    name: {
      en: 'Bruschetta',
      fr: 'Bruschetta'
    },
    description: {
      en: 'Toasted bread topped with tomatoes, garlic, and fresh basil.',
      fr: 'Pain grillé garni de tomates, d\'ail et de basilic frais.'
    },
    image: 'images/bruschetta.gif',
    thumbnail: 'images/bruschetta-thumb.jpg'
  },
  {
    id: 'lemonade',
    name: {
      en: 'Fresh Lemonade',
      fr: 'Limonade Fraîche'
    },
    description: {
      en: 'Refreshing lemonade made from fresh lemons and a touch of sugar.',
      fr: 'Limonade rafraîchissante préparée à partir de citrons frais et d\'un soupçon de sucre.'
    },
    image: 'images/lemonade.gif',
    thumbnail: 'images/lemonade-thumb.jpg'
  }
];

// Get recipe data
function getRecipe(id) {
  return recipes.find(recipe => recipe.id === id);
}

// Get all recipes data
function getAllRecipes() {
  return recipes;
}

// Get recipe name based on current language
function getRecipeName(recipe, language) {
  return recipe.name[language] || recipe.name.en;
}

// Get recipe description based on current language
function getRecipeDescription(recipe, language) {
  return recipe.description[language] || recipe.description.en;
}