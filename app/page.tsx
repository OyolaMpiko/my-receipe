import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Pasta Recipes</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-xl">
        <p className="text-lg text-gray-700">
          Welcome to my blog! Browse through our collection of pasta recipes, complete with step-by-step instructions and enticing images. Whether you're cooking for family or friends, you'll find the perfect recipe here.
        </p>
      </div>
      
      <ul className="space-y-4">
        <li>
          <Link href="/recipes" className="text-blue-500 hover:underline text-xl font-medium">
            Recipes
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-blue-500 hover:underline text-xl font-medium">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}
