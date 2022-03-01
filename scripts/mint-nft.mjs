const CONTRACT_ADDRESS = "0x4BF51b1d6465d78af2Fb5b427dF13b62D78B583D"
const META_DATA_URL = "ipfs://bafyreicksm5jwo7il7yzoptf66k4bqumwoeiiv5phqjyworbtnl6puoon4/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });