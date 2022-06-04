//YOUR FIREBASE LINKS
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

username = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name : username,
            message : msg,
            like : 0
      });
      document.getElementById("message").value = "";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
