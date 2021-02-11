cube(`Transactions`, {
  sql: `SELECT * FROM epesi_development.transactions`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [appid, clientid, deviceid, devicename, duedate, fleetid, name, productid, productname, terminalid, timestamp]
    },
    
    expectedamount: {
      sql: `${CUBE}.\`expectedAmount\``,
      type: `sum`
    },
    
    quantity: {
      sql: `quantity`,
      type: `sum`
    },
    
    total: {
      sql: `total`,
      type: `sum`
    }
  },
  
  dimensions: {
    appid: {
      sql: `appid`,
      type: `string`
    },
    
    cashier: {
      sql: `cashier`,
      type: `string`
    },
    
    clientid: {
      sql: `clientid`,
      type: `string`
    },
    
    deviceid: {
      sql: `deviceid`,
      type: `string`
    },
    
    devicename: {
      sql: `devicename`,
      type: `string`
    },
    
    duedate: {
      sql: `${CUBE}.\`dueDate\``,
      type: `string`
    },
    
    fleetid: {
      sql: `fleetid`,
      type: `string`
    },
    
    mobilenumber: {
      sql: `mobilenumber`,
      type: `string`
    },
    
    mode: {
      sql: `mode`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    paymenttype: {
      sql: `${CUBE}.\`paymentType\``,
      type: `string`
    },
    
    productid: {
      sql: `productid`,
      type: `string`
    },
    
    productname: {
      sql: `productname`,
      type: `string`
    },
    
    regamount: {
      sql: `${CUBE}.\`regAmount\``,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    terminalid: {
      sql: `terminalid`,
      type: `string`
    },
    
    tickno: {
      sql: `tickno`,
      type: `string`
    },
    
    vehicleno: {
      sql: `vehicleno`,
      type: `string`
    },
    
    insertedat: {
      sql: `${CUBE}.\`insertedAt\``,
      type: `time`
    },
    
    timestamp: {
      sql: `timestamp`,
      type: `time`
    }
  }
});
