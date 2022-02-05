const winblur = document.getElementById("iw");
const win = document.getElementById("infoWindow");
const name = document.getElementById("infoName");
const blurb = document.getElementById("infoBlurb");
const isroot = document.getElementById("infoSoc");
const ign = document.getElementById("IGN");

function show(input) {
    //fml
    if (input == "D_loaded"){
        name.innerHTML = D_loaded.name;
        ign.innerHTML = D_loaded.nick;
        blurb.innerHTML = D_loaded.blurb;
        isroot.href = D_loaded.namemc;
    }
    else if (input == "DirectorJohnson"){
        name.innerHTML = DirectorJohnson.name;
        ign.innerHTML = DirectorJohnson.nick;
        blurb.innerHTML = DirectorJohnson.blurb;
        isroot.href = DirectorJohnson.namemc;
    }
    else if (input == "Dragonworm"){
        name.innerHTML = Dragonworm.name;
        ign.innerHTML = Dragonworm.nick;
        blurb.innerHTML = Dragonworm.blurb;
        isroot.href = Dragonworm.namemc;
    }
    else if (input == "iAmZeiss"){
        name.innerHTML = iAmZeiss.name;
        ign.innerHTML = iAmZeiss.nick;
        blurb.innerHTML = iAmZeiss.blurb;
        isroot.href = iAmZeiss.namemc;
    }
    //Start of group leaders
    else if (input == "volker1"){
        name.innerHTML = volker1.name;
        ign.innerHTML = volker1.nick;
        blurb.innerHTML = volker1.blurb;
        isroot.href = volker1.namemc;
    }
    else if (input == "TimeOfWheel"){
        name.innerHTML = TimeOfWheel.name;
        ign.innerHTML = TimeOfWheel.nick;
        blurb.innerHTML = TimeOfWheel.blurb;
        isroot.href = TimeOfWheel.namemc;
    }
    else if (input == "Whygoodboyg"){
        name.innerHTML = Whygoodboyg.name;
        ign.innerHTML = Whygoodboyg.nick;
        blurb.innerHTML = Whygoodboyg.blurb;
        isroot.href = Whygoodboyg.namemc;
    }
    else if (input == "ichnemonidae"){
        name.innerHTML = ichnemonidae.name;
        ign.innerHTML = ichnemonidae.nick;
        blurb.innerHTML = ichnemonidae.blurb;
        isroot.href = ichnemonidae.namemc;
    }
    else if (input == "AgentoftheCCP"){
        name.innerHTML = AgentoftheCCP.name;
        ign.innerHTML = AgentoftheCCP.nick;
        blurb.innerHTML = AgentoftheCCP.blurb;
        isroot.href = AgentoftheCCP.namemc;
    }
    else if (input == "Eccentri"){
        name.innerHTML = Eccentri.name;
        ign.innerHTML = Eccentri.nick;
        blurb.innerHTML = Eccentri.blurb;
        isroot.href = Eccentri.namemc;
    }
    else if (input == "inoculant"){
        name.innerHTML = inoculant.name;
        ign.innerHTML = inoculant.nick;
        blurb.innerHTML = inoculant.blurb;
        isroot.href = inoculant.namemc;
    }
    else{
        name.innerHTML = "Error occurred.";
        ign.innerHTML = "invalid input!";
        blurb.innerHTML = "Please reload the page.";
        isroot.href = "leadership.html";
        isroot.innerHTML = "Click to reload";
    }

    win.style.display="block";
    winblur.style.display="block";
}
hide = () => {
    win.style.display="none";
    winblur.style.display="none";
}
//const args = commandBody.split(' ');
const D_loaded = {
    name:"D_loaded",
    nick:"D_loaded",
    blurb:"In August of 2013, D_loaded logged on to his new friend Ben\'s Minecraft server. It was here that he built the first Donfuer. The city was immediately griefed but the name, a supposed mistranslation of \"Father\'s Gift\", stuck and became the name for all the large bases made after. The Donfuerian empire grew slowly over the years as cities rose and fell on many different servers. D_loaded still is in Donfuer today, as its longest serving member.",
    namemc:"https://mine.ly/D_loaded.1"
}
const DirectorJohnson = {
    name:"DirectorJohnson",
    nick:"DirectorJohnson",
    blurb:"In April of 2017, a personal friend of MikelAx7 showed him videos about 2b2t. He was mildly interested but dismissive. 3 hours of playtime and 11 hours of queue later, he was hooked. After showing dragonworm the server weeks later, he followed him to Highland and later Donfuer. His membership record was spotty but now he fully committed his playtime to the success of Donfuer. He also created the former DonFuer website and is a developer of the DonHack client. He recently changed his IGN to DirectorJohnson.",
    namemc:"https://mine.ly/DirectorJohnson.1"
}
const Dragonworm = {
    name:"Dragonworm",
    nick:"Dragonworm",
    blurb:"Dragonworm got Minecraft when he was a kid in 2010. He learned about 2b2t from his IRL friend MikelAx7, both of them joining the group Highland. Things would quickly sour with Highland, and soon after he joined Donfuer. Dragonworm quickly became an elder after joining by proving his loyalty to D_loaded in a series of crusades on MozartRealms. Since then, he has managed the online presence of Donfuer. He is currently the 3rd oldest Donfuer member that is still around.",
    namemc:"https://mine.ly/dragonworm.1"
}
const iAmZeiss = {
    name:"iAmZeiss",
    nick:"Zeiss",
    blurb:"Zeiss joined 2b2t in mid 2020, soon joining a small group by the name of Crimson Star. He would build at many bases there, including Cumzone 2 and Adamantium. Zeiss would eventually become a leader, but then Crimson Star would fall inactive, and dissolve. Around this time, he joined Donfuer, and quickly rose up the ranks. He would merge his other group, Fate, into the Donfuer Spawn Rangers. After a stint with bad leaders within the Spawn Rangers, Zeiss would be offered the position of elder, which he stepped up and took, becoming the newest elder in Donfuer.",
    namemc:"https://mine.ly/iAmZeiss.1"
}
const volker1 = {
    name: "volker1",
    nick:"volker1",
    blurb:"volker1 became active on 2b2t in late 2020, joining Spawn Rangers with his friend KarixWolf. After a period of time in which he improved as a builder, became the first General in Rangers, created his own group (Spawn Virgins of 2b2t), and went to the +X worldborder, he was promoted to Man at arms, and later knight rank. He eventually earned Noble rank after helping lead the Spawn Rangers division. He created the new DonFuer website, and dedicates his limited playtime to DonFuer.",
    namemc: "https://mine.ly/volker1.2"
}
const TimeOfWheel = {
    name: "TimeOfWheel",
    nick:"MusicMaestro",
    blurb:"UNSET, also he is technically an elder",
    namemc:"https://mine.ly/TimeofWheel.1"
}
const Whygoodboyg = {
    name: "Whygoodboyg",
    nick:"Whygood",
    blurb:"UNSET",
    namemc:"https://mine.ly/whygoodboyg.1"
}
const ichnemonidae = {
    name: "ichnemonidae",
    nick:"Ichne",
    blurb:"UNSET",
    namemc:"https://mine.ly/ichnemonidae.1"
}
const AgentoftheCCP = {
    name: "AgentoftheCCP",
    nick:"Bonk",
    blurb:"AgentoftheCCP first found out about Donfuer in early 2020 because of the Donfuer 18 grief. He was very impressed by the builds in the grief video, and so he decided that he would jump on any chance he got to join Donfuer. It was in 2020 that he joined anarchy, and it wasn't until late 2021 that he spotted a message in a 9b9t discord advertising Donfuer. Agent joined the 9b9t branch, built at the 9b branch's base, and eventually worked his way up to being a branch leader.",
    namemc:"https://mine.ly/AgentoftheCCP.1"
}
const Eccentri = {
    name: "Eccentri",
    nick:"Exstatic",
    blurb:"UNSET",
    namemc:"https://mine.ly/Eccentri.1"
}
const fzed = {
    name: "fzed",
    nick:"fzed",
    blurb:"UNSET",
    namemc:"mine.ly/fzed.2"
}
const inoculant = {
    name:"inoculant",
    nick:"Mystxc",
    blurb:"UNSET",
    namemc:"mine.ly/Inoculant.1"
}