
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
    name: 'Taiko',
    image: "images/original-1348331c2846a04355261f363fb75f0c.png",
    designation: 'ZK-EVM',
    view: "Taiko is an Ethereum-equivalent (Type 1) ZK-EVM, maximally compatible with Ethereum. No additional compiling, reaudits, or tooling needed. Everything works out of the box, guaranteed.",
    linkednURL: "https://taiko.xyz/"
  },
]
export default function handler(req, res) {
  res.status(200).json(Pasttestnetscard)
}
