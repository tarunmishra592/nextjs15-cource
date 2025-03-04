export default function Settings(){
    return(
        <div className="min-h-screen bg-gray-900 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Settings</h1>
        
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700 font-semibold">Change Password</span>
            <input type="password" className="w-full mt-2 p-2 border rounded-lg" placeholder="New Password" />
          </label>
          
          <label className="block">
            <span className="text-gray-700 font-semibold">Notification Preferences</span>
            <select className="w-full mt-2 p-2 border rounded-lg">
              <option>Email Notifications</option>
              <option>SMS Notifications</option>
              <option>Push Notifications</option>
            </select>
          </label>
          
          <div className="flex justify-between mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Save Changes</button>
            <button className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    )
}