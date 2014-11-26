(function() {
  var initButtons;

  initButtons = function($items) {
    var i, item, _i, _len, _results;
    i = 0;
    _results = [];
    for (_i = 0, _len = $items.length; _i < _len; _i++) {
      item = $items[_i];
      $(item).css('-webkit-transform', "rotate(" + (360 / $items.length * i) + "deg)").find('span').css('-webkit-transform', "rotate(" + (-360 / $items.length * i) + "deg)");
      _results.push(i++);
    }
    return _results;
  };

  $(document).on('ready', function() {
    var $items, diameter, i, item, _fn, _i, _len;
    diameter = $('nav').width();
    $items = $('nav > .item');
    i = 0;
    initButtons($items);
    _fn = function(item) {
      $(item).click(function() {
        var buttonPos, buttonWidth, navPos;
        $('#home').removeClass('hide');
        $('body').css('background-color', $(item).find('.circle').css('background-color'));
        $('.display').addClass('hide');
        navPos = $('nav').position();
        buttonPos = $(this).position();
        buttonWidth = $(this).width();
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.item').addClass('hide').css('-webkit-transform', 'rotate(0)').find('span').css('-webkit-transform', 'rotate(0)');
        return $('#current-menu').html($(item).data('name'));
      });
      return $(item).hover(function() {
        return $('.display').html($(item).data('name'));
      }, function() {
        return $('.display').html('');
      });
    };
    for (_i = 0, _len = $items.length; _i < _len; _i++) {
      item = $items[_i];
      _fn(item);
      i++;
    }
    return $('#home').click(function() {
      $('body').css('background-color', '#fff');
      $items.removeClass('hide');
      initButtons($items);
      $('.display').removeClass('hide');
      $('#current-menu').html('');
      return $(this).addClass('hide');
    });
  });

}).call(this);
