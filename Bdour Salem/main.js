const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const status = document.getElementById("status"),
  output = document.getElementById("result");

startRecognition = () => {
  if (SpeechRecognition !== undefined) {
    let recognition = new SpeechRecognition();

    recognition.onstart = () => {
      status.innerHTML = `Starting listening, speak in the microphone please `;
      output.classList.add("hide");
    };

    recognition.onspeechend = () => {
      status.innerHTML = `I stopped listening `;
      recognition.stop();
    };


    recognition.onresult = function(event) {
                var transcript = event.results[0][0].transcript;
    			var confidence = event.results[0][0].confidence;
                output.innerHTML = "<b></b> " + transcript;


                output.classList.remove("hidden");

    			const Http = new XMLHttpRequest();
    			Http.open("GET","https://s-m.com.sa/r1/e.php?e=" + transcript);
    			Http.send();
    				x2.play();
    				var yy = document.getElementById("result").duration;
    				yy=yy*1000;
    				console.log(b1);
    				document.getElementById("result").innerHTML = b1;

    				output.classList.add("hidden");

            };

    recognition.start();
  }else {
    status.innerHTML = "sorry not supported ";
  }
};
