CREATE DATABASE skimmitdatabase;

CREATE TABLE posts (
    post_id         SERIAL PRIMARY KEY,
    title           VARCHAR(100),
    body            VARCHAR(300),
    image_url       VARCHAR(300),
    likes           INT,
    dislikes        INT,
    commentscount   INT,
    comments     INTEGER[]
);

ALTER TABLE table_name ALTER COLUMN body [SET DATA] TYPE VARCHAR(800);