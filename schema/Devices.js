cube(`Devices`, {
  sql: `SELECT * FROM epesi_development.devices`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [appid, name]
    }
  },
  
  dimensions: {
    appid: {
      sql: `appid`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    serial: {
      sql: `serial`,
      type: `string`
    },
    
    insertedat: {
      sql: `${CUBE}.\`insertedAt\``,
      type: `time`
    }
  }
});
