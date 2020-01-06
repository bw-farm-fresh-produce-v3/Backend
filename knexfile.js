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
    connection: "postgres://yckpaeucakrgnx:0d644077a03e414b997d5f9b49af064ca2f4aa81c6303dd8252f8163bee8b056@ec2-174-129-33-19.compute-1.amazonaws.com:5432/d83gaji8t8j5ki",
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
