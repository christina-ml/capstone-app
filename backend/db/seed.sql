\c crypto_dev;

INSERT INTO users(firstname, lastname, username, user_password, user_email, user_admin, user_interests, user_city, user_state) VALUES
('Christina', 'Loiacono', 'rowboatoutraged30','PWm3dmVg','christina@coinboard.com', true, 'bitcoin, solana', 'New York City', 'New York'),
('Oliver', 'Chuzan', 'yawningkangaroo197','w74Mb7tQ','oliver@cryptoville.com', false, 'bitcoin, tether', 'Toledo', 'Ohio'),
('Deborah', 'Campos', 'peacenative441','gn5RhAyk','deb@coinreport.com', false, 'litecoin, binance USD', 'Austin', 'Texas'),
('Milton', 'Clark', 'desertloafers650','pRu7DF6Lxk','milton@mineville.com', true, 'USD coin, dogecoin', 'Greensboro', 'North Carolina'),
('Ruben', 'Profit', 'insecurepastry40','h7MVjYDQTq','rprofit@cryptodash.com', false, 'dogecoin, ethereum', 'San Jose', 'California'),
('Olivia', 'Figueroa', 'figuresneak10','x44jarGnXdH','olives@coinpixel.com', false, 'ethereum, solana', 'Tampa', 'Florida'),
('Casey', 'Hopkins', 'yikesoctopus31','P6YGheJTK','hopkinsc@cryptostyle.org', false, 'binance, bitcoin', 'Santa Ana', 'California'),
('Wilbur', 'Mendoza', 'admissionmeerkat75','7fg3H3cx4WpW','wilbur@cryptocooks.org', false, 'ethereum, uniswap', 'Jersey City', 'New Jersey'),
('Karla', 'Peterson', 'fieldsblessing381','4CzwYXk9p','karlapet@skipadoo.org', false, 'USD coin, binance USD', 'Las Vegas', 'Nevada'),
('Calvin', 'Leonard', 'violenthamburger175','3Cjv3DYJX2SB','calleon@cryptodesk.com', false, 'solana, tether', 'Fort Wayne', 'Indiana'),
('Lucy', 'Lee', 'papayadoves24','M95GCSmHe','lucylee@busycoin.org', false, 'bitcoin, cardano', 'Phoenix', 'Arizona'),
('Jesse', 'Becker', 'scoffdelivery11','LnMb8L8j23p','jess@coinsonic.com', false, 'USD coin, ethereum', 'Detroit', 'Michigan'),
('Ana', 'Knight', 'kitchenpudding21','f23MhW7xe','aknight@easymine.com', false, 'binance, dogecoin', 'Milwaukee', 'Wisconsin'),
('Kerry', 'Mckenzie', 'shawlpoke','cSt8jQsM','kerry@nerdcoin.org', false, 'cardano, uniswap', 'Laredo', 'Texas'),
('Darrin', 'Reynolds', 'analyticallizard','vY2ZEt96','dreynolds@cryptoboard.edu', false, 'bitcoin, tether', 'Baltimore', 'Maryland');

-- INSERT INTO platforms(platform_id, name, symbol, slug, token_address) VALUES
-- (1027, 'Ethereum', 'ETH', 'ethereum', '0xdac17f958d2ee523a2206206994597c13d831ec7'),
-- (1027, 'Ethereum', 'ETH', 'ethereum', '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'),
-- (1839, 'BNB', 'BNB', 'bnb', 'BUSD-BD1'),
-- (1027, 'Ethereum', 'ETH', 'ethereum', '0x6b175474e89094c44da98b954eedeac495271d0f'),
-- (1027, 'Ethereum', 'ETH', 'ethereum', '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'),
-- (1027, 'Ethereum', 'ETH', 'ethereum', '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3'),
-- (1027, 'Ethereum', 'ETH', 'ethereum', '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'),
-- (1027, 'Ethereum', 'ETH', 'ethereum', '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984');

