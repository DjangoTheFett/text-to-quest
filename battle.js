
const battleSearch = document.getElementById("battle-search")
const pokemonInventory = document.getElementById("pokemon-inventory")
const pokemonOne = document.getElementById("pokemon-1")
const bottomUi = document.getElementById("bottom-ui")
const dialogue = document.getElementById("dialogue")
const optionOneBtn = document.getElementById("optionOne")
const optionTwoBtn = document.getElementById("optionTwo")


let items = [{itemName: "potion", Quantity: 1}]




async function getCurrentDialogue() {
    const url = 'http://localhost:3000/players/1/dialogue'
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`response.status: ${response.status}`)
        }

         const result = await response.json();
        console.log(result)
        return result 
        } catch(err) {
            console.error(err.message)
        }
}

async function renderDialogue() {
    const currentDialogue =  await getCurrentDialogue();

   dialogue.textContent = currentDialogue.text



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












optionOneBtn.addEventListener("click", function() {


 renderDialogue()

}
)











