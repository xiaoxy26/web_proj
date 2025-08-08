// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to get recipe data by ID and language
function getRecipeData(recipeId, language) {
    // Recipe data organized by recipe ID and language
    const recipes = {
        // Existing recipes from recipes.js with full details
        'chocolate-cake': {
            en: {
                title: "Classic Chocolate Cake",
                description: "A rich and moist chocolate cake that's perfect for any occasion. This classic dessert is sure to impress your guests with its deep chocolate flavor and tender crumb.",
                image: "images/chocolate-cake-thumb.jpg",
                imageAlt: "Classic chocolate cake with chocolate frosting",
                videoTitle: "How to Make Classic Chocolate Cake",
                videoDescription: "Learn how to bake a perfect chocolate cake from scratch with our step-by-step video tutorial.",
                video: "https://www.youtube.com/embed/zsig3vgWb8E",
                ingredients: [
                    "2 cups all-purpose flour",
                    "2 cups granulated sugar",
                    "3/4 cup unsweetened cocoa powder",
                    "2 teaspoons baking soda",
                    "1 teaspoon baking powder",
                    "1 teaspoon salt",
                    "1 cup buttermilk",
                    "1 cup strong black coffee, cooled",
                    "1/2 cup vegetable oil",
                    "2 large eggs",
                    "1 teaspoon vanilla extract"
                ],
                instructions: [
                    "Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.",
                    "In a large bowl, whisk together flour, sugar, cocoa powder, baking soda, baking powder, and salt.",
                    "In a separate bowl, whisk together buttermilk, coffee, oil, eggs, and vanilla.",
                    "Gradually add the wet ingredients to the dry ingredients, mixing until just combined.",
                    "Divide batter evenly between prepared pans.",
                    "Bake for 30-35 minutes, or until a toothpick inserted in the center comes out clean.",
                    "Cool in pans for 10 minutes, then turn out onto wire racks to cool completely.",
                    "Frost with your favorite chocolate frosting when completely cooled."
                ]
            },
            fr: {
                title: "Gâteau au Chocolat Classique",
                description: "Un riche et moelleux gâteau au chocolat parfait pour toutes les occasions. Ce dessert classique impressionnera vos invités avec sa saveur intense de chocolat et sa mie tendre.",
                image: "images/chocolate-cake-thumb.jpg",
                imageAlt: "Gâteau au chocolat classique avec glaçage au chocolat",
                videoTitle: "Comment faire un gâteau au chocolat classique",
                videoDescription: "Apprenez à cuire un gâteau au chocolat parfait à partir de zéro avec notre tutoriel vidéo pas à pas.",
                video: "https://www.youtube.com/embed/zsig3vgWb8E",
                ingredients: [
                    "2 tasses de farine tout usage",
                    "2 tasses de sucre en poudre",
                    "3/4 tasse de poudre de cacao non sucrée",
                    "2 cuillères à café de bicarbonate de soude",
                    "1 cuillère à café de levure chimique",
                    "1 cuillère à café de sel",
                    "1 tasse de babeurre",
                    "1 tasse de café noir fort, refroidi",
                    "1/2 tasse d'huile végétale",
                    "2 gros œufs",
                    "1 cuillère à café d'extrait de vanille"
                ],
                instructions: [
                    "Préchauffez le four à 175°C. Graissez et farinez deux moules à gâteau ronds de 23 cm.",
                    "Dans un grand bol, mélangez la farine, le sucre, la poudre de cacao, le bicarbonate de soude, la levure chimique et le sel.",
                    "Dans un bol séparé, mélangez le babeurre, le café, l'huile, les œufs et la vanille.",
                    "Ajoutez progressivement les ingrédients liquides aux ingrédients secs en mélangeant jusqu'à incorporation complète.",
                    "Divisez la pâte uniformément entre les moules préparés.",
                    "Faites cuire pendant 30-35 minutes, ou jusqu'à ce qu'un cure-dent inséré au centre ressorte propre.",
                    "Laissez refroidir dans les moules pendant 10 minutes, puis démoulez sur des grilles pour refroidir complètement.",
                    "Glacez avec votre glaçage au chocolat préféré une fois complètement refroidi."
                ]
            }
        },
        'garden-salad': {
            en: {
                title: "Fresh Garden Salad",
                description: "A healthy and refreshing salad with fresh vegetables and a light vinaigrette. This colorful salad is packed with nutrients and makes a perfect light lunch or side dish.",
                image: "images/garden-salad-thumb.jpg",
                imageAlt: "Colorful garden salad in a bowl",
                animatedImage: "images/garden-salad.gif",
                animatedImageAlt: "Animated garden salad with dressing being drizzled",
                videoTitle: "Preparing a Fresh Garden Salad",
                videoDescription: "Learn how to make a crisp and refreshing garden salad with our simple technique and homemade vinaigrette.",
                video: "https://www.youtube.com/embed/bMactSaZWfU",
                ingredients: [
                    "6 cups mixed salad greens",
                    "1 cucumber, sliced",
                    "2 tomatoes, chopped",
                    "1 bell pepper, chopped",
                    "1/2 red onion, thinly sliced",
                    "1/4 cup olive oil",
                    "2 tablespoons red wine vinegar",
                    "1 teaspoon Dijon mustard",
                    "1/2 teaspoon honey",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Wash and dry all salad greens thoroughly.",
                    "In a large bowl, combine salad greens, cucumber, tomatoes, bell pepper, and red onion.",
                    "In a small jar, combine olive oil, red wine vinegar, Dijon mustard, honey, salt, and pepper.",
                    "Shake vigorously until well combined.",
                    "Toss the salad with the dressing just before serving.",
                    "Serve immediately for the crispest texture."
                ]
            },
            fr: {
                title: "Salade de Jardin Fraîche",
                description: "Une salade saine et rafraîchissante avec des légumes frais et une vinaigrette légère. Cette salade colorée regorge de nutriments et constitue un déjeuner léger parfait ou un accompagnement.",
                image: "images/garden-salad-thumb.jpg",
                imageAlt: "Salade de jardin colorée dans un bol",
                videoTitle: "Préparation d'une salade de jardin fraîche",
                videoDescription: "Apprenez à faire une salade de jardin croquante et rafraîchissante avec notre technique simple et notre vinaigrette maison.",
                video: "https://www.youtube.com/embed/bMactSaZWfU",
                ingredients: [
                    "6 tasses de salades mélangées",
                    "1 concombre, tranché",
                    "2 tomates, coupées en dés",
                    "1 poivron, coupé en dés",
                    "1/2 oignon rouge, tranché finement",
                    "1/4 tasse d'huile d'olive",
                    "2 cuillères à soupe de vinaigre de vin rouge",
                    "1 cuillère à café de moutarde de Dijon",
                    "1/2 cuillère à café de miel",
                    "Sel et poivre au goût"
                ],
                instructions: [
                    "Lavez et séchez soigneusement toutes les salades.",
                    "Dans un grand bol, mélangez les salades, le concombre, les tomates, le poivron et l'oignon rouge.",
                    "Dans un petit bocal, mélangez l'huile d'olive, le vinaigre de vin rouge, la moutarde de Dijon, le miel, le sel et le poivre.",
                    "Agitez vigoureusement jusqu'à obtenir une émulsion homogène.",
                    "Mélangez la salade avec l'assaisonnement juste avant de servir.",
                    "Servez immédiatement pour une texture croquante."
                ]
            }
        },
        'grilled-salmon': {
            en: {
                title: "Grilled Salmon",
                description: "Perfectly grilled salmon with herbs and lemon. This healthy and flavorful dish is ready in just 15 minutes and is packed with omega-3 fatty acids.",
                image: "images/grilled-salmon-thumb.jpg",
                imageAlt: "Perfectly grilled salmon fillet with herbs",
                videoTitle: "How to Grill Perfect Salmon",
                videoDescription: "Master the art of grilling salmon with our expert tips to achieve perfectly cooked, flaky fish every time.",
                video: "https://www.youtube.com/embed/j7BkpjD-HZ0",
                ingredients: [
                    "4 salmon fillets (6 oz each)",
                    "2 tablespoons olive oil",
                    "2 cloves garlic, minced",
                    "1 tablespoon fresh lemon juice",
                    "1 teaspoon lemon zest",
                    "2 tablespoons fresh dill, chopped",
                    "1 tablespoon fresh parsley, chopped",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Preheat grill to medium-high heat.",
                    "In a small bowl, mix olive oil, garlic, lemon juice, lemon zest, dill, parsley, salt, and pepper.",
                    "Brush the mixture over both sides of salmon fillets.",
                    "Place salmon on the grill, skin-side up.",
                    "Cook for 4-6 minutes per side, depending on thickness.",
                    "Salmon is done when it flakes easily with a fork.",
                    "Serve immediately with your favorite sides."
                ]
            },
            fr: {
                title: "Saumon Grillé",
                description: "Saumon parfaitement grillé aux herbes et au citron. Ce plat sain et savoureux est prêt en seulement 15 minutes et regorge d'acides gras oméga-3.",
                image: "images/grilled-salmon-thumb.jpg",
                imageAlt: "Filet de saumon parfaitement grillé aux herbes",
                animatedImage: "images/grilled-salmon.gif",
                animatedImageAlt: "Filet de saumon animé en train de griller sur un barbecue",
                videoTitle: "Comment griller du saumon parfait",
                videoDescription: "Maîtrisez l'art de griller le saumon avec nos conseils d'experts pour obtenir un poisson parfaitement cuit et qui s'émiette facilement à chaque fois.",
                video: "https://www.youtube.com/embed/j7BkpjD-HZ0",
                ingredients: [
                    "4 filets de saumon (170 g chacun)",
                    "2 cuillères à soupe d'huile d'olive",
                    "2 gousses d'ail, émincées",
                    "1 cuillère à soupe de jus de citron frais",
                    "1 cuillère à café de zeste de citron",
                    "2 cuillères à soupe d'aneth frais, haché",
                    "1 cuillère à soupe de persil frais, haché",
                    "Sel et poivre au goût"
                ],
                instructions: [
                    "Préchauffez le gril à feu moyen-élevé.",
                    "Dans un petit bol, mélangez l'huile d'olive, l'ail, le jus de citron, le zeste de citron, l'aneth, le persil, le sel et le poivre.",
                    "Badigeonnez le mélange sur les deux faces des filets de saumon.",
                    "Placez le saumon sur le gril, côté peau vers le haut.",
                    "Faites cuire 4 à 6 minutes par côté, selon l'épaisseur.",
                    "Le saumon est cuit lorsqu'il s'émiette facilement avec une fourchette.",
                    "Servez immédiatement avec vos accompagnements préférés."
                ]
            }
        },
        'chicken-parmesan': {
            en: {
                title: "Chicken Parmesan",
                description: "Crispy chicken topped with tomato sauce and melted mozzarella. This classic Italian-American dish is comfort food at its finest.",
                image: "images/chicken-parmesan-thumb.jpg",
                imageAlt: "Chicken parmesan with melted cheese and tomato sauce",
                videoTitle: "Making Authentic Chicken Parmesan",
                videoDescription: "Create restaurant-quality chicken parmesan in your own kitchen with our detailed recipe and technique.",
                video: "https://www.youtube.com/embed/gwSOwAe_IVY",
                ingredients: [
                    "4 boneless, skinless chicken breasts",
                    "1 cup all-purpose flour",
                    "2 eggs, beaten",
                    "1 cup breadcrumbs",
                    "1/2 cup grated parmesan cheese",
                    "2 cups marinara sauce",
                    "2 cups shredded mozzarella cheese",
                    "1/4 cup fresh basil, chopped",
                    "2 tablespoons olive oil",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Preheat oven to 375°F (190°C).",
                    "Pound chicken breasts to an even thickness.",
                    "Season chicken with salt and pepper.",
                    "Dredge chicken in flour, then dip in beaten eggs, then coat with breadcrumbs mixed with parmesan.",
                    "Heat olive oil in a large skillet over medium-high heat.",
                    "Cook chicken until golden brown on both sides, about 3-4 minutes per side.",
                    "Transfer chicken to a baking dish.",
                    "Top each chicken breast with marinara sauce and mozzarella cheese.",
                    "Bake for 15-20 minutes, until cheese is bubbly and golden.",
                    "Garnish with fresh basil before serving."
                ]
            },
            fr: {
                title: "Poulet Parmesan",
                description: "Poulet croustillant garni de sauce tomate et de mozzarella fondue. Ce plat classique italo-américain est un véritable réconfort gastronomique.",
                image: "images/chicken-parmesan-thumb.jpg",
                imageAlt: "Poulet parmesan avec fromage fondu et sauce tomate",
                animatedImage: "images/chicken-parmesan.gif",
                animatedImageAlt: "Poulet parmesan animé en train de cuire avec le fromage qui fond",
                videoTitle: "Préparation d'un authentique poulet parmesan",
                videoDescription: "Créez un poulet parmesan de qualité restaurant dans votre propre cuisine avec notre recette détaillée et notre technique.",
                video: "https://www.youtube.com/embed/gwSOwAe_IVY",
                ingredients: [
                    "4 blancs de poulet sans os, sans peau",
                    "1 tasse de farine tout usage",
                    "2 œufs, battus",
                    "1 tasse de chapelure",
                    "1/2 tasse de parmesan râpé",
                    "2 tasses de sauce marinara",
                    "2 tasses de mozzarella râpée",
                    "1/4 tasse de basilic frais, haché",
                    "2 cuillères à soupe d'huile d'olive",
                    "Sel et poivre au goût"
                ],
                instructions: [
                    "Préchauffez le four à 190°C.",
                    "Aplatissez les blancs de poulet à une épaisseur uniforme.",
                    "Assaisonnez le poulet avec du sel et du poivre.",
                    "Passez le poulet dans la farine, plongez-le dans les œufs battus, puis enrobez-le de chapelure mélangée avec du parmesan.",
                    "Faites chauffer l'huile d'olive dans une grande poêle à feu moyen-élevé.",
                    "Faites cuire le poulet jusqu'à ce qu'il soit doré des deux côtés, environ 3 à 4 minutes par côté.",
                    "Transférez le poulet dans un plat allant au four.",
                    "Déposez sur chaque blanc de poulet de la sauce marinara et de la mozzarella râpée.",
                    "Faites cuire au four pendant 15 à 20 minutes, jusqu'à ce que le fromage soit bouillonnant et doré.",
                    "Parsemez de basilic frais avant de servir."
                ]
            }
        },
        'vanilla-ice-cream': {
            en: {
                title: "Vanilla Ice Cream",
                description: "Creamy vanilla ice cream made with real vanilla beans. This homemade ice cream has a rich, smooth texture that beats store-bought versions every time.",
                image: "images/vanilla-ice-cream-thumb.jpg",
                imageAlt: "Homemade vanilla ice cream in a bowl",
                animatedImage: "images/vanilla-ice-cream.gif",
                animatedImageAlt: "Animated vanilla ice cream being scooped",
                videoTitle: "Making Homemade Vanilla Ice Cream",
                videoDescription: "Learn how to make creamy, dreamy vanilla ice cream from scratch using our no-churn method.",
                video: "https://www.youtube.com/embed/S7YGfsTmwsE",
                ingredients: [
                    "2 cups heavy cream",
                    "1 cup whole milk",
                    "3/4 cup sugar",
                    "1 vanilla bean, split and scraped",
                    "6 large egg yolks",
                    "2 tablespoons vanilla extract"
                ],
                instructions: [
                    "In a medium saucepan, heat cream, milk, and vanilla bean seeds over medium heat until it just begins to simmer.",
                    "In a separate bowl, whisk together egg yolks and sugar until pale and thick.",
                    "Slowly pour the hot cream mixture into the egg yolk mixture, whisking constantly to prevent curdling.",
                    "Return the mixture to the saucepan and cook over low heat, stirring constantly, until it coats the back of a spoon.",
                    "Strain through a fine-mesh sieve into a bowl and discard vanilla bean pod.",
                    "Stir in vanilla extract and chill mixture thoroughly, at least 4 hours or overnight.",
                    "Churn in an ice cream maker according to manufacturer's instructions.",
                    "Transfer to an airtight container and freeze for at least 2 hours before serving."
                ]
            },
            fr: {
                title: "Glace à la Vanille",
                description: "Glace vanillée onctueuse faite avec de vraies gousses de vanille. Cette glace maison a une texture riche et lisse qui bat les versions du commerce à chaque fois.",
                image: "images/vanilla-ice-cream-thumb.jpg",
                imageAlt: "Glace vanille maison dans un bol",
                animatedImage: "images/vanilla-ice-cream.gif",
                animatedImageAlt: "Glace vanille animée en cours de service",
                videoTitle: "Préparation de glace vanille maison",
                videoDescription: "Apprenez à faire une glace vanille crémeuse et onctueuse à partir de zéro en utilisant notre méthode sans sorbetière.",
                video: "https://www.youtube.com/embed/S7YGfsTmwsE",
                ingredients: [
                    "2 tasses de crème épaisse",
                    "1 tasse de lait entier",
                    "3/4 tasse de sucre",
                    "1 gousse de vanille, fendue et grattée",
                    "6 jaunes d'œufs",
                    "2 cuillères à soupe d'extrait de vanille"
                ],
                instructions: [
                    "Dans une casserole moyenne, faites chauffer la crème, le lait et les graines de vanille à feu moyen jusqu'à ce que le mélange commence juste à frémir.",
                    "Dans un bol séparé, fouettez les jaunes d'œufs et le sucre jusqu'à obtenir une consistance pâle et épaisse.",
                    "Versez lentement le mélange chaud de crème dans le mélange de jaunes d'œufs en fouettant constamment pour éviter la coagulation.",
                    "Remettez le mélange dans la casserole et faites cuire à feu doux en remuant constamment jusqu'à ce qu'il nappe le dos d'une cuillère.",
                    "Filtrez à travers une passoire fine dans un bol et jetez la gousse de vanille.",
                    "Incorporez l'extrait de vanille et refroidissez le mélange complètement, au moins 4 heures ou toute la nuit.",
                    "Mettez en sorbetière selon les instructions du fabricant.",
                    "Transférez dans un contenant hermétique et mettez au congélateur pendant au moins 2 heures avant de servir."
                ]
            }
        },
        'bruschetta': {
            en: {
                title: "Bruschetta",
                description: "Toasted bread topped with tomatoes, garlic, and fresh basil. This classic Italian appetizer is fresh, flavorful, and ready in just 15 minutes.",
                image: "images/bruschetta-thumb.jpg",
                imageAlt: "Classic Italian bruschetta on a plate",
                animatedImage: "images/bruschetta.gif",
                animatedImageAlt: "Animated bruschetta with tomatoes being assembled",
                videoTitle: "Preparing Traditional Bruschetta",
                videoDescription: "Learn how to make authentic Italian bruschetta with ripe tomatoes, fresh basil, and perfectly toasted bread.",
                video: "https://www.youtube.com/embed/kzLTMAUQWkI",
                ingredients: [
                    "1 loaf Italian bread, cut into 1/2 inch slices",
                    "4 large tomatoes, diced",
                    "1/4 cup fresh basil, chopped",
                    "2 cloves garlic, minced",
                    "2 tablespoons olive oil",
                    "1 tablespoon balsamic vinegar",
                    "Salt and pepper to taste",
                    "1/4 cup parmesan cheese, grated (optional)"
                ],
                instructions: [
                    "Preheat oven to 375°F (190°C).",
                    "Place bread slices on a baking sheet and brush with olive oil.",
                    "Toast in the oven for 5-7 minutes until golden and crisp.",
                    "In a medium bowl, combine tomatoes, basil, garlic, olive oil, balsamic vinegar, salt, and pepper.",
                    "Spoon the tomato mixture onto the toasted bread slices.",
                    "Sprinkle with parmesan cheese if desired.",
                    "Serve immediately while bread is still crisp."
                ]
            },
            fr: {
                title: "Bruschetta",
                description: "Pain grillé garni de tomates, d'ail et de basilic frais. Cet apéritif italien classique est frais, savoureux et prêt en seulement 15 minutes.",
                image: "images/bruschetta-thumb.jpg",
                imageAlt: "Bruschetta italienne classique sur une assiette",
                animatedImage: "images/bruschetta.gif",
                animatedImageAlt: "Bruschetta animée avec des tomates en cours de préparation",
                videoTitle: "Préparation d'une bruschetta traditionnelle",
                videoDescription: "Apprenez à faire une bruschetta italienne authentique avec des tomates mûres, du basilic frais et du pain parfaitement grillé.",
                video: "https://www.youtube.com/embed/kzLTMAUQWkI",
                ingredients: [
                    "1 pain italien, coupé en tranches de 1,5 cm",
                    "4 grosses tomates, coupées en dés",
                    "1/4 tasse de basilic frais, haché",
                    "2 gousses d'ail, émincées",
                    "2 cuillères à soupe d'huile d'olive",
                    "1 cuillère à soupe de vinaigre balsamique",
                    "Sel et poivre au goût",
                    "1/4 tasse de parmesan, râpé (facultatif)"
                ],
                instructions: [
                    "Préchauffez le four à 190°C.",
                    "Placez les tranches de pain sur une plaque de cuisson et badigeonnez-les d'huile d'olive.",
                    "Faites griller au four pendant 5 à 7 minutes jusqu'à ce qu'elles soient dorées et croustillantes.",
                    "Dans un bol moyen, mélangez les tomates, le basilic, l'ail, l'huile d'olive, le vinaigre balsamique, le sel et le poivre.",
                    "Disposez le mélange de tomates sur les tranches de pain grillé.",
                    "Saupoudrez de parmesan si désiré.",
                    "Servez immédiatement pendant que le pain est encore croustillant."
                ]
            }
        },
        'lemonade': {
            en: {
                title: "Fresh Lemonade",
                description: "Refreshing lemonade made from fresh lemons and a touch of sugar. This classic summer drink is the perfect balance of sweet and tart.",
                image: "images/lemonade-thumb.jpg",
                imageAlt: "Glass of fresh homemade lemonade with ice",
                animatedImage: "images/lemonade.gif",
                animatedImageAlt: "Animated lemonade being poured into a glass with ice",
                videoTitle: "Making the Perfect Fresh Lemonade",
                videoDescription: "Learn how to make the best homemade lemonade with our simple recipe that's far superior to store-bought versions.",
                video: "https://www.youtube.com/embed/5_sHXJC9ocA",
                ingredients: [
                    "1 cup fresh lemon juice (about 6-8 lemons)",
                    "1/2 cup sugar (adjust to taste)",
                    "4 cups cold water",
                    "Ice cubes",
                    "Fresh lemon slices for garnish",
                    "Fresh mint leaves for garnish (optional)"
                ],
                instructions: [
                    "Juice the lemons to make about 1 cup of fresh lemon juice.",
                    "In a small saucepan, make a simple syrup by heating 1/2 cup sugar with 1/2 cup water, stirring until sugar dissolves. Let cool.",
                    "In a large pitcher, combine lemon juice, simple syrup, and remaining 3 1/2 cups water.",
                    "Stir well and taste, adding more sugar or water if needed.",
                    "Chill thoroughly before serving.",
                    "Serve over ice with lemon slices and mint leaves for garnish."
                ]
            },
            fr: {
                title: "Limonade Fraîche",
                description: "Limonade rafraîchissante préparée à partir de citrons frais et d'un soupçon de sucre. Cette boisson estivale classique offre l'équilibre parfait entre douceur et acidité.",
                image: "images/lemonade-thumb.jpg",
                imageAlt: "Verre de limonade maison fraîche avec de la glace",
                animatedImage: "images/lemonade.gif",
                animatedImageAlt: "Limonade animée en cours de versement dans un verre avec de la glace",
                videoTitle: "Préparation d'une limonade fraîche parfaite",
                videoDescription: "Apprenez à faire la meilleure limonade maison avec notre recette simple qui est bien supérieure aux versions du commerce.",
                video: "https://www.youtube.com/embed/5_sHXJC9ocA",
                ingredients: [
                    "1 tasse de jus de citron frais (environ 6-8 citrons)",
                    "1/2 tasse de sucre (ajuster selon le goût)",
                    "4 tasses d'eau froide",
                    "Des glaçons",
                    "Tranches de citron frais pour la décoration",
                    "Feuilles de menthe fraîche pour la décoration (facultatif)"
                ],
                instructions: [
                    "Pressez les citrons pour obtenir environ 1 tasse de jus de citron frais.",
                    "Dans une petite casserole, faites un sirop simple en chauffant 1/2 tasse de sucre avec 1/2 tasse d'eau en remuant jusqu'à dissolution du sucre. Laissez refroidir.",
                    "Dans une grande carafe, mélangez le jus de citron, le sirop simple et les 3 1/2 tasses d'eau restantes.",
                    "Mélangez bien et goûtez, ajoutez plus de sucre ou d'eau si nécessaire.",
                    "Refroidissez complètement avant de servir.",
                    "Servez avec des glaçons, des tranches de citron et des feuilles de menthe pour la décoration."
                ]
            }
        }
    };

    // Return the recipe data if it exists, otherwise return null
    if (recipes[recipeId] && recipes[recipeId][language]) {
        return recipes[recipeId][language];
    } else if (recipes[recipeId] && recipes[recipeId]['en']) {
        // Fallback to English if requested language is not available
        return recipes[recipeId]['en'];
    }

    // Return null if recipe not found
    return null;
}

