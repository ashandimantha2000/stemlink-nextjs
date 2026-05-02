import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
        <h3>this is header</h3>
        {/* <a href="/about">About</a> */}
        <br />
        <Link href="/about" >About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="blog/tech">Tech Blog</Link>
      
    </div>
  )
}

export default Header
