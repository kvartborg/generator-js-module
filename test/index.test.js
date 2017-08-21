/* eslint-env jest */
import path from 'path'
import helpers from 'yeoman-test'
import assert from 'yeoman-assert'

test('Generator should create expected files', async () => {
  await helpers.run(path.join(__dirname, '../app'))
    .withPrompts({
      name: 'test-module',
      description: 'test description',
      author: 'test author',
      email: 'test email',
      url: 'http://test.url',
      repo: 'https://github.com/test/repo'
    })

  assert.file([
    'src/index.js',
    'test/index.test.js',
    '.babelrc',
    '.editorconfig',
    '.gitignore',
    '.travis.yml',
    'LICENSE',
    'README.md',
    'package.json'
  ])

  assert.fileContent('package.json', /"test-module"/)
  assert.fileContent('package.json', /"test description"/)
  assert.fileContent('package.json', /"test author"/)
  assert.fileContent('package.json', /"test email"/)
  assert.fileContent('package.json', /"http:\/\/test.url"/)
  assert.fileContent('package.json', /"https:\/\/github.com\/test\/repo"/)
  assert.fileContent('README.md', /test-module/)
  assert.fileContent('LICENSE', /test author/)
  assert.fileContent('LICENSE', /<test email>/)
})
