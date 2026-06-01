// Track database structure
const trackList = [
  {
    id: 1,
    title: "Pavazha Malli",
    artist: "Sai Abhyankkar",
    album: "Pavazha Malli Single",
    duration: "3:42",
    src: "https://res.cloudinary.com/dqr5lupgw/video/upload/v1780123299/Pavazha_Malli_luxjk9.mp3",
    cover: "assets/pavazha_malli.png",
    lyrics: [
      { time: 0, text: "🎵 Pavazha Malli 🎵" },
      { time: 10, text: "Pavazha Malli, pookum neram..." },
      { time: 22, text: "Un vizhiyil ennai naane kanden..." },
      { time: 35, text: "Indha kaadhal endrum vazhum..." },
      { time: 48, text: "Unnodu en payanam thodarum..." },
      { time: 62, text: "Oru nodi kooda unnai maravaen..." },
      { time: 76, text: "En uyirae en paadal nee dhaan..." },
      { time: 92, text: "Pavazha malli vaasam veesum..." },
      { time: 110, text: "En nenjil un kaadhal pesum..." },
      { time: 130, text: "🎵 Musical Interlude 🎵" },
      { time: 155, text: "Kaalangal kadandhu ponaalum..." },
      { time: 172, text: "Anbae un ninaivugal vazhum..." },
      { time: 190, text: "Pavazha Malli, pookum neram..." },
      { time: 210, text: "Un vizhiyil ennai naane kanden..." }
    ]
  },
  {
    id: 2,
    title: "Katchi Sera",
    artist: "Sai Abhyankkar",
    album: "Katchi Sera Pop",
    duration: "3:05",
    src: "https://res.cloudinary.com/dqr5lupgw/video/upload/v1780123290/Katchi_Sera_kz6l8l.mp3",
    cover: "assets/katchi_sera.png",
    lyrics: [
      { time: 0, text: "🎵 Katchi Sera 🎵" },
      { time: 5, text: "Katchi Sera kaathirukkum kootame..." },
      { time: 15, text: "Unnai paarka thavithedhe en nenjame..." },
      { time: 26, text: "Hey machi ava dhaan en dhevadhai..." },
      { time: 37, text: "Ava siricha podhum en vazhvae maarudhe..." },
      { time: 48, text: "Adi katchi sera vaadi nee en kootathodu..." },
      { time: 60, text: "Un kaadhal thandhu ennai nee aaludhadi..." },
      { time: 75, text: "🎵 Upbeat EDM Beats playing 🎵" },
      { time: 95, text: "Oru murai nee paartha podhumae..." },
      { time: 108, text: "En ulagamellaam olira seiyumae..." },
      { time: 120, text: "Vaanil megam pola vandhu ponavalae..." },
      { time: 132, text: "En manasula edho senjavalae..." },
      { time: 145, text: "Katchi Sera kaathirukkum kootame..." },
      { time: 160, text: "Unnai paarka thavithedhe en nenjame..." }
    ]
  },
  {
    id: 3,
    title: "Pavazha Malli (Unplugged)",
    artist: "Sai Abhyankkar",
    album: "Acoustic Sessions",
    duration: "2:57",
    src: "https://res.cloudinary.com/dqr5lupgw/video/upload/v1780123288/Pavazha_Malli_Unplugged_ku8gci.mp3",
    cover: "assets/pavazha_malli.png",
    lyrics: [
      { time: 0, text: "🎵 Pavazha Malli (Acoustic) 🎵" },
      { time: 8, text: "Metukal indha acoustic gitaril..." },
      { time: 18, text: "Pavazha malli un vaasam indha paadalil..." },
      { time: 30, text: "Kaadhalin oli ketkudha un nenjil..." },
      { time: 42, text: "Mella mella ennai kolla vandhadhu ennavo..." },
      { time: 58, text: "Un madiyil saaya thudikudhu en maname..." },
      { time: 75, text: "🎵 Guitar Solo 🎵" },
      { time: 95, text: "Indha rathiri pookal malarum..." },
      { time: 112, text: "Nammudaiya kaadhal kooda malarum..." },
      { time: 130, text: "Pavazha malli vaasam veesum..." },
      { time: 150, text: "En nenjil un kaadhal pesum..." }
    ]
  },
  {
    id: 4,
    title: "Vizhi Veekura",
    artist: "Sai Abhyankkar",
    album: "Soulful Strings",
    duration: "2:49",
    src: "https://res.cloudinary.com/dqr5lupgw/video/upload/v1780123289/Vizhi_Veekura_ladvkd.mp3",
    cover: "assets/vizhi_veekura.png",
    lyrics: [
      { time: 0, text: "🎵 Vizhi Veekura 🎵" },
      { time: 5, text: "Vizhi veekura kanave..." },
      { time: 14, text: "En manasula nuzhaiyum urave..." },
      { time: 24, text: "Nee paarkum oru paarvai podhumae..." },
      { time: 34, text: "En thuyaramellaam dhooramae pogumae..." },
      { time: 48, text: "Nenjinilae nuzhaindha thenral nee..." },
      { time: 62, text: "En tholil saayum dhevadhai nee..." },
      { time: 80, text: "🎵 Beautiful Violin Interlude 🎵" },
      { time: 105, text: "Vizhigalil kadhal pesum azhage..." },
      { time: 120, text: "En arugil thunaiyaaga vaazhum urave..." },
      { time: 135, text: "Vizhi veekura kanave..." }
    ]
  },
  {
    id: 5,
    title: "Aasa Kooda",
    artist: "Sai Abhyankkar",
    album: "Aasa Kooda Indie",
    duration: "3:30",
    src: "songs/Aasa Kooda.mp3",
    cover: "assets/aasa_kooda.png",
    lyrics: [
      { time: 0, text: "🎵 Aasa Kooda 🎵" },
      { time: 8, text: "Aasa kooda thottu pogum nerame..." },
      { time: 18, text: "Ennai mella aala thudangum azhage..." },
      { time: 28, text: "Nee siricha en vazhve minnudhae..." },
      { time: 38, text: "En manasulla un thadam thondrudhae..." },
      { time: 50, text: "Adi Aasa Kooda thottu pogum nerame..." },
      { time: 65, text: "Un arugil vaazhum nodi podhume..." },
      { time: 80, text: "🎵 Sweet Pop Beats playing 🎵" },
      { time: 100, text: "Kaatraaga vandhu ennai thottaaye..." },
      { time: 115, text: "Nenjukkulle unna vechene nanbaaye..." },
      { time: 130, text: "Aasa kooda thottu pogum nerame..." }
    ]
  }
];

