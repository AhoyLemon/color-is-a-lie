# Talk

The working doc for *Your brain is dumb, color is a lie, and there's no such thing as "brown"*. It owns the slot, the tone, the running order, both endings, every claim and its source, and what's still open. The deck in `pug/sections/` follows it.

## The slot

| | |
|---|---|
| Event | Yay-Yay Conf [Networking & Lightning Talk Challenge](https://weyweyweb.com/social-events/) |
| When | Wednesday 28 October 2026, 20:00 |
| Where | A venue in Torremolinos, to be announced |
| Format | 5 or 8 minutes. At minute 4 the audience votes: a thumbs-up buys 4 more minutes, otherwise the speaker is cut off at minute 5 |
| House rule | Talks have to be fun, entertaining or "gloriously ridiculous" |
| Audience | The whole Yay-Yay Conf crowd (Wey Wey Web, J On The Beach, Lambda World) plus friends of the event. Frontend devs, designers, functional programmers and data people, at a party, with drinks. International, with plenty of Spaniards |
| Language | English |
| Screen | Unknown, see Open questions |
| The prize | A 10-minute track slot. It doesn't matter: Lemon already speaks at Wey Wey Web (`web-animations`, 29–30 October) and would hand it on |

## Tone

Fast, funny, sardonic philosophy, a little optimistically nihilist. A monologue: no crowd work, no quizzes, nothing that makes the room feel like a kindergarten class.

The thesis comes first, said plainly: color doesn't exist. Light has a wavelength, the cones in your eyes write down three numbers, and your brain makes up the rest, so every time you name a color you're pretending something in your head is out in the world. Everything after that is evidence, and each example is less about words and more about the brain than the one before: languages disagree, the words drift, context changes the color, and the brain invents one outright. Each beat still hands off to the next, and the denouement pulls them together.

The vote at minute 4 is the real structure. The first four minutes have to make the room want more, and the last beat before the vote is a cliffhanger.

## The run

Provisional until the first run-through against the speaker view's timer. The slides carry these times as `data-timing`.

| Clock | Tangent | Time | Notes |
|---|---|---|---|
| 0:00 | Title | 0:15 | Straight in. No hello, no who-am-I |
| 0:15 | Color doesn't exist | 1:00 | The thesis. Light has a wavelength, not a color, and visible light is a sliver between infrared and ultraviolet. The cones in your eyes (not the rods, which don't see color) squash a whole spectrum into three numbers, which is the only reason screens work. Your brain makes up the rest. The opening line is the yes path's one shout. On screen, three captioned photos to talk around: a double rainbow over the Poqueira valley in Andalusia under the shout (a beautiful photo, flatly denied), real cone mosaics from eight living eyes in false color under "Your eye writes three numbers." (Hofer et al. 2005, figure 4, and the talk is how uneven the three cones are), and Kitaoka's red strawberry illusion, where not one pixel has red as its strongest channel, with no caption beyond the thesis line |
| 1:15 | Words that don't translate | 1:15 | Evidence that the names are ours: if color were out in the world, languages would agree on where each one starts and stops. Two slides of paint chips, eight words each: colors only Spanish has a word for, then only English. Ask "what does that say about us?" and leave it hanging until the denouement. "What does that say about us?" sits over Bruegel's *Tower of Babel* (1563) |
| 2:30 | Redheads | 0:40 | Evidence that the words drift too. Orange is named after the fruit, and English had the fruit for a century before the color. Red stretched to cover it, which is why redheads and robin redbreasts are red. Spanish files them under red too: *pelirrojo*, *petirrojo*. Hands straight to brown, which is just orange. On screen: a crate of oranges, "Orange.", and two birth dates (the fruit ~1380, the color ~1502), then Christina Hendricks on black with an eyedropper reading `#cc8039` off her fringe, then the same woman, blonde, full-bleed, with the DLE's *rojo* on a card in the corner on the click ("of hair: a very bright blond"). She's a natural blonde, so the RAE was right. "Spanish files them under red too" is said, not shown |
| 3:10 | There's no such thing as brown | 0:20 | Evidence that context changes the color. Hand-waved, not demoed: brown is orange in a bright room, and the proof needs a dark room and more time than the slot has. Point anyone who wants it at Technology Connections. See Decided for why the demo went. On screen: one orange, `#ff8000`, dimmed from 100% to 30% across five chips on a white room. The dim ones are brown, and nobody painted them |
| 3:30 | Purple isn't real | 0:20 | The cliffhanger, and the strongest evidence before the vote: your brain invents a color no light has. Violet is on the spectrum, purple isn't. Stop before saying why. Over a lavender field, the rainbow's gag again. "Violet is. Purple isn't." is said, not shown |
| 3:50 | Does democracy work? | 0:10 | The vote slide, see The vote |
| 4:00 | Democracy works | 0:10 | Yes path. Over the Acropolis. The vote slide's Yes lands here (`#good`) |
| 4:10 | The purple beat | 0:45 | One slide, three clicks. The spectrum as a line, unlit ultraviolet and infrared past its ends ("Light is a line."). The ends fade and the line bends into a horseshoe ("Your brain bends it into a horseshoe.", `js/purple-beat.js`). The line of purples draws itself across the gap ("Then fills the gap with purple."). The CIE 1931 idea, tidied |
| 4:55 | Your brain made that up | 0:15 | The cliffhanger's lavender again, and on the click an eyedropper reads `#6f5895` off a bush: a hex, and no wavelength |
| 5:10 | The Pillars of Creation | 0:30 | Hubble's half, labelled Hubble, then Webb's on the click, labelled Webb. Colors you've seen, then colors nobody has |
| 5:40 | Shortest to purple, longest to red | 0:20 | A drawing with no caption: the sliver you see, labelled visible, and the band Webb sees, labelled infrared and unlit, with each Pillars filter at its real wavelengths in the color STScI gave it (purple, blue, cyan, yellow, orange, red). "Shortest to purple, longest to red" is said, not shown. The shortest is purple, the color that doesn't exist. First to cut |
| 6:00 | Every spaceship has its own sensors | 0:15 | Webb's mirror in the cleanroom. Plants the spaceship, and hands to the next line |
| 6:15 | Just like you | 0:15 | Ishihara plate 9 (74 for most, 21 for red-green color blindness) and one line, "Just like you." No quiz |
| 6:30 | Some of you are colorblind | 0:30 | La Boqueria, one photo in four bands. It arrives plain. On the click every band takes its eye at once: the top band as the 1.1-red-cones-per-green eye from slide 3 sees it, then lenses for no green cones, no blue cones and no working cones (most common to rarest), each with a drawing of its cones. Then "Some of you are colorblind." No red cones was cut: it looks almost exactly like no green cones, which is the real science and why both are called red-green color blindness |
| 7:00 | We're all colorblind | 0:20 | Jupiter at one moment in January 2017, infrared on top (Gemini North) and ultraviolet below (Hubble), as one planet with a seam. Then "We're all colorblind." |
| 7:20 | You'll never see what someone else sees | 0:20 | The denouement, over Webb's first deep field. The spaceship line and "And that's beautiful" are said, not shown. See The denouement |
| 7:40 | You're at a party | 0:10 | The closer, over Holi in Nandgaon: "You're at a party.", then on the click its subhead, "Go ask someone what they see." |
| 7:50 | Name, handle, URL | 0:10 | Just the lemon, centered, and the address small in mono |
| | **Yes path** | **8:00** | |
| 4:00 | Heel mode | 1:00 | No path, see The heel |
| | **No path** | **5:00** | |

