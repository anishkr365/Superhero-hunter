
    // const bodysection= document.getElementById('body-section');
    // var data;
    // var token = 4647557051986505;

    // 


    // const input = document.querySelector('input[type="text"]');

    // input.addEventListener('input', () => {
    //  console.log("The term searched for was " + input.value);
    // })


    // searchres.addEventListener("Keyup",function(){
    //   var xhrRequest = new XMLHttpRequest();
    //   xhrRequest.onload= function(){
      
    //   console.log(xhrRequest.response);
    //   };
    //   xhrRequest.open("GET","https://superheroapi.com/api/4647557051986505/search/"+ true);
    //   xhrRequest.send();
    // });

          //function for fetching result
            function myFunction() {
                var x = document.getElementById("mysearch").value;
                console.log(x);
                bodysection.innerHTML=" ";
              var xhrRequest = new XMLHttpRequest();
              xhrRequest.onload= function(){
              console.log("hi");
              console.log(xhrRequest.response);
                var myObj = JSON.parse(this.response);
                console.log(myObj);
                const arr = myObj.results;
              if(this.response=="error"){
                bodysection.innerHTML=" ";
                return;
              }
              else{
                   for(let i in arr){
                    
                // here we will create various elements and append to document dynamically
                      var container = document.createElement('div'); 
                      container.setAttribute('class','container');
                      container.appendChild(document.createElement('img')).src = arr[i].image.url;
                      newlink=document.createElement('a');
                      newlink.innerHTML=arr[i].name;
                      newlink .setAttribute('href', 'info.html');
                      container.appendChild(newlink);
                      
                        // div.appendChild(document.createElement('BUTTON')).innerHTML= ` <a href = "favourites.html" </a><h6>add-to-fav</h6>  `;
                    button = document.createElement("button");
                    button.innerHTML= "add-to-fav" ;
                    button.classList.add('add-to-fav-btn');
                    button.id = arr[i].id;
                    
                    
                    button.onclick = function(){updateStorage(arr[i].id);}; //creating local storage for favourite superhero page
                    console.log(arr[i].id);
                    container.appendChild(button);
                  
                    newlink.addEventListener('click', function(){ 
                      localStorage.setItem("superinfo", arr[i].id);//creating local storage for superhero details
                    

                    })
                    bodysection.appendChild(container);
                
              }
            }

              
              };
              xhrRequest.open('GET','https://www.superheroapi.com/api.php/4647557051986505/search/'+x, true);
              xhrRequest.send();
            }
            function updateStorage(value){

              var superhero123 = [];
              superhero123 = localStorage.getItem('superhero') ? JSON.parse(localStorage.getItem('superhero')):[]; // we created one array in a local storage
              superhero123.push(value);
              localStorage.setItem("superhero", JSON.stringify(superhero123)); 
            }
              
            //   let superheros = localStorage.getItem("superhero");
            //   if(superheros==null){
            //     superheros=[];
            //   }else{
            //     superheros=JSON.parse('superhero');
            //   }
            //   superheros.push(value);
            //   localStorage.setItem("superhero", JSON.stringify(superheros));
            // }
            const searchbtn = document.getElementById("search-btn");
            searchbtn.addEventListener("click", myFunction);
            const bodysection = document.getElementById("body-section");


