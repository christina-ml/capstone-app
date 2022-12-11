const learnData = [
    {
        qid: 1,
        question: 'What is cryptocurrency?',
        answer: 'Cryptocurrency is a digital currency in which transactions are verified and records maintained by a decentralized system using cryptography, rather than by a centralized authority.',
        topic: 'cryptocurrency',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://www.coatsrose.com/2021/07/15/taking-the-cryptic-out-of-cryptocurrency-in-estate-planning-part-i/#:~:text=What%20Is%20Cryptocurrency%3F,i.e.%2C%20a%20sovereign%20government).'
    },
    {
        qid: 2,
        question: 'Why are there so many cryptocurrencies?',
        answer: 'Most cryptocurrencies today are derived in some form or another from Bitcoin, which uses open-source code and a censorship-resistant architecture. This means anyone can copy and tweak the code and create their own new coin.',
        topic: 'cryptocurrency',
        skillLevel: 'intermediate',
        category: 'crypto basics',
        source: 'https://www.investopedia.com/tech/most-important-cryptocurrencies-other-than-bitcoin/'
    },
    {
        qid: 3,
        question: 'Why do we need cryptocurrencies? What are the advantages?',
        answer: `Transactional freedom, security, and ease of transaction are among the most important advantages of cryptocurrency. Many cryptos are designed to have unique advantages over fiat currencies or the traditional banking system, even if they don't have widespread use or adoption yet.`,
        topic: 'cryptocurrency',
        skillLevel: 'expert',
        category: 'crypto basics',
        source: 'https://www.sofi.com/learn/content/benefits-of-crypto/'
    },
    {
        qid: 4,
        question: 'Why are cryptocurrency prices so volatile?',
        answer: `Bitcoin's price fluctuates because it is influenced by supply and demand, investor and user sentiments, government regulations, and media hype. All of these factors work together to create price volatility.`,
        topic: 'cryptocurrency',
        skillLevel: 'intermediate',
        category: 'crypto basics',
        source: 'https://www.investopedia.com/articles/investing/052014/why-bitcoins-value-so-volatile.asp#:~:text=Why%20Does%20BTC%20Fluctuate%20so,together%20to%20create%20price%20volatility.'
    },
    {
        qid: 5,
        question: 'Who is Satoshi Nakamoto? Why are they important?',
        answer: `The world of crypto has produced one of the biggest mysteries of the 21st century: Who Is Satoshi Nakamoto?`,
        answer2: `Nakamoto is the anonymous individual who claims to have created Bitcoin (BTC), the world's first cryptocurrency.`,
        answer3: `While there is little doubt that the person or persons who operated under the name Satoshi Nakamoto created Bitcoin, nobody knows who he, she or they might be.`,
        topic: 'cryptocurrency',
        skillLevel: 'expert',
        category: 'crypto basics',
        source: 'https://www.forbes.com/advisor/investing/cryptocurrency/who-is-satoshi-nakamoto/'
    },
    {
        qid: 6,
        question: 'What is a bull or bear market?',
        answer: 'A bull market occurs when securities are on the rise, while a bear market occurs when securities fall for a sustained period of time',
        topic: 'cryptocurrency',
        skillLevel: 'intermediate',
        category: 'crypto basics',
        source: 'https://www.citizensbank.com/learning/bull-market-vs-bear-market.aspx#:~:text=A%20bull%20market%20occurs%20when,they%20impact%20your%20investment%20decisions.'
    },
    {
        qid: 7,
        question: 'How does cryptocurrency work?',
        answer: 'Bitcoin and most other cryptocurrencies are supported by a technology known as blockchain, which maintains a tamper-resistant record of transactions and keeps track of who owns what. The use of blockchains addressed a problem faced by previous efforts to create purely digital currencies: preventing people from making copies of their holdings and attempting to spend it twice',
        topic: 'cryptocurrency',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://www.nerdwallet.com/article/investing/cryptocurrency'
    },
    {
        qid: 8,
        question: 'How are cryptocurrencies created?',
        answer: 'One common way cryptocurrencies are created is through a process known as mining, which is used by Bitcoin. Bitcoin mining can be an energy-intensive process in which computers solve complex puzzles in order to verify the authenticity of transactions on the network. As a reward, the owners of those computers can receive newly created cryptocurrency. Other cryptocurrencies use different methods to create and distribute tokens, and many have a significantly lighter environmental impact.',
        topic: 'cryptocurrency',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://www.nerdwallet.com/article/investing/cryptocurrency'
    },
    {
        qid: 9,
        question: 'What is Bitcoin?',
        answer: 'Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, thus removing the need for third-party involvement in financial transactions. It is rewarded to blockchain miners for the work done to verify transactions and can be purchased on several exchanges.',
        answer2: 'Bitcoin was introduced to the public in 2009 by an anonymous developer or group of developers using the name Satoshi Nakamoto.',
        answer3: 'It has since become the most well-known cryptocurrency in the world. Its popularity has inspired the development of many other cryptocurrencies. These competitors either attempt to replace it as a payment system or are used as utility or security tokens in other blockchains and emerging financial technologies.',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://www.investopedia.com/terms/b/bitcoin.asp'
    },
    {
        qid: 10,
        question: 'Who is using Bitcoin?',
        answer: 'question not answered',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 11,
        question: 'Why does a cryptocurrency like Bitcoin have value?',
        answer: 'question not answered',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 12,
        question: 'How does Bitcoin work?',
        answer: 'question not answered',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 13,
        question: 'What is Bitcoin Mining?',
        answer: 'question not answered',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 14,
        question: 'Can Bitcoin be used for regular shopping/spending?',
        answer: 'question not answered',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 15,
        question: 'What is a Bitcoin halving?',
        answer: 'question not answered',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 16,
        question: 'What are the limitations of Bitcoin?',
        answer: 'question not answered',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 17,
        question: 'What is Ethereum? What does it do?',
        answer: 'question not answered',
        topic: 'ethereum',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 18,
        question: 'What is Cardano?',
        answer: 'question not answered',
        topic: 'cardano',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 19,
        question: 'What is a Stablecoin? What does it do?',
        answer: 'question not answered',
        topic: 'stablecoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 20,
        question: 'What is a Blockchain? What does it do?',
        answer: 'question not answered',
        topic: 'blockchain',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 21,
        question: 'question',
        answer: 'question not answered',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 22,
        question: 'What is Dogecoin?',
        answer: 'question not answered',
        topic: 'dogecoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 23,
        question: 'question',
        answer: 'question not answered',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 24,
        question: 'What is a non-fungible token (NFT)?',
        answer: 'question not answered',
        topic: 'NFT',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 25,
        question: 'How does an NFT have value?',
        answer: 'question not answered',
        topic: 'NFT',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
        {
        qid: 26,
        question: 'Are NFTs cryptocurrencies?',
        answer: 'question not answered',
        topic: 'NFT',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 27,
        question: 'What Are Wrapped Crypto Tokens?',
        answer: 'question not answered',
        topic: 'cryptocurrency',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    }
]

export default learnData;
