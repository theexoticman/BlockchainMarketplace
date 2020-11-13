import { Component, OnInit } from '@angular/core';
import { BlockchainService, Consortium  } from '../blockchain.service';

@Component({
  selector: 'app-consortium',
  templateUrl: './consortium.component.html',
  styleUrls: ['./consortium.component.css']
})
export class ConsortiumComponent implements OnInit {

	public consortiums = [];
	constructor(private blockchainService: BlockchainService) { }

	ngOnInit(): void {
  		this.blockchainService.getConsortiums().subscribe(data => this.consortiums = data);
  	}
  
	
}
