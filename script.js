let gold = 100
let invotoryPlayerNumber = 0
const aumor = ["Helmet(None)", "Chestplate(None)", "Pants(None)"]
const items = ["Torch", "BetaItem", "Bronze-Key"]

function submitClicked() {
    const textBox = document.getElementById("playerInputTextBox").value;
    if (textBox == "1") {
        document.getElementById("computerResponseText").innerHTML = "Adventure Started";
        let randomNumber = Math.ceil(Math.random() * 3);
        if (randomNumber == 1) {
            alert("You Enter the cave. You start to esplore. You fine a small room, with a chest inside. You find an item!")
            randomNumber = Math.ceil(Math.random() * 4);
            if (randomNumber == 1) {
                alert(" The Chest contained 10 gold!")
                gold = gold +10
            }
            if (randomNumber == 2) {
                alert("The Chest contained Rusty Chestplate!")
                items.push("Rusty-Chestplate");
            }
            if (randomNumber == 3) {
                alert("The Chest contained 10 gold!")
                gold = gold +10
            }
            if (randomNumber == 4) {
                alert("The Chest contained a bronze key!")
                items.push("Bronze-Key");
            }
        }
        else if (randomNumber == 2) {
            alert("You Enter the cave. You trip over a rock and fall down a cliff. RIP")
        }
        else if (randomNumber == 3) {
            alert("You Enter the cave. You find a some gold sitting on the ground.")
            randomNumber = Math.ceil(Math.random() * 7);
            gold = gold + randomNumber
            alert(gold)
        }
    }
    else if (textBox == "2"){
        if (aumor.includes("Rusty-Chestplate")) {
            if (aumor.includes("Rusty-Pants")) {
                if (aumor.includes("Rusty-Helmet")) {
                    alert("second dugion availbal!")
                }
            }
        }
    }
    else if (textBox == "3"){
        document.getElementById("computerResponseText").innerHTML = "3 inputed";
    }
    else if (textBox == "4"){
        document.getElementById("computerResponseText").innerHTML = "4 inputed";
        document.getElementById("computerResponseText").innerHTML = items.toString() + ", Aumor: " + aumor.toString() + " TO EQUIP AUMOR FROM INVENTORY, SAY THE # SPACE THAT IT IS IN IN THE LIST.";
        
    }
    else if (textBox == "5"){
        document.getElementById("computerResponseText").innerHTML = "The Shop -- 20 Coins: Bronze Chest(BC) -- 100 coins: Bronze Boots(BB) -- 1000 Coins: Silver Chest(SC)";
    }
    
    else {
        setTimeout(function(){
            document.getElementById("computerResponseText").innerHTML = "Responses to your commands will be shown here";
        }, 2000);
        document.getElementById("computerResponseText").innerHTML = "Character input not reconized, please try again";
    }
}

function subSubmitClicked() {
    const subTextBox = document.getElementById("subPlayerInputTextBox").value;
    invotoryPlayerNumber = subTextBox - 1
    alert(invotoryPlayerNumber)
    alert(items[invotoryPlayerNumber])
    if (items[invotoryPlayerNumber] == "Rusty-Helmet") {
        alert('correct')
        items.splice(invotoryPlayerNumber, 1)
        aumor[0] = "Rusty-Helmet"
    }
    else if (items[invotoryPlayerNumber] == "Rusty-Chestplate") {
        alert('correct')
		items.splice(invotoryPlayerNumber, 1)
        aumor[1] = "Rusty-Chestplate"
    }
    else if (items[invotoryPlayerNumber] == "Rusty-Pants") {
        alert('correct')
        items.splice(invotoryPlayerNumber, 1)
        aumor[2] = "Rusty-Pants"
    }
    else if (items[invotoryPlayerNumber] == "BetaItem") {
        alert("beta inventory Testing item");
    }
    else if (items[invotoryPlayerNumber] == "Torch") {
        alert("This does nothing. Or does it...");
    }
    else if (items[invotoryPlayerNumber] == "Lantern") {
        alert("Maybe this allows you into a secret room...");
    }
	
    else if (items[invotoryPlayerNumber] == "Bronze-Chest") {
        if (items.includes("Bronze-Key")) {
			alert("Chest Opening!")
            let KeyInd = items.indexOf("Bronze-Key")
            items.splice(KeyInd, 1)
            let ChestInd = items.indexOf("Bronze-Chest")
			items.splice(ChestInd, 1)
            randomNumber = Math.ceil(Math.random() * 4);
            if (randomNumber == 1) {
                alert("You found 15 gold!")
                gold = gold + 15
            }
            else if (randomNumber == 2) {
                alert("You found 15 gold!")
                gold = gold + 15
            }
            else if (randomNumber == 3) {
                alert("You found a Rusty Helemet!")
                items.push("Rusty-Helmet")
            }
            else if (randomNumber == 4) {
                alert("Latern")
                items.push("Lantern")
            }
		}
    }

    if (subTextBox == "BB") {
        if (gold >= 100) {
            gold = gold - 100
            items.push("Rusty-Pants")
        }
        else {
            let neededGold = 100 - gold;
            alert(`You need ${neededGold} More money to buy this!`);
        }
    }
	if (subTextBox == "BC") {
		if (gold >= 20) {
			gold = gold - 20
			items.push("Bronze-Chest")
		}
		else {
			let neededGold = 100 - gold;
            alert(`You need ${neededGold} More money to buy this!`);
		}
	}
    
}