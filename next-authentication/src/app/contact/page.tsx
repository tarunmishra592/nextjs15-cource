export default function Contact(){
    return(
        <div className="min-h-screen bg-gray-900 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl flex flex-col md:flex-row gap-6">
        {/* Form Section */}
        <div className="w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <form className="space-y-4">
            <label className="block">
              <span className="text-gray-700 font-semibold">Your Name</span>
              <input type="text" className="w-full mt-2 p-2 border rounded-lg" placeholder="John Doe" />
            </label>
            
            <label className="block">
              <span className="text-gray-700 font-semibold">Email Address</span>
              <input type="email" className="w-full mt-2 p-2 border rounded-lg" placeholder="hello@example.com" />
            </label>
            
            <label className="block">
              <span className="text-gray-700 font-semibold">Message</span>
              <textarea className="w-full mt-2 p-2 border rounded-lg" rows={4} placeholder="Write your message here..."></textarea>
            </label>
            
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    )
}