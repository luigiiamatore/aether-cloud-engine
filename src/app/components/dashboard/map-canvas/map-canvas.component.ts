import { Component, inject } from '@angular/core';

import { InfrastructureService } from '../../../services/infrastructure.service';

@Component({
  selector: 'app-map-canvas',
  imports: [],
  templateUrl: './map-canvas.component.html',
  styleUrl: './map-canvas.component.scss',
})
export class MapCanvasComponent {
  private _infraService = inject(InfrastructureService);
  nodes = this._infraService.nodes;
}
