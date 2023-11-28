    const player = document.getElementById('player');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    // const nav= document.querySelector("nav");
    
    const captureButton = document.getElementById('capture');


    //corrrection stack overflow pour permetre en plus de la caméra avant l'accès a la camera arrière
    const constraints = {
    audio: true,
    video:true,
    facingMode: { exact: "environment" },  
  }

  

    captureButton.addEventListener('click', () => {
        // Draw the video frame to the canvas.
        context.drawImage(player, 0, 0, canvas.width, canvas.height);
    });

    // Attach the video stream to the video element and autoplay.
    navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
            player.srcObject = stream;
        });    
//    window.addEventListener("scroll",(e)=>{
//     if(window.scrollY> 12){
//     nav.style.top="0";
//     }else{
//         nav.style.top="-50px";
//     }
//  })