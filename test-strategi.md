# Test nivå

Unit/Enhetstester
Integrationstester
End-to-end tester

## Test typ

Negativa tester
Positiva tester

### Avvägningar

På grund av vårat val av lösning har det föhindrat oss att införa tester på enhetsnivå så vi har istället fokuserat på att skapa en bra testtäckning på integrationsnivån och E2E för att täcka de användarflöden vi har bedömt viktigast för applikationen.

#### Planerade tester

-----------
app
-----------
Should display '' if Singleplayer is selected

Should diplay '' if Multiplayer game is selected

Should render app component
-----------
button
-----------
Should get a value of choice when button is clicked

Should render button component

-----------
gameMode
-----------
Should render gamemode component

-----------
history
-----------
Should not display more than 10 results in history

Should display winner as bold in History list

Should increment length of history list if game is over

Should render history component

-----------
multiplayer
-----------
Should display whos turn it is

Should be able to enter two player names when multiplayer

Should not display player input if StartButton is pressed

Should not display winner if a uneaven turn has started

Should render multiplayer component

-----------
score
-----------
Should increase score if continius win

Should reset score if draw

Should reset score if lost

Should render score component
-----------
showpictures
-----------
Should render showpicures component
-----------
singleplayer
-----------
Should only be able to enter one player name if Singleplayer

Should not display game choices if StartButton is pressed

MakeComputerChoice should return a string value of either ['Sten', 'Sax', 'Påse']

Should render singeplayer component

-----------
decidewinner
-----------
Should diplay who won

Should display text if lost

Should display text if draw

Should get winner when decideWinner is called

Should render decidewinner component