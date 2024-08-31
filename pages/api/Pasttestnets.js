
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
    name: 'Avail',
    image: "images/663ba3a5d7d40cc8b0e82af2_Avail.png",
    designation: 'Modular Polygon SDK',
    view: "Avail is a Web3 infrastructure layer that allows modular execution layers to scale and interoperate in a trust minimized way.",
    linkednURL: "https://www.availproject.org/"
  },
  {
    id: 2,
    name: 'Side protocol',
    image: "images/ywO_kmkx_400x400.jpg",
    designation: 'Cosmos SDK',
    view: "Employ a novel approach by introducing a native extension layer optimized to unlock the potential of the Bitcoin-centric ecosystem.",
    linkednURL: "https://side.one/"
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
