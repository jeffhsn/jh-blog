import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <div>
            <Link href="/">
                <h1>Logo</h1>
            </Link>
        </div>
    )
}

export default Header