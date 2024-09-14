import {db, collection, addDoc} from './firebase.js'

const prompt = document.querySelector("input");
const addbtn = document.querySelector("button");
let message = document.querySelector(".message");
let answer = document.querySelector(".given");
let chats_area = document.querySelector(".chats-area");

addbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let promptvalue = prompt.value.toLowerCase();

  if (promptvalue === "") {
    alert("Please Write Something");
  } else if (promptvalue === "helw") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>
                   `;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `
                    <div class="given">
                    <p>Helw how can i help you ?</p>
                   </div>`;
    }, 1000);
  } else if (promptvalue === "hi") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>Hello! How can I assist you today?</p>
                   </div>`;
    }, 1000);
  } else if (promptvalue === "bye") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>Goodbye! Have a great day!</p>
                   </div>`;
    }, 1000);
  } else if (promptvalue === "how are you") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>I'm doing great! Thank you for asking.</p>
                   </div>`;
    }, 1000);
  } else if (promptvalue === "help") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>Sure! How can I assist you today?</p>
                   </div>`;
    }, 1000);
  } else if (promptvalue === "thank you") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>You're welcome!</p>
                   </div>`;
    }, 1000);
  } else if (promptvalue === "what's your name") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>My name is ChatBot! How can I help you?</p>
                   </div>`;
    }, 1000);
  } else if (promptvalue === "what can you do") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>I can chat with you and provide information. What would you like to know?</p>
                   </div>`;
    }, 1000);
  } else if (promptvalue === "open google") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      window.open("https://www.google.com", "_blank");
    }, 1000);
  } else if (promptvalue === "tell me a joke") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>Why don’t skeletons fight each other? They don’t have the guts!</p>
                   </div>`;
    }, 1000);
  } else if (promptvalue === "weather") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>The weather is sunny today!</p>
                   </div>`;
    }, 1000);
  } else if (promptvalue === "good morning") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>Good morning! Hope you have a great day ahead.</p>
                   </div>`;
    }, 1000);
  } else if (promptvalue === "good night") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>Good night! Sleep well.</p>
                   </div>`;
    }, 1000);
  } else if (promptvalue === "how old are you") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>I don't age, I'm just a bot!</p>
                   </div>`;
    }, 1000);
    
  }
  else if (promptvalue === "salam") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>W.salam kese hu</p>
                   </div>`;
    }, 1000);
    
  } 
  else if (promptvalue === "me thk or ap") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>me bhi acha hu or kia horha ha ajkal</p>
                   </div>`;
    }, 1000);
    
  }
  else if (promptvalue === "bs farig ") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>acha koi nhi yr to koi skill seekhlo</p>
                   </div>`;
    }, 1000);
    
  }
  else if (promptvalue === "knsi seekhun") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>jisme apka interest hu like Programming, Graphic Designing, Marketing</p>
                   </div>`;
    }, 1000);
    
  }
  else if (promptvalue === "assalam walaikum") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>W.slam kese han ap</p>
                   </div>`;
    }, 1000);
    
  }
  else if (promptvalue === "assalamwalaikum") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>W.slam kese han ap</p>
                   </div>`;
    }, 1000);
    
  }
  else if (promptvalue === "do you like pizza") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>I don't eat, but pizza sounds delicious!</p>
                   </div>`;
    }, 1000);
  } else if (promptvalue === "what time is it") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      let currentTime = new Date().toLocaleTimeString();
      chats_area.innerHTML += `<div class="given">
                    <p>It's ${currentTime}.</p>
                   </div>`;
    }, 1000);
  }
  else if (promptvalue === "time kia hora ha") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      let currentTime = new Date().toLocaleTimeString();
      chats_area.innerHTML += `<div class="given">
                    <p>It's ${currentTime}.</p>
                   </div>`;
    }, 1000);
  }
  else if (promptvalue === "yar time kia hora ha") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      let currentTime = new Date().toLocaleTimeString();
      chats_area.innerHTML += `<div class="given">
                    <p>It's ${currentTime}.</p>
                   </div>`;
    }, 1000);
  }
  else if (promptvalue === "mujy smit me admission lena ha") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>acha kis field me lena chahty han</p>
                   </div>`;
    }, 1000);
  }
  else if (promptvalue === "i am hamza") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>or suna bsdk gandu kesa ha</p>
                   </div>`;
    }, 1000);
  }
  else if (promptvalue === "me thk tu suna") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>me bhi bariyaa or teri gf kesi ha bharwe</p>
                   </div>`;
    }, 1000);
  }
  else if (promptvalue === "or suna") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>me to apki sunne k liye banaya gaya hu ap sunain</p>
                   </div>`;
    }, 1000);
  }
  else if (promptvalue === "who develop you") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>Shehryar Ahmed</p>
                   </div>`;
    }, 1000);
  }
  else if (promptvalue === "ok") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>hmmmm</p>
                   </div>`;
    }, 1000);
  }
  else if (promptvalue === "no") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>okiee as your wish</p>
                   </div>`;
    }, 1000);
  }
  else
   if (promptvalue === "ne thk or tm") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>me bhi bariya</p>
                   </div>`;
    }, 1000);
  }
  else
   if (promptvalue === "ne thk or ap") {
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>me bhi bariya</p>
                   </div>`;
    }, 1000);
  }
  else {
      addtofirebase();
    prompt.value = ""; // Moved here
    chats_area.innerHTML += `<div class="message">
                    <p>${promptvalue}</p>
                   </div>
                   <div class="wait">
                    <p>Wait...</p>
                   </div>`;
    setTimeout(() => {
      let wait_loader = document.querySelector(".wait");
      wait_loader.remove();
      chats_area.innerHTML += `<div class="given">
                    <p>Sorry, i dont know about this, can u ask me anything other.</p>
                   </div>`;
    }, 1000);
  }
});
async function addtofirebase  () {
    try {
        const subscribe = await addDoc(collection(db, 'prompts'), {
            prompt: prompt.value
        })
    }
    catch (e) {
        console.log(e);
        
    }
}