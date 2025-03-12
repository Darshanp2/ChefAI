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

ADD HUGGING_FACE_API_KEY in AI.js 
const HF_TOKEN =your_api_key_here

Start the development servers:

Client (React app):

npm start

Open the app in your browser (typically at http://localhost:3000).

Enter the ingredients you want to use.

Click the button to generate recipes.

View the recipe ideas returned by the AI.