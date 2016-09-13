var Legends = require('../../../../../src/geo/map/legends/legends');

describe('geo/map/legends/legends', function () {
  beforeEach(function () {
    this.legends = new Legends([
      {
        type: 'bubble',
        title: 'Bubble Legend',
        pre_html_snippet: '<p>PRE Bubble Legend</p>',
        post_html_snippet: '<p>POST Bubble Legend</p>',
        fill_color: '#FABADA'
      },
      {
        type: 'category',
        title: 'Categories Legend',
        pre_html_snippet: '<p>PRE Category Legend</p>',
        post_html_snippet: '<p>POST Category Legend</p>',
        prefix: 'prefix',
        sufix: 'sufix'
      },
      {
        type: 'choropleth',
        title: 'Choropleth Legend',
        pre_html_snippet: '<p>PRE Choropleth Legend</p>',
        post_html_snippet: '<p>POST Choropleth Legend</p>',
        prefix: 'prefix',
        sufix: 'sufix'
      },
      {
        type: 'custom',
        title: 'Custom Legend',
        pre_html_snippet: '<p>PRE Custom Legend</p>',
        post_html_snippet: '<p>POST Custom Legend</p>',
        items: [
          { type: 'color', name: 'Item 1', color: '#CACACA;' },
          { type: 'color', name: 'Item 2', color: '#FABADA;' }
        ]
      },
      {
        type: 'html',
        title: 'HTML Legend',
        html: '<p>Some markup that gets sanitised<script>alert("hola");<\/script></p>'
      }
    ]);
  });

  it('should initialize bubble legends correctly', function () {
    expect(this.legends.bubble.get('title')).toEqual('Bubble Legend');
    expect(this.legends.bubble.get('preHTMLSnippet')).toEqual('<p>PRE Bubble Legend</p>');
    expect(this.legends.bubble.get('postHTMLSnippet')).toEqual('<p>POST Bubble Legend</p>');
    expect(this.legends.bubble.get('fillColor')).toEqual('#FABADA');
  });

  it('should initialize category legends correctly', function () {
    expect(this.legends.category.get('title')).toEqual('Categories Legend');
    expect(this.legends.category.get('preHTMLSnippet')).toEqual('<p>PRE Category Legend</p>');
    expect(this.legends.category.get('postHTMLSnippet')).toEqual('<p>POST Category Legend</p>');
    expect(this.legends.category.get('prefix')).toEqual('prefix');
    expect(this.legends.category.get('sufix')).toEqual('sufix');
  });

  it('should initialize choropleth legends correctly', function () {
    expect(this.legends.choropleth.get('title')).toEqual('Choropleth Legend');
    expect(this.legends.choropleth.get('preHTMLSnippet')).toEqual('<p>PRE Choropleth Legend</p>');
    expect(this.legends.choropleth.get('postHTMLSnippet')).toEqual('<p>POST Choropleth Legend</p>');
    expect(this.legends.choropleth.get('prefix')).toEqual('prefix');
    expect(this.legends.choropleth.get('sufix')).toEqual('sufix');
  });

  it('should initialize custom legends correctly', function () {
    expect(this.legends.custom.get('title')).toEqual('Custom Legend');
    expect(this.legends.custom.get('preHTMLSnippet')).toEqual('<p>PRE Custom Legend</p>');
    expect(this.legends.custom.get('postHTMLSnippet')).toEqual('<p>POST Custom Legend</p>');
    expect(this.legends.custom.get('items').length).toEqual(2);
  });

  it('should initialize HTML legends correctly', function () {
    expect(this.legends.html.get('title')).toEqual('HTML Legend');
    expect(this.legends.html.get('html')).toEqual('<p>Some markup that gets sanitised<script>alert("hola");<\/script></p>');
  });
});
