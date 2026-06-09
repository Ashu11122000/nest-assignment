-- Create database if it doesn't exist
SELECT 'CREATE DATABASE nest_assignment'
WHERE NOT EXISTS (
    SELECT FROM pg_database WHERE datname = 'nest_assignment'
)\gexec

-- Connect to database
\c nest_assignment;

-- Optional verification table
CREATE TABLE IF NOT EXISTS docker_init_check (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO docker_init_check DEFAULT VALUES;