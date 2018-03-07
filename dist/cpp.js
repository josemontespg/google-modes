(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^static_assert(?![a-zA-Z¡-￿_0-9])/, /^namespace(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^asm(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z0-9_]+(?![a-zA-Z¡-￿_0-9])|[A-Z]+[A-Z0-9]*_[A-Z0-9_]*(?![a-zA-Z¡-￿_0-9]))/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\{)/, /^typename(?![a-zA-Z¡-￿_0-9])/, /^alignas(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F\']+|0b[01\']+|(?:[0-9][0-9\']*(?:\.[0-9\']*)?|\.[0-9][0-9\']*)(?:[eE]\-?[0-9\']*)?)[LlUuFf]?/, /^class(?![a-zA-Z¡-￿_0-9])/, /^using(?![a-zA-Z¡-￿_0-9])/, /^export(?![a-zA-Z¡-￿_0-9])/, /^template(?![a-zA-Z¡-￿_0-9])/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:inline|virtual|explicit|friend|constexpr)(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^\~?[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^noexcept(?![a-zA-Z¡-￿_0-9])/, /^(?:override|final|new)(?![a-zA-Z¡-￿_0-9])/, /^delete(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\-\>|(?!\.\.)\.)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^(?:\.\.\.)?/, /^virtual(?![a-zA-Z¡-￿_0-9])/, /^(?:private|public|protected)(?![a-zA-Z¡-￿_0-9])/, /^new(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^(?:dynamic|static|const|reinterpret)_cast(?![a-zA-Z¡-￿_0-9])/, /^(?:nullptr(?![a-zA-Z¡-￿_0-9])|(?:true|false|null)(?![a-zA-Z¡-￿_0-9]))/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^operator(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^(?!\>)/, /^(?:\.\.\.|\(|\=|\>|\,)/, /^(?:\*|\&\&|\&)/];
var nodes = [
  [2, 6, 2, {"name":"preprocessorLine","token":"meta"},
   0, 2],
  [/^[^]/, 0],
  [1, 9, 3],
  [2, 12, 4, {"name":"Statement"}],
  [0, 2,
   0, 1],
  [3, "keyword", e[5], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[38], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[7], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[16], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[54], -1,
   3, "keyword", e[28], -1,
   3, "keyword", e[29], -1,
   3, "keyword", e[30], -1,
   3, "type", e[32], -1,
   3, "type", e[33], -1,
   3, "keyword", e[31], -1,
   3, "atom", e[53], -1,
   3, "meta", e[17], -1,
   1, 138, -1,
   3, "number", e[23], -1,
   2, 145, -1, {"name":"string","token":"string"},
   2, 150, -1, {"name":"prefixOp","token":"operator"},
   3, "operator", e[39], -1,
   3, "operator", e[41], -1,
   2, 151, -1, {"name":"comment","token":"comment"},
   3, "keyword", e[1], -1,
   3, "keyword", e[21], -1,
   3, "keyword", e[50], -1,
   3, "keyword", e[37], -1,
   3, "keyword", e[51], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[18], -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[35], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[26], -1,
   3, "keyword", e[27], -1,
   3, "keyword", e[24], -1,
   3, "keyword", e[48], -1,
   3, "keyword", e[49], -1,
   3, "keyword", e[55], -1,
   3, "keyword", e[25], -1,
   3, "keyword", e[22], -1,
   3, "keyword", e[0], -1,
   3, "keyword", e[52], -1,
   3, "keyword", e[36], -1,
   /^[^]/, -1],
  ["#", 7],
  [2, 151, 7, {"name":"comment","token":"comment"},
   "\\", 8,
   /^./, 7,
   0, -1],
  [/^[^]/, 7],
  [/^[ \t]/, 9,
   "\n", 10,
   2, 151, 9, {"name":"comment","token":"comment"},
   0, -1],
  [/^[ \t]*/, 11],
  [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
   0, 9],
  [1, 157, -1,
   1, 174, -1,
   3, "keyword", e[0], 13,
   3, "keyword", e[1], 17,
   3, "keyword", e[2], 25,
   3, "keyword", e[3], 29,
   3, "keyword", e[4], 44,
   1, 185, -1,
   2, 198, -1, {"name":"Template"},
   [7, "constructorAhead"], 50,
   3, "keyword", e[5], 53,
   3, "keyword", e[6], 57,
   3, "keyword", e[7], 58,
   3, "keyword", e[8], 59,
   3, "keyword", e[9], 83,
   3, "keyword", e[10], 88,
   2, 207, -1, {"name":"Block"},
   3, "keyword", e[11], 92,
   3, "keyword", e[12], 94,
   3, "keyword", e[13], 98,
   3, "keyword", e[14], 102,
   3, "keyword", e[15], 108,
   3, "keyword", e[16], 109,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 211]], 108,
   3, "meta", e[17], 112,
   2, 212, 120, {"name":"DeclType"},
   ";", -1,
   1, 229, 136],
  [1, 9, 14],
  [2, 234, 15, {"name":"ArgList"}],
  [1, 9, 16],
  [";", -1],
  [1, 9, 18],
  [1, 239, 19,
   0, 19],
  [1, 9, 20],
  [3, "operator", "=", 21,
   2, 242, -1, {"name":"NamespaceBlock"}],
  [1, 9, 22],
  [1, 138, 23],
  [1, 9, 24],
  [";", -1],
  [1, 9, 26],
  [1, 229, 27],
  [1, 9, 28],
  [";", -1],
  [1, 9, 30],
  [2, 207, 31, {"name":"Block"}],
  [1, 9, 32],
  [3, "keyword", e[18], 33,
   0, -1],
  [1, 9, 34],
  ["(", 35],
  [1, 9, 36],
  [1, 246, 37],
  [1, 9, 38],
  [1, 259, 39,
   0, 39],
  [1, 9, 40],
  [")", 41],
  [1, 9, 42],
  [2, 207, 43, {"name":"Block"}],
  [1, 9, 32],
  [1, 9, 45],
  ["{", 46],
  [1, 9, 47],
  [2, 145, 48, {"name":"string","token":"string"}],
  [1, 9, 49],
  ["}", -1],
  [1, 239, 51],
  [1, 9, 52],
  [2, 271, -1, {"name":"FunctionDef"}],
  [1, 9, 54],
  [3, "type def", e[19], 55,
   0, 55],
  [1, 9, 56],
  [2, 304, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 60],
  [1, 9, 61],
  [1, 9, 62],
  ["(", 63],
  [2, 322, 64, {"name":"CondExpr"}],
  [2, 12, 65, {"name":"Statement"}],
  [1, 9, 66],
  [1, 9, 67],
  [1, 9, 68],
  [2, 12, 69, {"name":"Statement"}],
  [2, 12, -1, {"name":"Statement"}],
  [3, "keyword", e[7], 70],
  [1, 9, 71],
  [1, 9, 72],
  [1, 229, 73,
   0, 73],
  [2, 322, 74, {"name":"CondExpr"}],
  [1, 9, 75],
  [1, 9, 76],
  [";", 77],
  [";", -1],
  [1, 9, 78],
  [1, 229, 79,
   0, 79],
  [1, 9, 80],
  [")", 81],
  [1, 9, 82],
  [2, 12, -1, {"name":"Statement"}],
  [1, 9, 84],
  [2, 322, 85, {"name":"CondExpr"}],
  [1, 9, 86],
  [2, 12, 87, {"name":"Statement"}],
  [2, 327, -1, {"name":"Alternative"}],
  [1, 9, 89],
  [2, 322, 90, {"name":"CondExpr"}],
  [1, 9, 91],
  [2, 207, -1, {"name":"Block"}],
  [1, 9, 93],
  [";", -1],
  [1, 9, 95],
  [e[19], 96],
  [1, 9, 97],
  [";", -1],
  [1, 9, 99],
  [1, 229, 100,
   0, 100],
  [1, 9, 101],
  [";", -1],
  [1, 9, 103],
  [1, 239, 104,
   0, 104],
  [1, 9, 105],
  [2, 331, 106, {"name":"BlockOf"},
   0, 106],
  [1, 9, 107],
  [";", -1],
  [1, 9, 110],
  [1, 9, 111],
  [":", -1],
  [1, 229, 108],
  [1, 9, 113],
  [2, 234, 114, {"name":"ArgList"},
   0, 114],
  [1, 9, 115],
  [2, 207, 116, {"name":"Block"},
   0, 117,
   0, 116],
  [1, 9, 118],
  [1, 341, 119,
   0, 116],
  [/^\;?/, -1],
  [1, 9, 117],
  [1, 9, 121],
  [1, 259, 122],
  [1, 9, 123],
  [3, "meta", e[17], 124,
   [5, 362], 125,
   1, 366, 126,
   0, 126],
  [1, 9, 127],
  [2, 271, -1, {"name":"FunctionDef"}],
  [1, 9, 128],
  [2, 234, 129, {"name":"ArgList"},
   0, 129],
  [",", 130,
   ";", -1],
  [1, 9, 131],
  [1, 9, 132],
  [/^\;?/, -1],
  [1, 239, 133],
  [1, 9, 134],
  [1, 366, 135,
   0, 135],
  [1, 9, 128],
  [1, 9, 137],
  [";", -1],
  [0, 139,
   3, "type", e[20], -1,
   2, 369, 144, {"name":"unqualifiedVariableName","token":"variable"}],
  [1, 370, 140],
  [0, 139,
   3, "type qualified", e[20], 141,
   2, 375, 141, {"name":"qualifiedVariableName","token":"qualified"}],
  [2, 376, 142, {"name":"TemplateArgs"},
   0, -1],
  [/^(?=\:\:)/, 143,
   0, -1],
  [1, 138, -1],
  [2, 376, -1, {"name":"TemplateArgs"},
   0, -1],
  [/^R\"(?:(?!\().)*\(/, 146,
   /^(?:(?:L|u8?|U)(?=[\'\"]))?/, 147],
  [[0, [7, "rawStringContinues"], /^[^]/], 146,
   "\"", -1],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 148],
  ["\\", 149,
   [0, /^(?!\")/, /^[^]/], 148,
   "\"", -1],
  [/^[^]/, 148],
  [3, "keyword", e[21], -1,
   /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, -1],
  [/^\/\*\*(?!\/)/, 152,
   "/*", 156,
   /^\/\/.*/, -1],
  [0, 153,
   2, 381, 152, {"name":"doccomment.braced"},
   0, 154],
  [e[46], 155],
  [2, 389, 154, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 153,
   0, 152],
  [[0, /^(?!\*\/)/, /^[^]/], 156,
   "*/", -1],
  [3, "keyword", e[22], 159,
   [0, [5, 397], "["], 160],
  [0, 157,
   0, -1],
  [1, 9, 161],
  [1, 9, 162],
  ["(", 163],
  ["[", 164],
  [1, 9, 165],
  [1, 9, 166],
  [3, "number", e[23], 167],
  [1, 401, 168],
  [1, 9, 169],
  [1, 9, 170],
  [")", 171],
  ["]", 172],
  [1, 9, 158],
  [1, 9, 173],
  ["]", 171],
  [3, "keyword", e[24], 175,
   3, "keyword", e[14], 175],
  [1, 9, 176],
  [1, 157, 177,
   0, 177],
  [1, 9, 178],
  [3, "type def", e[19], 179],
  [1, 9, 180],
  [":", 181,
   0, 183],
  [1, 9, 182],
  [1, 423, 183],
  [1, 9, 184],
  [";", -1,
   2, 437, -1, {"name":"ClassBody"}],
  [3, "keyword", e[25], 186],
  [1, 9, 187],
  [3, "keyword", e[21], 188,
   3, "keyword", e[1], 189,
   0, 189],
  [1, 9, 190],
  [1, 9, 191],
  [1, 246, 192],
  [1, 138, 192],
  [1, 9, 193],
  [3, "operator", "=", 194,
   0, 196],
  [1, 9, 195],
  [1, 246, 196],
  [1, 9, 197],
  [";", -1],
  [3, "keyword", e[26], 199,
   0, 199],
  [1, 9, 200],
  [3, "keyword", e[27], 201],
  [1, 9, 202],
  [2, 441, 203, {"name":"TemplateParams"}],
  [1, 9, 204],
  [1, 9, 205],
  [1, 9, 206],
  [2, 12, -1, {"name":"Statement"}],
  ["{", 208],
  [1, 9, 209],
  [2, 12, 210, {"name":"Statement"},
   "}", -1],
  [1, 9, 209],
  [e[42], 211,
   /^\:(?!\:)/, -1],
  [0, 213,
   0, 214,
   3, "keyword", e[28], 225,
   [5, 446], 226],
  [3, "keyword", e[29], 215,
   3, "keyword", e[30], 215,
   3, "keyword", e[31], 215],
  [3, "type", e[32], 216],
  [1, 9, 217],
  [1, 9, 218],
  [0, 213,
   3, "keyword", e[28], 219,
   0, 220,
   1, 451, 219],
  [0, 214,
   3, "type", e[33], 219,
   0, 219],
  [1, 9, 221],
  [3, "type", e[32], 222],
  [1, 456, 223,
   0, -1],
  [0, 220,
   1, 9, 224,
   0, 219],
  [1, 9, 221],
  [3, "type", e[33], 219],
  [1, 9, 227],
  [1, 451, 225],
  [1, 456, 228,
   0, -1],
  [1, 9, 227],
  [1, 463, 230,
   1, 480, 231],
  [1, 9, 229],
  [1, 9, 232],
  [1, 341, 233,
   0, -1],
  [1, 9, 232],
  ["(", 235],
  [1, 9, 236],
  [1, 511, 237],
  [1, 9, 238],
  [")", -1],
  [0, 240,
   3, "def", e[34], -1],
  [1, 517, 241],
  [0, 240,
   3, "qualified def", e[34], -1],
  ["{", 243],
  [1, 9, 244],
  [2, 12, 245, {"name":"Statement"},
   "}", -1],
  [1, 9, 244],
  [3, "keyword", e[21], 247,
   0, 249],
  [1, 9, 248],
  [1, 246, -1],
  [3, "keyword", e[29], 250,
   3, "keyword", e[30], 250,
   3, "keyword", e[31], 250,
   3, "keyword", e[14], 251,
   0, 251],
  [1, 9, 249],
  [1, 9, 252],
  [3, "keyword", e[28], 253,
   0, 254,
   1, 451, 253],
  [1, 9, 255],
  [3, "type", e[32], 256],
  [1, 456, 257,
   0, -1],
  [0, 254,
   1, 9, 258,
   0, 253],
  [1, 9, 255],
  [3, "type", e[33], 253],
  [0, 260,
   "(", 267],
  [e[59], 261,
   1, 239, 262],
  [1, 9, 260],
  [1, 9, 263],
  ["[", 264,
   0, -1],
  [1, 9, 265],
  ["]", 266],
  [1, 9, 263],
  [1, 9, 268],
  [1, 259, 269],
  [1, 9, 270],
  [")", -1],
  [2, 522, 272, {"name":"ParamList"}],
  [1, 9, 273],
  [3, "keyword", e[31], 274,
   /^(?:\&|\&\&)?/, 275],
  [1, 9, 273],
  [1, 9, 276],
  [3, "keyword", e[35], 277,
   3, "keyword", e[2], 278,
   0, 289],
  [1, 9, 279],
  [1, 9, 280],
  ["(", 281,
   0, 289],
  ["(", 282],
  [1, 9, 283],
  [1, 9, 284],
  [1, 229, 285],
  [1, 527, 286],
  [1, 9, 287],
  [1, 9, 288],
  [")", 289],
  [")", 289],
  [1, 9, 290],
  [1, 157, 291,
   0, 291],
  [1, 9, 292],
  ["->", 293,
   0, 295],
  [1, 9, 294],
  [1, 246, 295],
  [1, 9, 296],
  [3, "keyword", e[36], 297,
   2, 533, 298, {"name":"InitializerList"},
   0, 298],
  [1, 9, 296],
  [1, 9, 299],
  [";", -1,
   2, 207, -1, {"name":"Block"},
   3, "operator", "=", 300],
  [1, 9, 301],
  [3, "keyword", e[15], 302,
   3, "keyword", e[37], 302],
  [1, 9, 303],
  [";", -1],
  ["{", 305],
  [1, 9, 306],
  [1, 536, 307,
   0, 320],
  [1, 9, 308],
  [3, "operator", "=", 309,
   0, 310],
  [1, 9, 311],
  [1, 9, 312],
  [1, 229, 310],
  [",", 313,
   0, 320],
  [1, 9, 314],
  [1, 536, 315,
   0, 316],
  [1, 9, 317],
  [1, 9, 312],
  [3, "operator", "=", 318,
   0, 316],
  [1, 9, 319],
  [1, 229, 316],
  [1, 9, 321],
  ["}", -1],
  ["(", 323],
  [1, 9, 324],
  [1, 229, 325,
   0, 325],
  [1, 9, 326],
  [")", -1],
  [1, 9, 328],
  [3, "keyword", e[38], 329,
   0, -1],
  [1, 9, 330],
  [2, 12, -1, {"name":"Statement"}],
  ["{", 332],
  [1, 9, 333],
  [1, 539, 334,
   0, 339],
  [1, 9, 335],
  [";", 336,
   0, 339],
  [1, 9, 337],
  [1, 539, 338,
   0, 338],
  [1, 9, 335],
  [1, 9, 340],
  ["}", -1],
  [2, 550, -1, {"name":"BlockOf"},
   2, 234, 342, {"name":"ArgList"},
   e[40], 344,
   2, 234, -1, {"name":"ArgList"},
   "[", 348,
   3, "operator", e[39], -1,
   e[40], 352,
   3, "operator", e[41], 354,
   "?", 356],
  [1, 9, 343],
  [2, 207, -1, {"name":"Block"},
   0, -1],
  [1, 9, 345],
  [2, 560, 346, {"name":"fieldName","token":"property"}],
  [1, 9, 347],
  [2, 376, -1, {"name":"TemplateArgs"},
   0, -1],
  [1, 9, 349],
  [1, 229, 350],
  [1, 9, 351],
  ["]", -1],
  [1, 9, 353],
  [2, 560, -1, {"name":"fieldName","token":"property"}],
  [1, 9, 355],
  [1, 229, -1],
  [1, 9, 357],
  [1, 229, 358],
  [1, 9, 359],
  [":", 360],
  [1, 9, 361],
  [1, 229, -1],
  ["(", 363],
  [1, 9, 364],
  [")", -1,
   3, "keyword", e[29], -1,
   3, "keyword", e[30], -1,
   3, "keyword", e[31], -1,
   3, "type", e[32], -1,
   3, "keyword", e[28], -1,
   [5, 446], 365],
  [1, 451, -1],
  [3, "operator", "=", 367,
   2, 550, -1, {"name":"BlockOf"},
   2, 234, -1, {"name":"ArgList"}],
  [1, 9, 368],
  [1, 229, -1],
  [3, "callee", e[56], -1,
   e[19], -1],
  ["::", -1,
   [5, 561], 371],
  [3, "variable qualifier", e[19], 372],
  [2, 376, 373, {"name":"TemplateArgs"},
   0, 373],
  [1, 9, 374],
  ["::", -1],
  [2, 369, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  ["<", 377],
  [1, 9, 378],
  [1, 565, 379],
  [1, 9, 380],
  [">", -1],
  ["{", 382],
  [3, "tag", e[43], 383,
   3, "tag", e[44], 384,
   2, 597, 388, {"name":"doccomment.type","token":"type"}],
  [e[42], 383,
   "{", 385,
   0, 384],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 384,
   0, 388],
  [2, 597, 386, {"name":"doccomment.type","token":"type"}],
  ["}", 387],
  [e[42], 387,
   3, "def", e[45], 384,
   0, 384],
  ["}", -1],
  [3, "tag", e[43], 390,
   3, "tag", e[44], 394],
  [e[42], 390,
   "{", 391,
   0, 394],
  [2, 597, 392, {"name":"doccomment.type","token":"type"}],
  ["}", 393],
  [e[42], 393,
   3, "def", e[45], 394,
   0, 394],
  [0, 395,
   2, 381, 394, {"name":"doccomment.braced"},
   0, -1],
  [e[46], 396],
  [0, 395,
   0, 394],
  ["[", 398],
  [1, 9, 399],
  [" ", 400,
   "[", -1],
  [1, 9, 399],
  [1, 598, 402,
   3, "meta", e[19], 403,
   0, -1],
  [1, 9, 401],
  [1, 9, 404],
  ["(", 405,
   0, 406],
  [1, 9, 407],
  [1, 9, 408],
  [1, 603, 409,
   ")", 406],
  [e[47], 410],
  [1, 9, 407],
  [1, 9, 411],
  [",", 412,
   0, -1],
  [1, 9, 413],
  [1, 598, 414,
   3, "meta", e[19], 415],
  [1, 9, 413],
  [1, 9, 416],
  ["(", 417,
   0, 418],
  [1, 9, 419],
  [1, 9, 420],
  [1, 603, 421,
   ")", 418],
  [e[47], 422],
  [1, 9, 419],
  [1, 9, 411],
  [3, "keyword", e[48], 424,
   0, 424,
   0, -1],
  [1, 9, 425],
  [3, "keyword", e[49], 426,
   0, 426],
  [1, 9, 427],
  [1, 246, 428],
  [1, 9, 429],
  [",", 430,
   0, -1],
  [1, 9, 431],
  [3, "keyword", e[48], 432,
   0, 432],
  [1, 9, 433],
  [3, "keyword", e[49], 434,
   0, 434],
  [1, 9, 435],
  [1, 246, 436],
  [1, 9, 429],
  ["{", 438],
  [1, 9, 439],
  [2, 613, 440, {"name":"ClassItem"},
   "}", -1],
  [1, 9, 439],
  ["<", 442],
  [1, 9, 443],
  [1, 624, 444],
  [1, 9, 445],
  [">", -1],
  [/^(?!(?:new|delete)(?![a-zA-Z¡-￿_0-9]))/, 447],
  [1, 451, 448],
  [1, 9, 449],
  [1, 456, 450,
   /^[a-zA-Z¡-￿_]/, -1],
  [1, 9, 449],
  [3, "keyword", e[21], 452,
   0, 453],
  [1, 9, 453],
  [0, 454,
   3, "type", e[19], -1],
  [1, 650, 455],
  [0, 454,
   3, "type qualified", e[19], -1],
  [2, 376, -1, {"name":"TemplateArgs"},
   "::", 457,
   1, 157, -1,
   "[", 459,
   /^[\*\&]/, -1,
   3, "keyword", e[31], -1],
  [1, 9, 458],
  [3, "type qualified", e[19], -1],
  [1, 9, 460],
  [3, "number", e[23], 461,
   0, 461],
  [1, 9, 462],
  ["]", -1],
  [3, "keyword", e[37], 464,
   3, "keyword", e[50], 468,
   2, 150, -1, {"name":"prefixOp","token":"operator"}],
  [1, 9, 465],
  ["[", 466,
   0, -1],
  [1, 9, 467],
  ["]", -1],
  [1, 9, 469],
  ["[", 470,
   0, 471],
  [1, 9, 472],
  [1, 9, 473],
  ["]", 471],
  ["(", 474,
   0, 475],
  [1, 9, 476],
  [1, 9, 477],
  [1, 229, 478],
  [1, 157, -1,
   0, -1],
  [1, 9, 479],
  [")", 475],
  [3, "keyword", e[51], -1,
   [0, [5, 655], "["], 481,
   3, "keyword", e[52], 487,
   2, 659, 499, {"name":"ParenExpr"},
   3, "atom", e[53], -1,
   3, "number", e[23], -1,
   2, 145, -1, {"name":"string","token":"string"},
   2, 550, -1, {"name":"BlockOf"},
   3, "keyword", e[54], 501,
   1, 138, -1],
  [1, 9, 482],
  [1, 664, 483],
  [1, 9, 484],
  ["]", 485],
  [1, 9, 486],
  [2, 271, -1, {"name":"FunctionDef"},
   2, 207, -1, {"name":"Block"}],
  [1, 9, 488],
  ["<", 489],
  [1, 9, 490],
  [1, 246, 491],
  [1, 9, 492],
  [">", 493],
  [1, 9, 494],
  ["(", 495],
  [1, 9, 496],
  [1, 229, 497],
  [1, 9, 498],
  [")", -1],
  [1, 9, 500],
  [1, 229, -1,
   0, -1],
  [1, 9, 502],
  ["(", 503,
   e[47], 504],
  [1, 9, 505],
  [1, 9, 506],
  [1, 246, 507],
  [1, 229, 508],
  [1, 9, 509],
  [1, 9, 510],
  [")", 508],
  [3, "meta", e[17], -1],
  [1, 229, 512,
   0, -1],
  [1, 9, 513],
  [",", 514,
   0, -1],
  [1, 9, 515],
  [1, 229, 516],
  [1, 9, 513],
  ["::", -1,
   [5, 674], 518],
  [3, "qualifier def", e[19], 519],
  [2, 376, 520, {"name":"TemplateArgs"},
   0, 520],
  [1, 9, 521],
  ["::", -1],
  ["(", 523],
  [1, 9, 524],
  [1, 678, 525],
  [1, 9, 526],
  [")", -1],
  [1, 246, 528,
   0, -1],
  [1, 9, 529],
  [",", 530,
   0, -1],
  [1, 9, 531],
  [1, 246, 532],
  [1, 9, 529],
  [":", 534],
  [1, 9, 535],
  [1, 692, -1],
  [3, "keyword", e[55], 537,
   3, "def property", e[19], -1],
  [3, "operator", "->*", -1,
   ",", -1,
   3, "operator", e[41], -1,
   2, 150, -1, {"name":"prefixOp","token":"operator"},
   /^(?:\(\)|\[\])/, -1,
   3, "keyword", e[50], 538,
   3, "keyword", e[37], 538],
  [/^(?:\[\])?/, -1],
  [1, 246, 540],
  [1, 9, 541],
  [2, 560, 542, {"name":"fieldName","token":"property"},
   0, 542],
  [1, 9, 543],
  [":", 544,
   "[", 545,
   0, -1],
  [1, 9, 546],
  [1, 9, 547],
  [3, "number", e[23], -1],
  [3, "number", e[23], 548,
   0, 548],
  [1, 9, 549],
  ["]", -1],
  ["{", 551],
  [1, 9, 552],
  [1, 229, 553,
   0, 558],
  [1, 9, 554],
  [",", 555,
   0, 558],
  [1, 9, 556],
  [1, 229, 557,
   0, 557],
  [1, 9, 554],
  [1, 9, 559],
  ["}", -1],
  [3, "callee", e[56], -1,
   e[19], -1],
  [3, "variable qualifier", e[19], 562],
  [1, 698, 563,
   0, 563],
  [1, 9, 564],
  ["::", -1],
  [3, "keyword", e[27], 566,
   0, 567,
   0, 568,
   0, -1],
  [1, 9, 569],
  [1, 9, 570],
  [3, "keyword", e[29], 571,
   3, "keyword", e[30], 571,
   [5, 703], 572,
   1, 706, 573],
  [2, 376, 567, {"name":"TemplateArgs"}],
  [3, "keyword", e[24], 574,
   3, "keyword", e[21], 574],
  [1, 9, 568],
  [1, 246, 575],
  [1, 9, 576],
  [1, 9, 577],
  [1, 9, 578],
  [e[47], 579],
  [1, 246, 579],
  [2, 522, 573, {"name":"ParamList"},
   1, 366, 573,
   0, 573],
  [1, 9, 580],
  [",", 581,
   0, -1],
  [1, 9, 582],
  [3, "keyword", e[27], 583,
   0, 584,
   0, 585],
  [1, 9, 586],
  [1, 9, 587],
  [3, "keyword", e[29], 588,
   3, "keyword", e[30], 588,
   [5, 712], 589,
   1, 706, 590],
  [2, 376, 584, {"name":"TemplateArgs"}],
  [3, "keyword", e[24], 591,
   3, "keyword", e[21], 591],
  [1, 9, 585],
  [1, 246, 592],
  [1, 9, 593],
  [1, 9, 594],
  [1, 9, 595],
  [e[47], 596],
  [1, 246, 596],
  [2, 522, 590, {"name":"ParamList"},
   1, 366, 590,
   0, 590],
  [1, 9, 580],
  [1, 715, -1],
  ["::", -1,
   [5, 719], 599],
  [3, "meta", e[19], 600],
  [2, 376, 601, {"name":"TemplateArgs"},
   0, 601],
  [1, 9, 602],
  ["::", -1],
  [3, "number", e[23], -1,
   2, 145, -1, {"name":"string","token":"string"},
   e[19], -1,
   3, "operator", e[41], -1,
   ",", -1,
   "(", 604,
   "[", 607,
   "{", 610],
  [1, 9, 605],
  [1, 603, 606,
   ")", -1],
  [1, 9, 605],
  [1, 9, 608],
  [1, 603, 609,
   "]", -1],
  [1, 9, 608],
  [1, 9, 611],
  [1, 603, 612,
   "}", -1],
  [1, 9, 611],
  [3, "keyword", e[49], 614,
   2, 198, -1, {"name":"Template"},
   1, 185, -1,
   3, "keyword", e[0], 616,
   3, "meta", e[17], 620,
   1, 174, -1,
   2, 723, -1, {"name":"ObjectMember"}],
  [1, 9, 615],
  [":", -1],
  [1, 9, 617],
  [2, 234, 618, {"name":"ArgList"}],
  [1, 9, 619],
  [";", -1],
  [1, 9, 621],
  [2, 234, 622, {"name":"ArgList"},
   0, 622],
  [1, 9, 623],
  [/^\;?/, -1],
  [1, 741, 625,
   0, 626,
   0, -1],
  [1, 9, 627],
  [3, "keyword", e[29], 628,
   3, "keyword", e[30], 628,
   1, 246, 629],
  [",", 630,
   0, -1],
  [1, 9, 626],
  [1, 9, 631],
  [1, 9, 632],
  [e[47], 633],
  [1, 741, 634,
   0, 635],
  [1, 9, 636],
  [1, 9, 627],
  [3, "keyword", e[29], 637,
   3, "keyword", e[30], 637,
   1, 246, 638],
  [1, 239, 639],
  [1, 9, 635],
  [1, 9, 640],
  [1, 9, 641],
  [e[47], 642],
  [3, "operator", "=", 643,
   0, 625],
  [1, 9, 644],
  [1, 9, 645],
  [1, 239, 646],
  [1, 706, 625],
  [1, 9, 647],
  [3, "operator", "=", 648,
   0, 634],
  [1, 9, 649],
  [1, 706, 634],
  ["::", -1,
   [5, 752], 651],
  [3, "type qualifier", e[19], 652],
  [2, 376, 653, {"name":"TemplateArgs"},
   0, 653],
  [1, 9, 654],
  ["::", -1],
  ["[", 656],
  [1, 9, 657],
  [e[42], 658,
   /^[\&\=]/, -1,
   3, "keyword", e[51], -1,
   "]", -1],
  [1, 9, 657],
  ["(", 660],
  [1, 9, 661],
  [1, 229, 662,
   0, 662],
  [1, 9, 663],
  [")", -1],
  ["&", 665,
   "=", 666,
   3, "keyword", e[51], 666,
   0, -1],
  [1, 9, 667],
  [1, 9, 668],
  [1, 138, 666,
   0, 666],
  [",", 669,
   0, -1],
  [1, 9, 670],
  ["&", 671,
   "=", 672,
   3, "keyword", e[51], 672],
  [1, 9, 673],
  [1, 9, 668],
  [1, 138, 672,
   0, 672],
  [3, "qualifier def", e[19], 675],
  [1, 698, 676,
   0, 676],
  [1, 9, 677],
  ["::", -1],
  [1, 246, 679,
   0, -1],
  [1, 9, 680],
  [1, 259, 681,
   0, 682],
  [1, 9, 683],
  [1, 9, 684],
  [2, 522, 682, {"name":"ParamList"},
   0, 682],
  [",", 685,
   0, -1],
  [1, 9, 686],
  [1, 246, 687],
  [1, 9, 688],
  [1, 259, 689,
   0, 690],
  [1, 9, 691],
  [1, 9, 684],
  [2, 522, 690, {"name":"ParamList"},
   0, 690],
  [1, 756, 693,
   0, -1],
  [1, 9, 694],
  [",", 695,
   0, -1],
  [1, 9, 696],
  [1, 756, 697],
  [1, 9, 694],
  ["<", 699],
  [1, 9, 700],
  [e[57], 701,
   ">", -1],
  [1, 698, 702,
   2, 145, 702, {"name":"string","token":"string"},
   /^[^]/, 702],
  [1, 9, 700],
  [1, 246, 704],
  [1, 9, 705],
  [e[58], -1],
  [1, 463, 707,
   1, 480, 708],
  [1, 9, 706],
  [1, 9, 709],
  [e[57], 710,
   0, -1],
  [1, 341, 711],
  [1, 9, 709],
  [1, 246, 713],
  [1, 9, 714],
  [e[58], -1],
  [/^(?!\}|\*\/)/, 716,
   0, -1],
  ["{", 717,
   /^[^]/, 715],
  [1, 715, 718],
  [/^\}?/, 715],
  [3, "meta", e[19], 720],
  [1, 698, 721,
   0, 721],
  [1, 9, 722],
  ["::", -1],
  [3, "keyword", e[29], 724,
   3, "keyword", e[30], 724,
   3, "keyword", e[31], 724,
   3, "def", [0, [7, "localConstructorAhead"], /^\~?/, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], 727,
   1, 246, 725],
  [1, 9, 723],
  [1, 9, 726],
  [1, 767, 727],
  [1, 9, 728],
  [2, 271, -1, {"name":"FunctionDef"},
   1, 366, 729,
   ":", 730,
   "[", 731,
   0, 729,
   3, "meta", e[17], 732],
  [1, 9, 733],
  [1, 9, 734],
  [1, 9, 735],
  [1, 9, 736],
  [";", -1],
  [3, "number", e[23], 729],
  [3, "number", e[23], 737,
   0, 737],
  [2, 234, 738, {"name":"ArgList"},
   0, 738],
  [1, 9, 739],
  [1, 9, 740],
  ["]", 729],
  [/^\;?/, -1],
  [3, "keyword", e[27], 742,
   0, 744],
  [1, 9, 743],
  [2, 376, 744, {"name":"TemplateArgs"}],
  [1, 9, 745],
  [3, "keyword", e[24], 746,
   3, "keyword", e[21], 746],
  [1, 9, 747],
  [3, "type def", e[19], 748],
  [1, 9, 749],
  [3, "operator", "=", 750,
   0, -1],
  [1, 9, 751],
  [1, 138, -1,
   3, "number", e[23], -1],
  [3, "type qualifier", e[19], 753],
  [1, 698, 754,
   0, 754],
  [1, 9, 755],
  ["::", -1],
  [2, 560, 757, {"name":"fieldName","token":"property"}],
  [1, 9, 758],
  ["(", 759,
   "{", 760],
  [1, 9, 761],
  [1, 9, 762],
  [1, 511, 763],
  [1, 511, 764],
  [1, 9, 765],
  [1, 9, 766],
  [")", -1],
  ["}", -1],
  [0, 768,
   "(", 775],
  [e[59], 769,
   1, 536, 770],
  [1, 9, 768],
  [1, 9, 771],
  ["[", 772,
   0, -1],
  [1, 9, 773],
  ["]", 774],
  [1, 9, 771],
  [1, 9, 776],
  [1, 767, 777],
  [1, 9, 778],
  [")", -1]
];
var start = 0;
var token = 5;


var cpp = Object.freeze({
	nodes: nodes,
	start: start,
	token: token
});

function getScope(context, scopes) {
  for (var cx = context; cx; cx = cx.parent)
    { if (scopes.indexOf(cx.name) > -1) { return cx } }
}
function isLocal(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
  return false
}
function isLocalType(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.localTypes && cx.localTypes.indexOf(name) > -1) { return true } }
  return false
}

var varRE = /(^|\s)variable($|\s)/;

function markLocals(type, scopes, stream, state, once) {
  if (type == "def") {
    var scope = getScope(state.context, scopes), name = stream.current();
    if (scope) {
      if (!scope.locals) { scope.locals = []; }
      if (once && scope.locals.indexOf(name) > -1)
        { return "variable-2" }
      scope.locals.push(name);
      if (state.context.name != "funcName") { return "def local" }
    }
  } else if (varRE.test(type) && !/qualified/.test(type) &&
             isLocal(state.context, stream.current())) {
    type = type.replace(varRE, "$1variable-2$2");
  }
  return type
}

var typeRE = /(^|\s)type($|\s)/;

function markTypeLocals(type, scopes, stream, state) {
  if (type == "type def") {
    var scope = getScope(state.context, scopes);
    if (scope) {
      if (!scope.localTypes) { scope.localTypes = []; }
      scope.localTypes.push(stream.current());
    }
  } else if (typeRE.test(type) && !/qualifie[rd]/.test(type) &&
             isLocalType(state.context, stream.current())) {
    type += " local";
  }
  return type
}

function hasSubStatement(context) {
  var m = /^(if|for|do|while)\b/.exec(context.startLine.slice(context.startPos));
  return m && m[1]
}

function isSwitch(context) {
  return context && context.name == "Statement" &&
    /^switch\b/.test(context.startLine.slice(context.startPos))
}

function isLabel(text) {
  return text && /^\s*(case|default)\b/.test(text)
}

function aligned(cx) {
  return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
}

var bracketed = {
  Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", EnumBody: "}",
  ArrayInitializer: "}", NamespaceBlock: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
};

