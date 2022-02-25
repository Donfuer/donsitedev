const winblur = document.getElementById("iw");
const win = document.getElementById("infoWindow");
const name = document.getElementById("infoName");
const blurb = document.getElementById("infoBlurb");
const isroot = document.getElementById("infoSoc");
const ign = document.getElementById("IGN");
function show(input) {
    name.innerHTML = names[input];
    ign.innerHTML = nicks[input];
    blurb.innerHTML = blurbs[input];
    isroot.href = namemcs[input];

    win.style.display="block";
    winblur.style.display="block";
}
hide = () => {
    win.style.display="none";
    winblur.style.display="none";
}
const names = ["D_loaded","DirectorJohnson","Dragonworm","iAmZeiss","volker1","TimeOfWheel","Whygoodboyg","ichnemonidae","AgentoftheCCP","Eccentri","fzed","inoculant"];
const nicks = ["D_loaded","DirectorJohnson","Dragonworm","Zeiss","volker1","MusicMaestro","Whygood","ichne","Bonk","Exstatic","fzed","Mystxc"];
const blurbs = ["In August of 2013, D_loaded logged on to his new friend Ben\'s Minecraft server. It was here that he built the first Donfuer. The city was immediately griefed but the name, a supposed mistranslation of \"Father\'s Gift\", stuck and became the name for all the large bases made after. The Donfuerian empire grew slowly over the years as cities rose and fell on many different servers. D_loaded still is in Donfuer today, as its longest serving member.",
"In April of 2017, a personal friend of MikelAx7 showed him videos about 2b2t. He was mildly interested but dismissive. 3 hours of playtime and 11 hours of queue later, he was hooked. After showing dragonworm the server weeks later, he followed him to Highland and later Donfuer. His membership record was spotty but now he fully committed his playtime to the success of Donfuer. He also created the former DonFuer website and is a developer of the DonHack client. He recently changed his IGN to DirectorJohnson.",
"Dragonworm got Minecraft when he was a kid in 2010. He learned about 2b2t from his IRL friend MikelAx7, both of them joining the group Highland. Things would quickly sour with Highland, and soon after he joined Donfuer. Dragonworm quickly became an elder after joining by proving his loyalty to D_loaded in a series of crusades on MozartRealms. Since then, he has managed the online presence of Donfuer. He is currently the 3rd oldest Donfuer member that is still around.",
"Zeiss joined 2b2t in mid 2020, soon joining a small group by the name of Crimson Star. He would build at many bases there, including Cumzone 2 and Adamantium. Zeiss would eventually become a leader, but then Crimson Star would fall inactive, and dissolve. Around this time, he joined Donfuer, and quickly rose up the ranks. He would merge his other group, Fate, into the Donfuer Spawn Rangers. After a stint with bad leaders within the Spawn Rangers, Zeiss would be offered the position of elder, which he stepped up and took, becoming the newest elder in Donfuer.",
"volker1 became active on 2b2t in late 2020, joining Spawn Rangers with his friend KarixWolf. After a period of time in which he improved as a builder, became the first General in Rangers, created his own group (Spawn Virgins of 2b2t), and went to the +X worldborder, he was promoted to Man at arms, and later knight rank. He eventually earned Noble rank after helping lead the Spawn Rangers division. He created the new DonFuer website, and dedicates his limited playtime to DonFuer.",
"TimeOfWheel joined Donfuer in April 2020 on a server called DMC. After that server closed the branch moved to NetherAnarchy. Following NetherAnarchy’s subsequent closure TimeOfWheel created the Phoenix Anarchy branch and is currently leading that branch.",
"Whygoodboyg (Whygood) first got into Minecraft back in 2014 when Minecraft got huge. Whygood used to watch TheCampingRusher and his series of factions. Whygood joined 2b2t in July 2016 after Rusher made his infamous 2b2t series. He hated waiting in queue all the time so, in August of 2016, he joined a server called AnarchyHeroes where he met D_loaded. Whygood joined DonFuer that same month and since then has been a major positive force for the faction as a whole.",
"Sister Ichne first arrived in Donfuer during a hard time in the land of Eldham, She had spent years hearing stories of grand cities, destructive calamities, and high politics. An administrator at heart, she arrived to fix the mistakes of the previous despots, and under her leadership Donfuer in Eldham has flourished into a formidable and respectable state, its faith blooming, and its community blossoming.",
"AgentoftheCCP first found out about Donfuer in early 2020 because of the Donfuer 18 grief. He was very impressed by the builds in the grief video, and so he decided that he would jump on any chance he got to join Donfuer. It was in 2020 that he joined anarchy, and it wasn't until late 2021 that he spotted a message in a 9b9t discord advertising Donfuer. Agent joined the 9b9t branch, built at the 9b branch's base, and eventually worked his way up to being a branch leader.",
"UNSET",
"fzed plays casually, building and helping where needed. Partly runs PA branch of Donfuer. DM fzed for PA-related questions if you want them answered",
"UNSET"
];
const namemcs = ["https://mine.ly/D_loaded.1","https://mine.ly/DirectorJohnson.1","https://mine.ly/dragonworm.1",
"https://mine.ly/iAmZeiss.1","https://mine.ly/volker1.2","https://mine.ly/TimeofWheel.1",
"https://mine.ly/whygoodboyg.1","https://mine.ly/ichnemonidae.1","https://mine.ly/AgentoftheCCP.1",
"https://mine.ly/Eccentri.1","https://mine.ly/fzed.2","https://mine.ly/Inoculant.1"];