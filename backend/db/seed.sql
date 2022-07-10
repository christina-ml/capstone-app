\c crypto_dev;

INSERT INTO users(firstname, lastname, username, user_password, user_email, user_active, user_interests, user_city, user_state) VALUES
('Christina', 'Loiacono', 'rowboatoutraged30','PWm3dmVg','christina@coinboard.com', true, ARRAY [ 'bitcoin', 'solana' ], 'New York City', 'New York'),
('Oliver', 'Chuzan', 'yawningkangaroo197','w74Mb7tQ','oliver@cryptoville.com', true, ARRAY [ 'bitcoin', 'tether' ], 'Toledo', 'Ohio'),
('Deborah', 'Campos', 'peacenative441','gn5RhAyk','deb@coinreport.com', true, ARRAY [ 'litecoin', 'binance USD' ], 'Austin', 'Texas'),
('Milton', 'Clark', 'desertloafers650','pRu7DF6Lxk','milton@mineville.com', true, ARRAY [ 'USD coin', 'dogecoin' ], 'Greensboro', 'North Carolina'),
('Ruben', 'Profit', 'insecurepastry40','h7MVjYDQTq','rprofit@cryptodash.com', true, ARRAY [ 'dogecoin', 'ethereum' ], 'San Jose', 'California'),
('Olivia', 'Figueroa', 'figuresneak10','x44jarGnXdH','olives@coinpixel.com', true, ARRAY [ 'ethereum', 'solana' ], 'Tampa', 'Florida'),
('Casey', 'Hopkins', 'yikesoctopus31','P6YGheJTK','hopkinsc@cryptostyle.org', true, ARRAY [ 'binance', 'bitcoin' ], 'Santa Ana', 'California'),
('Wilbur', 'Mendoza', 'admissionmeerkat75','7fg3H3cx4WpW','wilbur@cryptocooks.org', true, ARRAY [ 'ethereum', 'uniswap' ], 'Jersey City', 'New Jersey'),
('Karla', 'Peterson', 'fieldsblessing381','4CzwYXk9p','karlapet@skipadoo.org', true, ARRAY [ 'USD coin', 'binance USD' ], 'Las Vegas', 'Nevada'),
('Calvin', 'Leonard', 'violenthamburger175','3Cjv3DYJX2SB','calleon@cryptodesk.com', true, ARRAY [ 'solana', 'tether' ], 'Fort Wayne', 'Indiana'),
('Lucy', 'Lee', 'papayadoves24','M95GCSmHe','lucylee@busycoin.org', true, ARRAY [ 'bitcoin', 'cardano' ], 'Phoenix', 'Arizona'),
('Jesse', 'Becker', 'scoffdelivery11','LnMb8L8j23p','jess@coinsonic.com', true, ARRAY [ 'USD coin', 'ethereum' ], 'Detroit', 'Michigan'),
('Ana', 'Knight', 'kitchenpudding21','f23MhW7xe','aknight@easymine.com', true, ARRAY [ 'binance', 'dogecoin' ], 'Milwaukee', 'Wisconsin'),
('Kerry', 'Mckenzie', 'shawlpoke','cSt8jQsM','kerry@nerdcoin.org', true, ARRAY [ 'cardano', 'uniswap' ], 'Laredo', 'Texas' ),
('Darrin', 'Reynolds', 'analyticallizard','vY2ZEt96','dreynolds@cryptoboard.edu', true, ARRAY [ 'bitcoin', 'tether' ], 'Baltimore', 'Maryland');