## The vote

The cliffhanger lands, then the vote slide asks "Does democracy work?" with **Yes** and **No** under it. Both are links, and nothing on the slide says where either one goes.

- **Thumbs-up:** click Yes, or just press next. The yes path is the next slide in the deck, so a clicker works.
- **Thumbs-down:** click No, or press **X** to jump to the heel.

In the deck the yes path ends on its own end slide, and the heel comes after it, with its own end slide. Pressing next past the yes path's end would land in the heel. Know that before the night, and enjoy it if it happens.

## The heel

A thumbs-down gets about 60 seconds of pro-wrestling heel: pure heat aimed at the room, out by 5:00. It doesn't recant the talk or go back to color. It's just heat.

**Who the heel is:** the ugly American. Small-minded, arrogant, loud-mouthed, brash, and incurious about any country but his own.

**What the heat is about:** food crimes, and the heel's own incuriosity. First drafts, Lemon's to sharpen or kill:

- chorizo in the paella
- taking a side on onion in the tortilla, loudly
- dinner at ten at night
- sardines on a stick
- asking for "a regular coffee"

**The guardrail:** nothing that puts Donald Trump in anyone's mind. No MAGA cadence, slogans, hats, walls or tariffs, and no flag-waving that reads that way. In 2026 that character is too real to be funny, and it's the one thing that would turn the room for real.

