let sliderHtml = '';
let projectID = 0;
let projectName = '';
let projectPathName = '';
let projectURL = '';

let retinaReady = false;
let defiscReady = false;

let descriptionLine1 = '';
let descriptionLine2 = '';

let imageUrl = '';

let defisc = `<img class="pull-right lazyload"
src="https://d3i3cp443mmogz.cloudfront.net/public/home-sowefund/macaron-defiscalisation-IR-PEA.png"
data-src-retina="https://d3i3cp443mmogz.cloudfront.net/public/home-sowefund/macaron-defiscalisation-IR-PEA@2x.png"
width="160" height="90"><br>`;

function makeSlider() {
    projectURL = document.querySelector('#projectURL').value;
    projectID = +projectURL.match(/(?<=\/)\d+/)[0];
    projectPathName = projectURL.match(/(?<=\/)[^\/]+?$/)[0];
    projectName = document.querySelector('#projectName').value;
    retinaReady = document.getElementById('retinaReady').checked;
    defiscReady = document.getElementById('defiscReady').checked;
    descriptionLine1 = document.querySelector('#descriptionLine1').value;
    descriptionLine2 = document.querySelector('#descriptionLine2').value;

    imageUrl = `https://d3i3cp443mmogz.cloudfront.net/public/home-sowefund/${projectPathName}-slider.jpg`;

    sliderHtml = `<br>
      ${defiscReady ? defisc : ''}
      <br>
      <br>

      <h2 class="text-white font-xxl">${projectName}</h2>

      <p class="font-md hidden-md">
      ${descriptionLine1}
      <br>
      ${descriptionLine2}
      </p>

      <br>

      <a href="/projet/${projectID}/${projectPathName}" class="btn btn-primary btn-xl">Investir dès maintenant</a>
      <br>
      <a href="/startups" class="text-white opacity">voir toutes les opportunités</a>`;
}

document.querySelector('#previewBtn').addEventListener('click', makeSlider);
