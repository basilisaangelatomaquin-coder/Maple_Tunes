/* BUTTON TO FIRST PART
function goBack() {
  if (window.history.length > 1 && document.referrer !== "") {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
}
*/

(() => {
  'use strict';

  /* =====================================================
     1. SONGS
     Keep the mp3 files in the same folder as this page.
     Type each song's artist name in the artist field
     below (leave '' to show "Unknown artist").
     ===================================================== */
  const SONGS = [
  { id: 'closer', file: 'GEHLEE - Closer (Lyrics).mp3', title: 'Closer', artist: 'Ghelee', emoji: '🦊', dur: 162 },
  { id: 'why', file: 'Why-Tiggy Lyrics.mp3', title: 'Why', artist: 'Tiggy', emoji: '🍁', dur: 226 },
  { id: 'lucy', file: 'lucy_.mp3', title: 'lucy', artist: 'Cordon Amodio', emoji: '☕', dur: 118 },
  { id: 'love-is', file: 'The Ridleys - Love Is (Lyric Video).mp3', title: 'Love Is', artist: 'The Ridleys', emoji: '🎃', dur: 232 },
  { id: 'la-da-dee', file: 'Cody Simpson - La Da Dee (Lyrics).mp3', title: 'La Da Dee', artist: 'Cody Simpson', emoji: '🍄', dur: 197 },
  { id: 'gold', file: 'Owl City - Gold [Lyrics].mp3', title: 'Gold', artist: 'Owl City', emoji: '🌅', dur: 236 },
  { id: 'beauty-and-a-beat', file: 'Leaves.mp3', title: 'Leaves', artist: 'Ben & Ben', emoji: '🕯️', dur:311 },
  { id: 'blue', file: 'blue (with MINNIE).mp3', title: 'blue (with MINNIE)', artist: 'Yung Kai (with MINNIE)', emoji: '🌙', dur: 213 },
  { id: 'are-you-bored-yet', file: 'Wallows - Are You Bored Yet (feat. Clairo).mp3', title: 'Are You Bored Yet? (feat. Clairo)', artist: 'Wallows', emoji: '🌰', dur: 178 },
  { id: 'aphrodite', file: 'Aphrodite - The Ridleys (Lyrics).mp3', title: 'Aphrodite', artist: 'The Ridleys', emoji: '🍂', dur: 237 }
];

  /* =====================================================
     2. Helpers
     ===================================================== */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = (s) => { s = Math.max(0, Math.round(s || 0)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
  const fmtLong = (s) => {
    const m = Math.max(1, Math.round(s / 60));
    return m >= 60 ? Math.floor(m / 60) + ' hr ' + (m % 60) + ' min' : m + ' min';
  };
  const plural = (n, word) => n + ' ' + word + (n === 1 ? '' : 's');

  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ }
    }
  };

  const ICONS = {
    play:    ['fill',   '<path d="M8 5v14l11-7z"/>'],
    pause:   ['fill',   '<path d="M6 5h4v14H6zM14 5h4v14h-4z"/>'],
    prev:    ['fill',   '<path d="M6 6h2v12H6zM9.5 12 18 6v12z"/>'],
    next:    ['fill',   '<path d="M16 6h2v12h-2zM6 18V6l8.5 6z"/>'],
    shuffle: ['stroke', '<path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="m15 15 6 6"/><path d="m4 4 5 5"/>'],
    repeat:  ['stroke', '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>'],
    volume:  ['stroke', '<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a9 9 0 0 1 0 14"/>'],
    muted:   ['stroke', '<path d="M11 5 6 9H2v6h4l5 4z"/><path d="m22 9-6 6"/><path d="m16 9 6 6"/>'],
    edit:    ['stroke', '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>'],
    up:      ['stroke', '<path d="m6 15 6-6 6 6"/>'],
    down:    ['stroke', '<path d="m6 9 6 6 6-6"/>'],
    remove:  ['stroke', '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'],
    plus:    ['stroke', '<path d="M12 5v14"/><path d="M5 12h14"/>'],
    trash:   ['stroke', '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="m6 6 1 14h10l1-14"/>']
  };
  const icon = (name) => `<svg class="ic ${ICONS[name][0]}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name][1]}</svg>`;

  /* =====================================================
     3. State
     ===================================================== */
  const byId = Object.fromEntries(SONGS.map((s) => [s.id, s]));

  let playlists = store.get('maple_playlists', []);    // [{ id, name, songIds: [] }]
  const savePlaylists = () => store.set('maple_playlists', playlists);

  const state = {
    view: 'library',      // 'library' | 'playlist'
    listId: null,
    selected: new Set(),  // insertion order = playlist order
    query: '',
    addTo: '',
    shuffle: false,
    repeat: 'off',        // 'off' | 'all' | 'one'
    currentId: null,
    baseQ: [],            // queue in original order
    q: [],                // queue in play order
    qi: -1
  };

  const artistOf = (s) => s.artist || '';
  const listById = (id) => playlists.find((p) => p.id === id);
  const currentList = () => listById(state.listId);
  const totalSeconds = (ids) => ids.reduce((sum, id) => sum + (byId[id] ? byId[id].dur : 0), 0);

  /* =====================================================
     4. Audio
     ===================================================== */
  const audio = new Audio();
  audio.preload = 'metadata';
  audio.volume = store.get('maple_volume', 0.8);

  let seeking = false;

  const el = {
    main: $('#main'),
    nav: $('#playlistNav'),
    navLibrary: $('#navLibrary'),
    navCount: $('#navCount'),
    npCover: $('#npCover'),
    npTitle: $('#npTitle'),
    npArtist: $('#npArtist'),
    btnShuffle: $('#btnShuffle'),
    btnPrev: $('#btnPrev'),
    btnPlay: $('#btnPlay'),
    btnNext: $('#btnNext'),
    btnRepeat: $('#btnRepeat'),
    seek: $('#seek'),
    tCur: $('#tCur'),
    tDur: $('#tDur'),
    btnMute: $('#btnMute'),
    vol: $('#vol'),
    dlg: $('#dlg'),
    toast: $('#toast')
  };

  const setPct = (input) => input.style.setProperty('--pct', (input.value / input.max * 100) + '%');

  function shuffled(ids, firstId) {
    const rest = ids.filter((id) => id !== firstId);
    for (let i = rest.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rest[i], rest[j]] = [rest[j], rest[i]];
    }
    return firstId ? [firstId, ...rest] : rest;
  }

  function startQueue(ids, startId) {
    if (!ids.length) return;
    state.baseQ = [...ids];
    state.q = state.shuffle ? shuffled(ids, startId) : [...ids];
    state.qi = state.q.indexOf(startId);
    loadAndPlay(startId);
  }

  function loadAndPlay(id) {
    const song = byId[id];
    if (!song) return;
    state.currentId = id;
    audio.src = encodeURI(song.file);
    audio.play().catch(onPlayError);
    updatePlayerUI();
    updateMediaSession();
    markRows();
  }

  function onPlayError(err) {
    if (err && err.name === 'AbortError') return;       // a newer load replaced this one
    if (err && err.name === 'NotAllowedError') return;  // browser wants a tap first
    toast('Couldn’t play that song. Keep the mp3s in the same folder as this page.');
  }

  function togglePlay() {
    if (!state.currentId) {
      const ids = state.view === 'playlist' && currentList() && currentList().songIds.length
        ? currentList().songIds
        : SONGS.map((s) => s.id);
      startQueue(ids, ids[0]);
      return;
    }
    if (audio.paused) audio.play().catch(onPlayError);
    else audio.pause();
  }

  function next(auto = false) {
    if (state.qi < 0) return;
    if (auto && state.repeat === 'one') {
      audio.currentTime = 0;
      audio.play().catch(onPlayError);
      return;
    }
    if (state.qi < state.q.length - 1) {
      state.qi++;
    } else if (state.repeat === 'all') {
      state.qi = 0;
    } else {
      if (auto) { audio.pause(); audio.currentTime = 0; }
      else toast('That’s the end of the queue.');
      return;
    }
    loadAndPlay(state.q[state.qi]);
  }

  function prev() {
    if (state.qi < 0) return;
    if (audio.currentTime > 3 || state.qi === 0) {
      audio.currentTime = 0;
      return;
    }
    state.qi--;
    loadAndPlay(state.q[state.qi]);
  }

  function toggleShuffle() {
    state.shuffle = !state.shuffle;
    if (state.currentId) {
      state.q = state.shuffle ? shuffled(state.baseQ, state.currentId) : [...state.baseQ];
      state.qi = state.q.indexOf(state.currentId);
    }
    updatePlayerUI();
  }

  function cycleRepeat() {
    state.repeat = state.repeat === 'off' ? 'all' : state.repeat === 'all' ? 'one' : 'off';
    updatePlayerUI();
  }

  /* ---------- Player UI ---------- */

  function coverHTML(emoji) {
    return `<div class="cover is-emoji"><span>${emoji || '🎵'}</span></div>`;
  }

  function updatePlayerUI() {
    const song = byId[state.currentId];

    if (song) {
      const a = artistOf(song);
      el.npCover.className = 'cover np-cover is-emoji';
      el.npCover.innerHTML = `<span>${song.emoji || '🎵'}</span>`;
      el.npTitle.textContent = song.title;
      el.npArtist.textContent = a || 'Unknown artist';
    } else {
      el.npCover.className = 'cover np-cover';
      el.npCover.innerHTML = '';
      el.npTitle.textContent = 'Nothing playing';
      el.npArtist.textContent = 'Pick a song to start';
    }

    const playing = !audio.paused && !!state.currentId;
    el.btnPlay.innerHTML = icon(playing ? 'pause' : 'play');
    el.btnPlay.setAttribute('aria-label', playing ? 'Pause' : 'Play');

    el.btnShuffle.setAttribute('aria-pressed', String(state.shuffle));
    el.btnShuffle.setAttribute('aria-label', state.shuffle ? 'Shuffle on' : 'Shuffle off');

    el.btnRepeat.setAttribute('aria-pressed', String(state.repeat !== 'off'));
    el.btnRepeat.dataset.mode = state.repeat;
    el.btnRepeat.setAttribute('aria-label', 'Repeat ' + state.repeat);

    el.btnMute.innerHTML = icon(audio.muted || audio.volume === 0 ? 'muted' : 'volume');
    el.btnMute.setAttribute('aria-label', audio.muted ? 'Unmute' : 'Mute');

    updateProgress();
  }

  function updateProgress() {
    const song = byId[state.currentId];
    const d = isFinite(audio.duration) && audio.duration > 0 ? audio.duration : (song ? song.dur : 0);
    const t = audio.currentTime || 0;
    if (!seeking) {
      el.seek.value = d ? Math.round((t / d) * 1000) : 0;
      setPct(el.seek);
      el.tCur.textContent = fmt(t);
    }
    el.tDur.textContent = fmt(d);
  }

  function updateMediaSession() {
    if (!('mediaSession' in navigator) || !window.MediaMetadata) return;
    const song = byId[state.currentId];
    if (!song) return;
    navigator.mediaSession.metadata = new MediaMetadata({ title: song.title, artist: artistOf(song) || 'Maple' });
  }

  if ('mediaSession' in navigator) {
    const set = (action, fn) => { try { navigator.mediaSession.setActionHandler(action, fn); } catch { /* unsupported */ } };
    set('play', () => audio.play().catch(onPlayError));
    set('pause', () => audio.pause());
    set('previoustrack', prev);
    set('nexttrack', () => next(false));
  }

  /* ---------- Player events ---------- */

  audio.addEventListener('play', () => { updatePlayerUI(); markRows(); });
  audio.addEventListener('pause', () => { updatePlayerUI(); markRows(); });
  audio.addEventListener('ended', () => next(true));
  audio.addEventListener('timeupdate', updateProgress);
  audio.addEventListener('loadedmetadata', updateProgress);
  audio.addEventListener('error', () => {
    if (state.currentId) toast('Couldn’t load that song. Keep the mp3s in the same folder as this page.');
  });

  el.btnPlay.addEventListener('click', togglePlay);
  el.btnNext.addEventListener('click', () => next(false));
  el.btnPrev.addEventListener('click', prev);
  el.btnShuffle.addEventListener('click', toggleShuffle);
  el.btnRepeat.addEventListener('click', cycleRepeat);

  el.seek.addEventListener('input', () => {
    seeking = true;
    setPct(el.seek);
    const d = isFinite(audio.duration) ? audio.duration : (byId[state.currentId] || { dur: 0 }).dur;
    el.tCur.textContent = fmt((el.seek.value / 1000) * d);
  });
  el.seek.addEventListener('change', () => {
    if (isFinite(audio.duration) && state.currentId) audio.currentTime = (el.seek.value / 1000) * audio.duration;
    seeking = false;
    updateProgress();
  });

  el.vol.value = Math.round(audio.volume * 100);
  setPct(el.vol);
  el.vol.addEventListener('input', () => {
    audio.volume = el.vol.value / 100;
    audio.muted = false;
    setPct(el.vol);
    store.set('maple_volume', audio.volume);
    updatePlayerUI();
  });
  el.btnMute.addEventListener('click', () => {
    audio.muted = !audio.muted;
    updatePlayerUI();
  });

  document.addEventListener('keydown', (e) => {
    if (e.code !== 'Space' || e.target.closest('input, select, textarea, button, label, dialog')) return;
    e.preventDefault();
    togglePlay();
  });

  /* =====================================================
     5. Dialog + toast
     ===================================================== */
  function ask({ title, message = '', label = '', value = '', confirm = 'Save', input = true, danger = false }) {
    return new Promise((resolve) => {
      $('#dlgTitle').textContent = title;
      $('#dlgMsg').textContent = message;
      $('#dlgLabel').textContent = label;
      $('#dlgField').hidden = !input;
      $('#dlgInput').value = value;
      const ok = $('#dlgOk');
      ok.textContent = confirm;
      ok.classList.toggle('danger-fill', danger);
      el.dlg.returnValue = '';
      el.dlg.addEventListener('close', () => {
        if (el.dlg.returnValue !== 'ok') return resolve(null);
        resolve(input ? $('#dlgInput').value.trim() : true);
      }, { once: true });
      el.dlg.showModal();
      if (input) { $('#dlgInput').focus(); $('#dlgInput').select(); }
    });
  }

  let toastTimer;
  function toast(message) {
    el.toast.textContent = message;
    el.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.remove('show'), 2800);
  }

  /* =====================================================
     6. Rendering
     ===================================================== */
  function renderNav() {
    const inLibrary = state.view === 'library';
    el.navLibrary.classList.toggle('active', inLibrary);
    el.navLibrary.setAttribute('aria-current', inLibrary ? 'page' : 'false');
    el.navCount.textContent = SONGS.length;

    if (!playlists.length) {
      el.nav.innerHTML = '<li class="nav-empty">No playlists yet. Select songs to start one.</li>';
      return;
    }
    el.nav.innerHTML = playlists.map((p) => {
      const active = state.view === 'playlist' && state.listId === p.id;
      return `<li><button class="nav-item${active ? ' active' : ''}" data-act="open-list" data-list="${p.id}"${active ? ' aria-current="page"' : ''}>
        <span class="nav-name">${esc(p.name)}</span><span class="nav-count">${p.songIds.length}</span>
      </button></li>`;
    }).join('');
  }

  function showLibrary() {
    state.view = 'library';
    state.listId = null;
    el.main.innerHTML = `
      <header class="page-head">
        <h1>Available soundtracks</h1>
        <p class="page-sub">Pick the songs you want, name your playlist, and create it.</p>
      </header>

      <div class="toolbar">
        <input class="search" id="search" type="search" placeholder="Search songs or artists" aria-label="Search songs or artists" value="${esc(state.query)}">
        <label class="select-all">
          <span class="check"><input type="checkbox" id="selectAll" data-act="select-all" aria-label="Select all shown songs"><span class="box" aria-hidden="true"></span></span>
          Select all
        </label>
      </div>

      <div class="builder" id="builder" hidden>
        <span class="sel-info"><span id="selCount"></span> <small id="selTime"></small></span>
        <input type="text" id="plName" maxlength="60" placeholder="Name your playlist" aria-label="Playlist name">
        <button class="btn primary" data-act="create">${icon('plus')} Create playlist</button>
        <span class="or" id="orText">or</span>
        <select id="addTo" aria-label="Add selected songs to an existing playlist"></select>
        <button class="btn" data-act="add-existing" id="addBtn">Add</button>
        <button class="btn ghost push" data-act="clear">Clear</button>
      </div>

      <div class="list" id="songList"></div>`;
    renderNav();
    renderList();
    syncSelection();
  }

  function showPlaylist(id) {
    const p = listById(id);
    if (!p) return showLibrary();
    state.view = 'playlist';
    state.listId = id;
    const secs = totalSeconds(p.songIds);
    const empty = !p.songIds.length;
    el.main.innerHTML = `
      <header class="page-head">
        <h1>${esc(p.name)}</h1>
        <p class="page-sub">${plural(p.songIds.length, 'song')}${empty ? '' : ' · ' + fmtLong(secs)}</p>
        <div class="head-actions">
          <button class="btn primary" data-act="play-list"${empty ? ' disabled' : ''}>${icon('play')} Play</button>
          <button class="btn" data-act="shuffle-list"${empty ? ' disabled' : ''}>${icon('shuffle')} Shuffle</button>
          <button class="btn" data-act="add-songs">${icon('plus')} Add songs</button>
          <button class="btn" data-act="rename-list">${icon('edit')} Rename</button>
          <button class="btn danger" data-act="delete-list">${icon('trash')} Delete</button>
        </div>
      </header>
      <div class="list" id="songList"></div>`;
    renderNav();
    renderList();
  }

  function rowHTML(s, i, n, mode) {
    const a = artistOf(s);
    const t = esc(s.title);
    const selected = state.selected.has(s.id);
    const lib = mode === 'library';

    const check = lib
      ? `<span class="check"><input type="checkbox" id="chk-${s.id}" data-act="select" ${selected ? 'checked' : ''} aria-label="Select ${t}"><span class="box" aria-hidden="true"></span></span>`
      : '';
    const metaTag = lib ? 'label' : 'div';
    const metaAttr = lib ? ` for="chk-${s.id}"` : '';
    const actions = lib ? '' : `
      <div class="row-actions">
        <button class="icon-btn" data-act="up" ${i === 0 ? 'disabled' : ''} aria-label="Move ${t} up">${icon('up')}</button>
        <button class="icon-btn" data-act="down" ${i === n - 1 ? 'disabled' : ''} aria-label="Move ${t} down">${icon('down')}</button>
        <button class="icon-btn" data-act="remove" aria-label="Remove ${t} from playlist">${icon('remove')}</button>
      </div>`;

    return `
      <div class="row${selected ? ' is-selected' : ''}" data-id="${s.id}">
        ${check}
        <button class="cover-btn" data-act="play" aria-label="Play ${t}">
          ${coverHTML(s.emoji)}
          <span class="cover-state">${icon('play')}<span class="eq" aria-hidden="true"><i></i><i></i><i></i></span></span>
        </button>
        <${metaTag} class="meta"${metaAttr}>
          <div class="title">${t}</div>
          <div class="artist${a ? '' : ' is-unknown'}">${esc(a || 'Unknown artist')}</div>
        </${metaTag}>
        <span class="dur">${fmt(s.dur)}</span>
        ${actions}
      </div>`;
  }

  function visibleSongs() {
    if (state.view === 'playlist') {
      const p = currentList();
      return p ? p.songIds.map((id) => byId[id]).filter(Boolean) : [];
    }
    const q = state.query.trim().toLowerCase();
    return SONGS.filter((s) => !q || (s.title + ' ' + artistOf(s)).toLowerCase().includes(q));
  }

  function renderList() {
    const host = $('#songList');
    if (!host) return;
    const songs = visibleSongs();

    if (!songs.length) {
      host.innerHTML = state.view === 'playlist'
        ? '<div class="empty"><strong>This playlist is empty</strong>Choose “Add songs” to pick some from All songs.</div>'
        : `<div class="empty"><strong>No songs match “${esc(state.query)}”</strong>Try a different title or artist.</div>`;
      return;
    }
    host.innerHTML = songs.map((s, i) => rowHTML(s, i, songs.length, state.view)).join('');
    markRows();
    if (state.view === 'library') syncSelection();
  }

  function markRows() {
    $$('.row').forEach((row) => {
      const current = row.dataset.id === state.currentId;
      const playing = current && !audio.paused;
      row.classList.toggle('is-current', current);
      row.classList.toggle('is-playing', playing);
      const song = byId[row.dataset.id];
      const btn = $('.cover-btn', row);
      if (btn && song) btn.setAttribute('aria-label', (playing ? 'Pause ' : 'Play ') + song.title);
    });
  }

  /* Selection bar: count, time, playlist dropdown, select-all state */
  function syncSelection() {
    const builder = $('#builder');
    if (!builder) return;
    const n = state.selected.size;
    builder.hidden = n === 0;
    $('#selCount').textContent = plural(n, 'song') + ' selected';
    $('#selTime').textContent = n ? '· ' + fmtLong(totalSeconds([...state.selected])) : '';

    const sel = $('#addTo');
    sel.innerHTML = '<option value="">Add to existing…</option>' +
      playlists.map((p) => `<option value="${p.id}">${esc(p.name)}</option>`).join('');
    sel.value = listById(state.addTo) ? state.addTo : '';
    const hasLists = playlists.length > 0;
    sel.hidden = !hasLists;
    $('#addBtn').hidden = !hasLists;
    $('#orText').hidden = !hasLists;

    const shown = visibleSongs();
    const selectedShown = shown.filter((s) => state.selected.has(s.id)).length;
    const all = $('#selectAll');
    all.checked = shown.length > 0 && selectedShown === shown.length;
    all.indeterminate = selectedShown > 0 && selectedShown < shown.length;
  }

  /* =====================================================
     7. Actions
     ===================================================== */
  function createPlaylist(name, ids) {
    const p = {
      id: 'pl' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
      name: name || 'Playlist ' + (playlists.length + 1),
      songIds: [...ids]
    };
    playlists.push(p);
    savePlaylists();
    return p;
  }

  async function handleAction(act, target) {
    const row = target.closest('[data-id]');
    const id = row ? row.dataset.id : null;

    switch (act) {
      case 'go-library':
        showLibrary();
        break;

      case 'open-list':
        showPlaylist(target.dataset.list);
        break;

      case 'new-list': {
        const name = await ask({ title: 'New playlist', label: 'Playlist name', value: 'Playlist ' + (playlists.length + 1), confirm: 'Create' });
        if (name === null) break;
        const p = createPlaylist(name, []);
        showPlaylist(p.id);
        toast('Playlist created. Add songs from Available Soundtracks.');
        break;
      }

      case 'play': {
        if (state.currentId === id) { togglePlay(); break; }
        const ids = visibleSongs().map((s) => s.id);
        startQueue(ids, id);
        break;
      }

      case 'play-list':
      case 'shuffle-list': {
        const p = currentList();
        if (!p || !p.songIds.length) break;
        const wantShuffle = act === 'shuffle-list';
        if (state.shuffle !== wantShuffle) { state.shuffle = wantShuffle; }
        const first = wantShuffle ? p.songIds[Math.floor(Math.random() * p.songIds.length)] : p.songIds[0];
        startQueue(p.songIds, first);
        break;
      }

      case 'create': {
        if (!state.selected.size) { toast('Select at least one song first.'); break; }
        const input = $('#plName');
        const p = createPlaylist(input.value.trim(), [...state.selected]);
        state.selected.clear();
        state.addTo = '';
        showPlaylist(p.id);
        toast('Created “' + p.name + '” with ' + plural(p.songIds.length, 'song') + '.');
        break;
      }

      case 'add-existing': {
        const listId = $('#addTo').value;
        const p = listById(listId);
        if (!p) { toast('Choose a playlist first.'); break; }
        const fresh = [...state.selected].filter((sid) => !p.songIds.includes(sid));
        const skipped = state.selected.size - fresh.length;
        p.songIds.push(...fresh);
        savePlaylists();
        state.selected.clear();
        state.addTo = p.id;
        renderNav();
        renderList();
        syncSelection();
        toast(fresh.length
          ? 'Added ' + plural(fresh.length, 'song') + ' to “' + p.name + '”' + (skipped ? ' (' + skipped + ' already there).' : '.')
          : 'Those songs are already in “' + p.name + '”.');
        break;
      }

      case 'clear':
        state.selected.clear();
        renderList();
        syncSelection();
        break;

      case 'add-songs': {
        const p = currentList();
        state.addTo = p ? p.id : '';
        showLibrary();
        toast('Pick songs, then press Add.');
        break;
      }

      case 'rename-list': {
        const p = currentList();
        const name = await ask({ title: 'Rename playlist', label: 'Playlist name', value: p.name });
        if (!name) break;
        p.name = name;
        savePlaylists();
        showPlaylist(p.id);
        break;
      }

      case 'delete-list': {
        const p = currentList();
        const ok = await ask({ title: 'Delete playlist?', message: '“' + p.name + '” will be removed. Your songs stay in All songs.', input: false, confirm: 'Delete', danger: true });
        if (!ok) break;
        playlists = playlists.filter((x) => x.id !== p.id);
        savePlaylists();
        showLibrary();
        toast('Playlist deleted.');
        break;
      }

      case 'up':
      case 'down': {
        const p = currentList();
        const i = p.songIds.indexOf(id);
        const j = act === 'up' ? i - 1 : i + 1;
        if (i < 0 || j < 0 || j >= p.songIds.length) break;
        [p.songIds[i], p.songIds[j]] = [p.songIds[j], p.songIds[i]];
        savePlaylists();
        renderList();
        const again = $(`.row[data-id="${id}"] [data-act="${act}"]`);
        const fallback = $(`.row[data-id="${id}"] [data-act="${act === 'up' ? 'down' : 'up'}"]`);
        (again && !again.disabled ? again : fallback).focus();
        break;
      }

      case 'remove': {
        const p = currentList();
        p.songIds = p.songIds.filter((sid) => sid !== id);
        savePlaylists();
        showPlaylist(p.id);
        toast('Removed “' + byId[id].title + '”.');
        break;
      }
    }
  }

  /* =====================================================
     8. Wiring
     ===================================================== */
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-act]');
    if (!target || target.type === 'checkbox') return;
    handleAction(target.dataset.act, target);
  });

  document.addEventListener('change', (e) => {
    const t = e.target;
    if (t.id === 'addTo') { state.addTo = t.value; return; }

    if (t.dataset && t.dataset.act === 'select') {
      const id = t.closest('[data-id]').dataset.id;
      if (t.checked) state.selected.add(id); else state.selected.delete(id);
      t.closest('.row').classList.toggle('is-selected', t.checked);
      syncSelection();
    }

    if (t.dataset && t.dataset.act === 'select-all') {
      visibleSongs().forEach((s) => (t.checked ? state.selected.add(s.id) : state.selected.delete(s.id)));
      renderList();
      syncSelection();
    }
  });

  document.addEventListener('input', (e) => {
    if (e.target.id === 'search') {
      state.query = e.target.value;
      renderList();
      syncSelection();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.id === 'plName') {
      e.preventDefault();
      handleAction('create', e.target);
    }
  });


  /* ---------- Start ---------- */
  $$('[data-icon]').forEach((node) => { node.innerHTML = icon(node.dataset.icon); });
  updatePlayerUI();
  showLibrary();
})();
