import './polyfills';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyModule } from './app/app.module';
import { AppRoutingModule } from './app/app-routing.module';
import { SidenavResponsiveComponent } from './app/sidenav-responsive/sidenav-responsive.component';
import { AppComponent } from './app/app.component';
import { BlockchainViewerComponent } from './app/blockchain-viewer/blockchain-viewer.component';
import { InfraAsCodeComponent } from './app/infra-as-code/infra-as-code.component';
import { AngularComponent } from './app/angular/angular.component';
import { KafkaComponent } from './app/kafka/kafka.component';
import { TestingComponent } from './app/testing/testing.component';
import { GoComponent } from './app/go/go.component';
import { SpringComponent } from './app/spring/spring.component';
import { BlockchainService, Peer, Block, Consortium, Orderer } from './app/services/blockchain.service';
import { FabricLedgerComponent } from './app/fabric-ledger/fabric-ledger.component';
import { ConsortiumComponent } from './app/consortium/consortium.component';
import { PeerComponent } from './app/peer/peer.component';
import { OrdererComponent } from './app/orderer/orderer.component';
import { BlocksComponent } from './app/blocks/blocks.component';
import { MatCardModule } from '@angular/material/card';
import { EmailSuscribeComponent } from './app/email-suscribe/email-suscribe.component';
import { BackendService } from './app/services/backend.service';
import {NftCardComponent} from './app/nft-card/nft-card.component'
import { HistoryComponent } from './app/history/history.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router



// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.
@NgModule({
  imports: [
    MyModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
  ],
  entryComponents: [AppComponent],
  declarations: [
    AppComponent,
    BlockchainViewerComponent,
    InfraAsCodeComponent,
    AngularComponent,
    KafkaComponent,
    TestingComponent,
    GoComponent,
    SpringComponent,
    SidenavResponsiveComponent,
    FabricLedgerComponent,
    ConsortiumComponent,
    PeerComponent,
    OrdererComponent,
    BlocksComponent,
    EmailSuscribeComponent,
    NftCardComponent,
    HistoryComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    BackendService,
    BlockchainService
  ],
  exports: [RouterModule]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */