var assert = require("assert");
var libs = require('./');
describe('Assets', function(){
  it('changed concat conflict should exist', function(){
      assert.ok(libs.changed);
      assert.ok(libs.concat);
      assert.ok(libs.conflict);
  })
  it('ext filter html-tag-include should exist', function(){
      assert.ok(libs.ext);
      assert.ok(libs.filter);
      assert.ok(libs.htmlTagInclude);
  })
  it('inject tap rev should exist', function(){
      assert.ok(libs.inject);
      assert.ok(libs.tap);
      assert.ok(libs.rev);
  })
   it('postcss rename uglify should exist', function(){
      assert.ok(libs.postcss);
      assert.ok(libs.rename);
      assert.ok(libs.uglify);
  })
});