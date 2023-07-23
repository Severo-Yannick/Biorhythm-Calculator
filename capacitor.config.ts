import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.example.biorhytms',
  appName: 'Biorhytms',
  webDir: 'build',
  server: {
    url: 'http://192.168.1.100:3000',
    cleartext: true
  }
};

export default config;
