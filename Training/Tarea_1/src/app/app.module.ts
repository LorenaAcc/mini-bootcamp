import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { MyCustomWithCLIComponent } from './my-custom-with-cli/my-custom-with-cli.component';
import { MyCustomComponent } from './my-custom/my-custom.component';
import { WithTemplateComponent } from './with-template/with-template.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MyCustomWithCLIComponent,
    MyCustomComponent,
    WithTemplateComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
