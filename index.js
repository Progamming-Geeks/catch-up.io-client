import App from './src/App.svelte';
import './src/socket';

const app = new App({
  target: document.body,
});

export default app;
