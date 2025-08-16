function generate(){
  const len = parseInt(document.getElementById('length').value) || 12;
  const upper = document.getElementById('upper').checked;
  const nums = document.getElementById('numbers').checked;
  const syms = document.getElementById('symbols').checked;
  let chars = 'abcdefghijklmnopqrstuvwxyz';
  if(upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if(nums) chars += '0123456789';
  if(syms) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  let pwd='';
  for(let i=0;i<len;i++) pwd += chars[Math.floor(Math.random()*chars.length)];
  document.getElementById('result').innerText = pwd;
}
