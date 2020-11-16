console.log("it works");
let lista = []
const drinksDiv = document.getElementById("drinks")
const card_list= document.getElementById("card-list")
const list = document.getElementById("list")
let conta=0


async function main(){
   lista = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail").then(r=> r.json())
   .then(y=>{
      console.log(y)
      return y.drinks
   })
   let a=0

   let group = document.createElement("div")
   group.setAttribute("class","card-group")
   group.setAttribute("id", a+5)
   

   lista.forEach(cocktail =>{       

      // creazione card
      const drink = document.createElement("div")
      drink.setAttribute("class","card")
      drink.setAttribute("style","width: 18rem;")
      const immagine = document.createElement("img")
      immagine.setAttribute("src", cocktail.strDrinkThumb)
      immagine.setAttribute("class", "card-img-top")
      immagine.setAttribute("alt", " ")
      const riga = document.createElement("div")
      riga.className = "row"
      const nome = document.createElement("div")
      nome.setAttribute("class","card-body")
      const h5 = document.createElement("h5")
      h5.setAttribute("class","card-title")
      const num = document.createElement("p")
      num.setAttribute("class", "col card-text")
      h5.innerHTML=cocktail.strDrink
      num.innerText=++a
      // creazione del bottone che aggiunge 
      const button = document.createElement("button")
      button.className = " col btn "
      button.style= "background-color: rgb(245, 209, 7);"
      button.innerHTML= "+"


      button.onclick=()=>{
      const drink1 = document.createElement("div")
      drink1.setAttribute("class","card")
      drink1.setAttribute("style","width: 18rem;")
      const immagine1 = document.createElement("img")
      immagine1.setAttribute("src", cocktail.strDrinkThumb)
      immagine1.setAttribute("class", "card-img-top")
      immagine1.setAttribute("alt", " ")
      const nome1 = document.createElement("div")
      nome1.setAttribute("class","card-body")
      const h51 = document.createElement("h5")
      h51.setAttribute("class","card-title")
      const num1 = document.createElement("p")
      num1.setAttribute("class", "card-text")
      h51.innerHTML=cocktail.strDrink
      drink1.appendChild(immagine1)
      drink1.appendChild(nome1)
      nome1.appendChild(h51)
      nome1.appendChild(num1)
      list.appendChild(drink1)
      
// bottone che rimuove
      const btnTogli = document.createElement("button")
      btnTogli.innerHTML = " Rimuovi "
      btnTogli.id = "l" + conta
      drink1.appendChild(btnTogli)
      btnTogli.className = "btn "
      btnTogli.style= "background-color: red; font-size: 18px;"
      btnTogli.onclick = () => {
      const pulsante = document.getElementById(event.toElement.id)
      pulsante.parentNode.remove()
      }
         conta++
      }


  
      drink.appendChild(immagine)
      drink.appendChild(nome)
      nome.appendChild(h5)
      riga.appendChild(num)
      riga.appendChild(button)
      group.appendChild(drink)
      nome.appendChild(riga)

      if(a%5==0){
        
         card_list.appendChild(group)
         group = document.createElement("div")
         group.setAttribute("class","card-group")
         group.setAttribute("id", a+5)

      }




    
      

  /* const drinkDiv = document.createElement("div") 
   drinkDiv.innerHTML = name.strDrink 
   drinksDiv.appendChild(drinkDiv)*/
    })
   
   //console.log(drinks)
   console.log(lista)
}

main()


