import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { MyCustomWithCLIComponent } from './my-custom-with-cli/my-custom-with-cli.component';
import { MyCustomComponent } from './my-custom/my-custom.component';
import { WithTemplateComponent } from './with-template/with-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MyCustomWithCLIComponent,
    MyCustomComponent,
    WithTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
