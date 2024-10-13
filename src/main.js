const { invoke } = window.__TAURI__.core;
//const { appWindow } = window.__TAURI__.window;
//import { getCurrentWindow } from '@tauri-apps/api/window';

// main.js
import { initializeSearch } from './commands/SearchSystem.js';
import { initializeTitlebarButtons } from './commands/TitlebarButtons.js';
// import { initializeDropdowns } from './commands/DropdownLogic.js';

document.addEventListener("DOMContentLoaded", () => {
    initializeSearch();
    initializeTitlebarButtons();
    // initializeDropdowns(); // Doesnt wanna work???
});

