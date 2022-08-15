import{_ as a,o as e,c as r,e as h}from"./app.b85a333a.js";const d={},i=h('<h1 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h1><h2 id="atomics-\u4E0E-sharedarraybuffer" tabindex="-1"><a class="header-anchor" href="#atomics-\u4E0E-sharedarraybuffer" aria-hidden="true">#</a> Atomics \u4E0E SharedArrayBuffer</h2><h3 id="sharedarraybuffer" tabindex="-1"><a class="header-anchor" href="#sharedarraybuffer" aria-hidden="true">#</a> SharedArrayBuffer</h3><h3 id="\u539F\u5B50\u64CD\u4F5C\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u539F\u5B50\u64CD\u4F5C\u57FA\u7840" aria-hidden="true">#</a> \u539F\u5B50\u64CD\u4F5C\u57FA\u7840</h3><h2 id="\u8DE8\u4E0A\u4E0B\u6587\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u4E0A\u4E0B\u6587\u6D88\u606F" aria-hidden="true">#</a> \u8DE8\u4E0A\u4E0B\u6587\u6D88\u606F</h2><h2 id="encoding-api" tabindex="-1"><a class="header-anchor" href="#encoding-api" aria-hidden="true">#</a> Encoding API</h2><h3 id="\u6587\u672C\u7F16\u7801" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u7F16\u7801" aria-hidden="true">#</a> \u6587\u672C\u7F16\u7801</h3><h3 id="\u6587\u672C\u89E3\u7801" tabindex="-1"><a class="header-anchor" href="#\u6587\u672C\u89E3\u7801" aria-hidden="true">#</a> \u6587\u672C\u89E3\u7801</h3><h2 id="file-api-\u4E0E-blob-api" tabindex="-1"><a class="header-anchor" href="#file-api-\u4E0E-blob-api" aria-hidden="true">#</a> File API \u4E0E Blob API</h2><h3 id="file-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#file-\u7C7B\u578B" aria-hidden="true">#</a> File \u7C7B\u578B</h3><h3 id="filereader-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#filereader-\u7C7B\u578B" aria-hidden="true">#</a> FileReader \u7C7B\u578B</h3><h3 id="filereadersync-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#filereadersync-\u7C7B\u578B" aria-hidden="true">#</a> FileReaderSync \u7C7B\u578B</h3><h3 id="blob-\u4E0E\u90E8\u5206\u8BFB\u53D6" tabindex="-1"><a class="header-anchor" href="#blob-\u4E0E\u90E8\u5206\u8BFB\u53D6" aria-hidden="true">#</a> Blob \u4E0E\u90E8\u5206\u8BFB\u53D6</h3><h3 id="\u5BF9\u8C61url-\u4E0E-blob" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61url-\u4E0E-blob" aria-hidden="true">#</a> \u5BF9\u8C61URL \u4E0E Blob</h3><h3 id="\u8BFB\u53D6\u62D6\u653E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u53D6\u62D6\u653E\u6587\u4EF6" aria-hidden="true">#</a> \u8BFB\u53D6\u62D6\u653E\u6587\u4EF6</h3><h2 id="\u5A92\u4F53\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5A92\u4F53\u5143\u7D20" aria-hidden="true">#</a> \u5A92\u4F53\u5143\u7D20</h2><h3 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h3><h3 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h3><h3 id="\u81EA\u5B9A\u4E49\u64AD\u653E\u5668" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u64AD\u653E\u5668" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u64AD\u653E\u5668</h3><h3 id="\u68C0\u6D4B\u7F16\u89E3\u7801\u5668" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u7F16\u89E3\u7801\u5668" aria-hidden="true">#</a> \u68C0\u6D4B\u7F16\u89E3\u7801\u5668</h3><h3 id="\u97F3\u9891\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u97F3\u9891\u7C7B\u578B" aria-hidden="true">#</a> \u97F3\u9891\u7C7B\u578B</h3><h2 id="\u539F\u751F\u62D6\u653E" tabindex="-1"><a class="header-anchor" href="#\u539F\u751F\u62D6\u653E" aria-hidden="true">#</a> \u539F\u751F\u62D6\u653E</h2><h3 id="\u62D6\u653E\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u62D6\u653E\u4E8B\u4EF6" aria-hidden="true">#</a> \u62D6\u653E\u4E8B\u4EF6</h3><h3 id="\u81EA\u5B9A\u4E49\u653E\u7F6E\u76EE\u6807" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u653E\u7F6E\u76EE\u6807" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u653E\u7F6E\u76EE\u6807</h3><h3 id="datatransfer-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#datatransfer-\u5BF9\u8C61" aria-hidden="true">#</a> dataTransfer \u5BF9\u8C61</h3><h3 id="dropeffect-\u4E0E-effectallowed" tabindex="-1"><a class="header-anchor" href="#dropeffect-\u4E0E-effectallowed" aria-hidden="true">#</a> dropEffect \u4E0E effectAllowed</h3><h3 id="\u53EF\u62D6\u52A8\u80FD\u529B" tabindex="-1"><a class="header-anchor" href="#\u53EF\u62D6\u52A8\u80FD\u529B" aria-hidden="true">#</a> \u53EF\u62D6\u52A8\u80FD\u529B</h3><h3 id="\u5176\u4ED6\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u6210\u5458" aria-hidden="true">#</a> \u5176\u4ED6\u6210\u5458</h3><h2 id="notifications-api" tabindex="-1"><a class="header-anchor" href="#notifications-api" aria-hidden="true">#</a> Notifications API</h2><h3 id="\u901A\u77E5\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u901A\u77E5\u6743\u9650" aria-hidden="true">#</a> \u901A\u77E5\u6743\u9650</h3><h3 id="\u663E\u793A\u548C\u9690\u85CF\u901A\u77E5" tabindex="-1"><a class="header-anchor" href="#\u663E\u793A\u548C\u9690\u85CF\u901A\u77E5" aria-hidden="true">#</a> \u663E\u793A\u548C\u9690\u85CF\u901A\u77E5</h3><h3 id="\u901A\u77E5\u751F\u547D\u5468\u671F\u56DE\u8C03" tabindex="-1"><a class="header-anchor" href="#\u901A\u77E5\u751F\u547D\u5468\u671F\u56DE\u8C03" aria-hidden="true">#</a> \u901A\u77E5\u751F\u547D\u5468\u671F\u56DE\u8C03</h3><h2 id="page-visibility-api" tabindex="-1"><a class="header-anchor" href="#page-visibility-api" aria-hidden="true">#</a> Page Visibility API</h2><h2 id="streams-api" tabindex="-1"><a class="header-anchor" href="#streams-api" aria-hidden="true">#</a> Streams API</h2><h3 id="\u7406\u89E3\u6D41" tabindex="-1"><a class="header-anchor" href="#\u7406\u89E3\u6D41" aria-hidden="true">#</a> \u7406\u89E3\u6D41</h3><h3 id="\u53EF\u8BFB\u6D41" tabindex="-1"><a class="header-anchor" href="#\u53EF\u8BFB\u6D41" aria-hidden="true">#</a> \u53EF\u8BFB\u6D41</h3><h3 id="\u53EF\u5199\u6D41" tabindex="-1"><a class="header-anchor" href="#\u53EF\u5199\u6D41" aria-hidden="true">#</a> \u53EF\u5199\u6D41</h3><h3 id="\u8F6C\u6362\u6D41" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u6362\u6D41" aria-hidden="true">#</a> \u8F6C\u6362\u6D41</h3><h3 id="\u901A\u8FC7\u7BA1\u9053\u8FDE\u63A5\u6D41" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u7BA1\u9053\u8FDE\u63A5\u6D41" aria-hidden="true">#</a> \u901A\u8FC7\u7BA1\u9053\u8FDE\u63A5\u6D41</h3><h2 id="\u8BA1\u65F6-api" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u65F6-api" aria-hidden="true">#</a> \u8BA1\u65F6 API</h2><h3 id="high-resolution-time-api" tabindex="-1"><a class="header-anchor" href="#high-resolution-time-api" aria-hidden="true">#</a> High Resolution Time API</h3><h3 id="performance-timeline-api" tabindex="-1"><a class="header-anchor" href="#performance-timeline-api" aria-hidden="true">#</a> Performance Timeline API</h3><h2 id="web-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#web-\u7EC4\u4EF6" aria-hidden="true">#</a> Web \u7EC4\u4EF6</h2><h3 id="html-\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#html-\u6A21\u677F" aria-hidden="true">#</a> HTML \u6A21\u677F</h3><h3 id="\u5F71\u5B50-dom" tabindex="-1"><a class="header-anchor" href="#\u5F71\u5B50-dom" aria-hidden="true">#</a> \u5F71\u5B50 DOM</h3><h3 id="\u81EA\u5B9A\u4E49\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5143\u7D20" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5143\u7D20</h3><h2 id="web-cryptography-api" tabindex="-1"><a class="header-anchor" href="#web-cryptography-api" aria-hidden="true">#</a> Web Cryptography API</h2><h3 id="\u751F\u6210\u968F\u673A\u6570" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u968F\u673A\u6570" aria-hidden="true">#</a> \u751F\u6210\u968F\u673A\u6570</h3><h3 id="\u4F7F\u7528-subtlecrypto-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-subtlecrypto-\u5BF9\u8C61" aria-hidden="true">#</a> \u4F7F\u7528 SubtleCrypto \u5BF9\u8C61</h3>',49),n=[i];function t(c,s){return e(),r("div",null,n)}var l=a(d,[["render",t],["__file","index.html.vue"]]);export{l as default};
