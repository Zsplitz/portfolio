"use client";

import { useState } from "react";
import { FaGithub, FaInstagram, FaTiktok, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Header */}
      <header className="w-full py-4 border-b bg-white/70 backdrop-blur-md fixed top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg font-semibold tracking-tight hover:text-blue-600 transition"
          >
            Zacharias
          </button>

          {/* Desktop Nav */}
          <nav className="flex items-center hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>

            <a
              href="#contact"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white w-full px-6 py-4 border-t border-gray-200 flex flex-col gap-3">
            <a href="#about" className="hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#projects" className="hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#skills" className="hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a
              href="#contact"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 flex flex-col items-center text-center">
        <Image
          src="/zacke.png"
          alt="Zacharias working"
          width={500}
          height={400}
          className="w-40 h-40 rounded-full mb-6 object-cover"
        />

        <h2 className="text-xl font-semibold mb-1">Hi, I'm Zacharias Tallgren</h2>
        <h3 className="text-lg text-gray-600 mb-2">
          Programming Student at Optima
        </h3>
        <p className="text-gray-500 mb-6">
          3rd Year | Building the Future with Code
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href="#contact"
            className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-5 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            View My Work
          </a>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/Zsplitz"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-gray-900 text-white hover:scale-110 transform transition duration-200"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://instagram.com/zakke_07"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-500 text-white hover:scale-110 transform transition duration-200"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://tiktok.com/@zakke070"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-black text-white hover:scale-110 transform transition duration-200"
          >
            <FaTiktok size={22} />
          </a>
        </div>
      </section>

      {/* Spacer for scroll */}
      <div className="h-40" id="about"></div>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/code.png"
            alt="Zacharias working"
            width={500}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I'm a passionate programming student currently in my 3rd year at Optima.
            I specialize in building modern web applications using Next.js and TypeScript,
            creating scalable and type-safe solutions. I love experimenting with UI/UX,
            design systems, and new web technologies.
          </p>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">My Projects</h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Project Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transform transition duration-300">
            <Image
              src="/gambling.png"
              alt="Project 1"
              width={400}
              height={250}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">Project One</h3>
              <p className="text-gray-600 flex-1">
                A short description of Project One. Built with Next.js and Tailwind CSS.
              </p>
              <a
                href="https://github.com/Zsplitz/projekt-1"
                className="mt-4 text-blue-600 font-medium hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transform transition duration-300">
            <Image
              src="/bmw.png"
              alt="Project 2"
              width={400}
              height={250}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">Project Two</h3>
              <p className="text-gray-600 flex-1">
                A short description of Project Two. Focused on responsive design and interactivity.
              </p>
              <a
                href="https://github.com/Zsplitz/projekt_2"
                className="mt-4 text-blue-600 font-medium hover:underline"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transform transition duration-300">
            <Image
              src="/mario.png"
              alt="Project 3"
              width={400}
              height={250}
              className="object-cover w-full h-48"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">Project Three</h3>
              <p className="text-gray-600 flex-1">
                A short description of Project Three. Built with modern web technologies.
              </p>
              <a
                href="https://github.com/Zsplitz/phaser-spel-me-aaron"
                className="mt-4 text-blue-600 font-medium hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">My Skills</h2>

        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 justify-items-center">
          {/* TypeScript */}
          <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              width={48}
              height={48}
            />
            <span className="mt-2 text-gray-700 font-medium">TypeScript</span>
          </div>

          {/* Next.js */}
          <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              alt="Next.js"
              width={48}
              height={48}
              className="invert dark:invert-0"
            />
            <span className="mt-2 text-gray-700 font-medium">Next.js</span>
          </div>

          {/* Phaser */}
          <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <Image
              src="/phaser.jpg"
              alt="Phaser"
              width={48}
              height={48}
            />
            <span className="mt-2 text-gray-700 font-medium">Phaser</span>
          </div>

          {/* React */}
          <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              width={48}
              height={48}
            />
            <span className="mt-2 text-gray-700 font-medium">React</span>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              width={48}
              height={48}
            />
            <span className="mt-2 text-gray-700 font-medium">JavaScript</span>
          </div>

          {/* HTML */}
          <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              width={48}
              height={48}
            />
            <span className="mt-2 text-gray-700 font-medium">HTML</span>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
              width={48}
              height={48}
            />
            <span className="mt-2 text-gray-700 font-medium">CSS</span>
          </div>
        </div>
      </section>



      {/* Spacer for scroll */}
      <div className="h-40" id="contact"></div>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="text-gray-600 mb-8">
          I'm always open to new opportunities, collaborations, or just a friendly chat about coding.
          Feel free to reach out to me via email below 👇
        </p>

        {/* Email Box */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center">
          <span className="text-gray-500 text-sm mb-2">Send me an email at</span>
          <a
            href="mailto:zacharias.tallgren@example.com"
            className="text-xl font-semibold text-blue-600 hover:underline break-words"
          >
            zacharias.tallgren@example.com
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center mt-10">
          <a
            href="https://github.com/Zsplitz"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-gray-900 text-white hover:scale-110 transform transition duration-200"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://instagram.com/zakke_07"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-500 text-white hover:scale-110 transform transition duration-200"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://tiktok.com/@zakke070"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-black text-white hover:scale-110 transform transition duration-200"
          >
            <FaTiktok size={22} />
          </a>
        </div>
      </section>

    </main>

  );
}
