import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  dataSource = [
    { acq_date: '01/01/2000',sell_date:'01/01/2001', owner_name: 'Fred Guedes', price:'10',owner_addr: '0x8e155c6FE4a860F990Ef7eC160f08B74CC1AF714' },
    { acq_date: '01/01/2001',sell_date:'01/01/2010', owner_name: 'JLM', price:'100',owner_addr: '0x0F990Ef7eC160f01AF7148B74CC8a86FE46c551e' },
];
displayedColumns = ['Acquisition Date', 'Sales Date', 'Owner Name','Price (eth)','Owner Address'];

  constructor() { }

  ngOnInit(): void {
  }

}
