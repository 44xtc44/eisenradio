// constants.js
"use strict";
const svgList = [  // svg available inline
  "theBigFloe",  // theme bg
  "theSunset",  // theme bg
  "theSunsetBackground",
  "aCircle",
  "theTux",
  "theCat",
  "thePolarBear",
  "theBuoy",
  "theOcean",
  "theBgWaves",
  "recorderOn",
  "theTeslaCoils",
  "eisenradioSVG",
]
// all groups of all registered inline svg; better register path names with image name and num to avoid doubles
// regex; all path must have "fill" and "fill-opacity" explicitly set , remove "style" from path; We do NOT use the DOM, we are fast.
// style is CSS and takes precedence over normal fill attributes, not supported in Android yet
// use "plain" SVG, never optimized; they kill the id, attributes are group attributes now and "optimize" path stuff ... :(
// Stacked SVG groups fail if one member group fails to load. There is no error thrown.
// WILL FAIL. SVG to canvas with blur and gradient. SVG to PNG.
const spriteList = [
  // instance;       SVG group; canvas;  image dimensions |-> needs fun to reload if one img is missing; Our camp is clean!

  // todo needs theme grouping
  { "foo1": { "grp": "testCircle", "cvs": "cSky", "w": "720", "h": "576" } },
  { "foo2": { "grp": "testCircle", "cvs": "cAnalyzer", "w": "100", "h": "100" } },  // bg analyzer
  { "TestCircle": { "grp": "testCircle", "cvs": "cSkyDecor", "w": "100", "h": "100" } },  // test write: svgTC.svgToCanvas({ dict: svgTC.imgDict["TestCircle"] });
  { "Sat1": { "grp": "gSat1", "cvs": "cSkyDecorTwo", "w": "100", "h": "100" } },
  { "Sat2": { "grp": "gSat2", "cvs": "cSkyDecorThree", "w": "100", "h": "100" } },
  { "SeaNight": { "grp": "gSeaNight", "cvs": "cSea", "w": "720", "h": "576" } },
  { "SeaDay": { "grp": "gSeaDay", "cvs": "cSea", "w": "720", "h": "576" } },
  { "landScape": { "grp": "gBigFloe", "cvs": "cSeaDecor", "w": "720", "h": "576" } },
  { "teslaCoils": { "grp": "gTCoils", "cvs": "c_00", "w": "720", "h": "576" } },  //
  { "sunsetWaterReflect": { "grp": "gSunsetWaterReflect", "cvs": "c_01", "w": "720", "h": "576" } }, // bg image gSunsetWaterReflect gSunsetBackGround
  { "WaveRowOne": { "grp": "gWaveRowOne", "cvs": "c_01", "w": "100", "h": "50" } },  // for left AND right create group for w720,h576
  { "WaveRowTwo": { "grp": "gWaveRowTwo", "cvs": "c_02", "w": "100", "h": "50" } },
  { "WaveRowThree": { "grp": "gWaveRowThree", "cvs": "c_03", "w": "100", "h": "50" } },
  { "Stage": { "grp": "gTuxStage", "cvs": "c_03", "w": "100", "h": "100" } },
  { "p2": { "grp": "gPortableHole", "cvs": "c_03", "w": "100", "h": "100" } },  // swap hide SVG
  { "Ufo": { "grp": "gUfo", "cvs": "c_06", "w": "100", "h": "100" } },
  { "Tweety": { "grp": "gBlackBird", "cvs": "c_06", "w": "100", "h": "100" } },
  { "fluffyOne": { "grp": "gTuxClOne", "cvs": "c_07", "w": "100", "h": "100" } },
  { "fluffyTwo": { "grp": "gTuxClTwo", "cvs": "c_08", "w": "100", "h": "100" } },
  { "checkered": { "grp": "gB1", "cvs": "c_balloon", "w": "100", "h": "100" } },
  { "lollipop": { "grp": "gLollipop", "cvs": "c_balloon", "w": "100", "h": "100" } },
  { "zeppelin": { "grp": "gCigarOne", "cvs": "c_balloon", "w": "100", "h": "100" } },
  { "fluffyThree": { "grp": "gTuxClThree", "cvs": "c_09", "w": "100", "h": "100" } },
  { "fluffyFour": { "grp": "gTuxClFour", "cvs": "c_10", "w": "100", "h": "100" } },
  { "fluffyFive": { "grp": "gTuxClFive", "cvs": "c_11", "w": "100", "h": "100" } },
  { "iceBerg": { "grp": "tuxStageIceBerg", "cvs": "c_12", "w": "100", "h": "100" } },
  { "doppelDecker": { "grp": "gAirOne", "cvs": "c_13", "w": "100", "h": "100" } },
  { "ultraLight": { "grp": "gUltraLight", "cvs": "c_13", "w": "100", "h": "100" } },
  { "iceFloe": { "grp": "gTuxIceFloeSTC", "cvs": "c_15", "w": "100", "h": "100" } },
  { "lifebuoy": { "grp": "gLifebuoy", "cvs": "c_15", "w": "100", "h": "100" } },
  { "xtraAnalyzer": { "grp": "gSceneTransCake", "cvs": "cTV", "w": "100", "h": "100" } }, // choose analyzer
  { "portableHole": { "grp": "gPortableHole", "cvs": "c_16", "w": "100", "h": "120" } },  // swap hide SVG
  { "Tux": { "grp": "gTux", "cvs": "c_16", "w": "100", "h": "120" } },  // h120 gTux
  { "Bear": { "grp": "gBear", "cvs": "c_16", "w": "100", "h": "120" } },  // h120 gBear
  { "Cat": { "grp": "gLaGataDelDiablo", "cvs": "c_16", "w": "100", "h": "120" } },  // h120 gLaGataDelDiablo
  { "p3": { "grp": "gPortableHole", "cvs": "c_17", "w": "100", "h": "100" } },
  { "speakerOne": { "grp": "gSpeakerOne", "cvs": "c_18", "w": "100", "h": "100" } },
  { "speakerTwo": { "grp": "gSpeakerOne", "cvs": "c_19", "w": "100", "h": "100" } },
  { "Buoy": { "grp": "gBuoy", "cvs": "c_20", "w": "100", "h": "100" } },
  { "degrade": { "grp": "gCPU", "cvs": "c_20", "w": "100", "h": "100" } },
  { "blackList": { "grp": "gBlackList", "cvs": "c_20", "w": "100", "h": "100" } },
  { "hamburgerImg": { "grp": "gHamburger", "cvs": "c_20", "w": "100", "h": "100" } },
  { "newRadio": { "grp": "gNewRadio", "cvs": "c_20", "w": "100", "h": "100" } },
  { "editRadio": { "grp": "gEditRadio", "cvs": "c_20", "w": "100", "h": "100" } },
  { "saveRadio": { "grp": "gSaveFolder", "cvs": "c_20", "w": "100", "h": "100" } },
  { "toolsRadio": { "grp": "gToolsConfig", "cvs": "c_20", "w": "100", "h": "100" } },
  { "aboutRadio": { "grp": "gAbout", "cvs": "c_20", "w": "100", "h": "100" } },
  { "playRadio": { "grp": "gPlayLocal", "cvs": "c_20", "w": "100", "h": "100" } },  // pure image src instances have no impact on canvas, just to declare somewhere todo fix on special canvas or create an extra option
  { "recordOn": { "grp": "gRecordOn", "cvs": "c_20", "w": "100", "h": "50" } },
  { "transition": { "grp": "gSceneTransCake", "cvs": "c_21", "w": "100", "h": "100" } }, // last canvas should be reserved for scene change animation
  { "SunsetForeGround": { "grp": "gSunsetFg", "cvs": "c_22", "w": "720", "h": "576" } },  // fg sunset gFoo! gNutsOne! gPalmTrees gSunsetSoil gPalmTreeRight gPalmTreeLeft
]

