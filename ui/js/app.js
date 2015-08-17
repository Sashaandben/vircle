function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

var definition = {smile:{title:"Smile",codes:[":)",":=)",":-)"]},"sad-smile":{title:"Sad Smile",codes:[":(",":=(",":-("]},"big-smile":{title:"Big Smile",codes:[":D",":=D",":-D",":d",":=d",":-d"]},cool:{title:"Cool",codes:["8)","8=)","8-)","B)","B=)","B-)","(cool)"]},wink:{title:"Wink",codes:[":o",":=o",":-o",":O",":=O",":-O"]},crying:{title:"Crying",codes:[";(",";-(",";=("]},sweating:{title:"Sweating",codes:["(sweat)","(:|"]},speechless:{title:"Speechless",codes:[":|",":=|",":-|"]},kiss:{title:"Kiss",codes:[":*",":=*",":-*"]},"tongue-out":{title:"Tongue Out",codes:[":P",":=P",":-P",":p",":=p",":-p"]},blush:{title:"Blush",codes:["(blush)",":$",":-$",":=$",':">']},wondering:{title:"Wondering",codes:[":^)"]},sleepy:{title:"Sleepy",codes:["|-)","I-)","I=)","(snooze)"]},dull:{title:"Dull",codes:["|(","|-(","|=("]},"in-love":{title:"In love",codes:["(inlove)"]},"evil-grin":{title:"Evil grin",codes:["]:)",">:)","(grin)"]},talking:{title:"Talking",codes:["(talk)"]},yawn:{title:"Yawn",codes:["(yawn)","|-()"]},puke:{title:"Puke",codes:["(puke)",":&",":-&",":=&"]},"doh!":{title:"Doh!",codes:["(doh)"]},angry:{title:"Angry",codes:[":@",":-@",":=@","x(","x-(","x=(","X(","X-(","X=("]},"it-wasnt-me":{title:"It wasn't me",codes:["(wasntme)"]},party:{title:"Party!!!",codes:["(party)"]},worried:{title:"Worried",codes:[":S",":-S",":=S",":s",":-s",":=s"]},mmm:{title:"Mmm...",codes:["(mm)"]},nerd:{title:"Nerd",codes:["8-|","B-|","8|","B|","8=|","B=|","(nerd)"]},"lips-sealed":{title:"Lips Sealed",codes:[":x",":-x",":X",":-X",":#",":-#",":=x",":=X",":=#"]},hi:{title:"Hi",codes:["(hi)"]},call:{title:"Call",codes:["(call)"]},devil:{title:"Devil",codes:["(devil)"]},angel:{title:"Angel",codes:["(angel)"]},envy:{title:"Envy",codes:["(envy)"]},wait:{title:"Wait",codes:["(wait)"]},bear:{title:"Bear",codes:["(bear)","(hug)"]},"make-up":{title:"Make-up",codes:["(makeup)","(kate)"]},"covered-laugh":{title:"Covered Laugh",codes:["(giggle)","(chuckle)"]},"clapping-hands":{title:"Clapping Hands",codes:["(clap)"]},thinking:{title:"Thinking",codes:["(think)",":?",":-?",":=?"]},bow:{title:"Bow",codes:["(bow)"]},rofl:{title:"Rolling on the floor laughing",codes:["(rofl)"]},whew:{title:"Whew",codes:["(whew)"]},happy:{title:"Happy",codes:["(happy)"]},smirking:{title:"Smirking",codes:["(smirk)"]},nodding:{title:"Nodding",codes:["(nod)"]},shaking:{title:"Shaking",codes:["(shake)"]},punch:{title:"Punch",codes:["(punch)"]},emo:{title:"Emo",codes:["(emo)"]},yes:{title:"Yes",codes:["(y)","(Y)","(ok)"]},no:{title:"No",codes:["(n)","(N)"]},handshake:{title:"Shaking Hands",codes:["(handshake)"]},skype:{title:"Skype",codes:["(skype)","(ss)"]},heart:{title:"Heart",codes:["(h)","<3","(H)","(l)","(L)"]},"broken-heart":{title:"Broken heart",codes:["(u)","(U)"]},mail:{title:"Mail",codes:["(e)","(m)"]},flower:{title:"Flower",codes:["(f)","(F)"]},rain:{title:"Rain",codes:["(rain)","(london)","(st)"]},sun:{title:"Sun",codes:["(sun)"]},time:{title:"Time",codes:["(o)","(O)","(time)"]},music:{title:"Music",codes:["(music)"]},movie:{title:"Movie",codes:["(~)","(film)","(movie)"]},phone:{title:"Phone",codes:["(mp)","(ph)"]},coffee:{title:"Coffee",codes:["(coffee)"]},pizza:{title:"Pizza",codes:["(pizza)","(pi)"]},cash:{title:"Cash",codes:["(cash)","(mo)","($)"]},muscle:{title:"Muscle",codes:["(muscle)","(flex)"]},cake:{title:"Cake",codes:["(^)","(cake)"]},beer:{title:"Beer",codes:["(beer)"]},drink:{title:"Drink",codes:["(d)","(D)"]},dance:{title:"Dance",codes:["(dance)","\\o/","\\:D/","\\:d/"]},ninja:{title:"Ninja",codes:["(ninja)"]},star:{title:"Star",codes:["(*)"]},mooning:{title:"Mooning",codes:["(mooning)"]},finger:{title:"Finger",codes:["(finger)"]},bandit:{title:"Bandit",codes:["(bandit)"]},drunk:{title:"Drunk",codes:["(drunk)"]},smoking:{title:"Smoking",codes:["(smoking)","(smoke)","(ci)"]},toivo:{title:"Toivo",codes:["(toivo)"]},rock:{title:"Rock",codes:["(rock)"]},headbang:{title:"Headbang",codes:["(headbang)","(banghead)"]},bug:{title:"Bug",codes:["(bug)"]},fubar:{title:"Fubar",codes:["(fubar)"]},poolparty:{title:"Poolparty",codes:["(poolparty)"]},swearing:{title:"Swearing",codes:["(swear)"]},tmi:{title:"TMI",codes:["(tmi)"]},heidy:{title:"Heidy",codes:["(heidy)"]},myspace:{title:"MySpace",codes:["(MySpace)"]},malthe:{title:"Malthe",codes:["(malthe)"]},tauri:{title:"Tauri",codes:["(tauri)"]},priidu:{title:"Priidu",codes:["(priidu)"]}};

