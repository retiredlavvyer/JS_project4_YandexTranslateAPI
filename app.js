
eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);

    document.getElementById("language").onchange = function () {
        // console.log("Event");
        ui.changeUI();
    }
}

const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);
const ui = new UI();

function translateWord(e){

    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);

    translate.translateWord(function(err,response){ // callback fonksiyonu

        if (err) { // if koşulu içerisinde sadece err yazılırsa, err'nin null olmadığı bütün durumlarda koşulun sağlandığı manasında gelir.
            // Hata mesajı yaz. // yani err varsa manasına gelir. err'un olduğu tüm durumlar. type'ı önemsiz.
            console.log(err); // yani (err !== null) manasına gelir
        }
        else {  // response başarılı
            // console.log(response);
            ui.displayTranslate(response);

        }
    });




    e.preventDefault();
}