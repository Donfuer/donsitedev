/*site by volker1*/
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
const names = ["D_loaded","DirectorJohnson","Dragonworm","iAmZeiss","TimeOfWheel"];
const nicks = ["D_loaded","DirectorJohnson","Dragonworm","Zeiss","MusicMaestro"];
const blurbs = ["In August of 2013, D_loaded logged on to his new friend Ben\'s Minecraft server. It was here that he built the first Donfuer. The city was immediately griefed but the name, a supposed mistranslation of \"Father\'s Gift\", stuck and became the name for all the large bases made after. The Donfuerian empire grew slowly over the years as cities rose and fell on many different servers. D_loaded still is in Donfuer today, as its longest serving member.",
"In April of 2017, a personal friend of MikelAx7 showed him videos about 2b2t. He was mildly interested but dismissive. 3 hours of playtime and 11 hours of queue later, he was hooked. After showing dragonworm the server weeks later, he followed him to Highland and later Donfuer. His membership record was spotty but now he fully committed his playtime to the success of Donfuer. He also created the former DonFuer website and is a developer of the DonHack client. He recently changed his IGN to DirectorJohnson.",
"Dragonworm got Minecraft when he was a kid in 2010. He learned about 2b2t from his IRL friend MikelAx7, both of them joining the group Highland. Things would quickly sour with Highland, and soon after he joined Donfuer. Dragonworm quickly became an elder after joining by proving his loyalty to D_loaded in a series of crusades on MozartRealms. Since then, he has managed the online presence of Donfuer. He is currently the 3rd oldest Donfuer member that is still around.",
"Zeiss joined 2b2t in mid 2020, soon joining a small group by the name of Crimson Star. He would build at many bases there, including Cumzone 2 and Adamantium. Zeiss would eventually become a leader, but then Crimson Star would fall inactive, and dissolve. Around this time, he joined Donfuer, and quickly rose up the ranks. He would merge his other group, Fate, into the Donfuer Rangers. After a stint with bad leaders within the Rangers, Zeiss would be offered the position of elder, which he stepped up and took, becoming the newest elder in Donfuer.",
"TimeOfWheel joined Donfuer in April 2020 on a server called DMC. After that server closed the branch moved to NetherAnarchy. Following NetherAnarchy’s subsequent closure TimeOfWheel created the Phoenix Anarchy branch and is currently leading that branch.",
];
const namemcs = ["https://mine.ly/D_loaded.1","https://mine.ly/DirectorJohnson.1","https://mine.ly/dragonworm.1",
"https://mine.ly/iAmZeiss.1","https://mine.ly/TimeofWheel.1",
];