var firebaseConfig = {
      apiKey: "AIzaSyAICsYfLTIWlTI06Y5QuRKbWZI6nsvzJJg",
      authDomain: "kwitter-de158.firebaseapp.com",
      databaseURL: "https://kwitter-de158-default-rtdb.firebaseio.com",
      projectId: "kwitter-de158",
      storageBucket: "kwitter-de158.appspot.com",
      messagingSenderId: "585886684758",
      appId: "1:585886684758:web:c423261a4bd8db88b18df7",
      measurementId: "G-3S20XH7WJZ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    road=localStorage.getItem("user_name");
    document.getElementById("h3").innerHTML="welcome "+road+ "!";

    function addroom() {
          Room_names = document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_names).update({
            purpose :"adding room name"

      });

      localStorage.setItem("room_name", Room_names);

      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name -"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirctTheRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row; 

      //End code
      });});}

getData();
 function redirctTheRoomName(Stor) {
       console.log(stor);
       localStorage.setItem("room_name", stor);
       window.location="kwitter_page.html";
 } 

 function logout() {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location ="index.html";
 }
