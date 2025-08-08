import React from "react";
import profilePic from "./profile.jpg"; // Add your uploaded image to the project src folder

export default function ResumeWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold">Yogesh Jeena</h1>
            <p className="text-sm text-gray-600">Electronics & Communication — Embedded Systems & PCB Design</p>
          </div>
          <nav className="space-x-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold mb-2">Hi — I'm Yogesh.</h2>
            <p className="text-lg text-gray-700 mb-4">
              Electronics & Communication undergraduate at Bipin Tripathi Kumaon Institute of Technology (BTKIT) — building embedded systems, designing PCBs, and developing hardware projects. I enjoy competitive programming, kabaddi, and solving electronics puzzles.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg">Contact me</a>
              <a href="#projects" className="inline-block px-4 py-2 border border-gray-300 rounded-lg">See projects</a>
              <a href="/resume.pdf" className="inline-block px-4 py-2 border border-gray-300 rounded-lg" download>Download CV</a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <img src={profilePic} alt="Yogesh Jeena" className="w-32 h-32 rounded-full object-cover mb-4" />
            <p className="text-sm text-center text-gray-600">Jeolikote, Nainital, Uttarakhand • Open to internships & collaborations</p>
          </div>
        </section>
      </main>
    </div>
  );
}
