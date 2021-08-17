import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { ActivatedRoute } from '@angular/router';
import { PNftDetails } from '../interfaces/PNft-details';
import { Observable } from 'rxjs';

import { BlockchainService, Block } from '../services/blockchain.service';

@Component({
    selector: 'app-nft-card',
    templateUrl: './nft-card.component.html',
    styleUrls: ['./nft-card.component.css'],
})
export class NftCardComponent implements OnInit {
    payload: String;
    public blocksLists: Observable<Block[]>;

    apiResp: Observable<PNftDetails>;
    otherData = { video: './assets/Ataraxis.mp4', type: 'Digital', gif:'./assets/BE_A_STEREOTYPE.gif' };
    tagData: String;
    
    constructor(
        private route: ActivatedRoute,
        private backendService: BackendService,private blockchainService: BlockchainService
    ) {}

    ngOnInit(): void {
        this.blocksLists = this.blockchainService.getBlocks();
        this.tagData =
            'WFg6WFg6WFg6WFg6WFg6WFg6WFg=BMOFh3hlkR+Fxdd1kj3bABeJSKXPrhwAHCY9LfNL0Sw4QOnLsUR+1WCTLF6ba36FBR0crilnvlT3upuDuLB9Z4VN1eApxJhEtNlNVDtvSVMFyKIId3N23tbx3FmgQEPUh+KUJaBqRtNSkmBhPmjs8C/50iEhQzZxmhuGhzU4V2vXX2feo46eKJKVP0I/gTmLuiyzqj9VdpMwA01OcO7XjeLJzp8ZNtWUMXk/Hpo5DsSrF+hnT0HH';
        console.log('Called Constructor');
        //this.route.queryParams.subscribe((params) => {
        //    this.payload = params['payload'];
        //  });
        this.getNftDetails(this.tagData);

    }

    getNftDetails(payload: String) {
        this.apiResp = this.backendService.getNftDetails(this.tagData);

        console.log(this.apiResp);
    }
}
