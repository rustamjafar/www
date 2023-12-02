var text = ["بسم الله الرحمن الرحيم", "in the name of god, the most beneficent, the most merciful", "בִּסם אללּה (אל)רחמן (אל)רחים", "во имя бога, милостивого, милосердного"];
var counter = 0;
var elem = document.querySelector(".basmala p");
var inst = setInterval(change, 3000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
