// Karma configuration
// Generated on Wed Oct 09 2013 19:20:49 GMT+0800 (中国标准时间)
//karma-coverage@0.1.4
module.exports = function(config) {
    var base_path = '../';
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        base_path+'spec/tools/js/UserAction.js'
        ,base_path+'spec/SpecHelper.js'
        ,base_path+'kity/dist/kitygraph.all.js'
        ,base_path+'lib/jquery-2.1.0.min.js'
        ,base_path+'lib/jquery.xml2json.js'

        ,base_path+'src/core/kityminder.js'
        ,base_path+'src/core/utils.js'
        ,base_path+'src/core/command.js'
        ,base_path+'src/core/node.js'
        ,base_path+'src/core/module.js'
        ,base_path+'src/core/event.js'
        ,base_path+'src/core/minder.js'
        ,base_path+'src/core/minder.data.js'
        ,base_path+'src/core/minder.event.js'
        ,base_path+'src/core/minder.module.js'
        ,base_path+'src/core/minder.command.js'
        ,base_path+'src/core/minder.node.js'
        ,base_path+'src/core/keymap.js'
        ,base_path+'src/core/minder.lang.js'
        ,base_path+'src/core/minder.defaultoptions.js'
        ,base_path+'src/module/geometry.js'
        ,base_path+'src/module/history.js'
        ,base_path+'src/module/icon.js'
        ,base_path+'src/module/layout.js'
        ,base_path+'src/module/layout.default.js'
        ,base_path+'src/module/layout.bottom.js'
        ,base_path+'src/core/minder.select.js'
        ,base_path+'src/module/view.js'
        ,base_path+'src/module/dragtree.js'
        ,base_path+'src/module/dropfile.js'
        ,base_path+'src/module/keyboard.js'
        ,base_path+'src/module/select.js'
        ,base_path+'src/module/history.js'
        ,base_path+'src/module/editor.js'
        ,base_path+'src/module/editor.range.js'
        ,base_path+'src/module/editor.receiver.js'
        ,base_path+'src/module/editor.selection.js'
        ,base_path+'src/module/basestyle.js'
        ,base_path+'src/module/font.js'
        ,base_path+'src/module/zoom.js'
        ,base_path+'src/ui/jquery-ui-1.10.4.custom.min.js'
        ,base_path+'src/ui/widget.js'
        ,base_path+'src/ui/button.js'
        ,base_path+'src/ui/toolbar.js'
        ,base_path+'src/ui/menu.js'
        ,base_path+'src/ui/dropmenu.js'
        ,base_path+'src/ui/splitbutton.js'
        ,base_path+'src/ui/colorsplitbutton.js'
        ,base_path+'src/ui/popup.js'
        ,base_path+'src/ui/scale.js'
        ,base_path+'src/ui/colorpicker.js'
        ,base_path+'src/ui/combobox.js'
        ,base_path+'src/ui/buttoncombobox.js'
        ,base_path+'src/ui/modal.js'
        ,base_path+'src/ui/tooltip.js'
        ,base_path+'src/ui/tab.js'
        ,base_path+'src/ui/separator.js'
        ,base_path+'src/ui/scale.js'
        ,base_path+'src/adapter/utils.js'
        ,base_path+'src/adapter/adapter.js'
        ,base_path+'src/adapter/button.js'
        ,base_path+'src/adapter/combobox.js'
        ,base_path+'src/adapter/saveto.js'
        ,base_path+'src/adapter/view.js'
        ,base_path+'src/adapter/tooltips.js'
        ,base_path+'src/adapter/layout.js'
        ,base_path+'src/adapter/node.js'
        ,base_path+'src/adapter/contextmenu.js'
        ,base_path+'src/adapter/dialog.js'
        ,base_path+'src/protocal/xmind.js'
        ,base_path+'src/protocal/freemind.js'
        ,base_path+'src/protocal/mindmanager.js'
        ,base_path+'src/protocal/plain.js'
        ,base_path+'src/protocal/json.js'
        ,base_path+'src/protocal/png.js'
        ,base_path+'src/protocal/svg.js'
        ,base_path+'spec/core/*.js'
        ,base_path+'spec/module/*.js'
        ,base_path+'spec/protocal/*.js'

    ],


    // list of files to exclude
    exclude: [
        'karma.conf.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
//    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Firefox','Chrome'],//,'Chrome'


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,
    //coverage
      reporters: ['progress', 'coverage','junit'],
          preprocessors: {
              '../src/core/*.js': ['coverage'],
              '../src/adapter/*.js': ['coverage'],
              '../src/module/*.js': ['coverage'],
              '../src/protocal/*.js': ['coverage'],
              '../src/ui/*.js': ['coverage']
          }
      ,
    coverageReporter: {
          type: 'text',
          dir: './coverage/json_files/'
    }
      ,
      junitReporter: {
          outputFile: './test-results.xml'
      }
  });
};