const paletteArray = [
  ['#dc8665', '#138086', '#534666', '#cd7672', '#eeb462'],
  ['#e8a49c', '#3c4cad', '#240e8b', '#f04393', '#f9c449'],
  ['#47cacc', '#63bcc9', '#cdb3d4', '#e7b7c8', '#ffbe88'],
  ['#ff7b89', '#8a5082', '#6f5f90', '#758eb7', '#a5cad2'],
  ['#df825f', '#f8956f', '#dfb15b', '#4d446f', '#706695'],
  ['#85cbcc', '#a8dee0', '#f9e2ae', '#fbc78d', '#a7d676'],
  ['#86e3ce', '#d0e6a5', '#ffdd94', '#fa897b', '#ccabd8'],
  ['#ff5c33', '#ff66b3', '#ccccff', '#b3ffff', '#ffff33'],
  ['#ed5875', '#da5290', '#f5be63', '#ff736a', '#75abc5'],
  ['#010006', '#c5bdca', '#ffdae7', '#fb92b3', '#d03d74'],
  ['#70cab0', '#f5917a', '#eddeb7', '#f7cc88', '#f38091'],
  ['#ebac9b', '#fccead', '#faf3e1', '#bd3329', '#f4ce69'],
  ['#27104e', '#64379f', '#9854cb', '#ddacf5', '#75e8e7'],

];

