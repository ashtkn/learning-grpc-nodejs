import grpc from 'grpc'

import { GreeterService, IGreeterServer } from './../generated/hello_grpc_pb'
import { HelloResponse } from './../generated/hello_pb'

const bootstrap = async () => {
  const server = new grpc.Server()
  server.addService<IGreeterServer>(GreeterService, {
    sayHello: (call, callback) => {
      const response = new HelloResponse()
      response.setMessage(
        `こんにちわ ID: ${call.request.getId()} + ${call.request.getName()}`
      )
      callback(null, response)
    },
  })

  const serverCredentials = grpc.ServerCredentials.createInsecure()
  server.bind('127.0.0.1:50051', serverCredentials)
  console.log('gRPC server running at http://127.0.0.1:50051')

  server.start()
}

bootstrap()
