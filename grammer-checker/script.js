// Simple client-side grammar checks + auto-fix helpers
const input = document.getElementById('inputText');
const checkBtn = document.getElementById('checkBtn');
const fixBtn = document.getElementById('fixBtn');
const copyBtn = document.getElementById('copyBtn');
const summary = document.getElementById('summary');
const issuesList = document.getElementById('issues');

function clearResults(){
  issuesList.innerHTML = '';
}

// helper: find repeated words (e.g., "the the")
function findRepeatedWords(text){
  const re = /\b([A-Za-z]+)\s+\1\b/gi;
  let matches = [], m;
  while((m = re.exec(text)) !== null){
    matches.push({index: m.index, word: m[1], match: m[0]});
  }
  return matches;
}

// helper: find double spaces or tab usages
function findDoubleSpaces(text){
  const re = / {2,}|\t+/g;
  let matches = []; let m;
  while((m = re.exec(text)) !== null){
    matches.push({index: m.index, match: m[0]});
  }
  return matches;
}

// helper: sentences missing end punctuation (.,!?)
function findMissingPunctuation(text){
  // split into sentences by newline or dot-like separators, then check
  const parts = text.split(/\n+/).map(p=>p.trim()).filter(Boolean);
  let results=[];
  parts.forEach(par=>{
    // find sentences roughly
    const sents = par.split(/(?<=[.?!])\s+/);
    sents.forEach(s=>{
      const trimmed=s.trim();
      if(trimmed && !/[.?!]$/.test(trimmed) && trimmed.split(' ').length>3){
        results.push(trimmed.slice(0,80));
      }
    });
  });
  return results;
}

// helper: sentences not starting with capital letter
function findLowercaseStarts(text){
  // match sentence starts
  const re = /(?:^|[.?!]\s+)([a-z][^.!?]{0,60})/g;
  let matches=[]; let m;
  while((m = re.exec(text)) !== null){
    matches.push(m[1].trim());
  }
  return matches;
}

// Main check function
function runQuickCheck(){
  clearResults();
  const txt = input.value || "";
  if(!txt.trim()){
    summary.innerText = "No text provided.";
    return;
  }

  let totalIssues = 0;

  const repeats = findRepeatedWords(txt);
  if(repeats.length){
    repeats.forEach(r=>{
      const li = document.createElement('li');
      li.innerText = `Repeated word: "${r.word}" — near "...${txt.substr(Math.max(0,r.index-20),40)}..."`;
      issuesList.appendChild(li);
    });
    totalIssues += repeats.length;
  }

  const doubles = findDoubleSpaces(txt);
  if(doubles.length){
    doubles.forEach(d=>{
      const li = document.createElement('li');
      li.innerText = `Extra spaces/tabs detected near position ${d.index}.`;
      issuesList.appendChild(li);
    });
    totalIssues += doubles.length;
  }

  const missingPunct = findMissingPunctuation(txt);
  if(missingPunct.length){
    missingPunct.forEach(s=>{
      const li = document.createElement('li');
      li.innerText = `Possible missing end punctuation in sentence starting: "${s}..."`;
      issuesList.appendChild(li);
    });
    totalIssues += missingPunct.length;
  }

  const lowerStarts = findLowercaseStarts(txt);
  if(lowerStarts.length){
    lowerStarts.forEach(s=>{
      const li = document.createElement('li');
      li.innerText = `Sentence possibly should start with a capital letter: "${s}..."`;
      issuesList.appendChild(li);
    });
    totalIssues += lowerStarts.length;
  }

  if(totalIssues === 0){
    summary.innerText = "No obvious issues found (quick check). For deep grammar fixes, use an API.";
    issuesList.innerHTML = '';
  } else {
    summary.innerText = `${totalIssues} potential issue(s) found. Review suggestions below.`;
  }
}

// Basic auto-fix: remove extra spaces, fix repeated words, fix sentence starts capitalization, add period if missing
function runAutoFix(){
  let txt = input.value || "";
  if(!txt.trim()){
    alert("Enter text first.");
    return;
  }

  // 1. collapse multiple spaces/tabs into single space
  txt = txt.replace(/\t+/g, ' ').replace(/ {2,}/g, ' ');

  // 2. fix repeated words (the the => the)
  txt = txt.replace(/\b([A-Za-z]+)\s+\1\b/gi, '$1');

  // 3. capitalize first letter of sentences
  txt = txt.replace(/(^|[.!?]\s+)([a-z])/g, (m,p1,p2) => p1 + p2.toUpperCase());

  // 4. add period at end of sentences that look long and miss punctuation (basic)
  txt = txt.split('\n').map(par=>{
    return par.split(/(?<=\b)/).map(sentence=>{
      let s = sentence.trim();
      if(s && !/[.?!]$/.test(s) && s.split(' ').length>4){
        return s + '.';
      }
      return sentence;
    }).join(' ');
  }).join('\n');

  input.value = txt;
  runQuickCheck();
  alert("Auto-fix applied (basic fixes). Review the text — advanced grammar still needs an API.");
}

// copy to clipboard
async function copyResult(){
  try{
    await navigator.clipboard.writeText(input.value);
    alert("Text copied to clipboard.");
  }catch(e){
    alert("Copy failed - try selecting and copying manually.");
  }
}

// UI events
checkBtn.addEventListener('click', () => {
  runQuickCheck();
});

fixBtn.addEventListener('click', () => {
  if(!input.value.trim()){
    alert("Please paste or type text first.");
    return;
  }
  runAutoFix();
});

copyBtn.addEventListener('click', copyResult);
