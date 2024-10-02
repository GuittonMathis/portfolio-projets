# MyToken ERC20 - Portfolio Project

## Description

**MyToken (MTK)** est un jeton ERC-20 déployé sur le réseau **Sepolia** pour démontrer mes compétences en développement de contrats intelligents sur Ethereum. Ce projet inclut les fonctionnalités standard d'un token ERC20 avec des extensions avancées telles que la **gestion de la limite de transfert** et la **mise en pause** des transferts via le propriétaire.

### Caractéristiques principales :
- **Token Standard ERC-20** : Le token suit les standards ERC-20, incluant des fonctionnalités comme `transfer`, `balanceOf`, `approve`, et `transferFrom`.
- **Gestion de la limite de transfert** : Le propriétaire peut définir une limite maximale de transfert pour protéger contre de grandes transactions inattendues.
- **Fonctionnalité de mise en pause** : Le contrat peut être mis en pause par le propriétaire, bloquant temporairement tous les transferts pour des raisons de sécurité.
- **Contrat déployé sur Sepolia** : Un réseau de test Ethereum pour la démonstration.

## Détails du Contrat

- **Adresse du contrat sur Sepolia** : `0x25424EfB1A0c34A605D674358d7Ad7d53075964b`
- **Symbol** : `MTK`
- **Nombre de jetons initial** : 1 000 000 MTK


### Contrôle des fonctionnalités :
1. **Max Transfer Amount** : Le propriétaire peut limiter la quantité maximale de jetons transférables.
2. **Pause/Unpause** : Mise en pause et reprise des transferts par le propriétaire pour des raisons de sécurité.

## Installation et Déploiement

### Prérequis
Assurez-vous d'avoir installé les éléments suivants sur votre machine :
- [Node.js](https://nodejs.org/)
- [Hardhat](https://hardhat.org/)
- [Metamask](https://metamask.io/) pour gérer vos comptes Ethereum

### Configuration des variables d’environnement

Avant de déployer le contrat, configurez les variables d’environnement dans un fichier `.env` à la racine du projet :

```bash
ALCHEMY_API_URL=https://eth-sepolia.g.alchemy.com/v2/<VOTRE_URL_ALCHEMY>
PRIVATE_KEY=<VOTRE_CLE_PRIVEE_METAMASK>
```

### Déploiement du contrat

Pour déployer le contrat sur le réseau Sepolia, exécutez la commande suivante dans votre terminal :

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### Tester le contrat

Des tests automatisés sont inclus dans le projet pour valider les fonctionnalités principales. Pour exécuter les tests, utilisez :

```bash
npx hardhat test
```

## Utilisation

### Interagir avec le contrat via Etherscan
- **Consultez et interagissez avec le contrat sur Etherscan :**
  - [Contrat sur Etherscan Sepolia](https://sepolia.etherscan.io/address/0x25424EfB1A0c34A605D674358d7Ad7d53075964b)

Vous pouvez utiliser l'interface Etherscan pour tester les fonctionnalités du contrat comme `transfer`, `pause`, et `setMaxTransferAmount`.

## Auteur

**Mathis** - Développeur freelance Blockchain. Si vous souhaitez en savoir plus sur ce projet ou me contacter pour des opportunités, vous pouvez me retrouver sur :

- [LinkedIn](https://www.linkedin.com)
- [GitHub](https://github.com)
