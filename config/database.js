
// Provides Cryptographic Functionality
const crypto = require('crypto').randomBytes(256).toString('hex');

// Export Config Object
module.exports = {
  uri: 'mongodb://localhost:27017/eventsearcher',
  secret: crypto,
  db: 'eventsearcher'
};