// Active State Management
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let isMuted = false;
let previousVolume = 0.8;
let likedTracks = JSON.parse(localStorage.getItem('likedTracks')) || [];

// History Stack for Back/Forward Navigation
const viewHistory = ['view-home'];
let historyIndex = 0;

// DOM Elements Cache
const audio = document.getElementById('main-audio-element');
const btnPlay = document.getElementById('btn-play');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnShuffle = document.getElementById('btn-shuffle');
const btnRepeat = document.getElementById('btn-repeat');
const btnMute = document.getElementById('btn-mute');
const btnLyricsToggle = document.getElementById('btn-lyrics-toggle');

const playerTrackImg = document.getElementById('player-track-img');
const playerTrackTitle = document.getElementById('player-track-title');
const playerTrackArtist = document.getElementById('player-track-artist');
const playerLikeButton = document.getElementById('player-like-button');
const barVisualizer = document.getElementById('bar-visualizer');

const timeCurrent = document.getElementById('time-current');
const timeTotal = document.getElementById('time-total');
const progressSeekContainer = document.getElementById('progress-seek-container');
const progressSeekFill = document.getElementById('progress-seek-fill');
const progressSeekThumb = document.getElementById('progress-seek-thumb');

const volumeSeekContainer = document.getElementById('volume-seek-container');
const volumeSeekFill = document.getElementById('volume-seek-fill');
const volumeSeekThumb = document.getElementById('volume-seek-thumb');

const mainScrollContent = document.getElementById('main-scroll-content');
const searchInputContainer = document.getElementById('search-input-container');
const globalSearchInput = document.getElementById('global-search-input');

const viewHome = document.getElementById('view-home');
const viewSearch = document.getElementById('view-search');
const viewLiked = document.getElementById('view-liked');
const lyricsPanel = document.getElementById('lyrics-panel');
const lyricsLinesContainer = document.getElementById('lyrics-lines-container');
const closeLyricsBtn = document.getElementById('close-lyrics-btn');

const homeGridCards = document.getElementById('home-grid-cards');
const homeTrackTableBody = document.getElementById('home-track-table-body');
const searchResultsContainer = document.getElementById('search-results-container');
const searchCategories = document.getElementById('search-categories');
const searchTrackTableBody = document.getElementById('search-track-table-body');

const likedTrackTable = document.getElementById('liked-track-table');
const likedTrackTableBody = document.getElementById('liked-track-table-body');
const likedEmptyState = document.getElementById('liked-empty-state');
const likedTrackCount = document.getElementById('liked-track-count');
const libraryLikedCount = document.getElementById('library-liked-count');

const arrowBack = document.getElementById('arrow-back');
const arrowForward = document.getElementById('arrow-forward');

// Initialize App
function initApp() {
  checkAuthentication();
  renderHomeSongs();
  setupEventListeners();
  loadTrack(currentTrackIndex, false);
  updateLikedViews();
  audio.volume = previousVolume;
}

