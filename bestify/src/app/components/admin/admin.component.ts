import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  // dataSource: MatTableDataSource<UserData>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // // Create 100 users
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    // // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  pie: any = 'PieChart';
  piedata: any[] = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000],
  ];
  pietitle: any = 'pie chart';
  piecolumns: any[] = ['city', 'population'];
  pieoptions: any = {
    colors: ['#F4D03F', '#58D68D', '#5DADE2', '#E74C3C', '#8E44AD'],
    is3D: true,
  };
  piewidth: any = 600;
  pieheight: any = 600;
  bar: any = 'BarChart';
  bardata: any[] = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000],
  ];
  bartitle: any = 'bar chart';
  barcolumns: any[] = ['city', 'population'];
  baroptions: any = {
    colors: ['#5DADE2', '#58D68D', '#5DADE2', '#E74C3C', '#8E44AD'],
    is3D: true,
  };
  barwidth: any = 600;
  barheight: any = 600;

  column: any = 'ColumnChart';
  columndata: any[] = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000],
  ];

  columntitle: any = 'column chart';
  columncolumns: any[] = ['city', 'population'];
  columnoptions: any = {
    colors: ['#E74C3C', '#58D68D', '#5DADE2', '#E74C3C', '#8E44AD'],
    is3D: true,
  };
  columnwidth: any = 600;
  columnheight: any = 600;

  combo: any = 'ComboChart';
  combodata: any = [
    ['Account', 3, 2, 2.5],
    ['HR', 2, 3, 2.5],
    ['IT', 1, 5, 3],
    ['Sales', 3, 9, 6],
    ['Marketing', 4, 2, 3],
  ];
  // combotitle: any = 'combo chart';
  // combocolumns: any[] = ['city', 'population'];
  // combooptions: any = {
  //   colors: ['#F4D03F', '#58D68D', '#5DADE2', '#E74C3C', '#8E44AD'],
  //   is3D: true,
  // };
  combowidth: any = 600;
  comboheight: any = 600;

  ngOnInit(): void {}
}
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
//   };
// }
