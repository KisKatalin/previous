import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {
  public words = 'java tottenham';
  public text = ''
  public newWord = '';
  public errorInpt = false;
  public errorText = false;
  public cenzorTrue = false;
  public placeWorld = 'word here...'
  public placeText = 'text here...';
  constructor() { }

  ngOnInit(): void {
  }

  addNewWord(): void {
    
    if (this.newWord.length >= 1) {
      this.words = this.words + ' ' + this.newWord;
      this.errorInpt = false;
      this.placeWorld = 'word here...'
      this.newWord = '';

    } else {
      this.errorInpt = true;
      this.placeWorld = 'Pleas write a word!';

    }

  }

  cenzored() {
    if (this.text.length >= 1) {
      let arrWord = this.words.split(' ');
      let arrText = this.text.split(' ');
      for (let i = 0; i < arrText.length; i++) {
        if (arrWord.includes(arrText[i].toLocaleLowerCase()) == true) {
          let stars = '';
          for (let s = 0; s < arrText[i].length; s++) {
            stars = stars + '*';
          }
          arrText[i] = stars;
          this.text = arrText.join(' ');
          this.cenzorTrue = true;
          this.errorText = false;
          this.placeText = 'text here...';
        }
      }
    } else {
      this.errorText = true;
      this.placeText = 'Pleas write a text!';
      this.cenzorTrue = false;
    }
  }

  reset(){
    this.words = '';
    this.text = '';
    this.newWord = '';
    this.placeText = 'text here...';
  }

}
