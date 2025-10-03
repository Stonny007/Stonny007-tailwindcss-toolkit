# Stonny007-tailwindcss-toolkit
Beginner’s Toolkit for TailwindCSS – Capstone Project
🌟 TailwindCSS Toolkit

A beginner-friendly toolkit for exploring TailwindCSS, built as part of the Moringa AI Capstone Project. This project demonstrates how to set up, style, and experiment with Tailwind to build responsive, modern UIs.

📋 Description

This project is a starter pack for developers who want to quickly learn TailwindCSS by building and testing real UI components. It showcases:

Direct Tailwind usage with utility classes

Custom styling with input.css

Compiled CSS with output.css

A working HTML example to see Tailwind in action

It is designed to help absolute beginners get comfortable with Tailwind and understand how to structure projects using it.

🚀 Features

⚡ Zero config quickstart — just clone, run Tailwind, and code

🎨 Responsive UI examples with Tailwind utilities

📝 Documentation (toolkit.md) explaining concepts and exercises

🔧 Custom build support with input.css and compiled output.css

📦 Simple file structure for learning, no extra complexity

🛠️ Technologies Used

HTML5 — Base structure

TailwindCSS — Styling framework

PostCSS / CLI — For compiling Tailwind (optional)

📦 Installation
Prerequisites

Node.js (v16+)

npm or yarn

Setup Instructions

Clone the repository

git clone https://github.com/Stonny007/Stonny007-tailwindcss-toolkit.git
cd Stonny007-tailwindcss-toolkit


Install Tailwind

npm init -y
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init


Build CSS

npx tailwindcss -i ./input.css -o ./output.css --watch


Open in browser
Just open index.html to see the styled example. 🎉

📁 Project Structure
tailwindcss-toolkit/
├── index.html      # Working example with Tailwind classes
├── input.css       # Tailwind directives (@tailwind base, etc.)
├── output.css      # Compiled Tailwind (not usually pushed)
├── README.md       # Project info (this file)
└── toolkit.md      # Full capstone doc with exercises

🎯 Usage

Edit index.html → Play with Tailwind classes

Add custom styles in input.css → Rebuild with Tailwind

Read toolkit.md → Follow along with exercises and notes

🤝 Contributing

Contributions welcome!

Fork the repo

Create a feature branch

Commit your changes

Push & open a Pull Request

📝 License

This project is licensed under the MIT License.

🔥 Happy Tailwinding! 🎉