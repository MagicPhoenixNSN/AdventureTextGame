let gold = 100
let invotoryPlayerNumber = 0
let inventoryText = document.getElementById("InventoryText")
const aumor = ["Helmet(None)", "Chestplate(None)", "Pants(None)"]
const items = ["Torch", "BetaItem", "Bronze-Key"]

function submitClicked() {
    const textBox = document.getElementById("playerInputTextBox").value;
    if (textBox == "1") {
        document.getElementById("computerResponseText").innerHTML = "Adventure Started";
        let randomNumber = Math.ceil(Math.random() * 3);
        document.getElementById("computerResponseText").innerHTML = "You have entered the first Dungion!"
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
            alert("Gold: " + gold)
        }
    }
    else if (textBox == "2"){
        if (aumor.includes("Rusty-Chestplate")) {
            if (aumor.includes("Rusty-Pants")) {
                if (aumor.includes("Rusty-Helmet")) {
                    alert("second dugion availbal!")
                    document.getElementById("computerResponseText").innerHTML = "Adventure Started";
                    randomNumber = Math.ceil(Math.random() * 6);
                    if (randomNumber == 1) {
                        alert('You find a bug and touch it. It jumps on your face and you pass out from fear. RIP')
                    }
                    else if (randomNumber == 2) {
                        alert('You walk into some spooky smoke. You inhale and relize the smoke color is green. You died to poinson. RIP')
                    }
                    else if (randomNumber == 3) {
                        alert('You find a a room; Its dark; you need something to light it up. A torch is not enough. Maybe something brigherter though?')
                        if (items.includes("Lantern")) {
                            alert("You brighten up the room with your lantern. You find great mosaiacs on the wall. You push behind a wall and find.. (coming soon)")
                        }
                    }
                    else if (randomNumber == 4) {
                        alert('You find 100 gold!')
                        gold += 100
                    }
                    else if (randomNumber == 5) {
                        alert('You find a chest in a room and deside on opening it. Jacpot! You find:')
                        randomNumber = Math.ceil(Math.random() * 3);

                    }
                    else if (randomNumber == 6) {
                        alert('You find a bug and touch it. It jumps on your face and you pass out from fear. RIP')
                    }
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

setInterval(function(){
    document.getElementById("InventoryText").innerHTML =  "Inventory: " + items.toString();
}, 10);

setInterval(function(){
    document.getElementById("GoldText").innerHTML =  "Gold: " + gold
}, 10);