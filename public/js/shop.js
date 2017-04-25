var products = {
  "0": {
      "name": "Lorem ipsum",
      "description":  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "price": 40.53,
      "oldprice": 45,
      "picture": "img/1_m.jpg",
      "text": "lorem ipsum ut magna pharera aliquet non sodales lorem ipsum belit. Donec sed odio rera magna pharera aliquet",
      "btn": "Lorem"
  },
  "1": {
    "name": "Lorem ipsum",
    "description":  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 63,
    "oldprice": 88,
    "picture": "img/1_f.jpg"
  },
  "2": {
    "name": "Lorem ipsum",
    "description":  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 23,
    "oldprice": 29,
    "picture": "img/1_c.jpg"
  },
  "3": {
    "name": "Lorem ipsum",
    "description":  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 32,
    "oldprice": 37,
    "picture": "img/1_d.jpg"
  },
  "4": {
    "name": "Lorem ipsum",
    "description":  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 38,
    "oldprice": 42,
    "picture": "img/1_e.jpg"
  },
  "5": {
    "name": "Lorem ipsum",
    "description":  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 40,
    "oldprice": 45,
    "picture": "img/1_j.jpg"
  },
  "6": {
    "name": "Lorem ipsum",
    "description":  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 40,
    "oldprice": 53,
    "picture": "img/1_g.jpg"
  },
  "7": {
    "name": "Lorem ipsum",
    "description":  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 60,
    "oldprice": 72,
    "picture": "img/1_b.jpg"
  },
  "8": {
    "name": "Lorem ipsum",
    "description":  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 29,
    "oldprice": 35,
    "picture": "img/1_k.jpg"
  },
  "9": {
    "name": "Lorem ipsum",
    "description":  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 35,
    "oldprice": 43,
    "picture": "img/1_l.jpg"
  },
  "10": {
    "name": "Lorem ipsum",
    "description":  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 45,
    "oldprice": 52,
    "picture": "img/1_a.jpg"
  },
  "11": {
    "name": "Lorem ipsum",
    "description":  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 23,
    "oldprice": 29,
    "picture": "img/1_n.jpg"
  }
    };

    $(document).ready(function () {

        var $cart = $('.cart-items');
        var menu_navigation = $('#main-nav'),
              $L = 900,
              cart_trigger = $('#cart-trigger'),
              hamburger_icon = $('#hamburger-menu'),
              cart = $('#cart'),
              shadow_layer = $('#shadow-layer');

        cart_trigger.on('click', function () {
            menu_navigation.removeClass('speed-in');
            toggle_panel_visibility(cart, shadow_layer, $('body'));
        });

        shadow_layer.on('click', function () {
            cart.removeClass('speed-in');
            menu_navigation.removeClass('speed-in');
            shadow_layer.removeClass('is-visible');
            $('body').removeClass('overflow-hidden');
        });

        hamburger_icon.on('click', function () {
            cart.removeClass('speed-in');
            toggle_panel_visibility(menu_navigation, shadow_layer, $('body'));
        });

        move_navigation(menu_navigation, $L);

        $(window).on('resize', function () {
            move_navigation(menu_navigation, $L);
            if ($(window).width() >= $L && menu_navigation.hasClass('speed-in')) {
                menu_navigation.removeClass('speed-in');
                shadow_layer.removeClass('is-visible');
                $('body').removeClass('overflow-hidden');
            }
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() >= 500) {
                $('.Top').fadeIn();
            } else {
                $('.Top').fadeOut();
            }
        });

        $('.Top').click(function () {
            $('html,body').stop().animate({ scrollTop: 0 });
        });

        $('.drop-down').on('click', function () {
            $('.mega-menu').toggleClass('speed-in');
        });

        $('#close-menu').on('click', function () {
            $('.mega-menu').removeClass('speed-in');
        });


        $('.login').on('click', function () {
          $('.log-in').toggleClass('speed-in');
        });
        $('#close-login').on('click', function () {
            $('.log-in').removeClass('speed-in');
        });

        var searchBtn = '.search-btn', searchSlide = '.search-slide', searchTxt = '.search-slide input[type=text]', searchClose = '.search-close', searchSpeed = 300;
        $(searchBtn).click(function () {
            $(searchSlide).animate({ 'width': '15.5625em' }, searchSpeed);
            $(searchTxt).focus();
        });
        $(searchClose).click(function () {
            $(searchSlide).animate({ 'width': 0 }, searchSpeed);
        });

        var accordion = new Accordion($('#mega_menu'), false);

        function makeProduct(id, product){
            $template.find('img').attr("src", product["picture"]);

            $template.find('h3').text(product["name"]);
            $template.find('h5').text(product["name"]);

            $template.find('p').text(product["description"].substring(0,80));
            $template.find('article').text(product["description"]);

            $template.find('s').text('$' + product["oldprice"]);
            $template.find('.price').append('$' + product["price"]);
            $template.find('.prices').text('$' + product["price"]);

            $template.data('id', id);
            $template.data('name', product["name"]);
            $template.data('price', product["price"]);
            $template.data('image', product["picture"]);
        }

        for (var i=0; i<Object.keys(products).length; i++){
            var $template = $($('#productTemplate').html());
            makeProduct(i, products[i]);
            $("<li></li>").append($template).appendTo("#gallery-items");
        }

        $('body').on('click', '.product .add', function () {
            var items = $cart.children(), $item = $(this).parents('.product'), $template = $($('#cartItem').html()), $matched = null, quantity = 0;
            $matched = items.filter(function (index) {
                var $this = $(this);
                return $this.data('id') === $item.data('id');
            });
            if ($matched.length) {
                quantity = +$matched.find('.qty').val() + 1;
                $matched.find('.qty').val(quantity);
                calculateSubtotal($matched);
            } else {
                $template.find('span').css('background-image', 'url(' + $item.data('image') + ')');

                $template.find('span').after("&nbsp;"+$item.data('name'));
                $template.find('.price').text("$"+$item.data('price'));
                $template.find('.subtotal').text('$' + $item.data('price'));
                $template.data('id', $item.data('id'));
                $template.data('price', $item.data('price'));
                $template.data('subtotal', $item.data('price'));
                $cart.append($template);
            }
            updateCartQuantity();
            calculateAndUpdate();
        });


        /*$('.login').on('click', function () {
          $('.log-in').toggleClass('speed-in');
        });
        $('#close-login').on('click', function () {
            $('.log-in').removeClass('speed-in');
        });*/

        $('.checkout-btn').on('click', function () {
          $('.check').toggleClass('speed-in');
          console.log("dxmdklgnlnfkl");

        });

        $('#close-check').on('click', function () {
            $('.check').removeClass('speed-in');
        });



        function calculateSubtotal($item) {
            var quantity = $item.find('.qty').val(),
            price = $item.data('price'),
            subtotal = quantity * price;

            $item.find('.subtotal').text('$' + subtotal);
            $item.data('subtotal', subtotal);
        }

        function calculateAndUpdate() {
            var subtotal = 0,
            items = $cart.children(),
            shipping = items.length > 0 ? 5 : 0,
            tax = 0;
            items.each(function (index, item) {
                var $item = $(item),
                price = $item.data('subtotal');
                subtotal += price;
            });
            $('.subtotalTotal').text(formatDollar(subtotal));
            tax = subtotal * 0.05;
            $('.taxes').text(formatDollar(tax));
            $('.shipping').text(formatDollar(shipping));
            $('.finalTotal').text(formatDollar(subtotal + tax + shipping));
        }

        function formatDollar(amount) {
            return '$' + parseFloat(Math.round(amount * 100) / 100).toFixed(2);
        }

        function updateCartQuantity() {
            var quantities = 0,
            $cartQuantity = $('span.cart-quantity'),
            items = $cart.children();

            items.each(function (index, item) {
                var $item = $(item),
                quantity = +$item.find('.qty').val();
                quantities += quantity;
            });

            if (quantities > 0) {
                $cartQuantity.removeClass('empty');
            } else {
                $cartQuantity.addClass('empty');
            }
            $cartQuantity.text(quantities);
        }

        $('body').on('click', '.cart-items .item-remove', function () {
            var $this = $(this),
            $item = $this.parents('li');
            $item.remove();
            calculateSubtotal($item);
            updateCartQuantity();
            calculateAndUpdate();
        });
    });


