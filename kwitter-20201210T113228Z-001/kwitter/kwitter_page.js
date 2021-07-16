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
   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");
   function send() {
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
       });

       document.getElementById("msg").value ="";
   }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
