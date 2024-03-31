const storage = require ('Storage');
var settings = storage.readJSON ('bgwatch.json', 1);
const chimes = ["simple", "morse"];

function updateSettings() {
  storage.write ('bgwatch.json', settings);
}

function showMainMenu() {

  var mode_txt =  ['Off', '1 m', '5 m', '10 m', '15 m', '30 m', '1 h'];
  var mode_time = [-1,     60,    300,   600,    900,    1800,   3600];
  const main_menu = {'': { 'title': 'Hour Strike' }};

  main_menu ['Next strike ' + settings.next_hour + ':' + settings.next_minute] = function(){};

  main_menu ['Notify every'] = {

value: mode_interval.indexOf (settings.interval),
       min: 0, max: 6, format: v => mode_txt [v],

       onchange: v => {

         settings.interval = mode_time [v];

         if (v === 0) {

           settings.next_hour = -1;
           settings.next_minute = -1;
         }

         updateSettings();
       }
  };

  main_menu.Start = {

value: settings.start, min: 0, max: 23, format: v => v + ':00',
       onchange: v => {

         settings.start = v;
         updateSettings();
       }
  };

  main_menu.end = {

value: settings.end, min: 0, max: 23, format: v => v + ':59',
       onchange: v => {

         settings.end = v;
         updateSettings();
       }
  };

  main_menu.strength = {

value: settings.vlevel * 10, min: 1, max: 10, format: v => v / 10,
       onchange: v => {

         settings.motor_strength = v / 10;
         updateSettings();
       }
  };

  main_menu.strike_type = {

value: settings.simple_or_morse, min: 0, max: 1, format: v => chimes [v],
       onchange: v => {

         settings.simple_or_morse = v;
         updateSettings();
       }
  };

  main_menu ['< Back'] = () => load();

  return E.showMenu (main_menu);
}

showMainMenu();
