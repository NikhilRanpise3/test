import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  isThemeChange: boolean = false;
  scrollTo: any = '';
  isprofileclicked: boolean = false;
  adminpage: boolean = false;
  constructor(private myElement: ElementRef) {}
  updateTheme(e: any) {
    this.isThemeChange = e;
    console.log('app ' + this.isThemeChange);
  }

  // scroll(el: HTMLElement) {
  //   el.scrollIntoView({ behavior: 'smooth' });
  // }

  updateScroll(e: any) {
    this.scrollTo = e;
    // var parser = new DOMParser();
    // var doc = parser.parseFromString(this.scrollTo, 'text/html');
    //  doc.body;
    // this.scroll(doc.body);
    // var x : HTMLElement;
    // x = this.scrollTo as HTMLElement;
    // this.scroll(x);
    this.gotoComponent(this.scrollTo);
    console.log(this.scrollTo);
  }

  gotoComponent(id: string) {
    console.log(id);

    let el = this.myElement.nativeElement.querySelector('#' + id);
    el.scrollIntoView({ behavior: 'smooth' });
  }
  changeview(e: any) {
    this.isprofileclicked = e;
  }
  adminview(e: any) {
    this.adminpage = e;
  }
}
