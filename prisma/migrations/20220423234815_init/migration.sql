-- CreateTable
CREATE TABLE "DailyPrayer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "Quotee" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "Reference" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false
);