INSERT INTO currencies(coinmarketcap_id, name, symbol, logo, slug, num_market_pairs, date_added, tags, max_supply, circulating_supply, total_supply, token_address, 
cmc_rank, 
self_reported_circulating_supply, self_reported_market_cap, tvl_ratio, last_updated, price, volume_24h, volume_change_24h, percent_change_1h, percent_change_24h, percent_change_7d, percent_change_30d, percent_change_60d, percent_change_90d, market_cap, market_cap_dominance, fully_diluted_market_cap, tvl,
currency_uid) VALUES
(1, 'Bitcoin', 'BTC', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/btc.png', 'bitcoin', 9620, '2013-04-28T00:00:00.000Z', 'mineable, pow, sha-256, store-of-value, state-channel, coinbase-ventures-portfolio', 21000000, 19092993, 19092993, null, 1, null, null, null, '2022-07-14T00:52:00.000Z', 20278.386330639016, 33492488701.076157, 28.9351, 0.43087705, 4.47021142, -1.238259, -9.08019062, -32.32724462, -49.20126906, 387175088262.1864, 42.9575, 425846112943.42, null, 1),
(1027, 'Ethereum', 'ETH', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/eth.png', 'ethereum', 5821, '015-08-07T00:00:00.000Z', 'mineable, pow, smart-contracts, ethereum-ecosystem, coinbase-ventures-portfolio, three-arrows-capital-portfolio', null, 121535971.99, 121535971.99, null, 2, null, null, null, '2022-07-14T00:52:00.000Z', 1110.9531420922883, 18236864522.800037, 44.4506, -0.10651837, 6.43572861, -6.28295899, -7.24033365, -45.850285, -63.22004959, 135020769969.52942, 14.9751, 135020769969.53, null, 1),
(825, 'Tether', 'USDT', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/usdt.png', 'tether', 36074, '2015-02-25T00:00:00.000Z', 'payments, stablecoin, asset-backed-stablecoin, avalanche-ecosystem, solana-ecosystem, arbitrum-ecosytem', null, 65930930060.39, 68156976394.56, '0xdac17f958d2ee523a2206206994597c13d831ec7', 3, null, null, null, '2022-07-14T00:52:00.000Z', 0.9993817629735438, 52152271152.42907, 28.4118, 0.00340663, 0.01279638, 0.01738217, 0.06992246, 0.05197576, -0.07454414, 65890169118.24712, 7.3106, 68114839228.14, null, 2),
(3408, 'USD Coin', 'USDC', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/usdc.png', 'usd-coin', 4852, '2018-10-08T00:00:00.000Z', 'medium-of-exchange, stablecoin, asset-backed-stablecoin, fantom-ecosystem, arbitrum-ecosytem, moonriver-ecosystem, bnb-chain, usd-stablecoin', null, 55357481650.51, 55357481650.51, '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', 4, null, null, null, '2022-07-14T00:51:00.000Z', 1.000284682670318, 5470375349.599813, 14.8785, 0.03282763, -0.00220108, 0.03827046, 0.045419, 0.02861386, 0.06282112, 55373240966.21443, 6.1466, 55373240966.21, null, 2),
(1839, 'BNB', 'BNB', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/bnb.png', 'bnb', 1003, '2017-07-25T00:00:00.000Z', 'marketplace, centralized-exchange, payments, smart-contracts, alameda-research-portfolio, multicoin-capital-portfolio, moonriver-ecosystem, bnb-chain', 165116760, 163276974.63, 163276974.63, null, 5, null, null, null, '2022-07-14T00:51:00.000Z', 232.65877436948372, 1454771988.0810812, 27.4605, 1.07446202, 4.70473431, -2.54630922, 4.88946576, -21.27870678,
 -43.7793717, 37987820800.17309, 4.2179, 38415863009.46, null, 3),
(4687, 'Binance USD', 'BUSD', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/busd.png', 'binance-usd', 4049, '2019-09-20T00:00:00.000Z', 'stablecoin, asset-backed-stablecoin, binance-chain, harmony-ecosystem, moonriver-ecosystem, bnb-chain, usd-stablecoin', null, 17547224379.45, 17547224379.45, 'BUSD-BD1', 6, null, null, null, '2022-07-14T00:52:00.000Z', 1.0013792096493161, 5943876377.112388, 26.5835, 0.00673486, 0.17604068, 0.24318762, -0.04148739, 0.1394661, 0.18959265, 17571425680.64212, 1.9488, 17571425680.64, null, 4),
(52, 'XRP', 'XRP', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/xrp.png', 'xrp', 756, '2013-08-04T00:00:00.000Z', 'medium-of-exchange, enterprise-solutions, binance-chain, arrington-xrp-capital-portfolio, galaxy-digital-portfolio, a16z-portfolio, pantera-capital-portfolio', 100000000000, 48343101197, 99989535142, null, 7, null, null, null, '2022-07-14T00:52:00.000Z', 0.3229428049913979, 1284889866.614209, 31.8701, -0.59712711, 3.49257558, -2.99136243, 4.423876, -24.11946215, -55.73967625, 15612056702.542185, 1.733, 32294280499.14, null, 5),
(2010, 'Cardano', 'ADA', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/ada.png', 'cardano', 517, '2017-10-01T00:00:00.000Z', 'mineable, dpos, pos, platform, research, smart-contracts, staking, cardano-ecosystem, cardano, bnb-chain', 45000000000, 33739028515.75, 34512850428.99, null, 8, null, null, null, '2022-07-14T00:51:00.000Z', 0.43511851932893186, 970215810.3430374, 34.5889, -0.37250868, 3.56378041, -5.94170881, -5.39444446, -18.12273528, -53.36605555, 14680476131.371925, 1.6282, 19580333369.8, null, 6),
(5426, 'Solana', 'SOL', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/sol.png', 'solana', 349, '2020-04-10T00:00:00.000Z', 'pos, platform, solana-ecosystem, cms-holdings-portfolio, kenetic-capital-portfolio, alameda-research-portfolio, multicoin-capital-portfolio, okex-blockdream-ventures-portfolio', null, 345576423.53, 511616946.14, null, 9, null, null, null, '2022-07-14T00:51:00.000Z', 34.72326681620082, 1332482453.4603302, 46.2816, -0.44807156, 5.82066965, -6.56871988, 23.97199634, -32.78553332, -65.39101439, 11999542359.632502, 1.3309, 17765011728.59, null, 7),
(74, 'Dogecoin', 'DOGE', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/doge.png' , 'dogecoin', 506, '2013-12-15T00:00:00.000Z', 'mineable, pow, scrypt, medium-of-exchange, memes, payments, doggone-doggerel, bnb-chain', null, 132670764299.89, 132670764299.89, null, 10, null, null, null, '2022-07-14T00:52:00.000Z', 0.06149542709322912, 443526709.66038346, 48.3297, -0.81988296, 2.26405176, -10.64765441, 14.24754737, -31.03710193, -56.98705668, 8158645313.407122, 0.9049, 8158645313.41, null, 8),
(4943, 'Dai', 'DAI', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/dai.png', 'multi-collateral-dai', 1027, '2019-11-22T00:00:00.000Z', 'defi, stablecoin, ethereum-ecosystem, avalanche-ecosystem, polygon-ecosystem, fantom-ecosystem, arbitrum-ecosytem, harmony-ecosystem, moonriver-ecosystem, bnb-chain, usd-stablecoin', null, 6922374507.77, 6922374507.77, '0x6b175474e89094c44da98b954eedeac495271d0f', 11, null, null, null, '2022-07-14T00:52:00.000Z', 1.0004368175120506, 238426886.6336474, -4.3443, -0.0483551, 0.05609656, 0.00778347, 0.08951841, 0.00714998, 0.06979711, 6925398322.187303, 0.7681, 6925398322.19, null, 9),
(6636, 'Polkadot', 'DOT', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/dot.png', 'polkadot-new', 364, '2020-08-19T00:00:00.000Z', 'substrate, polkadot, binance-chain, polkadot-ecosystem, three-arrows-capital-portfolio, polychain-capital-portfolio', null, 987579314.95, 1103303471.38, null, 12, 904869778, 5835042272.251017, null, '2022-07-14T00:52:00.000Z', 6.448488405865421, 383582024.85438454, 19.8022, -0.30441962, 1.82904715, -7.3516935, -8.47552933, -42.52822087, -63.91080634, 6368393762.373278, 0.7066, 7114639643.36, null, 10),
(1958, 'TRON', 'TRX', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/trx.png', 'tron', 655, '2017-09-13T00:00:00.000Z', 'media, payments, tron-ecosystem, bnb-chain', null, 92476685507.56, 92476678250.49, null, 13, 71659659264, 4747132021.023624, null, '2022-07-14T00:51:00.000Z', 0.0662455287923545, 643935435.7376574, 23.0482, 0.13592484, 2.54767391, -1.84880829, 4.77054008, -7.24255835, 10.30317021, 6126166932.412996, 0.6802, 6126166451.66, null, 11),
(5994, 'Shiba Inu', 'SHIB', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/shib.png', 'shiba-inu', 375, '2020-08-01T00:00:00.000Z', 'memes, ethereum-ecosystem, doggone-doggerel', null, 549063278876301, 589735030408322, '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce', 14, null, null, null, '2022-07-14T00:51:00.000Z', 0.000010507751732975936, 371252562.6501017, 28.1832, 0.09254345, 4.87184902, -0.00664056, 32.75495932, -15.24420397, -59.13796955, 5769420620.125912, 0.6399, 6196789287.77, null, 12),
(5805, 'Avalanche', 'AVAX', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/avax.png', 'avalanche', 284, '2020-07-13T00:00:00.000Z', 'defi, smart-contracts, three-arrows-capital-portfolio, polychain-capital-portfolio, avalanche-ecosystem, cms-holdings-portfolio, dragonfly-capital-portfolio, moonriver-ecosystem, injective-ecosystem, bnb-chain', 720000000, 283538440, 404229626, null, 15, null, null, null, '2022-07-14T00:51:00.000Z', 18.597636233255006, 636544119.4255323, 61.7502, -1.08552322, 10.39799192, -4.60644904, 16.99612383, -44.64182902, -75.84641549, 5273144771.167358, 0.5848, 13390298087.94, null, 13),
(3890, 'Polygon', 'MATIC', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/matic.png', 'polygon', 422, '2019-04-28T00:00:00.000Z', 'platform, enterprise-solutions, scaling, state-channel, coinbase-ventures-portfolio, binance-launchpad, binance-labs-portfolio', 10000000000, 8006803852.62, 10000000000, null, 16, null, null, null, '2022-07-14T00:51:00.000Z', 0.641578351392517, 1046923596.2124776, 56.9638, 0.94788909, 18.63600139, 21.42016915, 50.34270905, -5.87041196, -53.3452188, 5136992015.687193, 0.5697, 6415783513.93, null, 14),
(3957, 'UNUS SED LEO', 'LEO', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/leo.png', 'unus-sed-leo', 19, '2019-05-21T00:00:00.000Z', 'marketplace, centralized-exchange, discount-token, payments, kenetic-capital-portfolio, alameda-research-portfolio', null, 953954130, 985239504, '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3', 17, null, null, null, '2022-07-14T00:51:00.000Z', 5.251114400983406, 3994872.40011264, 13.5908, -1.06132046, -2.08789937, -10.13508972, 0.74140487, 4.27372565, -8.70466173, 5009322269.920596, 0.5562, 5173605347.87, null, 15),
(3717, 'Wrapped Bitcoin', 'WBTC', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/wbtc.png', 'wrapped-bitcoin', 473, '2019-01-30T00:00:00.000Z', 'medium-of-exchange, defi, wrapped-tokens, fantom-ecosystem, arbitrum-ecosytem, moonriver-ecosystem', null, 238932, 238932, '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', 18, null, null, null, '2022-07-14T00:51:00.000Z', 20227.889985127986, 226463193.3953482, 14.0831, 0.42725836, 4.42672768, -1.47334857, -9.36003746, -32.59528945, -49.38848562, 4833099172.206183, 0.5366, 4833099172.21, null, 2),
(7083, 'Uniswap', 'UNI', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/uniswap.png', 'uniswap', 386, '2020-09-17T00:00:00.000Z', 'decentralized-exchange, defi, dao, yield-farming, amm, coinbase-ventures-portfolio, three-arrows-capital-portfolio, governance, blockchain-capital-portfolio, defiance-capital-portfolio', 1000000000, 734135450.7457277, 1000000000, '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', 19, null, null, 0.95134043, '2022-07-14T00:52:00.000Z', 0227.889985127986, 226463193.3953482, 14.0831, 0.42725836, 4.42672768, -1.47334857, -9.36003746, -32.59528945, -49.38848562, 4833099172.206183, 0.5366, 4833099172.21, null, 4);

-- INSERT INTO resources(resource_name, resource_type, resource_category, resource_url) VALUES
-- (
--     'Dodgecoin Jumps On Elon Musk Space X Tweet', 'article', 'news', 
--     'https://www.coindesk.com/business/2022/05/27/dogecoin-jumps-on-elon-musk-space-x-tweet/'),
-- (
--     'Crypto City Guide To New York', 'article', 'news', 
--     'https://cointelegraph.com/magazine/2021/10/28/crypto-city-guide-to-new-york'
-- ),
-- (
--     'Crypto Is Changing How Humanitarian Agencies Deliver Aid', 'article', 'news', 
--     'https://cointelegraph.com/magazine/2022/05/25/crypto-blockchain-changing-humanitarian-agencies-deliver-aid'
-- ),
-- (
--     'How Can The U.S. Establish Itself As a Crypto Leader?', 'article', 'news', 
--     'https://www.coindesk.com/layer2/2022/05/27/how-the-us-can-establish-itself-as-a-crypto-leader/'
-- ),
-- (
--     'How To Keep Your Crypto Safe', 'article', 'news', 
--     'https://cointelegraph.com/magazine/2022/01/25/security-experts-reveal-how-keep-crypto-safe'
-- ),
-- (   
--     'Inflationary & Deflationary Cryptocurrencies', 'article', 'news', 
--     'https://www.coindesk.com/learn/inflationary-and-deflationary-cryptocurrencies-whats-the-difference/'
-- ),
-- (   
--     'Stripe Partners With Opennnode To Allow Instant Bitcoin Conversions for Businesses', 'article', 'news', 
--     'https://www.coindesk.com/business/2022/05/24/stripe-partners-with-opennode-to-allow-instant-fiat-to-bitcoin-conversions-for-businesses/'
-- ),
-- (   
--     '6 Crypto Myths Debunked', 'article', 'news',
--     'https://www.gobankingrates.com/investing/crypto/crypto-myths-debunked/'
-- ),
-- (   
--     'How To Use Crypto For Buy Now Pay Later Transactions', 'article', 'news', 
--     'https://www.gobankingrates.com/investing/crypto/how-use-crypto-buy-now-pay-later-transactions/'
-- ),
-- (   
--     'What is Bitcoin?', 'article', 'education-article', 
--     'https://www.bitcoin.com/get-started/what-is-bitcoin/'
-- ),
-- (   
--     'How to Buy Bitcoin', 'article', 'education-article', 
--     'https://www.bitcoin.com/get-started/how-to-buy-bitcoin/'
-- ),
-- (   
--     'How to Sell Bitcoin', 'article', 'education-article', 
--     'https://www.bitcoin.com/get-started/how-to-sell-bitcoin/'
-- ),
-- (   
--     'What is a Bitcoin Wallet?', 'article', 'education-article', 
--     'https://www.bitcoin.com/get-started/what-is-a-bitcoin-wallet/'
-- ),
-- (   
--     'What is Ethereum?', 'article', 'education-article', 
--     'https://www.bitcoin.com/get-started/what-is-ethereum/'
-- ),
-- (   
--     'What is Ethereum Used For?', 'article', 'education-article', 
--     'https://www.bitcoin.com/get-started/what-is-eth-used-for/'
-- ),
-- (   
--     'What is Bitcoin? Bitcoin Explained Simply', 'video', 'education', 
--     'https://www.youtube.com/embed/41JCpzvnn_0'
-- ),
-- (   
--     'Bitcoin Cryptocurrency For Beginners 2022', 'video', 'education', 
--     'https://www.youtube.com/embed/WO-O2K_Fqw0'
-- ),
-- (   
--     'How does a blockchain work - Simply Explained', 'video', 'education', 
--     'https://www.youtube.com/embed/SSo_EIwHSd4'
-- ),
-- (   
--     'Cryptocurrency In 5 Minutes | Cryptocurrency Explained', 'video', 'education', 
--     'https://www.youtube.com/embed/1YyAzVmP9xQ'
-- ),
-- (   
--     'How Cryptocurrency ACTUALLY works', 'video', 'education', 
--     'https://www.youtube.com/embed/rYQgy8QDEBI'
-- ),
-- (   
--     'Cryptocurrency For Beginners Full Course', 'video', 'education', 
--     'https://www.youtube.com/embed/dgjZ2fHg4y4'
-- );

-- INSERT INTO favorites(fav_date, fav_user_id, fav_resource_id, fav_resource_name, fav_resource_url) VALUES
-- ('10/22/2017 10:00', 2, 1, 'Dodgecoin Jumps On Elon Musk Space X Tweet','https://www.coindesk.com/business/2022/05/27/dogecoin-jumps-on-elon-musk-space-x-tweet/'),
-- ('09/24/2019 10:15', 1, 2, 'Crypto City Guide To New York', 'https://cointelegraph.com/magazine/2021/10/28/crypto-city-guide-to-new-york'),
-- ('07/18/2018 12:00', 4, 3, 'Crypto Is Changing How Humanitarian Agencies Deliver Aid', 'https://cointelegraph.com/magazine/2022/05/25/crypto-blockchain-changing-humanitarian-agencies-deliver-aid'),
-- ('11/21/2021 09:45', 3, 4, 'How Can The U.S. Establish Itself As a Crypto Leader?','https://www.coindesk.com/layer2/2022/05/27/how-the-us-can-establish-itself-as-a-crypto-leader/'),
-- ('02/13/2021 14:00', 6, 5, 'How To Keep Your Crypto Safe','https://cointelegraph.com/magazine/2022/01/25/security-experts-reveal-how-keep-crypto-safe'),
-- ('03/02/2017 09:30', 1, 13, 'What is a Bitcoin Wallet?','https://www.bitcoin.com/get-started/what-is-a-bitcoin-wallet/' ),
-- ('04/22/2016 14:00', 4, 17, 'Bitcoin Cryptocurrency For Beginners 2022', 'https://www.youtube.com/embed/WO-O2K_Fqw0'),
-- ('05/19/2016 18:00', 1, 16, 'What is Bitcoin? Bitcoin Explained Simply', 'https://www.youtube.com/embed/41JCpzvnn_0'),
-- ('06/25/2014 20:15', 2, 21, 'Cryptocurrency For Beginners Full Course','https://www.youtube.com/embed/dgjZ2fHg4y4'),
-- ('01/11/2022 09:00', 5, 10, 'What is Bitcoin?','https://www.bitcoin.com/get-started/what-is-bitcoin/');