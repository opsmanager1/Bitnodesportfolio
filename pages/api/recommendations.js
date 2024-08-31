// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Empeira',
    image: "images/Empeira.png",
    designation: 'Cosmos SDK',
    view: "End-to-End Verifiable Data Infrastructure (EVDI) Unlock the potential of verifiable data with Empeiria EVDI. Build easily deployable, innovative solutions, seamlessly bridging off-chain and on-chain worlds, empowering organizations to embrace Web3 technology.🌟",
    linkednURL: "https://empe.io/"
  },
  {
    id: 1,
    name: 'Fiamma',
    image: "images/170712823.png",
    designation: 'Cosmos SDK',
    view: "ZK Applications Enjoy first-class verification service with ~99% reduction in verification cost and verification time reduced from hours to seconds. Hand over the technical hurdles arising from incompatibility of various proof systems and L1 chains to us. Leverage the highest level of security and decentralization of BTC network.",
    linkednURL: "https://fiammachain.io/"
  },
  {
    id: 2,
    name: 'Nasir Khan',
    image: "images/nasir.jpg",
    designation: 'MERN | JavaScript | Tailwind | Sass | Bootstrap',
    view: "I wholeheartedly recommend Osama as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Osama's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "https://www.linkedin.com/in/nasirkhan22/"
  },
  {
    id: 3,
    name: 'Muhammad Ullah',
    image: "images/muhammad.jpeg",
    designation: 'MERN Stack Developer at Productbox',
    view: "I highly recommend Osama Javed for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
