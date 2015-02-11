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
  it('html2jsx tap rev should exist', function(){
      assert.ok(libs.html2jsx);
      assert.ok(libs.tap);
      assert.ok(libs.rev);
  })
   it('postcss rename uglify should exist', function(){
      assert.ok(libs.postcss);
      assert.ok(libs.rename);
      assert.ok(libs.uglify);
  })
   it('sourcemaps rename render rev-hash exist', function(){
      assert.ok(libs.sourcemaps);
      assert.ok(libs.render);
      assert.ok(libs.revHash);
  })
});