function baseIndent(cx, config) {
  for (var startLine = cx.startLine;; cx = cx.parent) {
    if (cx.name == "CondExpr")
      { return CodeMirror.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
    if (!cx.parent || cx.parent.startLine != startLine)
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function findIndent(cx, textAfter, config) {
  if (!cx) { return 0 }
  if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

  var brack = bracketed[cx.name];
  var closed = textAfter && textAfter.charAt(0) == brack;
  if (brack && config.align !== false && aligned(cx))
    { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

  if (brack && (cx.name == "Block" || cx.name == "NamespaceBlock" || cx.name == "ClassBody" ||
                cx.name == "AnnotationTypeBody" || cx.name == "BlockOf" || cx.name == "EnumBody")) {
    var parent = cx.parent;
    if (parent && parent.name == "Statement" && parent.parent &&
        parent.parent.name == "Statement" && hasSubStatement(parent.parent))
      { parent = parent.parent; }
    var base$1 = statementIndent(parent, config);

    if (closed || cx.name == "NamespaceBlock") { return base$1 }
    if (/^(public|private|protected)\s*:/.test(textAfter)) { return base$1 + 1 }
    if (isSwitch(cx.parent) && !isLabel(textAfter)) { return base$1 + 2 * config.indentUnit }
    return base$1 + config.indentUnit
  }

  var base = baseIndent(cx, config.tabSize);
  if (brack) {
    if (closed && brack != ")") { return base }
    return base + config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1)
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "EnumConstant" ||
             cx.name == "AnnotationTypeItem") {
    if (hasSubStatement(cx)) { return base + config.indentUnit; }
    return base + 2 * config.indentUnit
  } else if (cx.name == "Alternative") {
    base = baseIndent(cx.parent, config.tabSize);
    if (!textAfter || /^else\b/.test(textAfter)) { return base }
    return base + config.indentUnit
  } else if (cx.name == "ArrowRest") {
    return base + config.indentUnit
  } else if (cx.name == "InitializerList") {
    return base + 2
  } else if (cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos))) {
    return base + 2 * config.indentUnit
  } else {
    return findIndent(cx.parent, textAfter, config)
  }
}

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) { return 0 }
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr" ||
        cx.name == "EnumConstant" || cx.name == "Template" || cx.name == "AnnotationTypeItem" ||
        cx.parent && bracketed[cx.parent.name])
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") { return 0 }
  var top = state.context && state.context.name;
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
    { return statementIndent(state.context, config) }
  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
    { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, config)
}

function constructorAhead(line, pos) {
  var match = /^(\w+)::~?(\w+)/.exec(line.slice(pos));
  return match && match[1] == match[2]
}

function localConstructorAhead(line, pos, cx) {
  var ahead = /^~?(\w+)\s*\(/.exec(line.slice(pos));
  if (!ahead) { return false }
  while (cx.name != "Statement") { cx = cx.parent; }
  var className = /\bclass\s+(\w+)/.exec(cx.startLine.slice(cx.startPos));
  return className ? className[1] == ahead[1] : false
}

var rawStringOpen = /R"(.*?)\(/g;

function rawStringContinues(line, pos, cx) {
  rawStringOpen.lastIndex = cx.startPos;
  var closing = ")" + rawStringOpen.exec(cx.startLine)[1] + '"';
  return pos < closing.length - 1 || line.slice(pos - closing.length + 1, pos + 1) != closing
}

var scopes = ["Block", "FunctionDef"];
var typeScopes = ["Template"];

var CppMode = (function (superclass) {
  function CppMode(conf) {
    superclass.call(this, cpp, {
      predicates: {constructorAhead: constructorAhead, localConstructorAhead: localConstructorAhead, rawStringContinues: rawStringContinues}
    });
    this.conf = conf;
  }

  if ( superclass ) CppMode.__proto__ = superclass;
  CppMode.prototype = Object.create( superclass && superclass.prototype );
  CppMode.prototype.constructor = CppMode;

  CppMode.prototype.token = function token$$1 (stream, state) {
    return markTypeLocals(markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state), typeScopes, stream, state)
  };

  CppMode.prototype.indent = function indent$1 (state, textAfter, line) {
    return indent(state, textAfter, line, this.conf)
  };

  return CppMode;
}(CodeMirror.GrammarMode));

CppMode.prototype.electricInput = /^\s*(?:case .*?:|(?:public|private|protected|default):|\{\}?|\})$/;
CppMode.prototype.blockCommentStart = "/*";
CppMode.prototype.blockCommentEnd = "*/";
CppMode.prototype.blockCommentContinue = " * ";
CppMode.prototype.lineComment = "//";
CppMode.prototype.fold = "brace";

CodeMirror.defineMode("google-cpp", function (conf) { return new CppMode(conf); });

})));
