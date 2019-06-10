module.exports = {
  client: {
    includes: ['./pages/**/*.tsx'],
    service: {
      name: 'my-graphql-app',
      url: 'http://localhost:4000/graphql',
      skipSSLValidation: true
    }
  }
};
