## Deployment
contract address (Rinkeby): [0xdeae6e0d3026ce83d012f4e9cca521c526069bed](https://rinkeby.etherscan.io/address/0xdeae6e0d3026ce83d012f4e9cca521c526069bed)

## Development
node version: 10.24.1
Truffle version: 4.1.14
web3 version: 0.20.6 (web3.min.js from https://github.com/ChainSafe/web3.js/blob/v0.20.6/dist/web3.min.js; 1.7.1 does not work)

dev steps:
```bash
nvm use 10

npm install truffle@4.1.14 --save

npx truffle compile
npx truffle test
npx truffle migrate --reset

npm run dev

npm install truffle-hdwallet-provider --save
npx truffle migrate --reset --network rinkeby
```

## UML

![/img/activity_diagram.png](Activity Diagram)
![/img/sequence_diagram.png](Sequence Diagram)
![/img/state_diagram.png](State Diagram)
![/img/class_diagram.png](Class Diagram)

