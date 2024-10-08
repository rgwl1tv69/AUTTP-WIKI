let data = [
  ["AntiTroll", "creator of the AUTTP, gender is unknown (they also are NOT epic)"],
  ["Novabium", "admin of the AUTTP (very mid)"],
  ["RK", "former member of the AUTTP, cool guy"],
  ["valentino", "goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover (redirects will come soon idk how to implement it)"],
  ["goober","the inbodiment of goofiness, he is a hazbin fan and a val fan and a sir pentious fan, his username is bobthecooldude420"],
  ["Ace", "former admin of AUTTP"],
  ["Niko Cube", "brainrotted admin stinky goofy ronald mcdonald ahh chicken nugget max design pro"],
  ["rgwl", "your on his website right now"],
  ["jad", "fucking disgrace to society"],
  ["zornikal", "boblox industries idea giver"],
  ["normal wuye", "boblox industries developer"],
  ["purpl", "worse than sir. duke francis fredrick lemonington"],
  ["avek0", "skid + steals code + uses chatgpt"],
  ["Snatchy", "BUILT LIKE A FERRIS WHEEL"],
  ["7bpie", "haxxer"],
  ["Obama","shittiest person in AUTTP ever the only person who is more shitty is cassius"],
  ["alekpereon111","goated + based + W"],
  ["Monsia Creation No. 1","furnace tracker ahh song"],
  ["Monsia Creation No. 2","second furnace tracker ahh song"],
  ["UDCS","best group ever better than villcapt for gods fucking sake"],
  ["TimeToBlitzkrieg","alekpereon111 alt"],
  ["you reached the end dumbass","go back"],
  ["<b>97 118 101 107 48 32 105 32 104 111 112 101 32 121 111 117 32 115 116 111 112 32 115 107 105 100 100 105 110 103 32 97 114 111 117 110 100 </b>","<h1>97 118 101 107 48 32 105 32 104 111 112 101 32 121 111 117 32 115 116 111 112 32 115 107 105 100 100 105 110 103 32 97 114 111 117 110 100 </h1>"]
]
let RNG = [
  ["terrible",0],
  ["absolutely mid",1],
  ["normal",2],
  ["uncommon",3],
  ["rare",4],
  ["medium rare",5],
  ["medium",6],
  ["another medium",7],
  ["medium well",8],
  ["well done",9],
  ["congratulations",10],
  ["sigma grindset",11],
]
selected = 0
best_luck = 0
function update() {
  document.getElementById("content_wiki_title").innerHTML = data[selected][0]
  document.getElementById("content_wiki_description").innerHTML = data[selected][1]
}
function next() {
  selected = Math.min(selected + 1,data.length-1)
  update()
}
function last() {
  selected = Math.max(selected - 1,0)
  update()
}
function roll() {
  let luck = 0
  for (let i = 1; i < RNG.length; i++) {
    if (Math.random() < 1/3) {
      luck = i
    } else {
      break
    }
  }
  if (luck > best_luck) {
    best_luck = luck
  }
  document.getElementById("auttp_rng").innerHTML = "Roll (last time you got " + RNG[luck][0] + " with a 1/" + 3**luck + " rarity, best rarity this session: " + RNG[best_luck][0] + " 1/" + 3**best_luck + ")"
}
