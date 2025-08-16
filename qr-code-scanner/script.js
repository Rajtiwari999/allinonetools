let video = document.getElementById('video'), stream;
async function startScanner(){
  const r=document.getElementById('result'); r.innerText='Starting camera...';
  try{
    stream = await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}});
    video.srcObject = stream; video.play();
    scanFrame();
  }catch(e){ r.innerText='Camera unavailable: '+e; }
}
function scanFrame(){
  if(video.readyState !== video.HAVE_ENOUGH_DATA){ requestAnimationFrame(scanFrame); return; }
  const canvas = document.createElement('canvas'); canvas.width=video.videoWidth; canvas.height=video.videoHeight;
  const ctx = canvas.getContext('2d'); ctx.drawImage(video,0,0);
  const imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
  const code = jsQR(imageData.data, canvas.width, canvas.height);
  if(code){ document.getElementById('result').innerText = 'Scanned: ' + code.data; stream.getTracks().forEach(t=>t.stop()); video.srcObject=null; } else requestAnimationFrame(scanFrame);
}
