$('.menu-item#electrical').hover(
  function(){
      $(this).css('border-color','#e2aa16');
      $(this).find('span').css('color','#e2aa16');
  },
  function(){
      $(this).css('border-color','');
      $(this).find('span').css('color','');
  }
);
$('.menu-item#gas').hover(
  function(){
      $(this).css('border-color','#2c9ee2');
      $(this).find('span').css('color','#2c9ee2');
  },
  function(){
      $(this).css('border-color','');
      $(this).find('span').css('color','');
  }
);
$('.menu-item#import').hover(
  function(){
      $(this).css('border-color','#9e1313');
      $(this).find('span').css('color','#9e1313');
  },
  function(){
      $(this).css('border-color','');
      $(this).find('span').css('color','');
  }
);
$('.menu-item#faq').hover(
  function(){
      $(this).css('border-color','#24a514');
      $(this).find('span').css('color','#24a514');
  },
  function(){
      $(this).css('border-color','');
      $(this).find('span').css('color','');
  }
);
$('.menu-item#soumu').hover(
  function(){
      $(this).css('border-color','#d62424');
      $(this).find('span').css('color','#d62424');
  },
  function(){
      $(this).css('border-color','');
      $(this).find('span').css('color','');
  }
);
$('.menu-item#contact').hover(
  function(){
      $(this).css('border-color','#1459a5');
      $(this).find('span').css('color','#1459a5');
  },
  function(){
      $(this).css('border-color','');
      $(this).find('span').css('color','');
  }
);

$(function(){
    var countElm = $('.supply_now_count'),
    countSpeed = 0.1;

    countElm.each(function(){
        var self = $(this),
        countMax = self.attr('data-num'),
        thisCount = self.text(),
        countTimer;

        function timer(){
            countTimer = setInterval(function(){
                var countNext = thisCount++;
                self.text(countNext);

                if(countNext == countMax){
                    clearInterval(countTimer);
                }
            },countSpeed);
        }
        timer();
    });

});
