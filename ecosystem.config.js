module.exports = {
  apps: [{
    name: 'ktncm-backend',
    script: 'dist/main.js',
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'production',
      PORT: 6969
    }
  }]
}; 