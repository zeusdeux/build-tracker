const withPostgres = require('@zeusdeux/plugin-with-postgres').default;
const { BudgetLevel, BudgetType } = require('@zeusdeux/types');

module.exports = withPostgres({
  artifacts: {
    groups: [
      {
        name: 'Web App',
        artifactMatch: /^app\/client/,
        budgets: [{ level: BudgetLevel.ERROR, sizeKey: 'gzip', type: BudgetType.SIZE, maximum: 150000 }]
      }
    ]
  },
  defaultBranch: 'next',
  pg: {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  },
  port: process.env.PORT,
  url: 'https://build-tracker-demo.herokuapp.com'
});
