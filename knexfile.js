module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/bw_farm_fresh_produce',
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/bw_farm_fresh_produce_test',
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    // TODO: Change this URL to that of deployed db
    connection: "postgres://localhost/webauth-iii-challenge",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  }
};
