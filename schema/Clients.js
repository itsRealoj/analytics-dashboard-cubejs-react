cube(`Clients`, {
  sql: `SELECT * FROM epesi_development.clients`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [appid, firstname, idno, lastname, name, secondname]
    },
    
    membershipamount: {
      sql: `${CUBE}.\`membershipAmount\``,
      type: `sum`
    }
  },
  
  dimensions: {
    appid: {
      sql: `appid`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    firstname: {
      sql: `${CUBE}.\`firstName\``,
      type: `string`
    },
    
    idno: {
      sql: `${CUBE}.\`idNo\``,
      type: `string`
    },
    
    lastname: {
      sql: `${CUBE}.\`lastName\``,
      type: `string`
    },
    
    maritalstatus: {
      sql: `${CUBE}.\`maritalStatus\``,
      type: `string`
    },
    
    membershipno: {
      sql: `${CUBE}.\`membershipNo\``,
      type: `string`
    },
    
    mobilenumber: {
      sql: `mobilenumber`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    nextofkin: {
      sql: `${CUBE}.\`nextOfKin\``,
      type: `string`
    },
    
    secondname: {
      sql: `${CUBE}.\`secondName\``,
      type: `string`
    },
    
    stage: {
      sql: `stage`,
      type: `string`
    },
    
    vehicleno: {
      sql: `vehicleno`,
      type: `string`
    },
    
    vehicletype: {
      sql: `${CUBE}.\`vehicleType\``,
      type: `string`
    },
    
    insertedat: {
      sql: `${CUBE}.\`insertedAt\``,
      type: `time`
    }
  }
});