INSERT INTO resources(resource_name, resource_type, resource_category, resource_url) VALUES
(
    'Dodgecoin Jumps On Elon Musk Space X Tweet', 'article', 'news', 
    'https://www.coindesk.com/business/2022/05/27/dogecoin-jumps-on-elon-musk-space-x-tweet/'
),
(
    'Crypto City Guide To New York', 'article', 'news', 
    'https://cointelegraph.com/magazine/2021/10/28/crypto-city-guide-to-new-york'
),
(
    'Crypto Is Changing How Humanitarian Agencies Deliver Aid', 'article', 'news', 
    'https://cointelegraph.com/magazine/2022/05/25/crypto-blockchain-changing-humanitarian-agencies-deliver-aid'
),
(
    'How Can The U.S. Establish Itself As a Crypto Leader?', 'article', 'news', 
    'https://www.coindesk.com/layer2/2022/05/27/how-the-us-can-establish-itself-as-a-crypto-leader/'
),
(
    'How To Keep Your Crypto Safe', 'article', 'news', 
    'https://cointelegraph.com/magazine/2022/01/25/security-experts-reveal-how-keep-crypto-safe'
),
(   
    'Inflationary & Deflationary Cryptocurrencies', 'article', 'news', 
    'https://www.coindesk.com/learn/inflationary-and-deflationary-cryptocurrencies-whats-the-difference/'
),
(   
    'Stripe Partners With Opennnode To Allow Instant Bitcoin Conversions for Businesses', 'article', 'news', 
    'https://www.coindesk.com/business/2022/05/24/stripe-partners-with-opennode-to-allow-instant-fiat-to-bitcoin-conversions-for-businesses/'
),
(   
    '6 Crypto Myths Debunked', 'article', 'news',
    'https://www.gobankingrates.com/investing/crypto/crypto-myths-debunked/'
),
(   
    'How To Use Crypto For Buy Now Pay Later Transactions', 'article', 'news', 
    'https://www.gobankingrates.com/investing/crypto/how-use-crypto-buy-now-pay-later-transactions/'
),
(   
    'What is Bitcoin?', 'article', 'education-article', 
    'https://www.bitcoin.com/get-started/what-is-bitcoin/'
),
(   
    'How to Buy Bitcoin', 'article', 'education-article', 
    'https://www.bitcoin.com/get-started/how-to-buy-bitcoin/'
),
(   
    'How to Sell Bitcoin', 'article', 'education-article', 
    'https://www.bitcoin.com/get-started/how-to-sell-bitcoin/'
),
(   
    'What is a Bitcoin Wallet?', 'article', 'education-article', 
    'https://www.bitcoin.com/get-started/what-is-a-bitcoin-wallet/'
),
(   
    'What is Ethereum?', 'article', 'education-article', 
    'https://www.bitcoin.com/get-started/what-is-ethereum/'
),
(   
    'What is Ethereum Used For?', 'article', 'education-article', 
    'https://www.bitcoin.com/get-started/what-is-eth-used-for/'
),
(   
    'What is Bitcoin? Bitcoin Explained Simply', 'video', 'education', 
    'https://www.youtube.com/embed/41JCpzvnn_0'
),
(   
    'Bitcoin Cryptocurrency For Beginners 2022', 'video', 'education', 
    'https://www.youtube.com/embed/WO-O2K_Fqw0'
),
(   
    'How does a blockchain work - Simply Explained', 'video', 'education', 
    'https://www.youtube.com/embed/SSo_EIwHSd4'
),
(   
    'Cryptocurrency In 5 Minutes | Cryptocurrency Explained', 'video', 'education', 
    'https://www.youtube.com/embed/1YyAzVmP9xQ'
),
(   
    'How Cryptocurrency ACTUALLY works', 'video', 'education', 
    'https://www.youtube.com/embed/rYQgy8QDEBI'
),
(   
    'Cryptocurrency For Beginners Full Course', 'video', 'education', 
    'https://www.youtube.com/embed/dgjZ2fHg4y4'
);

INSERT INTO favorites(fav_date, fav_user_id, fav_resource_id, fav_resource_name, fav_resource_url) VALUES
('10/22/2017 10:00', 2, 1, 'Dodgecoin Jumps On Elon Musk Space X Tweet','https://www.coindesk.com/business/2022/05/27/dogecoin-jumps-on-elon-musk-space-x-tweet/'),
('09/24/2019 10:15', 1, 2, 'Crypto City Guide To New York', 'https://cointelegraph.com/magazine/2021/10/28/crypto-city-guide-to-new-york'),
('07/18/2018 12:00', 4, 3, 'Crypto Is Changing How Humanitarian Agencies Deliver Aid', 'https://cointelegraph.com/magazine/2022/05/25/crypto-blockchain-changing-humanitarian-agencies-deliver-aid'),
('11/21/2021 09:45', 3, 4, 'How Can The U.S. Establish Itself As a Crypto Leader?','https://www.coindesk.com/layer2/2022/05/27/how-the-us-can-establish-itself-as-a-crypto-leader/'),
('02/13/2021 14:00', 6, 5, 'How To Keep Your Crypto Safe','https://cointelegraph.com/magazine/2022/01/25/security-experts-reveal-how-keep-crypto-safe'),
('03/02/2017 09:30', 1, 13, 'What is a Bitcoin Wallet?','https://www.bitcoin.com/get-started/what-is-a-bitcoin-wallet/' ),
('04/22/2016 14:00', 4, 17, 'Bitcoin Cryptocurrency For Beginners 2022', 'https://www.youtube.com/embed/WO-O2K_Fqw0'),
('05/19/2016 18:00', 1, 16, 'What is Bitcoin? Bitcoin Explained Simply', 'https://www.youtube.com/embed/41JCpzvnn_0'),
('06/25/2014 20:15', 2, 21, 'Cryptocurrency For Beginners Full Course','https://www.youtube.com/embed/dgjZ2fHg4y4'),
('01/11/2022 09:00', 5, 10, 'What is Bitcoin?','https://www.bitcoin.com/get-started/what-is-bitcoin/');