async function main() {
  // Récupérer le contrat MyToken
  const MyToken = await ethers.getContractFactory("MyToken");
  
  // Déployer le contrat avec les paramètres de nom et symbole
  const myToken = await MyToken.deploy("MyToken", "MTK");

  // Attendre que le contrat soit déployé
  await myToken.deployed();

  console.log("MyToken déployé à l'adresse:", myToken.address);
}

// Exécuter le script avec async/await et gestion des erreurs
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
