// package: hello
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from 'grpc'
import * as hello_pb from './hello_pb'

interface IGreeterService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sayHello: IGreeterService_ISayHello
}

interface IGreeterService_ISayHello
  extends grpc.MethodDefinition<hello_pb.HelloRequest, hello_pb.HelloResponse> {
  path: string // "/hello.Greeter/SayHello"
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<hello_pb.HelloRequest>
  requestDeserialize: grpc.deserialize<hello_pb.HelloRequest>
  responseSerialize: grpc.serialize<hello_pb.HelloResponse>
  responseDeserialize: grpc.deserialize<hello_pb.HelloResponse>
}

export const GreeterService: IGreeterService

export interface IGreeterServer {
  sayHello: grpc.handleUnaryCall<hello_pb.HelloRequest, hello_pb.HelloResponse>
}

export interface IGreeterClient {
  sayHello(
    request: hello_pb.HelloRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: hello_pb.HelloResponse
    ) => void
  ): grpc.ClientUnaryCall
  sayHello(
    request: hello_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: hello_pb.HelloResponse
    ) => void
  ): grpc.ClientUnaryCall
  sayHello(
    request: hello_pb.HelloRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: hello_pb.HelloResponse
    ) => void
  ): grpc.ClientUnaryCall
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  )
  public sayHello(
    request: hello_pb.HelloRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: hello_pb.HelloResponse
    ) => void
  ): grpc.ClientUnaryCall
  public sayHello(
    request: hello_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: hello_pb.HelloResponse
    ) => void
  ): grpc.ClientUnaryCall
  public sayHello(
    request: hello_pb.HelloRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: hello_pb.HelloResponse
    ) => void
  ): grpc.ClientUnaryCall
}
