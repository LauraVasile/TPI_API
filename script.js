console.log("it works");
let lista = []
const drinksDiv = document.getElementById("drinks")
const card_list= document.getElementById("card-list")

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


      const drink = document.createElement("div")
      drink.setAttribute("class","card")
      drink.setAttribute("style","width: 18rem;")
      const immagine = document.createElement("img")
      immagine.setAttribute("src", cocktail.strDrinkThumb)
      immagine.setAttribute("class", "card-img-top")
      immagine.setAttribute("alt", " ")
      const nome = document.createElement("div")
      nome.setAttribute("class","card-body")
      const h5 = document.createElement("h5")
      h5.setAttribute("class","card-title")
      const num = document.createElement("p")
      num.setAttribute("class", "card-text")
      h5.innerHTML=cocktail.strDrink
      num.innerText=++a
     
  
      drink.appendChild(immagine)
      drink.appendChild(nome)
      nome.appendChild(h5)
      nome.appendChild(num)
      group.appendChild(drink)
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


