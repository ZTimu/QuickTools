# QuickTools

QuickTools is a MERN stack application that provides various utility tools for developers.

## Features

- User authentication (login/register)
- Various developer tools and utilities
- Responsive design

## Installation

```bash
# Clone the repository
git clone https://github.com/ZTimu/QuickTools.git

# Navigate to the project directory
cd QuickTools

# Install dependencies
npm install

# Create a .env file and add your environment variables
# Example:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

# Start the development server
npm run dev
```

## Technologies Used

- MongoDB
- Express.js
- Node.js
- Handlebars (for templating)
- JWT for authentication

## Project Structure

```
├── config/           # Configuration files
├── controllers/      # Route controllers
├── middleware/       # Custom middleware
├── models/           # Database models
├── public/           # Static files
├── routes/           # API routes
├── src/              # Source files
├── views/            # Handlebars views
└── server.js         # Entry point
```

## License

MIT