var currentLine = 1;

var vircleChat = [
    {messageId: 0, name: "vircle", auto: false, popup: null, message: 'Hi Irene, are you ok?', avatar: "", track: "150814-019.wav", date: new Date()},
    {messageId: 1, name: "vircle", auto: false, popup: null, message: "I picked up from your last phone conversation that you were upset about something", avatar:'', track: "150814-002.wav", date: new Date()},
    {messageId: 2, name: "vircle", auto: false, popup: null, message: "You cried and you've been using 42% more negative adjectives than your daily average in your emails and messaging.", avatar:'', track: "150814-004.wav", date: new Date()},
    {messageId: 3, name: "vircle", auto: false, popup: null, message: "Thank you. That’s what Vircle is here for. So, what happened Irene?.", avatar:'', track: "150814-006.wav", date: new Date()},
    {messageId: 4, name: "vircle", auto: false, popup: null, message: "I'm sorry to hear that.", avatar:'', track: "150814-007.wav", date: new Date()},
    {messageId: 5, name: "vircle", auto: false, popup: null, message: "That seems like ‘all or nothing thinking’ - a distortion of reality. Before we get to further intervention, let me crawl the net to show you relevant data for you.",
    avatar:'', track: "150814-009.wav", date: new Date()},
    {messageId: 6, name: "vircle",  auto: false, popup: null, message: "So Linkedin data shows, that …. 16,000 people with a similar profile to yours found jobs in the Bay area in the last three months.", avatar:'', track: "150814-010.wav", date: new Date()},
    {messageId: 7, name: "vircle",  auto: false, popup: null, message: "From what I know about you, you respond most optimally to Mindfulness Based Stress Reduction and being with a close friend. Let me see …", avatar:'', track: "150814-012.wav", date: new Date()},
    {messageId: 8, name: "vircle",  auto: false, popup: 1, message: "", avatar:'', track: "150814-015.wav", date: new Date()},
    {messageId: 9, name: "vircle",  auto: false, popup: null, message: "Before you go, I want to leave you with this", avatar:'', track: "150814-016.wav", date: new Date()},
    {messageId: 10, name: "vircle", auto: true, popup: null, message: "<img src='img/quote.png'>", avatar:'', track: "", date: new Date()},
    {messageId: 11, name: "vircle", auto: false, popup: null, message: "It’s never the changes you want, that change everything.", avatar:'', track: "150814-017.wav", date: new Date()},
    {messageId: 12, name: "vircle", auto: false, popup: 2, message: "", avatar:'', track: "", date: new Date()},

    ];

