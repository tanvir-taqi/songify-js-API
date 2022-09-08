

const loadAudio = async ()=>{
    const url = `https://theaudiodb.com/api/v1/json/2/mvid.php?i=112024`;
    const res = await fetch(url);
    const data =await res.json();
    displayAudio(data);
}

const displayAudio = (data)=>{
    const audioContainer = document.getElementById('audio-container')
    const mvids = data.mvids
    mvids.forEach(audio => {
        const col = document.createElement("div")
        col.classList.add('col')

        col.innerHTML = `<div class="card border-0">
       
        <div class="card-body py-3">
          <h3 class="card-title my-3">${audio.strTrack}</h3>
            <video width="350" controls>
                <source src="${audio.strMusicVid}" type="video/mp4">

            </video>
        </div>
      </div>
    </div>`
        audioContainer.appendChild(col)
       
        
    });
}

loadAudio()