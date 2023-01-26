import React from 'react'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi';

function StudioNavbar(props: any) {
    return (
        <div>
            <div className="flex items-center justify-between p-5">
                <Link href="/" className="text-[#05dae9] flex items-center">
                    <HiArrowLeft className="h-6 w-6 text-[#05dae9] mr-2" />
                    Go to Website
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div >
    )
}

export default StudioNavbar