const htmlColNames = [
  "#CD5C5C",
  "#F08080",
  "#FFA07A",
  "#DC143C",
  "#FF0000",
  "#B22222",
  "#8B0000",
  "#FFC0CB",
  "#FF69B4",
  "#FF1493",
  "#C71585",
  "#DB7093",
  "#FFA07A",
  "#FF7F50",
  "#FF6347",
  "#FF4500",
  "#FF8C00",
  "#FFA500",
  "#FFD700",
  "#FFFF00",
  "#FFDAB9",
  "#EEE8AA",
  "#F0E68C",
  "#BDB76B",
  "#E6E6FA",
  "#D8BFD8",
  "#DDA0DD",
  "#EE82EE",
  "#DA70D6",
  "#FF00FF",
  "#FF00FF",
  "#BA55D3",
  "#9370DB",
  "#663399",
  "#8A2BE2",
  "#9400D3",
  "#9932CC",
  "#8B008B",
  "#800080",
  "#4B0082",
  "#6A5ACD",
  "#483D8B",
  "#7B68EE",
  "#ADFF2F",
  "#7FFF00",
  "#7CFC00",
  "#00FF00",
  "#32CD32",
  "#98FB98",
  "#90EE90",
  "#00FA9A",
  "#00FF7F",
  "#3CB371",
  "#2E8B57",
  "#228B22",
  "#008000",
  "#006400",
  "#9ACD32",
  "#6B8E23",
  "#808000",
  "#556B2F",
  "#66CDAA",
  "#8FBC8B",
  "#20B2AA",
  "#008B8B",
  "#008080",
  "#00FFFF",
  "#00FFFF",
  "#E0FFFF",
  "#AFEEEE",
  "#7FFFD4",
  "#40E0D0",
  "#48D1CC",
  "#00CED1",
  "#5F9EA0",
  "#4682B4",
  "#B0C4DE",
  "#B0E0E6",
  "#ADD8E6",
  "#87CEEB",
  "#87CEFA",
  "#00BFFF",
  "#1E90FF",
  "#6495ED",
  "#7B68EE",
  "#4169E1",
  "#0000FF",
  "#0000CD",
  "#00008B",
  "#000080",
  "#191970",
  "#FFF8DC",
  "#DEB887",
  "#D2B48C",
  "#BC8F8F",
  "#F4A460",
  "#DAA520",
  "#B8860B",
  "#CD853F",
  "#D2691E",
  "#8B4513",
  "#A0522D",
  "#A52A2A",
  "#800000",
];

const hintList = [
  "Closing the browser does not end the terminal app.",
  "Recorder is independent from browser.",
  "Playlist is a folder with files. \nUse multi-select button.",
  "CPU icon disables some of the animations.",
  "Timer ends recording graceful. \nSame as using Control-C.",
  "AAC files can be repaired in Tools menu.",
  "Visit the About page and see \nwhere to get internet radio addresses.",
  "Automatic browser start can \nbe disabled in the About menu.",
  "Database location can be seen in the About menu.",
  "Radio Web address on display is clickable.",
  "Blacklist prevents the recorder to \nwrite a file with known title again. \nEnable in Tools.",
  "Blacklist titles can be deleted \n from database to record again. Enable in Tools.",
  "Blacklist shows skipped files count during app session. \nEnable in Tools.",
  "Export/Import (backup, restore) blacklists \nand radio settings in the Tools menu.",
  "Delete the database the Tools menu. \nThe database will be rewritten on app start.",
  "Delete all radios from the database the Tools menu. \nRestore from exported radio settings file.",
  "Visit About menu to get the URLs for \nShoutCast and IceCast radio databases with URLs.",
  "Radio won't play. Use Edit to visit the \nShoutCast and IceCast addresses of your radio.",
  "Use Edit to see multiple radio stream URLs and qualities.",
  "Use Edit to see if the radio has user limits.",
  "Use Edit to add a nice picture or a comment.",
  "Extended error messages can be seen in the terminal window.",
  "The terminal app can be closed graceful \nby using Control-C, (us Ctrl+C), (ger Strg+C)",
  "Audio icon has a 'Gain' slider. \nWorks with bluetooth. May distort.",
]
