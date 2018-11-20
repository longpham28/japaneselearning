let katakanaList = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"];

let romajiList = ["a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta", "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "fu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wo", "n"];
class quiz {
  constructor() {
    this.katakana = "";
    this.romaji = "";
  }

  getCharacters() {
    this.katakana = katakanaList[Math.floor(Math.random() * katakanaList.length)];
    this.romaji = romajiList[katakanaList.indexOf(this.katakana)];
  }
};

let correctAnswer = new quiz();
let wrongAnswer1 = new quiz();
let wrongAnswer2 = new quiz();
let wrongAnswer3 = new quiz();

correctAnswer.getCharacters();
wrongAnswer1.getCharacters();
wrongAnswer2.getCharacters();
wrongAnswer3.getCharacters();

while (1 > 0) {
  if (correctAnswer == wrongAnswer1 || correctAnswer == wrongAnswer2 || correctAnswer == wrongAnswer3 || wrongAnswer1 == wrongAnswer2 || wrongAnswer1 == wrongAnswer3 || wrongAnswer2 == wrongAnswer3) {
    wrongAnswer1.getCharacters();
    wrongAnswer2.getCharacters();
    wrongAnswer3.getCharacters();
  } else break;
}


let choice = [correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3];

let firstAnswer = choice[Math.floor(Math.random() * choice.length)].katakana;
let secondAnswer = choice[Math.floor(Math.random() * choice.length)].katakana;
let thirdAnswer = choice[Math.floor(Math.random() * choice.length)].katakana;
let fourthAnswer = choice[Math.floor(Math.random() * choice.length)].katakana;

while (1 > 0) {
  if (firstAnswer == secondAnswer || firstAnswer == thirdAnswer || firstAnswer == fourthAnswer || secondAnswer == thirdAnswer || secondAnswer == fourthAnswer || thirdAnswer == fourthAnswer) {
    secondAnswer = choice[Math.floor(Math.random() * choice.length)].katakana;
    thirdAnswer = choice[Math.floor(Math.random() * choice.length)].katakana;
    fourthAnswer = choice[Math.floor(Math.random() * choice.length)].katakana;
  } else break;
}

console.log(firstAnswer);


$(document).ready(() => {
  $(".question").html("HOW DO WE WRITE [" + correctAnswer.romaji + "] IN JAPANESE");

  $("#1st-answer").html(firstAnswer);
  $("#2nd-answer").html(secondAnswer);
  $("#3rd-answer").html(thirdAnswer);
  $("#4th-answer").html(fourthAnswer);

  if (firstAnswer == correctAnswer.katakana) {
    $("#1st-answer").on('click', () => {
      $(".answer").not("#1st-answer").html("");
      $(".judgment").css({
        "background-color": "blue",
        "color": "white "
      })
      $(".judgment").html("CORRECT ANSWER!");
      $(".next-previous").fadeIn();
    });
    $(".answer").not("#1st-answer").on('click', (event) => {
      $(event.currentTarget).html("");
      $(".judgment").css({
        "color": "white",
        "background-color": "red"
      });
      $(".judgment").html("WRONG ANSWER!");
    })
  }

  if (secondAnswer == correctAnswer.katakana) {
    $("#2nd-answer").on('click', () => {
      $(".answer").not("#2nd-answer").html("");
      $(".judgment").css({
        "background-color": "blue",
        "color": "white "
      })
      $(".judgment").html("CORRECT ANSWER!");
      $(".next-previous").fadeIn();
    });
    $(".answer").not("#2nd-answer").on('click', (event) => {
      $(event.currentTarget).html("");
      $(".judgment").css({
        "color": "white",
        "background-color": "red"
      });
      $(".judgment").html("WRONG ANSWER!");
    });

  }
  if (thirdAnswer == correctAnswer.katakana) {
    $("#3rd-answer").on('click', () => {
      $(".answer").not("#3rd-answer").html("");
      $(".judgment").css({
        "background-color": "blue",
        "color": "white "
      })
      $(".judgment").html("CORRECT ANSWER!");
      $(".next-previous").fadeIn();
    });
    $(".answer").not("#3rd-answer").on('click', (event) => {
      $(event.currentTarget).html("");
      $(".judgment").css({
        "color": "white",
        "background-color": "red"
      });
      $(".judgment").html("WRONG ANSWER!");
    });
  }

  if (fourthAnswer == correctAnswer.katakana) {
    $("#4th-answer").on('click', () => {
      $(".answer").not("#4th-answer").html("");
      $(".judgment").css({
        "background-color": "blue",
        "color": "white "
      })
      $(".judgment").html("CORRECT ANSWER!");
      $(".next-previous").fadeIn();
    });
    $(".answer").not("#4th-answer").on('click', (event) => {
      $(event.currentTarget).html("");
      $(".judgment").css({
        "color": "white",
        "background-color": "red"
      });
      $(".judgment").html("WRONG ANSWER!");
    });
  }

});