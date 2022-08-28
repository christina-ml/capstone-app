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

INSERT INTO currencies(coinmarketcap_id, name, symbol, logo, slug, num_market_pairs, date_added, tags, max_supply, circulating_supply, total_supply, cmc_rank, currency_uid) VALUES
(1, 'Bitcoin', 'BTC', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/btc.png', 'bitcoin', 9620, '2013-04-28T00:00:00.000Z', 'mineable, pow, sha-256, store-of-value, state-channel, coinbase-ventures-portfolio', 21000000, 19092993, 19092993, 1, 1),
(1027, 'Ethereum', 'ETH', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/eth.png', 'ethereum', 5821, '015-08-07T00:00:00.000Z', 'mineable, pow, smart-contracts, ethereum-ecosystem, coinbase-ventures-portfolio, three-arrows-capital-portfolio', null, 121535971.99, 121535971.99, 2, 1),
(825, 'Tether', 'USDT', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/usdt.png', 'tether', 36074, '2015-02-25T00:00:00.000Z', 'payments, stablecoin, asset-backed-stablecoin, avalanche-ecosystem, solana-ecosystem, arbitrum-ecosytem', null, 65930930060.39, 68156976394.56, 3, 2),
(3408, 'USD Coin', 'USDC', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/usdc.png', 'usd-coin', 4852, '2018-10-08T00:00:00.000Z', 'medium-of-exchange, stablecoin, asset-backed-stablecoin, fantom-ecosystem, arbitrum-ecosytem, moonriver-ecosystem, bnb-chain, usd-stablecoin', null, 55357481650.51, 55357481650.51, 4, 2),
(1839, 'BNB', 'BNB', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/bnb.png', 'bnb', 1003, '2017-07-25T00:00:00.000Z', 'marketplace, centralized-exchange, payments, smart-contracts, alameda-research-portfolio, multicoin-capital-portfolio, moonriver-ecosystem, bnb-chain', 165116760, 163276974.63, 163276974.63, 5, 3),
(4687, 'Binance USD', 'BUSD', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/busd.png', 'binance-usd', 4049, '2019-09-20T00:00:00.000Z', 'stablecoin, asset-backed-stablecoin, binance-chain, harmony-ecosystem, moonriver-ecosystem, bnb-chain, usd-stablecoin', null, 17547224379.45, 17547224379.45, 6, 4),
(52, 'XRP', 'XRP', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/xrp.png', 'xrp', 756, '2013-08-04T00:00:00.000Z', 'medium-of-exchange, enterprise-solutions, binance-chain, arrington-xrp-capital-portfolio, galaxy-digital-portfolio, a16z-portfolio, pantera-capital-portfolio', 100000000000, 48343101197, 99989535142, 7, 5),
(2010, 'Cardano', 'ADA', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/ada.png', 'cardano', 517, '2017-10-01T00:00:00.000Z', 'mineable, dpos, pos, platform, research, smart-contracts, staking, cardano-ecosystem, cardano, bnb-chain', 45000000000, 33739028515.75, 34512850428.99, 8, 6),
(5426, 'Solana', 'SOL', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/sol.png', 'solana', 349, '2020-04-10T00:00:00.000Z', 'pos, platform, solana-ecosystem, cms-holdings-portfolio, kenetic-capital-portfolio, alameda-research-portfolio, multicoin-capital-portfolio, okex-blockdream-ventures-portfolio', null, 345576423.53, 511616946.14, 9, 7),
(74, 'Dogecoin', 'DOGE', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/doge.png' , 'dogecoin', 506, '2013-12-15T00:00:00.000Z', 'mineable, pow, scrypt, medium-of-exchange, memes, payments, doggone-doggerel, bnb-chain', null, 132670764299.89, 132670764299.89, 10, 8),
(4943, 'Dai', 'DAI', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/dai.png', 'multi-collateral-dai', 1027, '2019-11-22T00:00:00.000Z', 'defi, stablecoin, ethereum-ecosystem, avalanche-ecosystem, polygon-ecosystem, fantom-ecosystem, arbitrum-ecosytem, harmony-ecosystem, moonriver-ecosystem, bnb-chain, usd-stablecoin', null, 6922374507.77, 6922374507.77, 11, 9),
(6636, 'Polkadot', 'DOT', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/dot.png', 'polkadot-new', 364, '2020-08-19T00:00:00.000Z', 'substrate, polkadot, binance-chain, polkadot-ecosystem, three-arrows-capital-portfolio, polychain-capital-portfolio', null, 987579314.95, 1103303471.38, 12, 10),
(1958, 'TRON', 'TRX', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/trx.png', 'tron', 655, '2017-09-13T00:00:00.000Z', 'media, payments, tron-ecosystem, bnb-chain', null, 92476685507.56, 92476678250.49, 13, 11),
(5994, 'Shiba Inu', 'SHIB', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/shib.png', 'shiba-inu', 375, '2020-08-01T00:00:00.000Z', 'memes, ethereum-ecosystem, doggone-doggerel', null, 549063278876301, 589735030408322, 14, 12),
(5805, 'Avalanche', 'AVAX', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/avax.png', 'avalanche', 284, '2020-07-13T00:00:00.000Z', 'defi, smart-contracts, three-arrows-capital-portfolio, polychain-capital-portfolio, avalanche-ecosystem, cms-holdings-portfolio, dragonfly-capital-portfolio, moonriver-ecosystem, injective-ecosystem, bnb-chain', 720000000, 283538440, 404229626, 15, 13),
(3890, 'Polygon', 'MATIC', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/matic.png', 'polygon', 422, '2019-04-28T00:00:00.000Z', 'platform, enterprise-solutions, scaling, state-channel, coinbase-ventures-portfolio, binance-launchpad, binance-labs-portfolio', 10000000000, 8006803852.62, 10000000000, 16, 14),
(3957, 'UNUS SED LEO', 'LEO', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/leo.png', 'unus-sed-leo', 19, '2019-05-21T00:00:00.000Z', 'marketplace, centralized-exchange, discount-token, payments, kenetic-capital-portfolio, alameda-research-portfolio', null, 953954130, 985239504, 17, 15),
(3717, 'Wrapped Bitcoin', 'WBTC', 'https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/wbtc.png', 'wrapped-bitcoin', 473, '2019-01-30T00:00:00.000Z', 'medium-of-exchange, defi, wrapped-tokens, fantom-ecosystem, arbitrum-ecosytem, moonriver-ecosystem', null, 238932, 238932, 18, 2);



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