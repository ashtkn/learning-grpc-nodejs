// GENERATED CODE -- DO NOT EDIT!

// package: hello
// file: hello.proto

import * as hello_pb from './hello_pb'
import * as grpc from '@grpc/grpc-js'

interface IGreeterService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sayHello: grpc.MethodDefinition<hello_pb.HelloRequest, hello_pb.HelloResponse>
}

export const GreeterService: IGreeterService

export interface IGreeterServer extends grpc.UntypedServiceImplementation {
  sayHello: grpc.handleUnaryCall<hello_pb.HelloRequest, hello_pb.HelloResponse>
}

export class GreeterClient extends grpc.Client {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  )
  sayHello(
    argument: hello_pb.HelloRequest,
    callback: grpc.requestCallback<hello_pb.HelloResponse>
  ): grpc.ClientUnaryCall
  sayHello(
    argument: hello_pb.HelloRequest,
    metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
    callback: grpc.requestCallback<hello_pb.HelloResponse>
  ): grpc.ClientUnaryCall
  sayHello(
    argument: hello_pb.HelloRequest,
    metadata: grpc.Metadata | null,
    options: grpc.CallOptions | null,
    callback: grpc.requestCallback<hello_pb.HelloResponse>
  ): grpc.ClientUnaryCall
}
