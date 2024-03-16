import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { CommonModule, NgFor, NgIf } from "@angular/common";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  NO_ERRORS_SCHEMA,
  ViewChild,
} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from "@angular/material/paginator";
import { Router } from "@angular/router";
@Component({
  selector: "app-dynamic-table",
  templateUrl: "./dynamic-table.component.html",
  styleUrls: ["./dynamic-table.component.scss"],
  standalone: true,
  animations: [
    trigger("detailExpand", [
      state("collapsed,void", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
  providers: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatTabsModule,
    NgFor,
    MatButtonModule,
    NgIf,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatRippleModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatPaginatorModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DynamicTableComponent {
  pageSize = 10;
  resultsLength = 0;
  pageEvent?: PageEvent;
  dataSource = new MatTableDataSource();
  columnsToDisplay = ["name", "weight", "symbol", "position"];

  expandedElement: any | null ;
  displayedColumns: string[] = ["name", "weight", "symbol", "position"];
  columnsChild: any[] = [];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, "expand"];
  url: any;
  @Input() options: any = {
    url: "",
    displayedColumns: [],
    data:[]
  };
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private router: Router) {
    this.columnsToDisplayWithExpand = [...this.displayedColumns, "expand"];
    this.url = router.url.replace("/", "");
  }
  ngOnInit() {
    if (this.options.displayedColumns.length>0) {
      this.displayedColumns = this.options.displayedColumns;
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getServerData(event: any) {
    this.pageEvent = event;
  }
}