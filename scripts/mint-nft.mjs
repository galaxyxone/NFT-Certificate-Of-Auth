const CONTRACT_ADDRESS = "0x7A0cd5be892dA8FE29357c91910F2475746979be"
const META_DATA_URL = "ipfs://bafyreibhxhc5pkbj3nzz5hnilnez43zqdd5oxa64r3lxjny2p7lv6tgzfa/metadata.json"

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