CREATE TABLE users (
   id         serial PRIMARY KEY,
   name       varchar(255) NOT NULL,
   created_at timestamp NOT NULL,
   updated_at timestamp NOT NULL,
   deleted_at timestamp NULL DEFAULT NULL
)