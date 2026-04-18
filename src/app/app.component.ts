import { Component, signal } from '@angular/core';

import { MapCanvasComponent } from './components/dashboard/map-canvas/map-canvas.component';

@Component({
  selector: 'app-root',
  imports: [MapCanvasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly title = signal('aether-cloud-engine');
}
