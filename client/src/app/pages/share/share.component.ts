import { Component } from '@angular/core';
import { ApiUrl } from 'src/app/genetal';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent {
  columns = ["name", "phone", "address", "email"];
  columnDate = ["createdAt", "updatedAt"];
  options: any = {
    url: ApiUrl.Share,
    displayedColumns: ["no", ...this.columns],
  };
}
