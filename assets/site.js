// 공통 머리말·꼬리말과 행사 목록 렌더링. 행사 내용은 data/events.js 에서 고칩니다.
(function () {
  var SITE = "고려대학교 정치외교학과 대학원";
  // 메뉴 = 네 묶음. [페이지, 이름]
  var GROUPS = [
    ["education.html", "AI·방법론"],
    ["research.html", "대학원생 연구"],
    ["international.html", "국제 교류"],
    ["career.html", "커리어"]
  ];
  var CAT = { lecture: 0, workshop: 0, research: 1, intl: 2, career: 3 };
  var page = document.body.getAttribute("data-page");
  var events = (window.EVENTS || []).slice();
  var today = new Date().toISOString().slice(0, 10);

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function fmtDate(e) {
    var d = e.date.split("-");
    var s = d[0] + "." + d[1] + "." + d[2];
    if (e.dateEnd) { var x = e.dateEnd.split("-"); s += "–" + (x[1] === d[1] ? "" : x[1] + ".") + x[2]; }
    return s;
  }
  function isUpcoming(e) { return (e.dateEnd || e.date) >= today; }
  function asc(a, b) { return a.date < b.date ? -1 : 1; }
  function desc(a, b) { return a.date < b.date ? 1 : -1; }
  // "제목: 부제" 또는 "제목 — 부제"는 부제를 다음 줄로 내립니다.
  function titleOf(e) {
    if (!e.title) return '<span class="tbd">제목 추후 업데이트</span>';
    var m = e.title.match(/^(.+?)(?::| —) (.+)$/);
    return m ? esc(m[1]) + '<span class="st">' + esc(m[2]) + "</span>" : esc(e.title);
  }

  // ── 머리말·꼬리말
  var head = document.createElement("header");
  head.className = "site-head";
  head.innerHTML =
    '<div class="wrap head-in"><a class="brand" href="index.html">' +
    '<img src="assets/img/logo_kupolitics.svg" alt="고려대학교 정치외교학과" width="206" height="40">' +
    '<span class="brand-grad">대학원</span></a>' +
    '<nav class="nav">' + GROUPS.map(function (g) {
      return '<a href="' + g[0] + '"' + (g[0].indexOf(page) === 0 ? ' class="on"' : "") + ">" + g[1] + "</a>";
    }).join("") + "</nav></div>";
  document.body.insertBefore(head, document.body.firstChild);

  var foot = document.createElement("footer");
  foot.className = "site-foot";
  foot.innerHTML = '<div class="wrap"><b>' + SITE + "</b> · 서울특별시 성북구 안암로 145 고려대학교 정경관</div>";
  document.body.appendChild(foot);

  // ── 행사 한 줄: [포스터] 제목·연사 | 날짜
  function row(e, opt) {
    opt = opt || {};
    var g = GROUPS[CAT[e.cat]];
    var who = e.speaker ? '<span class="who">' + esc(e.speaker) + (e.affil ? " <i>" + esc(e.affil) + "</i>" : "") + "</span>" : "";
    var title = opt.link
      ? '<a class="t" href="' + g[0] + "#" + esc(e.id) + '">' + titleOf(e) + "</a>"
      : '<span class="t">' + titleOf(e) + "</span>";
    var meta = "";
    if (e.video && !opt.link) meta += '<a class="chip vid" href="https://www.youtube.com/watch?v=' + esc(e.video) + '" target="_blank" rel="noopener">▶ 영상</a>';
    if (isUpcoming(e) && !opt.link) meta += '<span class="chip up">예정</span>';
    if (opt.link) meta += '<span class="grp">' + g[1] + "</span>";
    meta += "<time>" + fmtDate(e) + "</time>";
    // 포스터는 작은 그림으로 넣고, 누르면 크게 보여 줍니다.
    var thumb = "";
    if (opt.thumbs) {
      thumb = e.poster
        ? '<a class="thumb" href="' + esc(e.poster) + '" data-zoom><img loading="lazy" src="' + esc(e.poster) + '" alt="' + esc(e.title || e.speaker || "") + ' 포스터"></a>'
        : '<span class="thumb none"></span>';
    }
    var html = '<li class="row"' + (opt.link ? "" : ' id="' + esc(e.id) + '"') + ">" + thumb +
      '<div class="main">' + title + who + "</div>" + '<div class="meta">' + meta + "</div>";
    // 프로그램 표는 접지 않고 바로 아래에 둡니다. <h4> 단위로 나란히 놓습니다.
    if (e.body && !opt.link) {
      html += '<div class="prog">' + e.body.split(/(?=<h4>)/).map(function (b) {
        return b.trim() ? "<div>" + b + "</div>" : "";
      }).join("") + "</div>";
    }
    return html + "</li>";
  }
  function rows(list, opt) {
    opt = opt || {};
    // 포스터가 하나라도 있는 묶음만 그림 칸을 둡니다.
    var o = { link: opt.link, thumbs: !opt.link && list.some(function (e) { return e.poster; }) };
    return '<ul class="rows' + (o.thumbs ? " wp" : "") + '">' + list.map(function (e) { return row(e, o); }).join("") + "</ul>";
  }

  // ── 포스터 카드: 포스터를 크게 보여 주는 묶음에 씁니다 (data-cards).
  // 같은 포스터를 쓰는 행사들은 카드 하나로 묶어, 포스터 옆에 차례로 적습니다.
  function pcards(list) {
    var groups = [];
    list.forEach(function (e) {
      var g = e.poster && groups.filter(function (x) { return x[0].poster === e.poster; })[0];
      if (g) g.push(e); else groups.push([e]);
    });
    return '<ul class="pcards">' + groups.map(function (g) {
      var p = g[0].poster;
      return '<li class="pcard' + (g.length > 1 ? " multi" : "") + '">' +
        (p ? '<a class="pimg" href="' + esc(p) + '" data-zoom><img loading="lazy" src="' + esc(p) + '" alt="' + esc(g[0].title || "") + ' 포스터"></a>'
           : '<span class="pimg none"></span>') + '<div class="pitems">' +
        g.map(function (e) {
          return '<div class="pitem" id="' + esc(e.id) + '"><span class="t">' + titleOf(e) + "</span>" +
            (e.speaker ? '<span class="who">' + esc(e.speaker) + (e.affil ? " <i>" + esc(e.affil) + "</i>" : "") + "</span>" : "") +
            '<div class="meta">' + (e.video ? '<a class="chip vid" href="https://www.youtube.com/watch?v=' + esc(e.video) + '" target="_blank" rel="noopener">▶ 영상</a>' : "") +
            (isUpcoming(e) ? '<span class="chip up">예정</span>' : "") + "<time>" + fmtDate(e) + "</time></div></div>";
        }).join("") + "</div></li>";
    }).join("") + "</ul>";
  }

  // ── 묶음별 목록: <div data-list="lecture"> 자리에 시리즈별로 그립니다.
  Array.prototype.forEach.call(document.querySelectorAll("[data-list]"), function (el) {
    var cat = el.getAttribute("data-list");
    var order = [], map = {};
    events.filter(function (e) { return e.cat === cat; }).sort(asc).forEach(function (e) {
      if (!map[e.series]) { map[e.series] = []; order.push(e.series); }
      map[e.series].push(e);
    });
    order.sort(function (a, b) { return desc(map[a][map[a].length - 1], map[b][map[b].length - 1]); });
    el.innerHTML = order.map(function (s) {
      var list = map[s].sort(desc);
      var note = (window.SERIES_NOTES || {})[s];
      return '<section class="sec"><h2>' + esc(s) + (note ? '<span class="sn">' + esc(note) + "</span>" : "") + "</h2>" +
        (el.hasAttribute("data-cards") ? pcards(list) : rows(list)) + "</section>";
    }).join("");
  });

  // ── 국제 교류: 상대 학교 이름을 크게 적은 가로 카드. 포스터가 없으면 이름으로 만든 표지를 대신 둡니다.
  var xEl = document.querySelector("[data-partners]");
  if (xEl) {
    xEl.innerHTML = '<ul class="xcards">' + events.filter(function (e) { return e.cat === "intl"; }).sort(function (a, b) {
      // 두 칸짜리 큰 행사는 맨 아래에 모읍니다.
      return (a.wide ? 1 : 0) - (b.wide ? 1 : 0) || desc(a, b);
    }).map(function (e) {
      var cover = e.poster
        ? '<a class="ximg" href="' + esc(e.poster) + '" data-zoom><img loading="lazy" src="' + esc(e.poster) + '" alt="' + esc(e.partner || "") + ' 포스터"></a>'
        : '<span class="ximg type"><b>' + esc(e.partner || "").replace(/ × /g, "<i>×</i>") + "</b><small>" + e.date.slice(0, 4) + "</small></span>";
      // 큰 행사(wide)는 두 칸을 다 쓰고, 오른쪽에 영상을 크게 둡니다. 누르면 그 자리에서 재생합니다.
      var big = e.wide && e.video
        ? '<div class="xbig" data-yt="' + esc(e.video) + '"><img loading="lazy" src="' + esc(e.still || "https://i.ytimg.com/vi/" + e.video + "/maxresdefault.jpg") + '" alt=""><button class="play" aria-label="재생">▶</button></div>'
        : "";
      return '<li class="xcard' + (e.wide ? " wide" : "") + '" id="' + esc(e.id) + '">' + cover + '<div class="xtext"><h2>' + esc(e.headline || e.partner || "") + "</h2>" +
        (e.place ? '<p class="pl">' + esc(e.place) + "</p>" : "") + '<span class="t">' + titleOf(e) + "</span>" +
        '<div class="meta">' + (isUpcoming(e) ? '<span class="chip up">예정</span>' : "") + "<time>" + fmtDate(e) + "</time>" +
        (e.video && !big ? '<a class="chip vid" href="https://www.youtube.com/watch?v=' + esc(e.video) + '" target="_blank" rel="noopener">▶ 영상</a>' : "") + "</div>" +
        (e.hosts ? '<p class="hs">' + esc(e.hosts) + "</p>" : "") +
        (e.photos ? '<div class="xphotos">' + e.photos.map(function (p) {
          return '<a href="' + esc(p) + '" data-zoom><img loading="lazy" src="' + esc(p) + '" alt=""></a>';
        }).join("") + "</div>" : "") + "</div>" + big + "</li>";
    }).join("") + "</ul>";
    xEl.addEventListener("click", function (ev) {
      var t = ev.target.closest(".xbig[data-yt]");
      if (!t) return;
      t.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + t.getAttribute("data-yt") +
        '?autoplay=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    });
  }

  // ── 첫 화면: 강연 영상, 네 묶음
  var vEl = document.querySelector("[data-videos]");
  if (vEl) {
    var vids = events.filter(function (e) { return (e.video || e.videoSoon) && !e.hideHomeVideo; }).sort(desc);
    vEl.innerHTML = vids.map(function (e) {
      var img = e.thumb || (e.video ? "https://i.ytimg.com/vi/" + e.video + "/hqdefault.jpg" : "");
      return '<article class="vtile"' + (e.video ? ' data-yt="' + esc(e.video) + '"' : "") + ">" +
        '<div class="frame">' + (img ? '<img src="' + esc(img) + '" alt="">' : "") +
        (e.video ? '<button class="play" aria-label="재생">▶</button>' : '<span class="soon">공개 준비 중</span>') + "</div>" +
        "<h3>" + (e.title ? esc(e.title.replace(/(?::| —) .+$/, "")) : titleOf(e)) + "</h3>" +
        "<p>" + esc(e.speaker || "") + (e.affil ? " · " + esc(e.affil) : "") + "</p></article>";
    }).join("");
    vEl.addEventListener("click", function (ev) {
      var t = ev.target.closest(".vtile[data-yt]");
      if (!t || !ev.target.closest(".frame")) return;
      t.querySelector(".frame").innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' +
        t.getAttribute("data-yt") + '?autoplay=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    });
  }
  var gEl = document.querySelector("[data-groups]");
  if (gEl) {
    // 묶음마다 다가오는 행사를 먼저, 나머지는 최근 행사로 채워 3건씩 보여 줍니다.
    gEl.innerHTML = GROUPS.map(function (g, i) {
      var mine = events.filter(function (e) { return CAT[e.cat] === i; });
      var pick = mine.filter(isUpcoming).sort(asc)
        .concat(mine.filter(function (e) { return !isUpcoming(e); }).sort(desc)).slice(0, 3)
        .sort(desc); // 고른 세 개는 가장 먼 날짜가 맨 위에 오게 보여 줍니다.
      return '<div class="gcol"><a class="gh" href="' + g[0] + '"><b>' + g[1] + "</b><i>→</i></a><ul>" +
        pick.map(function (e) {
          var t = e.title ? esc(e.title.replace(/(?::| —) .+$/, "")) : esc(e.speaker || e.series.split(" · ")[0]);
          if (e.headline) t = esc(e.partner + " " + e.headline);
          else if (e.partner && e.partner.indexOf("KU") === 0) t = esc(e.partner) + " " + t;
          if (e.tag) t = "<i>[" + esc(e.tag) + "]</i> " + t;
          return '<li><a href="' + g[0] + "#" + esc(e.id) + '" title="' + esc(e.title || "") + '"><b>' + t + "</b><span>" +
            (isUpcoming(e) ? "<em>예정</em>" : "") + fmtDate(e) + "</span></a></li>";
        }).join("") + "</ul></div>";
    }).join("");
  }

  // ── 포스터 크게 보기
  var box = document.createElement("div");
  box.className = "zoom";
  box.innerHTML = '<img alt="">';
  document.body.appendChild(box);
  document.addEventListener("click", function (ev) {
    var a = ev.target.closest("[data-zoom]");
    if (a) {
      ev.preventDefault();
      box.firstChild.src = a.getAttribute("href");
      box.classList.add("on");
    } else if (box.classList.contains("on")) box.classList.remove("on");
  });
  document.addEventListener("keydown", function (ev) { if (ev.key === "Escape") box.classList.remove("on"); });

  // 첫 화면에서 넘어온 #id 행을 표시합니다.
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) { (target.closest(".pcard, .xcard") || target).classList.add("hit"); target.scrollIntoView({ block: "center" }); }
  }
})();
