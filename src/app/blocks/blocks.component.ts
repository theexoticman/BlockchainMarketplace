import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BlockchainService, Block } from '../services/blockchain.service';
import { Observable } from 'rxjs';
import { NftCardComponent } from '../nft-card/nft-card.component';
@Component({
    selector: 'app-blocks',
    templateUrl: './blocks.component.html',
    styleUrls: ['./blocks.component.css'],
})
export class BlocksComponent implements OnInit {
    public blocksLists: Observable<Block[]>;
    addresses: Observable<string[]>;
    count = 0;

    constructor(private blockchainService: BlockchainService) {}



    ngOnInit(): void {
        this.blocksLists = this.blockchainService.getBlocks();
    }

    ngDoCheck(): void {}
}
