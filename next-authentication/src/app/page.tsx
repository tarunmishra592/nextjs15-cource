import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Banner */}
      <div className="bg-blue-600 text-white text-center py-10 text-3xl font-bold">
        Welcome Guys!
      </div>
      
      <div className="container mx-auto mt-6 flex gap-6">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-300 p-4 shadow-md rounded-lg hidden md:block">
          <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
          <ul className="space-y-2 text-gray-700">
            <li><Link href="/dashboard" className="block p-2 hover:bg-gray-200 rounded">Dashboard</Link></li>
            <SignedIn>
            <li><Link href="/user-profile" className="block p-2 hover:bg-gray-200 rounded">Profile</Link></li>
            </SignedIn>
            <li><Link href="/settings" className="block p-2 hover:bg-gray-200 rounded">Settings</Link></li>
          </ul>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 bg-gray-300 p-6 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Unique Views</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">View 1</div>
            <div className="bg-green-100 p-4 rounded-lg shadow-md">View 2</div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow-md">View 3</div>
            <div className="bg-red-100 p-4 rounded-lg shadow-md">View 4</div>
            <div className="bg-purple-100 p-4 rounded-lg shadow-md">View 5</div>
            <div className="bg-indigo-100 p-4 rounded-lg shadow-md">View 6</div>
          </div>
        </main>
      </div>
    </div>
  );
}
