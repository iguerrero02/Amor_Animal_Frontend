import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { ServicesComponent } from './services/services.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TermsComponent } from './terms/terms.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingTablesComponent } from './pricing-tables/pricing-tables.component';
import { BlogComponent } from './blog/blog.component';
import { EmptyPagesComponent } from './empty-pages/empty-pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { TagService } from 'src/app/services/tag.service';
import { AppComponent } from 'src/app/app.component';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { TagEditComponent } from './tag-edit/tag-edit.component';
import { TagDeleteComponent } from './tag-delete/tag-delete.component';
import { TagCreateComponent } from './tag-create/tag-create.component';
import { AddPrinterComponent } from './add-printer/add-printer.component';
import { PrintersComponent } from './printers/printers.component';
import { PrintEditComponent } from './print-edit/print-edit.component';
import { PrintCreateComponent } from './print-create/print-create.component';
import { PrintRemuveComponent } from './print-remuve/print-remuve.component';
import { SendPrintComponent } from './send-print/send-print.component';
import { Detalles2Component } from './detalles2/detalles2.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { Detalles3Component } from './detalles3/detalles3.component';
import { Detalles4Component } from './detalles4/detalles4.component';
import { Detalles5Component } from './detalles5/detalles5.component';
import { Detalles6Component } from './detalles6/detalles6.component';
import { MapaSitioComponent } from './mapa-sitio/mapa-sitio.component';






@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    MailInboxComponent,
    MailComposeComponent,
    GalleryComponent,
    AboutCompanyComponent,
    ServicesComponent,
    FaqsComponent,
    TermsComponent,
    InvoiceComponent,
    PricingTablesComponent,
    BlogComponent,
    BlogDetailsComponent,
    EmptyPagesComponent,
    TagEditComponent,
    TagDeleteComponent,
    TagCreateComponent,
    AddPrinterComponent,
    PrintersComponent,
    PrintEditComponent,
    PrintCreateComponent,
    PrintRemuveComponent,
    SendPrintComponent,
    Detalles2Component,
    AdopcionComponent,
    Detalles3Component,
    Detalles4Component,
    Detalles5Component,
    Detalles6Component,
    MapaSitioComponent,


  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule,
    GalleryModule.forRoot(),
    NgSelectModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],

  // bootstrap:[AppComponent]
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PagesModule { }
