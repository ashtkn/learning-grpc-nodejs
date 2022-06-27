import { credentials, Metadata } from '@grpc/grpc-js'

import { GreeterClient } from '../generated/hello_grpc_pb'
import { HelloRequest } from './../generated/hello_pb'

const main = async () => {
  const client = new GreeterClient(
    'localhost:50051',
    credentials.createInsecure()
  )
  const metadata = new Metadata()

  const request = new HelloRequest()
  request.setId(1)
  request.setName('John')

  client.sayHello(request, metadata, (err, data) => {
    if (err) {
      console.error(err)
    } else {
      if (data) console.log(`Received: ${data.getMessage()}`)
    }
    client.close()
  })
}

main()
