import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-sidenav-responsive',
  templateUrl: './sidenav-responsive.component.html',
  styleUrls: ['./sidenav-responsive.component.css']
})
export class SidenavResponsiveComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  shouldRun = true;

  MenuItems = ['Blockchain-Viewer', 'Kafka', 'Spring', 'Testing', 'Go', 'Infra-as-Code', 'Angular', 'Subscribe'];


  Blocks = new Map([['Block1', 'Block 1 description'], ['Block2', 'Block 2 description']]); // legacy. to use the blockarray type


  fillerContent = Array.from({ length: 50 }, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  currentTab = "";

  tiles: Tile[] = [
    { text: 'Blocks', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Consortium', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Peers', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Orderer', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  PickContent(event) {
    this.currentTab = event.tab.textLabel;
  }


}
