import { Component } from '@angular/core';
import { SidenavResponsiveComponent } from './sidenav-responsive/sidenav-responsive.component';
import { EmailSuscribeComponent } from './email-suscribe/email-suscribe.component';
import { Observable } from 'rxjs';

export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'blockchain-viewer';

    currentTab = '3';
    addresses: Observable<string[]>;
    tiles: Tile[] = [
        {
            text: 'Fractionalized NFT',
            cols: 3,
            rows: 1,
            color: 'lightblue',
        },
        { text: 'Fundraising STO', cols: 1, rows: 2, color: 'lightgreen' },
        { text: 'NFT & Physical Art', cols: 1, rows: 1, color: 'lightpink' },
        { text: 'Investing', cols: 2, rows: 1, color: '#DDBDF1' },
    ];
    constructor() {}
    PickContent(event) {
        this.currentTab = event.tab.textLabel;
    }
}
