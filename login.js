const firebaseConfig = {
    apiKey: "AIzaSyC6mPcUShe2Gty4o2ZoAXouzuGJ8m8U9lI",
    authDomain: "jv-presente.firebaseapp.com",
    databaseURL: "https://jv-presente-default-rtdb.firebaseio.com",
    projectId: "jv-presente",
    storageBucket: "jv-presente.appspot.com",
    messagingSenderId: "565379728946",
    appId: "1:565379728946:web:bda7f5491e13aaf09c9e2b",
    measurementId: "G-XSY1F1J987"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  var verdade = false;
  function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.then((userCredential) => {
      var userEmail = userCredential.user.email;
      if (userEmail === "isaquesamirbezerra@gmail.com") {
        verdade = true;
        window.location.href = "super.html";
      } 
      
      else if (userEmail == "muzel@prof.educacao.sp.gov.br") {
        verdade = true;
        window.location.href = "super.html";
      } 
      
      
      else if (userEmail === "exemplo2@dominio.com") {
        verdade = true;
        window.location.href = "orjoanp.html";
      }else if (userEmail === "exemplo3@dominio.com") {
        verdade = true;
        window.location.href = "spedpast.html";
      }else if (userEmail === "exemplo4@dominio.com") {
        verdade = true;
        window.location.href = "osjsbvasp.html";
      }else if (userEmail === "exemplo3@dominio.com") {
        verdade = true;
        window.location.href = "foi_terceiro.html";
      } else {
      }
    })
    .catch((error) => {
      alert("E-mail ou senha incorretos.");
    });
  }
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user && verdade) {
    } else {
    }
  });
  
  function voltar() {
    window.location.href = "index.htm";
  }
  
  function signOut() {
    auth.signOut();
    alert("Desconectado com sucesso");
  }
  