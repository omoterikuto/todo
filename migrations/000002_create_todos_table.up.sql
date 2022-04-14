CREATE TABLE todos (
   id         serial PRIMARY KEY,
   user_id    integer NOT NULL,
   title      varchar(255) NOT NULL,
   done       smallint NOT NULL DEFAULT 0,
   created_at timestamp NOT NULL,
   updated_at timestamp NOT NULL,
   deleted_at timestamp NULL DEFAULT NULL
)