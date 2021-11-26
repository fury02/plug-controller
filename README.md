# Plug Controller - Controller functions for the Plug Extension
[![Fleek](https://img.shields.io/badge/Made%20by-Fleek-blue)](https://fleek.co/)
[![Discord](https://img.shields.io/badge/Discord-Channel-blue)](https://discord.gg/yVEcEzmrgm)

## Introduction

The Plug Controller is a package that provides utility & logic to the Plug browser wallet extension, as well as the account creation and management. It handles the interactions between the extension and the Internet Computer as users interact with accounts, balances, canisters, and the network.

## Installation

```
npm install @safik/fork_plug-controller
```

## Plug KeyRing
A Plug Keyring is a class that manages the user's accounts and allow you to create/import a mnemonic and its keypair. 
```
import PlugController from '@safik/fork_plug-controller';

const keyRing = new PlugController.PlugKeyRing();

// Initialize keyring and load state from extension storage
await keyRing.init();
```

### Keyring Creation
```
// Creates the keyring and returns the default wallet
const wallet: PlugWallet = await keyRing.create(password);
```

### Mnemonic Import
```
// Creates the keyring using the provided mnemonic and returns the default wallet
const wallet: PlugWallet = await keyRing.importFromMnemonic(mnemonic, password);
```

## Documentation

Interface and Type definitions documents for the **@Psychedelic/plug-controller** implementation is provided in the following [location](https://twilight-dream-0902.on.fleek.co/).

These are based in the `main release branch` and provide a good overview of the whole package (modules, IDL's, utils, etc).