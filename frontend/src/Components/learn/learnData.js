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
        question: 'How many people own Bitcoin?',
        answer: 'Since its launch in 2009, Bitcoin has become the world’s best-known and most popular cryptocurrency exchange, with more than 190 million users worldwide. Because Bitcoin lives in the digital world, Bitcoin users can send it anywhere in the world without any banking infrastructure or exchange fees, fostering peer-to-peer financial transactions.',
        answer2: 'Bitcoin is free of any government or organizational control, yet it’s also scarce. The finite supply of 21 million bitcoins worldwide has contributed to the exclusivity of this cryptocurrency and its volatility over time.',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://explodingtopics.com/blog/blockchain-stats'
    },
    {
        qid: 11,
        question: 'Why does a cryptocurrency like Bitcoin have value?',
        answer: 'Bitcoin does not have the backing of government authorities, nor does it have a system of intermediary banks to propagate its use. A decentralized network consisting of independent nodes is responsible for approving consensus-based transactions in the Bitcoin network. There is no fiat authority in the form of a government or other monetary authority to act as a counterparty to risk and make lenders whole, so to speak, if a transaction goes awry.',
        answer2: 'The cryptocurrency does display some attributes of a fiat currency system, however. It is scarce, and it cannot be counterfeited. The only way that one would be able to create a counterfeit bitcoin would be by executing what is known as a double-spend. This refers to a situation in which a user "spends" or transfers the same bitcoin in two or more separate settings, effectively creating a duplicate record.',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://www.investopedia.com/ask/answers/100314/why-do-bitcoins-have-value.asp#:~:text=The%20cryptocurrency%20does%20display%20some,known%20as%20a%20double%2Dspend.'
    },
    {
        qid: 12,
        question: 'What is Bitcoin Mining?',
        answer: 'Mining is a distributed consensus system that is used to confirm pending transactions by including them in the block chain. It enforces a chronological order in the block chain, protects the neutrality of the network, and allows different computers to agree on the state of the system. To be confirmed, transactions must be packed in a block that fits very strict cryptographic rules that will be verified by the network. These rules prevent previous blocks from being modified because doing so would invalidate all the subsequent blocks. Mining also creates the equivalent of a competitive lottery that prevents any individual from easily adding new blocks consecutively to the block chain. In this way, no group or individuals can control what is included in the block chain or replace parts of the block chain to roll back their own spends',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://bitcoin.org/en/how-it-works'
    },
    {
        qid: 13,
        question: 'How does Bitcoin work?',
        answer: `As a new user, you can get started with Bitcoin without understanding the technical details. Once you've installed a Bitcoin wallet on your computer or mobile phone, it will generate your first Bitcoin address and you can create more whenever you need one. You can disclose your addresses to your friends so that they can pay you or vice versa. In fact, this is pretty similar to how email works, except that Bitcoin addresses should be used only once.`,
        answer2: `Balances - block chain. The block chain is a shared public ledger on which the entire Bitcoin network relies. All confirmed transactions are included in the block chain. It allows Bitcoin wallets to calculate their spendable balance so that new transactions can be verified thereby ensuring they're actually owned by the spender. The integrity and the chronological order of the block chain are enforced with cryptography.`,
        answer3: `Transactions - private keys. A transaction is a transfer of value between Bitcoin wallets that gets included in the block chain. Bitcoin wallets keep a secret piece of data called a private key or seed, which is used to sign transactions, providing a mathematical proof that they have come from the owner of the wallet. The signature also prevents the transaction from being altered by anybody once it has been issued. All transactions are broadcast to the network and usually begin to be confirmed within 10-20 minutes, through a process called mining.`,
        answer4: `Processing - mining. Mining is a distributed consensus system that is used to confirm pending transactions by including them in the block chain. It enforces a chronological order in the block chain, protects the neutrality of the network, and allows different computers to agree on the state of the system. To be confirmed, transactions must be packed in a block that fits very strict cryptographic rules that will be verified by the network. These rules prevent previous blocks from being modified because doing so would invalidate all the subsequent blocks. Mining also creates the equivalent of a competitive lottery that prevents any individual from easily adding new blocks consecutively to the block chain. In this way, no group or individuals can control what is included in the block chain or replace parts of the block chain to roll back their own spends.`,
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://bitcoin.org/en/how-it-works'
    },
    {
        qid: 14,
        question: 'Can Bitcoin be used for regular shopping/spending?',
        answer: 'Bitcoin and other cryptocurrencies can be used to buy a growing range of products and services. While the number of retailers and payment processors accepting bitcoin has increased in recent years, a number of vendors are holding out.',
        answer2: 'Electronics, luxury watches, and even cars are among the items that cryptos can purchase.',
        answer3: 'While the number of institutions accepting bitcoin is growing by the day, large transactions involving it are rare. For example, very few real estate deals using cryptocurrency have been reported. Even so, it is possible to buy a wide variety of products from e-commerce websites using bitcoin. Here are some of the most active categories: Car dealerships, Technology and e-commerce products, Jewelry and expensive watches, News media, Insurance.',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://www.investopedia.com/what-can-you-buy-with-bitcoin-5179592#:~:text=Bitcoin%20and%20other%20cryptocurrencies%20can,of%20vendors%20are%20holding%20out.'
    },
    {
        qid: 15,
        question: 'What is a Bitcoin halving?',
        answer: 'A Bitcoin halving event occurs when the reward for mining Bitcoin transactions is cut in half. Halvings reduce the rate at which new coins are created and thus lower the available amount of new supply, even as demand increases.',
        answer2: 'Previous halvings have correlated with intense boom and bust cycles that have ended with higher prices than before the event. Bitcoin last halved on May 11, 2020, resulting in a block reward of 6.25 BTC.',
        answer3: 'The final halving will be in 2140 when the number of bitcoins in existence will reach the maximum supply of 21 million.',
        answer4: 'The next halving will occur in 2024, when the block reward will fall to 3.125. Over time, the impact of each halving will diminish as the block reward approaches zero.',
        topic: 'bitcoin',
        skillLevel: 'intermediate',
        category: 'crypto basics',
        source: 'https://www.investopedia.com/bitcoin-halving-4843769#:~:text=A%20Bitcoin%20halving%20event%20occurs,supply%2C%20even%20as%20demand%20increases.'
    },
    {
        qid: 16,
        question: 'What are the limitations of Bitcoin? What are the disadvantages of Bitcoin?',
        answer: `Despite its rapid growth and an increasing number of users, there are some disadvantages of Bitcoin to consider, especially if you're wondering, “Is it worth investing in Bitcoin?”`,
        answer2: `Volatility. When Bitcoin was created by Satoshi Nakamoto, a limit was set of 21 million bitcoins that could ever exist, which is why some regard Bitcoin as being absolutely scarce. This scarcity is what makes Bitcoin so valuable, but also what makes its prices vary because the price is now the only variable that can change to ensure demand.`,
        answer3: `No Government Regulations.Unlike a currency that’s regulated by a central bank, Bitcoin transactions don’t come with legal protection and typically are not reversible, which makes them susceptible to scams. Irreversible. Since Bitcoin transactions are anonymous and unregulated, another disadvantage is the lack of security. Transactions done through Bitcoin are irreversible and final, so nothing can be done if the wrong amount is sent or if it’s sent to the wrong recipient.`,
        answer4: `Limited Use. Even though there's a growing number of companies that accept Bitcoin, such as Microsoft and some Subway franchises, it's still not widely accepted. This puts a limit on where you can spend your money, unlike using a credit or debit card.`,
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://mint.intuit.com/blog/investments/pros-and-cons-of-bitcoin/'
    },
    {
        qid: 17,
        question: 'What is Ethereum? What does it do?',
        answer: `Ethereum is a blockchain-based platform best known for its cryptocurrency, ether (ETH).
        The blockchain technology that powers Ethereum enables secure digital ledgers to be publicly created and maintained.
        Bitcoin and Ethereum have many similarities but different long-term visions and limitations.
        Ethereum changed from proof of work to proof of stake in Septemeber 2022.
        Ethereum is the foundation for many emerging technological advances based on blockchain.`,
        topic: 'ethereum',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://www.investopedia.com/terms/e/ethereum.asp'
    },
    {
        qid: 18,
        question: 'What is Cardano?',
        answer: 'Cardano is a blockchain platform for changemakers, innovators, and visionaries, with the tools and technologies required to create possibility for the many, as well as the few, and bring about positive global change.',
        topic: 'cardano',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://cardano.org/'
    },
    {
        qid: 19,
        question: 'What is a Stablecoin? What does it do?',
        answer: 'Stablecoins are cryptocurrencies that attempt to peg their market value to some external reference. Stablecoins are more useful than more-volatile cryptocurrencies as a medium of exchange. Stablecoins may be pegged to a currency like the U.S. dollar or to the price of a commodity such as gold.',
        answer2: 'Stablecoins pursue price stability by maintaining reserve assets as collateral or through algorithmic formulas that are supposed to control supply. Stablecoins continue to come under scrutiny by regulators, given the rapid growth of the $153 billion market and its potential to affect the broader financial system.',
        topic: 'stablecoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://www.investopedia.com/terms/s/stablecoin.asp#:~:text=Stablecoins%20are%20cryptocurrencies%20that%20attempt,a%20commodity%20such%20as%20gold.'
    },
    {
        qid: 20,
        question: 'What is a Blockchain? What does it do?',
        answer: 'A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.',
        answer2: 'Blockchain is a type of shared database that differs from a typical database in the way that it stores information; blockchains store data in blocks that are then linked together via cryptography. As new data comes in, it is entered into a fresh block. Once the block is filled with data, it is chained onto the previous block, which makes the data chained together in chronological order.',
        answer3: 'Different types of information can be stored on a blockchain, but the most common use so far has been as a ledger for transactions. In Bitcoin’s case, blockchain is used in a decentralized way so that no single person or group has control—rather, all users collectively retain control.',
        answer4: 'Decentralized blockchains are immutable, which means that the data entered is irreversible. For Bitcoin, this means that transactions are permanently recorded and viewable to anyone.',
        topic: 'blockchain',
        skillLevel: 'intermediate',
        category: 'crypto basics',
        source: 'https://www.investopedia.com/terms/b/blockchain.asp'
    },
    {
        qid: 21,
        question: 'What are the advantages of Bitcoin?',
        answer: 'Accessibility and Liquidity. One of the biggest advantages of cryptocurrency is it often sees no borders, and Bitcoin is no exception. A major benefit of Bitcoin is that it’s a very accessible and versatile currency. Since it only takes a few minutes to transfer bitcoins to another user, it can be used to purchase goods and services from the ever-growing list of places accepting it. This makes spending money in another country and exchanging for other currencies easier, with a bonus of having little to no fees applied. Bitcoins can also be easily sold at any moment.',
        answer2: 'User Anonymity and Transparency. Although not completely anonymous, Bitcoin users are identified by numerical codes and can have multiple public keys. This ensures there’s no public tracking, and transactions can’t be traced back to the user. Despite the transactions being permanently viewable, which gives you transparency, they’re still kept safe from fraud due to the blockchain technology. On top of that, only you, as the wallet owner, would be able to know how many bitcoins you have.',
        answer3: 'Independence From Central Authority. Bitcoin is a decentralized currency, meaning it’s not regulated by a single government or central bank. This means that authorities will likely not freeze and demand your coins. There’s also no viable way that a taxation would be implemented for Bitcoin. Theoretically, this gives users autonomy and control over their money, because the price isn’t linked to government policies. And generally, cryptocurrency users view this as one of the main advantages of Bitcoin.',
        answer4: 'High Return Potential. Bitcoin prices can be highly volatile, changing drastically on a monthly and even daily basis. This goes to show that although there’s high volatility in prices, cryptocurrency users might view this as one of the benefits of Bitcoin because it can result in a high return potential. And with a growing number of users believing Bitcoin is a promising global currency, many investors and businesses have decided to adopt it. This helps with increasing the higher return potential, especially for those who bought it at a lower price.',
        topic: 'bitcoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://mint.intuit.com/blog/investments/pros-and-cons-of-bitcoin/'
    },
    {
        qid: 22,
        question: 'What is Dogecoin?',
        answer: 'Dogecoin is a cryptocurrency, like Bitcoin or Ethereum—although it’s a very different animal than either of these popular coins. Dogecoin was originally created at least in part as a lighthearted joke for crypto enthusiasts, and took its name from a once-popular meme.',
        answer2: 'Software engineers Billy Marcus and Jackson Palmer created Dogecoin in late 2013. Palmer branded the cryptocurrency’s logo using a meme popular at the time that featured the deliberately misspelled word “doge” to describe a Shiba Inu dog.',
        answer3: `“Doge was really started to poke fun at Bitcoin,” said Pat White, CEO of Bitwave. In its early days, a community of enthusiasts arranged publicity stunts to raise Dogecoin’s profile, gathering funds to send the Jamaican Bobsleigh team to the 2014 Olympics, for instance, or sponsoring a NASCAR driver.`,
        answer4: `In early 2021, Dogecoin gained cult status on Reddit’s WallStreetBets message board—the prime instigator behind the GameStop affair in January—where enthusiasts had promised to propel its value “to the moon” (that was before all discussion of crypto was banned on the subreddit).`,
        topic: 'dogecoin',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://www.forbes.com/advisor/investing/cryptocurrency/what-is-dogecoin/'
    },
    {
        qid: 23,
        question: 'What is market cap?',
        answer: 'For a cryptocurrency like Bitcoin, market capitalization (or market cap) is the total value of all the coins that have been mined. It’s calculated by multiplying the number of coins in circulation by the current market price of a single coin.',
        topic: 'cryptocurrency',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://www.coinbase.com/learn/crypto-basics/what-is-market-cap'
    },
    {
        qid: 24,
        question: 'What is a non-fungible token (NFT)?',
        answer: 'Non-fungible tokens (NFTs) are cryptographic assets on a blockchain with unique identification codes and metadata that distinguish them from each other.',
        answer2: `NFTs (non-fungible tokens) are unique cryptographic tokens that exist on a blockchain and cannot be replicated.
        NFTs can represent real-world items like artwork and real estate.
        "Tokenizing" these real-world tangible assets makes buying, selling, and trading them more efficient while reducing the probability of fraud.
        NFTs can also function to represent individuals' identities, property rights, and more.
        Collectors have sought NFTs as their value initially soared, but has since moderated.`,
        topic: 'NFT',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://www.investopedia.com/non-fungible-tokens-nft-5115211'
    },
    {
        qid: 25,
        question: 'How does an NFT have value?',
        answer: `Whether it's art or a digital collectible, one thing will definitely drive up the price of an NFT: Scarcity. What does NFT scarcity have to do with monkey JPEGs?`,
        answer2: `NFTs can be very expensive (or valuable, depending on who you ask) because they somehow managed to do the impossible: introduce scarcity into the global digital market. An NFT isn’t just an overly-expensive way to buy an image — it’s a way to own it.

        When you’re buying an NFT, you’re not just buying the image itself. You’re buying a permanent token etched on a blockchain pointing to that specific image, or digital asset. Anything goes, really. Aside from NFT art, NFT music, in-game assets, virtual land, and all sorts of other digital goods are commonly bought and sold on NFT marketplaces.`,
        answer3: `Sometimes, NFTs fetch high prices due to causes far larger in scope than art or belonging to a collection. NFTs have also been widely used as a means to raise funds, thanks to the built-in security found in blockchain-based transactions.`,
        answer4: `Eventually, NFTs may also provide non-monetary value to internet users worldwide. While limiting the supply of digital goods has helped NFT artists and project leads imbue their virtual wares with scarcity, the blockchain may also play a role in ensuring these items remain available indefinitely.

        Traditionally, digital goods were virtually unlimited in supply. Digital copies of games, books, music, and movies can theoretically be purchased an infinite number of times. You’ll never see digital goods go out of stock — but they will, at one point, cease to be sold. When digital marketplaces get shut down, it becomes impossible to acquire certain digital-only items.`,
        topic: 'NFT',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: `https://nftnow.com/guides/why-are-nfts-valuable-a-guide-to-the-merits-of-the-non-fungible/#:~:text=If%20you're%20wondering%20how,and%20art%20is%20inherently%20valuable.`
    },
    {
        qid: 26,
        question: `Are NFTs cryptocurrencies? What's the difference between NFTs and cryptocurrency?`,
        answer: `Both cryptocurrencies and NFTs use the blockchain network for ownership verification. However, unlike a cryptocurrency, an NFT can't be directly exchanged with another NFT. NFTs are sold but not traded like securities on digital exchanges. In contrast, cryptocurrencies can be traded like securities.`,
        topic: 'NFT',
        skillLevel: 'beginner',
        category: 'crypto basics',
        source: 'https://www.simplilearn.com/tutorials/blockchain-tutorial/what-is-nft#:~:text=Both%20cryptocurrencies%20and%20NFTs%20use,can%20be%20traded%20like%20securities.'
    },
    {
        qid: 27,
        question: 'What Are Wrapped Crypto Tokens?',
        answer: 'Wrapping a token is essentially swapping one token for another token in an equal amount via a smart contract, or code on the blockchain that can store and send funds. Think of it like exchanging a dollar bill for four quarters.',
        topic: 'cryptocurrency',
        skillLevel: 'intermediate',
        category: 'crypto basics',
        source: 'https://learn.robinhood.com/articles/what-are-wrapped-tokens/'
    }
]

export default learnData;
