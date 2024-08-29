import Link from 'next/link';
import Image from 'next/image';

// Define the TypeScript type for recipes
type Recipe = {
  title: string;
  ingredients: string;
  instructions: string;
  image: string;
};

const recipes: Record<string, Recipe> = {
  '1': {
    title: 'Spaghetti Carbonara',
    ingredients: 'Pasta, Eggs, Cheese, Bacon',
    instructions: 'Cook pasta according to package instructions. In a separate pan, cook bacon until crispy. Mix eggs and cheese together, then combine with pasta and bacon.',
    image: '/recipes/SpaghettiCarbonara.jpg'
  },
  '2': {
    title: 'Chicken Alfredo',
    ingredients: 'Chicken, Cream, Parmesan, Garlic',
    instructions: 'Cook chicken in a skillet until browned. Add garlic and cook until fragrant. Pour in cream and Parmesan, stirring until the sauce thickens. Serve over pasta.',
    image: '/recipes/ChickenAlfredo.jpg'
  },
  '3': {
    title: 'Beef Stroganoff',
    ingredients: 'Beef, Mushrooms, Onion, Sour Cream',
    instructions: 'Cook beef in a pan until browned. Add onions and mushrooms, cooking until tender. Stir in sour cream and simmer until the sauce is creamy.',
    image: '/recipes/BeefStroganoff.jpg'
  }
};

export default function Recipe() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Recipe Details</h1>
      <ul className="text-lg mb-8 space-y-8">
        {Object.keys(recipes).map(key => {
          const recipe = recipes[key];
          return (
            <li key={key} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{recipe.title}</h2>
              <div className="w-full max-w-md">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={500}
                  height={300}
                  className="mx-auto mb-4 rounded-lg"
                />
              </div>
              <p className="font-bold mb-1 text-gray-800">Ingredients:</p>
              <p className="mb-2 text-gray-700">{recipe.ingredients}</p>
              <p className="font-bold mb-1 text-gray-800">Instructions:</p>
              <p className="text-gray-700">{recipe.instructions}</p>
            </li>
          );
        })}
      </ul>
      <Link href="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