// Render Song Cards and Tables on Home View
function renderHomeSongs() {
  homeGridCards.innerHTML = '';
  homeTrackTableBody.innerHTML = '';

  trackList.forEach((track, index) => {
    // 1. Grid Cards
    const card = document.createElement('div');
    card.className = 'music-card';
    card.innerHTML = `
      <div class="music-card-img-container">
        <img class="music-card-img" src="${track.cover}" alt="${track.title}">
        <button class="card-play-btn" data-index="${index}"><i class="fa-solid fa-play"></i></button>
      </div>
      <div class="music-card-info">
        <h4 class="music-card-title">${track.title}</h4>
        <p class="music-card-desc">${track.artist} • ${track.album}</p>
      </div>
    `;
    // Click play button on card
    card.querySelector('.card-play-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      playTrack(index);
    });
    // Click card anywhere
    card.addEventListener('click', () => {
      playTrack(index);
    });
    homeGridCards.appendChild(card);

    // 2. Track Row in Table
    const isLiked = likedTracks.includes(track.id);
    const tr = document.createElement('tr');
    tr.id = `home-track-row-${index}`;
    tr.innerHTML = `
      <td class="track-num-col">
        <span class="track-index">${index + 1}</span>
        <i class="fa-solid fa-play play-icon" data-index="${index}"></i>
        <div class="playing-eq">
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
        </div>
      </td>
      <td>
        <div class="track-title-col">
          <img class="track-img" src="${track.cover}" alt="${track.title}">
          <div class="track-details">
            <span class="track-title">${track.title}</span>
            <span class="track-artist">${track.artist}</span>
          </div>
        </div>
      </td>
      <td class="track-album-col">${track.album}</td>
      <td class="track-actions-col">
        <button class="track-like-btn ${isLiked ? 'liked' : ''}" data-id="${track.id}">
          <i class="fa-solid fa-heart"></i>
        </button>
        <span class="track-duration">${track.duration}</span>
      </td>
    `;
    
    // Double click to play
    tr.addEventListener('dblclick', () => {
      playTrack(index);
    });
    // Click row play button
    tr.querySelector('.play-icon').addEventListener('click', (e) => {
      e.stopPropagation();
      playTrack(index);
    });
    // Click heart/like
    tr.querySelector('.track-like-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLikeTrack(track.id);
    });

    homeTrackTableBody.appendChild(tr);
  });
}

