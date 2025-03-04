import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function About(){

  const authObj = await auth()
  const userObj = await currentUser()

  console.log(authObj)
  console.log(userObj)

    return(
        <div className="min-h-screen bg-gray-900 flex justify-center items-center p-6">
      <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-full max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg mb-6">
          We are a team of passionate developers dedicated to creating high-quality software solutions. Our expertise spans web development, mobile app development, cloud solutions, and database management.
        </p>
        <Image
          width={200}
          height={300}
          src="https://picsum.photos/id/237/200/300"
          alt="About Us"
          className="rounded-lg shadow-md mx-auto mb-6"
        />
        <p className="text-gray-600 text-lg">
          Our mission is to empower businesses with innovative technology solutions that drive growth and efficiency. We believe in continuous learning, collaboration, and excellence in everything we do.
        </p>
      </div>
    </div>
    )
}