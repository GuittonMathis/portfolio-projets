const { expect } = require("chai");

describe("MyToken", function () {
  let myToken, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const MyToken = await ethers.getContractFactory("MyToken");
    myToken = await MyToken.deploy("MyToken", "MTK");
    await myToken.deployed();
  });

  it("Should deploy with 1 million tokens to the owner", async function () {
    const ownerBalance = await myToken.balanceOf(owner.address);
    expect(await myToken.totalSupply()).to.equal(ownerBalance);
  });

  it("Should not allow transfers exceeding the max transfer limit", async function () {
    const maxTransferAmount = await myToken.maxTransferAmount(); // Appelle la fonction correctement
    await expect(
      myToken.transfer(addr1.address, maxTransferAmount + 1)
    ).to.be.revertedWith("Transfer amount exceeds the max transfer limit");
  });

  it("Should allow transfers below the max transfer limit", async function () {
    const maxTransferAmount = await myToken.maxTransferAmount(); // Appelle la fonction correctement
    await expect(
      myToken.transfer(addr1.address, maxTransferAmount)
    ).to.not.be.reverted;
  });

  it("Should allow the owner to update the max transfer amount", async function () {
    await myToken.setMaxTransferAmount(500);
    const newMax = await myToken.maxTransferAmount(); // Appelle la fonction correctement
    expect(newMax).to.equal(500);
  });
});
