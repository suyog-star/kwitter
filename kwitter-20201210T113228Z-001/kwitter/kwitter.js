function adduser() {
    user_name=document.getElementById("text").value;
    localStorage.setItem("user_name", user_name);
    window.location="kwitter_room.html";
}