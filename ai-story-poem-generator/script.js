function generate(){
  const topic = document.getElementById('topic').value.trim() || 'a mysterious place';
  const type = document.getElementById('type').value;
  const r = document.getElementById('result');
  if(type === 'Short Story'){
    r.innerText = `Once upon a time, in ${topic}, there lived a curious soul who discovered something that changed everything. The adventure unfolded... (placeholder)`;
  } else if(type === 'Poem'){
    r.innerText = `In ${topic} I found a light,\nSoft and glowing through the night.\nIt whispered secrets, old and new,\nAnd painted skies a gentler hue.`;
  } else {
    r.innerText = `Silent moon above,\n${topic} cradles my heartbeat,\nWhispers of spring dawn.`;
  }
  r.innerHTML += '\n\nNote: For AI-powered, integrate backend model.';
}
