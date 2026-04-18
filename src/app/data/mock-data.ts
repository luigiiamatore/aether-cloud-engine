import { CloudNode } from "../models/infrastructure.model";

export const MOCK_CLOUD_NODES: CloudNode[] = [
    {
        id: '1',
        name: 'AWS EC2 Instance',
        type: 'compute',
        provider: 'aws',
        region: 'us-east-1',
        monthlyCost: 50,
        position: { x: 100, y: 150 }
    },
    {
        id: '2',
        name: 'GCP Cloud SQL',
        type: 'database',
        provider: 'gcp',
        region: 'us-central1',
        monthlyCost: 100,
        position: { x: 300, y: 150 }
    }
];