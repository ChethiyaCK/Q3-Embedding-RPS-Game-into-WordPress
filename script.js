function play(user) {
    let result = "";
    if (user === 'rock') {
        result = "tie";
    } else if (user === 'paper') {
        result = "win";
    } else if (user === 'scissors') {
        result = "lose";
    }
    alert("Computer chose rock, you " + result + "!");
}
