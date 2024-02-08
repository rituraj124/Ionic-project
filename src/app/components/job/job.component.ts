import { Component, OnInit, Input } from '@angular/core';
import { IonCard, IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonLabel, IonList, IonListHeader, IonRow, IonSearchbar, IonText, IonThumbnail, IonTitle, IonToolbar, IonChip, IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bookmark } from 'ionicons/icons';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  standalone: true,
  imports: [IonCard, IonHeader, IonToolbar, IonContent, IonTitle, IonButtons, IonThumbnail, IonIcon, IonRow, IonCol,IonText, IonLabel, IonSearchbar, IonButton, IonList, IonListHeader, IonItem,IonChip]
})
export class JobComponent  implements OnInit {

  @Input() job: any;
  constructor() { 
    addIcons({bookmark})
   }

  ngOnInit() {}

}
