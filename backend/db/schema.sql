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


-- DROP TABLE IF EXISTS resources;

-- CREATE TABLE resources(
--   rid SERIAL PRIMARY KEY,
--   resource_name TEXT NOT NULL UNIQUE,
--   resource_type TEXT,
--   resource_category TEXT,
--   resource_url VARCHAR(2048) UNIQUE
-- );

-- DROP TABLE IF EXISTS favorites;

-- CREATE TABLE favorites(
--   fid SERIAL PRIMARY KEY,
--   fav_date TIMESTAMP,
--   fav_user_id INTEGER REFERENCES users(uid) ON DELETE CASCADE,
--   fav_resource_id INTEGER REFERENCES resources(rid) ON DELETE CASCADE,
--   fav_resource_name TEXT REFERENCES resources(resource_name) ON DELETE CASCADE,
--   fav_resource_url TEXT REFERENCES resources(resource_url) ON DELETE CASCADE
-- );

