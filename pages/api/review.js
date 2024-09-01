const review = [
    {
        id: 0,
        clientName: 'What is rollups? Why Initia?',
        clientLocation: 'Medium',
        clientSource: 'Feb 28, 2024',
        clientReview: 'Rollups typically refer to a method of summarizing or aggregating data in databases or spreadsheets. In the context of blockchain technology, rollups are a layer 2 scaling solution that batch transactions off-chain and then periodically record them on the main chain, reducing congestion and increasing efficiency...'
    },
    {
        id: 2,
        clientName: 'The Role of Polymer as an Interoperability Hub',
        clientLocation: 'Medium',
        clientSource: 'Feb 29, 2024',
        clientReview: 'In the dynamic landscape of blockchain technology, interoperability stands as a crucial element for achieving seamless connectivity between different networks. Within the Ethereum ecosystem, Polymer emerges as a pioneering force, serving as the Interoperability Hub that bridges various Layer 2 solutions through the Inter-Blockchain Communication Protocol... '
    },
    {
        id: 3,
        clientName: 'Polymer’s Architectural Evolution',
        clientLocation: 'Medium',
        clientSource: 'Feb 29, 2024',
        clientReview: "In the ever-evolving realm of blockchain technology, adaptability and strategic decision-making are paramount. Polymer, a pioneering project helmed by co-founders Bo Du and Peter Kim, exemplifies this ethos through its recent transition from a Cosmos app chain to an Ethereum Layer 2 solution. Central to this transformation are the insights garnered from working with the Cosmos SDK and OP Stack, shedding light on the project’s journey towards interoperability and scalability..."
    },
    {
        id: 4,
        clientName: 'Вперше Initia MoveVM',
        clientLocation: 'Medium',
        clientSource: 'Mar 18, 2024',
        clientReview: 'Вперше Initia MoveVM та модуль x/move привносять мову розумних контрактів Move до CosmosSDK з повноцінною міжблокчейновою взаємодією IBC. Move є однією з трьох віртуальних машин, доступних в переплетених ролапах Initia та Initia L1 Orchestration Layer. Initia MoveVM була створена з особливою увагою до безшовної інтеграції з CosmosSDK. Це означає, що всі активи Move обробляються як рідні активи в межах Cosmos...'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