// Setup Event Handlers
function setupEventListeners() {
  // Audio Player Core controls
  btnPlay.addEventListener('click', togglePlayPause);
  btnPrev.addEventListener('click', playPreviousTrack);
  btnNext.addEventListener('click', playNextTrack);
  btnShuffle.addEventListener('click', toggleShuffle);
  btnRepeat.addEventListener('click', toggleRepeat);
  btnMute.addEventListener('click', toggleMute);
  btnLyricsToggle.addEventListener('click', toggleLyricsPanel);
  closeLyricsBtn.addEventListener('click', toggleLyricsPanel);
  playerLikeButton.addEventListener('click', () => toggleLikeTrack(trackList[currentTrackIndex].id));

  // Seek bar triggers
  setupSliderInteraction(progressSeekContainer, progressSeekFill, progressSeekThumb, handleSeek);
  setupSliderInteraction(volumeSeekContainer, volumeSeekFill, volumeSeekThumb, handleVolumeSeek);

  // Mobile player seekbar
  setupSliderInteraction(
    document.getElementById('mob-progress-seek-container'),
    document.getElementById('mob-progress-seek-fill'),
    document.getElementById('mob-progress-seek-thumb'),
    handleSeek
  );

  // Mobile Fullscreen play controls
  document.getElementById('mob-btn-play').addEventListener('click', togglePlayPause);
  document.getElementById('mob-btn-prev').addEventListener('click', playPreviousTrack);
  document.getElementById('mob-btn-next').addEventListener('click', playNextTrack);
  document.getElementById('mob-btn-shuffle').addEventListener('click', toggleShuffle);
  document.getElementById('mob-btn-repeat').addEventListener('click', toggleRepeat);
  document.getElementById('mob-btn-lyrics-toggle').addEventListener('click', toggleLyricsPanel);
  document.getElementById('mob-player-like-btn').addEventListener('click', () => toggleLikeTrack(trackList[currentTrackIndex].id));

  // Mobile bottom navigation panel triggers
  document.getElementById('mob-nav-home').addEventListener('click', () => switchMobileTab('mob-nav-home', 'view-home'));
  document.getElementById('mob-nav-search').addEventListener('click', () => switchMobileTab('mob-nav-search', 'view-search'));
  document.getElementById('mob-nav-library').addEventListener('click', () => switchMobileTab('mob-nav-library', 'view-liked'));

  // Expandable compact playbar footer triggers
  document.querySelector('.player-bar').addEventListener('click', (e) => {
    // If click was inside the play/pause button area, don't slide up the fullscreen player
    const rect = document.querySelector('.player-utilities').getBoundingClientRect();
    const clickedUtility = e.clientX >= rect.left && e.clientX <= rect.right;
    
    if (window.innerWidth <= 767 && !clickedUtility) {
      document.getElementById('mobile-fullscreen-player').classList.add('active-overlay');
    }
  });

  // Tapping play/pause pseudo-element button in the compact playbar on mobile
  document.querySelector('.player-bar').addEventListener('click', (e) => {
    const rect = document.querySelector('.player-utilities').getBoundingClientRect();
    const clickedUtility = e.clientX >= rect.left && e.clientX <= rect.right;
    
    if (window.innerWidth <= 767 && clickedUtility) {
      togglePlayPause();
    }
  });

  document.getElementById('mob-player-close-btn').addEventListener('click', () => {
    document.getElementById('mobile-fullscreen-player').classList.remove('active-overlay');
  });

  // Profile User Menu Toggle
  const userMenuBtn = document.getElementById('user-profile-menu-btn');
  const userMenuDropdown = document.getElementById('profile-dropdown-menu');
  
  userMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    userMenuDropdown.classList.toggle('show-dropdown');
  });
  
  // Log out button trigger
  document.getElementById('profile-logout-btn').addEventListener('click', handleLogout);

  // Close menus when clicking outside
  document.addEventListener('click', () => {
    userMenuDropdown.classList.remove('show-dropdown');
  });

  // Login form handler
  document.getElementById('login-form').addEventListener('submit', handleLoginSubmit);

  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT') return;
    
    if (e.code === 'Space') {
      e.preventDefault();
      togglePlayPause();
    } else if (e.code === 'ArrowRight') {
      audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
    } else if (e.code === 'ArrowLeft') {
      audio.currentTime = Math.max(0, audio.currentTime - 5);
    }
  });

  // Audio HTML5 Events
  audio.addEventListener('timeupdate', updatePlaybackProgress);
  audio.addEventListener('loadedmetadata', () => {
    timeTotal.textContent = formatTime(audio.duration);
    const mobTimeTotal = document.getElementById('mob-time-total');
    if (mobTimeTotal) mobTimeTotal.textContent = formatTime(audio.duration);
  });
  audio.addEventListener('ended', handleTrackEnded);

  // Sidebar Panel switching navigation
  document.getElementById('nav-home').addEventListener('click', () => switchView('view-home'));
  document.getElementById('nav-search').addEventListener('click', () => switchView('view-search'));
  document.getElementById('lib-liked-playlist').addEventListener('click', () => switchView('view-liked'));
  document.getElementById('shortcut-liked').addEventListener('click', () => switchView('view-liked'));
  document.getElementById('lib-tamil-hits').addEventListener('click', () => {
    switchView('view-home');
    // Scroll smoothly to tracklist
    document.querySelector('.tracklist-container').scrollIntoView({ behavior: 'smooth' });
  });

  // Back/Forward controls
  arrowBack.addEventListener('click', goBackHistory);
  arrowForward.addEventListener('click', goForwardHistory);

  // Search inputs
  globalSearchInput.addEventListener('input', performInstantSearch);
}

// Load song detail into audio player
function loadTrack(index, autoplay = true) {
  currentTrackIndex = index;
  const track = trackList[index];

  // Set src, cover, titles
  audio.src = track.src;
  playerTrackImg.src = track.cover;
  playerTrackTitle.textContent = track.title;
  playerTrackArtist.textContent = track.artist;
  
  // Update browser document title
  document.title = `${track.title} • ${track.artist} - Spotify`;

  // Update table highlighted rows
  document.querySelectorAll('.track-table tbody tr').forEach(row => row.classList.remove('active-track'));
  
  const homeRow = document.getElementById(`home-track-row-${index}`);
  if (homeRow) homeRow.classList.add('active-track');

  const searchRow = document.getElementById(`search-track-row-${index}`);
  if (searchRow) searchRow.classList.add('active-track');

  const likedRow = document.getElementById(`liked-track-row-${index}`);
  if (likedRow) likedRow.classList.add('active-track');

  // Sync like button in player
  if (likedTracks.includes(track.id)) {
    playerLikeButton.classList.add('liked');
    playerLikeButton.innerHTML = `<i class="fa-solid fa-heart"></i>`;
  } else {
    playerLikeButton.classList.remove('liked');
    playerLikeButton.innerHTML = `<i class="fa-regular fa-heart"></i>`;
  }

  // Update mobile fullscreen player elements
  const mobCover = document.getElementById('mob-player-cover');
  const mobTitle = document.getElementById('mob-player-title');
  const mobArtist = document.getElementById('mob-player-artist');
  const mobLikeBtn = document.getElementById('mob-player-like-btn');
  
  if (mobCover) mobCover.src = track.cover;
  if (mobTitle) mobTitle.textContent = track.title;
  if (mobArtist) mobArtist.textContent = track.artist;
  if (mobLikeBtn) {
    if (likedTracks.includes(track.id)) {
      mobLikeBtn.classList.add('liked');
      mobLikeBtn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    } else {
      mobLikeBtn.classList.remove('liked');
      mobLikeBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    }
  }

  // Load and compile lyrics list
  renderLyrics(track.lyrics);

  // Autoplay
  if (autoplay) {
    audio.play()
      .then(() => {
        isPlaying = true;
        btnPlay.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        document.getElementById('mob-btn-play').innerHTML = `<i class="fa-solid fa-pause"></i>`;
        document.querySelector('.player-bar').classList.add('playing-active');
        barVisualizer.classList.add('active-visualizer');
        toggleEqBars(true);
      })
      .catch(err => {
        console.log("Audio play failed or user gesture required:", err);
      });
  } else {
    isPlaying = false;
    btnPlay.innerHTML = `<i class="fa-solid fa-play"></i>`;
    document.getElementById('mob-btn-play').innerHTML = `<i class="fa-solid fa-play"></i>`;
    document.querySelector('.player-bar').classList.remove('playing-active');
    barVisualizer.classList.remove('active-visualizer');
    toggleEqBars(false);
  }
}

