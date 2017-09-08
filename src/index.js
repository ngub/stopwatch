import {StopWatch} from './StopWatch';

document.body.onload = renderApp;

function renderApp() {
    document.body.innerHTML = `
        <div class="app">
            <div class="stop-watch" style="width: 500px; height: 500px;"></div>
            <div class="buttons">
                <button class="button start">Start</button>
                <button class="button pause">Pause</button>
                <button class="button stop">Stop</button>
            </div>
        </div>
    `;
    const stopWatchElement = document.querySelector('.stop-watch');
    const stopWatch = new StopWatch(stopWatchElement);

    const startButtonElement = document.querySelector('.start');
    startButtonElement.onclick = stopWatch.start.bind(stopWatch);
    const pauseButtonElement = document.querySelector('.pause');
    pauseButtonElement.onclick = stopWatch.pause.bind(stopWatch);
    const stopButtonElement = document.querySelector('.stop');
    stopButtonElement.onclick = stopWatch.stop.bind(stopWatch);
}
