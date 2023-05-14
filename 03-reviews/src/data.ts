interface Review {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Masab",
    job: "frontEnd developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "As a front-end developer specializing in Web 3.0 applications, I am passionate about creating cutting-edge, decentralized, and user-centric experiences for the next generation of the web.",
  },
  {
    id: 2,
    name: "Ali",
    job: "web designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "As a web designer for Web3.0 apps, I am passionate about creating immersive and engaging user experiences that leverage the latest advancements in blockchain technology.",
  },
  {
    id: 3,
    name: "jones",
    job: "Web3.0 developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "As a Web3.0 developer, my passion lies in building decentralized applications that leverage blockchain technology to deliver innovative solutions. ",
  },
  {
    id: 4,
    name: "mustafa",
    job: "cloud engineer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "As a cloud engineer for web3.0 apps, my focus is on designing and implementing scalable and reliable cloud architectures to support the needs of these innovative applications. ",
  },
];

export default reviews;
