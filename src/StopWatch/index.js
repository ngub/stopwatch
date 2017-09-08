import {template} from './template';
import './styles.css';

export class StopWatch {

    /**
     * @constructor
     * @param {DOMElement} element
     */
    constructor(element) {
        this._parentElement = element;
        this._value = 0;
        this._timer = null;
        this._timerInterval = 1000;
        this._render();
    }

    /**
     * @public
     */
    start() {
        this._startTimer(this._onTimerTick.bind(this));
    }

    /**
     * @public
     */
    pause() {
        this._stopTimer();
    }

    /**
     * @public
     */
    stop() {
        this._stopTimer();
        this._resetValue();
    }

    /**
     * @public
     */
    get value() {
        return this._value;
    }

    /**
     * @private
     */
    _onValueChange() {
        console.log(this._value);
        this._render(this._value);
    }

    /**
     * @private
     */
    _render() {
        this._parentElement.innerHTML = template({value: this._value});
    }

    /**
     * @private
     */
    _onTimerTick() {
        this._incrementValue();
    }

    /**
     * @private
     */
    _incrementValue() {
        this._setValue(this.value + 1);
    }

    /**
     * @private
     */
    _resetValue() {
        this._setValue(0);
    }

    /**
     * @private
     * @param {number} value
     */
    _setValue(value) {
        this._value = value;
        this._onValueChange();
    }

    /**
     * @private
     */
    _startTimer(callback) {
        if (!this._timer) {
            this._setTimer(setInterval(
                callback,
                this._timerInterval
            ));
        }
    }

    /**
     * @private
     */
    _stopTimer() {
        clearInterval(this._getTimer());
        this._setTimer(null);
    }

    /**
     * @private
     */
    _getTimer() {
        return this._timer;
    }

    /**
     * @private
     * @param {number} timerId
     */
    _setTimer(timerId) {
        this._timer = timerId;
    }
}
