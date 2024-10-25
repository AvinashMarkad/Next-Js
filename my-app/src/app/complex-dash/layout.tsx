import { ReactNode } from "react";

export default function compLayout({
  children,
  notification,
  revenue,
  user,

}: {
  children: ReactNode;
  notification: ReactNode;
  revenue: ReactNode;
  user: ReactNode;
  
}) {
  return (
    <>
      <div className="flex p-6 space-x-6">
      {/* Notifications and User Section */}
      <div className="flex flex-col w-1/2 space-y-6">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Notifications</h2>
          {notification}
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">User</h2>
          {user}
        </div>
      </div>

      {/* Revenue Section */}
      <div className="w-1/2 bg-gray-200 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2">Revenue</h2>
        {revenue}
      
      </div>
    </div>
    </>
  );
}
