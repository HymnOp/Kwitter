
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

username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome : " + username;

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;

                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}