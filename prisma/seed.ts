import { PrismaClient } from "../src/app/generated/prisma";

const prisma = new PrismaClient();

/**
 * prayers data
 * id -> auto
 * title
 * content
 * rosaryOpeningPrayers -> back-reference
 * rosaryClosingPrayers -> back-reference
 */
const prayersData = [
  {
    title: "The Sign of the Cross",
    content: `
In the name of the Father, and of the Son, and of the Holy Spirit. Amen.
`,
  },
  {
    title: "Apostles' Creed",
    content: `
    I believe in God,
  the Father almighty,
  Creator of heaven and earth,
  and in Jesus Christ, his only Son, our Lord,
  who was conceived by the Holy Spirit,
  born of the Virgin Mary,
  suffered under Pontius Pilate,
  was crucified, died and was buried;
  he descended into hell;
  on the third day he rose again from the dead;
  he ascended into heaven,
  and is seated at the right hand of God the Father almighty;
  from there he will come to judge the living and the dead.
  
  I believe in the Holy Spirit,
  the holy catholic Church,
  the communion of saints,
  the forgiveness of sins,
  the resurrection of the body,
  and life everlasting.
  Amen.
    `,
  },
  {
    title: "Our Father",
    content: `
    Our Father, who art in heaven,
  hallowed be thy name;
  thy kingdom come,
  thy will be done
  on earth as it is in heaven.
  Give us this day our daily bread,
  and forgive us our trespasses,
  as we forgive those who trespass against us;
  and lead us not into temptation,
  but deliver us from evil.
  Amen.
    `,
  },
  {
    title: "Hail Mary",
    content: `
    Hail, Mary, full of grace,
  the Lord is with thee.
  Blessed art thou among women
  and blessed is the fruit of thy womb, Jesus.
  Holy Mary, Mother of God,
  pray for us sinners,
  now and at the hour of our death.
  Amen.
    `,
  },
  {
    title: "Glory Be",
    content: `
    Glory be to the Father
  and to the Son
  and to the Holy Spirit,
  as it was in the beginning
  is now, and ever shall be
  world without end.
  Amen.
    `,
  },
  {
    title: "Fatima Prayer",
    content: `O My Jesus, forgive us our sins, save us from the fires of Hell, lead all souls to Heaven, especially those in most need of Thy mercy.`,
  },
];

/**
 * mysteries data
 * id -> auto
 * title
 * content
 * setItems -> back reference to mysterySetItem
 */
