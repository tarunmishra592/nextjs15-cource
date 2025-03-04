import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='flex align-center auth-container p-10'>
        <SignIn />
    </div>
}