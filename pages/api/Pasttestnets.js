
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Pasttestnetscard = [
  {
    id: 0,
    name: 'Dymension',
    image: "images/28932.png",
    designation: 'Modular Cosmos SDK / EVM compatible L1 blockchain',
    view: "RollApps are the interactive applications for the Dymension network. RollApps are their own blockchains designed for scalability and customizability. You can build games, DeFi, NFT projects and much more!",
    linkednURL: "https://dymension.xyz/"
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
    image: "images/rivalz.png",
    designation: 'Dymension Rollapp',
    view: "The Rivalz[NET] Protocol, or RNET, focuses on the application of our data layer towards AI use cases. Within RNET, we will focus on building a number of AI related products that can be used as part of our offering to businesses, as well as stand-alone products. While initially, our data layer will draw upon information sourced from RX, contributed by users, our mid-term strategy prioritizes third-party entities as the primary data source. This strategic shift aims to enable any AI agent to consume information within our data repository or engage in inter-agent communication. Leveraging the capabilities of Axelar, our platform will facilitate cross-chain solutions, positioning it as a central nexus within the broader crypto ecosystem.",
    linkednURL: "https://rivalz.ai/dashboard"
  },
  {
    id: 3,
    name: 'Story protocol',
    image: "images/8nW7W8k6CQlgIzFGPWEjmg.jpeg",
    designation: 'EVM blockchain',
    view: "Story Network is a general purpose layer 1 blockchain optimized for handling complex data structures fast and cost-efficient. It’s easy-to-use, EVM-equivalent and ready for your creativity.",
    linkednURL: "https://www.story.foundation/"
  },
]
export default function handler(req, res) {
  res.status(200).json(Pasttestnetscard)
}
