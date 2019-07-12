const withPostgres = require('@zeusdeux/plugin-with-postgres').default;
const { BudgetLevel, BudgetType } = require('@zeusdeux/types');

const { config } = require('dotenv');
config();

module.exports = withPostgres({
  defaultBranch: 'next',
  dev: true,
  artifacts: {
    groups: [
      {
        name: 'Web App',
        artifactMatch: /^app\/client/,
        budgets: [{ level: BudgetLevel.ERROR, sizeKey: 'gzip', type: BudgetType.SIZE, maximum: 150000 }]
      }
    ]
  },
  pg: {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  },
  url: 'http://localhost:3000'
});