var userChat = [null,null,
    {messageId: 2, name: "irene", auto: false, popup: null, message: "How could you tell?", avatar:'', track: "", date: new Date()},
    {messageId: 3, name: "irene", auto: false, popup: null, message: "That’s very observant of you.", avatar:'', track: "", date: new Date()},
    {messageId: 4, name: "irene", auto: false, popup: null, message: "I lost my job today.", avatar:'', track: "", date: new Date()},
    {messageId: 5, name: "irene", auto: false, popup: null, message: "Yes, my life is over.", avatar:'', track: "", date: new Date()},
    {messageId: 6, name: "irene", auto: false, popup: null, message: "That would be helpful.", avatar:'', track: "", date: new Date()},
    {messageId: 7, name: "irene", auto: false, popup: null, message: "Well yes. But I still feel very stressed and that I have failed.", avatar:'', track: "", date: new Date()},
    null,
    {messageId: 9, name: "irene", auto: false, popup: null, message: "30 min body scan.", avatar:'', track: "", date: new Date()},
    null,
    null
];

var users = [{name: "vircle1"}];

var username, userId, newUser, avatar = false, lastDate, messagesLoaded, usersLoaded;
var $$ = Dom7;
var vircle7 = new Framework7({
    modalTitle: 'Hi, Irene',
    animateNavBackIcon: true,
});


// Format date
function formatDay(d) {
    var date = new Date(d);
    var weekDay = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' ')[date.getDay()];
    var day = date.getDate();
    var month = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ')[date.getMonth()];
    return weekDay + ', ' + month + ' ' + day;
}
function formatTime(d) {
    var date = new Date(d);
    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    return hours + ':' + mins;
}
function formatDate(d) {
    return formatDay(d) + ', <span>' + formatTime(d) + '</span>';
}

// Initial load
function stripMessage(messageText) {
    messageText = $.emoticons.replace(messageText);
    if (!(messageText.indexOf('<img') === 0 && messageText.split('<').length === 2 || messageText.indexOf('<span class="emoticon') >= 0)) {
        messageText = messageText.replace(/>/g, '&gt;').replace(/</g, '&lt;');
    }
    messageText.replace(/script/g, 'scr\bipt');
    return messageText;
}


function loadMessageVircle(line){
    if(line < vircleChat.length){
        var myLine = vircleChat[line];
        if(myLine.popup != null){
              vircle7.popup('.popup-options-' + myLine.popup);
        }else{
            vircle_reply(myLine.message);
            voice(myLine.track);
        }
    }
}

function sayLine( line ){
    var myLine = vircleChat[line];
    if(typeof myLine != "undefined"){
        voice(myLine.track);
    }
}

function vircle_reply(inputMessage){

    var replay_txt = inputMessage;
    day = formatDay(new Date());
    time = formatTime(new Date());

    var response = {
        text: stripMessage(replay_txt),
        type: 'received',
        name: "vircle",
        avatar: '',
        day: day,
        time: time
    };

    vircle7.addMessage(response);
}

$$('.popup-options-1').on('closed', function () {
  console.log('options Popup closed');
  $$('.messages-content').click();
});

$$('.popup-options-1').on('opened', function () {
  console.log('options Popup opened');
  sayLine(8);
});


$$('.popup-options-2').on('closed', function () {
  console.log('rating Popup closed');
  window.location.href = "../index.html";
});

$$('.messages-content').on('click', function () {
    $$('.messages-content').click();
});
// Send message
$$('.messages-content').on('click', function () {

    currentLine = currentLine + 1;

    var userLine = userChat[currentLine];
    if(userLine != null){
        var textarea = $$('.messagebar textarea');
        var messageText = userLine.message; //textarea.val();
        if (messageText.length === 0) return;
        textarea.val('').trigger('change');
        var date = new Date();
        var offset = date.getTimezoneOffset() * 60 * 1000;
        date = date.getTime() + offset;
        var day, time;
        if (!lastDate || (lastDate && date - lastDate > 1000 * 60 * 5)) {
            day = formatDay(date);
            time = formatTime(date);
            lastDate = date;
        }

        // Add Message
        vircle7.addMessage({
            text: stripMessage(messageText),
            type: 'sent',
            name: username,
            avatar: avatar,
            day: day,
            time: time
        });
    }

    // vircle reply.
    vircle7.showIndicator();
    setTimeout(function () {
        vircle7.hideIndicator();
        loadMessageVircle(currentLine)
    }, 2000);



});

function restartDialog(){
    window.location.reload();
}

function voice(track){
    //stop all sounds
    window.tracks.forEach(function (sound) {
        sound.pause();
        sound.currentTime = 0;
    });
    if(track != ""){
        jBeep('voice/' + track);
    }
}

// Start the demo.
function start() {
    window.tracks = [];
    voice(vircleChat[0].track);
        vircle7.modal({
            title: vircleChat[0].message,
            text: '',
            buttons: [
                {
                    text: 'Not right now',
                    onClick: function() {
                      vircle7.alert('ok, bye!', function(){ window.location.href = "../index.html";});
                    }
                },
                {
                    text: 'Hey Vircle!',
                    onClick: function() {
                        //start dialog.
                        currentLine=1;
                        loadMessageVircle(currentLine);
                    }
                }
            ]
        });
}
start();
