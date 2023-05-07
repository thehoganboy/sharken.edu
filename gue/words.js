let wordList = [
    {
        word: "python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "love",
        hint: "Strong affection"
    },
    {
        word: "ocean",
        hint: "One of the large bodies of water separating the continents."
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "ghost",
        hint: "who scares children"
    },
    {
        word: "programmer",
        hint: "who create program"
    },
    {
        word: "coding",
        hint: "related to programming"
    },
    {
        word: "volcano",
        hint: "lava storage"
    },
    {
        word: "skater",
        hint: "skateboard player"
    },
    {
        word: "king",
        hint: "royal person"
    },
    {
        word: "gif",
        hint: "a file format for image"
    },
    {
        word: "mental",
        hint: "related to the mind"
    },
    {
        word: "map",
        hint: "diagram represent of an area"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "star",
        hint: "appeared in the evening"
    },
    {
        word: "chess",
        hint: "related to a indoor game"
    },
    {
        word: "grandpa",
        hint: "parent's father"
    },
    {
        word: "chicken",
        hint: "what animal has two legs"
    },
    {
        word: "dragon",
        hint: "a fiction animal"
    },
    {
        word: "silver",
        hint: "precious greyish-white metal"
    },
    {
        word: "flute",
        hint: "a musical instrument"
    },
    {
        word: "email",
        hint: "related to exchanging message"
    },
    {
        word: "air",
        hint: "related to a gas"
    },
    {
        word: "idea",
        hint: "a thought or suggestion"
    },
    {
        word: "server",
        hint: "related to computer or system"
    },
    {
        word: "search",
        hint: "act to find something"
    },
    {
        word: "key",
        hint: "small piece of metal"
    },
    {
        word: "egypt",
        hint: "a country name"
    },
    {
        word: "photo",
        hint: "representation of person or scene"
    },
    {
        word: "rain",
        hint: "related to a water"
    },
    {
        word: "rain",
        hint: "related to a water"
    },
    {
        word: "handsome",
        hint: "pretty boy"
    },
    {
        word: "single",
        hint: "do not love anyone"
    },
    {
        word: "sneaker",
        hint: "sport shoes"
    },
    {
        word: "tennis",
        hint: "a sport"
    },
    {
        word: "brain",
        hint: "body control"
    },
    {
        word: "television",
        hint: "thing use to watch movies at home"
    },
    {
        word: "computer",
        hint: "uses to code"
    },
    {
        word: "glasses",
        hint: "for eye protection"
    },
    {
        word: "social",
        hint: "people around us"
    },
    {
        word: "research",
        hint: "the process of learning about something"
    },
    {
        word: "train",
        hint: "a means of transport"
    },
    {
        word: "shark",
        hint: "a kind of fish"
    },
    {
        word: "flower",
        hint: "to give someone on an occasion"
    },
    {
        word: "playlist",
        hint: "including favorite songs"
    },
    {
        word: "cloud",
        hint: "made of steam"
    },
    {
        word: "astro",
        hint: "related to space"
    },
    {
        word: "physic",
        hint: "a subject"
    },
    {
        word: "hiphop",
        hint: "a culture from the street"
    },
    {
        word: "respect",
        hint: "an attitude of consideration or high regard"
    },
    {
        word: "communicate",
        hint: "to impart"
    },
    {
        word: "woman",
        hint: "an adult female human"
    },
    {
        word: "guess",
        hint: "To reach a partly unqualified conclusion"
    },
    {
        word: "erupt",
        hint: "To eject something violently"
    },
    {
        word: "another",
        hint: "An additional one of the same kind"
    },
    {
        word: "future",
        hint: "The time ahead"
    },
    {
        word: "hobby",
        hint: "An activity that one enjoys doing in one's spare time"
    },
    {
        word: "search",
        hint: "An attempt to find something"
    },
    {
        word: "close",
        hint: "An end or conclusion"
    },
    {
        word: "tired",
        hint: "To become sleepy or weary"
    },
    {
        word: "pencil",
        hint: "A paintbrush"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "aesthetic",
        hint: "concerned with beauty or the appreciation of beauty"
    },
    {
        word: "anonymous",
        hint: "not identified by name; of unknown name"
    },
    {
        word: "bet",
        hint: "to risk money on the outcome of an event or situation; a wager"
    },
    {
        word: "hat",
        hint: "a covering for the head; a particular role or job"
    },
    {
        word: "hat",
        hint: "a covering for the head; a particular role or job"
    },
    {
        word: "dance",
        hint: "a series of movements performed to music"
    },
    {
        word: "grape",
        hint: "a small, sweet fruit with a thin skin that grows in clusters on vines"
    },
    { word: "apple", hint: "a round fruit with red, green or yellow skin and a white interior" },
    { word: "basic", hint: "fundamental, essential, or simple" },
    { word: "beach", hint: "a sandy or pebbly shore next to a body of water" },
    { word: "bread", hint: "a staple food made from flour, water, and yeast or baking powder" },
    { word: "brush", hint: "a tool with bristles or other fibers used for cleaning or painting" },
    { word: "chair", hint: "a piece of furniture with a back and seat for sitting on" },
    { word: "child", hint: "a young human being below the age of puberty" },
    { word: "dance", hint: "a series of movements performed to music" },
    { word: "earth", hint: "the planet we live on" },
    { word: "email", hint: "a message sent electronically over the internet" },
    { word: "field", hint: "an area of land used for growing crops or playing sports" },
    { word: "fruit", hint: "the sweet and fleshy product of a tree or other plant that contains seeds" },
    { word: "funny", hint: "causing laughter or amusement" },
    { word: "glass", hint: "a transparent or translucent material used for windows, drinking vessels, etc." },
    { word: "grape", hint: "a small, sweet fruit with a thin skin that grows in clusters on vines" },
    { word: "green", hint: "a color between blue and yellow, resembling the color of grass or foliage" },
    { word: "house", hint: "a building used for living in" },
    { word: "image", hint: "a representation of the external form of a person or thing" },
    { word: "juice", hint: "a liquid obtained from fruits or vegetables" },
    { word: "knife", hint: "a cutting instrument with a sharp blade and handle" },
    { word: "light", hint: "a form of energy that makes things visible or bright" },
    { word: "money", hint: "a medium of exchange in the form of coins, banknotes, or digital currency" },
    { word: "music", hint: "vocal or instrumental sounds combined in a way that produces beauty of form, harmony, and expression of emotion" },
    { word: "nurse", hint: "a person trained to care for the sick or infirm, especially in a hospital" },
    { word: "paper", hint: "a thin material used for writing or printing on" },
    { word: "party", hint: "a social gathering of invited guests, typically involving eating, drinking, and entertainment" },
    { word: "plant", hint: "a living organism that produces its own food through photosynthesis" },
    { word: "pizza", hint: "a dish of Italian origin consisting of a flat, round base of dough baked with toppings" },
    { word: "radio", hint: "a device for receiving and transmitting radio waves" },
    { word: "banana", hint: "a long curved fruit with yellow skin and soft sweet flesh" },
    { word: "camera", hint: "a device used to capture visual images" },
    { word: "carpet", hint: "a floor covering made of thick woven fabric" },
    { word: "cookie", hint: "a sweet baked food made from flour, sugar, and butter" },
    { word: "cotton", hint: "a soft white fibrous substance that surrounds the seeds of a tropical and subtropical plant" },
    { word: "danger", hint: "the possibility of harm or injury" },
    { word: "dollar", hint: "the basic monetary unit of the United States and other countries" },
    { word: "flower", hint: "the seed-bearing part of a plant, consisting of reproductive organs surrounded by colorful petals" },
    { word: "guitar", hint: "a stringed musical instrument with a fretted fingerboard and a body shaped like a figure-eight" },
    { word: "hockey", hint: "a team sport played on ice, in which players use sticks to shoot a small rubber puck into the opposing team's goal" },
    { word: "jacket", hint: "a short coat, typically with long sleeves and a front opening" },
    { word: "jungle", hint: "an area of land overgrown with dense forest and tangled vegetation, typically in the tropics" },
    { word: "kitten", hint: "a young domestic cat" },
    { word: "laptop", hint: "a portable computer that can be used on one's lap" },
    { word: "lemon", hint: "a yellow citrus fruit with acidic juice" },
    { word: "liquid", hint: "a substance that flows freely but is of constant volume" },
    { word: "lizard", hint: "a reptile with a long body, four legs, and a tapering tail" },
    { word: "mirror", hint: "a surface that reflects light, often used for seeing one's own reflection" },
    { word: "orange", hint: "a round fruit with a tough bright reddish-yellow rind and edible juicy pulp" },
    { word: "pencil", hint: "a tool for writing or drawing, consisting of a thin rod of graphite or other material enclosed in a long thin piece of wood" },
    { word: "pepper", hint: "a pungent, aromatic spice obtained from the dried berries of a climbing vine" },
    { word: "pickle", hint: "a small cucumber preserved in vinegar, brine, or a similar solution" },
    { word: "pocket", hint: "a small bag or pouch in a garment for carrying small items" },
    { word: "potato", hint: "a starchy plant tuber that is one of the world's most important food crops" },
    { word: "purple", hint: "a color intermediate between red and blue" },
    { word: "rabbit", hint: "a small furry animal with long ears and a short tail" },
    { word: "baby", hint: "a very young child, especially one that has not yet begun to walk or talk" },
    { word: "book", hint: "a written or printed work consisting of pages glued or sewn together along one side" },
    { word: "cake", hint: "a sweet baked food made from a mixture of flour, sugar, and other ingredients" },
    { word: "card", hint: "a small rectangular piece of stiff paper used for writing or printing on" },
    { word: "coin", hint: "a flat, typically round piece of metal used as money" },
    { word: "desk", hint: "a piece of furniture with a flat or sloping surface and typically with drawers, used for working at, writing on, or reading from" },
    { word: "door", hint: "a hinged, sliding, or revolving barrier at the entrance to a building, room, or vehicle" },
    { word: "fire", hint: "combustion or burning, in which substances combine chemically with oxygen from the air and typically give out bright light, heat, and smoke" },
    { word: "fish", hint: "a cold-blooded vertebrate animal that lives in water, typically with gills, fins, and a streamlined body" },
    { word: "flag", hint: "a piece of cloth or similar material, typically rectangular or triangular, with a design or colors symbolizing a country or institution" },
    { word: "game", hint: "an activity engaged in for diversion or amusement, often involving a set of rules or goals" },
    { word: "hair", hint: "any of the fine threadlike strands growing from the skin of humans and animals" },
    { word: "hand", hint: "the end part of a person's arm beyond the wrist, including the palm, fingers, and thumb" },
    { word: "home", hint: "the place where one lives permanently, especially as a member of a family or household" },
    { word: "idea", hint: "a thought or suggestion as to a possible course of action" },
    { word: "iron", hint: "a strong, hard magnetic silvery-gray metal" },
    { word: "joke", hint: "a thing that someone says to cause amusement or laughter" },
    { word: "kiss", hint: "touch or caress with the lips as a sign of love, sexual desire, or greeting" },
    { word: "lamp", hint: "a device for giving light, either one consisting of an electric bulb together with its holder and shade or cover, or one burning gas or oil and consisting of a wick or mantle and a glass shade" },
    { word: "leaf", hint: "a flattened structure of a higher plant, typically green and blade-like, that is attached to a stem directly or via a stalk" },
    { word: "life", hint: "the existence of an individual human being or animal" },
    { word: "line", hint: "a long, narrow mark or band" },
    { word: "love", hint: "an intense feeling of deep affection" },

]