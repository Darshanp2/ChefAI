Chef AI:

A React web app where users can input ingredients to discover recipes powered by Hugging Face's Mistral AI API. Simply enter what you have, and get delicious recipe ideas in seconds!

Features:

Ingredient Input: Enter a list of ingredients you have on hand.

AI-Powered Recipes: Fetch recipe suggestions via the Mistral AI model from Hugging Face.

User-Friendly Interface: Clean and responsive design for seamless interaction.

Tech Stack: 

Frontend: React

Backend: Node.js (for API handling)

AI API: Hugging Face (Mistral AI)


Installation:

Clone the repository:

git clone https://github.com/Darshanp2/ChefAI.git

cd ChefAI

Install dependencies:

npm install

ADD HUGGING_FACE_API_KEY in AI.js:
const HF_TOKEN =your_api_key_here


Client (React app):

npm start

Open the app in your browser (typically at http://localhost:3000).

1. Enter the ingredients you want to use.

2. Click the button to generate recipes.

3. View the recipe ideas returned by the AI.
