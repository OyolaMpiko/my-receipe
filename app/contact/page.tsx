import Link from 'next/link';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
      <p className="text-lg mb-6 text-gray-600">We'd love to hear from you! Here’s how you can get in touch:</p>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-md w-full">
        <p className="text-lg mb-4 text-gray-700">Phone: 
          <a href="tel:+1234567890" className="text-blue-500 hover:underline"> +1 (234) 567-890</a>
        </p>
        <p className="text-lg mb-4 text-gray-700">Email: 
          <a href="mailto:contact@example.com" className="text-blue-500 hover:underline"> contact@example.com</a>
        </p>
        <p className="text-lg mb-4 text-gray-700">Follow us on social media:</p>
        <div className="space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Facebook</a>
        </div>
      </div>
      <Link href="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
