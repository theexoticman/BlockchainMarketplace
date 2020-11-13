import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BlockchainService, Block  } from '../blockchain.service';
import { BlocksComponent } from '../blocks/blocks.component';
import {Observable} from 'rxjs';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-companies-widget',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.css']
})
export class BlockchainViewerComponent implements OnInit {
	
	tiles: Tile[] = [
	    {text: 'Blocks', cols: 3, rows: 1, color: 'lightblue'},
	    {text: 'Consortium', cols: 1, rows: 2, color: 'lightgreen'},
	    {text: 'Peers', cols: 1, rows: 1, color: 'lightpink'},
	    {text: 'Orderer', cols: 2, rows: 1, color: '#DDBDF1'},
    ];

	Blocks = new Map([['Block1','Block 1 description'],['Block2','Block 2 description']]); // legacy. to use the blockarray type


  	currentTab="";
  	
  	constructor(private blockchainService: BlockchainService) { }

	ngOnInit(): void {
		
	}
	PickContent(event){
		this.currentTab=event.tab.textLabel;
	}

  
}