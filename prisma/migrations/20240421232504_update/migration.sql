/*
  Warnings:

  - You are about to drop the `Quest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Quest";

-- CreateTable
CREATE TABLE "Quests" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "previewImg" TEXT NOT NULL,
    "coverImg" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "peopleCount" INTEGER[],
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Quests_pkey" PRIMARY KEY ("id")
);
