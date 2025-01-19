export default () => ({
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  },
  database: {
    type: 'mysql',            // Change from sqlite to mysql
    host: process.env.DB_HOST || 'localhost', // MySQL host (for Docker, this might be a different hostname or service name)
    port: process.env.DB_PORT || 3306,        // Default MySQL port
    username: process.env.DB_USER || 'root',  // MySQL username
    password: process.env.DB_PASSWORD || 'root', // MySQL password
    database: process.env.DB_NAME || 'ktncm',    // Database name
  }
}); 