// ==UserScript==
// @name         SE terminal chat skin
// @namespace    http://www.easwee.net/
// @version      0.1
// @description  SE chat message background hue changer. Script is meant to be run in Tampermonkey or similar browser addon.
// @author       easwee
// @match        http://tampermonkey.net/installed.php?version=3.9.202&ext=dhdg&updated=true
// @grant        none
// ==/UserScript==

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
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

function generateStyle(){
    var css = '\
body {font-family: "Inconsolata", monospace;background-color: black;color: green;}\
.user-container .avatar {display:none !important;}\
a.signature {color: green;}\
.username {font-size:12px;font-weight:700;line-height:140%;border:1px solid transparent;}\
.username.owner {font-style:normal;}\
.username.owner:before {content:"+";}\
.monologue .signature .username {font-size:12px;}\
.monologue .tiny-signature {padding-top:0;}\
.monologue .tiny-signature .username {margin-top:0;font-size:12px;}\
.monologue .timestamp {margin-top:3px;background:green;color:black;margin-right:0;border-radius:0;}\
.messages {padding:0;background-color:transparent;border-left:2px solid green;color:green;border-radius:0;}\
.ob-wikipedia, .ob-amazon, .ob-gist, .ob-message, .ob-lpadbug, .ob-manpage, .ob-blog, .ob-exception, .ob-anime, .ob-post {padding:10px;background-color:transparent;border:1px dashed green;color:green;}\
.ob-wikipedia-title a, .ob-amazon-title a, .ob-lpadbug-title a, .ob-manpage-title a, .ob-blog-title a, .ob-anime-title a {color:green;}\
.ob-post-tag, a:hover .ob-post-tag, a:hover .ob-user-tag {background-color:green !important;color:black !important;border:0;}\
.ob-tweet, .ob-twitteruser {background-color:transparent;padding:10px;border:1px dashed green;}\
.ob-tweet .ob-status-text {color:green;}\
a, .more, .roomcard h3, .usercard h3 {color:green !important;}\
.onebox {margin:2px 0;}\
.ob-post-votes, .ob-post-votes.ob-post-accepted {background:green;color:black;}\
.highlight {background:green !important;color:black !important;}\
div.messages:hover .timestamp {display:none !important;}\
div.message {line-height:140%;padding-left:30px;}\
div.message .content {margin-right:50px;}\
div.message:hover .content {background:#001500;}\
div.message .action-link {left:-1px;}\
div.message:hover .action-link, .timestamp:hover+div.message .action-link {background:green;}\
div.message:hover, .timestamp:hover+div.message {border:1px solid transparent;}\
.mention {background:green;color:black;}\
.mine .messages, div.message.reply-parent, div.message.reply-child {background-color:#001500;}\
.mine .messages .content {margin-right:50px;}\
.button, a.button {color:black !important;background-color:green;border-radius:0;}\
.button:hover, .button:active, .button:focus {color:black;background-color:green;cursor:pointer;}\
div.message .meta {background-color:transparent;}\
.monologue.catchup-marker-1, .monologue.catchup-marker-2, .monologue.catchup-marker-3 {border-top: 2px dashed green;}\
#sidebar {color:green;}\
#sidebar #info #roomtitle {color:green;text-shadow:none;font-family:Inconsolata, monospace;}\
.tag, .tag:hover {background:green;color:black !important;cursor:pointer;border:0;padding:3px;}\
#sidebar #info #sidebar-menu, #present-users, ul#my-rooms {border-bottom:1px dashed green;}\
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
#input-table td {padding:6px 0;}\
#input {display:block;width:100%;max-width:100%;border:0;background:green;border-radius:0;box-sizing:border-box;}\
#bubble {width:auto;text-align:left;padding-left:0;}\
#chat-buttons .button {display:block;width:97%;padding:3px 0;margin:0 0 0 3%;box-sizing:border-box;margin-bottom:3px;text-align:center;font-weight:700;}\
.system-message-container .system-message {width:84.9%}\
.system-message {background:green;color:black;}\
div.message .meta {bottom:0;right:0;background:green;height:14px;padding-top:2px;padding-right:3px;}\
div.message pre, div.message code {background:#001500;}\
.hat {display:none !important;}\
.#reply-count, .reply-count {}\
    ';    
	
    head.innerHTML += '<style>' + css + '</style>';
    
    
}