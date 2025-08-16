const keys = ['7','8','9','/','sqrt','4','5','6','*','^','1','2','3','-','(', '0','.','=','+',')','sin','cos','tan','log','ln'];
const keysDiv = document.getElementById('keys');
const display = document.getElementById('display');
keys.forEach(k=>{
  const b = document.createElement('button'); b.className='key'; b.innerText=k;
  if(['/','*','-','+','=','^'].includes(k)) b.classList.add('op');
  b.onclick = ()=> handleKey(k); keysDiv.appendChild(b);
});
function handleKey(k){
  if(k==='='){ try{ display.value = evalTransform(display.value); }catch(e){ alert('Error'); } return; }
  if(k==='sqrt'){ display.value += 'Math.sqrt('; return; }
  if(['sin','cos','tan','log','ln'].includes(k)){ display.value += `Math.${k}(`; return; }
  if(k==='^'){ display.value += '**'; return; }
  display.value += k;
}
function evalTransform(expr){
  // basic safe eval transform
  return Function('"use strict";return ('+expr+')')();
}
