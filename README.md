# KTNCM Backend

Backend service for the Kärnten Card Manager (KTNCM) - A platform for managing and exploring Kärnten Card destinations.

## Overview

KTNCM Backend provides the API services for managing Kärnten Card destinations, user interactions, and authentication. The service allows users to browse destinations, bookmark favorites, and track visited locations.

## Features

- **User Management**
  - User registration and authentication
  - JWT-based secure access
  - Profile management

- **Destination Management**
  - Browse all Kärnten Card destinations
  - Detailed destination information
  - Category-based sorting

- **User Interactions**
  - Bookmark favorite destinations
  - Mark destinations as visited
  - Track visit history

## Technology Stack

- **Framework**: NestJS
- **Database**: SQLite (local development)
- **Authentication**: JWT (JSON Web Tokens)
- **Documentation**: Swagger/OpenAPI
- **Configuration**: Environment variables

## Prerequisites

- Node.js (v18 or higher)
- npm or pnpm
- Git

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ktncm-backend.git

# Navigate to project directory
cd ktncm-backend

# Install dependencies
pnpm install
```

## Configuration

Create a `.env` file in the root directory:

```env
JWT_SECRET=your-super-secret-key-here
JWT_EXPIRES_IN=1h
DATABASE_FILE=data/kdm.sqlite
```

## Running the Application

```bash
# Development mode
pnpm run start:dev

# Production mode
pnpm run build
pnpm run start:prod
```

## API Documentation

Once the application is running, access the Swagger documentation at:
```
http://localhost:3000/api
```

### Main Endpoints

- `POST /auth/login` - User authentication
- `POST /users` - User registration
- `GET /destinations` - List all destinations
- `GET /destinations/:id` - Get destination details
- `POST /destinations` - Create new destination

### Authentication

The API uses JWT for authentication. To access protected endpoints:
1. Login using `/auth/login` to get a token
2. Include the token in the Authorization header: `Bearer <your_token>`

## Database Schema

### Users
- id: Primary Key
- email: String (unique)
- password: String (hashed)

### Destinations
- id: Primary Key
- name: String
- description: String
- contact: String (optional)
- address: String

### UserActions
- id: Primary Key
- userId: Foreign Key
- destinationId: Foreign Key
- visited: Boolean
- bookmark: Boolean

## Development

```bash
# Run tests
pnpm run test

# Run e2e tests
pnpm run test:e2e

# Run linting
pnpm run lint

# Run formatting
pnpm run format
```

## Project Structure

```
src/
├── auth/           # Authentication related files
├── config/         # Configuration files
├── database/       # Database configuration and utilities
├── destinations/   # Destination module
├── users/          # User module
├── entities/       # TypeORM entities
└── main.ts         # Application entry point
```

## Error Handling

The API uses standard HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Versioning

We use [SemVer](http://semver.org/) for versioning. Current version: 1.0.0

## Authors

* **Your Name** - *Initial work* - [YourGithub](https://github.com/yourusername)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* NestJS team for the excellent framework
* Kärnten Card for the inspiration

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
