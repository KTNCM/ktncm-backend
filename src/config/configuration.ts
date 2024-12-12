export default () => ({
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  },
  database: {
    type: 'sqlite',
    database: process.env.DATABASE_FILE || 'data/kdm.sqlite',
  }
}); 