
const battleSearch = document.getElementById("battle-search")
const pokemonInventory = document.getElementById("pokemon-inventory")
const pokemonOne = document.getElementById("pokemon-1")
const bottomUi = document.getElementById("bottom-ui")
const dialogue = document.getElementById("dialogue")
const optionOneBtn = document.getElementById("optionOne")
const optionTwoBtn = document.getElementById("optionTwo")
const startBtn = document.getElementById("start-btn")
const dialogueBox = document.getElementById("dialogue-box")


let nextOptions = {optionOne:"", optionOneNextId:"", optionTwo:"",optionTwoNextId:""}



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

   dialogue.textContent = currentDialogue.dialogue
    optionOneBtn.textContent = currentDialogue.options[0].option
    optionTwoBtn.textContent = currentDialogue.options[1].option
    nextOptions.optionOne = currentDialogue.options[0].option
    nextOptions.optionOneNextId = currentDialogue.options[0].nextId
     nextOptions.optionTwo = currentDialogue.options[1].option
    nextOptions.optionTwoNextId = currentDialogue.options[1].nextId

   
}



let currentDialogueId = 0;










startBtn.addEventListener("click" , () => {
    dialogueBox.style.display = 'flex'
    renderDialogue()
    startBtn.style.display = "none"
})



optionOneBtn.addEventListener("click", function() {
 
    

 renderDialogue()

}
)











