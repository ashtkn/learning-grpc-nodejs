import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from '@grpc/grpc-js'

import { GreeterService } from './../generated/hello_grpc_pb'
import { HelloRequest, HelloResponse } from './../generated/hello_pb'

const sayHello = (
  call: ServerUnaryCall<HelloRequest, HelloResponse>,
  callback: sendUnaryData<HelloResponse>
) => {
  const greeter = new HelloResponse()
  greeter.setMessage(
    `Hello!! Your ID is ${call.request.getId()} and your name is ${call.request.getName()}`
  )
  callback(null, greeter)
}

const bootstrap = async () => {
  const server = new Server()
  server.addService(GreeterService, { sayHello })

  const serverCredentials = ServerCredentials.createInsecure()
  server.bindAsync('127.0.0.1:50051', serverCredentials, (err, port) => {
    if (err) {
      console.error(err)
    }
    server.start()
    console.log(`Server start listening at localhost:${port}`)
  })
}

bootstrap()
