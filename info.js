    const bodysection= document.getElementById('body-section');
    const home = document.getElementById('homepage');
    var id = localStorage.getItem('superinfo');
    console.log(id);

    // function to fetch data through id
    function fetchMovie(){
        bodysection.innerHTML = "";
        var xhrRequest = new XMLHttpRequest();
        xhrRequest.onload = function(){
            console.log("hi");
            console.log(xhrRequest.response);
            var myObj = JSON.parse(this.response);
            console.log(myObj);
            
            if(this.response=="error"){
            bodysection.innerHTML=" ";
            return;
            }
            else{

            
            
                    var container = document.createElement('div'); 
                    container.setAttribute('class','container');
                    container.appendChild(document.createElement('p')).innerHTML= '<h1> ' +myObj.name+'</h1>';
                    container.appendChild(document.createElement('img')).src = myObj.image.url;
                    
                var div = document.createElement('div');
                    div.setAttribute('id','power');
                    div.innerHTML='<h1>POWER</h1><h4>Intelligence: '+myObj.powerstats.intelligence+'</h4><h4>strength: '+myObj.powerstats.strength+'</h4><h4>Speed: '+myObj.powerstats.speed+'</h4><h4>Durability: '+myObj.powerstats.durability+'</h4><h4>Power: '+myObj.powerstats.power+'</h4><h4>Combat: '+myObj.powerstats.combat+'</h4>';
                    container.appendChild(div);
                    bodysection.appendChild(container);
                
            }
            

            
            };
            xhrRequest.open('GET','https://www.superheroapi.com/api.php/4647557051986505/'+id, true);
            xhrRequest.send();
            }
            fetchMovie();
            home.addEventListener('click', function(){ // when we click home icon it will remove the item from local storage
                localStorage.removeItem('superinfo'); 
            })