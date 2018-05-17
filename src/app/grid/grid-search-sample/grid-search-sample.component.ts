import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxColumnComponent } from "igniteui-angular/grid/column.component";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
import { MARKET_DATA } from "./data";

@Component({
    selector: "grid-search-sample",
    styleUrls: ["./grid-search-sample.component.scss"],
    templateUrl: "./grid-search-sample.component.html"
})
export class GridSearchSampleComponent implements OnInit {

    @ViewChild("grid1") public grid: IgxGridComponent;
    public data: any[];
    public caseSensitive: boolean = false;
    public searchText: string = "";

    public ngOnInit(): void {
        this.data = MARKET_DATA;
    }

    public clearSearch() {
        this.searchText = "";
        this.grid.clearSearch();
    }

    public searchKeyDown(ev) {
        if (ev.key === "Enter" || ev.key === "ArrowDown" || ev.key === "ArrowRight") {
            this.grid.findNext(this.searchText, this.caseSensitive);
        } else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") {
            this.grid.findPrev(this.searchText, this.caseSensitive);
        }
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.grid.findNext(this.searchText, this.caseSensitive);
    }
}
