import Link from "@/components/link";

export default function FourOhFour() {
  return (
    <div className="flex flex-col flex-grow justify-center items-center w-full text-center">
      <h1 className="text-6xl font-bold">Error: 404</h1>
      <p className="my-4 text-2xl font-medium">There appears to be an error, so try going back to the home page.</p>
      <Link href="/" className="py-2 px-4 bg-gray-200 rounded-md transition dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700">
        Return Home
      </Link>
    </div>
  );
}
