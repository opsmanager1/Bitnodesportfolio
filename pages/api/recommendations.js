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
    name: 'Rivalz',
    image: "y4duuVf2_400x400.png",
    designation: 'Dymension Rollapp',
    view: "The Rivalz[NET] Protocol, or RNET, focuses on the application of our data layer towards AI use cases. Within RNET, we will focus on building a number of AI related products that can be used as part of our offering to businesses, as well as stand-alone products. While initially, our data layer will draw upon information sourced from RX, contributed by users, our mid-term strategy prioritizes third-party entities as the primary data source. This strategic shift aims to enable any AI agent to consume information within our data repository or engage in inter-agent communication. Leveraging the capabilities of Axelar, our platform will facilitate cross-chain solutions, positioning it as a central nexus within the broader crypto ecosystem.",
    linkednURL: "https://rivalz.ai/dashboard"
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
