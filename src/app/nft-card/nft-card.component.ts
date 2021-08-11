import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nft-card',
    templateUrl: './nft-card.component.html',
    styleUrls: ['./nft-card.component.css'],
})
export class NftCardComponent implements OnInit {
    data ={
        path:"./assets/snorlax.png",
        creator:{name:"BE A STEREOTYPE",addr:"0xcafe93d2db682d8031569cee78b994637ba0de8a"},
        owner:{name:"JLM",addr:"0x0F990Ef7eC160f01AF7148B74CC8a86FE46c551e"},
        nft:{type:"Digital",name:"Ataraxis",addr:"0xd07dc4262bcdbf85190c01c996b4c06a461d2430"},
        
    }
    constructor() {}

    ngOnInit(): void {}
}
