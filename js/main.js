const choiceContainer = document.querySelector('.choice-container');
const container = document.querySelector('.container');
const denoncer = document.querySelector('.denoncer');
const denoncerContainer = document.querySelector('.denoncer-container');
const retour = document.querySelector('.choice8');
const reponse = document.querySelectorAll('.different-choice');

const loader = document.querySelector('.loader');
const skip = document.querySelector('.skip');



const scene1 = {
    video: 'img/intro.m4v',
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
    video: 'img/scene2.m4v',
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
    video: 'img/scene3.m4v',
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
    video: 'img/scene4.m4v',
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
    video: 'img/scene5.m4v',
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
    video: 'img/scene6.m4v',
    name: 'Interviewer Elisabeth',
    choices: [
        {
            text: 'Interviewer Camille, la femme d\'Auguste',
            scene: 'scene9'
        },
        {
            text: 'Interviewer Auguste',
            scene: 'scene5'
        },
    ]
};

const scene7 = {
    video: 'img/scene7.m4v',
    name: 'Interroger le gardien du musée',
    choices: [
        {
            text: 'Se renseigner sur la famille',
            scene: 'scene3'
        },
        {
            text: 'Demander plus d\'informations au sujet des tensions avec Auguste',
            scene: 'scene10'
        },
    ]
};

const scene8 = {
    video: 'img/scene8.m4v',
    name: 'Demander plus d\'informations sur le vol de la chevalière',
    choices: [
        {
            text: 'Demander qui a accès à la salle de bain pendant son absence',
            scene: 'scene11'
        },
        {
            text: 'Le remercier et partir interroger Elisabeth',
            scene: 'scene6'
        },
    ]
};

const scene9 = {
    video: 'img/scene9.m4v',
    name: 'Interviewer Camille, la femme d\'Auguste scene9',
    choices: [
        {
            text: 'Interviewer Auguste ',
            scene: 'scene5'
        },
        {
            text: 'Aller se renseigner au musée',
            scene: 'scene2'
        },
    ]
};

const scene10 = {
    video: 'img/scene10.m4v',
    name: 'Demander plus d\'informations au sujet des tensions avec Auguste ',
    choices: [
        {
            text: 'Rester groupé avec le gardien et le suivre',
            scene: 'scene14'
        },
        {
            text: 'Se séparer pour voir si cette coupure est volontaire',
            scene: 'scene15'
        },
    ]
};

const scene11 = {
    video: 'img/scene11.m4v',
    name: 'Demander qui a accès à la salle de bain pendant son absence',
    choices: [
        {
            text: 'Interviewer le majordome',
            scene: 'scene12'
        },
        {
            text: 'Aller au musée se renseigner',
            scene: 'scene2'
        },
    ]
};

const scene12 = {
    video: 'img/scene12.m4v',
    name: 'Interviewer le majordome',
    choices: [
        {
            text: 'Interviewer Diego le jardinier',
            scene: 'scene13'
        },

    ]
};


const scene13 = {
    video: 'img/scene13.m4v',
    name: 'Interviewer Diego le jardinier',
    choices: [
        {
            text: 'Interviewer Elisabeth',
            scene: 'scene6'
        },
        {
            text: 'Aller au musée se renseigner',
            scene: 'scene2'
        },
    ]
};

const scene14 = {
    video: 'img/scene14.m4v',
    name: 'Rester groupé avec le gardien et le suivre',
    choices: [
        {
            text: 'Se mettre à plat ventre',
            scene: 'scene16'
        },
        {
            text: 'Continuer à courir',
            scene: 'scene17'
        },
    ]
};

const scene15 = {
    video: 'img/scene15.m4v',
    name: 'Se séparer pour voir si cette coupure est volontaire',
    choices: [
        {
            text: 'Re rentrer dans le musée',
            scene: 'scene18'
        },
        {
            text: '(S\'enfuir et) Se renseigner sur la famille',
            scene: 'scene3'
        },
    ]
};

const scene16 = {
    video: 'img/scene16.m4v',
    name: 'Se mettre à plat ventre',
    choices: [
        {
            text: 'Rester à plat ventre',
            scene: 'scene20'
        },
        {
            text: 'Se lever doucement et commencer à faire le chemin inverse',
            scene: 'scene21'
        },
    ]
};

const scene17 = {
    video: 'img/scene17.m4v',
    name: 'Continuer à courir',
    choices: [
        {
            text: 'defaite',
            scene: 'mort'
        },
       
    ]
};

