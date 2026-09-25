/*site by volker1*/
const dom = {
    winblur: document.querySelector("#iw"),
    win: document.querySelector("#infoWindow"),
    name: document.querySelector("#infoName"),
    blurb: document.querySelector("#infoBlurb"),
    isroot: document.querySelector("#infoSoc"),
    ign: document.querySelector("#IGN"),

    leader_root: document.querySelector(".elders"),
}

const leadership = [
    {
        name: "D_loaded",
        blurb: "In August of 2013, D_loaded logged on to his new friend Ben\'s Minecraft server. It was here that he built the first Donfuer. The city was immediately griefed but the name, a supposed mistranslation of \"Father\'s Gift\", stuck and became the name for all the large bases made after. The Donfuerian empire grew slowly over the years as cities rose and fell on many different servers. D_loaded still is in Donfuer today, as its longest serving member.",
        image: "d-loaded.png",
        namemc: "https://mine.ly/D_loaded.1"
    },
    {
        name: "Dragonworm",
        blurb: "Dragonworm got Minecraft when he was a kid in 2010. He learned about 2b2t from his IRL friend MikelAx7, both of them joining the group Highland. Things would quickly sour with Highland, and soon after he joined Donfuer. Dragonworm quickly became an elder after joining by proving his loyalty to D_loaded in a series of crusades on MozartRealms. Since then, he has managed the online presence of Donfuer. He is currently the 3rd oldest Donfuer member that is still around.",
        image: "dragonworm.png"
    },
    {
        name: "Volker1",
        blurb: "After a couple years of dormancy on 2b2t, volker1 decided to return and \"actually escape spawn this time for realz\". He applied to DonFuer's newly created Spawn Rangers group and made many friends, both in the group and out. He was very active, and was invited to DonFuer 21 with a couple friends. D_loaded eventually offered him leadership of Spawn Rangers, which he accepted. He set to work improving the group by building a new website from the ground up, getting more high-ranking Donfuerians active in Rangers, and more.",
        image: "volker.png"
    }
]

for (let leader of leadership) {
    elem = document.createElement("div")
    elem.classList = "rawbg"

    image = document.createElement("img")
    image.src = `./skins/${leader.image}`
    image.alt = `${leader.name}'s skin`
    elem.appendChild(image)

    username = document.createElement("h3")
    username.innerText = leader.name
    elem.appendChild(username)

    elem.addEventListener("click", () => {
        console.log(leader.name)

        // have to interop with code I wrote over a year ago 🗿
        dom.winblur.style.display = "block"
        dom.win.style.display = "block"

        dom.name.innerText = leader.name
        dom.blurb.innerText = leader.blurb
    })

    dom.leader_root.appendChild(elem)
}

function hide() {
    dom.win.style.display="none";
    dom.winblur.style.display="none";
}
