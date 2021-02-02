const choiceContainer = document.querySelector('.choice-container');
const container = document.querySelector('.container');


const scene1 = {
    video: 'img/intro.mp4',
    name: 'Introduction',
    choices: [
        {
            text: 'Aller au musée se renseigner sur le vol',
            scene: 'scene2'
        },
        {
            text: 'Se renseigner sur la famille',
            scene: 'scene3'
        },
    ]
};
  
//scene2.js
const scene2 = {
    video: 'img/scene2.mp4',
    name: 'Aller au musée se renseigner sur le vol',
    choices: [
        {
            text: 'Interroger le responsable du musée',
            scene: 'scene4'
        },
        {
            text: 'Retourner au QG se renseigner sur la famille',
            scene: 'scene3'
        },
    ]
};
  
//scene3.js
const scene3 = {
    video: 'img/scene3.mp4',
    name: 'Se renseigner sur la famille',
    choices: [
        {
            text: 'Interviewer Auguste',
            scene: 'scene5'
        },
        {
            text: 'Interviewer Elisabeth',
            scene: 'scene6'
        },
    ]
};
  
//scene4.js
const scene4 = {
    video: 'img/scene4.mp4',
    name: 'Interroger le responsable du musée',
    choices: [
        {
            text: 'Interroger le gardien du musée',
            scene: 'scene7'
        },
        {
            text: 'Se renseigner sur la famille',
            scene: 'scene3'
        },
    ]
};

const scene5 = {
    video: 'img/scene5.mp4',
    name: 'Interviewer Auguste',
    choices: [
        {
            text: 'Demander plus d\'informations sur le vol de la chevalière',
            scene: 'scene8'
        },
        {
            text: 'Interviewer Elisabeth',
            scene: 'scene6'
        },
    ]
};

const scene6 = {
    video: 'img/scene6.mp4',
    name: 'Interviewer Elisabeth',
    choices: [
        {
            text: 'Interviewer Camille, la femme d\'Auguste',
            scene: 'scene7'
        },
        {
            text: 'Interviewer Auguste',
            scene: 'scene4'
        },
    ]
};

const scene7 = {
    video: 'img/scene7.mp4',
    name: 'Interroger le gardien du musée',
    choices: [
        {
            text: 'Se renseigner sur la famille',
            scene: 'scene3'
        },
        {
            text: 'Demander plus d\'informations au sujet des tensions avec Auguste',
            scene: 'scene4'
        },
    ]
};

const scene8 = {
    video: 'img/scene8.mp4',
    name: 'Demander plus d\'informations sur le vol de la chevalière',
    choices: [
        {
            text: 'Demander qui a accès à la salle de bain pendant son absence',
            scene: 'scene3'
        },
        {
            text: 'Le remercier et partir interroger Elisabeth',
            scene: 'scene6'
        },
    ]
};

const scenes = {
    scene1: scene1, 
    scene2: scene2,
    scene3: scene3,
    scene4: scene4,
    scene5: scene5,
    scene5: scene6,
    scene5: scene7,
    scene5: scene8,
};


const video = document.querySelector('#player')
let currentScene = scenes.scene1;
const buttons = document.querySelectorAll('.button');
const title = document.querySelector('#title');

video.addEventListener('ended', () => {
    choiceContainer.style.display = "flex";
    for(let i = 0;i<buttons.length;i++){
        buttons[i].addEventListener('click',()=>{
            choiceContainer.style.display = "none";
        })
    }
});

function changeScene (id) { 
    currentScene = scenes[id];
    currentScene.choices.forEach((choice, index) => {
        buttons[index].innerText = choice.text;
    });

    video.src = currentScene.video;
    title.innerText = currentScene.name;
    video.play();
};



function bindEvents() {
    buttons.forEach((button, index) => {
        
        button.addEventListener('click', () => {
            const sceneId = currentScene.choices[index].scene;
            changeScene(sceneId);
        });
    });
}
  
bindEvents();
setTimeout(()=>{
    changeScene('scene1');    
},1000)