function toggle_panel_visibility(panel, background_layer, body) {
    if (panel.hasClass('speed-in')) {
        panel.removeClass('speed-in');
        background_layer.removeClass('is-visible');
        body.removeClass('overflow-hidden');
    } else {
        panel.addClass('speed-in');
        background_layer.addClass('is-visible');
        body.addClass('overflow-hidden');
    }
}

function move_navigation(navigation, $MQ) {
    if ($(window).width() >= $MQ) {
        navigation.detach();
        navigation.appendTo('header');
    } else {
        navigation.detach();
        navigation.insertAfter('header');
    }
}


    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link');
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown);
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
        $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('open');
        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        }
    };





    $('body').on('keypress', '.cart-items input', function (ev) {
        var keyCode = window.event ? ev.keyCode : ev.which;
        if (keyCode < 48 || keyCode > 57) {
            if (keyCode != 0 && keyCode != 8 && keyCode != 13 && !ev.ctrlKey) {
                ev.preventDefault();
            }
        }
    });
    $('body').on('blur', '.cart-items input', function () {
        var $this = $(this),
        $item = $this.parents('li');
        if (+$this.val() === 0) {
            $item.remove();
            calculateSubtotal($item);
            updateCartQuantity();
            calculateAndUpdate();
        } else {
            calculateSubtotal($item);
            updateCartQuantity();
            calculateAndUpdate();
        }
    });
