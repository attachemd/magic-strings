import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ft-magic-string',
  template: `
    <input type="text" (keydown.enter)="markText($event)">
    <div #content [hidden]="true">
      <ng-content></ng-content>
    </div>
    <div [innerHTML]="controlledContent"></div>
  `,
  styles: [
    `.mark {
      background-color: yellow;
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class MagicStringComponent implements OnInit {

  @ViewChild('content', { static: true }) content:ElementRef = {} as ElementRef;
  originalContent:String= "";
  controlledContent:String= "";
  constructor() { }

  ngOnInit(): void {
    this.controlledContent = this.originalContent = this.content.nativeElement.textContent;
  }

  markText($event:any) {
    let value = ($event.target as HTMLInputElement).value;
    this.controlledContent = this.originalContent
    this.controlledContent = this.originalContent
      .replace(
        new RegExp(value, 'g'),
        `<span class="mark">${value}</span>`
      )
    console.log(value)
  }
}
