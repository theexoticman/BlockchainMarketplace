/*import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
} from '@angular/common/http';
import Web3 from 'web3';
import { promises } from 'dns';
import { WEB3 } from '../web3';
import { WindowRef } from '../window-ref';
import { bindNodeCallback } from 'rxjs/';
import { of } from 'rxjs/';
import { map, tap, catchError } from 'rxjs/operators';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class EthereumService {
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    public mnemonic: string;
    public infura: string;

    //webmodal
    private web3js: any;
    private provider: any;
    private accounts: any;
    private web3Modal: Web3Modal;
    private accountStatusSource = new Subject<any>();
    accountStatus$ = this.accountStatusSource.asObservable();
    // webmodal end
    constructor(@Inject(WEB3) private web3: Web3, private winRef: WindowRef) {
        this.mnemonic =
            'exit doctor exchange chest aim chief enough income monster canyon include tragic';
        this.infura =
            'https://rinkeby.infura.io/v3/3f0a170d22394d6bb348c7529ab40409';
        this.web3 = new Web3(winRef.nativeWindow.ethereum);
        //console.log(this.web3.eth.defaultAccount.);
        console.log('Native window obj', winRef.nativeWindow.ethereum);
        this.web3.eth.getAccounts();

        //webmodal
        const providerOptions = {
            walletconnect: {
                package: WalletConnectProvider, // required
                options: {
                    infuraId: '3f0a170d22394d6bb348c7529ab40409', // required
                },
            },
        };
        this.web3Modal = new Web3Modal({
            network: 'rinkeby', // optional
            cacheProvider: true, // optional
            providerOptions, // required
            theme: {
                background: 'rgb(39, 49, 56)',
                main: 'rgb(199, 199, 199)',
                secondary: 'rgb(136, 136, 136)',
                border: 'rgba(195, 195, 195, 0.14)',
                hover: 'rgb(16, 26, 32)',
            },
        });
        // end web3modal
    }
    // end web3modal
    async connectAccount() {
        this.web3Modal.clearCachedProvider();
    
        this.provider = await this.web3Modal.connect(); // set provider
        this.web3js = new Web3(this.provider); // create web3 instance
        this.accounts = await this.web3js.eth.getAccounts(); 
        this.accountStatusSource.next(this.accounts)
      }
        // end web3modal
    /** Returns all accounts available 
    public getAccounts(): Observable<string[]> {
        return bindNodeCallback(this.web3.eth.getAccounts)();
    }
    /** Get the current account 
    public currentAccount(): Observable<string | Error> {
        if (this.web3.eth.defaultAccount) {
            return of(this.web3.eth.defaultAccount);
        } else {
            return this.getAccounts().pipe(
                tap((accounts: string[]) => {
                    if (accounts.length === 0) {
                        throw new Error('No accounts available');
                    }
                }),
                map((accounts: string[]) => accounts[0]),
                tap((account: string) => (this.web3.defaultAccount = account)),
                catchError((err: Error) => of(err))
            );
        }
    }
}
*/