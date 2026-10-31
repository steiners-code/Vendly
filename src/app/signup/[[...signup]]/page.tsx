import { SignUp } from '@clerk/nextjs'
import { Suspense } from 'react'

export default function Page() {
    return (
        <Suspense>
            <div className="min-h-screen w-full flex items-center justify-center">
                <SignUp />
            </div>
        </Suspense>
    )
}