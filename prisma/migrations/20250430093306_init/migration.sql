-- CreateTable
CREATE TABLE "Prayer" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Prayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mystery" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Mystery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MysterySet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "days" TEXT[],

    CONSTRAINT "MysterySet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MysterySetItem" (
    "id" SERIAL NOT NULL,
    "mysteryId" INTEGER NOT NULL,
    "mysterySetId" INTEGER NOT NULL,
    "orderInSet" INTEGER NOT NULL,

    CONSTRAINT "MysterySetItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MysterySetItemPrayer" (
    "id" SERIAL NOT NULL,
    "orderInSequence" INTEGER NOT NULL,
    "prayerId" INTEGER NOT NULL,
    "mysterySetItemId" INTEGER NOT NULL,

    CONSTRAINT "MysterySetItemPrayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rosary" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,
    "mysterySetId" INTEGER NOT NULL,

    CONSTRAINT "Rosary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RosaryOpeningPrayer" (
    "id" SERIAL NOT NULL,
    "rosaryId" INTEGER NOT NULL,
    "prayerId" INTEGER NOT NULL,
    "orderInSet" INTEGER NOT NULL,

    CONSTRAINT "RosaryOpeningPrayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RosaryClosingPrayer" (
    "id" SERIAL NOT NULL,
    "rosaryId" INTEGER NOT NULL,
    "prayerId" INTEGER NOT NULL,
    "orderInSet" INTEGER NOT NULL,

    CONSTRAINT "RosaryClosingPrayer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MysterySetItem" ADD CONSTRAINT "MysterySetItem_mysteryId_fkey" FOREIGN KEY ("mysteryId") REFERENCES "Mystery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MysterySetItem" ADD CONSTRAINT "MysterySetItem_mysterySetId_fkey" FOREIGN KEY ("mysterySetId") REFERENCES "MysterySet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MysterySetItemPrayer" ADD CONSTRAINT "MysterySetItemPrayer_prayerId_fkey" FOREIGN KEY ("prayerId") REFERENCES "Prayer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MysterySetItemPrayer" ADD CONSTRAINT "MysterySetItemPrayer_mysterySetItemId_fkey" FOREIGN KEY ("mysterySetItemId") REFERENCES "MysterySetItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rosary" ADD CONSTRAINT "Rosary_mysterySetId_fkey" FOREIGN KEY ("mysterySetId") REFERENCES "MysterySet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RosaryOpeningPrayer" ADD CONSTRAINT "RosaryOpeningPrayer_rosaryId_fkey" FOREIGN KEY ("rosaryId") REFERENCES "Rosary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RosaryOpeningPrayer" ADD CONSTRAINT "RosaryOpeningPrayer_prayerId_fkey" FOREIGN KEY ("prayerId") REFERENCES "Prayer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RosaryClosingPrayer" ADD CONSTRAINT "RosaryClosingPrayer_rosaryId_fkey" FOREIGN KEY ("rosaryId") REFERENCES "Rosary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RosaryClosingPrayer" ADD CONSTRAINT "RosaryClosingPrayer_prayerId_fkey" FOREIGN KEY ("prayerId") REFERENCES "Prayer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
