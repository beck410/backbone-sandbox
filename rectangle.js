(function (){
  var Rectangle = Backbone.Model.extend({});

  var RectangleView = Backbone.View.extend({

    tagName: 'div',
    className: 'rectangle',
    render: function(){
      this.setDimensions();
      this.setPosition();
      this.setColor();
      return this;
    },

    setDimensions: function(){
      this.$el.css({
        width: this.model.get('width') + 'px',
        height: this.model.get('height') + 'px'
      });
    },

    setPosition: function(){
      var position = this.model.get('position');
      this.$el.css({
        left: position.x,
        top: position.y
      });
    },

    setColor: function(){
      var color = this.model.get('color');
      this.$el.css({
        background: color
      });
    }
  });

  var myRectangle = new Rectangle({
    width: 100,
    height: 60,
    position: {
      x: 300,
      y: 150
    },
    color: 'red'
  });

  var secondRectangle = new Rectangle({
     width: 200,
    height: 120,
    position: {
      x: 320,
      y: 200
    },
    color: 'yellow'
  });

  var myView = new RectangleView({model: myRectangle});
  var secondView = new RectangleView({model: secondRectangle});

  $('div#canvas').append(myView.render().el);
  $('div#canvas').append(secondView.render().el);
})();
