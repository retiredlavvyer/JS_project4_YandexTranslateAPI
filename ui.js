function UI() {

    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.languageList = document.getElementById("language");

}
UI.prototype.changeUI = function() {
    // Arayüz bayrak değiştirme
    this.outputImage.src = `images/${this.languageList.value}.png`;

    // selectlist'in text değerini almak için şöyle yapıyoruz:
        // console.log(this.languageList.options);
        // console.log(this.languageList.selectedIndex);
        // console.log(this.languageList.options[this.languageList.selectedIndex]);
        // console.log(this.languageList.options[this.languageList.selectedIndex].textContent);

    // Arayüz dil ismi değiştirme
    this.outputLanguage.textContent = this.languageList.options[this.languageList.selectedIndex].textContent;
}
UI.prototype.displayTranslate = function(word){
    this.outputWord.textContent = word;
}