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
        clientName: 'Melissabrown255',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'He is very good with communication and experienced website developer, great experience to work with him. '
    },
    {
        id: 3,
        clientName: 'Jake Corry',
        clientLocation: 'Germany',
        clientSource: 'Fiverr',
        clientReview: "Osama is extremely knowledgeable and helpful. He knows in and out of web app development . His understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again"
    },
    {
        id: 4,
        clientName: 'Blaise Labriola',
        clientLocation: 'France',
        clientSource: 'Fiverr',
        clientReview: 'I have worked with Osama and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
