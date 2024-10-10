const { getCurrentWindow } = window.__TAURI__.window;

const appWindow = getCurrentWindow();

export function initializeTitlebarButtons() {
    const minimizeButton = document.getElementById('minimize');
    const maximizeButton = document.getElementById('maximize');
    const closeButton = document.getElementById('close');

    minimizeButton.addEventListener('click', () => {
        appWindow.minimize();

    });

    maximizeButton.addEventListener('click', () => {
        appWindow.toggleMaximize();

    });

    closeButton.addEventListener('click', () => {
        appWindow.close();
    });
}