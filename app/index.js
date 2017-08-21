const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  setup () {
    return this.prompt([{
      name: 'name',
      message: 'What is the module name?',
      default: this.appname.replace(/ /g, '-')
    }, {
      name: 'description',
      message: 'What is the module description?'
    }, {
      name: 'author',
      message: 'What is the name of the author?',
      store: true
    }, {
      name: 'email',
      message: 'What is the email of the author?',
      store: true
    }, {
      name: 'url',
      message: 'What is the authors website?',
      store: true
    }, {
      name: 'repo',
      message: 'What is the module repo?'
    }]).then(props => {
      this.fs.copyTpl(
        [
          `${this.templatePath()}/**`,
          `${this.templatePath()}/.**`
        ],
        this.destinationPath(),
        props
      )

      const move = (from, to) => {
        this.fs.move(this.destinationPath(from), this.destinationPath(to))
      }

      move('_package.json', 'package.json')
      move('babelrc', '.babelrc')
      move('editorconfig', '.editorconfig')
      move('gitignore', '.gitignore')
      move('travis.yml', '.travis.yml')

      this.npmInstall()
    })
  }
}
