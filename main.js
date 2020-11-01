window.onload = () => {
  const song_img_el = document.getElementById('song-image');
  const song_title_el = document.getElementById('song-title');
  const song_artist_el = document.getElementById('song-artist');
  const song_next_up_el = document.getElementById('song-next-up');

  const prev_btn = document.getElementById('prev-btn');
  const play_btn = document.getElementById('play-btn');
  const play_btn_icon = document.getElementById('play-icon');
  const next_btn = document.getElementById('next-btn');

  const audio_player = document.getElementById('music-player');

  let current_song_index;
  let next_song_index;

  let songs = [
    {
      id: 1,
      title: 'Akh Lad Jaave',
      artist: 'Badshah, Asees Kaur, Jubin Nautiyal',
      song_path: './music/Akh Lad Jaave - Songs.pk - 128Kbps.mp3',
      img_path: './images/song-1.jpg'
    },
    {
      id: 2,
      title: 'Chogada',
      artist: 'Darshan Raval, Asees Kaur',
      song_path: './music/Chogada - Songs.pk - 128Kbps.mp3',
      img_path: './images/song-2.jpg'
    },
    {
      id: 3,
      title: 'Coca Cola Tu',
      artist: 'Tony Kakkar',
      song_path: './music/Coca Cola Tu - Songs.pk - 128Kbps.mp3',
      img_path: './images/song-3.webp'
    },
    {
      id: 4,
      title: 'Dekhte Dekhte',
      artist: 'Atif Aslam',
      song_path: './music/Dekhte Dekhte - Songs.pk - 128Kbps.mp3',
      img_path: './images/song-4.jpg'
    },
    {
      id: 5,
      title: 'Rum & Whisky',
      artist: 'Akshay Verma',
      song_path: './music/Vicky Donor - 03 - Rum & Whisky.mp3',
      img_path: './images/song-5.jpg'
    },
    {
      id: 6,
      title: 'Pani Da Rang (Male)',
      artist: 'Ayushmann Khurrana and Rochak Kohli',
      song_path: './music/Vicky Donor - 04 - Pani Da Rang (Male).mp3',
      img_path: './images/song-6.jpg'
    },
  ];

  play_btn.addEventListener('click', TogglePlaySong);
  next_btn.addEventListener('click', () => ChangeSong());
  prev_btn.addEventListener('click', () => ChangeSong(false));

  InitPlayer();

  function InitPlayer() {
    current_song_index = 0;
    next_song_index = current_song_index + 1;
    UpdatePlayer();
  }

  function TogglePlaySong() {
    if (audio_player.paused) {
      audio_player.play();
      play_btn_icon.classList.remove('fa-play')
      play_btn_icon.classList.add('fa-pause');
    } else {
      audio_player.pause();
      play_btn_icon.classList.add('fa-play')
      play_btn_icon.classList.remove('fa-pause');
    }
  }

  function ChangeSong(next = true) {
    if (next) {
      current_song_index++;
      next_song_index = current_song_index + 1;

      if (current_song_index > songs.length - 1) {
        current_song_index = 0;
        next_song_index = current_song_index + 1;
      }

      if (next_song_index > songs.length - 1) {
        next_song_index = 0;
      }
    } else {
      current_song_index--;
      next_song_index = current_song_index + 1;

      if (current_song_index < 0) {
        current_song_index = songs.length - 1;
        next_song_index = 0;
      }
    }

    UpdatePlayer();
    TogglePlaySong();
  }

  function UpdatePlayer() {
    let song = songs[current_song_index];

    song_img_el.style = "background-image: url('" + song.img_path + "');";
    song_title_el.innerText = song.title;
    song_artist_el.innerText = song.artist;

    song_next_up_el.innerText = songs[next_song_index].title + " by " + songs[next_song_index].artist;

    audio_player.src = song.song_path;
  }
}
