/* DonFuer Wiki, shared chrome builder.
 *
 * Every wiki page includes this script. It generates the top header, the
 * sidebar navigation, and the footer, so individual pages only contain their
 * own <article> content.
 *
 *  To add a NEW PAGE:    copy _template.html, edit the <title>, the
 *                          <body data-active / data-crumb> attributes, and the
 *                          <article> content. That's it.
 *  To add a SIDEBAR LINK: add one line to the NAV array below — it then
 *                          appears in the sidebar of every page automatically.
 */
(function () {
  // central navigation
  var NAV = [
    { label: "Main Page", href: "/wiki/", key: "main" },
    { label: "General History", href: "/wiki/history/", key: "history" },
    { label: "Bases", href: "/wiki/bases/", key: "bases" },
    { label: "Leadership", href: "/wiki/leadership/", key: "leadership" },
    { label: "Ranks", href: "/wiki/ranks/", key: "ranks" },
    { label: "DonFuer 28", href: "/wiki/pages/donfuer28/", key: "donfuer28"}
  ];
  var OFFWIKI = [
    { label: "Main Site", href: "/" },
    { label: "Apply", href: "/apply" },
    { label: "Discord", href: "/discord" }
  ];

  var body   = document.body;
  var active = body.getAttribute("data-active") || "";   // which NAV key is current
  var crumb  = body.getAttribute("data-crumb")  || "";   // breadcrumb label

  // pull the page's own content out before we rebuild the body
  var article = document.querySelector(".article");
  if (article) article.parentNode.removeChild(article);

  function links(list) {
    return list.map(function (n) {
      var cls = (n.key && n.key === active) ? ' class="active"' : '';
      return '<a href="' + n.href + '"' + cls + '>' + n.label + '</a>';
    }).join("");
  }

  var crumbHtml = crumb
    ? '<span class="crumb"><a href="/wiki/">DonFuer Wiki</a> &rsaquo; ' + crumb + '</span>'
    : '';

  body.innerHTML =
    '<div class="wikihead">' +
      '<header class="wikitop">' +
        '<img src="/assets/newIcon.png" alt="DonFuer logo">' +
        '<h1>DonFuer Wiki<small>An archive of the DonFuer building group</small></h1>' +
      '</header>' +
      '<nav class="wikibar">' +
        crumbHtml +
        '<a href="/"> ← Back to Site</a>' +
        '<span class="sep">|</span>' +
        '<a href="/discord">Discord</a>' +
      '</nav>' +
    '</div>' +
    '<div class="wrap">' +
      '<aside class="wikinav">' +
        '<div class="seclabel">Navigation</div>' + links(NAV) +
        '<hr>' +
        '<div class="seclabel">Off-wiki</div>' + links(OFFWIKI) +
      '</aside>' +
      '<main class="wikimain"></main>' +
    '</div>' +
    '<footer class="wikifoot">DonFuer Wiki &middot; <a href="/">return to donfuer.com</a></footer>';

  var main = body.querySelector(".wikimain");
  if (article) main.appendChild(article);
  else main.innerHTML = '<article class="article"></article>';
})();