// Toggle EQ Bars animation state in table rows
function toggleEqBars(playState) {
  const activeRows = document.querySelectorAll('.active-track .eq-bar');
  activeRows.forEach(bar => {
    bar.style.animationPlayState = playState ? 'running' : 'paused';
  });
}

// Play a specific song by index
function playTrack(index) {
  loadTrack(index, true);
}

// Toggle play or pause of audio
function togglePlayPause() {
  if (!audio.src) {
    playTrack(0);
    return;
  }

  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    btnPlay.innerHTML = `<i class="fa-solid fa-play"></i>`;
    document.getElementById('mob-btn-play').innerHTML = `<i class="fa-solid fa-play"></i>`;
    document.querySelector('.player-bar').classList.remove('playing-active');
    barVisualizer.classList.remove('active-visualizer');
    toggleEqBars(false);
  } else {
    audio.play()
      .then(() => {
        isPlaying = true;
        btnPlay.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        document.getElementById('mob-btn-play').innerHTML = `<i class="fa-solid fa-pause"></i>`;
        document.querySelector('.player-bar').classList.add('playing-active');
        barVisualizer.classList.add('active-visualizer');
        toggleEqBars(true);
      })
      .catch(e => console.log("Play failed:", e));
  }
}

// Play Next Song
function playNextTrack() {
  let nextIndex = currentTrackIndex + 1;
  if (isShuffle) {
    nextIndex = Math.floor(Math.random() * trackList.length);
  } else if (nextIndex >= trackList.length) {
    nextIndex = 0;
  }
  playTrack(nextIndex);
}

// Play Previous Song
function playPreviousTrack() {
  let prevIndex = currentTrackIndex - 1;
  if (audio.currentTime > 3) {
    // Restart song if played more than 3 seconds
    audio.currentTime = 0;
    return;
  }
  
  if (isShuffle) {
    prevIndex = Math.floor(Math.random() * trackList.length);
  } else if (prevIndex < 0) {
    prevIndex = trackList.length - 1;
  }
  playTrack(prevIndex);
}

// Toggle Shuffle
function toggleShuffle() {
  isShuffle = !isShuffle;
  btnShuffle.classList.toggle('active', isShuffle);
  const mobShuffle = document.getElementById('mob-btn-shuffle');
  if (mobShuffle) mobShuffle.classList.toggle('active', isShuffle);
}

// Toggle Repeat
function toggleRepeat() {
  isRepeat = !isRepeat;
  btnRepeat.classList.toggle('active', isRepeat);
  const mobRepeat = document.getElementById('mob-btn-repeat');
  if (mobRepeat) mobRepeat.classList.toggle('active', isRepeat);
}

// Handle song end trigger
function handleTrackEnded() {
  if (isRepeat) {
    audio.currentTime = 0;
    audio.play();
  } else {
    playNextTrack();
  }
}

// Toggle audio mute state
function toggleMute() {
  isMuted = !isMuted;
  if (isMuted) {
    previousVolume = audio.volume;
    audio.volume = 0;
    btnMute.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
    updateVolumeSlider(0);
  } else {
    audio.volume = previousVolume;
    btnMute.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
    updateVolumeSlider(previousVolume);
  }
}

