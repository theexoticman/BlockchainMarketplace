import { Component, OnInit } from '@angular/core';
import { BlockchainService, Peer  } from '../blockchain.service';

@Component({
  selector: 'app-peer',
  templateUrl: './peer.component.html',
  styleUrls: ['./peer.component.css']
})
export class PeerComponent implements OnInit {

	public peers = [];

  constructor(private blockchainService: BlockchainService) { }

  ngOnInit(): void {
   	this.blockchainService.getPeers().subscribe(data => this.peers = data);
  }

}
