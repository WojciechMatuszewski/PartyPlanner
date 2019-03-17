module.exports = {
  client: {
    service: {
      name: 'local-service',
      localSchemaFile: './schema.json'
    },
    includes: ['./graphql/**/*.ts']
  }
};
