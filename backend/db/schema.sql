DROP DATABASE IF EXISTS crypto_dev;
CREATE DATABASE crypto_dev;

\c crypto_dev;

CREATE TABLE users(
  uid SERIAL PRIMARY KEY,
  firstname TEXT,
  lastname TEXT,
  username TEXT UNIQUE NOT NULL,
  user_password TEXT,
  user_email TEXT,
  user_active BOOLEAN,
  user_interests TEXT,
  user_city TEXT,
  user_state TEXT
);

DROP TABLE IF EXISTS currencies;

CREATE TABLE currencies(
  cid SMALLINT,
  name TEXT NOT NULL,
  symbol TEXT,
  slug TEXT,
  num_market_pairs INTEGER,
  date_added DATE,
  tags TEXT,
  max_supply BIGINT,
  circulating_supply BIGINT,
  total_supply BIGINT,
  cmc_rank SMALLINT,
  currency_userid INTEGER NOT NULL REFERENCES users(uid) ON DELETE CASCADE
);
