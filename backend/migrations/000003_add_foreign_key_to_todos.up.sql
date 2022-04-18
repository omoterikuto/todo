ALTER TABLE todos
    ADD FOREIGN KEY (user_id)
        REFERENCES user (id);