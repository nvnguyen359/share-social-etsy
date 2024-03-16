import { Injectable } from "@angular/core";

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { retry, catchError } from "rxjs";
import { SnackbarService } from "./snackbar.service";
import { environment } from "../environment";
import { DialogConfirmComponent } from "../components/dialog-confirm/dialog-confirm.component";
import { MatDialog } from "@angular/material/dialog";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  apiUrl=''
  constructor(
    private readonly http: HttpClient,
    private snackBar: SnackbarService,
    private dialog: MatDialog,
  ) {
    this.apiUrl=environment.apiUrl
  }
  httpOptions = {
    //
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      responseType: "blob",
    }),
  };
  qrViet = {
    Client_ID: "c3503c91-f295-4574-ab2a-206e7f58a334",
    API_Key: "10a474b4-fc88-45ae-9bcd-18316d1ffe23",
  };
  private async handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      //
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return error.error;
  }

  async get(url: string, params?: any, name = "") {
    let pas = "";
    if (params) {
      const entries = Object.entries(params);
      entries.forEach((x: any) => {
        pas += `${x[0]}=${x[1]}&`;
      });
    }

    const pathUrl = `${this.apiUrl}/${url}?${pas}`;

    return new Promise((res, rej) => {
      this.http
        .get(pathUrl, this.httpOptions)
        .pipe(
          retry(3), // retry a failed request up to 3 times
          catchError(this.handleError)
        )
        .subscribe((data: any) => {
          if (Array.isArray(data)) {
            return res( Array.from(data));
          } else {
            res(data);
          }
        });
    });
  }
  async getId(url: string, id = "") {
    const pathUrl = `${this.apiUrl}/${url}/${id}`;

    return new Promise((res, rej) => {
      this.http
        .get(pathUrl, this.httpOptions)
        .pipe(
          retry(3), // retry a failed request up to 3 times
          catchError(this.handleError)
        )
        .subscribe((data) => {
          return res(data);
        });
    });
  }
  async update(url: string, data: any) {
    const pathUrl = `${this.apiUrl}/${url}`;
    return new Promise((res, rej) => {
      this.http
        .put(pathUrl, data, this.httpOptions)
        .pipe(
          retry(3), // retry a failed request up to 3 times
          catchError(this.handleError)
        )
        .subscribe((data) => {
          return res(data);
        });
    });
  }

  async create(url: string, data: any) {
    let req = !Array.isArray(data) ? [data] : data;
    req = Array.from(req).map((x: any) => {
      if (!x.id || x.id == "") x["id"] = null;
      return x;
    });
    const pathUrl = `${this.apiUrl}/${url}`;
    return new Promise((res, rej) => {
      this.http
        .post(pathUrl, req, this.httpOptions)
        .pipe(
          retry(3), // retry a failed request up to 3 times
          catchError(this.handleError)
        )
        .subscribe((e) => {
          res(e);
        });
    });
  }
  async destroy(url: string, id: any, showDialog = true) {
    const pathUrl = `${this.apiUrl}/${url}/${id}`;
    if (showDialog) {
      const dialogRef = this.dialog.open(DialogConfirmComponent, {
        data: { header: "Bạn chắc chắn muốn xóa!" },
      });
      return new Promise((res, rej) => {
        dialogRef.afterClosed().subscribe((result: any) => {
          if (result == true) {
            this.http
              .delete(pathUrl, this.httpOptions)
              .pipe(
                retry(3), // retry a failed request up to 3 times
                catchError(this.handleError)
              )
              .subscribe((e) => {
                res(e);
              });
          }
         // this.dataService.sendMessage({ resultDelete: result });
        });
      });
    } else {
      return new Promise((res, rej) => {
        this.http
          .delete(pathUrl, this.httpOptions)
          .pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError)
          )
          .subscribe((e) => {
            res(e);
          });
      });
    }
  }
  async bulkDelete(url: string, ids: any, showDialog = true) {
    const pathUrl = `${this.apiUrl}/${url}/${ids}`;
    if (showDialog) {
      const dialogRef = this.dialog.open(DialogConfirmComponent, {
        data: { header: "Bạn chắc chắn muốn xóa!" },
      });
      return new Promise((res, rej) => {
        dialogRef.afterClosed().subscribe((result: any) => {
          if (result == true) {
            this.http
              .delete(pathUrl, this.httpOptions)
              .pipe(
                retry(3), // retry a failed request up to 3 times
                catchError(this.handleError)
              )
              .subscribe((e) => {
                this.snackBar.openSnackBar("done");
                res(e);
              });
          }
          //this.dataService.sendMessage({ resultDelete: result });
        });
      });
    } else {
      return new Promise((res, rej) => {
        this.http
          .delete(pathUrl, this.httpOptions)
          .pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError)
          )
          .subscribe((e) => {
            this.snackBar.openSnackBar("done");
            res(e);
          });
      });
    }
  }

  async eventWindow(v: string = "min") {
    const pathUrl = `${environment.apiUrl}/window/${v}`;
    return new Promise((res, rej) => {
      this.http
        .get(pathUrl, this.httpOptions)
        .pipe(
          retry(3), // retry a failed request up to 3 times
          catchError(this.handleError)
        )
        .subscribe((data) => {
          return res(data);
        });
    });
  }
  onCloseWindow() {}
  onMinimize() {}
  onMaximize() {}
}
