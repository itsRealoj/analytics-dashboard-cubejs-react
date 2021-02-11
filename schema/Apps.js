cube(`Apps`, {
  sql: `SELECT * FROM epesi_development.apps`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, orgid]
    }
  },
  
  dimensions: {
    description: {
      sql: `description`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    orgid: {
      sql: `orgid`,
      type: `string`
    },
    
    settings: {
      sql: `settings`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    insertedat: {
      sql: `${CUBE}.\`insertedAt\``,
      type: `time`
    }
  }
});
