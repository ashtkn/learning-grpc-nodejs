import grpc from 'grpc'

import { GreeterClient } from '../generated/hello_grpc_pb'
import { HelloRequest } from './../generated/hello_pb'

const main = async () => {
  const client = new GreeterClient(
    '127.0.0.1:50051',
    grpc.credentials.createInsecure()
  )
  const metadata = new grpc.Metadata()

  const request = new HelloRequest()
  request.setId(1)
  request.setName('John')

  client.sayHello(request, metadata, (err, data) => {
    if (err) {
      console.error(err)
    } else {
      console.log(`Received: ${data.getMessage()}`)
    }
    client.close()
  })
}

main()
