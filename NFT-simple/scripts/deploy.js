// Importa ethers desde el paquete Hardhat
const { ethers } = require("hardhat");


async function main() {
  /*
Un ContractFactory en ethers.js es una abstracción utilizada para implementar nuevos contratos inteligentes, así que nftSimpleContract aquí es una fábrica para instancias de nuestro contrato AW3NFT.
*/
  const nftSimpleContract = await ethers.getContractFactory("AW3NFT");


  // aquí nosotros realizamos el deploy del contrato 
  const deployedNFTSimpleContract = await nftSimpleContract.deploy();


  // esperamos a que el contrato termine de realizar el deploy
  await deployedNFTSimpleContract.deployed();


  // imprimimos la dirección del contrato desplegado
  console.log("NFT Contract Address:", deployedNFTSimpleContract.address);
}


// Llamamos a la función main y controlamos si hubiera cualquier error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });