webpackJsonp(["common"],{

/***/ "./node_modules/ng-select/fesm5/ng-select.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectModule; });
/* unused harmony export SELECT_VALUE_ACCESSOR */
/* unused harmony export SelectComponent */
/* unused harmony export ɵa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var Option = /** @class */ (function () {
    function Option(option) {
        this.wrappedOption = option;
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
    }
    Object.defineProperty(Option.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.wrappedOption.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.wrappedOption.label;
        },
        enumerable: true,
        configurable: true
    });
    return Option;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var Diacritics = /** @class */ (function () {
    function Diacritics() {
    }
    /**
     * @param {?} text
     * @return {?}
     */
    Diacritics.strip = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        var _this = this;
        /** @type {?} */
        var match = function (a) {
            return _this.DIACRITICS[a] || a;
        };
        return text.replace(/[^\u0000-\u007E]/g, match);
    };
    Diacritics.DIACRITICS = {
        '\u24B6': 'A',
        '\uFF21': 'A',
        '\u00C0': 'A',
        '\u00C1': 'A',
        '\u00C2': 'A',
        '\u1EA6': 'A',
        '\u1EA4': 'A',
        '\u1EAA': 'A',
        '\u1EA8': 'A',
        '\u00C3': 'A',
        '\u0100': 'A',
        '\u0102': 'A',
        '\u1EB0': 'A',
        '\u1EAE': 'A',
        '\u1EB4': 'A',
        '\u1EB2': 'A',
        '\u0226': 'A',
        '\u01E0': 'A',
        '\u00C4': 'A',
        '\u01DE': 'A',
        '\u1EA2': 'A',
        '\u00C5': 'A',
        '\u01FA': 'A',
        '\u01CD': 'A',
        '\u0200': 'A',
        '\u0202': 'A',
        '\u1EA0': 'A',
        '\u1EAC': 'A',
        '\u1EB6': 'A',
        '\u1E00': 'A',
        '\u0104': 'A',
        '\u023A': 'A',
        '\u2C6F': 'A',
        '\uA732': 'AA',
        '\u00C6': 'AE',
        '\u01FC': 'AE',
        '\u01E2': 'AE',
        '\uA734': 'AO',
        '\uA736': 'AU',
        '\uA738': 'AV',
        '\uA73A': 'AV',
        '\uA73C': 'AY',
        '\u24B7': 'B',
        '\uFF22': 'B',
        '\u1E02': 'B',
        '\u1E04': 'B',
        '\u1E06': 'B',
        '\u0243': 'B',
        '\u0182': 'B',
        '\u0181': 'B',
        '\u24B8': 'C',
        '\uFF23': 'C',
        '\u0106': 'C',
        '\u0108': 'C',
        '\u010A': 'C',
        '\u010C': 'C',
        '\u00C7': 'C',
        '\u1E08': 'C',
        '\u0187': 'C',
        '\u023B': 'C',
        '\uA73E': 'C',
        '\u24B9': 'D',
        '\uFF24': 'D',
        '\u1E0A': 'D',
        '\u010E': 'D',
        '\u1E0C': 'D',
        '\u1E10': 'D',
        '\u1E12': 'D',
        '\u1E0E': 'D',
        '\u0110': 'D',
        '\u018B': 'D',
        '\u018A': 'D',
        '\u0189': 'D',
        '\uA779': 'D',
        '\u01F1': 'DZ',
        '\u01C4': 'DZ',
        '\u01F2': 'Dz',
        '\u01C5': 'Dz',
        '\u24BA': 'E',
        '\uFF25': 'E',
        '\u00C8': 'E',
        '\u00C9': 'E',
        '\u00CA': 'E',
        '\u1EC0': 'E',
        '\u1EBE': 'E',
        '\u1EC4': 'E',
        '\u1EC2': 'E',
        '\u1EBC': 'E',
        '\u0112': 'E',
        '\u1E14': 'E',
        '\u1E16': 'E',
        '\u0114': 'E',
        '\u0116': 'E',
        '\u00CB': 'E',
        '\u1EBA': 'E',
        '\u011A': 'E',
        '\u0204': 'E',
        '\u0206': 'E',
        '\u1EB8': 'E',
        '\u1EC6': 'E',
        '\u0228': 'E',
        '\u1E1C': 'E',
        '\u0118': 'E',
        '\u1E18': 'E',
        '\u1E1A': 'E',
        '\u0190': 'E',
        '\u018E': 'E',
        '\u24BB': 'F',
        '\uFF26': 'F',
        '\u1E1E': 'F',
        '\u0191': 'F',
        '\uA77B': 'F',
        '\u24BC': 'G',
        '\uFF27': 'G',
        '\u01F4': 'G',
        '\u011C': 'G',
        '\u1E20': 'G',
        '\u011E': 'G',
        '\u0120': 'G',
        '\u01E6': 'G',
        '\u0122': 'G',
        '\u01E4': 'G',
        '\u0193': 'G',
        '\uA7A0': 'G',
        '\uA77D': 'G',
        '\uA77E': 'G',
        '\u24BD': 'H',
        '\uFF28': 'H',
        '\u0124': 'H',
        '\u1E22': 'H',
        '\u1E26': 'H',
        '\u021E': 'H',
        '\u1E24': 'H',
        '\u1E28': 'H',
        '\u1E2A': 'H',
        '\u0126': 'H',
        '\u2C67': 'H',
        '\u2C75': 'H',
        '\uA78D': 'H',
        '\u24BE': 'I',
        '\uFF29': 'I',
        '\u00CC': 'I',
        '\u00CD': 'I',
        '\u00CE': 'I',
        '\u0128': 'I',
        '\u012A': 'I',
        '\u012C': 'I',
        '\u0130': 'I',
        '\u00CF': 'I',
        '\u1E2E': 'I',
        '\u1EC8': 'I',
        '\u01CF': 'I',
        '\u0208': 'I',
        '\u020A': 'I',
        '\u1ECA': 'I',
        '\u012E': 'I',
        '\u1E2C': 'I',
        '\u0197': 'I',
        '\u24BF': 'J',
        '\uFF2A': 'J',
        '\u0134': 'J',
        '\u0248': 'J',
        '\u24C0': 'K',
        '\uFF2B': 'K',
        '\u1E30': 'K',
        '\u01E8': 'K',
        '\u1E32': 'K',
        '\u0136': 'K',
        '\u1E34': 'K',
        '\u0198': 'K',
        '\u2C69': 'K',
        '\uA740': 'K',
        '\uA742': 'K',
        '\uA744': 'K',
        '\uA7A2': 'K',
        '\u24C1': 'L',
        '\uFF2C': 'L',
        '\u013F': 'L',
        '\u0139': 'L',
        '\u013D': 'L',
        '\u1E36': 'L',
        '\u1E38': 'L',
        '\u013B': 'L',
        '\u1E3C': 'L',
        '\u1E3A': 'L',
        '\u0141': 'L',
        '\u023D': 'L',
        '\u2C62': 'L',
        '\u2C60': 'L',
        '\uA748': 'L',
        '\uA746': 'L',
        '\uA780': 'L',
        '\u01C7': 'LJ',
        '\u01C8': 'Lj',
        '\u24C2': 'M',
        '\uFF2D': 'M',
        '\u1E3E': 'M',
        '\u1E40': 'M',
        '\u1E42': 'M',
        '\u2C6E': 'M',
        '\u019C': 'M',
        '\u24C3': 'N',
        '\uFF2E': 'N',
        '\u01F8': 'N',
        '\u0143': 'N',
        '\u00D1': 'N',
        '\u1E44': 'N',
        '\u0147': 'N',
        '\u1E46': 'N',
        '\u0145': 'N',
        '\u1E4A': 'N',
        '\u1E48': 'N',
        '\u0220': 'N',
        '\u019D': 'N',
        '\uA790': 'N',
        '\uA7A4': 'N',
        '\u01CA': 'NJ',
        '\u01CB': 'Nj',
        '\u24C4': 'O',
        '\uFF2F': 'O',
        '\u00D2': 'O',
        '\u00D3': 'O',
        '\u00D4': 'O',
        '\u1ED2': 'O',
        '\u1ED0': 'O',
        '\u1ED6': 'O',
        '\u1ED4': 'O',
        '\u00D5': 'O',
        '\u1E4C': 'O',
        '\u022C': 'O',
        '\u1E4E': 'O',
        '\u014C': 'O',
        '\u1E50': 'O',
        '\u1E52': 'O',
        '\u014E': 'O',
        '\u022E': 'O',
        '\u0230': 'O',
        '\u00D6': 'O',
        '\u022A': 'O',
        '\u1ECE': 'O',
        '\u0150': 'O',
        '\u01D1': 'O',
        '\u020C': 'O',
        '\u020E': 'O',
        '\u01A0': 'O',
        '\u1EDC': 'O',
        '\u1EDA': 'O',
        '\u1EE0': 'O',
        '\u1EDE': 'O',
        '\u1EE2': 'O',
        '\u1ECC': 'O',
        '\u1ED8': 'O',
        '\u01EA': 'O',
        '\u01EC': 'O',
        '\u00D8': 'O',
        '\u01FE': 'O',
        '\u0186': 'O',
        '\u019F': 'O',
        '\uA74A': 'O',
        '\uA74C': 'O',
        '\u01A2': 'OI',
        '\uA74E': 'OO',
        '\u0222': 'OU',
        '\u24C5': 'P',
        '\uFF30': 'P',
        '\u1E54': 'P',
        '\u1E56': 'P',
        '\u01A4': 'P',
        '\u2C63': 'P',
        '\uA750': 'P',
        '\uA752': 'P',
        '\uA754': 'P',
        '\u24C6': 'Q',
        '\uFF31': 'Q',
        '\uA756': 'Q',
        '\uA758': 'Q',
        '\u024A': 'Q',
        '\u24C7': 'R',
        '\uFF32': 'R',
        '\u0154': 'R',
        '\u1E58': 'R',
        '\u0158': 'R',
        '\u0210': 'R',
        '\u0212': 'R',
        '\u1E5A': 'R',
        '\u1E5C': 'R',
        '\u0156': 'R',
        '\u1E5E': 'R',
        '\u024C': 'R',
        '\u2C64': 'R',
        '\uA75A': 'R',
        '\uA7A6': 'R',
        '\uA782': 'R',
        '\u24C8': 'S',
        '\uFF33': 'S',
        '\u1E9E': 'S',
        '\u015A': 'S',
        '\u1E64': 'S',
        '\u015C': 'S',
        '\u1E60': 'S',
        '\u0160': 'S',
        '\u1E66': 'S',
        '\u1E62': 'S',
        '\u1E68': 'S',
        '\u0218': 'S',
        '\u015E': 'S',
        '\u2C7E': 'S',
        '\uA7A8': 'S',
        '\uA784': 'S',
        '\u24C9': 'T',
        '\uFF34': 'T',
        '\u1E6A': 'T',
        '\u0164': 'T',
        '\u1E6C': 'T',
        '\u021A': 'T',
        '\u0162': 'T',
        '\u1E70': 'T',
        '\u1E6E': 'T',
        '\u0166': 'T',
        '\u01AC': 'T',
        '\u01AE': 'T',
        '\u023E': 'T',
        '\uA786': 'T',
        '\uA728': 'TZ',
        '\u24CA': 'U',
        '\uFF35': 'U',
        '\u00D9': 'U',
        '\u00DA': 'U',
        '\u00DB': 'U',
        '\u0168': 'U',
        '\u1E78': 'U',
        '\u016A': 'U',
        '\u1E7A': 'U',
        '\u016C': 'U',
        '\u00DC': 'U',
        '\u01DB': 'U',
        '\u01D7': 'U',
        '\u01D5': 'U',
        '\u01D9': 'U',
        '\u1EE6': 'U',
        '\u016E': 'U',
        '\u0170': 'U',
        '\u01D3': 'U',
        '\u0214': 'U',
        '\u0216': 'U',
        '\u01AF': 'U',
        '\u1EEA': 'U',
        '\u1EE8': 'U',
        '\u1EEE': 'U',
        '\u1EEC': 'U',
        '\u1EF0': 'U',
        '\u1EE4': 'U',
        '\u1E72': 'U',
        '\u0172': 'U',
        '\u1E76': 'U',
        '\u1E74': 'U',
        '\u0244': 'U',
        '\u24CB': 'V',
        '\uFF36': 'V',
        '\u1E7C': 'V',
        '\u1E7E': 'V',
        '\u01B2': 'V',
        '\uA75E': 'V',
        '\u0245': 'V',
        '\uA760': 'VY',
        '\u24CC': 'W',
        '\uFF37': 'W',
        '\u1E80': 'W',
        '\u1E82': 'W',
        '\u0174': 'W',
        '\u1E86': 'W',
        '\u1E84': 'W',
        '\u1E88': 'W',
        '\u2C72': 'W',
        '\u24CD': 'X',
        '\uFF38': 'X',
        '\u1E8A': 'X',
        '\u1E8C': 'X',
        '\u24CE': 'Y',
        '\uFF39': 'Y',
        '\u1EF2': 'Y',
        '\u00DD': 'Y',
        '\u0176': 'Y',
        '\u1EF8': 'Y',
        '\u0232': 'Y',
        '\u1E8E': 'Y',
        '\u0178': 'Y',
        '\u1EF6': 'Y',
        '\u1EF4': 'Y',
        '\u01B3': 'Y',
        '\u024E': 'Y',
        '\u1EFE': 'Y',
        '\u24CF': 'Z',
        '\uFF3A': 'Z',
        '\u0179': 'Z',
        '\u1E90': 'Z',
        '\u017B': 'Z',
        '\u017D': 'Z',
        '\u1E92': 'Z',
        '\u1E94': 'Z',
        '\u01B5': 'Z',
        '\u0224': 'Z',
        '\u2C7F': 'Z',
        '\u2C6B': 'Z',
        '\uA762': 'Z',
        '\u24D0': 'a',
        '\uFF41': 'a',
        '\u1E9A': 'a',
        '\u00E0': 'a',
        '\u00E1': 'a',
        '\u00E2': 'a',
        '\u1EA7': 'a',
        '\u1EA5': 'a',
        '\u1EAB': 'a',
        '\u1EA9': 'a',
        '\u00E3': 'a',
        '\u0101': 'a',
        '\u0103': 'a',
        '\u1EB1': 'a',
        '\u1EAF': 'a',
        '\u1EB5': 'a',
        '\u1EB3': 'a',
        '\u0227': 'a',
        '\u01E1': 'a',
        '\u00E4': 'a',
        '\u01DF': 'a',
        '\u1EA3': 'a',
        '\u00E5': 'a',
        '\u01FB': 'a',
        '\u01CE': 'a',
        '\u0201': 'a',
        '\u0203': 'a',
        '\u1EA1': 'a',
        '\u1EAD': 'a',
        '\u1EB7': 'a',
        '\u1E01': 'a',
        '\u0105': 'a',
        '\u2C65': 'a',
        '\u0250': 'a',
        '\uA733': 'aa',
        '\u00E6': 'ae',
        '\u01FD': 'ae',
        '\u01E3': 'ae',
        '\uA735': 'ao',
        '\uA737': 'au',
        '\uA739': 'av',
        '\uA73B': 'av',
        '\uA73D': 'ay',
        '\u24D1': 'b',
        '\uFF42': 'b',
        '\u1E03': 'b',
        '\u1E05': 'b',
        '\u1E07': 'b',
        '\u0180': 'b',
        '\u0183': 'b',
        '\u0253': 'b',
        '\u24D2': 'c',
        '\uFF43': 'c',
        '\u0107': 'c',
        '\u0109': 'c',
        '\u010B': 'c',
        '\u010D': 'c',
        '\u00E7': 'c',
        '\u1E09': 'c',
        '\u0188': 'c',
        '\u023C': 'c',
        '\uA73F': 'c',
        '\u2184': 'c',
        '\u24D3': 'd',
        '\uFF44': 'd',
        '\u1E0B': 'd',
        '\u010F': 'd',
        '\u1E0D': 'd',
        '\u1E11': 'd',
        '\u1E13': 'd',
        '\u1E0F': 'd',
        '\u0111': 'd',
        '\u018C': 'd',
        '\u0256': 'd',
        '\u0257': 'd',
        '\uA77A': 'd',
        '\u01F3': 'dz',
        '\u01C6': 'dz',
        '\u24D4': 'e',
        '\uFF45': 'e',
        '\u00E8': 'e',
        '\u00E9': 'e',
        '\u00EA': 'e',
        '\u1EC1': 'e',
        '\u1EBF': 'e',
        '\u1EC5': 'e',
        '\u1EC3': 'e',
        '\u1EBD': 'e',
        '\u0113': 'e',
        '\u1E15': 'e',
        '\u1E17': 'e',
        '\u0115': 'e',
        '\u0117': 'e',
        '\u00EB': 'e',
        '\u1EBB': 'e',
        '\u011B': 'e',
        '\u0205': 'e',
        '\u0207': 'e',
        '\u1EB9': 'e',
        '\u1EC7': 'e',
        '\u0229': 'e',
        '\u1E1D': 'e',
        '\u0119': 'e',
        '\u1E19': 'e',
        '\u1E1B': 'e',
        '\u0247': 'e',
        '\u025B': 'e',
        '\u01DD': 'e',
        '\u24D5': 'f',
        '\uFF46': 'f',
        '\u1E1F': 'f',
        '\u0192': 'f',
        '\uA77C': 'f',
        '\u24D6': 'g',
        '\uFF47': 'g',
        '\u01F5': 'g',
        '\u011D': 'g',
        '\u1E21': 'g',
        '\u011F': 'g',
        '\u0121': 'g',
        '\u01E7': 'g',
        '\u0123': 'g',
        '\u01E5': 'g',
        '\u0260': 'g',
        '\uA7A1': 'g',
        '\u1D79': 'g',
        '\uA77F': 'g',
        '\u24D7': 'h',
        '\uFF48': 'h',
        '\u0125': 'h',
        '\u1E23': 'h',
        '\u1E27': 'h',
        '\u021F': 'h',
        '\u1E25': 'h',
        '\u1E29': 'h',
        '\u1E2B': 'h',
        '\u1E96': 'h',
        '\u0127': 'h',
        '\u2C68': 'h',
        '\u2C76': 'h',
        '\u0265': 'h',
        '\u0195': 'hv',
        '\u24D8': 'i',
        '\uFF49': 'i',
        '\u00EC': 'i',
        '\u00ED': 'i',
        '\u00EE': 'i',
        '\u0129': 'i',
        '\u012B': 'i',
        '\u012D': 'i',
        '\u00EF': 'i',
        '\u1E2F': 'i',
        '\u1EC9': 'i',
        '\u01D0': 'i',
        '\u0209': 'i',
        '\u020B': 'i',
        '\u1ECB': 'i',
        '\u012F': 'i',
        '\u1E2D': 'i',
        '\u0268': 'i',
        '\u0131': 'i',
        '\u24D9': 'j',
        '\uFF4A': 'j',
        '\u0135': 'j',
        '\u01F0': 'j',
        '\u0249': 'j',
        '\u24DA': 'k',
        '\uFF4B': 'k',
        '\u1E31': 'k',
        '\u01E9': 'k',
        '\u1E33': 'k',
        '\u0137': 'k',
        '\u1E35': 'k',
        '\u0199': 'k',
        '\u2C6A': 'k',
        '\uA741': 'k',
        '\uA743': 'k',
        '\uA745': 'k',
        '\uA7A3': 'k',
        '\u24DB': 'l',
        '\uFF4C': 'l',
        '\u0140': 'l',
        '\u013A': 'l',
        '\u013E': 'l',
        '\u1E37': 'l',
        '\u1E39': 'l',
        '\u013C': 'l',
        '\u1E3D': 'l',
        '\u1E3B': 'l',
        '\u017F': 'l',
        '\u0142': 'l',
        '\u019A': 'l',
        '\u026B': 'l',
        '\u2C61': 'l',
        '\uA749': 'l',
        '\uA781': 'l',
        '\uA747': 'l',
        '\u01C9': 'lj',
        '\u24DC': 'm',
        '\uFF4D': 'm',
        '\u1E3F': 'm',
        '\u1E41': 'm',
        '\u1E43': 'm',
        '\u0271': 'm',
        '\u026F': 'm',
        '\u24DD': 'n',
        '\uFF4E': 'n',
        '\u01F9': 'n',
        '\u0144': 'n',
        '\u00F1': 'n',
        '\u1E45': 'n',
        '\u0148': 'n',
        '\u1E47': 'n',
        '\u0146': 'n',
        '\u1E4B': 'n',
        '\u1E49': 'n',
        '\u019E': 'n',
        '\u0272': 'n',
        '\u0149': 'n',
        '\uA791': 'n',
        '\uA7A5': 'n',
        '\u01CC': 'nj',
        '\u24DE': 'o',
        '\uFF4F': 'o',
        '\u00F2': 'o',
        '\u00F3': 'o',
        '\u00F4': 'o',
        '\u1ED3': 'o',
        '\u1ED1': 'o',
        '\u1ED7': 'o',
        '\u1ED5': 'o',
        '\u00F5': 'o',
        '\u1E4D': 'o',
        '\u022D': 'o',
        '\u1E4F': 'o',
        '\u014D': 'o',
        '\u1E51': 'o',
        '\u1E53': 'o',
        '\u014F': 'o',
        '\u022F': 'o',
        '\u0231': 'o',
        '\u00F6': 'o',
        '\u022B': 'o',
        '\u1ECF': 'o',
        '\u0151': 'o',
        '\u01D2': 'o',
        '\u020D': 'o',
        '\u020F': 'o',
        '\u01A1': 'o',
        '\u1EDD': 'o',
        '\u1EDB': 'o',
        '\u1EE1': 'o',
        '\u1EDF': 'o',
        '\u1EE3': 'o',
        '\u1ECD': 'o',
        '\u1ED9': 'o',
        '\u01EB': 'o',
        '\u01ED': 'o',
        '\u00F8': 'o',
        '\u01FF': 'o',
        '\u0254': 'o',
        '\uA74B': 'o',
        '\uA74D': 'o',
        '\u0275': 'o',
        '\u01A3': 'oi',
        '\u0223': 'ou',
        '\uA74F': 'oo',
        '\u24DF': 'p',
        '\uFF50': 'p',
        '\u1E55': 'p',
        '\u1E57': 'p',
        '\u01A5': 'p',
        '\u1D7D': 'p',
        '\uA751': 'p',
        '\uA753': 'p',
        '\uA755': 'p',
        '\u24E0': 'q',
        '\uFF51': 'q',
        '\u024B': 'q',
        '\uA757': 'q',
        '\uA759': 'q',
        '\u24E1': 'r',
        '\uFF52': 'r',
        '\u0155': 'r',
        '\u1E59': 'r',
        '\u0159': 'r',
        '\u0211': 'r',
        '\u0213': 'r',
        '\u1E5B': 'r',
        '\u1E5D': 'r',
        '\u0157': 'r',
        '\u1E5F': 'r',
        '\u024D': 'r',
        '\u027D': 'r',
        '\uA75B': 'r',
        '\uA7A7': 'r',
        '\uA783': 'r',
        '\u24E2': 's',
        '\uFF53': 's',
        '\u00DF': 's',
        '\u015B': 's',
        '\u1E65': 's',
        '\u015D': 's',
        '\u1E61': 's',
        '\u0161': 's',
        '\u1E67': 's',
        '\u1E63': 's',
        '\u1E69': 's',
        '\u0219': 's',
        '\u015F': 's',
        '\u023F': 's',
        '\uA7A9': 's',
        '\uA785': 's',
        '\u1E9B': 's',
        '\u24E3': 't',
        '\uFF54': 't',
        '\u1E6B': 't',
        '\u1E97': 't',
        '\u0165': 't',
        '\u1E6D': 't',
        '\u021B': 't',
        '\u0163': 't',
        '\u1E71': 't',
        '\u1E6F': 't',
        '\u0167': 't',
        '\u01AD': 't',
        '\u0288': 't',
        '\u2C66': 't',
        '\uA787': 't',
        '\uA729': 'tz',
        '\u24E4': 'u',
        '\uFF55': 'u',
        '\u00F9': 'u',
        '\u00FA': 'u',
        '\u00FB': 'u',
        '\u0169': 'u',
        '\u1E79': 'u',
        '\u016B': 'u',
        '\u1E7B': 'u',
        '\u016D': 'u',
        '\u00FC': 'u',
        '\u01DC': 'u',
        '\u01D8': 'u',
        '\u01D6': 'u',
        '\u01DA': 'u',
        '\u1EE7': 'u',
        '\u016F': 'u',
        '\u0171': 'u',
        '\u01D4': 'u',
        '\u0215': 'u',
        '\u0217': 'u',
        '\u01B0': 'u',
        '\u1EEB': 'u',
        '\u1EE9': 'u',
        '\u1EEF': 'u',
        '\u1EED': 'u',
        '\u1EF1': 'u',
        '\u1EE5': 'u',
        '\u1E73': 'u',
        '\u0173': 'u',
        '\u1E77': 'u',
        '\u1E75': 'u',
        '\u0289': 'u',
        '\u24E5': 'v',
        '\uFF56': 'v',
        '\u1E7D': 'v',
        '\u1E7F': 'v',
        '\u028B': 'v',
        '\uA75F': 'v',
        '\u028C': 'v',
        '\uA761': 'vy',
        '\u24E6': 'w',
        '\uFF57': 'w',
        '\u1E81': 'w',
        '\u1E83': 'w',
        '\u0175': 'w',
        '\u1E87': 'w',
        '\u1E85': 'w',
        '\u1E98': 'w',
        '\u1E89': 'w',
        '\u2C73': 'w',
        '\u24E7': 'x',
        '\uFF58': 'x',
        '\u1E8B': 'x',
        '\u1E8D': 'x',
        '\u24E8': 'y',
        '\uFF59': 'y',
        '\u1EF3': 'y',
        '\u00FD': 'y',
        '\u0177': 'y',
        '\u1EF9': 'y',
        '\u0233': 'y',
        '\u1E8F': 'y',
        '\u00FF': 'y',
        '\u1EF7': 'y',
        '\u1E99': 'y',
        '\u1EF5': 'y',
        '\u01B4': 'y',
        '\u024F': 'y',
        '\u1EFF': 'y',
        '\u24E9': 'z',
        '\uFF5A': 'z',
        '\u017A': 'z',
        '\u1E91': 'z',
        '\u017C': 'z',
        '\u017E': 'z',
        '\u1E93': 'z',
        '\u1E95': 'z',
        '\u01B6': 'z',
        '\u0225': 'z',
        '\u0240': 'z',
        '\u2C6C': 'z',
        '\uA763': 'z',
        '\u0386': '\u0391',
        '\u0388': '\u0395',
        '\u0389': '\u0397',
        '\u038A': '\u0399',
        '\u03AA': '\u0399',
        '\u038C': '\u039F',
        '\u038E': '\u03A5',
        '\u03AB': '\u03A5',
        '\u038F': '\u03A9',
        '\u03AC': '\u03B1',
        '\u03AD': '\u03B5',
        '\u03AE': '\u03B7',
        '\u03AF': '\u03B9',
        '\u03CA': '\u03B9',
        '\u0390': '\u03B9',
        '\u03CC': '\u03BF',
        '\u03CD': '\u03C5',
        '\u03CB': '\u03C5',
        '\u03B0': '\u03C5',
        '\u03C9': '\u03C9',
        '\u03C2': '\u03C3'
    };
    return Diacritics;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var OptionList = /** @class */ (function () {
    function OptionList(options) {
        /* Consider using these for performance improvement. */
        // private _selection: Array<Option>;
        // private _filtered: Array<Option>;
        // private _value: Array<string>;
        this._highlightedOption = null;
        if (typeof options === 'undefined' || options === null) {
            options = [];
        }
        this._options = options.map(function (option) {
            /** @type {?} */
            var o = new Option(option);
            if (option.disabled) {
                o.disabled = true;
            }
            return o;
        });
        this._hasShown = this._options.length > 0;
        this.highlight();
    }
    Object.defineProperty(OptionList.prototype, "hasShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasShown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "hasSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "options", {
        /** Options. **/
        get: /**
         * Options. *
         * @return {?}
         */
        function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    OptionList.prototype.getOptionsByValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.options.filter(function (option) {
            return option.value === value;
        });
    };
    Object.defineProperty(OptionList.prototype, "value", {
        /** Value. **/
        get: /**
         * Value. *
         * @return {?}
         */
        function () {
            return this.selection.map(function (option) { return option.value; });
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            v = typeof v === 'undefined' || v === null ? [] : v;
            this.options.forEach(function (option) {
                option.selected = v.indexOf(option.value) > -1;
            });
            this.updateHasSelected();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "selection", {
        /** Selection. **/
        get: /**
         * Selection. *
         * @return {?}
         */
        function () {
            return this.options.filter(function (option) { return option.selected; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    OptionList.prototype.select = /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    function (option, multiple) {
        if (!multiple) {
            this.clearSelection();
        }
        option.selected = true;
        this.updateHasSelected();
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.deselect = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        option.selected = false;
        this.updateHasSelected();
    };
    /**
     * @return {?}
     */
    OptionList.prototype.clearSelection = /**
     * @return {?}
     */
    function () {
        this.options.forEach(function (option) {
            option.selected = false;
        });
        this._hasSelected = false;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.updateHasSelected = /**
     * @return {?}
     */
    function () {
        this._hasSelected = this.options.some(function (option) { return option.selected; });
    };
    Object.defineProperty(OptionList.prototype, "filtered", {
        /** Filter. **/
        get: /**
         * Filter. *
         * @return {?}
         */
        function () {
            return this.options.filter(function (option) { return option.shown; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "filteredEnabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.options.filter(function (option) { return option.shown && !option.disabled; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} term
     * @return {?}
     */
    OptionList.prototype.filter = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        /** @type {?} */
        var anyShown = false;
        if (term.trim() === '') {
            this.resetFilter();
            anyShown = this.options.length > 0;
        }
        else {
            this.options.forEach(function (option) {
                /** @type {?} */
                var l = Diacritics.strip(option.label).toUpperCase();
                /** @type {?} */
                var t = Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
                if (option.shown) {
                    anyShown = true;
                }
            });
        }
        this.highlight();
        this._hasShown = anyShown;
        return anyShown;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.resetFilter = /**
     * @return {?}
     */
    function () {
        this.options.forEach(function (option) {
            option.shown = true;
        });
    };
    Object.defineProperty(OptionList.prototype, "highlightedOption", {
        /** Highlight. **/
        get: /**
         * Highlight. *
         * @return {?}
         */
        function () {
            return this._highlightedOption;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OptionList.prototype.highlight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var option = this.hasShownSelected() ?
            this.getFirstShownSelected() : this.getFirstShown();
        this.highlightOption(option);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.highlightOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.clearHighlightedOption();
        if (option !== null) {
            option.highlighted = true;
            this._highlightedOption = option;
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightNextOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shownEnabledOptions = this.filteredEnabled;
        /** @type {?} */
        var index = this.getHighlightedIndexFromList(shownEnabledOptions);
        if (index > -1 && index < shownEnabledOptions.length - 1) {
            this.highlightOption(shownEnabledOptions[index + 1]);
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightPreviousOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shownEnabledOptions = this.filteredEnabled;
        /** @type {?} */
        var index = this.getHighlightedIndexFromList(shownEnabledOptions);
        if (index > 0) {
            this.highlightOption(shownEnabledOptions[index - 1]);
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.clearHighlightedOption = /**
     * @return {?}
     */
    function () {
        if (this.highlightedOption !== null) {
            this.highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndexFromList = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndex = /**
     * @return {?}
     */
    function () {
        return this.getHighlightedIndexFromList(this.filtered);
    };
    /** Util. **/
    /**
     * Util. *
     * @return {?}
     */
    OptionList.prototype.hasShownSelected = /**
     * Util. *
     * @return {?}
     */
    function () {
        return this.options.some(function (option) {
            return option.shown && option.selected;
        });
    };
    /**
     * @return {?}
     */
    OptionList.prototype.getFirstShown = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __values */])(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                var option = _c.value;
                if (option.shown) {
                    return option;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.getFirstShownSelected = /**
     * @return {?}
     */
    function () {
        var e_2, _a;
        try {
            for (var _b = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __values */])(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                var option = _c.value;
                if (option.shown && option.selected) {
                    return option;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return null;
    };
    // v0 and v1 are assumed not to be undefined or null.
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    OptionList.equalValues = 
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    function (v0, v1) {
        if (v0.length !== v1.length) {
            return false;
        }
        /** @type {?} */
        var a = v0.slice().sort();
        /** @type {?} */
        var b = v1.slice().sort();
        return a.every(function (v, i) {
            return v === b[i];
        });
    };
    return OptionList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var SelectDropdownComponent = /** @class */ (function () {
    function SelectDropdownComponent(hostElement) {
        this.hostElement = hostElement;
        this.optionClicked = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.optionsListClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.singleFilterClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.singleFilterFocus = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.singleFilterInput = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.singleFilterKeydown = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.disabledColor = '#fff';
        this.disabledTextColor = '9e9e9e';
    }
    /** Event handlers. **/
    /**
     * Event handlers. *
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnInit = /**
     * Event handlers. *
     * @return {?}
     */
    function () {
        this.optionsReset();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.moveHighlightedIntoView();
        if (!this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsListClick = /**
     * @return {?}
     */
    function () {
        this.optionsListClick.emit(null);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterClick = /**
     * @return {?}
     */
    function () {
        this.singleFilterClick.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterInput.emit(event.target.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterKeydown.emit(event);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterFocus = /**
     * @return {?}
     */
    function () {
        this.singleFilterFocus.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsWheel = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleOptionsWheel(event);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionMouseover = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionList.highlightOption(option);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionClick = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionClicked.emit(option);
    };
    /** Initialization. **/
    /**
     * Initialization. *
     * @return {?}
     */
    SelectDropdownComponent.prototype.optionsReset = /**
     * Initialization. *
     * @return {?}
     */
    function () {
        this.optionList.filter('');
        this.optionList.highlight();
    };
    /** View. **/
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.getOptionStyle = /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option.highlighted) {
            /** @type {?} */
            var style = {};
            if (typeof this.highlightColor !== 'undefined') {
                style['background-color'] = this.highlightColor;
            }
            if (typeof this.highlightTextColor !== 'undefined') {
                style['color'] = this.highlightTextColor;
            }
            return style;
        }
        else {
            return {};
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.moveHighlightedIntoView = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var list = this.optionsList.nativeElement;
        /** @type {?} */
        var listHeight = list.offsetHeight;
        /** @type {?} */
        var itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            /** @type {?} */
            var item = list.children[0].children[itemIndex];
            /** @type {?} */
            var itemHeight = item.offsetHeight;
            /** @type {?} */
            var itemTop = itemIndex * itemHeight;
            /** @type {?} */
            var itemBottom = itemTop + itemHeight;
            /** @type {?} */
            var viewTop = list.scrollTop;
            /** @type {?} */
            var viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SelectDropdownComponent.prototype.handleOptionsWheel = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var div = this.optionsList.nativeElement;
        /** @type {?} */
        var atTop = div.scrollTop === 0;
        /** @type {?} */
        var atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    };
    SelectDropdownComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                    selector: 'select-dropdown',
                    template: "<div\n    [ngClass]=\"{'below': isBelow, 'above': !isBelow}\"\n    [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\">\n\n    <div class=\"filter\"\n        *ngIf=\"!multiple && filterEnabled\">\n        <input\n            #filterInput\n            autocomplete=\"off\"\n            [placeholder]=\"placeholder\"\n            (click)=\"onSingleFilterClick()\"\n            (input)=\"onSingleFilterInput($event)\"\n            (keydown)=\"onSingleFilterKeydown($event)\"\n            (focus)=\"onSingleFilterFocus()\">\n    </div>\n\n    <div class=\"options\"\n        (click)=\"onOptionsListClick()\"\n        #optionsList>\n        <ul\n            (wheel)=\"onOptionsWheel($event)\">\n            <li *ngFor=\"let option of optionList.filtered\"\n                [ngClass]=\"{'highlighted': option.highlighted, 'selected': option.selected, 'disabled': option.disabled}\"\n                [ngStyle]=\"getOptionStyle(option)\"\n                (click)=\"onOptionClick(option)\"\n                (mouseover)=\"onOptionMouseover(option)\">\n                <ng-container *ngTemplateOutlet=\"optionTemplate; context:{option: option.wrappedOption}\"></ng-container>\n                <span *ngIf=\"!optionTemplate\">{{option.label}}</span>\n            </li>\n            <li\n                *ngIf=\"!optionList.hasShown\"\n                class=\"message\">\n                {{notFoundMsg}}\n            </li>\n        </ul>\n    </div>\n</div>\n",
                    encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
                    styles: ["select-dropdown,select-dropdown *{box-sizing:border-box}select-dropdown>div{background-color:#fff;border:1px solid #ccc;box-sizing:border-box;position:absolute;z-index:1}select-dropdown>div.above{border-bottom:none}select-dropdown>div.below{border-top:none}select-dropdown>div .filter{padding:3px;width:100%}select-dropdown>div .filter input{border:1px solid #eee;box-sizing:border-box;padding:4px;width:100%}select-dropdown>div .options{max-height:200px;overflow-y:auto}select-dropdown>div .options ul{list-style:none;margin:0;padding:0}select-dropdown>div .options ul li{padding:4px 8px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}select-dropdown .selected{background-color:#e0e0e0}select-dropdown .highlighted,select-dropdown .selected.highlighted{background-color:#2196f3;color:#fff}select-dropdown .disabled{background-color:#fff;color:#9e9e9e;cursor:default;pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    SelectDropdownComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] }
    ]; };
    SelectDropdownComponent.propDecorators = {
        filterEnabled: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        highlightColor: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        highlightTextColor: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        left: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        multiple: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        notFoundMsg: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        optionList: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        isBelow: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        top: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        width: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        placeholder: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        optionTemplate: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        optionClicked: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        optionsListClick: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        singleFilterClick: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        singleFilterFocus: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        singleFilterInput: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        singleFilterKeydown: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        filterInput: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ['filterInput',] }],
        optionsList: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ['optionsList',] }]
    };
    return SelectDropdownComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var SELECT_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return SelectComponent; }),
    multi: true
};
var SelectComponent = /** @class */ (function () {
    function SelectComponent(hostElement) {
        this.hostElement = hostElement;
        // Data input.
        this.options = [];
        // Functionality settings.
        this.allowClear = false;
        this.disabled = false;
        this.multiple = false;
        this.noFilter = 0;
        // Text settings.
        this.notFoundMsg = 'No results found';
        this.placeholder = '';
        this.filterPlaceholder = '';
        this.label = '';
        // Output events.
        this.opened = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.closed = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.selected = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.deselected = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.focus = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.blur = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.noOptionsFound = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.filterInputChanged = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this._value = [];
        this.optionList = new OptionList([]);
        // View state variables.
        this.hasFocus = false;
        this.isOpen = false;
        this.isBelow = true;
        this.filterEnabled = true;
        this.filterInputWidth = 1;
        this.isDisabled = false;
        this.placeholderView = '';
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.optionListClicked = false;
        this.optionClicked = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        /**
         * Keys. *
         */
        this.KEYS = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            UP: 38,
            DOWN: 40
        };
    }
    /** Event handlers. **/
    /**
     * Event handlers. *
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = /**
     * Event handlers. *
     * @return {?}
     */
    function () {
        this.placeholderView = this.placeholder;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.handleInputChanges(changes);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateState();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowBlur = /**
     * @return {?}
     */
    function () {
        this._blur();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowClick = /**
     * @return {?}
     */
    function () {
        if (!this.selectContainerClicked &&
            (!this.optionListClicked || (this.optionListClicked && this.optionClicked))) {
            this.closeDropdown(this.optionClicked);
            if (!this.optionClicked) {
                this._blur();
            }
        }
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.optionListClicked = false;
        this.optionClicked = false;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowResize = /**
     * @return {?}
     */
    function () {
        this.updateWidth();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectContainerClicked = true;
        if (!this.clearClicked) {
            this.toggleDropdown();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerFocus = /**
     * @return {?}
     */
    function () {
        this._focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleSelectContainerKeydown(event);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onOptionsListClick = /**
     * @return {?}
     */
    function () {
        this.optionListClicked = true;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDropdownOptionClicked = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionClicked = true;
        this.multiple ? this.toggleSelectOption(option) : this.selectOption(option);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterClick = /**
     * @return {?}
     */
    function () {
        this.selectContainerClicked = true;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterFocus = /**
     * @return {?}
     */
    function () {
        this._focus();
    };
    /**
     * @param {?} term
     * @return {?}
     */
    SelectComponent.prototype.onFilterInput = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        this.filterInputChanged.emit(term);
        this.filter(term);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleSingleFilterKeydown(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleMultipleFilterKeydown(event);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterFocus = /**
     * @return {?}
     */
    function () {
        this._focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onClearSelectionClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.clearClicked = true;
        this.clearSelection();
        this.closeDropdown(true);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDeselectOptionClick = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.clearClicked = true;
        this.deselectOption(option);
    };
    /** API. **/
    // TODO fix issues with global click/key handler that closes the dropdown.
    /**
     * API. *
     * @return {?}
     */
    // TODO fix issues with global click/key handler that closes the dropdown.
    SelectComponent.prototype.open = /**
     * API. *
     * @return {?}
     */
    // TODO fix issues with global click/key handler that closes the dropdown.
    function () {
        this.openDropdown();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.closeDropdown(false);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.clearSelection();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.select = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.writeValue(value);
    };
    /** ControlValueAccessor interface methods. **/
    /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.writeValue = /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /** Input change handling. **/
    /**
     * Input change handling. *
     * @param {?} changes
     * @return {?}
     */
    SelectComponent.prototype.handleInputChanges = /**
     * Input change handling. *
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var optionsChanged = changes.hasOwnProperty('options');
        /** @type {?} */
        var noFilterChanged = changes.hasOwnProperty('noFilter');
        /** @type {?} */
        var placeholderChanged = changes.hasOwnProperty('placeholder');
        if (optionsChanged) {
            this.updateOptionList(changes.options.currentValue);
            this.updateState();
        }
        if (optionsChanged || noFilterChanged) {
            this.updateFilterEnabled();
        }
        if (placeholderChanged) {
            this.updateState();
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    SelectComponent.prototype.updateOptionList = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.optionList = new OptionList(options);
        this.optionList.value = this._value;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateFilterEnabled = /**
     * @return {?}
     */
    function () {
        this.filterEnabled = this.optionList.options.length >= this.noFilter;
    };
    Object.defineProperty(SelectComponent.prototype, "value", {
        /** Value. **/
        get: /**
         * Value. *
         * @return {?}
         */
        function () {
            return this.multiple ? this._value : this._value[0];
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (typeof v === 'undefined' || v === null || v === '') {
                v = [];
            }
            else if (typeof v === 'string') {
                v = [v];
            }
            else if (!Array.isArray(v)) {
                throw new TypeError('Value must be a string or an array.');
            }
            this.optionList.value = v;
            this._value = v;
            this.updateState();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SelectComponent.prototype.valueChanged = /**
     * @return {?}
     */
    function () {
        this._value = this.optionList.value;
        this.updateState();
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateState = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.placeholderView = this.optionList.hasSelected ? '' : this.placeholder;
        setTimeout(function () {
            _this.updateFilterWidth();
        });
    };
    /** Select. **/
    /**
     * Select. *
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.selectOption = /**
     * Select. *
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (!option.selected && !option.disabled) {
            this.optionList.select(option, this.multiple);
            this.valueChanged();
            this.selected.emit(option.wrappedOption);
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.deselectOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (option.selected) {
            this.optionList.deselect(option);
            this.valueChanged();
            this.deselected.emit(option.wrappedOption);
            setTimeout(function () {
                if (_this.multiple) {
                    _this.updatePosition();
                    _this.optionList.highlight();
                    if (_this.isOpen) {
                        _this.dropdown.moveHighlightedIntoView();
                    }
                }
            });
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.clearSelection = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selection = this.optionList.selection;
        if (selection.length > 0) {
            this.optionList.clearSelection();
            this.valueChanged();
            if (selection.length === 1) {
                this.deselected.emit(selection[0].wrappedOption);
            }
            else {
                this.deselected.emit(selection.map(function (option) { return option.wrappedOption; }));
            }
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.toggleSelectOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        option.selected ? this.deselectOption(option) : this.selectOption(option);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.selectHighlightedOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var option = this.optionList.highlightedOption;
        if (option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.deselectLast = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sel = this.optionList.selection;
        if (sel.length > 0) {
            /** @type {?} */
            var option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    };
    /** Dropdown. **/
    /**
     * Dropdown. *
     * @return {?}
     */
    SelectComponent.prototype.toggleDropdown = /**
     * Dropdown. *
     * @return {?}
     */
    function () {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isOpen) {
            this.isOpen = true;
            this.updateWidth();
            setTimeout(function () {
                _this.updatePosition();
                if (_this.multiple && _this.filterEnabled) {
                    _this.filterInput.nativeElement.focus();
                }
                _this.opened.emit(null);
            });
        }
    };
    /**
     * @param {?} focus
     * @return {?}
     */
    SelectComponent.prototype.closeDropdown = /**
     * @param {?} focus
     * @return {?}
     */
    function (focus) {
        if (this.isOpen) {
            this.clearFilterInput();
            this.updateFilterWidth();
            this.isOpen = false;
            if (focus) {
                this._focusSelectContainer();
            }
            this.closed.emit(null);
        }
    };
    /** Filter. **/
    /**
     * Filter. *
     * @param {?} term
     * @return {?}
     */
    SelectComponent.prototype.filter = /**
     * Filter. *
     * @param {?} term
     * @return {?}
     */
    function (term) {
        var _this = this;
        if (this.multiple) {
            if (!this.isOpen) {
                this.openDropdown();
            }
            this.updateFilterWidth();
        }
        setTimeout(function () {
            /** @type {?} */
            var hasShown = _this.optionList.filter(term);
            if (!hasShown) {
                _this.noOptionsFound.emit(term);
            }
        });
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.clearFilterInput = /**
     * @return {?}
     */
    function () {
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.setMultipleFilterInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSelectContainerKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var key = event.which;
        if (this.isOpen) {
            if (key === this.KEYS.ESC || (key === this.KEYS.UP && event.altKey)) {
                this.closeDropdown(true);
            }
            else if (key === this.KEYS.TAB) {
                this.closeDropdown(event.shiftKey);
                this._blur();
            }
            else if (key === this.KEYS.ENTER) {
                this.selectHighlightedOption();
            }
            else if (key === this.KEYS.UP) {
                this.optionList.highlightPreviousOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
            else if (key === this.KEYS.DOWN) {
                this.optionList.highlightNextOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
        }
        else {
            // DEPRICATED --> SPACE
            if (key === this.KEYS.ENTER || key === this.KEYS.SPACE ||
                (key === this.KEYS.DOWN && event.altKey)) {
                /* FIREFOX HACK:
                 *
                 * The setTimeout is added to prevent the enter keydown event
                 * to be triggered for the filter input field, which causes
                 * the dropdown to be closed again.
                 */
                setTimeout(function () { _this.openDropdown(); });
            }
            else if (key === this.KEYS.TAB) {
                this._blur();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleMultipleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.which;
        if (key === this.KEYS.BACKSPACE) {
            if (this.optionList.hasSelected && this.filterEnabled &&
                this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.which;
        if (key === this.KEYS.ESC || key === this.KEYS.TAB
            || key === this.KEYS.UP || key === this.KEYS.DOWN
            || key === this.KEYS.ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    };
    /** View. **/
    /**
     * View. *
     * @return {?}
     */
    SelectComponent.prototype._blur = /**
     * View. *
     * @return {?}
     */
    function () {
        if (this.hasFocus) {
            this.hasFocus = false;
            this.onTouched();
            this.blur.emit(null);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype._focus = /**
     * @return {?}
     */
    function () {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.focus.emit(null);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype._focusSelectContainer = /**
     * @return {?}
     */
    function () {
        this.selectionSpan.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateWidth = /**
     * @return {?}
     */
    function () {
        this.width = this.selectionSpan.nativeElement.getBoundingClientRect().width;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updatePosition = /**
     * @return {?}
     */
    function () {
        if (typeof this.dropdown !== 'undefined') {
            /** @type {?} */
            var hostRect = this.hostElement.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var spanRect = this.selectionSpan.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var dropRect = this.dropdown.hostElement.nativeElement.firstElementChild.getBoundingClientRect();
            /** @type {?} */
            var windowHeight = window.innerHeight;
            /** @type {?} */
            var top_1 = spanRect.top - hostRect.top;
            /** @type {?} */
            var bottom = hostRect.bottom + dropRect.height;
            this.isBelow = bottom < windowHeight;
            this.left = spanRect.left - hostRect.left;
            this.top = this.isBelow ? top_1 + spanRect.height : top_1 - dropRect.height;
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateFilterWidth = /**
     * @return {?}
     */
    function () {
        if (typeof this.filterInput !== 'undefined') {
            /** @type {?} */
            var value = this.filterInput.nativeElement.value;
            this.filterInputWidth = value.length === 0 ?
                1 + this.placeholderView.length * 10 : 1 + value.length * 10;
        }
    };
    SelectComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                    selector: 'ng-select',
                    template: "<label\n    *ngIf=\"label !== ''\">\n    {{label}}\n</label>\n<div\n    #selection\n    [attr.tabindex]=\"disabled ? null : 0\"\n    [ngClass]=\"{'open': isOpen, 'focus': hasFocus, 'below': isBelow, 'above': !isBelow, 'disabled': disabled}\"\n    (click)=\"onSelectContainerClick($event)\"\n    (focus)=\"onSelectContainerFocus()\"\n    (keydown)=\"onSelectContainerKeydown($event)\">\n\n    <div class=\"single\"\n        *ngIf=\"!multiple\">\n        <div class=\"value\"\n            *ngIf=\"optionList.hasSelected\">\n            <ng-container *ngTemplateOutlet=\"optionTemplate; context:{option: optionList.selection[0].wrappedOption, onDeselectOptionClick: onDeselectOptionClick}\"></ng-container>\n            <span *ngIf=\"!optionTemplate\">{{optionList.selection[0].label}}</span>\n        </div>\n        <div class=\"placeholder\"\n            *ngIf=\"!optionList.hasSelected\">\n            {{placeholderView}}\n        </div>\n        <div class=\"clear\"\n            *ngIf=\"allowClear && optionList.hasSelected\"\n            (click)=\"onClearSelectionClick($event)\">\n            &#x2715;\n        </div>\n        <div class=\"toggle\"\n            *ngIf=\"isOpen\">\n            &#x25B2;\n        </div>\n        <div class=\"toggle\"\n            *ngIf=\"!isOpen\">\n            &#x25BC;\n        </div>\n    </div>\n\n    <div class=\"multiple\"\n        *ngIf=\"multiple\">\n        <div class=\"option\"\n            *ngFor=\"let option of optionList.selection\">\n            <span class=\"deselect-option\"\n                (click)=onDeselectOptionClick(option)>\n                &#x2715;\n            </span>\n            {{option.label}}\n        </div>\n        <div class=\"placeholder\"\n            *ngIf=\"!filterEnabled && !optionList.hasSelected\">\n            {{placeholderView}}\n        </div>\n        <input\n            *ngIf=\"filterEnabled\"\n            #filterInput\n            autocomplete=\"off\"\n            tabindex=\"-1\"\n            [placeholder]=\"placeholderView\"\n            [ngStyle]=\"{'width.px': filterInputWidth}\"\n            (input)=\"onFilterInput($event.target.value)\"\n            (keydown)=\"onMultipleFilterKeydown($event)\"\n            (focus)=\"onMultipleFilterFocus()\"/>\n    </div>\n\n</div>\n<select-dropdown\n    *ngIf=\"isOpen\"\n    #dropdown\n    [multiple]=\"multiple\"\n    [optionList]=\"optionList\"\n    [notFoundMsg]=\"notFoundMsg\"\n    [highlightColor]=\"highlightColor\"\n    [highlightTextColor]=\"highlightTextColor\"\n    [filterEnabled]=\"filterEnabled\"\n    [placeholder]=\"filterPlaceholder\"\n    [isBelow]=\"isBelow\"\n    [width]=\"width\"\n    [top]=\"top\"\n    [left]=\"left\"\n    [optionTemplate]=\"optionTemplate\"\n    (optionClicked)=\"onDropdownOptionClicked($event)\"\n    (optionsListClick)=\"onOptionsListClick()\"\n    (singleFilterClick)=\"onSingleFilterClick()\"\n    (singleFilterFocus)=\"onSingleFilterFocus()\"\n    (singleFilterInput)=\"onFilterInput($event)\"\n    (singleFilterKeydown)=\"onSingleFilterKeydown($event)\">\n</select-dropdown>\n",
                    providers: [SELECT_VALUE_ACCESSOR],
                    encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
                    styles: ["ng-select{display:inline-block;margin:0;position:relative;vertical-align:middle;width:100%}ng-select *{box-sizing:border-box}ng-select>div{border:1px solid #ddd;box-sizing:border-box;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}ng-select>div.disabled{background-color:#eee;color:#aaa;cursor:default;pointer-events:none}ng-select>div>div.single{display:flex;height:30px;width:100%}ng-select>div>div.single>div.placeholder,ng-select>div>div.single>div.value{flex:1;line-height:30px;overflow:hidden;padding:0 10px;white-space:nowrap}ng-select>div>div.single>div.placeholder{color:#757575}ng-select>div>div.single>div.clear,ng-select>div>div.single>div.toggle{color:#aaa;line-height:30px;text-align:center;width:30px}ng-select>div>div.single>div.clear:hover,ng-select>div>div.single>div.toggle:hover{background-color:#ececec}ng-select>div>div.single>div.clear{font-size:18px}ng-select>div>div.single>div.toggle{font-size:14px}ng-select>div>div.multiple{display:flex;flex-flow:row wrap;height:100%;min-height:30px;padding:0 10px;width:100%}ng-select>div>div.multiple>div.option{background-color:#eee;border:1px solid #aaa;border-radius:4px;color:#333;cursor:default;display:inline-block;flex-shrink:0;font-size:14px;line-height:22px;margin:3px 5px 3px 0;padding:0 4px}ng-select>div>div.multiple>div.option span.deselect-option{color:#aaa;cursor:pointer;font-size:14px;height:20px;line-height:20px}ng-select>div>div.multiple>div.option span.deselect-option:hover{color:#555}ng-select>div>div.multiple input{background-color:transparent;border:none;cursor:pointer;height:30px;line-height:30px;padding:0}ng-select>div>div.multiple input:focus{outline:0}ng-select label{color:rgba(0,0,0,.38);display:block;font-size:13px;padding:4px 0}"]
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] }
    ]; };
    SelectComponent.propDecorators = {
        options: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        allowClear: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        disabled: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        multiple: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        noFilter: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        highlightColor: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        highlightTextColor: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        notFoundMsg: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        placeholder: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        filterPlaceholder: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        label: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        opened: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        closed: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        selected: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        deselected: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        focus: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        blur: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        noOptionsFound: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        filterInputChanged: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        selectionSpan: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ['selection',] }],
        dropdown: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ['dropdown',] }],
        filterInput: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"], args: ['filterInput',] }],
        optionTemplate: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ContentChild"], args: ['optionTemplate',] }],
        onWindowBlur: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"], args: ['window:blur',] }],
        onWindowClick: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"], args: ['window:click',] }],
        onWindowResize: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"], args: ['window:resize',] }]
    };
    return SelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var SelectModule = /** @class */ (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    declarations: [
                        SelectComponent,
                        SelectDropdownComponent
                    ],
                    exports: [
                        SelectComponent
                    ],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
                    ]
                },] }
    ];
    return SelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2VsZWN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1zZWxlY3QvbGliL29wdGlvbi50cyIsIm5nOi8vbmctc2VsZWN0L2xpYi9kaWFjcml0aWNzLnRzIiwibmc6Ly9uZy1zZWxlY3QvbGliL29wdGlvbi1saXN0LnRzIiwibmc6Ly9uZy1zZWxlY3QvbGliL3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiLCJuZzovL25nLXNlbGVjdC9saWIvc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vbmctc2VsZWN0L2xpYi9uZy1zZWxlY3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SU9wdGlvbn0gZnJvbSAnLi9vcHRpb24uaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIE9wdGlvbiB7XG5cbiAgICB3cmFwcGVkT3B0aW9uOiBJT3B0aW9uO1xuXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgaGlnaGxpZ2h0ZWQ6IGJvb2xlYW47XG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgc2hvd246IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb246IElPcHRpb24pIHtcbiAgICAgICAgdGhpcy53cmFwcGVkT3B0aW9uID0gb3B0aW9uO1xuXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd24gPSB0cnVlO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy53cmFwcGVkT3B0aW9uLnZhbHVlO1xuICAgIH1cblxuICAgIGdldCBsYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy53cmFwcGVkT3B0aW9uLmxhYmVsO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBEaWFjcml0aWNzIHtcblxuICAgIHN0YXRpYyBESUFDUklUSUNTID0ge1xuICAgICAgICAnXFx1MjRCNic6ICdBJyxcbiAgICAgICAgJ1xcdUZGMjEnOiAnQScsXG4gICAgICAgICdcXHUwMEMwJzogJ0EnLFxuICAgICAgICAnXFx1MDBDMSc6ICdBJyxcbiAgICAgICAgJ1xcdTAwQzInOiAnQScsXG4gICAgICAgICdcXHUxRUE2JzogJ0EnLFxuICAgICAgICAnXFx1MUVBNCc6ICdBJyxcbiAgICAgICAgJ1xcdTFFQUEnOiAnQScsXG4gICAgICAgICdcXHUxRUE4JzogJ0EnLFxuICAgICAgICAnXFx1MDBDMyc6ICdBJyxcbiAgICAgICAgJ1xcdTAxMDAnOiAnQScsXG4gICAgICAgICdcXHUwMTAyJzogJ0EnLFxuICAgICAgICAnXFx1MUVCMCc6ICdBJyxcbiAgICAgICAgJ1xcdTFFQUUnOiAnQScsXG4gICAgICAgICdcXHUxRUI0JzogJ0EnLFxuICAgICAgICAnXFx1MUVCMic6ICdBJyxcbiAgICAgICAgJ1xcdTAyMjYnOiAnQScsXG4gICAgICAgICdcXHUwMUUwJzogJ0EnLFxuICAgICAgICAnXFx1MDBDNCc6ICdBJyxcbiAgICAgICAgJ1xcdTAxREUnOiAnQScsXG4gICAgICAgICdcXHUxRUEyJzogJ0EnLFxuICAgICAgICAnXFx1MDBDNSc6ICdBJyxcbiAgICAgICAgJ1xcdTAxRkEnOiAnQScsXG4gICAgICAgICdcXHUwMUNEJzogJ0EnLFxuICAgICAgICAnXFx1MDIwMCc6ICdBJyxcbiAgICAgICAgJ1xcdTAyMDInOiAnQScsXG4gICAgICAgICdcXHUxRUEwJzogJ0EnLFxuICAgICAgICAnXFx1MUVBQyc6ICdBJyxcbiAgICAgICAgJ1xcdTFFQjYnOiAnQScsXG4gICAgICAgICdcXHUxRTAwJzogJ0EnLFxuICAgICAgICAnXFx1MDEwNCc6ICdBJyxcbiAgICAgICAgJ1xcdTAyM0EnOiAnQScsXG4gICAgICAgICdcXHUyQzZGJzogJ0EnLFxuICAgICAgICAnXFx1QTczMic6ICdBQScsXG4gICAgICAgICdcXHUwMEM2JzogJ0FFJyxcbiAgICAgICAgJ1xcdTAxRkMnOiAnQUUnLFxuICAgICAgICAnXFx1MDFFMic6ICdBRScsXG4gICAgICAgICdcXHVBNzM0JzogJ0FPJyxcbiAgICAgICAgJ1xcdUE3MzYnOiAnQVUnLFxuICAgICAgICAnXFx1QTczOCc6ICdBVicsXG4gICAgICAgICdcXHVBNzNBJzogJ0FWJyxcbiAgICAgICAgJ1xcdUE3M0MnOiAnQVknLFxuICAgICAgICAnXFx1MjRCNyc6ICdCJyxcbiAgICAgICAgJ1xcdUZGMjInOiAnQicsXG4gICAgICAgICdcXHUxRTAyJzogJ0InLFxuICAgICAgICAnXFx1MUUwNCc6ICdCJyxcbiAgICAgICAgJ1xcdTFFMDYnOiAnQicsXG4gICAgICAgICdcXHUwMjQzJzogJ0InLFxuICAgICAgICAnXFx1MDE4Mic6ICdCJyxcbiAgICAgICAgJ1xcdTAxODEnOiAnQicsXG4gICAgICAgICdcXHUyNEI4JzogJ0MnLFxuICAgICAgICAnXFx1RkYyMyc6ICdDJyxcbiAgICAgICAgJ1xcdTAxMDYnOiAnQycsXG4gICAgICAgICdcXHUwMTA4JzogJ0MnLFxuICAgICAgICAnXFx1MDEwQSc6ICdDJyxcbiAgICAgICAgJ1xcdTAxMEMnOiAnQycsXG4gICAgICAgICdcXHUwMEM3JzogJ0MnLFxuICAgICAgICAnXFx1MUUwOCc6ICdDJyxcbiAgICAgICAgJ1xcdTAxODcnOiAnQycsXG4gICAgICAgICdcXHUwMjNCJzogJ0MnLFxuICAgICAgICAnXFx1QTczRSc6ICdDJyxcbiAgICAgICAgJ1xcdTI0QjknOiAnRCcsXG4gICAgICAgICdcXHVGRjI0JzogJ0QnLFxuICAgICAgICAnXFx1MUUwQSc6ICdEJyxcbiAgICAgICAgJ1xcdTAxMEUnOiAnRCcsXG4gICAgICAgICdcXHUxRTBDJzogJ0QnLFxuICAgICAgICAnXFx1MUUxMCc6ICdEJyxcbiAgICAgICAgJ1xcdTFFMTInOiAnRCcsXG4gICAgICAgICdcXHUxRTBFJzogJ0QnLFxuICAgICAgICAnXFx1MDExMCc6ICdEJyxcbiAgICAgICAgJ1xcdTAxOEInOiAnRCcsXG4gICAgICAgICdcXHUwMThBJzogJ0QnLFxuICAgICAgICAnXFx1MDE4OSc6ICdEJyxcbiAgICAgICAgJ1xcdUE3NzknOiAnRCcsXG4gICAgICAgICdcXHUwMUYxJzogJ0RaJyxcbiAgICAgICAgJ1xcdTAxQzQnOiAnRFonLFxuICAgICAgICAnXFx1MDFGMic6ICdEeicsXG4gICAgICAgICdcXHUwMUM1JzogJ0R6JyxcbiAgICAgICAgJ1xcdTI0QkEnOiAnRScsXG4gICAgICAgICdcXHVGRjI1JzogJ0UnLFxuICAgICAgICAnXFx1MDBDOCc6ICdFJyxcbiAgICAgICAgJ1xcdTAwQzknOiAnRScsXG4gICAgICAgICdcXHUwMENBJzogJ0UnLFxuICAgICAgICAnXFx1MUVDMCc6ICdFJyxcbiAgICAgICAgJ1xcdTFFQkUnOiAnRScsXG4gICAgICAgICdcXHUxRUM0JzogJ0UnLFxuICAgICAgICAnXFx1MUVDMic6ICdFJyxcbiAgICAgICAgJ1xcdTFFQkMnOiAnRScsXG4gICAgICAgICdcXHUwMTEyJzogJ0UnLFxuICAgICAgICAnXFx1MUUxNCc6ICdFJyxcbiAgICAgICAgJ1xcdTFFMTYnOiAnRScsXG4gICAgICAgICdcXHUwMTE0JzogJ0UnLFxuICAgICAgICAnXFx1MDExNic6ICdFJyxcbiAgICAgICAgJ1xcdTAwQ0InOiAnRScsXG4gICAgICAgICdcXHUxRUJBJzogJ0UnLFxuICAgICAgICAnXFx1MDExQSc6ICdFJyxcbiAgICAgICAgJ1xcdTAyMDQnOiAnRScsXG4gICAgICAgICdcXHUwMjA2JzogJ0UnLFxuICAgICAgICAnXFx1MUVCOCc6ICdFJyxcbiAgICAgICAgJ1xcdTFFQzYnOiAnRScsXG4gICAgICAgICdcXHUwMjI4JzogJ0UnLFxuICAgICAgICAnXFx1MUUxQyc6ICdFJyxcbiAgICAgICAgJ1xcdTAxMTgnOiAnRScsXG4gICAgICAgICdcXHUxRTE4JzogJ0UnLFxuICAgICAgICAnXFx1MUUxQSc6ICdFJyxcbiAgICAgICAgJ1xcdTAxOTAnOiAnRScsXG4gICAgICAgICdcXHUwMThFJzogJ0UnLFxuICAgICAgICAnXFx1MjRCQic6ICdGJyxcbiAgICAgICAgJ1xcdUZGMjYnOiAnRicsXG4gICAgICAgICdcXHUxRTFFJzogJ0YnLFxuICAgICAgICAnXFx1MDE5MSc6ICdGJyxcbiAgICAgICAgJ1xcdUE3N0InOiAnRicsXG4gICAgICAgICdcXHUyNEJDJzogJ0cnLFxuICAgICAgICAnXFx1RkYyNyc6ICdHJyxcbiAgICAgICAgJ1xcdTAxRjQnOiAnRycsXG4gICAgICAgICdcXHUwMTFDJzogJ0cnLFxuICAgICAgICAnXFx1MUUyMCc6ICdHJyxcbiAgICAgICAgJ1xcdTAxMUUnOiAnRycsXG4gICAgICAgICdcXHUwMTIwJzogJ0cnLFxuICAgICAgICAnXFx1MDFFNic6ICdHJyxcbiAgICAgICAgJ1xcdTAxMjInOiAnRycsXG4gICAgICAgICdcXHUwMUU0JzogJ0cnLFxuICAgICAgICAnXFx1MDE5Myc6ICdHJyxcbiAgICAgICAgJ1xcdUE3QTAnOiAnRycsXG4gICAgICAgICdcXHVBNzdEJzogJ0cnLFxuICAgICAgICAnXFx1QTc3RSc6ICdHJyxcbiAgICAgICAgJ1xcdTI0QkQnOiAnSCcsXG4gICAgICAgICdcXHVGRjI4JzogJ0gnLFxuICAgICAgICAnXFx1MDEyNCc6ICdIJyxcbiAgICAgICAgJ1xcdTFFMjInOiAnSCcsXG4gICAgICAgICdcXHUxRTI2JzogJ0gnLFxuICAgICAgICAnXFx1MDIxRSc6ICdIJyxcbiAgICAgICAgJ1xcdTFFMjQnOiAnSCcsXG4gICAgICAgICdcXHUxRTI4JzogJ0gnLFxuICAgICAgICAnXFx1MUUyQSc6ICdIJyxcbiAgICAgICAgJ1xcdTAxMjYnOiAnSCcsXG4gICAgICAgICdcXHUyQzY3JzogJ0gnLFxuICAgICAgICAnXFx1MkM3NSc6ICdIJyxcbiAgICAgICAgJ1xcdUE3OEQnOiAnSCcsXG4gICAgICAgICdcXHUyNEJFJzogJ0knLFxuICAgICAgICAnXFx1RkYyOSc6ICdJJyxcbiAgICAgICAgJ1xcdTAwQ0MnOiAnSScsXG4gICAgICAgICdcXHUwMENEJzogJ0knLFxuICAgICAgICAnXFx1MDBDRSc6ICdJJyxcbiAgICAgICAgJ1xcdTAxMjgnOiAnSScsXG4gICAgICAgICdcXHUwMTJBJzogJ0knLFxuICAgICAgICAnXFx1MDEyQyc6ICdJJyxcbiAgICAgICAgJ1xcdTAxMzAnOiAnSScsXG4gICAgICAgICdcXHUwMENGJzogJ0knLFxuICAgICAgICAnXFx1MUUyRSc6ICdJJyxcbiAgICAgICAgJ1xcdTFFQzgnOiAnSScsXG4gICAgICAgICdcXHUwMUNGJzogJ0knLFxuICAgICAgICAnXFx1MDIwOCc6ICdJJyxcbiAgICAgICAgJ1xcdTAyMEEnOiAnSScsXG4gICAgICAgICdcXHUxRUNBJzogJ0knLFxuICAgICAgICAnXFx1MDEyRSc6ICdJJyxcbiAgICAgICAgJ1xcdTFFMkMnOiAnSScsXG4gICAgICAgICdcXHUwMTk3JzogJ0knLFxuICAgICAgICAnXFx1MjRCRic6ICdKJyxcbiAgICAgICAgJ1xcdUZGMkEnOiAnSicsXG4gICAgICAgICdcXHUwMTM0JzogJ0onLFxuICAgICAgICAnXFx1MDI0OCc6ICdKJyxcbiAgICAgICAgJ1xcdTI0QzAnOiAnSycsXG4gICAgICAgICdcXHVGRjJCJzogJ0snLFxuICAgICAgICAnXFx1MUUzMCc6ICdLJyxcbiAgICAgICAgJ1xcdTAxRTgnOiAnSycsXG4gICAgICAgICdcXHUxRTMyJzogJ0snLFxuICAgICAgICAnXFx1MDEzNic6ICdLJyxcbiAgICAgICAgJ1xcdTFFMzQnOiAnSycsXG4gICAgICAgICdcXHUwMTk4JzogJ0snLFxuICAgICAgICAnXFx1MkM2OSc6ICdLJyxcbiAgICAgICAgJ1xcdUE3NDAnOiAnSycsXG4gICAgICAgICdcXHVBNzQyJzogJ0snLFxuICAgICAgICAnXFx1QTc0NCc6ICdLJyxcbiAgICAgICAgJ1xcdUE3QTInOiAnSycsXG4gICAgICAgICdcXHUyNEMxJzogJ0wnLFxuICAgICAgICAnXFx1RkYyQyc6ICdMJyxcbiAgICAgICAgJ1xcdTAxM0YnOiAnTCcsXG4gICAgICAgICdcXHUwMTM5JzogJ0wnLFxuICAgICAgICAnXFx1MDEzRCc6ICdMJyxcbiAgICAgICAgJ1xcdTFFMzYnOiAnTCcsXG4gICAgICAgICdcXHUxRTM4JzogJ0wnLFxuICAgICAgICAnXFx1MDEzQic6ICdMJyxcbiAgICAgICAgJ1xcdTFFM0MnOiAnTCcsXG4gICAgICAgICdcXHUxRTNBJzogJ0wnLFxuICAgICAgICAnXFx1MDE0MSc6ICdMJyxcbiAgICAgICAgJ1xcdTAyM0QnOiAnTCcsXG4gICAgICAgICdcXHUyQzYyJzogJ0wnLFxuICAgICAgICAnXFx1MkM2MCc6ICdMJyxcbiAgICAgICAgJ1xcdUE3NDgnOiAnTCcsXG4gICAgICAgICdcXHVBNzQ2JzogJ0wnLFxuICAgICAgICAnXFx1QTc4MCc6ICdMJyxcbiAgICAgICAgJ1xcdTAxQzcnOiAnTEonLFxuICAgICAgICAnXFx1MDFDOCc6ICdMaicsXG4gICAgICAgICdcXHUyNEMyJzogJ00nLFxuICAgICAgICAnXFx1RkYyRCc6ICdNJyxcbiAgICAgICAgJ1xcdTFFM0UnOiAnTScsXG4gICAgICAgICdcXHUxRTQwJzogJ00nLFxuICAgICAgICAnXFx1MUU0Mic6ICdNJyxcbiAgICAgICAgJ1xcdTJDNkUnOiAnTScsXG4gICAgICAgICdcXHUwMTlDJzogJ00nLFxuICAgICAgICAnXFx1MjRDMyc6ICdOJyxcbiAgICAgICAgJ1xcdUZGMkUnOiAnTicsXG4gICAgICAgICdcXHUwMUY4JzogJ04nLFxuICAgICAgICAnXFx1MDE0Myc6ICdOJyxcbiAgICAgICAgJ1xcdTAwRDEnOiAnTicsXG4gICAgICAgICdcXHUxRTQ0JzogJ04nLFxuICAgICAgICAnXFx1MDE0Nyc6ICdOJyxcbiAgICAgICAgJ1xcdTFFNDYnOiAnTicsXG4gICAgICAgICdcXHUwMTQ1JzogJ04nLFxuICAgICAgICAnXFx1MUU0QSc6ICdOJyxcbiAgICAgICAgJ1xcdTFFNDgnOiAnTicsXG4gICAgICAgICdcXHUwMjIwJzogJ04nLFxuICAgICAgICAnXFx1MDE5RCc6ICdOJyxcbiAgICAgICAgJ1xcdUE3OTAnOiAnTicsXG4gICAgICAgICdcXHVBN0E0JzogJ04nLFxuICAgICAgICAnXFx1MDFDQSc6ICdOSicsXG4gICAgICAgICdcXHUwMUNCJzogJ05qJyxcbiAgICAgICAgJ1xcdTI0QzQnOiAnTycsXG4gICAgICAgICdcXHVGRjJGJzogJ08nLFxuICAgICAgICAnXFx1MDBEMic6ICdPJyxcbiAgICAgICAgJ1xcdTAwRDMnOiAnTycsXG4gICAgICAgICdcXHUwMEQ0JzogJ08nLFxuICAgICAgICAnXFx1MUVEMic6ICdPJyxcbiAgICAgICAgJ1xcdTFFRDAnOiAnTycsXG4gICAgICAgICdcXHUxRUQ2JzogJ08nLFxuICAgICAgICAnXFx1MUVENCc6ICdPJyxcbiAgICAgICAgJ1xcdTAwRDUnOiAnTycsXG4gICAgICAgICdcXHUxRTRDJzogJ08nLFxuICAgICAgICAnXFx1MDIyQyc6ICdPJyxcbiAgICAgICAgJ1xcdTFFNEUnOiAnTycsXG4gICAgICAgICdcXHUwMTRDJzogJ08nLFxuICAgICAgICAnXFx1MUU1MCc6ICdPJyxcbiAgICAgICAgJ1xcdTFFNTInOiAnTycsXG4gICAgICAgICdcXHUwMTRFJzogJ08nLFxuICAgICAgICAnXFx1MDIyRSc6ICdPJyxcbiAgICAgICAgJ1xcdTAyMzAnOiAnTycsXG4gICAgICAgICdcXHUwMEQ2JzogJ08nLFxuICAgICAgICAnXFx1MDIyQSc6ICdPJyxcbiAgICAgICAgJ1xcdTFFQ0UnOiAnTycsXG4gICAgICAgICdcXHUwMTUwJzogJ08nLFxuICAgICAgICAnXFx1MDFEMSc6ICdPJyxcbiAgICAgICAgJ1xcdTAyMEMnOiAnTycsXG4gICAgICAgICdcXHUwMjBFJzogJ08nLFxuICAgICAgICAnXFx1MDFBMCc6ICdPJyxcbiAgICAgICAgJ1xcdTFFREMnOiAnTycsXG4gICAgICAgICdcXHUxRURBJzogJ08nLFxuICAgICAgICAnXFx1MUVFMCc6ICdPJyxcbiAgICAgICAgJ1xcdTFFREUnOiAnTycsXG4gICAgICAgICdcXHUxRUUyJzogJ08nLFxuICAgICAgICAnXFx1MUVDQyc6ICdPJyxcbiAgICAgICAgJ1xcdTFFRDgnOiAnTycsXG4gICAgICAgICdcXHUwMUVBJzogJ08nLFxuICAgICAgICAnXFx1MDFFQyc6ICdPJyxcbiAgICAgICAgJ1xcdTAwRDgnOiAnTycsXG4gICAgICAgICdcXHUwMUZFJzogJ08nLFxuICAgICAgICAnXFx1MDE4Nic6ICdPJyxcbiAgICAgICAgJ1xcdTAxOUYnOiAnTycsXG4gICAgICAgICdcXHVBNzRBJzogJ08nLFxuICAgICAgICAnXFx1QTc0Qyc6ICdPJyxcbiAgICAgICAgJ1xcdTAxQTInOiAnT0knLFxuICAgICAgICAnXFx1QTc0RSc6ICdPTycsXG4gICAgICAgICdcXHUwMjIyJzogJ09VJyxcbiAgICAgICAgJ1xcdTI0QzUnOiAnUCcsXG4gICAgICAgICdcXHVGRjMwJzogJ1AnLFxuICAgICAgICAnXFx1MUU1NCc6ICdQJyxcbiAgICAgICAgJ1xcdTFFNTYnOiAnUCcsXG4gICAgICAgICdcXHUwMUE0JzogJ1AnLFxuICAgICAgICAnXFx1MkM2Myc6ICdQJyxcbiAgICAgICAgJ1xcdUE3NTAnOiAnUCcsXG4gICAgICAgICdcXHVBNzUyJzogJ1AnLFxuICAgICAgICAnXFx1QTc1NCc6ICdQJyxcbiAgICAgICAgJ1xcdTI0QzYnOiAnUScsXG4gICAgICAgICdcXHVGRjMxJzogJ1EnLFxuICAgICAgICAnXFx1QTc1Nic6ICdRJyxcbiAgICAgICAgJ1xcdUE3NTgnOiAnUScsXG4gICAgICAgICdcXHUwMjRBJzogJ1EnLFxuICAgICAgICAnXFx1MjRDNyc6ICdSJyxcbiAgICAgICAgJ1xcdUZGMzInOiAnUicsXG4gICAgICAgICdcXHUwMTU0JzogJ1InLFxuICAgICAgICAnXFx1MUU1OCc6ICdSJyxcbiAgICAgICAgJ1xcdTAxNTgnOiAnUicsXG4gICAgICAgICdcXHUwMjEwJzogJ1InLFxuICAgICAgICAnXFx1MDIxMic6ICdSJyxcbiAgICAgICAgJ1xcdTFFNUEnOiAnUicsXG4gICAgICAgICdcXHUxRTVDJzogJ1InLFxuICAgICAgICAnXFx1MDE1Nic6ICdSJyxcbiAgICAgICAgJ1xcdTFFNUUnOiAnUicsXG4gICAgICAgICdcXHUwMjRDJzogJ1InLFxuICAgICAgICAnXFx1MkM2NCc6ICdSJyxcbiAgICAgICAgJ1xcdUE3NUEnOiAnUicsXG4gICAgICAgICdcXHVBN0E2JzogJ1InLFxuICAgICAgICAnXFx1QTc4Mic6ICdSJyxcbiAgICAgICAgJ1xcdTI0QzgnOiAnUycsXG4gICAgICAgICdcXHVGRjMzJzogJ1MnLFxuICAgICAgICAnXFx1MUU5RSc6ICdTJyxcbiAgICAgICAgJ1xcdTAxNUEnOiAnUycsXG4gICAgICAgICdcXHUxRTY0JzogJ1MnLFxuICAgICAgICAnXFx1MDE1Qyc6ICdTJyxcbiAgICAgICAgJ1xcdTFFNjAnOiAnUycsXG4gICAgICAgICdcXHUwMTYwJzogJ1MnLFxuICAgICAgICAnXFx1MUU2Nic6ICdTJyxcbiAgICAgICAgJ1xcdTFFNjInOiAnUycsXG4gICAgICAgICdcXHUxRTY4JzogJ1MnLFxuICAgICAgICAnXFx1MDIxOCc6ICdTJyxcbiAgICAgICAgJ1xcdTAxNUUnOiAnUycsXG4gICAgICAgICdcXHUyQzdFJzogJ1MnLFxuICAgICAgICAnXFx1QTdBOCc6ICdTJyxcbiAgICAgICAgJ1xcdUE3ODQnOiAnUycsXG4gICAgICAgICdcXHUyNEM5JzogJ1QnLFxuICAgICAgICAnXFx1RkYzNCc6ICdUJyxcbiAgICAgICAgJ1xcdTFFNkEnOiAnVCcsXG4gICAgICAgICdcXHUwMTY0JzogJ1QnLFxuICAgICAgICAnXFx1MUU2Qyc6ICdUJyxcbiAgICAgICAgJ1xcdTAyMUEnOiAnVCcsXG4gICAgICAgICdcXHUwMTYyJzogJ1QnLFxuICAgICAgICAnXFx1MUU3MCc6ICdUJyxcbiAgICAgICAgJ1xcdTFFNkUnOiAnVCcsXG4gICAgICAgICdcXHUwMTY2JzogJ1QnLFxuICAgICAgICAnXFx1MDFBQyc6ICdUJyxcbiAgICAgICAgJ1xcdTAxQUUnOiAnVCcsXG4gICAgICAgICdcXHUwMjNFJzogJ1QnLFxuICAgICAgICAnXFx1QTc4Nic6ICdUJyxcbiAgICAgICAgJ1xcdUE3MjgnOiAnVFonLFxuICAgICAgICAnXFx1MjRDQSc6ICdVJyxcbiAgICAgICAgJ1xcdUZGMzUnOiAnVScsXG4gICAgICAgICdcXHUwMEQ5JzogJ1UnLFxuICAgICAgICAnXFx1MDBEQSc6ICdVJyxcbiAgICAgICAgJ1xcdTAwREInOiAnVScsXG4gICAgICAgICdcXHUwMTY4JzogJ1UnLFxuICAgICAgICAnXFx1MUU3OCc6ICdVJyxcbiAgICAgICAgJ1xcdTAxNkEnOiAnVScsXG4gICAgICAgICdcXHUxRTdBJzogJ1UnLFxuICAgICAgICAnXFx1MDE2Qyc6ICdVJyxcbiAgICAgICAgJ1xcdTAwREMnOiAnVScsXG4gICAgICAgICdcXHUwMURCJzogJ1UnLFxuICAgICAgICAnXFx1MDFENyc6ICdVJyxcbiAgICAgICAgJ1xcdTAxRDUnOiAnVScsXG4gICAgICAgICdcXHUwMUQ5JzogJ1UnLFxuICAgICAgICAnXFx1MUVFNic6ICdVJyxcbiAgICAgICAgJ1xcdTAxNkUnOiAnVScsXG4gICAgICAgICdcXHUwMTcwJzogJ1UnLFxuICAgICAgICAnXFx1MDFEMyc6ICdVJyxcbiAgICAgICAgJ1xcdTAyMTQnOiAnVScsXG4gICAgICAgICdcXHUwMjE2JzogJ1UnLFxuICAgICAgICAnXFx1MDFBRic6ICdVJyxcbiAgICAgICAgJ1xcdTFFRUEnOiAnVScsXG4gICAgICAgICdcXHUxRUU4JzogJ1UnLFxuICAgICAgICAnXFx1MUVFRSc6ICdVJyxcbiAgICAgICAgJ1xcdTFFRUMnOiAnVScsXG4gICAgICAgICdcXHUxRUYwJzogJ1UnLFxuICAgICAgICAnXFx1MUVFNCc6ICdVJyxcbiAgICAgICAgJ1xcdTFFNzInOiAnVScsXG4gICAgICAgICdcXHUwMTcyJzogJ1UnLFxuICAgICAgICAnXFx1MUU3Nic6ICdVJyxcbiAgICAgICAgJ1xcdTFFNzQnOiAnVScsXG4gICAgICAgICdcXHUwMjQ0JzogJ1UnLFxuICAgICAgICAnXFx1MjRDQic6ICdWJyxcbiAgICAgICAgJ1xcdUZGMzYnOiAnVicsXG4gICAgICAgICdcXHUxRTdDJzogJ1YnLFxuICAgICAgICAnXFx1MUU3RSc6ICdWJyxcbiAgICAgICAgJ1xcdTAxQjInOiAnVicsXG4gICAgICAgICdcXHVBNzVFJzogJ1YnLFxuICAgICAgICAnXFx1MDI0NSc6ICdWJyxcbiAgICAgICAgJ1xcdUE3NjAnOiAnVlknLFxuICAgICAgICAnXFx1MjRDQyc6ICdXJyxcbiAgICAgICAgJ1xcdUZGMzcnOiAnVycsXG4gICAgICAgICdcXHUxRTgwJzogJ1cnLFxuICAgICAgICAnXFx1MUU4Mic6ICdXJyxcbiAgICAgICAgJ1xcdTAxNzQnOiAnVycsXG4gICAgICAgICdcXHUxRTg2JzogJ1cnLFxuICAgICAgICAnXFx1MUU4NCc6ICdXJyxcbiAgICAgICAgJ1xcdTFFODgnOiAnVycsXG4gICAgICAgICdcXHUyQzcyJzogJ1cnLFxuICAgICAgICAnXFx1MjRDRCc6ICdYJyxcbiAgICAgICAgJ1xcdUZGMzgnOiAnWCcsXG4gICAgICAgICdcXHUxRThBJzogJ1gnLFxuICAgICAgICAnXFx1MUU4Qyc6ICdYJyxcbiAgICAgICAgJ1xcdTI0Q0UnOiAnWScsXG4gICAgICAgICdcXHVGRjM5JzogJ1knLFxuICAgICAgICAnXFx1MUVGMic6ICdZJyxcbiAgICAgICAgJ1xcdTAwREQnOiAnWScsXG4gICAgICAgICdcXHUwMTc2JzogJ1knLFxuICAgICAgICAnXFx1MUVGOCc6ICdZJyxcbiAgICAgICAgJ1xcdTAyMzInOiAnWScsXG4gICAgICAgICdcXHUxRThFJzogJ1knLFxuICAgICAgICAnXFx1MDE3OCc6ICdZJyxcbiAgICAgICAgJ1xcdTFFRjYnOiAnWScsXG4gICAgICAgICdcXHUxRUY0JzogJ1knLFxuICAgICAgICAnXFx1MDFCMyc6ICdZJyxcbiAgICAgICAgJ1xcdTAyNEUnOiAnWScsXG4gICAgICAgICdcXHUxRUZFJzogJ1knLFxuICAgICAgICAnXFx1MjRDRic6ICdaJyxcbiAgICAgICAgJ1xcdUZGM0EnOiAnWicsXG4gICAgICAgICdcXHUwMTc5JzogJ1onLFxuICAgICAgICAnXFx1MUU5MCc6ICdaJyxcbiAgICAgICAgJ1xcdTAxN0InOiAnWicsXG4gICAgICAgICdcXHUwMTdEJzogJ1onLFxuICAgICAgICAnXFx1MUU5Mic6ICdaJyxcbiAgICAgICAgJ1xcdTFFOTQnOiAnWicsXG4gICAgICAgICdcXHUwMUI1JzogJ1onLFxuICAgICAgICAnXFx1MDIyNCc6ICdaJyxcbiAgICAgICAgJ1xcdTJDN0YnOiAnWicsXG4gICAgICAgICdcXHUyQzZCJzogJ1onLFxuICAgICAgICAnXFx1QTc2Mic6ICdaJyxcbiAgICAgICAgJ1xcdTI0RDAnOiAnYScsXG4gICAgICAgICdcXHVGRjQxJzogJ2EnLFxuICAgICAgICAnXFx1MUU5QSc6ICdhJyxcbiAgICAgICAgJ1xcdTAwRTAnOiAnYScsXG4gICAgICAgICdcXHUwMEUxJzogJ2EnLFxuICAgICAgICAnXFx1MDBFMic6ICdhJyxcbiAgICAgICAgJ1xcdTFFQTcnOiAnYScsXG4gICAgICAgICdcXHUxRUE1JzogJ2EnLFxuICAgICAgICAnXFx1MUVBQic6ICdhJyxcbiAgICAgICAgJ1xcdTFFQTknOiAnYScsXG4gICAgICAgICdcXHUwMEUzJzogJ2EnLFxuICAgICAgICAnXFx1MDEwMSc6ICdhJyxcbiAgICAgICAgJ1xcdTAxMDMnOiAnYScsXG4gICAgICAgICdcXHUxRUIxJzogJ2EnLFxuICAgICAgICAnXFx1MUVBRic6ICdhJyxcbiAgICAgICAgJ1xcdTFFQjUnOiAnYScsXG4gICAgICAgICdcXHUxRUIzJzogJ2EnLFxuICAgICAgICAnXFx1MDIyNyc6ICdhJyxcbiAgICAgICAgJ1xcdTAxRTEnOiAnYScsXG4gICAgICAgICdcXHUwMEU0JzogJ2EnLFxuICAgICAgICAnXFx1MDFERic6ICdhJyxcbiAgICAgICAgJ1xcdTFFQTMnOiAnYScsXG4gICAgICAgICdcXHUwMEU1JzogJ2EnLFxuICAgICAgICAnXFx1MDFGQic6ICdhJyxcbiAgICAgICAgJ1xcdTAxQ0UnOiAnYScsXG4gICAgICAgICdcXHUwMjAxJzogJ2EnLFxuICAgICAgICAnXFx1MDIwMyc6ICdhJyxcbiAgICAgICAgJ1xcdTFFQTEnOiAnYScsXG4gICAgICAgICdcXHUxRUFEJzogJ2EnLFxuICAgICAgICAnXFx1MUVCNyc6ICdhJyxcbiAgICAgICAgJ1xcdTFFMDEnOiAnYScsXG4gICAgICAgICdcXHUwMTA1JzogJ2EnLFxuICAgICAgICAnXFx1MkM2NSc6ICdhJyxcbiAgICAgICAgJ1xcdTAyNTAnOiAnYScsXG4gICAgICAgICdcXHVBNzMzJzogJ2FhJyxcbiAgICAgICAgJ1xcdTAwRTYnOiAnYWUnLFxuICAgICAgICAnXFx1MDFGRCc6ICdhZScsXG4gICAgICAgICdcXHUwMUUzJzogJ2FlJyxcbiAgICAgICAgJ1xcdUE3MzUnOiAnYW8nLFxuICAgICAgICAnXFx1QTczNyc6ICdhdScsXG4gICAgICAgICdcXHVBNzM5JzogJ2F2JyxcbiAgICAgICAgJ1xcdUE3M0InOiAnYXYnLFxuICAgICAgICAnXFx1QTczRCc6ICdheScsXG4gICAgICAgICdcXHUyNEQxJzogJ2InLFxuICAgICAgICAnXFx1RkY0Mic6ICdiJyxcbiAgICAgICAgJ1xcdTFFMDMnOiAnYicsXG4gICAgICAgICdcXHUxRTA1JzogJ2InLFxuICAgICAgICAnXFx1MUUwNyc6ICdiJyxcbiAgICAgICAgJ1xcdTAxODAnOiAnYicsXG4gICAgICAgICdcXHUwMTgzJzogJ2InLFxuICAgICAgICAnXFx1MDI1Myc6ICdiJyxcbiAgICAgICAgJ1xcdTI0RDInOiAnYycsXG4gICAgICAgICdcXHVGRjQzJzogJ2MnLFxuICAgICAgICAnXFx1MDEwNyc6ICdjJyxcbiAgICAgICAgJ1xcdTAxMDknOiAnYycsXG4gICAgICAgICdcXHUwMTBCJzogJ2MnLFxuICAgICAgICAnXFx1MDEwRCc6ICdjJyxcbiAgICAgICAgJ1xcdTAwRTcnOiAnYycsXG4gICAgICAgICdcXHUxRTA5JzogJ2MnLFxuICAgICAgICAnXFx1MDE4OCc6ICdjJyxcbiAgICAgICAgJ1xcdTAyM0MnOiAnYycsXG4gICAgICAgICdcXHVBNzNGJzogJ2MnLFxuICAgICAgICAnXFx1MjE4NCc6ICdjJyxcbiAgICAgICAgJ1xcdTI0RDMnOiAnZCcsXG4gICAgICAgICdcXHVGRjQ0JzogJ2QnLFxuICAgICAgICAnXFx1MUUwQic6ICdkJyxcbiAgICAgICAgJ1xcdTAxMEYnOiAnZCcsXG4gICAgICAgICdcXHUxRTBEJzogJ2QnLFxuICAgICAgICAnXFx1MUUxMSc6ICdkJyxcbiAgICAgICAgJ1xcdTFFMTMnOiAnZCcsXG4gICAgICAgICdcXHUxRTBGJzogJ2QnLFxuICAgICAgICAnXFx1MDExMSc6ICdkJyxcbiAgICAgICAgJ1xcdTAxOEMnOiAnZCcsXG4gICAgICAgICdcXHUwMjU2JzogJ2QnLFxuICAgICAgICAnXFx1MDI1Nyc6ICdkJyxcbiAgICAgICAgJ1xcdUE3N0EnOiAnZCcsXG4gICAgICAgICdcXHUwMUYzJzogJ2R6JyxcbiAgICAgICAgJ1xcdTAxQzYnOiAnZHonLFxuICAgICAgICAnXFx1MjRENCc6ICdlJyxcbiAgICAgICAgJ1xcdUZGNDUnOiAnZScsXG4gICAgICAgICdcXHUwMEU4JzogJ2UnLFxuICAgICAgICAnXFx1MDBFOSc6ICdlJyxcbiAgICAgICAgJ1xcdTAwRUEnOiAnZScsXG4gICAgICAgICdcXHUxRUMxJzogJ2UnLFxuICAgICAgICAnXFx1MUVCRic6ICdlJyxcbiAgICAgICAgJ1xcdTFFQzUnOiAnZScsXG4gICAgICAgICdcXHUxRUMzJzogJ2UnLFxuICAgICAgICAnXFx1MUVCRCc6ICdlJyxcbiAgICAgICAgJ1xcdTAxMTMnOiAnZScsXG4gICAgICAgICdcXHUxRTE1JzogJ2UnLFxuICAgICAgICAnXFx1MUUxNyc6ICdlJyxcbiAgICAgICAgJ1xcdTAxMTUnOiAnZScsXG4gICAgICAgICdcXHUwMTE3JzogJ2UnLFxuICAgICAgICAnXFx1MDBFQic6ICdlJyxcbiAgICAgICAgJ1xcdTFFQkInOiAnZScsXG4gICAgICAgICdcXHUwMTFCJzogJ2UnLFxuICAgICAgICAnXFx1MDIwNSc6ICdlJyxcbiAgICAgICAgJ1xcdTAyMDcnOiAnZScsXG4gICAgICAgICdcXHUxRUI5JzogJ2UnLFxuICAgICAgICAnXFx1MUVDNyc6ICdlJyxcbiAgICAgICAgJ1xcdTAyMjknOiAnZScsXG4gICAgICAgICdcXHUxRTFEJzogJ2UnLFxuICAgICAgICAnXFx1MDExOSc6ICdlJyxcbiAgICAgICAgJ1xcdTFFMTknOiAnZScsXG4gICAgICAgICdcXHUxRTFCJzogJ2UnLFxuICAgICAgICAnXFx1MDI0Nyc6ICdlJyxcbiAgICAgICAgJ1xcdTAyNUInOiAnZScsXG4gICAgICAgICdcXHUwMUREJzogJ2UnLFxuICAgICAgICAnXFx1MjRENSc6ICdmJyxcbiAgICAgICAgJ1xcdUZGNDYnOiAnZicsXG4gICAgICAgICdcXHUxRTFGJzogJ2YnLFxuICAgICAgICAnXFx1MDE5Mic6ICdmJyxcbiAgICAgICAgJ1xcdUE3N0MnOiAnZicsXG4gICAgICAgICdcXHUyNEQ2JzogJ2cnLFxuICAgICAgICAnXFx1RkY0Nyc6ICdnJyxcbiAgICAgICAgJ1xcdTAxRjUnOiAnZycsXG4gICAgICAgICdcXHUwMTFEJzogJ2cnLFxuICAgICAgICAnXFx1MUUyMSc6ICdnJyxcbiAgICAgICAgJ1xcdTAxMUYnOiAnZycsXG4gICAgICAgICdcXHUwMTIxJzogJ2cnLFxuICAgICAgICAnXFx1MDFFNyc6ICdnJyxcbiAgICAgICAgJ1xcdTAxMjMnOiAnZycsXG4gICAgICAgICdcXHUwMUU1JzogJ2cnLFxuICAgICAgICAnXFx1MDI2MCc6ICdnJyxcbiAgICAgICAgJ1xcdUE3QTEnOiAnZycsXG4gICAgICAgICdcXHUxRDc5JzogJ2cnLFxuICAgICAgICAnXFx1QTc3Ric6ICdnJyxcbiAgICAgICAgJ1xcdTI0RDcnOiAnaCcsXG4gICAgICAgICdcXHVGRjQ4JzogJ2gnLFxuICAgICAgICAnXFx1MDEyNSc6ICdoJyxcbiAgICAgICAgJ1xcdTFFMjMnOiAnaCcsXG4gICAgICAgICdcXHUxRTI3JzogJ2gnLFxuICAgICAgICAnXFx1MDIxRic6ICdoJyxcbiAgICAgICAgJ1xcdTFFMjUnOiAnaCcsXG4gICAgICAgICdcXHUxRTI5JzogJ2gnLFxuICAgICAgICAnXFx1MUUyQic6ICdoJyxcbiAgICAgICAgJ1xcdTFFOTYnOiAnaCcsXG4gICAgICAgICdcXHUwMTI3JzogJ2gnLFxuICAgICAgICAnXFx1MkM2OCc6ICdoJyxcbiAgICAgICAgJ1xcdTJDNzYnOiAnaCcsXG4gICAgICAgICdcXHUwMjY1JzogJ2gnLFxuICAgICAgICAnXFx1MDE5NSc6ICdodicsXG4gICAgICAgICdcXHUyNEQ4JzogJ2knLFxuICAgICAgICAnXFx1RkY0OSc6ICdpJyxcbiAgICAgICAgJ1xcdTAwRUMnOiAnaScsXG4gICAgICAgICdcXHUwMEVEJzogJ2knLFxuICAgICAgICAnXFx1MDBFRSc6ICdpJyxcbiAgICAgICAgJ1xcdTAxMjknOiAnaScsXG4gICAgICAgICdcXHUwMTJCJzogJ2knLFxuICAgICAgICAnXFx1MDEyRCc6ICdpJyxcbiAgICAgICAgJ1xcdTAwRUYnOiAnaScsXG4gICAgICAgICdcXHUxRTJGJzogJ2knLFxuICAgICAgICAnXFx1MUVDOSc6ICdpJyxcbiAgICAgICAgJ1xcdTAxRDAnOiAnaScsXG4gICAgICAgICdcXHUwMjA5JzogJ2knLFxuICAgICAgICAnXFx1MDIwQic6ICdpJyxcbiAgICAgICAgJ1xcdTFFQ0InOiAnaScsXG4gICAgICAgICdcXHUwMTJGJzogJ2knLFxuICAgICAgICAnXFx1MUUyRCc6ICdpJyxcbiAgICAgICAgJ1xcdTAyNjgnOiAnaScsXG4gICAgICAgICdcXHUwMTMxJzogJ2knLFxuICAgICAgICAnXFx1MjREOSc6ICdqJyxcbiAgICAgICAgJ1xcdUZGNEEnOiAnaicsXG4gICAgICAgICdcXHUwMTM1JzogJ2onLFxuICAgICAgICAnXFx1MDFGMCc6ICdqJyxcbiAgICAgICAgJ1xcdTAyNDknOiAnaicsXG4gICAgICAgICdcXHUyNERBJzogJ2snLFxuICAgICAgICAnXFx1RkY0Qic6ICdrJyxcbiAgICAgICAgJ1xcdTFFMzEnOiAnaycsXG4gICAgICAgICdcXHUwMUU5JzogJ2snLFxuICAgICAgICAnXFx1MUUzMyc6ICdrJyxcbiAgICAgICAgJ1xcdTAxMzcnOiAnaycsXG4gICAgICAgICdcXHUxRTM1JzogJ2snLFxuICAgICAgICAnXFx1MDE5OSc6ICdrJyxcbiAgICAgICAgJ1xcdTJDNkEnOiAnaycsXG4gICAgICAgICdcXHVBNzQxJzogJ2snLFxuICAgICAgICAnXFx1QTc0Myc6ICdrJyxcbiAgICAgICAgJ1xcdUE3NDUnOiAnaycsXG4gICAgICAgICdcXHVBN0EzJzogJ2snLFxuICAgICAgICAnXFx1MjREQic6ICdsJyxcbiAgICAgICAgJ1xcdUZGNEMnOiAnbCcsXG4gICAgICAgICdcXHUwMTQwJzogJ2wnLFxuICAgICAgICAnXFx1MDEzQSc6ICdsJyxcbiAgICAgICAgJ1xcdTAxM0UnOiAnbCcsXG4gICAgICAgICdcXHUxRTM3JzogJ2wnLFxuICAgICAgICAnXFx1MUUzOSc6ICdsJyxcbiAgICAgICAgJ1xcdTAxM0MnOiAnbCcsXG4gICAgICAgICdcXHUxRTNEJzogJ2wnLFxuICAgICAgICAnXFx1MUUzQic6ICdsJyxcbiAgICAgICAgJ1xcdTAxN0YnOiAnbCcsXG4gICAgICAgICdcXHUwMTQyJzogJ2wnLFxuICAgICAgICAnXFx1MDE5QSc6ICdsJyxcbiAgICAgICAgJ1xcdTAyNkInOiAnbCcsXG4gICAgICAgICdcXHUyQzYxJzogJ2wnLFxuICAgICAgICAnXFx1QTc0OSc6ICdsJyxcbiAgICAgICAgJ1xcdUE3ODEnOiAnbCcsXG4gICAgICAgICdcXHVBNzQ3JzogJ2wnLFxuICAgICAgICAnXFx1MDFDOSc6ICdsaicsXG4gICAgICAgICdcXHUyNERDJzogJ20nLFxuICAgICAgICAnXFx1RkY0RCc6ICdtJyxcbiAgICAgICAgJ1xcdTFFM0YnOiAnbScsXG4gICAgICAgICdcXHUxRTQxJzogJ20nLFxuICAgICAgICAnXFx1MUU0Myc6ICdtJyxcbiAgICAgICAgJ1xcdTAyNzEnOiAnbScsXG4gICAgICAgICdcXHUwMjZGJzogJ20nLFxuICAgICAgICAnXFx1MjRERCc6ICduJyxcbiAgICAgICAgJ1xcdUZGNEUnOiAnbicsXG4gICAgICAgICdcXHUwMUY5JzogJ24nLFxuICAgICAgICAnXFx1MDE0NCc6ICduJyxcbiAgICAgICAgJ1xcdTAwRjEnOiAnbicsXG4gICAgICAgICdcXHUxRTQ1JzogJ24nLFxuICAgICAgICAnXFx1MDE0OCc6ICduJyxcbiAgICAgICAgJ1xcdTFFNDcnOiAnbicsXG4gICAgICAgICdcXHUwMTQ2JzogJ24nLFxuICAgICAgICAnXFx1MUU0Qic6ICduJyxcbiAgICAgICAgJ1xcdTFFNDknOiAnbicsXG4gICAgICAgICdcXHUwMTlFJzogJ24nLFxuICAgICAgICAnXFx1MDI3Mic6ICduJyxcbiAgICAgICAgJ1xcdTAxNDknOiAnbicsXG4gICAgICAgICdcXHVBNzkxJzogJ24nLFxuICAgICAgICAnXFx1QTdBNSc6ICduJyxcbiAgICAgICAgJ1xcdTAxQ0MnOiAnbmonLFxuICAgICAgICAnXFx1MjRERSc6ICdvJyxcbiAgICAgICAgJ1xcdUZGNEYnOiAnbycsXG4gICAgICAgICdcXHUwMEYyJzogJ28nLFxuICAgICAgICAnXFx1MDBGMyc6ICdvJyxcbiAgICAgICAgJ1xcdTAwRjQnOiAnbycsXG4gICAgICAgICdcXHUxRUQzJzogJ28nLFxuICAgICAgICAnXFx1MUVEMSc6ICdvJyxcbiAgICAgICAgJ1xcdTFFRDcnOiAnbycsXG4gICAgICAgICdcXHUxRUQ1JzogJ28nLFxuICAgICAgICAnXFx1MDBGNSc6ICdvJyxcbiAgICAgICAgJ1xcdTFFNEQnOiAnbycsXG4gICAgICAgICdcXHUwMjJEJzogJ28nLFxuICAgICAgICAnXFx1MUU0Ric6ICdvJyxcbiAgICAgICAgJ1xcdTAxNEQnOiAnbycsXG4gICAgICAgICdcXHUxRTUxJzogJ28nLFxuICAgICAgICAnXFx1MUU1Myc6ICdvJyxcbiAgICAgICAgJ1xcdTAxNEYnOiAnbycsXG4gICAgICAgICdcXHUwMjJGJzogJ28nLFxuICAgICAgICAnXFx1MDIzMSc6ICdvJyxcbiAgICAgICAgJ1xcdTAwRjYnOiAnbycsXG4gICAgICAgICdcXHUwMjJCJzogJ28nLFxuICAgICAgICAnXFx1MUVDRic6ICdvJyxcbiAgICAgICAgJ1xcdTAxNTEnOiAnbycsXG4gICAgICAgICdcXHUwMUQyJzogJ28nLFxuICAgICAgICAnXFx1MDIwRCc6ICdvJyxcbiAgICAgICAgJ1xcdTAyMEYnOiAnbycsXG4gICAgICAgICdcXHUwMUExJzogJ28nLFxuICAgICAgICAnXFx1MUVERCc6ICdvJyxcbiAgICAgICAgJ1xcdTFFREInOiAnbycsXG4gICAgICAgICdcXHUxRUUxJzogJ28nLFxuICAgICAgICAnXFx1MUVERic6ICdvJyxcbiAgICAgICAgJ1xcdTFFRTMnOiAnbycsXG4gICAgICAgICdcXHUxRUNEJzogJ28nLFxuICAgICAgICAnXFx1MUVEOSc6ICdvJyxcbiAgICAgICAgJ1xcdTAxRUInOiAnbycsXG4gICAgICAgICdcXHUwMUVEJzogJ28nLFxuICAgICAgICAnXFx1MDBGOCc6ICdvJyxcbiAgICAgICAgJ1xcdTAxRkYnOiAnbycsXG4gICAgICAgICdcXHUwMjU0JzogJ28nLFxuICAgICAgICAnXFx1QTc0Qic6ICdvJyxcbiAgICAgICAgJ1xcdUE3NEQnOiAnbycsXG4gICAgICAgICdcXHUwMjc1JzogJ28nLFxuICAgICAgICAnXFx1MDFBMyc6ICdvaScsXG4gICAgICAgICdcXHUwMjIzJzogJ291JyxcbiAgICAgICAgJ1xcdUE3NEYnOiAnb28nLFxuICAgICAgICAnXFx1MjRERic6ICdwJyxcbiAgICAgICAgJ1xcdUZGNTAnOiAncCcsXG4gICAgICAgICdcXHUxRTU1JzogJ3AnLFxuICAgICAgICAnXFx1MUU1Nyc6ICdwJyxcbiAgICAgICAgJ1xcdTAxQTUnOiAncCcsXG4gICAgICAgICdcXHUxRDdEJzogJ3AnLFxuICAgICAgICAnXFx1QTc1MSc6ICdwJyxcbiAgICAgICAgJ1xcdUE3NTMnOiAncCcsXG4gICAgICAgICdcXHVBNzU1JzogJ3AnLFxuICAgICAgICAnXFx1MjRFMCc6ICdxJyxcbiAgICAgICAgJ1xcdUZGNTEnOiAncScsXG4gICAgICAgICdcXHUwMjRCJzogJ3EnLFxuICAgICAgICAnXFx1QTc1Nyc6ICdxJyxcbiAgICAgICAgJ1xcdUE3NTknOiAncScsXG4gICAgICAgICdcXHUyNEUxJzogJ3InLFxuICAgICAgICAnXFx1RkY1Mic6ICdyJyxcbiAgICAgICAgJ1xcdTAxNTUnOiAncicsXG4gICAgICAgICdcXHUxRTU5JzogJ3InLFxuICAgICAgICAnXFx1MDE1OSc6ICdyJyxcbiAgICAgICAgJ1xcdTAyMTEnOiAncicsXG4gICAgICAgICdcXHUwMjEzJzogJ3InLFxuICAgICAgICAnXFx1MUU1Qic6ICdyJyxcbiAgICAgICAgJ1xcdTFFNUQnOiAncicsXG4gICAgICAgICdcXHUwMTU3JzogJ3InLFxuICAgICAgICAnXFx1MUU1Ric6ICdyJyxcbiAgICAgICAgJ1xcdTAyNEQnOiAncicsXG4gICAgICAgICdcXHUwMjdEJzogJ3InLFxuICAgICAgICAnXFx1QTc1Qic6ICdyJyxcbiAgICAgICAgJ1xcdUE3QTcnOiAncicsXG4gICAgICAgICdcXHVBNzgzJzogJ3InLFxuICAgICAgICAnXFx1MjRFMic6ICdzJyxcbiAgICAgICAgJ1xcdUZGNTMnOiAncycsXG4gICAgICAgICdcXHUwMERGJzogJ3MnLFxuICAgICAgICAnXFx1MDE1Qic6ICdzJyxcbiAgICAgICAgJ1xcdTFFNjUnOiAncycsXG4gICAgICAgICdcXHUwMTVEJzogJ3MnLFxuICAgICAgICAnXFx1MUU2MSc6ICdzJyxcbiAgICAgICAgJ1xcdTAxNjEnOiAncycsXG4gICAgICAgICdcXHUxRTY3JzogJ3MnLFxuICAgICAgICAnXFx1MUU2Myc6ICdzJyxcbiAgICAgICAgJ1xcdTFFNjknOiAncycsXG4gICAgICAgICdcXHUwMjE5JzogJ3MnLFxuICAgICAgICAnXFx1MDE1Ric6ICdzJyxcbiAgICAgICAgJ1xcdTAyM0YnOiAncycsXG4gICAgICAgICdcXHVBN0E5JzogJ3MnLFxuICAgICAgICAnXFx1QTc4NSc6ICdzJyxcbiAgICAgICAgJ1xcdTFFOUInOiAncycsXG4gICAgICAgICdcXHUyNEUzJzogJ3QnLFxuICAgICAgICAnXFx1RkY1NCc6ICd0JyxcbiAgICAgICAgJ1xcdTFFNkInOiAndCcsXG4gICAgICAgICdcXHUxRTk3JzogJ3QnLFxuICAgICAgICAnXFx1MDE2NSc6ICd0JyxcbiAgICAgICAgJ1xcdTFFNkQnOiAndCcsXG4gICAgICAgICdcXHUwMjFCJzogJ3QnLFxuICAgICAgICAnXFx1MDE2Myc6ICd0JyxcbiAgICAgICAgJ1xcdTFFNzEnOiAndCcsXG4gICAgICAgICdcXHUxRTZGJzogJ3QnLFxuICAgICAgICAnXFx1MDE2Nyc6ICd0JyxcbiAgICAgICAgJ1xcdTAxQUQnOiAndCcsXG4gICAgICAgICdcXHUwMjg4JzogJ3QnLFxuICAgICAgICAnXFx1MkM2Nic6ICd0JyxcbiAgICAgICAgJ1xcdUE3ODcnOiAndCcsXG4gICAgICAgICdcXHVBNzI5JzogJ3R6JyxcbiAgICAgICAgJ1xcdTI0RTQnOiAndScsXG4gICAgICAgICdcXHVGRjU1JzogJ3UnLFxuICAgICAgICAnXFx1MDBGOSc6ICd1JyxcbiAgICAgICAgJ1xcdTAwRkEnOiAndScsXG4gICAgICAgICdcXHUwMEZCJzogJ3UnLFxuICAgICAgICAnXFx1MDE2OSc6ICd1JyxcbiAgICAgICAgJ1xcdTFFNzknOiAndScsXG4gICAgICAgICdcXHUwMTZCJzogJ3UnLFxuICAgICAgICAnXFx1MUU3Qic6ICd1JyxcbiAgICAgICAgJ1xcdTAxNkQnOiAndScsXG4gICAgICAgICdcXHUwMEZDJzogJ3UnLFxuICAgICAgICAnXFx1MDFEQyc6ICd1JyxcbiAgICAgICAgJ1xcdTAxRDgnOiAndScsXG4gICAgICAgICdcXHUwMUQ2JzogJ3UnLFxuICAgICAgICAnXFx1MDFEQSc6ICd1JyxcbiAgICAgICAgJ1xcdTFFRTcnOiAndScsXG4gICAgICAgICdcXHUwMTZGJzogJ3UnLFxuICAgICAgICAnXFx1MDE3MSc6ICd1JyxcbiAgICAgICAgJ1xcdTAxRDQnOiAndScsXG4gICAgICAgICdcXHUwMjE1JzogJ3UnLFxuICAgICAgICAnXFx1MDIxNyc6ICd1JyxcbiAgICAgICAgJ1xcdTAxQjAnOiAndScsXG4gICAgICAgICdcXHUxRUVCJzogJ3UnLFxuICAgICAgICAnXFx1MUVFOSc6ICd1JyxcbiAgICAgICAgJ1xcdTFFRUYnOiAndScsXG4gICAgICAgICdcXHUxRUVEJzogJ3UnLFxuICAgICAgICAnXFx1MUVGMSc6ICd1JyxcbiAgICAgICAgJ1xcdTFFRTUnOiAndScsXG4gICAgICAgICdcXHUxRTczJzogJ3UnLFxuICAgICAgICAnXFx1MDE3Myc6ICd1JyxcbiAgICAgICAgJ1xcdTFFNzcnOiAndScsXG4gICAgICAgICdcXHUxRTc1JzogJ3UnLFxuICAgICAgICAnXFx1MDI4OSc6ICd1JyxcbiAgICAgICAgJ1xcdTI0RTUnOiAndicsXG4gICAgICAgICdcXHVGRjU2JzogJ3YnLFxuICAgICAgICAnXFx1MUU3RCc6ICd2JyxcbiAgICAgICAgJ1xcdTFFN0YnOiAndicsXG4gICAgICAgICdcXHUwMjhCJzogJ3YnLFxuICAgICAgICAnXFx1QTc1Ric6ICd2JyxcbiAgICAgICAgJ1xcdTAyOEMnOiAndicsXG4gICAgICAgICdcXHVBNzYxJzogJ3Z5JyxcbiAgICAgICAgJ1xcdTI0RTYnOiAndycsXG4gICAgICAgICdcXHVGRjU3JzogJ3cnLFxuICAgICAgICAnXFx1MUU4MSc6ICd3JyxcbiAgICAgICAgJ1xcdTFFODMnOiAndycsXG4gICAgICAgICdcXHUwMTc1JzogJ3cnLFxuICAgICAgICAnXFx1MUU4Nyc6ICd3JyxcbiAgICAgICAgJ1xcdTFFODUnOiAndycsXG4gICAgICAgICdcXHUxRTk4JzogJ3cnLFxuICAgICAgICAnXFx1MUU4OSc6ICd3JyxcbiAgICAgICAgJ1xcdTJDNzMnOiAndycsXG4gICAgICAgICdcXHUyNEU3JzogJ3gnLFxuICAgICAgICAnXFx1RkY1OCc6ICd4JyxcbiAgICAgICAgJ1xcdTFFOEInOiAneCcsXG4gICAgICAgICdcXHUxRThEJzogJ3gnLFxuICAgICAgICAnXFx1MjRFOCc6ICd5JyxcbiAgICAgICAgJ1xcdUZGNTknOiAneScsXG4gICAgICAgICdcXHUxRUYzJzogJ3knLFxuICAgICAgICAnXFx1MDBGRCc6ICd5JyxcbiAgICAgICAgJ1xcdTAxNzcnOiAneScsXG4gICAgICAgICdcXHUxRUY5JzogJ3knLFxuICAgICAgICAnXFx1MDIzMyc6ICd5JyxcbiAgICAgICAgJ1xcdTFFOEYnOiAneScsXG4gICAgICAgICdcXHUwMEZGJzogJ3knLFxuICAgICAgICAnXFx1MUVGNyc6ICd5JyxcbiAgICAgICAgJ1xcdTFFOTknOiAneScsXG4gICAgICAgICdcXHUxRUY1JzogJ3knLFxuICAgICAgICAnXFx1MDFCNCc6ICd5JyxcbiAgICAgICAgJ1xcdTAyNEYnOiAneScsXG4gICAgICAgICdcXHUxRUZGJzogJ3knLFxuICAgICAgICAnXFx1MjRFOSc6ICd6JyxcbiAgICAgICAgJ1xcdUZGNUEnOiAneicsXG4gICAgICAgICdcXHUwMTdBJzogJ3onLFxuICAgICAgICAnXFx1MUU5MSc6ICd6JyxcbiAgICAgICAgJ1xcdTAxN0MnOiAneicsXG4gICAgICAgICdcXHUwMTdFJzogJ3onLFxuICAgICAgICAnXFx1MUU5Myc6ICd6JyxcbiAgICAgICAgJ1xcdTFFOTUnOiAneicsXG4gICAgICAgICdcXHUwMUI2JzogJ3onLFxuICAgICAgICAnXFx1MDIyNSc6ICd6JyxcbiAgICAgICAgJ1xcdTAyNDAnOiAneicsXG4gICAgICAgICdcXHUyQzZDJzogJ3onLFxuICAgICAgICAnXFx1QTc2Myc6ICd6JyxcbiAgICAgICAgJ1xcdTAzODYnOiAnXFx1MDM5MScsXG4gICAgICAgICdcXHUwMzg4JzogJ1xcdTAzOTUnLFxuICAgICAgICAnXFx1MDM4OSc6ICdcXHUwMzk3JyxcbiAgICAgICAgJ1xcdTAzOEEnOiAnXFx1MDM5OScsXG4gICAgICAgICdcXHUwM0FBJzogJ1xcdTAzOTknLFxuICAgICAgICAnXFx1MDM4Qyc6ICdcXHUwMzlGJyxcbiAgICAgICAgJ1xcdTAzOEUnOiAnXFx1MDNBNScsXG4gICAgICAgICdcXHUwM0FCJzogJ1xcdTAzQTUnLFxuICAgICAgICAnXFx1MDM4Ric6ICdcXHUwM0E5JyxcbiAgICAgICAgJ1xcdTAzQUMnOiAnXFx1MDNCMScsXG4gICAgICAgICdcXHUwM0FEJzogJ1xcdTAzQjUnLFxuICAgICAgICAnXFx1MDNBRSc6ICdcXHUwM0I3JyxcbiAgICAgICAgJ1xcdTAzQUYnOiAnXFx1MDNCOScsXG4gICAgICAgICdcXHUwM0NBJzogJ1xcdTAzQjknLFxuICAgICAgICAnXFx1MDM5MCc6ICdcXHUwM0I5JyxcbiAgICAgICAgJ1xcdTAzQ0MnOiAnXFx1MDNCRicsXG4gICAgICAgICdcXHUwM0NEJzogJ1xcdTAzQzUnLFxuICAgICAgICAnXFx1MDNDQic6ICdcXHUwM0M1JyxcbiAgICAgICAgJ1xcdTAzQjAnOiAnXFx1MDNDNScsXG4gICAgICAgICdcXHUwM0M5JzogJ1xcdTAzQzknLFxuICAgICAgICAnXFx1MDNDMic6ICdcXHUwM0MzJ1xuICAgIH07XG5cbiAgICBzdGF0aWMgc3RyaXAodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgICBsZXQgbWF0Y2ggPSAoYTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkRJQUNSSVRJQ1NbYV0gfHwgYTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9bXlxcdTAwMDAtXFx1MDA3RV0vZywgbWF0Y2gpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHtPcHRpb259IGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCB7SU9wdGlvbn0gZnJvbSAnLi9vcHRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7RGlhY3JpdGljc30gZnJvbSAnLi9kaWFjcml0aWNzJztcblxuZXhwb3J0IGNsYXNzIE9wdGlvbkxpc3Qge1xuXG4gICAgcHJpdmF0ZSBfb3B0aW9uczogQXJyYXk8T3B0aW9uPjtcblxuICAgIC8qIENvbnNpZGVyIHVzaW5nIHRoZXNlIGZvciBwZXJmb3JtYW5jZSBpbXByb3ZlbWVudC4gKi9cbiAgICAvLyBwcml2YXRlIF9zZWxlY3Rpb246IEFycmF5PE9wdGlvbj47XG4gICAgLy8gcHJpdmF0ZSBfZmlsdGVyZWQ6IEFycmF5PE9wdGlvbj47XG4gICAgLy8gcHJpdmF0ZSBfdmFsdWU6IEFycmF5PHN0cmluZz47XG5cbiAgICBwcml2YXRlIF9oaWdobGlnaHRlZE9wdGlvbjogT3B0aW9uID0gbnVsbDtcbiAgICBwcml2YXRlIF9oYXNTaG93bjogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9oYXNTZWxlY3RlZDogYm9vbGVhbjtcblxuICAgIGdldCBoYXNTaG93bigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc1Nob3duO1xuICAgIH1cbiAgICBnZXQgaGFzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBBcnJheTxJT3B0aW9uPikge1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcgfHwgb3B0aW9ucyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGxldCBvOiBPcHRpb24gPSBuZXcgT3B0aW9uKG9wdGlvbik7XG4gICAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgby5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5faGFzU2hvd24gPSB0aGlzLl9vcHRpb25zLmxlbmd0aCA+IDA7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0KCk7XG4gICAgfVxuXG4gICAgLyoqIE9wdGlvbnMuICoqL1xuXG4gICAgZ2V0IG9wdGlvbnMoKTogQXJyYXk8T3B0aW9uPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgIH1cblxuICAgIGdldE9wdGlvbnNCeVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBBcnJheTxPcHRpb24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi52YWx1ZSA9PT0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKiBWYWx1ZS4gKiovXG5cbiAgICBnZXQgdmFsdWUoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbi5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSk7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHY6IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgdiA9IHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJyB8fCB2ID09PSBudWxsID8gW10gOiB2O1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHYuaW5kZXhPZihvcHRpb24udmFsdWUpID4gLTE7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZUhhc1NlbGVjdGVkKCk7XG4gICAgfVxuXG4gICAgLyoqIFNlbGVjdGlvbi4gKiovXG5cbiAgICBnZXQgc2VsZWN0aW9uKCk6IEFycmF5PE9wdGlvbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBzZWxlY3Qob3B0aW9uOiBPcHRpb24sIG11bHRpcGxlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICghbXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUhhc1NlbGVjdGVkKCk7XG4gICAgfVxuXG4gICAgZGVzZWxlY3Qob3B0aW9uOiBPcHRpb24pIHtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlSGFzU2VsZWN0ZWQoKTtcbiAgICB9XG5cbiAgICBjbGVhclNlbGVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9oYXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlSGFzU2VsZWN0ZWQoKSB7XG4gICAgICAgIHRoaXMuX2hhc1NlbGVjdGVkID0gdGhpcy5vcHRpb25zLnNvbWUob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgLyoqIEZpbHRlci4gKiovXG5cbiAgICBnZXQgZmlsdGVyZWQoKTogQXJyYXk8T3B0aW9uPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2hvd24pO1xuICAgIH1cblxuICAgIGdldCBmaWx0ZXJlZEVuYWJsZWQoKTogQXJyYXk8T3B0aW9uPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2hvd24gJiYgIW9wdGlvbi5kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgZmlsdGVyKHRlcm06IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgYW55U2hvd246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICBpZiAodGVybS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0RmlsdGVyKCk7XG4gICAgICAgICAgICBhbnlTaG93biA9IHRoaXMub3B0aW9ucy5sZW5ndGggPiAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsOiBzdHJpbmcgPSBEaWFjcml0aWNzLnN0cmlwKG9wdGlvbi5sYWJlbCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgdDogc3RyaW5nID0gRGlhY3JpdGljcy5zdHJpcCh0ZXJtKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zaG93biA9IGwuaW5kZXhPZih0KSA+IC0xO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbi5zaG93bikge1xuICAgICAgICAgICAgICAgICAgICBhbnlTaG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0KCk7XG4gICAgICAgIHRoaXMuX2hhc1Nob3duID0gYW55U2hvd247XG5cbiAgICAgICAgcmV0dXJuIGFueVNob3duO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRGaWx0ZXIoKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5zaG93biA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKiBIaWdobGlnaHQuICoqL1xuXG4gICAgZ2V0IGhpZ2hsaWdodGVkT3B0aW9uKCk6IE9wdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaWdobGlnaHRlZE9wdGlvbjtcbiAgICB9XG5cbiAgICBoaWdobGlnaHQoKSB7XG4gICAgICAgIGxldCBvcHRpb246IE9wdGlvbiA9IHRoaXMuaGFzU2hvd25TZWxlY3RlZCgpID9cbiAgICAgICAgICAgIHRoaXMuZ2V0Rmlyc3RTaG93blNlbGVjdGVkKCkgOiB0aGlzLmdldEZpcnN0U2hvd24oKTtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRPcHRpb24ob3B0aW9uKTtcbiAgICB9XG5cbiAgICBoaWdobGlnaHRPcHRpb24ob3B0aW9uOiBPcHRpb24pIHtcbiAgICAgICAgdGhpcy5jbGVhckhpZ2hsaWdodGVkT3B0aW9uKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgb3B0aW9uLmhpZ2hsaWdodGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodGVkT3B0aW9uID0gb3B0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlnaGxpZ2h0TmV4dE9wdGlvbigpIHtcbiAgICAgICAgbGV0IHNob3duRW5hYmxlZE9wdGlvbnMgPSB0aGlzLmZpbHRlcmVkRW5hYmxlZDtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5nZXRIaWdobGlnaHRlZEluZGV4RnJvbUxpc3Qoc2hvd25FbmFibGVkT3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKGluZGV4ID4gLTEgJiYgaW5kZXggPCBzaG93bkVuYWJsZWRPcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0T3B0aW9uKHNob3duRW5hYmxlZE9wdGlvbnNbaW5kZXggKyAxXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWdobGlnaHRQcmV2aW91c09wdGlvbigpIHtcbiAgICAgICAgbGV0IHNob3duRW5hYmxlZE9wdGlvbnMgPSB0aGlzLmZpbHRlcmVkRW5hYmxlZDtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5nZXRIaWdobGlnaHRlZEluZGV4RnJvbUxpc3Qoc2hvd25FbmFibGVkT3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRPcHRpb24oc2hvd25FbmFibGVkT3B0aW9uc1tpbmRleCAtIDFdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2xlYXJIaWdobGlnaHRlZE9wdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaGlnaGxpZ2h0ZWRPcHRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRPcHRpb24uaGlnaGxpZ2h0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodGVkT3B0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SGlnaGxpZ2h0ZWRJbmRleEZyb21MaXN0KG9wdGlvbnM6IEFycmF5PE9wdGlvbj4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9uc1tpXS5oaWdobGlnaHRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBnZXRIaWdobGlnaHRlZEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRIaWdobGlnaHRlZEluZGV4RnJvbUxpc3QodGhpcy5maWx0ZXJlZCk7XG4gICAgfVxuXG4gICAgLyoqIFV0aWwuICoqL1xuXG4gICAgaGFzU2hvd25TZWxlY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb21lKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24uc2hvd24gJiYgb3B0aW9uLnNlbGVjdGVkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEZpcnN0U2hvd24oKTogT3B0aW9uIHtcbiAgICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIHRoaXMub3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5zaG93bikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRGaXJzdFNob3duU2VsZWN0ZWQoKTogT3B0aW9uIHtcbiAgICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIHRoaXMub3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5zaG93biAmJiBvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHYwIGFuZCB2MSBhcmUgYXNzdW1lZCBub3QgdG8gYmUgdW5kZWZpbmVkIG9yIG51bGwuXG4gICAgc3RhdGljIGVxdWFsVmFsdWVzKHYwOiBBcnJheTxzdHJpbmc+LCB2MTogQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuXG4gICAgICAgIGlmICh2MC5sZW5ndGggIT09IHYxLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGE6IEFycmF5PHN0cmluZz4gPSB2MC5zbGljZSgpLnNvcnQoKTtcbiAgICAgICAgbGV0IGI6IEFycmF5PHN0cmluZz4gPSB2MS5zbGljZSgpLnNvcnQoKTtcblxuICAgICAgICByZXR1cm4gYS5ldmVyeSgodiwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHYgPT09IGJbaV07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09wdGlvbn0gZnJvbSAnLi9vcHRpb24nO1xuaW1wb3J0IHtPcHRpb25MaXN0fSBmcm9tICcuL29wdGlvbi1saXN0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzZWxlY3QtZHJvcGRvd24nLFxuICAgIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcblxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3Bkb3duQ29tcG9uZW50XG4gICAgICAgIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQge1xuXG4gICAgQElucHV0KCkgZmlsdGVyRW5hYmxlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBoaWdobGlnaHRDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGhpZ2hsaWdodFRleHRDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGxlZnQ6IG51bWJlcjtcbiAgICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBub3RGb3VuZE1zZzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG9wdGlvbkxpc3Q6IE9wdGlvbkxpc3Q7XG4gICAgQElucHV0KCkgaXNCZWxvdzogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB0b3A6IG51bWJlcjtcbiAgICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgb3B0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAT3V0cHV0KCkgb3B0aW9uQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8T3B0aW9uPigpO1xuICAgIEBPdXRwdXQoKSBvcHRpb25zTGlzdENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICAgIEBPdXRwdXQoKSBzaW5nbGVGaWx0ZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcbiAgICBAT3V0cHV0KCkgc2luZ2xlRmlsdGVyRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XG4gICAgQE91dHB1dCgpIHNpbmdsZUZpbHRlcklucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICAgQE91dHB1dCgpIHNpbmdsZUZpbHRlcktleWRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ2ZpbHRlcklucHV0JykgZmlsdGVySW5wdXQ6IGFueTtcbiAgICBAVmlld0NoaWxkKCdvcHRpb25zTGlzdCcpIG9wdGlvbnNMaXN0OiBhbnk7XG5cbiAgICBkaXNhYmxlZENvbG9yOiBzdHJpbmcgPSAnI2ZmZic7XG4gICAgZGlzYWJsZWRUZXh0Q29sb3I6IHN0cmluZyA9ICc5ZTllOWUnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBob3N0RWxlbWVudDogRWxlbWVudFJlZlxuICAgICkge31cblxuICAgIC8qKiBFdmVudCBoYW5kbGVycy4gKiovXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zUmVzZXQoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ29wdGlvbkxpc3QnKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zUmVzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUgJiYgdGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uT3B0aW9uc0xpc3RDbGljaygpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zTGlzdENsaWNrLmVtaXQobnVsbCk7XG4gICAgfVxuXG4gICAgb25TaW5nbGVGaWx0ZXJDbGljaygpIHtcbiAgICAgICAgdGhpcy5zaW5nbGVGaWx0ZXJDbGljay5lbWl0KG51bGwpO1xuICAgIH1cblxuICAgIG9uU2luZ2xlRmlsdGVySW5wdXQoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnNpbmdsZUZpbHRlcklucHV0LmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBvblNpbmdsZUZpbHRlcktleWRvd24oZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnNpbmdsZUZpbHRlcktleWRvd24uZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25TaW5nbGVGaWx0ZXJGb2N1cygpIHtcbiAgICAgICAgdGhpcy5zaW5nbGVGaWx0ZXJGb2N1cy5lbWl0KG51bGwpO1xuICAgIH1cblxuICAgIG9uT3B0aW9uc1doZWVsKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVPcHRpb25zV2hlZWwoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uT3B0aW9uTW91c2VvdmVyKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHRPcHRpb24ob3B0aW9uKTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbkNsaWNrKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgICAgIHRoaXMub3B0aW9uQ2xpY2tlZC5lbWl0KG9wdGlvbik7XG4gICAgfVxuXG4gICAgLyoqIEluaXRpYWxpemF0aW9uLiAqKi9cblxuICAgIHByaXZhdGUgb3B0aW9uc1Jlc2V0KCkge1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyKCcnKTtcbiAgICAgICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodCgpO1xuICAgIH1cblxuICAgIC8qKiBWaWV3LiAqKi9cblxuICAgIGdldE9wdGlvblN0eWxlKG9wdGlvbjogT3B0aW9uKTogYW55IHtcbiAgICAgICAgaWYgKG9wdGlvbi5oaWdobGlnaHRlZCkge1xuICAgICAgICAgICAgbGV0IHN0eWxlOiBhbnkgPSB7fTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmhpZ2hsaWdodENvbG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodENvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmhpZ2hsaWdodFRleHRDb2xvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVsnY29sb3InXSA9IHRoaXMuaGlnaGxpZ2h0VGV4dENvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUhpZ2hsaWdodGVkSW50b1ZpZXcoKSB7XG5cbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGxldCBsaXN0SGVpZ2h0ID0gbGlzdC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgbGV0IGl0ZW1JbmRleCA9IHRoaXMub3B0aW9uTGlzdC5nZXRIaWdobGlnaHRlZEluZGV4KCk7XG5cbiAgICAgICAgaWYgKGl0ZW1JbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGxpc3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5baXRlbUluZGV4XTtcbiAgICAgICAgICAgIGxldCBpdGVtSGVpZ2h0ID0gaXRlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgIGxldCBpdGVtVG9wID0gaXRlbUluZGV4ICogaXRlbUhlaWdodDtcbiAgICAgICAgICAgIGxldCBpdGVtQm90dG9tID0gaXRlbVRvcCArIGl0ZW1IZWlnaHQ7XG5cbiAgICAgICAgICAgIGxldCB2aWV3VG9wID0gbGlzdC5zY3JvbGxUb3A7XG4gICAgICAgICAgICBsZXQgdmlld0JvdHRvbSA9IHZpZXdUb3AgKyBsaXN0SGVpZ2h0O1xuXG4gICAgICAgICAgICBpZiAoaXRlbUJvdHRvbSA+IHZpZXdCb3R0b20pIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNjcm9sbFRvcCA9IGl0ZW1Cb3R0b20gLSBsaXN0SGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXRlbVRvcCA8IHZpZXdUb3ApIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNjcm9sbFRvcCA9IGl0ZW1Ub3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZU9wdGlvbnNXaGVlbChlOiBhbnkpIHtcbiAgICAgICAgbGV0IGRpdiA9IHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IGF0VG9wID0gZGl2LnNjcm9sbFRvcCA9PT0gMDtcbiAgICAgICAgbGV0IGF0Qm90dG9tID0gZGl2Lm9mZnNldEhlaWdodCArIGRpdi5zY3JvbGxUb3AgPT09IGRpdi5zY3JvbGxIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGF0VG9wICYmIGUuZGVsdGFZIDwgMCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF0Qm90dG9tICYmIGUuZGVsdGFZID4gMCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRXhpc3RpbmdQcm92aWRlciwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZiwgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzLCBDb250ZW50Q2hpbGQsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1NlbGVjdERyb3Bkb3duQ29tcG9uZW50fSBmcm9tICcuL3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHtJT3B0aW9ufSBmcm9tICcuL29wdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHtPcHRpb259IGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCB7T3B0aW9uTGlzdH0gZnJvbSAnLi9vcHRpb24tbGlzdCc7XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RfVkFMVUVfQUNDRVNTT1I6IEV4aXN0aW5nUHJvdmlkZXIgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VsZWN0Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZy1zZWxlY3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbU0VMRUNUX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuICAgIC8vIERhdGEgaW5wdXQuXG4gICAgQElucHV0KCkgb3B0aW9uczogQXJyYXk8SU9wdGlvbj4gPSBbXTtcblxuICAgIC8vIEZ1bmN0aW9uYWxpdHkgc2V0dGluZ3MuXG4gICAgQElucHV0KCkgYWxsb3dDbGVhcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBub0ZpbHRlcjogbnVtYmVyID0gMDtcblxuICAgIC8vIFN0eWxlIHNldHRpbmdzLlxuICAgIEBJbnB1dCgpIGhpZ2hsaWdodENvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaGlnaGxpZ2h0VGV4dENvbG9yOiBzdHJpbmc7XG5cbiAgICAvLyBUZXh0IHNldHRpbmdzLlxuICAgIEBJbnB1dCgpIG5vdEZvdW5kTXNnOiBzdHJpbmcgPSAnTm8gcmVzdWx0cyBmb3VuZCc7XG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIGZpbHRlclBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XG5cbiAgICAvLyBPdXRwdXQgZXZlbnRzLlxuICAgIEBPdXRwdXQoKSBvcGVuZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XG4gICAgQE91dHB1dCgpIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElPcHRpb24+KCk7XG4gICAgQE91dHB1dCgpIGRlc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElPcHRpb24gfCBJT3B0aW9uW10+KCk7XG4gICAgQE91dHB1dCgpIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICAgIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICAgIEBPdXRwdXQoKSBub09wdGlvbnNGb3VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIEBPdXRwdXQoKSBmaWx0ZXJJbnB1dENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ3NlbGVjdGlvbicpIHNlbGVjdGlvblNwYW46IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnZHJvcGRvd24nKSBkcm9wZG93bjogU2VsZWN0RHJvcGRvd25Db21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZCgnZmlsdGVySW5wdXQnKSBmaWx0ZXJJbnB1dDogRWxlbWVudFJlZjtcblxuICAgIEBDb250ZW50Q2hpbGQoJ29wdGlvblRlbXBsYXRlJykgb3B0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBwcml2YXRlIF92YWx1ZTogQXJyYXk8YW55PiA9IFtdO1xuICAgIG9wdGlvbkxpc3Q6IE9wdGlvbkxpc3QgPSBuZXcgT3B0aW9uTGlzdChbXSk7XG5cbiAgICAvLyBWaWV3IHN0YXRlIHZhcmlhYmxlcy5cbiAgICBoYXNGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQmVsb3c6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgZmlsdGVyRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgZmlsdGVySW5wdXRXaWR0aDogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwbGFjZWhvbGRlclZpZXc6IHN0cmluZyA9ICcnO1xuXG4gICAgcHJpdmF0ZSBjbGVhckNsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHNlbGVjdENvbnRhaW5lckNsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIG9wdGlvbkxpc3RDbGlja2VkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBvcHRpb25DbGlja2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLyBXaWR0aCBhbmQgcG9zaXRpb24gZm9yIHRoZSBkcm9wZG93biBjb250YWluZXIuXG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG5cbiAgICBwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gICAgcHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXG4gICAgKSB7fVxuXG4gICAgLyoqIEV2ZW50IGhhbmRsZXJzLiAqKi9cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyVmlldyA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlcyhjaGFuZ2VzKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Ymx1cicpXG4gICAgb25XaW5kb3dCbHVyKCkge1xuICAgICAgICB0aGlzLl9ibHVyKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OmNsaWNrJylcbiAgICBvbldpbmRvd0NsaWNrKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0Q29udGFpbmVyQ2xpY2tlZCAmJlxuICAgICAgICAgICAgKCF0aGlzLm9wdGlvbkxpc3RDbGlja2VkIHx8ICh0aGlzLm9wdGlvbkxpc3RDbGlja2VkICYmIHRoaXMub3B0aW9uQ2xpY2tlZCkpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24odGhpcy5vcHRpb25DbGlja2VkKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25DbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmx1cigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXJDbGlja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VsZWN0Q29udGFpbmVyQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3RDbGlja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3B0aW9uQ2xpY2tlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICAgIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgfVxuXG4gICAgb25TZWxlY3RDb250YWluZXJDbGljayhldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0Q29udGFpbmVyQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgIGlmICghdGhpcy5jbGVhckNsaWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRHJvcGRvd24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2VsZWN0Q29udGFpbmVyRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzKCk7XG4gICAgfVxuXG4gICAgb25TZWxlY3RDb250YWluZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RDb250YWluZXJLZXlkb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbnNMaXN0Q2xpY2soKSB7XG4gICAgICAgIHRoaXMub3B0aW9uTGlzdENsaWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uRHJvcGRvd25PcHRpb25DbGlja2VkKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgICAgIHRoaXMub3B0aW9uQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubXVsdGlwbGUgPyB0aGlzLnRvZ2dsZVNlbGVjdE9wdGlvbihvcHRpb24pIDogdGhpcy5zZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICB9XG5cbiAgICBvblNpbmdsZUZpbHRlckNsaWNrKCkge1xuICAgICAgICB0aGlzLnNlbGVjdENvbnRhaW5lckNsaWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uU2luZ2xlRmlsdGVyRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzKCk7XG4gICAgfVxuXG4gICAgb25GaWx0ZXJJbnB1dCh0ZXJtOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJJbnB1dENoYW5nZWQuZW1pdCh0ZXJtKTtcbiAgICAgICAgdGhpcy5maWx0ZXIodGVybSk7XG4gICAgfVxuXG4gICAgb25TaW5nbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTaW5nbGVGaWx0ZXJLZXlkb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbk11bHRpcGxlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTXVsdGlwbGVGaWx0ZXJLZXlkb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbk11bHRpcGxlRmlsdGVyRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzKCk7XG4gICAgfVxuXG4gICAgb25DbGVhclNlbGVjdGlvbkNsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5jbGVhckNsaWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bih0cnVlKTtcbiAgICB9XG5cbiAgICBvbkRlc2VsZWN0T3B0aW9uQ2xpY2sob3B0aW9uOiBPcHRpb24pIHtcbiAgICAgICAgdGhpcy5jbGVhckNsaWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRlc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgfVxuXG4gICAgLyoqIEFQSS4gKiovXG5cbiAgICAvLyBUT0RPIGZpeCBpc3N1ZXMgd2l0aCBnbG9iYWwgY2xpY2sva2V5IGhhbmRsZXIgdGhhdCBjbG9zZXMgdGhlIGRyb3Bkb3duLlxuICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bihmYWxzZSk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBzZWxlY3QodmFsdWU6IHN0cmluZyB8IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlIG1ldGhvZHMuICoqL1xuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICAvKiogSW5wdXQgY2hhbmdlIGhhbmRsaW5nLiAqKi9cblxuICAgIHByaXZhdGUgaGFuZGxlSW5wdXRDaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgbGV0IG9wdGlvbnNDaGFuZ2VkOiBib29sZWFuID0gY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnb3B0aW9ucycpO1xuICAgICAgICBsZXQgbm9GaWx0ZXJDaGFuZ2VkOiBib29sZWFuID0gY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbm9GaWx0ZXInKTtcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyQ2hhbmdlZDogYm9vbGVhbiA9IGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3BsYWNlaG9sZGVyJyk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbkxpc3QoY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnNDaGFuZ2VkIHx8IG5vRmlsdGVyQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJFbmFibGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVPcHRpb25MaXN0KG9wdGlvbnM6IEFycmF5PElPcHRpb24+KSB7XG4gICAgICAgIHRoaXMub3B0aW9uTGlzdCA9IG5ldyBPcHRpb25MaXN0KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3QudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUZpbHRlckVuYWJsZWQoKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyRW5hYmxlZCA9IHRoaXMub3B0aW9uTGlzdC5vcHRpb25zLmxlbmd0aCA+PSB0aGlzLm5vRmlsdGVyO1xuICAgIH1cblxuICAgIC8qKiBWYWx1ZS4gKiovXG5cbiAgICBnZXQgdmFsdWUoKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMuX3ZhbHVlIDogdGhpcy5fdmFsdWVbMF07XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHY6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgfHwgdiA9PT0gbnVsbCB8fCB2ID09PSAnJykge1xuICAgICAgICAgICAgdiA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdiA9IFt2XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmFsdWUgbXVzdCBiZSBhIHN0cmluZyBvciBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9uTGlzdC52YWx1ZSA9IHY7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMub3B0aW9uTGlzdC52YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlU3RhdGUoKSB7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJWaWV3ID0gdGhpcy5vcHRpb25MaXN0Lmhhc1NlbGVjdGVkID8gJycgOiB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsdGVyV2lkdGgoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIFNlbGVjdC4gKiovXG5cbiAgICBwcml2YXRlIHNlbGVjdE9wdGlvbihvcHRpb246IE9wdGlvbikge1xuICAgICAgICBpZiAoIW9wdGlvbi5zZWxlY3RlZCAmJiAhb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbkxpc3Quc2VsZWN0KG9wdGlvbiwgdGhpcy5tdWx0aXBsZSk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCgpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5lbWl0KG9wdGlvbi53cmFwcGVkT3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZGVzZWxlY3RPcHRpb24ob3B0aW9uOiBPcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25MaXN0LmRlc2VsZWN0KG9wdGlvbik7XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCgpO1xuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdGVkLmVtaXQob3B0aW9uLndyYXBwZWRPcHRpb24pO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgICAgIGxldCBzZWxlY3Rpb246IEFycmF5PE9wdGlvbj4gPSB0aGlzLm9wdGlvbkxpc3Quc2VsZWN0aW9uO1xuICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uTGlzdC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQoKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0ZWQuZW1pdChzZWxlY3Rpb25bMF0ud3JhcHBlZE9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0ZWQuZW1pdChzZWxlY3Rpb24ubWFwKG9wdGlvbiA9PiBvcHRpb24ud3JhcHBlZE9wdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGVTZWxlY3RPcHRpb24ob3B0aW9uOiBPcHRpb24pIHtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID8gdGhpcy5kZXNlbGVjdE9wdGlvbihvcHRpb24pIDogdGhpcy5zZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbGVjdEhpZ2hsaWdodGVkT3B0aW9uKCkge1xuICAgICAgICBsZXQgb3B0aW9uOiBPcHRpb24gPSB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0ZWRPcHRpb247XG4gICAgICAgIGlmIChvcHRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24odHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc2VsZWN0TGFzdCgpIHtcbiAgICAgICAgbGV0IHNlbDogQXJyYXk8T3B0aW9uPiA9IHRoaXMub3B0aW9uTGlzdC5zZWxlY3Rpb247XG5cbiAgICAgICAgaWYgKHNlbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uOiBPcHRpb24gPSBzZWxbc2VsLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgICAgICAgICAgdGhpcy5zZXRNdWx0aXBsZUZpbHRlcklucHV0KG9wdGlvbi5sYWJlbCArICcgJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogRHJvcGRvd24uICoqL1xuXG4gICAgcHJpdmF0ZSB0b2dnbGVEcm9wZG93bigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID8gdGhpcy5jbG9zZURyb3Bkb3duKHRydWUpIDogdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb3BlbkRyb3Bkb3duKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5lZC5lbWl0KG51bGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNsb3NlRHJvcGRvd24oZm9jdXM6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyRmlsdGVySW5wdXQoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsdGVyV2lkdGgoKTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoZm9jdXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2N1c1NlbGVjdENvbnRhaW5lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbG9zZWQuZW1pdChudWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBGaWx0ZXIuICoqL1xuXG4gICAgcHJpdmF0ZSBmaWx0ZXIodGVybTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsdGVyV2lkdGgoKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBoYXNTaG93bjogYm9vbGVhbiA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXIodGVybSk7XG4gICAgICAgICAgICBpZiAoIWhhc1Nob3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub09wdGlvbnNGb3VuZC5lbWl0KHRlcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsZWFyRmlsdGVySW5wdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldE11bHRpcGxlRmlsdGVySW5wdXQodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBLZXlzLiAqKi9cblxuICAgIHByaXZhdGUgS0VZUzogYW55ID0ge1xuICAgICAgICBCQUNLU1BBQ0U6IDgsXG4gICAgICAgIFRBQjogOSxcbiAgICAgICAgRU5URVI6IDEzLFxuICAgICAgICBFU0M6IDI3LFxuICAgICAgICBTUEFDRTogMzIsXG4gICAgICAgIFVQOiAzOCxcbiAgICAgICAgRE9XTjogNDBcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBoYW5kbGVTZWxlY3RDb250YWluZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IGtleSA9IGV2ZW50LndoaWNoO1xuXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpcy5LRVlTLkVTQyB8fCAoa2V5ID09PSB0aGlzLktFWVMuVVAgJiYgZXZlbnQuYWx0S2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bih0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gdGhpcy5LRVlTLlRBQikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bihldmVudC5zaGlmdEtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmx1cigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSB0aGlzLktFWVMuRU5URVIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEhpZ2hsaWdodGVkT3B0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09IHRoaXMuS0VZUy5VUCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHRQcmV2aW91c09wdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24ubW92ZUhpZ2hsaWdodGVkSW50b1ZpZXcoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gdGhpcy5LRVlTLkRPV04pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0TmV4dE9wdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd24ubW92ZUhpZ2hsaWdodGVkSW50b1ZpZXcoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIERFUFJJQ0FURUQgLS0+IFNQQUNFXG4gICAgICAgICAgICBpZiAoa2V5ID09PSB0aGlzLktFWVMuRU5URVIgfHwga2V5ID09PSB0aGlzLktFWVMuU1BBQ0UgfHxcbiAgICAgICAgICAgICAgICAgICAgKGtleSA9PT0gdGhpcy5LRVlTLkRPV04gJiYgZXZlbnQuYWx0S2V5KSkge1xuXG4gICAgICAgICAgICAgICAgLyogRklSRUZPWCBIQUNLOlxuICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICogVGhlIHNldFRpbWVvdXQgaXMgYWRkZWQgdG8gcHJldmVudCB0aGUgZW50ZXIga2V5ZG93biBldmVudFxuICAgICAgICAgICAgICAgICAqIHRvIGJlIHRyaWdnZXJlZCBmb3IgdGhlIGZpbHRlciBpbnB1dCBmaWVsZCwgd2hpY2ggY2F1c2VzXG4gICAgICAgICAgICAgICAgICogdGhlIGRyb3Bkb3duIHRvIGJlIGNsb3NlZCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5vcGVuRHJvcGRvd24oKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09IHRoaXMuS0VZUy5UQUIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ibHVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlTXVsdGlwbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IGtleSA9IGV2ZW50LndoaWNoO1xuXG4gICAgICAgIGlmIChrZXkgPT09IHRoaXMuS0VZUy5CQUNLU1BBQ0UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbkxpc3QuaGFzU2VsZWN0ZWQgJiYgdGhpcy5maWx0ZXJFbmFibGVkICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0TGFzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVTaW5nbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IGtleSA9IGV2ZW50LndoaWNoO1xuXG4gICAgICAgIGlmIChrZXkgPT09IHRoaXMuS0VZUy5FU0MgfHwga2V5ID09PSB0aGlzLktFWVMuVEFCXG4gICAgICAgICAgICAgICAgfHwga2V5ID09PSB0aGlzLktFWVMuVVAgfHwga2V5ID09PSB0aGlzLktFWVMuRE9XTlxuICAgICAgICAgICAgICAgIHx8IGtleSA9PT0gdGhpcy5LRVlTLkVOVEVSKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdENvbnRhaW5lcktleWRvd24oZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFZpZXcuICoqL1xuXG4gICAgX2JsdXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0ZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgICAgICAgdGhpcy5ibHVyLmVtaXQobnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZm9jdXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZvY3VzLmVtaXQobnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZm9jdXNTZWxlY3RDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVXaWR0aCgpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5kcm9wZG93biAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3Qgc3BhblJlY3QgPSB0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGRyb3BSZWN0ID0gdGhpcy5kcm9wZG93bi5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgdG9wID0gc3BhblJlY3QudG9wIC0gaG9zdFJlY3QudG9wO1xuICAgICAgICAgICAgY29uc3QgYm90dG9tID0gaG9zdFJlY3QuYm90dG9tICsgZHJvcFJlY3QuaGVpZ2h0O1xuXG4gICAgICAgICAgICB0aGlzLmlzQmVsb3cgPSBib3R0b20gPCB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBzcGFuUmVjdC5sZWZ0IC0gaG9zdFJlY3QubGVmdDtcbiAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy5pc0JlbG93ID8gdG9wICsgc3BhblJlY3QuaGVpZ2h0IDogdG9wIC0gZHJvcFJlY3QuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGaWx0ZXJXaWR0aCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlcklucHV0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmcgPSB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcklucHV0V2lkdGggPSB2YWx1ZS5sZW5ndGggPT09IDAgP1xuICAgICAgICAgICAgICAgIDEgKyB0aGlzLnBsYWNlaG9sZGVyVmlldy5sZW5ndGggKiAxMCA6IDEgKyB2YWx1ZS5sZW5ndGggKiAxMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7U2VsZWN0Q29tcG9uZW50fSBmcm9tICcuL3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWxlY3REcm9wZG93bkNvbXBvbmVudH0gZnJvbSAnLi9zZWxlY3QtZHJvcGRvd24uY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9vcHRpb24uaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICAgICAgU2VsZWN0RHJvcGRvd25Db21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU2VsZWN0Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdE1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBO0lBU0ksZ0JBQVksTUFBZTtRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztRQUU1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztLQUNyQjtJQUVELHNCQUFJLHlCQUFLOzs7O1FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1NBQ25DOzs7T0FBQTtJQUVELHNCQUFJLHlCQUFLOzs7O1FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1NBQ25DOzs7T0FBQTtJQUNMLGFBQUM7Q0FBQSxJQUFBOzs7Ozs7QUMzQkQ7SUFBQTtLQW8xQkM7Ozs7O0lBUlUsZ0JBQUs7Ozs7SUFBWixVQUFhLElBQVk7UUFBekIsaUJBT0M7O1lBTE8sS0FBSyxHQUFHLFVBQUMsQ0FBUztZQUNsQixPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ25EO0lBajFCTSxxQkFBVSxHQUFHO1FBQ2hCLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUs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

/***/ }),

/***/ "./src/app/services/validate-service/validate-extend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateExtendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValidateExtendService = /** @class */ (function () {
    function ValidateExtendService() {
    }
    ValidateExtendService.email = function (control) {
        if (!control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidateExtendService.matchingEmail = function (emailKey, confirmEmailKey) {
        return function (group) {
            var email = group.controls[emailKey];
            var confirmEmail = group.controls[confirmEmailKey];
            if (email.value !== confirmEmail.value) {
                return {
                    mismatchedEmail: true
                };
            }
        };
    };
    ValidateExtendService.matchingPassword = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPassword: true
                };
            }
        };
    };
    ValidateExtendService.listEmail = function (email) {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
            return false;
        }
        return true;
    };
    ValidateExtendService.isFloat = function (objectKey) {
        return function (group) {
            var _a, _b;
            var object = group.controls[objectKey];
            var floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
            var name = 'invalid' + objectKey;
            if (object.value && object.value.length > 0) {
                if (!floatRegex.test(object.value))
                    return _a = {},
                        _a[name] = true,
                        _a;
                var objectValue = parseFloat(object.value);
                if (isNaN(objectValue))
                    return _b = {},
                        _b[name] = true,
                        _b;
            }
        };
    };
    ValidateExtendService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ValidateExtendService);
    return ValidateExtendService;
}());

// export function confirmEmail(control: AbstractControl) {
//     if (control && control.value !== null) {
//         const ConfirmEmail = control.value;
//         const email = control.root.get('Email');
//         if (email) {
//             const Email = email.value;
//             if (Email !== ConfirmEmail) {
//                 return {
//                     isError: true,
//                 };
//             }
//         }
//     }
//     return null;
// }


/***/ })

});
//# sourceMappingURL=common.chunk.js.map