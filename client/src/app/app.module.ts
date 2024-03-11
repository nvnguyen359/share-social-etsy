import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuComponent } from "./components/menu/menu.component";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CdkMenu, CdkMenuItem } from "@angular/cdk/menu";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatTableModule } from "@angular/material/table";
import {
  NgIf,
  NgFor,
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from "@angular/common";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from "@angular/material/dialog";
import { MatChipsModule } from "@angular/material/chips";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { LoadingInterceptor } from "./interceptors/loading.interceptor";
@NgModule({
  declarations: [AppComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatNativeDateModule,
    MatTableModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    NgIf,
    NgFor,
    CdkMenu,
    CdkMenuItem,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatListModule,
    MatNativeDateModule,
    MatTableModule,
    NgFor,
    NgIf,
    MatCheckboxModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatTooltipModule,
    MenuComponent,
    MatDatepickerModule,
  ],
  providers: [
    MatDatepickerModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
