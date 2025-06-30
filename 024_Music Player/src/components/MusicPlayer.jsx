import React, { useRef, useState, useEffect } from 'react';

const songs = [
  { title: 'Song One', src: '/songs/song1.mp3' },
  { title: 'Song Two', src: '/songs/song2.mp3' }
];

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };
    audio.addEventListener('timeupdate', updateProgress);
    return () => audio.removeEventListener('timeupdate', updateProgress);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSong]);

  return (
    <div style={styles.container}>
      <h2>{songs[currentSong].title}</h2>
      <audio ref={audioRef} src={songs[currentSong].src} />
      <div style={styles.controls}>
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={nextSong}>Next</button>
      </div>
      <div style={styles.progressBar}>
        <div style={{ ...styles.progress, width: `${progress}%` }} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: '50px auto',
    textAlign: 'center',
    fontFamily: 'Arial'
  },
  controls: {
    margin: '20px 0'
  },
  progressBar: {
    height: '10px',
    background: '#ddd',
    borderRadius: '5px',
    overflow: 'hidden'
  },
  progress: {
    height: '100%',
    background: '#4caf50'
  }
};

export default MusicPlayer;
