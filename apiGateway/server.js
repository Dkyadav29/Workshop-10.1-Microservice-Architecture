const gateway = require('fast-gateway')
const checkAuthentications = require("./middleware/authentication")

const port = 9001;


// gateway configuration
const server = gateway({

    middlewares:[checkAuthentications],
       routes: [{
        prefix: '/topB',
        target: 'http://localhost:8001',
        hooks :{

        },
        prefix: '/topS',
        target: 'http://localhost:8002',
        hooks :{

        }


      }]
    })
     
  

  server.get('/apiGatewayTest', (req, res) => {
    res.send({ msg: 'yes api get way run  ' })
  })
  
  server.start(port).then(server => {
      console.log('API GATEWAY RUN.')
  })



