-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "decription" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Todo_decription_key" ON "Todo"("decription");
