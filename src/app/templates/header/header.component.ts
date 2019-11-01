import { Component } from '@angular/core';

import { APP_NAME } from 'src/app/app.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent{

  appName = APP_NAME;

}
