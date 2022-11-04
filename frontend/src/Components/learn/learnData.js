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
        answer: 'question not answered',
        topic: 'cryptocurrency',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
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
        answer: 'question not answered',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
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
        question: 'question',
        answer: 'question not answered',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 19,
        question: 'question',
        answer: 'question not answered',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 20,
        question: 'question',
        answer: 'question not answered',
        topic: 'bitcoin',
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
        question: 'question',
        answer: 'question not answered',
        topic: 'bitcoin',
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
        question: 'question',
        answer: 'question not answered',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 25,
        question: 'question',
        answer: 'question not answered',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
        {
        qid: 26,
        question: 'question',
        answer: 'question not answered',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    },
    {
        qid: 27,
        question: 'question',
        answer: 'question not answered',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'url'
    }
]

export default learnData;