// Update sliders progress
function updatePlaybackProgress() {
  if (audio.duration) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressSeekFill.style.width = `${percent}%`;
    progressSeekThumb.style.left = `${percent}%`;
    timeCurrent.textContent = formatTime(audio.currentTime);

    // Mobile seek bar update
    const mobSeekFill = document.getElementById('mob-progress-seek-fill');
    const mobSeekThumb = document.getElementById('mob-progress-seek-thumb');
    const mobTimeCurrent = document.getElementById('mob-time-current');
    
    if (mobSeekFill) mobSeekFill.style.width = `${percent}%`;
    if (mobSeekThumb) mobSeekThumb.style.left = `${percent}%`;
    if (mobTimeCurrent) mobTimeCurrent.textContent = formatTime(audio.currentTime);

    // Compact progress indicator update (top border bar)
    const playerBar = document.querySelector('.player-bar');
    if (playerBar) {
      playerBar.style.setProperty('--mobile-progress-width', `${percent}%`);
    }

    // Sync Active Lyric Line based on time
    highlightLyricsLine(audio.currentTime);
  }
}

// Update Volume indicator position
function updateVolumeSlider(volumeVal) {
  const percent = volumeVal * 100;
  volumeSeekFill.style.width = `${percent}%`;
  volumeSeekThumb.style.left = `${percent}%`;
}

// Format times into MM:SS format
function formatTime(secs) {
  if (isNaN(secs)) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// Slider drag and seek handlers
function setupSliderInteraction(container, fill, thumb, callback) {
  let isDragging = false;

  function updateSlider(e) {
    const rect = container.getBoundingClientRect();
    let clientX = e.clientX;
    if (e.touches) clientX = e.touches[0].clientX;
    
    let percentage = (clientX - rect.left) / rect.width;
    percentage = Math.max(0, Math.min(1, percentage));
    
    fill.style.width = `${percentage * 100}%`;
    thumb.style.left = `${percentage * 100}%`;
    
    callback(percentage);
  }

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e);
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) updateSlider(e);
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Mobile touch support
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSlider(e);
  });

  document.addEventListener('touchmove', (e) => {
    if (isDragging) updateSlider(e);
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
  });
}

function handleSeek(percentage) {
  if (audio.duration) {
    audio.currentTime = percentage * audio.duration;
  }
}

function handleVolumeSeek(percentage) {
  audio.volume = percentage;
  previousVolume = percentage;
  isMuted = percentage === 0;
  
  if (isMuted) {
    btnMute.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
  } else if (percentage < 0.4) {
    btnMute.innerHTML = `<i class="fa-solid fa-volume-low"></i>`;
  } else {
    btnMute.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
  }
}

// Switch navigation panels (Home, Search, Liked Songs)
function switchView(viewId) {
  // 1. Hide all panels
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.remove('active-panel');
  });

  // 2. Remove active link markers in sidebar
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });

  // 3. Display correct panel
  const activePanel = document.getElementById(viewId);
  activePanel.classList.add('active-panel');

  // 4. Update Navigation inputs and sidebar icons
  if (viewId === 'view-home') {
    document.getElementById('nav-home').classList.add('active');
    searchInputContainer.style.display = 'none';
  } else if (viewId === 'view-search') {
    document.getElementById('nav-search').classList.add('active');
    searchInputContainer.style.display = 'block';
    globalSearchInput.focus();
  } else if (viewId === 'view-liked') {
    searchInputContainer.style.display = 'none';
    renderLikedSongs();
  }

  // Save navigation history
  if (viewHistory[historyIndex] !== viewId) {
    // Truncate forward history if we were in the middle of backtracking
    viewHistory.splice(historyIndex + 1);
    viewHistory.push(viewId);
    historyIndex = viewHistory.length - 1;
  }

  // Update header arrow enabled state
  arrowBack.disabled = historyIndex === 0;
  arrowForward.disabled = historyIndex === viewHistory.length - 1;

  // Scroll to top
  mainScrollContent.scrollTop = 0;
}

// Go back in history
function goBackHistory() {
  if (historyIndex > 0) {
    historyIndex--;
    const viewId = viewHistory[historyIndex];
    
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active-panel'));
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    
    document.getElementById(viewId).classList.add('active-panel');
    
    if (viewId === 'view-home') {
      document.getElementById('nav-home').classList.add('active');
      searchInputContainer.style.display = 'none';
    } else if (viewId === 'view-search') {
      document.getElementById('nav-search').classList.add('active');
      searchInputContainer.style.display = 'block';
    } else if (viewId === 'view-liked') {
      renderLikedSongs();
    }
    
    arrowBack.disabled = historyIndex === 0;
    arrowForward.disabled = historyIndex === viewHistory.length - 1;
  }
}

