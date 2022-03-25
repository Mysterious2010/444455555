const firebaseConfig = {
      apiKey: "AIzaSyARCnB_bQVX_2RMtMTXFx5otV72T5I56Gw",
      authDomain: "kwitter-a603c.firebaseapp.com",
      databaseURL: "https://kwitter-a603c-default-rtdb.firebaseio.com",
      projectId: "kwitter-a603c",
      storageBucket: "kwitter-a603c.appspot.com",
      messagingSenderId: "825959255275",
      appId: "1:825959255275:web:88f1d384976588a7bc02ae",
      measurementId: "G-87W9YMFV45"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0      
      });
}document.getElementById("msg").value="";
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html")
}
