-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_State" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL
);
INSERT INTO "new_State" ("id", "status") SELECT "id", "status" FROM "State";
DROP TABLE "State";
ALTER TABLE "new_State" RENAME TO "State";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
