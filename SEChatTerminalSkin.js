// ==UserScript==
// @name         SE terminal chat skin
// @namespace    http://www.easwee.net/
// @version      0.1
// @description  SE chat message background hue changer. Script is meant to be run in Tampermonkey or similar browser addon.
// @author       easwee
// @match        http://tampermonkey.net/installed.php?version=3.9.202&ext=dhdg&updated=true
// @grant        none
// ==/UserScript==

//var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
var head  = document.querySelector('head');
var chat = document.getElementById('chat');

function generateSkin() {
	loadFont('http://fonts.googleapis.com/css?family=Inconsolata:400,700&subset=latin,latin-ext');
    generateStyle();
}

function loadFont(url) {
	head.innerHTML += '<link href="' + url + '" rel="stylesheet" type="text/css">';
}

generateSkin();

// var observer = new MutationObserver(function(mutations) {
//   mutations.forEach(function(mutation) {
//     if (mutation.type === 'childList') {
//       var messages = document.querySelectorAll('.messages');
//       // if javascript is involved with ne messages manipulate here
//     }
//   });
// });
// observer.observe(chat, {
//   attributes: false,
//   childList: true,
//   characterData: false
// });

function generateStyle(){
    var css = '\
body {font-family: "Inconsolata", monospace;background-color: black;color: green;}\
a.signature {color: green;}\
a, .more, .roomcard h3, .usercard h3 {color:green !important;}\
.button, a.button {color:black !important;background-color:green;border-radius:0;font-family:Inconsolata, monospace;}\
.button:hover, .button:active, .button:focus {color:black;background-color:green;cursor:pointer;}\
.button.disabled, .button.disabled:hover {background:green;opacity:0.3;}\
.user-container .avatar {display:none !important;}\
.username {font-size:12px;font-weight:700;line-height:140%;border:1px solid transparent;}\
.username.owner {font-style:normal;}\
.username.owner:before {content:"+";}\
.monologue .signature .username {font-size:12px;}\
.monologue .tiny-signature {padding-top:0;}\
.monologue .tiny-signature .username {margin-top:0;font-size:12px;}\
.monologue .timestamp {margin-top:3px;background:green;color:black;margin-right:0;border-radius:0;}\
.messages {padding:0;background-color:transparent;border-left:2px solid green;color:green;border-radius:0;}\
.ob-wikipedia, .ob-amazon, .ob-gist, .ob-message, .ob-lpadbug, .ob-manpage, .ob-blog, .ob-exception, .ob-anime, .ob-post {padding:10px;background-color:transparent;border:1px dashed green;color:green;}\
.ob-wikipedia-title a, .ob-amazon-title a, .ob-lpadbug-title a, .ob-manpage-title a, .ob-blog-title a, .ob-anime-title a, .ob-status-text, .ob-tweet .ob-status-text {color:green;font-weight: 700;font-size: 1.3em;font-family:Inconsolata, monospace;}\
.ob-post-tag, a:hover .ob-post-tag, a:hover .ob-user-tag {background-color:green !important;color:black !important;border:0;}\
.ob-tweet, .ob-twitteruser {background-color:transparent;padding:10px;border:1px dashed green;}\
.ob-tweet .ob-status-text, .ob-tweet .ob-status-meta .ob-tweet-info, .ob-blog-meta {color:green;}\
.ob-post-votes, .ob-post-votes.ob-post-accepted {background:green;color:black;}\
.onebox {margin:0;}\
.highlight {background:green !important;color:black !important;}\
.mention {background:green;color:black;}\
.tag, .tag:hover {background:green;color:black !important;cursor:pointer;border:0;padding:3px;}\
.quote {border-left:1px dashed green;}\
.deleted {color:green;text-decoration:line-through;}\
.hat {display:none !important;}\
div.message {line-height:140%;padding-left:30px;border-right:0 !important;border-left:0 !important;}\
div.message .content {margin-right:50px;}\
div.message .content a {text-decoration:underline;}\
div.message:hover{background:#001500;}\
div.message .action-link {left:-1px;}\
div.message:hover .action-link, .timestamp:hover+div.message .action-link {background:green;}\
div.message:hover, .timestamp:hover+div.message {border:1px solid transparent;border-right:0 !important;border-left:0 !important;}\
div.message .meta {bottom:0;right:0;background:#001500;height:14px;padding-top:2px;padding-right:2px;}\
div.message pre, div.message code {background:#001500;}\
div.message .newreply {background-position:0 -45px}\
div.message.reply-parent, div.message.reply-child {background-color:#001500;}\
.mine {position:relative;}\
.mine .messages:before {content:"";position:absolute;left:-8px;top:5px;display:block;width:0px;height:0px;border-style:solid;border-width:3.5px 6.1px 3.5px 0;border-color: transparent #008000 transparent transparent ;}\
.mine .messages {background-color:transparent;position:relative;}\
.mine .messages .content {margin-right:50px;}\
.monologue.catchup-marker-1, .monologue.catchup-marker-2, .monologue.catchup-marker-3 {border-top: 1px dashed green;}\
.monologue.mine .message:hover .action-link {background:green;}\
#sidebar {color:green;}\
#sidebar #info #roomtitle {color:green;text-shadow:none;font-family:Inconsolata, monospace;}\
#sidebar #info #sidebar-menu, #present-users, ul#my-rooms {border-bottom:1px dashed green;color:green;}\
#sidebar .user-container .avatar {display:block !important;}\
div#starred-posts>div>ul>li {border-bottom: 1px dashed green;}\
#input-area {background-color:black;border-top:2px solid green;}\
#input-area .avatar {float:right;margin-right:10px;}\
#input-area td.chat-input {}\
#input-area .user-container {}\
#input-area .user-container .avatar {display:block !important;}\
#input-area td:nth-child(1) {width:8.6% !important;}\
#input-area td:nth-child(2) {width:45% !important;}\
#input-area td:nth-child(3) {width:12% !important;}\
#input-area td:nth-child(4) {width:auto !important;float:none;text-align:right;}\
#input-area #footer-logo a {display:inline-block;vertical-align:top;width:32px;height:40px;background:url(http://upload.easwee.net/stock/seterminalskinlogo.png) no-repeat 0 0;margin-right:10px;}\
#input-area #footer-logo a img {display:none;}\
#input-area #footer-legal {padding-right:10px;}\
#input-table td {padding:6px 0;}\
#input {display:block;width:100%;max-width:100%;border:0;background:#001500;color:green;border-radius:0;box-sizing:border-box;}\
#bubble {width:auto;text-align:left;padding-left:0;}\
#chat-buttons .button {display:block;width:97%;padding:3px 0;margin:0 0 0 3%;box-sizing:border-box;margin-bottom:3px;text-align:center;font-weight:700;}\
#reply-count, .reply-count {background:green;color:black !important;text-shadow:none;box-shadow:none;border-radius:0;border:0;}\
.room-info>.last-message {font-size:10px;padding-left:10px;}\
ul#my-rooms>li {color:green !important;}\
.sidebar-widget .msg-small {background-color:green;color:black;float:none;display:block;padding:2px;font-weight:bold;}\
.sidebar-widget .msg-small a {color:black !important;text-decoration:underline;}\
.feed-icon {margin-top:1px;vertical-align:top;}\
.feed-icon, .vote-count-container.stars.owner-star.user-star .img, .vote-count-container.stars.owner-star .img, .vote-count-container.stars.user-star .img, .vote-count-container.stars .img,\
ul#my-rooms .quickswitch, ul#my-rooms .quickleave, .favorite-room-vote, .favorite-room-vote.favorite-room, .sprite, div.message .reply-info,\
div.message .action-link.edits .img, div.message:hover .action-link .img.menu, div.message:hover .action-link .img, .timestamp:hover+div.message .action-link .img, .timestamp:hover+div.message .action-link .img.menu,\
.vote-count-container.flags .img, .div.message .newreply, div.message .newreply, .vote-count-container.flags .img {background-image:url(http://upload.easwee.net/stock/seterminalskinsprites.png);}\
#sidebar-menu {color:green;}\
#chat-body #searchbox, #transcript-body #searchbox {display:inline-block;vertical-align:top;background:green;border:0;font-family:Inconsolata, monospace;padding:2px 10px;}\
#allrooms {display:inline-block;vertical-align:top;margin:0;}\
input.watermark {color:black;font-style:italic;}\
.wmd-prompt-dialog {background-color:black;border:1px solid green;}\
.popup, #main.message-admin-mode .message-controls, #conversation-sel {padding: 5px;border: 1px solid green;font-size: 11px;color: green;-moz-border-radius: 0;-webkit-border-radius: 0;border-radius: 0;background: black;background: rgba(0, 0, 0, 0.95);-webkit-box-shadow: none;-moz-box-shadow:  none;box-shadow: none;overflow: hidden;}\
.popup .btn-close, #conversation-sel .btn-close {background:green;color:black;border-radius:0;}\
.system-message-container .system-message {width:87.2%;padding:3px;color:black !important;font-size:10px;box-sizing:border-box;margin-top:10px;}\
.system-message {background:green;color:black;border-radius:0;border:0;}\
';
    head.innerHTML += '<style>' + css + '</style>';
}