const mysteryData = [
  {
    title: "The Annunciation",
    content: `
Luke 1:26-38

And in the sixth month, the angel Gabriel was sent from God into a city of Galilee, called Nazareth, 
to a virgin espoused to a man whose name was Joseph, of the house of David; and the virgin's name was Mary. 
And the angel being come in, said unto her: Hail, full of grace, the Lord is with thee: blessed art thou among women. 
Who having heard, was troubled at his saying, and thought with herself what manner of salutation this should be. 
And the angel said to her: Fear not, Mary, for thou hast found grace with God. 
Behold thou shalt conceive in thy womb, and shalt bring forth a son; and thou shalt call his name Jesus. 
He shall be great, and shall be called the Son of the most High; and the Lord God shall give unto him the throne of David his father; 
and he shall reign in the house of Jacob forever. 
And of his kingdom there shall be no end. 
And Mary said to the angel: How shall this be done, because I know not man? 
And the angel answering, said to her: The Holy Ghost shall come upon thee, and the power of the most High shall overshadow thee. 
And therefore also the Holy which shall be born of thee shall be called the Son of God. 
And behold thy cousin Elizabeth, she also hath conceived a son in her old age; and this is the sixth month with her that is called barren: 
Because no word shall be impossible with God. 
And Mary said: Behold the handmaid of the Lord; be it done to me according to thy word. And the angel departed from her.
          `,
  },
  {
    title: "The Visitation",
    content: `
Luke 1:39-56

And Mary rising up in those days, went into the hill country with haste into a city of Juda. 
And she entered into the house of Zachary, and saluted Elizabeth. 
And it came to pass, that when Elizabeth heard the the salutation of Mary, the infant leaped in her womb. 
And Elizabeth was filled with the Holy Ghost. 
And she cried out with a loud voice, and said: Blessed art thou among women, and blessed is the fruit of thy womb. 
And whence is this to me, that the mother of my Lord should come to me? 
For behold as soon as the voice of thy salutation sounded in my ears, the infant in my womb leaped for joy. 
And blessed art thou that hast believed, because those things shall be accomplished that were spoken to thee by the Lord. 
And Mary said: My soul doth magnify the Lord. 
And my spirit hath rejoiced in God my Saviour. 
Because he hath regarded the humility of his handmaid; for behold from henceforth all generations shall call me blessed. 
Because he that is mighty hath done great things to me; and holy is his name. 
And his mercy is from generation unto generations, to them that fear him. 
He hath shewed might in his arm: he hath scattered the proud in the conceit of their heart. 
He hath put down the mighty from their seat, and hath exalted the humble. 
He hath filled the hungry with good things; and the rich he hath sent empty away. 
He hath received Israel his servant, being mindful of his mercy: 
As he spoke to our fathers, to Abraham and to his seed forever. 
And Mary abode with her about three months; and she returned to her own house.
          `,
  },
  {
    title: "The Nativity",
    content: `
Luke 2:1-20

And it came to pass, that in those days there went out a decree from Caesar Augustus, that the whole world should be enrolled. 
This enrolling was first made by Cyrinus, the governor of Syria. 
And all went to be enrolled, every one into his own city. 
And Joseph also went up from Galilee, out of the city of Nazareth, into Judea, to the city of David, which is called Bethlehem: because he was of the house and family of David, 
To be enrolled with Mary his espoused wife, who was with child. 
And it came to pass, that when they were there, her days were accomplished, that she should be delivered. 
And she brought forth her firstborn son, and wrapped him up in swaddling clothes, and laid him in a manger: because there was no room for them in the inn. 
And there were in the same country shepherds watching, and keeping the night watches over their flock. 
And behold an angel of the Lord stood by them, and the brightness of God shone round about them; and they feared with a great fear. 
And the angel said to them: Fear not; for, behold, I bring you good tidings of great joy, that shall be to all the people: 
For, this day, is born to you a Saviour, who is Christ the Lord, in the city of David. 
And this shall be a sign unto you. You shall find the infant wrapped in swaddling clothes, and laid in a manger. 
And suddenly there was with the angel a multitude of the heavenly army, praising God, and saying: 
Glory to God in the highest; and on earth peace to men of good will. 
And it came to pass, after the angels departed from them into heaven, the shepherds said one to another: Let us go over to Bethlehem, and let us see this word that is come to pass, which the Lord hath shewed to us. 
And they came with haste; and they found Mary and Joseph, and the infant lying in the manger. 
And seeing, they understood of the word that had been spoken to them concerning this child. 
And all that heard, wondered; and at those things that were told them by the shepherds. 
But Mary kept all these words, pondering them in her heart. 
And the shepherds returned, glorifying and praising God for all the things they had heard and seen, as it was told unto them.
          `,
  },
  {
    title: "The Presentation",
    content: `
Luke 2:22-38

And after the days of her purification, according to the law of Moses, were accomplished, they carried him to Jerusalem, to present him to the Lord. 
As it is written in the law of the Lord: Every male opening the womb shall be called holy to the Lord: 
And to offer a sacrifice, according as it is written in the law of the Lord, a pair of turtledoves, or two young pigeons. 
And behold there was a man in Jerusalem named Simeon, and this man was just and devout, waiting for the consolation of Israel; and the Holy Ghost was in him. 
And he had received an answer from the Holy Ghost, that he should not see death, before he had seen the Christ of the Lord. 
And he came by the Spirit into the temple. 
And when his parents brought in the child Jesus, to do for him according to the custom of the law, 
He also took him into his arms, and blessed God, and said: 
Now thou dost dismiss thy servant, O Lord, according to thy word in peace; 
Because my eyes have seen thy salvation, 
Which thou hast prepared before the face of all peoples: 
A light to the revelation of the Gentiles, and the glory of thy people Israel. 
And his father and mother were wondering at those things which were spoken concerning him. 
And Simeon blessed them, and said to Mary his mother: Behold this child is set for the fall, and for the resurrection of many in Israel, and for a sign which shall be contradicted; 
And thy own soul a sword shall pierce, that, out of many hearts, thoughts may be revealed. 
And there was one Anna, a prophetess, the daughter of Phanuel, of the tribe of Aser: she was far advanced in years, and had lived with her husband seven years from her virginity. 
And she was a widow until fourscore and four years; who departed not from the temple, by fastings and prayers serving night and day. 
Now she, at the same hour, coming in, confessed to the Lord; and spoke of him to all that looked for the redemption of Israel.
          `,
  },
  {
    title: "Finding in the Temple",
    content: `
Luke 2:41-52

And his parents went every year to Jerusalem, at the solemn day of the pasch. 
And when he was twelve years old, they going up into Jerusalem, according to the custom of the feast, 
And having fulfilled the days, when they returned, the child Jesus remained in Jerusalem; and his parents knew it not. 
And thinking that he was in the company, they came a day's journey, and sought him among their kinsfolks and acquaintance. 
And not finding him, they returned into Jerusalem, seeking him. 
And it came to pass, that, after three days, they found him in the temple, sitting in the midst of the doctors, hearing them, and asking them questions. 
And all that heard him were astonished at his wisdom and his answers. 
And seeing him, they wondered. And his mother said to him: Son, why hast thou done so to us? behold thy father and I have sought thee sorrowing. 
And he said to them: How is it that you sought me? did you not know, that I must be about my father's business? 
And they understood not the word that he spoke unto them. 
And he went down with them, and came to Nazareth, and was subject to them. And his mother kept all these words in her heart. 
And Jesus advanced in wisdom, and age, and grace with God and men.
          `,
  },

  {
    title: "The Agony in the Garden",
    content: `
Matthew 26:36-46

Then Jesus came with them into a country place which is called Gethsemani. And he said to his disciples: Sit you here, till I go yonder and pray. 
And taking with him Peter and the two sons of Zebedee, he began to grow sorrowful and to be sad. 
Then he saith to them: My soul is sorrowful even unto death: stay you here and watch with me. 
And going a little further, he fell upon his face, praying, and saying: My Father, if it be possible, let this chalice pass from me. Nevertheless not as I will, but as thou wilt. 
And he cometh to his disciples, and findeth them asleep, and he saith to Peter: What? Could you not watch one hour with me? 
Watch ye, and pray that ye enter not into temptation. The spirit indeed is willing, but the flesh is weak. 
Again the second time, he went and prayed, saying: My Father, if this chalice may not pass away, but I must drink it, thy will be done. 
And he cometh again and findeth them sleeping: for their eyes were heavy. 
And leaving them, he went again: and he prayed the third time, saying the selfsame word. 
Then he cometh to his disciples, and said to them: Sleep ye now and take your rest: behold the hour is at hand, and the Son of man shall be betrayed into the hands of sinners. 
Rise, let us go: behold he is at hand that will betray me.
          `,
  },
  {
    title: "The Scourging at the Pillar",
    content: `
Matthew 27:26

Then he released to them Barabbas, and having scourged Jesus, delivered him unto them to be crucified.
          `,
  },
  {
    title: "The Crowning with Thorns",
    content: `
Matthew 27:27-31

Then the soldiers of the governor taking Jesus into the hall, gathered together unto him the whole band. 
And stripping him, they put a scarlet cloak about him. 
And platting a crown of thorns, they put it upon his head, and a reed in his right hand. 
And bowing the knee before him, they mocked him, saying: Hail, King of the Jews. 
And spitting upon him, they took the reed, and struck his head. 
And after they had mocked him, they took off the cloak from him, and put on him his own garments, and led him away to crucify him.
          `,
  },
  {
    title: "The Carrying of the Cross",
    content: `
Luke 23:26-32

And as they led him away, they laid hold of one Simon of Cyrene, coming from the country: and they laid the cross on him to carry after Jesus. 
And there followed him a great multitude of people, and of women, who bewailed and lamented him. 
But Jesus turning to them, said: Daughters of Jerusalem, weep not over me; but weep for yourselves and for your children. 
For behold, the days shall come, wherein they will say: Blessed are the barren, and the wombs that have not borne, and the breasts that have not given suck. 
Then shall they begin to say to the mountains: Fall upon us; and to the hills: Cover us. 
For if in the green wood they do these things, what shall be done in the dry? 
And there were also two other malefactors led with him to be put to death.
          `,
  },
  {
    title: "The Crucifixion",
    content: `
Luke 23:33-46

And when they were come to the place which is called Calvary, they crucified him there: and the robbers, one on the right hand and the other on the left. 
And Jesus said: Father, forgive them, for they know not what they do. But they, dividing his garments, cast lots. 
And the people stood beholding, and the rulers with them derided him, saying: He saved others; let him save himself, if he be Christ, the elect of God. 
And the soldiers also mocked him, coming to him, and offering him vinegar, 
And saying: If thou be the king of the Jews, save thyself. 
And there was also a superscription written over him in letters of Greek, and Latin, and Hebrew: THIS IS THE KING OF THE JEWS. 
And one of those robbers who were hanged, blasphemed him, saying: If thou be Christ, save thyself and us. 
But the other answering, rebuked him, saying: Neither dost thou fear God, seeing thou art under the same condemnation? 
And we indeed justly, for we receive the due reward of our deeds; but this man hath done no evil. 
And he said to Jesus: Lord, remember me when thou shalt come into thy kingdom. 
And Jesus said to him: Amen I say to thee, this day thou shalt be with me in paradise. 
And it was almost the sixth hour; and there was darkness over all the earth until the ninth hour. 
And the sun was darkened, and the veil of the temple was rent in the midst. 
And Jesus crying with a loud voice, said: Father, into thy hands I commend my spirit. And saying this, he gave up the ghost.
          `,
  },
  {
    title: "The Resurrection",
    content: `
Luke 24:1-12

And on the first day of the week, very early in the morning, they came to the sepulchre, bringing the spices which they had prepared. 
And they found the stone rolled back from the sepulchre. 
And going in, they found not the body of the Lord Jesus. 
And it came to pass, as they were astonished in their mind at this, behold, two men stood by them in shining apparel. 
And as they were afraid, and bowed down their countenance towards the ground, they said unto them: Why seek you the living with the dead? 
He is not here, but is risen. Remember how he spoke unto you, when he was yet in Galilee, 
Saying: The Son of man must be delivered into the hands of sinful men, and be crucified, and the third day rise again. 
And they remembered his words. 
And going back from the sepulchre, they told all these things to the eleven, and to all the rest. 
And it was Mary Magdalen, and Joanna, and Mary of James, and the other women that were with them, who told these things to the apostles. 
And these words seemed to them as idle tales; and they did not believe them. 
But Peter rising up, ran to the sepulchre; and stooping down, he saw the linen cloths laid by themselves; and went away wondering in himself at that which was come to pass.
          `,
  },
  {
    title: "The Ascension",
    content: `
Luke 24:50-53

And he led them out as far as Bethania: and lifting up his hands, he blessed them. 
And it came to pass, whilst he blessed them, he departed from them, and was carried up to heaven. 
And they adoring went back into Jerusalem with great joy. 
And they were always in the temple, praising and blessing God. Amen.
          `,
  },
  {
    title: "The Descent of the Holy Spirit",
    content: `
Acts 2:1-13

And when the days of the Pentecost were accomplished, they were all together in one place: 
And suddenly there came a sound from heaven, as of a mighty wind coming: and it filled the whole house where they were sitting. 
And there appeared to them parted tongues as it were of fire: and it sat upon every one of them: 
And they were all filled with the Holy Ghost: and they began to speak with divers tongues, according as the Holy Ghost gave them to speak. 
Now there were dwelling at Jerusalem, Jews, devout men, out of every nation under heaven. 
And when this was noised abroad, the multitude came together, and were confounded in mind, because that every man heard them speak in his own tongue. 
And they were all amazed, and wondered, saying: Behold, are not all these that speak Galileans? 
And how have we heard, every man our own tongue wherein we were born? 
Parthians, and Medes, and Elamites, and inhabitants of Mesopotamia, Judea, and Cappadocia, Pontus and Asia, 
Phrygia, and Pamphylia, Egypt, and the parts of Libya about Cyrene, and strangers of Rome, 
Jews also, and proselytes, Cretes, and Arabians: we have heard them speak in our own tongues the wonderful works of God.
          `,
  },
  {
    title: "The Assumption of Mary",
    content: `
Revelation 12:1

And a great sign appeared in heaven: A woman clothed with the sun, and the moon under her feet, and on her head a crown of twelve stars.
          `,
  },
  {
    title: "The Coronation of Mary",
    content: `
Revelation 12:1-6

And a great sign appeared in heaven: A woman clothed with the sun, and the moon under her feet, and on her head a crown of twelve stars. 
And being with child, she cried travailing in birth, and was in pain to be delivered. 
And there was seen another sign in heaven: and behold a great red dragon, having seven heads, and ten horns: and on his heads seven diadems: 
And his tail drew the third part of the stars of heaven, and cast them to the earth: and the dragon stood before the woman who was ready to be delivered; that, when she should be delivered, he might devour her son. 
And she brought forth a man child, who was to rule all nations with an iron rod: and her son was taken up to God, and to his throne. 
And the woman fled into the wilderness, where she had a place prepared by God, that there they should feed her, a thousand two hundred sixty days.
          `,
  },
  {
    title: "The Baptism of Jesus",
    content: `
Matthew 3:13-17

Then cometh Jesus from Galilee to the Jordan, unto John, to be baptized by him. 
But John stayed him, saying: I ought to be baptized by thee, and comest thou to me? 
And Jesus answering, said to him: Suffer it to be so now. For so it becometh us to fulfill all justice. Then he suffered him. 
And Jesus being baptized, forthwith came out of the water: and lo, the heavens were opened to him: and he saw the Spirit of God descending as a dove, and coming upon him. 
And behold a voice from heaven, saying: This is my beloved Son, in whom I am well pleased.
          `,
  },
  {
    title: "The Wedding at Cana",
    content: `
John 2:1-11

And the third day, there was a marriage in Cana of Galilee: and the mother of Jesus was there. 
And Jesus also was invited, and his disciples, to the marriage. 
And the wine failing, the mother of Jesus saith to him: They have no wine. 
And Jesus saith to her: Woman, what is that to me and to thee? my hour is not yet come. 
His mother saith to the waiters: Whatsoever he shall say to you, do ye. 
Now there were set there six waterpots of stone, according to the manner of the purifying of the Jews, containing two or three measures apiece. 
Jesus saith to them: Fill the waterpots with water. And they filled them up to the brim. 
And Jesus saith to them: Draw out now, and carry to the chief steward of the feast. And they carried it. 
And when the chief steward had tasted the water made wine, and knew not whence it was, but the waiters knew who had drawn the water; the chief steward calleth the bridegroom, 
And saith to him: Every man at first setteth forth good wine, and when men have well drunk, then that which is worse. But thou hast kept the good wine until now. 
This beginning of miracles did Jesus in Cana of Galilee; and manifested his glory, and his disciples believed in him.
          `,
  },
  {
    title: "The Proclamation of the Kingdom",
    content: `
Mark 1:14-15

And after that John was delivered up, Jesus came into Galilee, preaching the gospel of the kingdom of God, 
And saying: The time is accomplished, and the kingdom of God is at hand: repent, and believe the gospel.
          `,
  },
  {
    title: "The Transfiguration",
    content: `
Luke 9:28-36

And it came to pass, about eight days after these words, that he took Peter and James and John, and went up into a mountain to pray. 
And whilst he prayed, the shape of his countenance was altered, and his raiment became white and glittering. 
And behold two men were talking with him. And they were Moses and Elias, 
Appearing in majesty. And they spoke of his decease that he should accomplish in Jerusalem. 
But Peter and they that were with him were heavy with sleep. And waking, they saw his glory, and the two men that stood with him. 
And it came to pass that, as they were departing from him, Peter saith to Jesus: Master, it is good for us to be here; and let us make three tabernacles, one for thee, and one for Moses, and one for Elias: not knowing what he said. 
And as he spoke these things, there came a cloud, and overshadowed them; and they were afraid, when they entered into the cloud. 
And a voice came out of the cloud, saying: This is my beloved Son; hear him. 
And whilst the voice was uttered, Jesus was found alone. And they held their peace, and told no man in those days any of these things which they had seen.
          `,
  },
  {
    title: "The Institution of the Eucharist",
    content: `
Luke 22:14-20

And when the hour was come, he sat down, and the twelve apostles with him. 
And he said to them: With desire I have desired to eat this pasch with you, before I suffer. 
For I say to you, that from this time I will not eat it, till it be fulfilled in the kingdom of God. 
And having taken the chalice, he gave thanks, and said: Take, and divide it among you. 
For I say to you, that I will not drink of the fruit of the vine, till the kingdom of God come. 
And taking bread, he gave thanks, and brake; and gave to them, saying: This is my body, which is given for you. Do this for a commemoration of me. 
In like manner the chalice also, after he had supped, saying: This is the chalice, the new testament in my blood, which shall be shed for you.
          `,
  },
];

