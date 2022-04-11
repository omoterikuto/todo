CREATE TABLE todos (
   id         serial PRIMARY KEY,
   user_id    integer NOT NULL,
   title      varchar(255) NOT NULL,
   notes      text NOT NULL,
   completed  smallint NOT NULL DEFAULT 0,
   due        timestamp NULL DEFAULT NULL,
   created_at timestamp NOT NULL,
   updated_at timestamp NOT NULL,
   deleted_at timestamp NULL DEFAULT NULL
)