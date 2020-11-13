import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BlockchainService, Block  } from '../blockchain.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit  {



	public blocksLists = [];
  
  constructor(private blockchainService: BlockchainService) { }

  ngOnInit(): void {
  	this.blockchainService.getBlocks().subscribe(data => this.blocksLists = data);
  }
  ngDoCheck(): void{

  }


}