Also off the table: the Spanish flag, Catalonia, Franco, bullfighting, and anything about the Andalusian accent or "lazy south" stereotypes. Those are real fights in Spain, not cheap heat, and some of them land on a prejudice people in Málaga already get from the rest of the country.

## The denouement

Lemon's draft, as he said it:

> The human diaspora means that we share some words and some concepts, but we don't share any actual truth. Every person you meet is in their own spaceship with their own sensors and you can connect, but you'll never ACTUALLY see things the way they see them inside their spaceship. And that's beautiful. It means you can be surprised by people. It means that empathy is the most valuable thing you have.

It pays off two earlier tangents: the opener's "what does that say about us?", and JWST, the literal spaceship with its own sensors. On screen it's one line over Webb's first deep field, "You'll never see what someone else sees.", and the rest is said. Earthrise under "Everyone you meet is in their own spaceship" was cut once "Every spaceship has its own sensors" and "Just like you" made the point earlier.

## Claims

Every claim the talk makes, with the line as delivered, the defence for when someone pushes back, and where it comes from. Sources marked *checked* were looked at on 14 October 2026. Check the rest before they go on a slide.

| Claim | On stage | If challenged | Source |
|---|---|---|---|
| Your brain makes up the rest | "Every color you've ever named was your head pretending to be the world." | Color is a perception, not a property of light. Different spectra that give the same three cone responses look identical (metamers), the same light looks different colors depending on what's around it (brown), and some colors match no single wavelength at all (purple) | Fairchild, *Color Appearance Models*. Wikipedia, "Metamerism (color)" and "Line of purples" |
| Brown is orange with context | "There's no such thing as brown. Brown is orange in a bright room." | Brown is a *related* color: it only appears next to something brighter. A dim orange light alone in the dark looks orange, never brown | Technology Connections, "Brown; color is weird" (YouTube). Fairchild, *Color Appearance Models*, on related and unrelated colors |
| Visible light is a sliver | "You can see from about 380 to 700 nanometres. That's it." | Rough edges vary by person and brightness, but the band sits between ultraviolet and infrared | Any optics reference |
| Three cones, three numbers | "Your eye takes an entire spectrum and writes down three numbers." | Short, medium and long cones. Rods don't see color: they handle dim light, in grayscale, so say "cones", never "rods and cones". Different spectra that give the same three responses look identical (metamers), which is how an RGB screen fools you | Wikipedia, "Metamerism (color)", as a starting point |
| Violet is real, purple isn't | "Violet is on the spectrum. Purple isn't." | Violet is a single short wavelength. Purple and magenta need light from both ends at once, so no single wavelength looks purple | Wikipedia, "Spectral color" and "Line of purples" |
| The line of purples | "Your brain takes the spectrum, bends it into a horseshoe, and draws a line across the gap." | In the CIE 1931 chromaticity diagram, the curved edge is the spectrum and the straight edge is named the line of purples | CIE 1931. Wikipedia, "Line of purples" |
| JWST colors are a translation | "Astronomers do on purpose what your brain does by accident." | NASA's image team calls it *representative color*: each infrared filter gets a visible color in wavelength order, shortest blue, longest red. Not one to one, and they adjust it to show the science | [Scientific American](https://www.scientificamerican.com/article/are-the-james-webb-space-telescopes-pictures-real/), [Astronomy](https://astronomy.com/science/jwst-sees-light-invisible-to-the-eye-these-scientists-decide-how-to-color-it) (*checked*) |
| Hardware differs, words agree | "Some of you have sixteen times more red cones than green. You still agree on yellow." | In men with normal color vision, the L:M cone ratio ran from about 1.1:1 to 16.5:1, and unique yellow barely moves with it. Unique green does shift with cone ratio, which helps the point | [Hofer et al. 2005](https://pmc.ncbi.nlm.nih.gov/articles/PMC6725723) (*checked*). Yamauchi, Williams et al. 2002 (SPIE), on unique yellow and cone ratio |
| Some of the room is colorblind | "Statistically, some of you see a different green right now." | Around 8% of men and 0.5% of women of Northern European descent have red-green color vision deficiency | National Eye Institute. The slide uses Ishihara plate 9, which most people read as 74 and red-green colorblind people as 21 |
| All of us are colorblind | "We're all colorblind." | You can't see ultraviolet, and bees can. Pit vipers sense infrared. Most birds have four kinds of cone, and you have three. Everything Webb saw was invisible to you | Any vision science reference. Bees see ultraviolet but not red, most birds are tetrachromats, and pit vipers' pit organs sense infrared |
| Jupiter in infrared and ultraviolet | "Infrared on top, ultraviolet on the bottom. Same planet, same moment." | Gemini North's NIRI (infrared) and Hubble's WFC3 (ultraviolet) observed Jupiter at the same time, 15:41 UT on 11 January 2017. Infrared shows where the clouds are thin and heat gets out, and the Great Red Spot is almost invisible. In ultraviolet the Great Red Spot is dark, because its chromophores absorb ultraviolet and blue. Both are false color | [NOIRLab, "By Jove! Jupiter Shows Its Stripes and Colors"](https://noirlab.edu/public/news/noirlab2116/) (*checked* 26 October) |
| Webb's representative color | "Shortest to purple, longest to red." | The Pillars NIRCam image's key: F090W purple, F187N blue, F200W cyan, F335M yellow, F444W orange, F470N red. Each filter gets a visible color in wavelength order | [STScI, Pillars of Creation (NIRCam Image)](https://www.stsci.edu/contents/media/images/2022/052/01GF423GBQSK6ANC89NTFJW8VM?news=true) (*checked* 26 October) |
| Everything Webb sees is infrared | "Everything Webb sees is infrared." | NIRCam covers about 0.6 to 5 µm and MIRI about 5 to 28 µm. Visible light ends around 0.7 µm, so all of Webb's range is infrared except the bottom edge of NIRCam's bluest filter, which dips into deep red. The Pillars filters start at 0.8 µm, so everything in the drawing's Webb band is infrared | JWST User Documentation (JDox), NIRCam and MIRI overviews |
| What the fruit stand looks like without a kind of cone | "No green cones. No blue cones. No working cones." | Two lenses are Machado, Oliveira and Fernandes's physiologically based simulation of dichromacy at full severity, applied as colour matrices in linear RGB by SVG filters in the browser. Its deutan result is well regarded, and its tritan one is rougher. No working cones (achromatopsia) is drawn as plain luminance, which is how simulators draw it. They're models of what's lost, not recordings of anyone's experience. No green cones (deuteranopia) is about 1% of men, with the milder deuteranomaly about 5% more. No blue cones (tritanopia) is rare, well under 1 in 10,000, and achromatopsia is about 1 in 30,000 | Machado, Oliveira and Fernandes 2009, "A Physiologically-based Model for Simulation of Color Vision Deficiency", IEEE TVCG 15(6). DaltonLens's review of simulation methods |
| Orange is named after the fruit | "English had the fruit for a century before anyone called a color orange." | The fruit is in English by about 1380. The first color use is "orenge colour" sarcenet in Elizabeth of York's wardrobe accounts, June 1502, with Margaret Tudor's "slevys of orenge colour" weeks later. Plain "orange" as a color comes in the 1540s. Old English *ġeolurēad* is a rare glossary word for saffron-colored, so never call it the Old English word for orange | [Privy Purse Expenses of Elizabeth of York](https://archive.org/details/privypurseexpens00nicouoft), [Middle English Dictionary](https://quod.lib.umich.edu/m/middle-english-dictionary/dictionary/MED30800), [Wordorigins](https://wordorigins.org/big-list-entries/orange), Wikipedia, "Orange (colour)" (*checked*) |
| Redheads are fossils | "That's why redheads are red. So are robin redbreasts." | Red for hair is late Old English, "redhead" is 1256 (as a surname), "redbreast" about 1400. Red was a broader category then (Old English even called gold *rēad*), and the label stuck. When English made new hair words it picked "carroty" and "ginger", never orange. Red fox (1742) and red squirrel (1682) came after orange existed, so never use them | [Etymonline, "redhead"](https://www.etymonline.com/word/redhead), [Etymonline, "redbreast"](https://www.etymonline.com/word/redbreast), [Merriam-Webster, "red fox"](https://www.merriam-webster.com/dictionary/red%20fox), [Language Hat](https://languagehat.com/gingernut/) (*checked*, Etymonline through search snippets) |
| Spanish files them under red too | "*Pelirrojo, petirrojo.* The RAE defines red hair as a very bright blond." | Not because Spanish lacked the word: *naranjado* is from 1351 and *anaranjado* from 1484. *Rojo* only took over from *bermejo* as the main red in the 15th century. *Petirrojo* is *peto* (bib) plus *rojo*. The DLE gives *rojo*, of hair, as "de un rubio muy vivo" | [DLE, "rojo"](https://dle.rae.es/rojo), [RAE historical dictionary, "naranjado"](https://www.rae.es/dhle/naranjado), [Wiktionary, "petirrojo"](https://en.wiktionary.org/wiki/petirrojo). The DLE and RAE points came through search snippets, so check the *rojo* entry before saying the blond line. On stage a redhead is a *pelirrojo* or *pelirroja*, and the hair is *pelirrojo* or *pelo rojo*. Never call a person "un rojo" or "una roja": in Spain that means a leftie, a commie (the RAE lists it), and it's loaded |
| Christina Hendricks is a natural blonde | "Christina Hendricks is a natural blonde. She's dyed it red since she was about ten. The RAE was right." | She's said so herself, more than once: naturally blonde, red from about age ten. If giving a reason, say "she says": she's credited Anne of Green Gables in one interview and Ann-Margret and Lucille Ball in another, and called herself dark blonde in one and light blonde in another | [Fox News, syndicating a 2012 Daily Mail interview](https://www.foxnews.com/entertainment/christina-hendricks-admits-shes-a-natural-blonde-who-is-hollywoods-hottest-redhead), [Marie Claire, 2015](https://www.marieclaire.com/beauty/news/a13723/christina-hendricks-goes-blonde) (*checked* 26 October, Marie Claire through search excerpts) |
| Spanish and English mostly agree | Drives the swatch slides, never said outright | Castilian Spanish basic color terms line up with English almost one to one. *Celeste* is a basic color only in Uruguay. *Marrón* (Spain) and *café* (Mexico) name the same category, as do *morado* and *violeta* | [Lillo et al. 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC5968181) (*checked*) |

**Avoid on stage:**

- "The Himba can't see blue." It comes from a TV segment widely criticised for misrepresenting the research, and someone in the room will know.
- "The ancient Greeks couldn't see blue." Homer's wine-dark sea is real, but the leap from vocabulary to eyesight is contested.
- "Your language decides which colors you can see." The measured effects are small, for example Russian speakers telling *goluboy* from *siniy* a fraction of a second faster (Winawer et al. 2007).

## Swatch candidates

None of these are verified. Every word needs a native speaker from Spain before the night. Because Spanish and English basic color terms mostly agree (see Claims), these are colors of particular things: skin, eyes, hair, sky.

The words with a hex are on the slides, eight a slide as paint chips (`scss/talk/_swatches.scss`). Every hex is a guess, since none of these words names a single color. "How sure" is how well a word survives a pedant, before any native speaker has checked it.

**Spanish, no one-word English equivalent:**

| Word | Roughly | Hex | How sure | Notes |
|---|---|---|---|---|
| *celeste* | sky blue | `#6cace4` | Solid | Basic only in Uruguay. Two words in English |
| *trigueño* | the color of wheat | `#c69c62` | Solid | |
| *zarco* | pale blue eyes | `#9dbdd3` | Solid | A bit literary |
| *moreno* | tanned or brunette | `#9a6a45` | Solid | One word for both. Also why tan isn't on the English slide |
| *canoso* | going gray | `#c9c6c0` | Solid | |
| *blanquiazul* | white-and-blue | | | Dropped: it's stripes, and every other chip is one color |
| *pardo* | grayish brown | `#7d6b57` | Medium | English has "dun". Spanish says every cat at night is *pardo*, English says gray |
| *amoratado* | bruise purple | `#6a4c7d` | Medium | English says "black-and-blue" |
| *entrecano* | half-gray, of hair | | Medium | Held back: "grizzled" is close, and *canoso* covers it |
| *bermejo* | strawberry blond | `#c8693a` | Medium | English has "russet" and "ginger". It was Spanish's main red until *rojo* took over in the 15th century, which sets up the redheads |
| *rucio* | silver-gray, of donkeys | | Medium | Held back. Sancho Panza's donkey is called Rucio. A bit old-fashioned |
| *güero* | fair or blond, of people | | | Dropped: Mexican, and the room is in Spain |
| *verde agua* | pale sea green | | | Dropped: two words in Spanish too |

**English, no one-word Spanish equivalent:**

| Word | Spanish needs | Hex | How sure | Notes |
|---|---|---|---|---|
| teal | *verde azulado* | `#008080` | Solid | Spanish also reaches for *azul petróleo* |
| hazel | *color avellana* | `#8e7618` | Solid | Of eyes |
| auburn | *castaño rojizo* | `#a52a2a` | Solid | Of hair. The hex is CSS's `brown` keyword |
| navy | *azul marino* | `#24346e` | Solid | |
| taupe | *gris topo* | `#9c8b7e` | Fairly solid | *Taupe* is French for mole, and *topo* is Spanish for it |
| eggshell | *blanco cáscara de huevo* | `#f0ead6` | Fairly solid | Four words |
| periwinkle | *azul pervinca* | `#ccccff` | Shaky | |
| puce | *color pulga* | `#cc8899` | Shaky | *Puce* is French for flea. Plenty of English speakers don't know it either |
| buff | *color ante* | | Shaky | Held back |
| tan | | | | Dropped: Spanish *moreno* covers tanned skin in one word |

## Reservoir

Tangents and lines that didn't make the run. Pull from here if something dies in rehearsal.

- Pink is named after a flower (*Dianthus*, "pinks"), and so is *rosa*.
- Berlin and Kay (1969): languages pick up color words in a rough order, and brown arrives late.
- The Russian blues, *goluboy* and *siniy*.
- The dress (2015). Tried on the yes path and cut: too much of a cliché by now.
- Tetrachromats.
- Metamers as their own tangent, if "color doesn't exist" runs short.
- From `fifty-shades`, which this room hasn't seen:
  - "three numbers wearing a trench coat"
  - the HSL slide where yellow and blue both claim 50% lightness
  - Workday's cantaloupe500 (`#F38B00`) next to toastedMarshmallow500 (`#B37F10`), a ready-made brown-is-dark-orange pair

## Cut order

If the yes path runs long, cut in this order:

1. The screens aside in "color doesn't exist" (keep the wavelengths and the three numbers)
2. The English swatch slide (keep the Spanish one)
3. Webb's infrared band, "Shortest to purple, longest to red" (keep the spaceship)
4. The fruit stand's lenses (keep Jupiter and "We're all colorblind.")

Never cut: the thesis, the brown line (it's in the title), the cliffhanger, the vote, the spaceship.

## Open questions

Anything here that turns into work gets an issue and a link.

| Question | Where | Issue |
|---|---|---|
| What's the screen? Ask info@weyweyweb.com about the projector or TV, the input, the aspect ratio, and whether there's a clicker. A washed-out projector kills subtle color comparisons, so the slides lean on big contrasts | The slot | |
| Does the clock stop for the vote? If not, the yes path loses however long the vote takes | The run | |
| Check the swatch words with a native speaker from Spain | Swatch candidates | |
| Write the heel | `pug/sections/_09-heel.pug` | |
| Does the heel's last slide give the URL, or does the room not deserve it? | `pug/sections/_09-heel.pug` | |
| A sound sting for the heel? Depends on venue audio | The heel | |
| Ask the organizers to rig the vote so Lemon loses? Assumed not | The vote | |
| Every slide has its image now. Check the yes path's on the projector: the cone mosaic insets are small crops (180 and 286 px wide) and will look soft | `pug/sections/_07-your-green.pug` | [#3](https://github.com/AhoyLemon/color-is-a-lie/issues/3) |
| Check the DLE's *rojo* entry and set the card's exact wording. A search on 26 October shows the hair sense as the adjective's fourth, "Dicho del pelo", glossed as a very bright blond, but the RAE site blocks direct fetches, so nobody has read it yet | Claims, `pug/sections/_02-language.pug` | |
| Kitaoka's terms allow research, personal and educational use with a citation, and ask commercial or professional users to contact his publisher. A talk by an agency employee sits between the two: email him, or use the dress | `pug/sections/_01-color-isnt-real.pug` | |
| Check every claim not marked *checked* | Claims | |

## Decided, recorded here so it does not get re-litigated

| Decision | Rationale |
|---|---|
| Thesis first: color doesn't exist, then the evidence | Lemon's call, replacing "no spine, tangents with a denouement" and "language first, then brown". Opening on vocabulary let the room file the talk under fun facts about words before it heard the claim. The examples run from words to brain, so the strongest one lands right before the vote |
| Most slides are a photo or a drawing with one line to talk around, on both sides of the vote | Lemon's call. Sentences on a slide get read off the screen. A photo and one line give the room something to look at while Lemon talks. The ones that stay as statements are the hanging question and the vote |
| Images don't have to be CC licensed | Lemon's call: the talk is for a party and isn't recorded. Credits stay where they help (Kitaoka's name and site, as his terms ask, a paper, a painting, a photographer), without licences, and the rainbow and the oranges go uncredited. Photos are resized to 2560 px wide before they go in `img/`. Pages is switched on for this repo, so merging to `main` does publish the deck, images included |
| No numbered device, like "Lie 01" | Lemon's call. Keeps the tangents loose |
| A monologue: no structured crowd work, no name-the-color quiz | Too much content for the time, and a quiz treats the room like a kindergarten class |
| The swatches show words with no one-word equivalent, not basic color terms | Castilian Spanish and English basic terms mostly line up (Lillo et al. 2018), so "Spanish has no word for X" mostly isn't true at that level, and this room would know |
| The vote slide is "Does democracy work?" with Yes and No links | The room can't tell what either answer leads to |
| The yes path follows the vote slide in deck order, and the heel comes after the yes path's end | A clicker's next lands on the yes path, so only the heel needs a jump (the No link, or X) |
| A thumbs-down gets heel mode: pure heat, no recanting | Getting cut off at 5:00 is already a wrestling moment |
| The heel is the ugly American plus food crimes, never Trump | Small-minded and brash is a fun character. Trumpism in 2026 is too real to be funny, and it would turn the room for real |
| No hello, no Blank Metal intro, no shared outro. Title, straight in, then name, handle and URL at the end | Every second before 4:00 counts toward the vote. The shared section files stay in the repo, uncalled |
| The brown demo is out, and brown gets one hand-wave slide | Lemon's call. It was built twice: a swatch whose surround faded to black, then Technology Connections' order (a big orange square on black, dimmed, then the room's lights switched on and off around it). Neither landed on a laptop screen, and a minute before the vote is worth more spent on something that does |
| Reveal's default navigation, not `navigationMode: "linear"`. Drive the deck with space or Page Down | Lemon's call. The right arrow skips the slides below a stack, so a clicker that sends arrow keys needs swapping or remapping |
| No 10-minute version | The prize slot doesn't matter: Lemon already speaks at Wey Wey Web |
| One working doc | An 8-minute talk doesn't need `web-animations`' PLAN, TIMELINE and TODO |
| English | The conferences run in English |
