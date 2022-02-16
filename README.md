# node-klarna

API Wrapper for Klarna with OSSPIM helper functions

## Install

Add wrapper as dependency:

```shell
yarn add @osspim/node-klarna

```

Or, if you prefer NPM:

```shell
npm install @osspim/node-klarna
```

## Usage

### Klarna Library

Initialize the Klarna library:

```javascript
const {Klarna} = require('@osspim/node-klarna')

const klarna = new Klarna({
    username: 'username provided by Klarna',
    password: 'password provided by Klarna',
    apiEndpoint: 'api.playground.klarna.com', // Optional, this value by default
    logs: { // Optional, logs disabled by default
        enabled: false,
        useNodeEnv: true, // Use NODE_ENV variable, logs enabled in non 'production' environment
    }
})
```

Create Klarna order using the library:

```javascript
const response = await klarna.checkoutV3.createOrder({
    // body structure follows Klarna API spec
})
```

The library has also built-in TypeScript support:

```typescript
import {OrderBody, OrderResponse} from '@osspim/node-klarna'

const body: OrderBody = {
    // ...
}

const response: OrderResponse = await klarna.checkoutV3.createOrder(body)
```

### OSSPIM Klarna helpers

Initialize OSSPIM helpers:

```javascript
const {OSSPIMKlarnaHelpers} = require('@osspim/node-klarna');

const osspimKlarnaHelpers = new OSSPIMKlarnaHelpers({
    host_uri: 'http://localhost:3000',
    purchase_country: 'NO',
    logs: { // Optional, logs disabled by default
        enabled: false,
        useNodeEnv: true, // Use NODE_ENV variable, logs enabled in non 'production' environment
    }
    // And other defaults
})
```

Generate Klarna order body from OSSPIM order items:

```javascript
const klarnaOrderBody = osspimKlarnaHelpers.getOrderBody(osspimLineItems);
```



# node-klarna
