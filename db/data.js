


const castles = [
    {
        "name": "Sleeping Beauty Castle",
        "imageUrl": "http://www.miceshots.com/usr/67/03-02-15-DSC_2448.jpg",
        "size": 50000,
        "location": "United States",
        "price": 1500000,
        "amenitites": {
            "window": 20, 
            "room": 10, 
            "prince": 1
        },
        "description": "Sleeping Beauty Castle is a fairy tale castle at the center of Disneyland and Hong Kong Disneyland. It is based on the late-19th century Neuschwanstein Castle in Bavaria, Germany.",
        "historyLink": "https://en.wikipedia.org/wiki/Sleeping_Beauty_Castle",
        "category": ["Disney", "Magic", "Princess"]
    },
    {
        "name": "Hogwarts School of Witchcraft and Wizardry",
        "imageUrl": "http://o.aolcdn.com/hss/storage/midas/ce16e49e6d36c7140d80e8d3d0d5e94f/203657234/Hogwarts+Castle+lights-WWoHP+at+USH.jpg",
        "size": 30000,
        "location": "Scotland",
        "price": 4000000,
        "description": "Hogwarts School of Witchcraft and Wizardry is the Scottish wizarding school, located in the Highlands of Scotland. It takes students from Scotland, England, Ireland, Northern Ireland and Wales. The castle is located in the mountains near a loch. The precise location of the school could never be uncovered because it was rendered Unplottable. To Muggles the school looks like an old abandoned castle. Similarly, most wizarding schools locations are protected in order to prevent their ways of teaching being revealed, as well as protect the students and schools themselves from any harm.",
        "historyLink": "http://harrypotter.wikia.com/wiki/Hogwarts_School_of_Witchcraft_and_Wizardry",
        "category": ["Magic", "School", "Wizards", "Witches"]
    },
    {
        "name": "Castle Black",
        "imageUrl": "http://vignette2.wikia.nocookie.net/gameofthrones/images/7/7b/Castle_Black.jpg/revision/latest/scale-to-width-down/270?cb=20110920111941",
        "size": 10000,
        "location": "Northern end of the Kingsroad",
        "price": 1000000,
        "description": "Castle Black is the primary headquarters and redoubt of the Night's Watch. It is located roughly halfway along the length of the Wall on its southern side, at the northern end of the Kingsroad. It is a dark and chilling home to its garrison. Castle Black is one of only three manned castles left on the Wall along with Eastwatch-by-the-Sea and The Shadow Tower. There are nineteen castles along the Wall, but as their numbers fell over the centuries the Night's Watch had to abandon sixteen of them. Castle Black is located between the unmanned castles of Queensgate and Oakensheild.",
        "historyLink": "http://gameofthrones.wikia.com/wiki/Castle_Black",
        "category": ["Freezing", "John Snow"]
    },
    {
        "name": "Howl's Moving Castle",
        "imageURL": 
            "https://ladygeekgirl.files.wordpress.com/2013/06/howls_moving_castle_artwork_prop_10.jpg",
        "size": 25250,
        "location": "anywhere",
        "price": 5126000,
        "amenities": {
            "windows": "varies",
            "turrets": "varies",
            "princes": 0,
            "unicorns": 0,
            "rooms": "varies"
        },
        "description": "Howl's castle is a tall, black building with four thin turrets. It seems to be made of blocks of coal (a suitable habitat for a fire demon) and is \"bespelled to hold together.\" It has four doors on the outside, although three are made inaccessible by an invisible wall.",
        "historyLink": "https://en.wikipedia.org/wiki/Howl%27s_Moving_Castle#Howl.27s_moving_castle",
        "category": ["Fire Demons", "Moves"]
    }
]

    //users

const users = [
    {
        "firstName": "Aurore",
        "lastName": "Disney",
        "email": "aurore@disney.com",
        "username": "sleepyhead",
        "address": "1234 disneyway, anaheim, CA 91745",
        "password": "1234"
    },
    {
        "firstName": "Sophie",
        "lastName": "Howl",
        "email": "sophie.howl@gmail.com",
        "username": "sophie",
        "address": "5 Hanover Sq, New York City, NY, 10004",
        "password": "password"
    }
]


    //orders
const orders = [
    {
        "date": "1/1/2016",
        "shippingAddress": "1234 disneyway, anaheim, CA 91745"

    },
    {
        "date": "10/31/2016",
        "discountCode": "HALOWEEN",
        "discountRate": "10",
        "shippingAddress": "5 Hanover Sq., New York City, NY, 10004"
    }
]

    //reviews + memories
const reviews = [
    {
        "content": "Beautiful castle in the happiest place on Earth!",
        "star": 5,
        "date": "2015-12-12",
        "subject": "AWESOME!"
    },
    {
        "content": "Very great castle",
        "star": 1,
        "date": "2016-10-31",
        "subject": "Great castle"
    } 
]


module.exports = {castles,reviews,users}
//need to add orders and create orders model