// Go forward in history
function goForwardHistory() {
  if (historyIndex < viewHistory.length - 1) {
    historyIndex++;
    const viewId = viewHistory[historyIndex];
    
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active-panel'));
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    
    document.getElementById(viewId).classList.add('active-panel');
    
    if (viewId === 'view-home') {
      document.getElementById('nav-home').classList.add('active');
      searchInputContainer.style.display = 'none';
    } else if (viewId === 'view-search') {
      document.getElementById('nav-search').classList.add('active');
      searchInputContainer.style.display = 'block';
    } else if (viewId === 'view-liked') {
      renderLikedSongs();
    }
    
    arrowBack.disabled = historyIndex === 0;
    arrowForward.disabled = historyIndex === viewHistory.length - 1;
  }
}

// Toggle Like Song Status
function toggleLikeTrack(trackId) {
  const indexInLiked = likedTracks.indexOf(trackId);
  if (indexInLiked === -1) {
    likedTracks.push(trackId);
  } else {
    likedTracks.splice(indexInLiked, 1);
  }

  // Persist to local storage
  localStorage.setItem('likedTracks', JSON.stringify(likedTracks));

  // Refresh views
  updateLikedViews();
  renderHomeSongs();
  renderLikedSongs();

  // If search table is open, refresh that too
  if (globalSearchInput.value.trim() !== '') {
    performInstantSearch();
  }

  // Update player heart icon
  const currentTrack = trackList[currentTrackIndex];
  if (currentTrack.id === trackId) {
    const isLiked = likedTracks.includes(trackId);
    
    if (isLiked) {
      playerLikeButton.classList.add('liked');
      playerLikeButton.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    } else {
      playerLikeButton.classList.remove('liked');
      playerLikeButton.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    }
    
    const mobLikeBtn = document.getElementById('mob-player-like-btn');
    if (mobLikeBtn) {
      if (isLiked) {
        mobLikeBtn.classList.add('liked');
        mobLikeBtn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
      } else {
        mobLikeBtn.classList.remove('liked');
        mobLikeBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
      }
    }
  }
}

// Update counters for Liked Songs in Library Sidebar
function updateLikedViews() {
  libraryLikedCount.textContent = likedTracks.length;
  likedTrackCount.textContent = likedTracks.length;
}

// Render the liked tracks table inside Liked Songs View
function renderLikedSongs() {
  likedTrackTableBody.innerHTML = '';
  updateLikedViews();

  if (likedTracks.length === 0) {
    likedEmptyState.classList.remove('hide');
    likedTrackTable.classList.add('hide');
    return;
  }

  likedEmptyState.classList.add('hide');
  likedTrackTable.classList.remove('hide');

  let tableIndex = 1;
  trackList.forEach((track, index) => {
    if (likedTracks.includes(track.id)) {
      const isCurrentlyActive = currentTrackIndex === index;
      const tr = document.createElement('tr');
      tr.id = `liked-track-row-${index}`;
      if (isCurrentlyActive) tr.className = 'active-track';
      
      tr.innerHTML = `
        <td class="track-num-col">
          <span class="track-index">${tableIndex++}</span>
          <i class="fa-solid fa-play play-icon" data-index="${index}"></i>
          <div class="playing-eq">
            <div class="eq-bar"></div>
            <div class="eq-bar"></div>
            <div class="eq-bar"></div>
          </div>
        </td>
        <td>
          <div class="track-title-col">
            <img class="track-img" src="${track.cover}" alt="${track.title}">
            <div class="track-details">
              <span class="track-title">${track.title}</span>
              <span class="track-artist">${track.artist}</span>
            </div>
          </div>
        </td>
        <td class="track-album-col">${track.album}</td>
        <td class="track-actions-col">
          <button class="track-like-btn liked" data-id="${track.id}">
            <i class="fa-solid fa-heart"></i>
          </button>
          <span class="track-duration">${track.duration}</span>
        </td>
      `;

      tr.addEventListener('dblclick', () => playTrack(index));
      tr.querySelector('.play-icon').addEventListener('click', () => playTrack(index));
      tr.querySelector('.track-like-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLikeTrack(track.id);
      });

      likedTrackTableBody.appendChild(tr);
    }
  });

  // Sync EQ animation
  toggleEqBars(isPlaying);
}

