
# Chatbot Generator Web App

This project allows users to generate an embeddable chatbot script using a unique SDN token. After generating, the user can copy and paste the script into any website to display an interactive chatbot widget.

# Live Demo URL: 
https://tecosys-assignment-cd53mc2ty-shubhams-projects-17595800.vercel.app/

# Features:

Generate unique SDN Token using Email and Website URL

Auto generate embed script

Mobile responsive chatbot widget

Copy to clipboard support

Works on any external website

Open/Close chatbot floating UI

# Tech Stack:
Frontend: React, TailwindCSS, Vite
Backend: Node.js, Express
Deployment: Vercel (Frontend), Render (Backend)


# Installation Instructions:

  # Backend Setup:

Navigate to backend folder

Run: npm install

Create .env file with:

PORT=5000
CDN_DOMAIN=https://your-backend-domain

WIDGET_DOMAIN=https://your-backend-domain

Start the backend server with:

node src/server.js

 # Frontend Setup:

Navigate to client folder

Run: npm install

Start frontend:
npm run dev

Usage Instructions:

Open the live web app

Enter your email and website URL

Click "Generate Script"

Copy the generated script:

<script src="https://cdn.yourdomain.com/embed.js" data-sdn="YOUR_GENERATED_SDN" async> </script>

Paste the script anywhere inside the HTML of a website (preferably before closing body tag)

Refresh the website and the chatbot will appear.
