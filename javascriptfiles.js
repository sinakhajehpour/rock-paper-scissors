var myscore = 0
var computerscore = 0


function shoot() {
    var list = ["Rock", "Paper", "Scissors"]
    if (document.getElementById("selectpick").value === '') {
        alert("pick yours first")
    } else {
        var random = Math.floor(Math.random() * 3)
        var cc = document.getElementById("computerpick").innerHTML = list[random]
        var mc = document.getElementById("yourpick").innerHTML = document.getElementById("selectpick").value
        winner(mc, cc)
        document.getElementById("yourscore").innerHTML = myscore
        document.getElementById("compterscore").innerHTML = computerscore
    }


}


function winner(mc, cc) {
    if (mc === cc) {
        document.getElementById("result").innerHTML = "Draw"
    } else if (mc === "Rock" && cc === "Scissors") {
        myscore += 1
        document.getElementById("result").innerHTML = "You"
    } else if (mc === "Scissors" && cc === "Paper") {
        myscore += 1
        document.getElementById("result").innerHTML = "You"
    } else if (mc === "Paper" && cc === "Rock") {
        myscore += 1
        document.getElementById("result").innerHTML = "You"
    } else {
        computerscore += 1
        document.getElementById("result").innerHTML = "Computer"
    }
}

function reset() {
    myscore = 0
    computerscore = 0
    document.getElementById("yourscore").innerHTML = myscore
    document.getElementById("compterscore").innerHTML = computerscore
}