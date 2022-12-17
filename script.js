function myFunction() {
    var x = document.getElementById("quote").value;
   var quotedX = "\"" + x + "\""
    var n = document.getElementById("author").value;
    document.getElementById("quoted").innerHTML = n + " says, " + quotedX + ".";
}
    