/**
 * MysterySet Data
 * A grouping of 5 Mysteries that together form a specific type of Rosary prayer for a given day.
 * id -> auto
 * name
 * day
 * items -> Links the 5 Mysteries into this set, ordered 1-5
 * rosaries -> back reference
 */
const mysterySetsData = [
  {
    name: "Joyful Mysteries",
    day: "Monday",
  },
  {
    name: "Sorrowful Mysteries",
    day: "Tuesday",
  },
  {
    name: "Glorious Mysteries",
    day: "Wednesday",
  },
  {
    name: "Luminous Mysteries",
    day: "Thursday",
  },
  {
    name: "Sorrowful Mysteries",
    day: "Friday",
  },
  {
    name: "Joyful Mysteries",
    day: "Saturday",
  },
  {
    name: "Glorious Mysteries",
    day: "Sunday",
  },
];

/**
 * Seed main function
 * Seed prayers, mysteries, and mysterySets statically
 * seed mysterySetITem dynamically from the mysteries first and then with the prayers
 */
export async function main() {
  await prisma.prayer.createMany({ data: prayersData });
  await prisma.mystery.createMany({ data: mysteryData });
  await prisma.mysterySet.createMany({ data: mysterySetsData });

  //fetch the ids of mysteries and the mysterysets to be used in the mysterysetitem after inserting the necessary data
  //in asc order -> to place them correctly into mystery sets
  const mysteries = await prisma.mystery.findMany({ orderBy: { id: "asc" } });
  const mysterySets = await prisma.mysterySet.findMany({
    orderBy: { id: "asc" },
  });

  //initialize mysterySetItem with mysteries (dynamically)
  //assign 5 mysteries per mystery set
  //loop over the mystersets
  let currentMysteryIndex = 0; //0-19 (20 mysteries)
  for (const mysterySet of mysterySets) {
    //mystery order in a rosary (1 to 5)
    for (let order = 1; order <= 5; order++) {
      await prisma.mysterySetItem.create({
        data: {
          mysterySetId: mysterySet.id,
          mysteryId: mysteries[currentMysteryIndex].id,
          orderInSet: order,
        },
      });
      currentMysteryIndex++;
    }
  }

  //seed the mysterySetItem with prayers using the prayers dynamically
  // Fetch all prayers once, in order
  const allPrayers = await prisma.prayer.findMany({ orderBy: { id: "asc" } });

  // Fetch all MysterySetItems (initiated above, ready for prayers)
  const mysterySetItems = await prisma.mysterySetItem.findMany({
    orderBy: { id: "asc" },
  });

  //prayer sequence in the mystery
  const sequence = {
    "Our Father": 1,
    "Hail Mary": 2,
    "Glory Be": 3,
    "Fatima Prayer": 4,
  };

  //Right now, we only need the our father, hail mary, glory be, and farima prayers
  //loop over the prayers
  for (const prayer of allPrayers) {
    if (
      prayer.title === "Our Father" ||
      prayer.title === "Hail Mary" ||
      prayer.title === "Glory Be" ||
      prayer.title === "Fatima Prayer"
    ) {
      //loop over the mysterySetItems to add the prayer to all of them
      for (const item of mysterySetItems) {
        await prisma.mysterySetItemPrayer.create({
          data: {
            orderInSequence: sequence[prayer.title],
            prayerId: prayer.id,
            mysterySetItemId: item.id,
          },
        });
      }
    }
  }

  /**
   * Creating default Rosaries
   */
  //rosaries prayers titles
  const openingTitles = ["Sign of the Cross", "Apostles' Creed", "Our Father"];
  const closingTitles = ["Hail Holy Queen", "Sign of the Cross"];

  //creating the default rosaries for the days of he week using mysterySets
  for (const { day } of mysterySetsData) {
    //find the mystery set of the day
    const daySet = await prisma.mysterySet.findFirst({
      where: { day },
    });
    if (!daySet) throw new Error(`Not sets are available for ${day}!`);

    //initiate the day's rosary
    const dayRosary = await prisma.rosary.create({
      data: { day, mysterySetId: daySet.id },
    });

    //convert all prayers to a map, with the title to safely get the ids
    const prayersMap = new Map(allPrayers.map((p) => [p.title, p]));

    //add opening prayers to the rosary
    await prisma.rosaryOpeningPrayer.createMany({
      data: openingTitles.map((t, i) => {
        const prayer = prayersMap.get(t);

        if (!prayer) throw new Error(`No prayer found with title: ${t}`);

        return {
          rosaryId: dayRosary.id,
          prayerId: prayer.id,
          orderInSet: i + 1,
        };
      }),
    });

    //add closing prayers to the rosary
    await prisma.rosaryClosingPrayer.createMany({
      data: closingTitles.map((t, i) => {
        const prayer = prayersMap.get(t);

        if (!prayer)
          throw new Error("No prayer has been found with this title!");

        return {
          rosaryId: dayRosary.id,
          prayerId: prayer.id,
          orderInSet: i + 1,
        };
      }),
    });
  }
}

main();
