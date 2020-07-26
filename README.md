# Cardavan
#### A deck-creation tool to generate random game events for tabletop roleplaying

Commissioned for Nathan Harrison by Josh Gearheart

## Specs

### A “card” should have:
- [x] a value
- [x] a “suit” or category
- [x] maybe something else? (an image is what it has)

### Then to function, the app needs to:
- [x] accept values
- [x] accept suits?
- [x] apply the range of values across each suit to create unique combos (totalling suits * values in number)
- [x] create an array of those “cards” and randomize its order
- [x] allow the user to draw the top card of the deck (first in the array)
- [ ] export their deck as a csv or the like, presumably to be input later to use in play
- [ ] maybe there is a discard pile?
- [ ] maybe there are more actions?
- [ ] Advanced feature: a way to seed a “move to the next suit/deck” card at a certain semi-random # of cards deep? Example: “Not appearing in the first 6 spots of the stack, but anywhere in positions 7-13” (thinking of similar procedures board games will use with the tiles for a certain quest-ending thing)