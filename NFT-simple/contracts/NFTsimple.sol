// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


// Importar los contratos de openzepplin
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


// AW3NFT is ERC721 significa que el contrato que estamos creando importa ERC721 y sigue el 
// contrato ERC721 de openzeppelin
contract AW3NFT is ERC721 {


    constructor() ERC721("AW3NFT", "AW3NFT") {
        // mintea un NFT a ti mismo
        _mint(msg.sender, 1);
    }
}

