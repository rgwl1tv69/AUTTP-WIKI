let data = [
  ["AntiTroll", "creator of the AUTTP, gender is unknown (they also are epic)"],
  ["Novabium", "admin of the AUTTP, gender is female (nova gender reveal 7/9/2024 confirmed)"],
  ["RK", "former member of the AUTTP, cool guy"],
  ["valentino", "goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover goober's lover (redirects will come soon idk how to implement it)"],
  ["goober","the inbodiment of goofiness, he is a hazbin fan and a val fan and a sir pentious fan, his username is bobthecooldude420"],
  ["Ace", "former admin of the AUTTP, call her ace please"],
  ["Niko Cube", "brainrotted admin stinky goofy ronald mcdonald ahh chicken nugget max design pro"],
  ["rgwl", "your on his website right now"],
  ["WaterfallTV","transgender asriel pfp :shocked:"],
  ["jad", "boblox industries developer"],
  ["zornikal", "boblox industries idea giver"],
  ["normal wuye", "boblox industries developer"],
  ["purpl", "person who coded the shitmemes.github.io website go visit there (not a paid promotion)"],
  ["avek0", "skid"],
  ["Snatchy", "BUILT LIKE A FERRIS WHEEL"]
]
selected = 0
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
