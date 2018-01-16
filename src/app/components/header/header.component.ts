import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  title = 'Avans Energy';

  constructor(private translate: TranslateService) {
  translate.setDefaultLang('nl'); }
  switchLanguage(language: string) {
      this.translate.use(language);
    }

  ngOnInit() {
  }

}
