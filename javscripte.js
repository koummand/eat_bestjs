const image = document.getElementById("img");
// 1. Obtenir une référence sur l’élément <video>
const player = document.getElementById("player");
// 2. Créer un canevas aux dimensions de la vidéo
const canvas = document.getElementById("canvas");
// 3. Obtenir le contexte de dessin du canevas
const context = canvas.getContext("2d");

const captureButton = document.getElementById("capture");
const galleryButton = document.getElementById("gallery");

// changer le champ src a partir de la gallery
galleryButton.addEventListener("change", () => {
  image.src = URL.createObjectURL(galleryButton.files[0]);
});

const constraints = {
  // audio: true,
  video: true,
  facingMode: { exact: "environment" },
};
// Attachez le flux vidéo à l'élément vidéo et à la lecture automatique.
navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  player.srcObject = stream;
});

//changer le champ src a partir de la cameras video
captureButton.addEventListener("click", () => {
  // 4. Capturer l’image actuelle de la vidéo
  context.drawImage(player, 0, 0, canvas.width, canvas.height);
  // 5. Convertir l’image capturée en fichier, et créer un lien vers ce fichier
  canvas.toBlob(function (blob) {
    image.src = URL.createObjectURL(blob);
    canvas.remove();
  });
});
