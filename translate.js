function Translate(word,language){

    this.apikey = "trnsl.1.1.20200427T223043Z.ce2aab873e77be61.90492b34f859a241776dc306262540d2bc9585c5";
    this.word = word;
    this.language = language;

    // XHR object

    this.xhr = new XMLHttpRequest();

}
Translate.prototype.translateWord = function(callback){
    //AJAX İşlemleri
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload = () => {               // this objesini dışarıda yakalamak için arrow function kullandık. 
        if (this.xhr.status === 200){       // arrow function, .bind etkisi yapar.
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];

            callback(null,text); 
        }
        else {
            callback("Hata!",null);
        }
    }

    this.xhr.send();
};
Translate.prototype.changeParameters = function (newWord,newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
}