// Function to load recipe data
function loadRecipe() {
    const recipeId = getUrlParameter('recipe');
    const language = localStorage.getItem('selectedLanguage') || 'en';

    const recipeData = getRecipeData(recipeId, language);

    if (recipeData) {
        // Update page title for SEO
        document.title = recipeData.title + " - Delicious Recipes Blog";

        // Update meta description for SEO
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = recipeData.description;
        }

        // Update recipe content
        document.getElementById('recipe-title').textContent = recipeData.title;
        document.getElementById('recipe-image').src = recipeData.image;
        document.getElementById('recipe-image').alt = recipeData.imageAlt;
        document.getElementById('recipe-description').textContent = recipeData.description;
        document.getElementById('video-description').textContent = recipeData.videoDescription;
        document.getElementById('video-title').textContent = recipeData.videoTitle;

        const videoIframe = document.getElementById('recipe-video');
        if (videoIframe) {
            videoIframe.src = recipeData.video;
        }

        // Update ingredients list
        const ingredientsList = document.getElementById('ingredients-list');
        ingredientsList.innerHTML = '';
        recipeData.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });

        // Update instructions list
        const instructionsList = document.getElementById('instructions-list');
        instructionsList.innerHTML = '';
        recipeData.instructions.forEach(instruction => {
            const li = document.createElement('li');
            li.textContent = instruction;
            instructionsList.appendChild(li);
        });

        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.content = recipeData.title.toLowerCase() + ", recipe, cooking, food";
        }
    } else {
        // Handle case when recipe is not found
        document.getElementById('recipe-title').textContent = "Recipe Not Found";
        document.getElementById('recipe-description').textContent = "Sorry, the requested recipe could not be found.";
    }
}

// Override the changeLanguage function to reload recipe data
const originalChangeLanguage = changeLanguage;
changeLanguage = function () {
    originalChangeLanguage();
    loadRecipe();
};

// Load recipe when page is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Set the language selector to the saved language
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.value = savedLanguage;
    }

    // Load the recipe
    loadRecipe();
});