// Perform instant dynamic search queries
function performInstantSearch() {
  const query = globalSearchInput.value.toLowerCase().trim();
  searchTrackTableBody.innerHTML = '';

  if (query === '') {
    searchResultsContainer.classList.add('hide');
    searchCategories.classList.remove('hide');
    return;
  }

  searchResultsContainer.classList.remove('hide');
  searchCategories.classList.add('hide');

  const filtered = trackList.filter(track => 
    track.title.toLowerCase().includes(query) ||
    track.artist.toLowerCase().includes(query) ||
    track.album.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    searchTrackTableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; color: var(--text-muted); padding: 40px 0;">
          No results found for "${globalSearchInput.value}"
        </td>
      </tr>
    `;
    return;
  }

  filtered.forEach((track, tableIndex) => {
    // Find index in original database list
    const originalIndex = trackList.findIndex(t => t.id === track.id);
    const isLiked = likedTracks.includes(track.id);
    const isCurrentlyActive = currentTrackIndex === originalIndex;

    const tr = document.createElement('tr');
    tr.id = `search-track-row-${originalIndex}`;
    if (isCurrentlyActive) tr.className = 'active-track';

    tr.innerHTML = `
      <td class="track-num-col">
        <span class="track-index">${tableIndex + 1}</span>
        <i class="fa-solid fa-play play-icon"></i>
        <div class="playing-eq">
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
        </div>
      </td>
      <td>
        <div class="track-title-col">
          <img class="track-img" src="${track.cover}" alt="${track.title}">
          <div class="track-details">
            <span class="track-title">${track.title}</span>
            <span class="track-artist">${track.artist}</span>
          </div>
        </div>
      </td>
      <td class="track-album-col">${track.album}</td>
      <td class="track-actions-col">
        <button class="track-like-btn ${isLiked ? 'liked' : ''}">
          <i class="fa-solid fa-heart"></i>
        </button>
        <span class="track-duration">${track.duration}</span>
      </td>
    `;

    tr.addEventListener('dblclick', () => playTrack(originalIndex));
    tr.querySelector('.play-icon').addEventListener('click', () => playTrack(originalIndex));
    tr.querySelector('.track-like-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLikeTrack(track.id);
    });

    searchTrackTableBody.appendChild(tr);
  });

  // Sync EQ animation
  toggleEqBars(isPlaying);
}

// Toggle display of the Lyrics sidebar
function toggleLyricsPanel() {
  lyricsPanel.classList.toggle('open');
  btnLyricsToggle.classList.toggle('active', lyricsPanel.classList.contains('open'));
}

// Render dynamic lyrics text lines in lyrics panel
function renderLyrics(lyricsArray) {
  lyricsLinesContainer.innerHTML = '';
  
  if (!lyricsArray || lyricsArray.length === 0) {
    lyricsLinesContainer.innerHTML = '<p style="text-align: center; color: var(--text-subdued); padding: 40px 0;">Lyrics not available for this track.</p>';
    return;
  }

  lyricsArray.forEach((line, index) => {
    const p = document.createElement('p');
    p.className = 'lyrics-line';
    p.id = `lyric-line-${index}`;
    p.textContent = line.text;
    p.setAttribute('data-time', line.time);

    // Interactive lyric clicks (seek song on click!)
    p.addEventListener('click', () => {
      audio.currentTime = line.time;
      if (!isPlaying) togglePlayPause();
    });

    lyricsLinesContainer.appendChild(p);
  });
}

// Sync lyrics text colors to current song duration
function highlightLyricsLine(currentTime) {
  const lyrics = trackList[currentTrackIndex].lyrics;
  if (!lyrics || lyrics.length === 0) return;

  let activeIndex = -1;

  for (let i = 0; i < lyrics.length; i++) {
    if (currentTime >= lyrics[i].time) {
      activeIndex = i;
    } else {
      break;
    }
  }

  // Remove previous highlights
  document.querySelectorAll('.lyrics-line').forEach(line => {
    line.classList.remove('active');
  });

  // Highlight active line and scroll into view smoothly
  if (activeIndex !== -1) {
    const activeElement = document.getElementById(`lyric-line-${activeIndex}`);
    if (activeElement) {
      activeElement.classList.add('active');
      
      // Keep active line centered inside lyrics panel container
      const containerHeight = lyricsLinesContainer.clientHeight;
      const elementTop = activeElement.offsetTop;
      const elementHeight = activeElement.clientHeight;
      
      lyricsLinesContainer.scrollTo({
        top: elementTop - (containerHeight / 2) + (elementHeight / 2),
        behavior: 'smooth'
      });
    }
  }
}

// ================= AUTHENTICATION & MOBILE TAB SERVICES =================
function checkAuthentication() {
  const username = localStorage.getItem('spotify_session_username');
  const loginModal = document.getElementById('login-modal');
  const userDisplayName = document.getElementById('user-display-name');
  
  if (username) {
    if (loginModal) loginModal.classList.add('hide-login');
    if (userDisplayName) userDisplayName.textContent = username;
  } else {
    if (loginModal) loginModal.classList.remove('hide-login');
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const usernameInput = document.getElementById('login-username');
  const username = usernameInput.value.trim();
  
  if (username) {
    localStorage.setItem('spotify_session_username', username);
    checkAuthentication();
  }
}

function handleLogout() {
  localStorage.removeItem('spotify_session_username');
  window.location.reload();
}

function switchMobileTab(tabId, viewId) {
  // Toggle nav bar active classes
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.classList.remove('active');
  });
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) selectedTab.classList.add('active');

  // Trigger base panel navigation switch
  switchView(viewId);
}

// Run app init on DOM load
window.addEventListener('DOMContentLoaded', initApp);
