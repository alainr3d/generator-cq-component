'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the CQ ' + chalk.red('Component') + ' generator!'
    ));

    var prompts = [
    {
      type: 'input',
      name: 'componentName',
      message: 'what is the name of your component?',
      default: 'myComponent'
    }
    ];

    this.prompt(prompts, function (props) {
      this.componentName = props.componentName;

      //from answer

      console.log('component name', this.componentName);

      done();

    }.bind(this));
  },

  writing: {
    app: function () {

      /*this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );*/
      this.fs.copy(
        this.templatePath('component.jsp'),
        this.destinationPath(this.componentName+'.jsp')
      );

      this.fs.copy(
        this.templatePath('css/component.less'),
        this.destinationPath('css/'+this.componentName+'.less')
      );
      this.fs.copy(
        this.templatePath('css/.content.xml'),
        this.destinationPath('css/.content.xml')
      );

      this.fs.copy(
        this.templatePath('js/component.js'),
        this.destinationPath('js/'+this.componentName+'.js')
      );
      this.fs.copy(
        this.templatePath('js/.content.xml'),
        this.destinationPath('js/.content.xml')
      );
    },

    projectfiles: function () {
      /*this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );*/
    }
  },

  install: function () {

    /*this.installDependencies({
      skipInstall: this.options['skip-install']
    });*/

  }
});
