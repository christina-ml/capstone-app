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
  circulating_supply BIGINT,
  total_supply BIGINT,
  cmc_rank SMALLINT,
  currency_uid INTEGER REFERENCES users(uid) ON DELETE CASCADE
);