import { ReactNode } from "react";

export default function compLayout({
  children,
  notification,
  revenue,
  user,
  login2,

}: {
  children: ReactNode;
  notification: ReactNode;
  revenue: ReactNode;
  user: ReactNode;
  login2:ReactNode;
  
}) {
    const LoggedIn = false;
  return LoggedIn ? (
    <>
      <div className="flex p-6 space-x-6">
     
      <div className="flex flex-col w-1/2 space-y-6">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Notifications</h2>
          <h1>{notification}</h1>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">User</h2>
         <h1> {user}</h1>
        </div>
      </div>

    
      <div className="w-1/2 bg-gray-200 p-6 rounded-lg shadow-lg">
        {/* <h2 className="text-xl font-bold mb-2">Revenue</h2> */}
       <h1> {revenue}</h1>
      
      </div>
    </div>
    </>
  ):(
    login2
  )
}
