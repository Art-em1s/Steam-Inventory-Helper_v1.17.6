var invites=webpackJsonp_name_([5],{352:function(n,t,e){"use strict";function i(n){return function(){var t=n.apply(this,arguments);return new Promise(function(n,e){function i(r,a){try{var o=t[r](a),s=o.value}catch(n){return void e(n)}if(!o.done)return Promise.resolve(s).then(function(n){i("next",n)},function(n){i("throw",n)});n(s)}return i("next")})}}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function a(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function o(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=e(30),d=e.n(s),c=e(54),u=e(50),l=(e(70),e(371)),f=(e.n(l),function(n){function t(){return r(this,t),a(this,n.apply(this,arguments))}return o(t,n),t.prototype.onLoad=function(){function n(){return e.apply(this,arguments)}var e=i(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:d()(".icon_item.icon_create_group").length&&t.addInvitesControls(),t.bindAjaxContentHighlighting();case 2:case"end":return n.stop()}},n,this)}));return n}(),t.addInvitesControls=function(){function n(){return e.apply(this,arguments)}var e=i(regeneratorRuntime.mark(function n(){var e,i,r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t.addIgnoreButton(),e=[],i=d()('.invite_row[id^="invite_"]'),i.each(function(n,t){var i=d()(t),r=i.data("steamid");e.push(r);var a=i.find(".friendPlayerLevelNum").text();i.data("steamlvl",a),i.css("position","relative");var o=i.find(".actions");d()('<div class="btn-hide" data-hidden="true">\n        <img src="//steamcommunity-a.akamaihd.net/public/images/login/throbber.gif" alt="Working...">\n      </div>').insertBefore(o);i.append('\n      <div class="rep">\n        <div class="profile-info"></div>\n        <div class="ban-info"></div>\n        <div class="inventory-info">\n          <h3>Inventory</h3>\n        </div>\n      </div>\n      ')}),!e.length){n.next=13;break}return n.next=7,u.a.getPlayerSummaries(e.join());case 7:return r=n.sent,n.next=10,u.a.getPlayerBans(e.join());case 10:return a=n.sent,n.next=13,Promise.all(i.map(function(n,e){return t.addPlayerInfo(e,r,a)}));case 13:case"end":return n.stop()}},n,this)}));return n}(),t.bindAjaxContentHighlighting=function(){new MutationObserver(function(n){n.forEach(function(n){for(var e=0;e<n.addedNodes.length;e+=1){"friends_pending"===n.addedNodes[e].id&&d()(".icon_item.icon_create_group").length&&t.addInvitesControls()}})}).observe(document,{subtree:!0,childList:!0})},t.addHideButton=function(n){var t=n.find(".btn-hide");t.append('<span class="btn_grey_black btn_details btn_small">\n    <span>Show more info<span class="btn_details_arrow down"></span></span>\n    </span>'),t.find("img").remove(),t.on("click",function(n){var t=d()(n.currentTarget),e=t.siblings(".rep"),i=t.find(".btn_details_arrow"),r=t.data("hidden");r?(i.parent().html('Hide more info<span class="btn_details_arrow up"></span>'),e.show()):(i.parent().html('Show more info<span class="btn_details_arrow down"></span>'),e.hide()),t.data("hidden",!r)})},t.getInventoryInfo=function(){function n(n){return t.apply(this,arguments)}var t=i(regeneratorRuntime.mark(function n(t){var e,i,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URL(t),n.next=3,u.a.sendRequest({method:"GET",url:window.location.protocol+"//"+e.hostname+e.pathname+"inventory/"});case 3:return i=n.sent,r=[],d()(d.a.parseHTML(i)).find(".games_list_tab").each(function(n,t){var e=d()(t).find(".games_list_tab_name").text(),i=d()(t).find(".games_list_tab_number").text();r.push('<div class="list">'+e+": <strong>"+/\d+/.exec(i)[0]+" items</strong></div>")}),n.abrupt("return",r.join(""));case 7:case"end":return n.stop()}},n,this)}));return n}(),t.addBanIcons=function(n,t){var i='\n    <div class="invite_block_icon">\n      <div class="ban-icon"></div>\n    </div>',r=n.find(".invite_row_left .invite_block_icon:first");if(e.i(u.c)(t.VACBanned)){var a=d()(i);a.find(".ban-icon").addClass("vac").text("VAC"),a.find(".ban-icon").attr("title","Number of Bans: "+t.NumberOfVACBans+" (Last added "+t.DaysSinceLastBan+" days ago)"),a.insertAfter(r)}if(e.i(u.c)(t.CommunityBanned)){var o=d()(i);o.find(".ban-icon").addClass("community").text("C"),o.find(".ban-icon").attr("title","Banned"),o.insertAfter(r)}if(e.i(u.c)(t.EconomyBan)){var s=d()(i);s.find(".ban-icon").addClass("trade").text("t"),s.find(".ban-icon").attr("title","Currently Trade Banned"),s.insertAfter(r)}},t.addPlayerInfo=function(){function n(n,t,e){return r.apply(this,arguments)}var r=i(regeneratorRuntime.mark(function n(i,r,a){var o,s,c,l,f,p;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=d()(i),s=o.data("steamid"),c=r[s],o.find(".profile-info").append("\n      <div>Joined Steam: <strong>"+new Date(1e3*c.timecreated).toLocaleDateString()+"</strong></div>\n      <div>Steam Level: <strong>"+o.data("steamlvl")+'</strong></div>\n      <div>Online Status: <strong class="caps">'+(e.i(u.c)(c.personastate)?"Online":"Offline")+'</strong></div>\n      <div>Profile privacy: <strong class="caps">'+(3==+c.communityvisibilitystate?"Public":"Private")+"</strong></div>\n      <div>Steam Name: <strong>"+c.personaname+"</strong></div>\n      <div>Steam ID: <strong>"+s+"</strong></div>\n      <div>Profile URL: <strong>"+c.profileurl+"</strong></div>\n    </div>\n    ").show(),l=a[s],f=o.find(".ban-info"),f.append('\n      <div style="text-transform: capitalize;">'+i18next.t("controls:profile.communityban")+": <strong>"+(e.i(u.c)(l.CommunityBanned)?"Banned":i18next.t("controls:profile.none"))+'</strong></div>\n      <div style="text-transform: capitalize;">'+i18next.t("controls:profile.tradeban")+": <strong>"+(e.i(u.c)(l.EconomyBan)?l.EconomyBan:i18next.t("controls:profile.none"))+'</strong></div>\n      <div style="text-transform: capitalize;">'+i18next.t("controls:profile.vacban")+": <strong>"+(e.i(u.c)(l.VACBanned)?"Banned":i18next.t("controls:profile.none"))+"</strong></div>\n    ").show(),(e.i(u.c)(l.VACBanned)||e.i(u.c)(l.CommunityBanned)||e.i(u.c)(l.EconomyBan))&&f.addClass("warning"),t.addBanIcons(o,l),n.next=11,t.getInventoryInfo(c.profileurl);case 11:return p=n.sent,o.find(".inventory-info").append(p).show(),t.addHideButton(o),n.abrupt("return",!0);case 15:case"end":return n.stop()}},n,this)}));return n}(),t.addIgnoreButton=function(){var n=d()('<button class="profile_friends manage_link btnv6_blue_hoverfade btn_small btn_uppercase ignore_zero">\n      <span>Ignore Level 0</span>\n    </button>');n.click(function(){return d()(".invite_row").each(function(n,t){var e=d()(t);"0"===e.data("steamlvl")&&e.find(".linkStandard:contains(Ignore)")[0].click()}),!1}),d()("#friends_pending .profile_friends.title_bar").append(n)},t}(c.a));t.default=new f},371:function(n,t){},423:function(n,t,e){e(14),n.exports=e(352)}},[423]);