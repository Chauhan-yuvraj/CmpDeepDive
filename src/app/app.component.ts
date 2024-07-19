import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './deshboard/server-status/server-status.component';
import { TrafficComponent } from './deshboard/traffic/traffic.component';
import { TicketsComponent } from './deshboard/tickets/tickets.component';
import { DeshboardItemComponent } from './deshboard/deshboard-item/deshboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DeshboardItemComponent,
  ],
})
export class AppComponent {}
