"use strict";

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 1 9 177 as proposed by browserhacks @see http: browserhacks.com #hack-e71d8692f65334173fee715c222cb805 tests for existence of standard globals is to allow style-loader operate correctly into non-standard environments https: github.com webpack-contrib issues memo="Boolean(window" && document document.all !window.atob); } return memo; }; }(); var gettarget="function" gettarget() { function memorize(target) if (typeof memo[target]="==" 'undefined') styletarget="document.querySelector(target);" special case head iframe instead itself (window.htmliframeelement instanceof window.htmliframeelement) try this will throw an exception access blocked due cross-origin restrictions catch (e) istanbul ignore next memo[target]; stylesindom="[];" getindexbyidentifier(identifier) result="-1;" (var i="0;" < stylesindom.length; i++) (stylesindom[i].identifier="==" identifier) break; result; modulestodom(list, options) idcountmap="{};" identifiers="[];" list.length; item="list[i];" id="options.base" ? item[0] + options.base : item[0]; count="idCountMap[id]" || 0; identifier .concat(id, " ").concat(count); idcountmap[id]="count" 1; index="getIndexByIdentifier(identifier);" obj="{" css: item[1], media: item[2], sourcemap: item[3] (index !="=" -1) stylesindom[index].references++; stylesindom[index].updater(obj); else stylesindom.push({ identifier: identifier, updater: addstyle(obj, options), references: }); identifiers.push(identifier); identifiers; insertstyleelement(options) style="document.createElement('style');" attributes="options.attributes" {}; attributes.nonce="==" nonce="typeof" __webpack_nonce__ 'undefined' null; (nonce) object.keys(attributes).foreach(function (key) style.setattribute(key, attributes[key]); options.insert="==" 'function') options.insert(style); target="getTarget(options.insert" 'head'); (!target) new error("couldn't find a target. probably means that the value 'insert' parameter invalid."); target.appendchild(style); style; removestyleelement(style) (style.parentnode="==" null) false; style.parentnode.removechild(style); * replacetext="function" replacetext() textstore="[];" replace(index, replacement) textstore[index]="replacement;" textstore.filter(boolean).join('\n'); applytosingletontag(style, index, remove, obj) css="remove" '' obj.media "@media ".concat(obj.media, {").concat(obj.css, "}") obj.css; old ie (style.stylesheet) style.stylesheet.csstext="replaceText(index," css); cssnode="document.createTextNode(css);" childnodes="style.childNodes;" (childnodes[index]) style.removechild(childnodes[index]); (childnodes.length) style.insertbefore(cssnode, childnodes[index]); style.appendchild(cssnode); applytotag(style, options, media="obj.media;" sourcemap="obj.sourceMap;" (media) style.setattribute('media', media); style.removeattribute('media'); (sourcemap btoa) .concat(btoa(unescape(encodeuricomponent(json.stringify(sourcemap)))), "); while (style.firstchild) style.removechild(style.firstchild); style.appendchild(document.createtextnode(css)); singleton="null;" singletoncounter="0;" update; remove; (options.singleton) styleindex="singletonCounter++;" (singleton="insertStyleElement(options));" update="applyToSingletonTag.bind(null," style, styleindex, false); remove="applyToSingletonTag.bind(null," true); options); remove() removestyleelement(style); update(obj); updatestyle(newobj) (newobj) (newobj.css="==" obj.css newobj.media="==" newobj.sourcemap="==" obj.sourcemap) return; update(obj="newObj);" remove(); module.exports="function" (list, options="options" force single-tag solution on ie6-9, which has hard limit # <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};</=>