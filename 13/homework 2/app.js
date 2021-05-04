const root = document.getElementById('root');
const modifyEdit = document.getElementById('modifyItem');
const input = document.getElementById('modifyItemInput');
const addTwitterText = document.getElementById('modifyItemHeader');
const addTwittButton = document.querySelector('.addTweet');
const addTwitt = document.querySelector('#navigationButtons');
const cancel = document.querySelector('#cancelModification');
const saveChanges = document.querySelector('#saveModifiedItem');
const defaultPage = document.getElementById('tweetItems');
const listTweets = document.getElementById('list')
const alertMessage = document.getElementById('alertMessage')
let idLokalS=false;
let id = 0; let idArray = []; let likeArray = [];
let buttonGoToLikeStatus = true; let buttonCounterAgain = true;



input.maxLength = 140;
modifyEdit.style.display = 'none'

//функция видимость стартовой страницы
function backToDefaultPage() {
    defaultPage.style.display = 'unset'
    modifyEdit.style.display = 'none'
}

//добавить твит кнопка
function addTwittButtoname() {
    addTwittButton.addEventListener('click', function () {
        addTwitterText.innerText = 'Add Twitter'
        modifyEdit.style.display = 'unset'
        defaultPage.style.display = 'none'
        input.value = ''
        }
    );
}
addTwittButtoname()

//кнопка отмена
cancel.addEventListener('click', function name() {
    addTwitterText.innerText = 'Add Twitter'
    backToDefaultPage()
    }
);

//кнопка сохронить
saveChanges.addEventListener('click', function name() {
    addTwitterText.innerText = 'Add Twitter'
    if(errrorAlert(input.value)===true){
    if (idLokalS!==false) {
        let changeTweet = document.querySelectorAll('a');
        localStorage.setItem(changeTweet[idLokalS], input.value)
        changeTweet[idLokalS].innerText = input.value 
    } else {
        myFunction()
        changeTweeter()
        
    }
    backToDefaultPage()
    }
    }
);


//создание твита
function myFunction() {
    let btn = document.createElement('li');
    localStorage.setItem(id,input.value)
    btn.innerHTML = `<a id='${id}'>${input.value}
    </a><button id='rmTweet'>Remuve</button><button id='likeTweet'>Like</button>`;
    listTweets.appendChild(btn);
    id++
    likeButton()
    dellButton()
}

//кнопка лайк твита кнопки или анлайк
function likeButton() {
    let likeTweetButtonDom = document.querySelectorAll('#likeTweet');
    for( let i = 0; i < likeTweetButtonDom.length; i++) {
        likeTweetButtonDom[i].onclick = function like() {
            if (likeTweetButtonDom[i].outerText === 'Unlike'){
                likeAlert('like',i)
                likeTweetButtonDom[i].textContent = 'Like'
                likeTweetButtonDom[i].parentNode.classList.remove('unlike')
                likeArray.pop()
                likeButtonGenerator(likeArray)
            } else {
                likeAlert('unlike',i)
                likeTweetButtonDom[i].textContent = 'Unlike'
                likeTweetButtonDom[i].parentNode.className = 'unlike'
                likeArray.push(i)
                likeButtonGenerator(likeArray)
            }
      }	
    }
}

//функция удаление твита
function dellButton() {
    const testCool = document.querySelectorAll('#rmTweet');
    for( let i = 0; i < testCool.length; i++) {
        testCool[i].onclick = function like() {
        testCool[i].parentNode.remove()
      }	
    }
}

//создание go to liked 
function likeButtonGenerator(likeArr) {
    
    if (likeArr.length === 0) {
    addTwitt.querySelector('.likeBtn').remove() 
    buttonCounterAgain = true
    window.likeListButton()
    
    } else {
        if (buttonCounterAgain === true) {
        let btn = document.createElement('button');
        btn.className = 'likeBtn'
        btn.textContent = 'Go to liked';
        addTwitt.appendChild(btn);
        buttonCounterAgain = false
        window.likeListButton()
        }
        
    }
    
}

//лайк кнопка
function likeListButton() {
    let likeTweetButtonDom = document.querySelectorAll('#likeTweet');
    let allUnliked = document.querySelectorAll('li')
    let goButton = document.querySelector('.likeBtn')
    if(document.querySelector('.likeBtn')!==null){
 document.querySelector('.likeBtn').addEventListener('click', function name() {
        if (goButton.outerText === 'Go to liked') {
            document.querySelector('.likeBtn').innerText = 'Back'
            defaultPage.querySelector('h1').textContent = 'Liked Tweets';
            for( let i = 0; i < allUnliked.length; i++) {
                if (likeTweetButtonDom[i].outerText === 'Like'){
                    allUnliked[i].className = 'unlikedOff';
                } 
            }	
            addTwittButton.style.display = 'none';
        } else {
            defaultPage.querySelector('h1').textContent = 'Simple Twitter';
            document.querySelector('.likeBtn').innerText = 'Go to liked'
            for( let i = 0; i < allUnliked.length; i++) {
                    allUnliked[i].classList.remove('unlikedOff');
            }
            addTwittButton.style.display = 'unset';
            }
        })        
    }   
}

function errrorAlert(val) {
    if(val === ''){
    alertMessage.style.display = 'unset'
    alertMessage.textContent = 'Error'
    setTimeout(function name() {
    alertMessage.style.display = 'none'    
    },5000)
    } else {
        return true
    }
}

function likeAlert(val,i) {
    alertMessage.style.display = 'unset'
    if (val!=='like') {
        alertMessage.textContent = 'Ohhh you LIKE tweet '+i;
    } else {
        alertMessage.textContent = 'Ohhh you UNLIKE tweet '+i;
    }
    setTimeout(function name() {
    alertMessage.style.display = 'none'    
    },5000)
}


function changeTweeter() {
    let changeTweet = document.querySelectorAll('a');
    for (let index = 0; index < changeTweet.length; index++) {
        changeTweet[index].addEventListener('click', function () {
            addTwitterText.innerText = 'Add Twitter'
            modifyEdit.style.display = 'unset'
            defaultPage.style.display = 'none'
            input.value = localStorage.getItem(changeTweet[index].id)
            idLokalS = changeTweet[index].id
        }   
    );
    
    }
}
