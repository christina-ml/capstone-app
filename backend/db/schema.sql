DROP DATABASE IF EXISTS crypto_dev;
CREATE DATABASE crypto_dev;

\c crypto_dev;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
  uid SERIAL PRIMARY KEY,
  firstname TEXT,
  lastname TEXT,
  username TEXT UNIQUE NOT NULL,
  user_password TEXT,
  user_email TEXT,
  user_admin BOOLEAN,
  user_interests TEXT,
  user_city TEXT,
  user_state TEXT
);

-- DROP TABLE IF EXISTS platforms;

-- CREATE TABLE platforms (
--   pid SERIAL PRIMARY KEY,
--   platform_id SMALLINT,
--   name TEXT,
--   symbol TEXT,
--   slug TEXT,
--   token_address TEXT UNIQUE NOT NULL
-- );

DROP TABLE IF EXISTS currencies;

CREATE TABLE currencies(
  cid SERIAL PRIMARY KEY,
  coinmarketcap_id SMALLINT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  symbol TEXT,
  logo TEXT,
  slug TEXT,
  num_market_pairs INTEGER,
  date_added DATE,
  tags TEXT,
  max_supply BIGINT,
  circulating_supply DECIMAL,
  total_supply DECIMAL,
  token_address TEXT,
  -- token_address TEXT REFERENCES platforms(token_address) ON DELETE CASCADE,
  cmc_rank SMALLINT,
  self_reported_circulating_supply DECIMAL,
  self_reported_market_cap DECIMAL,
  tvl_ratio DECIMAL,
  last_updated TIMESTAMP,
  price DECIMAL,
  volume_24h DECIMAL,
  volume_change_24h DECIMAL,
  percent_change_1h DECIMAL,
  percent_change_24h DECIMAL,
  percent_change_7d DECIMAL,
  percent_change_30d DECIMAL,
  percent_change_60d DECIMAL,
  percent_change_90d DECIMAL,
  market_cap DECIMAL,
  market_cap_dominance DECIMAL,
  fully_diluted_market_cap DECIMAL,
  tvl DECIMAL,
  currency_uid INTEGER REFERENCES users(uid) ON DELETE CASCADE
);
