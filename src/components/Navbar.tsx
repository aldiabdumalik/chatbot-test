import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar border-b shadow-lg px-6 py-2 flex justify-between items-center sticky bg-white top-0 z-10">
      <div className="flex gap-4">
        <Link href={'/'}>
          <Image src="/img/icon/arrow-left.svg" width={24} height={24} alt="icon-left" />
        </Link>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <Image src="/img/profile/avatar.webp" width={10} height={10} alt="avatar" unoptimized />
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-black">Leydroid</h2>
          {/* <p className="text-sm">AI sedang mengetik...</p> */}
        </div>
      </div>
      <div>
        <Link href={'/'}>
          <Image src="/img/icon/option.svg" width={6} height={24} alt="icon-left" />
        </Link>
      </div>
    </nav>
  )
}