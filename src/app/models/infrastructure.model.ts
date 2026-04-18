export interface CloudNode {
  id: string;
  name: string;
  type: 'compute' | 'database' | 'storage';
  provider: 'aws' | 'gcp' | 'azure';
  region: string;
  monthlyCost: number;
  position: { x: number; y: number };
}

export interface CloudConnection {
  sourceId: string;
  targetId: string;
  latencyMs: number;
}