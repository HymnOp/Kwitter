
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAdHNxOcUaGDRgF6C0QitVlSECkysvxVkw",
      authDomain: "kwitter-f3487.firebaseapp.com",
      databaseURL: "https://kwitter-f3487-default-rtdb.firebaseio.com",
      projectId: "kwitter-f3487",
      storageBucket: "kwitter-f3487.appspot.com",
      messagingSenderId: "1076848097538",
      appId: "1:1076848097538:web:a7b269afaed510cdccea1b"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
