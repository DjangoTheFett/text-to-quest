const selectBtn = document.getElementById("choose");
const battleSearch = document.getElementById("battle-search")
const pokemonInventory = document.getElementById("pokemon-inventory")
const pokemonOne = document.getElementById("pokemon-1")
const bottomUi = document.getElementById("bottom-ui")
const dialogue = document.getElementById("dialogue")
const optionOneBtn = document.getElementById("optionOne")
const optionTwoBtn = document.getElementById("optionTwo")


let currentPokemon = []
let items = [{itemName: "potion", Quantity: 1}]

let choice = {
    name: "",
    att: 0,
    hp: 0,
    def: 0,
    spcAtt:0,
    spcDef:0,
    speed:0,

    
}


function getCurrentDialogue() {
    return options[currentDialogueId]
}

function renderDialogue() {
    const currentDialogue = getCurrentDialogue();

       dialogue.textContent = currentDialogue.question
     optionOneBtn.textContent = currentDialogue.options[0].optionOne
     optionTwoBtn.textContent = currentDialogue.options[1].optionTwo

     if ("rewards" in currentDialogue) {
        
           
    
       for (const reward of currentDialogue.rewards) {

             let found = false

          for (item of items){
            if (reward.itemName === item.itemName) {
                item.Quantity += reward.Quantity
                found = true
                break

            }  
          }

          if(!found) {

            items.push(reward)
          }

       }
        console.log(items)
     }

}

function startGame() {

    renderDialogue()

}

let currentDialogueId = 0;

let options = [ 
    
{
    questionId: 0, 
    question: "you find yourself at the path to leave your hometown, you could visit with someone before leaving or if your ready you can set off on your journey, what will you do?",
    options: [  {optionOne: "visit mom", nextId:1},
    {optionTwo: "leave town and start your journey", nextId:2}]
    
  
}, {

    questionId: 1, 
    question: " you walk in and your mother greets you. 'hello son , I prepared you a couple of things. here take  them' ",
    options: [  {optionOne: "leave on your journey", nextId:3},
    {optionTwo: "visit your room", nextId:4}],
    rewards: [{itemName: "potion", Quantity: 1}, {itemName:"hyper-potion", Quantity:1}]



},
{


}



]




const myKeys = Object.keys(choice)

let statsArray = []

selectBtn.addEventListener("click" , function() {


    console.log("choose")


    statsArray = Array.from(battleStats.children, element => element.textContent)
    console.log(statsArray)
    
    choice.name = battleName.textContent
    choice.att = parseInt(statsArray[0])
    choice.hp = parseInt(statsArray[1])
    choice.def = parseInt(statsArray[2])
    choice.spcAtt = parseInt(statsArray[3])
    choice.spcDef = parseInt(statsArray[4])
    choice.speed = parseInt(statsArray[5])
    battleChoiceContainer.style.display = "none"
    battleSearch.style.display = "none"

    console.log(choice)

    currentPokemon.push(choice)
    console.log(currentPokemon[0].name)
    
    pokemonOne.src = battleImg.src
    bottomUi.style.display = "flex"
     
   
    startGame()

      
})




optionOneBtn.addEventListener("click", function() {

 const current = getCurrentDialogue();
 const currentOption = current.options[0]
 currentDialogueId = currentOption.nextId
 renderDialogue()

}
)











