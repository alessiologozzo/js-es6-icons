const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    }
];

let main = document.getElementsByTagName("main")[0];

let select = document.getElementById("select");
select.addEventListener("change", changeFilter);

filterAll();

function changeFilter(){
    
    main.innerHTML = "";
    
    switch(select.value){

        case "all":
            filterAll();
            break;
        
        case "animals":
            filterAnimals();
            break;

        case "vegetables":
            filterVegetables();
            break;

        case "users":
            filterUsers();
            break;
    }
}

function filterAll(){

    for(let i = 0; i < icons.length; i++)
        createCard(icons[i]);
}

function filterAnimals(){
    
    for(let i = 0; i < icons.length; i++){
        if(icons[i].type == "animal")
            createCard(icons[i]);
    }
}

function filterVegetables(){
    
    for(let i = 0; i < icons.length; i++){
        if(icons[i].type == "vegetable")
            createCard(icons[i]);
    }
}

function filterUsers(){
    
    for(let i = 0; i < icons.length; i++){
        if(icons[i].type == "user")
            createCard(icons[i]);
    }
}

function createCard(icon){

    let col = document.createElement("div");
    col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "al-col-xl", "py-4", "gx-md-4", "gx-xl-5");

    let card = document.createElement("div");
    card.classList.add("al-card");

    let iconImg = document.createElement("i");
    iconImg.classList.add(icon.prefix + icon.family, icon.prefix + icon.name);

    switch(icon.type){

        case "animal":
            iconImg.classList.add("al-animal");
            break;

        case "vegetable":
            iconImg.classList.add("al-vegetable");
            break;

        case "user":
            iconImg.classList.add("al-user");
    }
    
    let iconName = document.createElement("h6");
    iconName.textContent = icon.name;

    card.appendChild(iconImg);
    card.appendChild(iconName);

    col.appendChild(card);

    main.appendChild(col);
}