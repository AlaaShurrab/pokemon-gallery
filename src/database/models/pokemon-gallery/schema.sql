DROP TABLE IF EXISTS "pokemon_gallery" CASCADE;

CREATE TABLE "pokemon_gallery" (
  "id" SERIAL PRIMARY KEY,
  "number" INTEGER NOT NULL,
  "name" TEXT NOT NULL,
  "img" TEXT,
  "types" TEXT,
  "owned" BOOLEAN DEFAULT false
);
