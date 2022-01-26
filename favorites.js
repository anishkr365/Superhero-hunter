  var bodysection=document.getElementById("body-section");

  // function to display favourites superhero added in the local storage
  function displayStorage(){
      
      let items = localStorage.getItem("superhero");
      if(items){
          let storageItems = JSON.parse(localStorage.getItem('superhero'));
          console.log(storageItems);
          storageItems.forEach(id => { // for each item in local storage we are fetching it's data through it's id
            loadFavoritesuperhero(id);
          });
      }
  }
  function loadFavoritesuperhero(id){ // function to fetch data 
      // var id = this.id;
      console.log(id);
      bodysection.innerHTML=" ";
            var xhrRequest = new XMLHttpRequest();
            xhrRequest.onload= function(){
            console.log("hi");
            console.log(xhrRequest.response);
              var myObj = JSON.parse(this.response);
              console.log(myObj);
              const arr=[];
              arr.push(myObj);
              console.log(arr);
            if(this.response=="error"){
              bodysection.innerHTML=" ";
              return;
            }
            else{

              
                
              for(let i in arr){
                  
              
                    var container = document.createElement('div'); 
                    container.setAttribute('class','container');
                    container.appendChild(document.createElement('img')).src = arr[i].image.url;
                    container.appendChild(document.createElement('p')).textContent= arr[i].name;
                    button = document.createElement("button");
                    button.innerHTML= "delete" ;
                    button.classList.add('add-to-fav-btn');
                    button.id = arr[i].id;
                    // button.setAttribute("onclick", "updateStorage(this.id)");
                    
                    button.onclick = function(){removeSuperhero(arr[i].id);}; // removing item from local storage
                    console.log(arr[i].id);
    
                    container.appendChild(button);
                    bodysection.appendChild(container);
                    // container.addEventListener('click', function(){ 
                    //   localStorage.setItem("superhero", arr[i].id);
                  
                
              }
            }
    
              
              };
              xhrRequest.open('GET','https://www.superheroapi.com/api.php/4647557051986505/'+id, true);
              xhrRequest.send();
            }
            document.addEventListener("DOMContentLoaded", displayStorage)
            function removeSuperhero(id){
      
              for (let i = bodysection.childNodes.length - 1; i >= 0; i--) {
                bodysection.removeChild(bodysection.childNodes[i]);
                editStorage(id); // it will remove superhero from loacal storage
                displayStorage() // remaining superhero will be loaded on page
              }
          
              
          }
          
          // this function removes superhero from local storage
          function editStorage(superhero){
              let favsuper = JSON.parse(localStorage.getItem('superhero')); //get deleted superhero from local storage
              let index = favsuper.indexOf(superhero);
              favsuper.splice(index,1);
              localStorage.removeItem('superhero');
          
              localStorage.setItem('superhero', JSON.stringify(favsuper)); // it will restore remaining items in local storage
          
          }
          
          