require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remain eternal gesture nature sure tenant'; 
let testAccounts = [
"0xb8d2be758e4644a535a1a5beaa1c2b4c7ddcb8576003bb436da5f4ff2d2a59d7",
"0x018c4bb71e7f7687fa55d78d9c64223d356f57ad29ecba0c60e5cf7b61258421",
"0x530d221bbdf45de3c3e8ce90b7b8994df82aa11709663aea76c894831b283826",
"0x90487db004631625068fa8e4524b725c3c331402c0b632c471adbfcf58ed71f2",
"0xf7e0545b631503d4e427a697393925dc8a0cc62ae3d91d4aab6569fae2e5f4d2",
"0xa885b66c35405d86b0c8055f2bcc8e01a7dad9398362765d7d1d38c48ceea28c",
"0x4a0bd99dd1489d880a06127df49cb9a22572da939d4fd01859c1cbd7effdbd2a",
"0x0b73a2210b20cc99ac29fb204d904103620fb35675a3f265347b056fcddcc3f6",
"0xa55acdd4a21534db703ea6a1fa6f3983078bb20bf93fb8aa888b903b4fc68871",
"0x3b8654f9039c8018f28a93c657218a3aa64a25fc4e6e0e62e6deb0ac9eaf15d4"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
