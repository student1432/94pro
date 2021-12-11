function addUser()
{
    UserName = document.getElementById("input_id").value;

    localStorage.setItem("UserName", UserName);
    window.location = "kwitter_room.html";
}