const scene18 = {
    video: 'img/scene18.m4v',
    name: 'Rerentrer dans le musée',
    choices: [
        {
            text: 'Defaite',
            scene: 'mort'
        },
    ]
};

const scene19 = {
    video: 'img/scene19.m4v',
    name: 'Rester à plat ventre',
    choices: [
        {
            text: 'Le suivre',
            scene: 'scene21'
        },
        {
            text: 'Ne plus le suivre',
            scene: 'scene22'
        },
    ]
};

const scene20 = {
    video: 'img/scene20.m4v',
    name: 'Se lever doucement et commencer à faire le chemin inverse',
    choices: [
        {
            text: 'Defaite',
            scene: 'mort'
        },
    ]
};

const scene21 = {
    video: 'img/scene21.m4v',
    name: 'Se renseigner sur la famille',
    choices: [
        {
            text: 'Le suivre',
            scene: 'scene3'
        },

    ]
};

const scene22 = {
    video: 'img/scene22.m4v',
    name: 'Ne pas le suivre',
    choices: [
        {
            text: 'Defaite',
            scene: 'mort'
        },

    ]
};

const victoire = {
    video: 'img/victoire.m4v',
    name: 'Félicitation vous avez réussi avec brio',
    choices: [
        {
            text: 'Félicitation vous avez réussi avec brio',
            scene: 'scene1'
        },

    ]
};

const mort = {
    video: 'img/mort.m4v',
    name: 'essayes encore',
    choices: [
        {
            text: 'Retour au debut',
            scene: 'scene1'
        },

    ]
};

const scenes = {
    scene1: scene1, 
    scene2: scene2,
    scene3: scene3,
    scene4: scene4,
    scene5: scene5,
    scene6: scene6,
    scene7: scene7,
    scene8: scene8,
    scene9: scene9,
    scene10: scene10,
    scene11: scene11,
    scene12: scene12,
    scene13: scene13,
    scene14: scene14,
    scene15: scene15,
    scene16: scene16,
    scene17: scene17,
    scene18: scene18,
    scene19: scene19,
    scene20: scene20,
    scene21: scene21,
    scene22: scene22,
    victoire: victoire,
    mort: mort,
};


const video = document.querySelector('#player')
let currentScene = scenes.scene1;
const buttons = document.querySelectorAll('.button');
const title = document.querySelector('#title');

video.addEventListener('ended', () => {
    choiceContainer.classList.add('active');
    for(let i = 0;i<buttons.length;i++){
        buttons[i].addEventListener('click',()=>{
            choiceContainer.classList.remove('active');
        })
    }
});

const pauseContainer = document.querySelector('.pause');

let paused = false;

video.addEventListener('click', ()=>{
    if(paused){
        video.play();
        paused = false;
        pauseContainer.classList.remove('active');
    }
    else{
        video.pause();
        paused = true;
        pauseContainer.classList.add('active');
    }
})

video.addEventListener('loadeddata',()=>{
    loader.style.display = "none";
    console.log(video.src);
    video.play();
})

function changeScene (id) { 
    let j = 0;
    buttons[1].style.display = 'inherit';
    currentScene = scenes[id];
    currentScene.choices.forEach((choice, index) => {
        buttons[index].innerText = choice.text;

        j++;

       
        
    });
    if(j == 1){
        buttons[1].style.display = 'none';
    }

    loader.style.display = "unset";
    video.src = currentScene.video;
    // title.innerText = currentScene.name;
   
};



function bindEvents() {
    buttons.forEach((button, index) => {
        
        button.addEventListener('click', () => {
            const sceneId = currentScene.choices[index].scene;
            changeScene(sceneId);
        });
    });
}
  
denoncer.addEventListener('click',()=>{
    denoncerContainer.classList.add('active');
    choiceContainer.classList.remove('active');
})

retour.addEventListener('click',()=>{
    denoncerContainer.classList.remove('active');
    choiceContainer.classList.add('active');
})

bindEvents();

changeScene('scene1');  


let attempts = 3;


for(let i = 0;i<reponse.length - 1; i++){
    reponse[i].addEventListener('click',()=>{
        if(attempts > 0){
            if(i == 2){
                denoncerContainer.classList.remove('active');
                choiceContainer.style.display = "flex";
                changeScene('victoire');  
            }
            else{
                reponse[i].style.backgroundColor = 'red';
                attempts--;
            }
        }
        if(attempts <= 0){
            alert('tu n as plus aucun essaie');
        }
    })
}


skip.addEventListener('click',()=>{
    video.currentTime += 2000;
})