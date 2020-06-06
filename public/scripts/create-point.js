function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for(const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
        
    })
}
populateUFs()

function getCities(event){  
    
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")
    
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.disabled = true 
    citySelect.innerHTM = "<option value>Selecione a cidade</option>"

    fetch(url)
    .then( res => res.json() )
    .then( cities => {

        for(const city of cities){
            
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        
    })
    citySelect.disabled = false

}

document
    .querySelector("select[name=uf]")
    //() => função anonima
    .addEventListener("change", getCities)

//Items de coleta
//Pegar todos os li

const ItemsToCollect = document.querySelectorAll(".items-grid li")
for (const item of ItemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const colletedItems =  document.querySelector("input[name=items")


let selectedItems = []

function handleSelectedItem(event){
    const itemL1 = event.target

    // add ou remover uma class
    itemL1.classList.toggle("selected")

    const itemId = itemL1.dataset.id
    
    //verificar se tem items selecionados e pegar eles
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId//retorna true ou false
        return itemFound
    })

    //se já estiver selecionado retirar da seleção
    if(alreadySelected >= 0){
        const filteredItems = selectedItems.filter(item =>{
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItems = filteredItems
    }else{
        //se não estiver adicionar a seleção
        //adicionar elemento
        selectedItems.push(itemId)
    }    
    //atualizar o campo escondido com items selecionados
    colletedItems.value = selectedItems
}