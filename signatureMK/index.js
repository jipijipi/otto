let projectID = 0;
let projectName = '';
let projectColor = '';
let projectPathName = '';
let signatureHtml = '';

document.querySelector('#download_link').addEventListener('click', () => {
    makeSign();
    downloadSign();
});

document.querySelector('#previewBtn').addEventListener('click', () => {
    makeSign();
    preview();
});

function makeSign() {
    projectID = document.getElementById('projectID').value;
    projectName = document.getElementById('projectName').value;
    projectColor = document.getElementById('projectColor').value;

    let projectUrl = `https://sowefund.com/projet/${projectID}/${projectName.toLowerCase()}?utm_source=mail&utm_campaign=${projectName.toLowerCase()}&utm_medium=email&utm_content=signature`;
    let projectImg = `https://d3i3cp443mmogz.cloudfront.net/public/mails/signature/signature-${projectName.toLowerCase()}.gif`;

    signatureHtml = `<table width="" border="0" cellspacing="0" cellpadding="0">
<tr>
  <td align="center">
    <p
      style="font-family: Helvetica, Arial, sans-serif; font-size: 10px; line-height: 12px; margin-bottom: 10px; text-align: center">
      <a style="text-decoration:none"
        href="${projectUrl}"
        target="_blank">
        <img src="${projectImg}"
          alt="Pour une dur&eacute;e limit&eacute;e, investissez dans ${projectName} sur sowefund.com" border="0" width="300"
          height="105">
      </a>
    </p>
    <table border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center" style="-webkit-border-radius: 1px; -moz-border-radius: 1px; border-radius: 1px;"
          bgcolor="${projectColor}"><a
            href="${projectUrl}"
            target="_blank"
            style="font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; -webkit-border-radius: 1px; -moz-border-radius: 1px; border-radius: 1px; padding: 1px 10px; border: 1px solid ${projectColor}; display: inline-block;">Investir
            dans ${projectName} ></a></td>
      </tr>
    </table>
  </td>
</tr>
</table>`;
}

function downloadSign() {
    let data = new Blob([signatureHtml], { type: 'text/html' });
    var url = window.URL.createObjectURL(data);
    document.getElementById('download_link').download = `signature-${projectName.toLowerCase()}.html`;
    document.getElementById('download_link').href = url;
}

let preview = () => (document.querySelector('#preview').innerHTML = signatureHtml);

//window.URL.revokeObjectURL(url);
