import { Injectable, signal } from '@angular/core';

import { MOCK_CLOUD_NODES } from '../data/mock-data';
import { CloudNode } from '../models/infrastructure.model';

@Injectable({
  providedIn: 'root',
})
export class Infrastructure {
  nodes = signal<CloudNode[]>(MOCK_CLOUD_NODES);

  addNode(node: CloudNode) {
    this.nodes.update((currentNodes) => [...currentNodes, node]);
  }
}
