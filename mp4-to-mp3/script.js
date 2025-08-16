async function extractAudio(){
  const f = document.getElementById('video').files[0];
  const r = document.getElementById('result'); r.innerHTML='';
  if(!f){ alert('Select video'); return; }
  // Browser JS cannot reliably transcode video->mp3 without ffmpeg.wasm or server. We show placeholder.
  const note = document.createElement('div'); note.innerText = 'Client-side MP4→MP3 conversion requires ffmpeg.wasm (heavy) or server ffmpeg. This UI is ready for integration.';
  r.appendChild(note);
}
