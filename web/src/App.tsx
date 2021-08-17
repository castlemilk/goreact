import React from 'react';
import { credentials } from "@grpc/grpc-js";
import logo from './logo.svg';
import './App.css';

import { EchoServicePromiseClient } from './lib/services/echo/echo_grpc_web_pb';
import { SimpleMessage } from './lib/services/echo/echo_pb';


export class GrpcClient {
  public readonly echo: EchoServicePromiseClient;

  constructor() {
    // this.echo = this.mapMetadata(new EchoServicePromiseClient('http://localhost:8081', null, null));
    // this.echo = this.mapMetadata(new EchoServicePromiseClient('https://server-ak2zgjnhlq-ts.a.run.app', null, null));
    this.echo = this.mapMetadata(new EchoServicePromiseClient('https://gateway-ak2zgjnhlq-ts.a.run.app', null, null));
  }

  private mapMetadata<TClient>(client: TClient): TClient {
    for (const prop in client) {
      if (typeof client[prop] !== 'function') {
        continue;
      }

      const original = client[prop] as unknown as Function;
      client[prop] = ((...args: any[]) => {
        args[1] = {
          ...args[1],
          Authorization: `YAY MY TOKEN!`,
        };
        return original.call(client, ...args);
      }) as any;
    }
    return client;
  }
}

function App() {
  var client = new GrpcClient()
  var echoRequest = new SimpleMessage().setId("1234").setNum(1234)
  console.log(echoRequest)
  client.echo.echo(echoRequest, null).then(response => {console.log(response)})
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
