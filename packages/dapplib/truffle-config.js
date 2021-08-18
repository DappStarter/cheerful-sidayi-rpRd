require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind honey good armed fog gas'; 
let testAccounts = [
"0xadb134b9a3e3d10d4842ad8f3c2433de295bd1d8c6988029162bcba2026a95fc",
"0xd0ab77564e9fb68b5ddaf873da91d5e035aa19df41d68ebc3e93b875ecba01a9",
"0x0c3a7a7bc004c9e91b3b9f29dde1cb2c3550a14a2b39407d6463da5451682e07",
"0xca60add2a26a235487db4b2c246da034467650ba828f503238c6945b5d942230",
"0xb6cfd681ea1417c653f7056a3d5c1bd75c3afee69668a6bc712195908f3a20e4",
"0x3a7f73502a3ff21fcc14a7a247fe575e896a26f3f87ca99c8c49aa80c6d54e96",
"0x4e30217344ded00aa834e134ad9724c8fcad084cf05e3f0c98c60f9580d9a828",
"0x193c330cf54a250a584590014588a2033144821e43ff37e0a6c3e296648b4d98",
"0x486de236086fae548d3761728259bcad1ca3a9a5ccb25c01cdfbce27e45bea2c",
"0x89a14f97fd352375e40667e7787b87753a87b03fe2ec204bbe88f76b68e0b22e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

