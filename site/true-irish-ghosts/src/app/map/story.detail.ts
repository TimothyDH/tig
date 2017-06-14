export class StoryDetail {
  placeType: string;
  placename: string;
  references: reference[];


  constructor(aplaceType: string, aplacename: string, refs: reference[]) {
    // The this keyword is mandatory.
    this.placeType = aplaceType;
    this.placename = aplacename;    
    this.references = refs;
  }
}

export class reference {
    text: string;

    constructor(txt: string) {
    // The this keyword is mandatory.
    this.text = txt;
  }
}