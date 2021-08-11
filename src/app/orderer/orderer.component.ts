import { Component, OnInit } from '@angular/core';
import { BlockchainService, Orderer  } from '../services/blockchain.service';

@Component({
  selector: 'app-orderer',
  templateUrl: './orderer.component.html',
  styleUrls: ['./orderer.component.css']
})
export class OrdererComponent implements OnInit {

	public orderers = [];

  constructor(private blockchainService: BlockchainService) { }

  ngOnInit(): void {
     this.blockchainService.getOrderers().subscribe(data => this.orderers = data);
  }

  
}
