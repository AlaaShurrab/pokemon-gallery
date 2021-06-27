CREATE DATABASE pokegallerydev;
CREATE USER ash WITH superuser password 'pikachu';
ALTER DATABASE pokegallerydev OWNER TO ash;
-- url in the .env like like DATABASE_URL=postgres://ash:pikachu@localhost:5432/pokegallerydev