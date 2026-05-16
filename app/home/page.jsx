import React from "react";

function page() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "My Next App";
  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="max-w-2xl text-center border rounded-xl p-10 shadow">
        <h1 className="text-4xl font-bold mb-4">🚀 Welcome to {appName}</h1>

        <p className="text-lg mb-6">My first deployed Next.js application</p>

        <div className="border rounded p-4 mb-6">
          <h2 className="font-semibold">A project with <span className="text-blue-400">STEMLink</span></h2>
        </div>

        <div className="border rounded p-4">
          <h2 className="font-semibold">Learning Concepts</h2>

          <ul className="mt-3 space-y-2">
            <li>✅ Server Components</li>
            <li>✅ SSR</li>
            <li>✅ Environment Variables</li>
            <li>✅ Deployment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default page;
