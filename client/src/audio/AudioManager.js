class AudioManager {

    constructor() {

        this.audio = new Audio();

    }

    load(src) {

        this.audio.src = src;

    }

    play() {

        return this.audio.play();

    }

    pause() {

        this.audio.pause();

    }

    stop() {

        this.audio.pause();

        this.audio.currentTime = 0;

    }

    seek(time) {

        this.audio.currentTime = time;

    }

    setVolume(volume) {

        this.audio.volume = volume / 100;

    }

    mute() {

        this.audio.muted = true;

    }

    unmute() {

        this.audio.muted = false;

    }

    get element() {

        return this.audio;

    }

}

const audioManager = new AudioManager();

export default audioManager;