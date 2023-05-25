interface Questions {
  id: number;
  title: string;
  info: string;
}

const questions: Questions[] = [
  {
    id: 1,
    title: "What is web3.0?",
    info: "Web3.0 is the next evolution of the internet, also known as the decentralized web. It is designed to give users more control over their data and online interactions by leveraging blockchain technology and decentralized protocols.",
  },
  {
    id: 2,
    title: "What is blockchain technology?",
    info: "Blockchain is a distributed digital ledger that records transactions across multiple nodes in a secure and transparent manner. It is the technology that underpins cryptocurrencies like Bitcoin and Ethereum.",
  },
  {
    id: 3,
    title: "What are smart contracts?",
    info: "Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They are stored on a blockchain network and automatically execute when certain conditions are met.",
  },
  {
    id: 4,
    title: "What is a decentralized application (DApp)?",
    info: "A decentralized application (DApp) is an application that runs on a decentralized network, such as a blockchain. DApps have the potential to be more secure, transparent, and censorship-resistant than traditional centralized applications.",
  },
  {
    id: 5,
    title: "What is a non-fungible token (NFT)?",
    info: "A non-fungible token (NFT) is a unique digital asset that is stored on a blockchain. NFTs can represent anything from artwork to virtual real estate, and they have the potential to revolutionize the way we think about ownership and value.",
  },
];

export default questions;
