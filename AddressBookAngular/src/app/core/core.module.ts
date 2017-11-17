import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ContactService } from './contact.service';
import { FakeContactService } from './fake-contact.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    TopMenuComponent
  ],
  exports: [
    TopMenuComponent,
  ],
  providers: [
    // {provide: ContactService, useClass: ContactService},
    // équivalent à :
    // ContactService,
    {provide: ContactService, useClass: ContactService},
  ],
})
export class CoreModule { }
