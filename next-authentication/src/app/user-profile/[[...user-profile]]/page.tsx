import { UserProfile } from "@clerk/nextjs";

export default function Profile(){
    return(
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
          <UserProfile path="/user-profile" />
        </div>
    )
}