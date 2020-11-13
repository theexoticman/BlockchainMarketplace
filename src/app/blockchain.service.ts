import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';


export interface Orderer {
  	consensusAlgorithm: string;
	owner: string;
	consortium: Consortium;
}

export interface Peer {
  owner: string;
  type: string;
  smartContracts: string[];
  ledgers: string[];
}

export interface Consortium {
  name: string;
  companies: string[];
}
export interface Block {
  hash: string;
  name: string;
  description:string;
}

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
	
	blocksEndpoint: string = 'http://localhost:8080/blocks';
	consortiumsEndpoint: string = 'http://localhost:8080/consortiums';
	peersEndpoint: string = 'http://localhost:8080/peers';
	ordererEndpoint: string = 'http://localhost:8080/orderers';



	headers = new HttpHeaders().set('Content-Type', 'application/json');
  	
  	constructor(private http: HttpClient) { }
  
	getBlocks(): Observable<Block[]> {
		// return this.http.get<Block[]>(this.blocksEndpoint);
		var block:Block = {name:"name",hash:"hash",description:"description"}
		var array: Block[] = [];
		array.push(block);
		const ret = of(array);
		return ret;
	}
	getConsortiums(): Observable<Block[]> {
		return this.http.get<Block[]>(this.consortiumsEndpoint);
	}
	getPeers(): Observable<Block[]> {
		return this.http.get<Block[]>(this.peersEndpoint);
	}
	getOrderers(): Observable<Block[]> {
		return this.http.get<Block[]>(this.ordererEndpoint);
	}
}
