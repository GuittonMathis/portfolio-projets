// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract MyToken is ERC20, Ownable, Pausable {
    uint256 private _maxTransferAmount;

    // Ajouter l'événement qui sera émis à chaque mise à jour de la limite de transfert
    event MaxTransferAmountUpdated(uint256 newMaxTransferAmount);

    // Constante pour l'approvisionnement initial
    uint256 constant INITIAL_SUPPLY = 1000000 * 10 ** 18; // 1 million de tokens

    // Constructor : création de 1 million de tokens lors du déploiement
    constructor(string memory tokenName, string memory tokenSymbol) ERC20(tokenName, tokenSymbol) {

        _maxTransferAmount = INITIAL_SUPPLY; // Utilisation de la constante
        _mint(msg.sender, INITIAL_SUPPLY);   // Mint initial avec la constante
        _maxTransferAmount = 1000 * 10 ** decimals(); // Réinitialisation de la limite de transfert
    }

    // Getter pour récupérer la limite de transfert
    function maxTransferAmount() public view returns (uint256) {
        return _maxTransferAmount;
    }

    // Fonction pour pauser les transferts (accessible uniquement à l'owner)
    function pause() public onlyOwner {
        _pause();
    }

    // Fonction pour unpauser les transferts (accessible uniquement à l'owner)
    function unpause() public onlyOwner {
        _unpause();
    }

    // Fonction pour mettre à jour la limite de transfert
    function setMaxTransferAmount(uint256 amount) public onlyOwner {
        _maxTransferAmount = amount;
        // Émettre un événement chaque fois que la limite est modifiée
        emit MaxTransferAmountUpdated(amount);
    }

    // Override pour bloquer les transferts si le contrat est en pause ou si la limite de transfert est dépassée
    function _beforeTokenTransfer(address from, address to, uint256 amount) internal whenNotPaused override {
        require(amount <= _maxTransferAmount, "Transfer amount exceeds the max transfer limit");
        super._beforeTokenTransfer(from, to, amount);
    }
}
