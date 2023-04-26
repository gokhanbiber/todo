/*
  Warnings:

  - You are about to drop the column `decription` on the `Todo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[description]` on the table `Todo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Todo_decription_key";

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "decription",
ADD COLUMN     "description" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Todo_description_key" ON "Todo"("description");
