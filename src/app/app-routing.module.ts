import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockchainViewerComponent } from './blockchain-viewer/blockchain-viewer.component';
import { InfraAsCodeComponent } from './infra-as-code/infra-as-code.component';
import { AngularComponent } from './angular/angular.component';
import { KafkaComponent } from './kafka/kafka.component';
import { TestingComponent } from './testing/testing.component';
import { GoComponent } from './go/go.component';
import { SpringComponent } from './spring/spring.component';
import { EmailSuscribeComponent } from './email-suscribe/email-suscribe.component';

const routes: Routes = [
		{ path: 'Blockchain-Viewer', component: BlockchainViewerComponent },
		{ path: 'Infra-as-Code', component: InfraAsCodeComponent },
		{ path: 'Angular', component: AngularComponent },
		{ path: 'Go', component: GoComponent },
		{ path: 'Testing', component: TestingComponent },
		{ path: 'Spring', component: SpringComponent },			
		{ path: 'Kafka', component: KafkaComponent },
		{ path: 'Subscribe', component: EmailSuscribeComponent }			
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
