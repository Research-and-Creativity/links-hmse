import Link from 'next/link'
import React from 'react'


const Footer = () => {
  const tahunSekarang = new Date().getFullYear();
  return (
    <section id="__footer" className="py-5">
      <div className="text-center text-xs md:text-sm text-gray-100">
        <p>
          &copy; {tahunSekarang}, Built by{" "}
          <Link
            href="https://github.com/Research-and-Creativity"
            target="_blank"
            className="font-medium"
          >
            @HMSE Telkom University Purwokerto
          </Link>{" "}
        </p>
      </div>
    </section>
  )
}

export default Footer