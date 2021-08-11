import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  dataSource = [
    { acq_date: '01/01/2000',sell_date:'01/01/2001', owner_name: 'JLM', owner_addr: '0x0F990Ef7eC160f01AF7148B74CC8a86FE46c551e',price:'10' },
    { acq_date: '01/01/2001',sell_date:'01/01/2010', owner_name: 'JLM', owner_addr: '0x0F990Ef7eC160f01AF7148B74CC8a86FE46c551e',price:'100' },
];
displayedColumns = ['Acquisition Date', 'Sales Date', 'Owner Name', 'Owner Address','Price (eth)'];

  constructor() { }

  ngOnInit(): void {
  }

}
