Prerequisites:

Make sure you have the following installed:

1.Node.js 

2.MongoDB 

3.Parcel (for frontend bundling)

Step 1: Clone the Repository
git clone <your-repository-url>
cd <your-project-folder>

Step 2: Install Dependencies
Run the following command in the root folder to install both frontend and backend dependencies:
npm install

Step 3: Set Up Environment Variables
Create a .env file in the root directory and add the following:
PORT=5000
MONGO_URI=url
JWT_SECRET=your_secret_key

Step 4: Start the Backend
npm run dev
The backend will be running at http://localhost:5000/.

Step 6: Start the Frontend
npm run front
The frontend should now be accessible at http://localhost:3000/.

Technologies Used
Frontend
Parcel – Bundler for fast development

React – UI framework for building dynamic components

React Router – For client-side routing

Axios – To handle API requests

Backend
Node.js – JavaScript runtime

Express.js – Backend framework for handling API requests

MongoDB – NoSQL database to store users, blogs, and comments

Mongoose – ODM for interacting with MongoDB

JWT (JSON Web Token) – For user authentication