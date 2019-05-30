// module.exports = {
//   client: {
//     service: {
//       name: 'local-service',
//       localSchemaFile: './schema.json'
//     },
//     includes: ['./graphql/**/*.ts']
//   }
// };

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
