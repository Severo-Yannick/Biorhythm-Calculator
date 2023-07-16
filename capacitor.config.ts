import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.example.biorhytms',
  appName: 'Biorhytms',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
