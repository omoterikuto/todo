CREATE TABLE todos (
    id         serial PRIMARY KEY,
    user_id    integer NOT NULL,
    title      varchar(255) NOT NULL,
    done       boolean NOT NULL DEFAULT false,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL,
    deleted_at timestamp NULL DEFAULT NULL
)