'use client'
// import { useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { Bar } from "recharts";
import { BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 700 },
  { name: "May", users: 600 },
];

export default function Dashboard(){

  // const { isLoaded, sessionId, getToken, userId } = useAuth()
  // const { isLoaded, isSignedIn, user } = useUser()

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* User Stats */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">User Growth</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Signups */}
        <div className="bg-gray-300 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recent Signups</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Image width={50} height={50} src="https://picsum.photos/50" alt="User" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold">Alice Johnson</p>
                <p className="text-sm text-gray-500">alice@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image width={50} height={50} src="https://picsum.photos/50" alt="User" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold">Michael Smith</p>
                <p className="text-sm text-gray-500">michael@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

