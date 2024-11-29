/*
 *  Remodal - v1.1.1
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery||a.Zepto)}(this,function(a,b){"use strict";function c(a){if(w&&"none"===a.css("animation-name")&&"none"===a.css("-webkit-animation-name")&&"none"===a.css("-moz-animation-name")&&"none"===a.css("-o-animation-name")&&"none"===a.css("-ms-animation-name"))return 0;var b,c,d,e,f=a.css("animation-duration")||a.css("-webkit-animation-duration")||a.css("-moz-animation-duration")||a.css("-o-animation-duration")||a.css("-ms-animation-duration")||"0s",g=a.css("animation-delay")||a.css("-webkit-animation-delay")||a.css("-moz-animation-delay")||a.css("-o-animation-delay")||a.css("-ms-animation-delay")||"0s",h=a.css("animation-iteration-count")||a.css("-webkit-animation-iteration-count")||a.css("-moz-animation-iteration-count")||a.css("-o-animation-iteration-count")||a.css("-ms-animation-iteration-count")||"1";for(f=f.split(", "),g=g.split(", "),h=h.split(", "),e=0,c=f.length,b=Number.NEGATIVE_INFINITY;e<c;e++)d=parseFloat(f[e])*parseInt(h[e],10)+parseFloat(g[e]),d>b&&(b=d);return b}function d(){if(b(document).height()<=b(window).height())return 0;var a,c,d=document.createElement("div"),e=document.createElement("div");return d.style.visibility="hidden",d.style.width="100px",document.body.appendChild(d),a=d.offsetWidth,d.style.overflow="scroll",e.style.width="100%",d.appendChild(e),c=e.offsetWidth,d.parentNode.removeChild(d),a-c}function e(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)||(c=b(document.body),a=parseInt(c.css("padding-right"),10)+d(),c.css("padding-right",a+"px"),e.addClass(f))}}function f(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)&&(c=b(document.body),a=parseInt(c.css("padding-right"),10)-d(),c.css("padding-right",a+"px"),e.removeClass(f))}}function g(a,b,c,d){var e=k("is",b),f=[k("is",u.CLOSING),k("is",u.OPENING),k("is",u.CLOSED),k("is",u.OPENED)].join(" ");a.$bg.removeClass(f).addClass(e),a.$overlay.removeClass(f).addClass(e),a.$wrapper.removeClass(f).addClass(e),a.$modal.removeClass(f).addClass(e),a.state=b,!c&&a.$modal.trigger({type:b,reason:d},[{reason:d}])}function h(a,d,e){var f=0,g=function(a){a.target===this&&f++},h=function(a){a.target===this&&0===--f&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())};b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].on(r,g).on(s,h)}),a(),0===c(e.$bg)&&0===c(e.$overlay)&&0===c(e.$wrapper)&&0===c(e.$modal)&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())}function i(a){a.state!==u.CLOSED&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(b,c){a[c].off(r+" "+s)}),a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),f(),g(a,u.CLOSED,!0))}function j(a){var b,c,d,e,f={};for(a=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),b=a.split(","),e=0,c=b.length;e<c;e++)b[e]=b[e].split(":"),d=b[e][1],("string"==typeof d||d instanceof String)&&(d="true"===d||"false"!==d&&d),("string"==typeof d||d instanceof String)&&(d=isNaN(d)?d:+d),f[b[e][0]]=d;return f}function k(){for(var a=q,b=0;b<arguments.length;++b)a+="-"+arguments[b];return a}function l(){var a,c,d=location.hash.replace("#","");if(d){try{c=b('[data-remodal-id="'+d+'"]')}catch(e){}c&&c.length&&(a=b[p].lookup[c.data(p)],a&&a.settings.hashTracking&&a.open())}else n&&n.state===u.OPENED&&n.settings.hashTracking&&n.close()}function m(a,c){var d=b(document.body),e=d,f=this;f.settings=b.extend({},t,c),f.index=b[p].lookup.push(f)-1,f.state=u.CLOSED,f.$overlay=b("."+k("overlay")),null!==f.settings.appendTo&&f.settings.appendTo.length&&(e=b(f.settings.appendTo)),f.$overlay.length||(f.$overlay=b("<div>").addClass(k("overlay")+" "+k("is",u.CLOSED)).hide(),e.append(f.$overlay)),f.$bg=b("."+k("bg")).addClass(k("is",u.CLOSED)),f.$modal=a.addClass(q+" "+k("is-initialized")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).attr("tabindex","-1"),f.$wrapper=b("<div>").addClass(k("wrapper")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).hide().append(f.$modal),e.append(f.$wrapper),f.$wrapper.on("click."+q,'[data-remodal-action="close"]',function(a){a.preventDefault(),f.close()}),f.$wrapper.on("click."+q,'[data-remodal-action="cancel"]',function(a){a.preventDefault(),f.$modal.trigger(v.CANCELLATION),f.settings.closeOnCancel&&f.close(v.CANCELLATION)}),f.$wrapper.on("click."+q,'[data-remodal-action="confirm"]',function(a){a.preventDefault(),f.$modal.trigger(v.CONFIRMATION),f.settings.closeOnConfirm&&f.close(v.CONFIRMATION)}),f.$wrapper.on("click."+q,function(a){var c=b(a.target);c.hasClass(k("wrapper"))&&f.settings.closeOnOutsideClick&&f.close()})}var n,o,p="remodal",q=a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.NAMESPACE||p,r=b.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(a){return a+"."+q}).join(" "),s=b.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(a){return a+"."+q}).join(" "),t=b.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.DEFAULTS),u={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},v={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},w=function(){var a=document.createElement("div").style;return void 0!==a.animationName||void 0!==a.WebkitAnimationName||void 0!==a.MozAnimationName||void 0!==a.msAnimationName||void 0!==a.OAnimationName}(),x=/iPad|iPhone|iPod/.test(navigator.platform);m.prototype.open=function(){var a,c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(a=c.$modal.attr("data-remodal-id"),a&&c.settings.hashTracking&&(o=b(window).scrollTop(),location.hash=a),n&&n!==c&&i(n),n=c,e(),c.$bg.addClass(c.settings.modifier),c.$overlay.addClass(c.settings.modifier).show(),c.$wrapper.show().scrollTop(0),c.$modal.focus(),h(function(){g(c,u.OPENING)},function(){g(c,u.OPENED)},c))},m.prototype.close=function(a){var c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&c.state!==u.CLOSED&&(c.settings.hashTracking&&c.$modal.attr("data-remodal-id")===location.hash.substr(1)&&(location.hash="",b(window).scrollTop(o)),h(function(){g(c,u.CLOSING,!1,a)},function(){c.$bg.removeClass(c.settings.modifier),c.$overlay.removeClass(c.settings.modifier).hide(),c.$wrapper.hide(),f(),g(c,u.CLOSED,!1,a)},c))},m.prototype.getState=function(){return this.state},m.prototype.destroy=function(){var a,c=b[p].lookup;i(this),this.$wrapper.remove(),delete c[this.index],a=b.grep(c,function(a){return!!a}).length,0===a&&(this.$overlay.remove(),this.$bg.removeClass(k("is",u.CLOSING)+" "+k("is",u.OPENING)+" "+k("is",u.CLOSED)+" "+k("is",u.OPENED)))},b[p]={lookup:[]},b.fn[p]=function(a){var c,d;return this.each(function(e,f){d=b(f),null==d.data(p)?(c=new m(d,a),d.data(p,c.index),c.settings.hashTracking&&d.attr("data-remodal-id")===location.hash.substr(1)&&c.open()):c=b[p].lookup[d.data(p)]}),c},b(document).ready(function(){b(document).on("click","[data-remodal-target]",function(a){a.preventDefault();var c=a.currentTarget,d=c.getAttribute("data-remodal-target"),e=b('[data-remodal-id="'+d+'"]');b[p].lookup[e.data(p)].open()}),b(document).find("."+q).each(function(a,c){var d=b(c),e=d.data("remodal-options");e?("string"==typeof e||e instanceof String)&&(e=j(e)):e={},d[p](e)}),b(document).on("keydown."+q,function(a){n&&n.settings.closeOnEscape&&n.state===u.OPENED&&27===a.keyCode&&n.close()}),b(window).on("hashchange."+q,l)})});

/* Loaders */
!function(t) {
    var a = "spinner-circle";
    t.mlsAjax = {
        preloaderShow: function(t) {
            "frame" == t.type && t.frame.attr("data-loader-frame", "1").append('<i class="' + a + '"><div class="lds-ripple"><div></div><div></div></div></i>'), "text" == t.type && t.frame.html(t.frame.data("loader"))
        },
        preloaderHide: function() {
            t("[data-loader-frame]").removeAttr("data-loader-frame").find("." + a).remove()
        }
    }
}($);

/* Simple JavaScript Templating @ John Resig */
!function(){var t={};this.tmpl=function n(p,i){var e=/\W/.test(p)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+p.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):t[p]=t[p]||n(document.getElementById(p).innerHTML);return i?e(i):e}}();

/* CartLS */
var cartLS=function(a){'use strict';function b(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function c(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function d(a){for(var b,d=1;d<arguments.length;d++)b=null==arguments[d]?{}:arguments[d],d%2?c(Object(b),!0).forEach(function(c){f(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):c(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var e=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a){function b(c){"@babel/helpers - typeof";return a.exports="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?b=function(a){return typeof a}:b=function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},b(c)}a.exports=b}),f=b,g="__cart",h=null,i=function(a){h=a},j=function(a){return JSON.parse(localStorage.getItem(a||g))||[]},k=function(a,b){localStorage.setItem(b||g,JSON.stringify(a)),h&&h(j(b||g))},l=function(a){localStorage.removeItem(a||g),h&&h(j(a||g))},m=function(a){return j().find(function(b){return b.id===a})},n=function(a){return!!m(a)},o=function(a){return k(j().filter(function(b){return b.id!==a}))},p=function(a,b,c){return k(j().map(function(e){return e.id===a?d({},e,f({},b,c)):e}))},q=function(a){return a.id&&a.price},r=function(a){return s(a)?a.price*a.quantity:0},s=function(a){return a&&a.price&&a.quantity},t=function(a){return a&&"function"==typeof a};return a.add=function(a,b){return q(a)?n(a.id)?p(a.id,"quantity",m(a.id).quantity+(b||1)):k(j().concat(d({},a,{quantity:b||1}))):null},a.destroy=function(){return l()},a.exists=n,a.get=m,a.list=j,a.onChange=function(a){return t(a)?i(a):console.log(e(a))},a.quantity=function(a,b){return n(a)&&0<m(a).quantity+b?p(a,"quantity",m(a).quantity+b):o(a)},a.remove=o,a.subtotal=r,a.total=function(a){return j().reduce(function(b,c){return t(a)?a(b,c):b+=r(c)},0)},a.update=p,a}({});//# sourceMappingURL=cart-localstorage.min.js.map


/* Init */
jQuery = Zepto;
$.fn.extend = function(obj) {
    $.extend($.fn, obj);
};

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    },
    slowHide: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).hide();
            $(this).removeClass('animated ' + animationName);
        });
    },
    slowShow: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).show();
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});


!function(t) {
    t.scrollBodyToElem = {
        go: function(t, time, ofset) {
            var $position = t.offset().top - ofset;

            var $windowWidth = $(window).width();
            if($windowWidth <= 1180)
            {
                $position -= 20;
            }

            window.scrollTo({
                top: $position,
                behavior: "smooth"
            });
        },
        pos: function(t, time, ofset) {
            window.scrollTo({
                top: t - ofset,
                behavior: "smooth"
            });
        }
    }
}(jQuery);

//Init
(function($) {
    "use strict";
    $(function(){
        var $document = $(document);
        var $body = $('#body');
        $body.removeClass('load--preload');


        var $timeOut;
        window.Apps = {
            notify: function (status, text) {

                if(status === true) status = 'success';
                if(status === false) status = 'error';

                $document.trigger('notifyClose');
                var $notify = $('<div class="notify-alert"></div>');
                $notify.html('<div class="type-' + status + '">' + text + '</div>').slowShow('bounceInDown');
                $notify.appendTo($body);
                $timeOut = setTimeout(function () {
                    $document.trigger('notifyClose');
                    clearInterval($timeOut);
                }, 4000);
                $document.on('notifyClose', function () {
                    $notify.slowHide('bounceOut');
                    clearInterval($timeOut);
                });
                $notify.on('click', function () {
                    $document.trigger('notifyClose');
                    $notify.off('click');
                });

            }
        };

        /*
        Навигация для мобильного
         */
        $('.fn_menu_switch').click(function(e){
            e.preventDefault();
            $body.toggleClass('dropshow--main_menu');
        });

        $('.fn_close_switch').click(function (e) {
            e.preventDefault();
            $body.removeClass('dropshow--main_menu');
        });

        /*
        При нажатии купить внутри формы блокируем кнопку
         */
        $document.on('submit', '.fn_modal_buy', function () {
            $(this).find('.fn_modal_buy_button_submit').prop('disabled', 'disabled');
        });


        /*
        Навигация скролл экрана
         */
        $document.on('click', '#fn_menu_header a', function () {
            var $this = $(this);
            var $link = $this.attr('href');
            var $linkSplit = $link.split('/#category-');
            if($linkSplit[1])
            {
                var $getTo = $('#category-' + $linkSplit[1]);
                if($getTo.length)
                {
                    var $scrollOffset = 0;
                    if (window.matchMedia('(max-width: 960px)').matches) {
                        $scrollOffset = 50;
                    }
                    $.scrollBodyToElem.go($getTo, 500, $scrollOffset);
                    $body.removeClass('dropshow--main_menu');
                    return false;
                }
            }
        });


        /*
        Модальные окна
         */
        var $modals = new Map();
        $document.on('click', '[data-modal-open]', function () {
            var $this = $(this);
            var $template = $this.attr('data-modal-template');
            var $id = $this.attr('data-modal-open');
            if(!$template) $template = '#' + $id;
            var $attach = $($template).html();

            if($template === '#product-buy')
            {
                let $options = $this.data('options');

                $options.payments = $('#template-payments').html();

                $attach = tmpl($attach, $options);

                // $.each($options, function ($find, $replate) {
                //     $attach = $attach.split('--' + $find + '--').join($replate)
                // });
            }

            if($template === '#cart-buy')
            {
                let $options = $this.data('options');

                $options.payments = $('#template-payments').html();
                $options.total_price = 1000;

                $attach = tmpl($attach, $options);

                // $.each($options, function ($find, $replate) {
                //     $attach = $attach.split('--' + $find + '--').join($replate)
                // });
            }


            if(!$modals.get($id))
            {
                var inst = $($('<div/>').attr('class', 'remodal modal--product-buy').attr('data-remodal-id', $id).html('<button data-remodal-action="close" class="remodal-close"></button>' + $attach)).remodal();
                //$modals[$id] = inst;
                $modals.set($id, inst);
                inst.open();
            }
            else
            {
                $modals.get($id).open();
            }
            return false;
        });


        /*
        Модальные окна корзина
         */
        let modalCart;
        let flyCart = $('#fn_fly_cart');
        let flyCartCount = $('#fn_fly_cart_count');

        flyCartCount.html(cartLS.list().length);

        let __cartUpdate = function(){
            let $cart = $('#fn_cart');
            let $cartQuantityInfo = $cart.find('[data-calc-quantity="limit"]');
            let $cartButtonCheckout = $cart.find('[data-cart-checkout-btn]');
            let $cartIsError = 0;

            let $listProducts = cartLS.list();
            let $templateProducts = tmpl($('#template-cart-buy-products').html(), {'products' : $listProducts});

            $cartQuantityInfo.addClass('display-none');

            $cart.attr('data-cart-count', $listProducts.length)
            $cart.find('.fn_cart_products').html($templateProducts);
            $cart.find('.fn_cart_counter').html($listProducts.length);
            flyCartCount.html($listProducts.length);
            setTimeout(function(){
                flyCart.addClass('cart--added');
                setTimeout(function(){
                    flyCart.removeClass('cart--added');
                }, 500);
            }, 250);

            // Stock
            let $totalCheckoutItems = 0;
            $.each($listProducts, function($indx, $item){
                $totalCheckoutItems = $totalCheckoutItems + $item.quantity;
                let $qtyEl = $cart.find('#quantity-cart-' + $item.id);
                if($item.quantity > $item.stock)
                {
                    $qtyEl.addClass('input--error');
                    $cartQuantityInfo.removeClass('display-none');
                    $cartIsError++;
                }
                else
                {
                    $qtyEl.removeClass('input--error');
                }
            });

            if($cartIsError === 0)
            {
                $cartButtonCheckout.prop('disabled', false);
            }
            else
            {
                $cartButtonCheckout.prop('disabled', true);
            }

            // Sum and discount
            let $totalCheckoutPrice = cartLS.total();

            // Discount
            var $procent = Number($cart.find('.fn_promocode_check').data('procent'));
            var $discountTotal = $cart.find('[data-calc-discount="wrap"]');
            var $discountValue = false;
            if($procent)
            {
                $discountValue = parseFloat($totalCheckoutPrice / 100 * $procent);
            }
            if($discountValue)
            {
                $totalCheckoutPrice = $totalCheckoutPrice - $discountValue;
                $discountTotal.find('[data-calc-discount="total_value"]').html($discountValue.toFixed(2));
                $discountTotal.removeClass('display-none');
            }
            else
            {
                $discountTotal.find('[data-calc-discount="total_value"]').html('0');
                $discountTotal.addClass('display-none');
            }

            // Total checkout
            $cart.find('.fn_cart_total_price').html($totalCheckoutPrice.toFixed(2));
            $cart.find('.fn_cart_total_items').html($totalCheckoutItems);
        };
        cartLS.onChange(function (){
            __cartUpdate($('#fn_cart'))
        });



        $document.on('click', '[data-modal-cart]', function () {
            let $this = $(this);
            let $id = 'cart';
            let $templateCart = $('#template-cart-buy').html();

            let $options = {
                'id': $id,
                'payments':     $('#template-payments').html(),
                'products' :    cartLS.list(),
                'counter':      cartLS.list().length,
                'total_price':  cartLS.total().toFixed(2)
            };

            $templateCart = tmpl($templateCart, $options);



            modalCart = $($('<div/>').attr('class', 'remodal modal--product-cart').attr('data-remodal-id', $id).html('<button data-remodal-action="close" class="remodal-close"></button>' + $templateCart)).remodal();
            //$modals[$id] = inst;
            __cartUpdate();
            $modals.set($id, modalCart);
            modalCart.open();

            return false;
        });
        $document.on('closed', '.modal--product-cart', function (e) {
            modalCart.destroy();
        });



        /*
        Указание количеста товара
         */
        $document.on('click', '[data-quantity-number="minuse"], [data-quantity-number="pluse"]', function () {
            var $this = $(this);
            var $form = $this.closest('[data-calc-quantity="form"]');
            var $input = $this.parents('[data-quantity-number]').find('input');
            var $count;
            if($this.attr('data-quantity-number') === 'minuse')
            {
                $count = parseInt($input.val()) - 1;

                if($count <= 0)
                {
                    return false;
                }

                $count = $count < 1 ? 1 : $count;
            }
            else
            {
                $count = parseInt($input.val()) + 1;
            }
            $input.val($count);
            $input.change();

            return false;
        });


        $document.on('keydown', '[data-only="int"]', function (event) {
            if ( event.keyCode === 46 || event.keyCode === 8 || event.keyCode === 9 || event.keyCode === 27 ||
                (event.keyCode === 65 && event.ctrlKey === true) ||
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                return;
            } else {
                if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                    event.preventDefault();
                }
            }
        });

        var __formBuyCalculateTotal = function($form)
        {
            // let $total_sum = 0;
            // let $inputs = $form.find('[data-quantity-number="box"]');
            // $inputs.each(function (){
            //     let $box = $(this);
            //     let $input = $box.find('[data-quantity-number="value"]');
            //     var $qtyMax = $input.attr('data-quantity-max');
            //     var $count = parseInt($input.val().replace(/\D+/g,""));
            //     if(!$count) $count = 0;
            //     if($count > $qtyMax)
            //     {
            //         $input.val($qtyMax).addClass('input--error');
            //         setTimeout(function (){
            //             $input.removeClass('input--error');
            //         }, 500);
            //         $count = $qtyMax;
            //     }
            //
            //     $input.val(String($count));
            //     $box.find('.fn_input_quantity').html(String($count));
            //
            //     if($input.data('cart'))
            //     {
            //         cartLS.update(Number($input.data('id')), `quantity`, Number($count));
            //     }
            //
            //     console.log($count);
            //
            // });
            //
            // var $discountTotal = $form.find('[data-calc-discount="wrap"]');
            // var $procent = Number($form.find('.fn_promocode_check').attr('data-procent'));
            //
            //
            //
            // return false;




            var $input = $form.find('[data-quantity-number="value"]');
            var $count = parseInt($input.val().replace(/\D+/g,""));
            if(!$count) $count = '0';
            $input.val($count);
            $form.find('.fn_input_quantity').html($count);

            var $discountTotal = $form.find('[data-calc-discount="wrap"]');
            var $procent = Number($form.find('.fn_promocode_check').attr('data-procent'));

            var $max = $input.attr('data-quantity-max');
            var $cost = parseFloat($input.attr('data-quantity-cost')).toFixed(2);

            $form.removeClass('type--quantity-show');
            if($count > $max)
            {
                $input.val($max);
                $form.find('.fn_input_quantity').html($max);
                $form.addClass('type--quantity-show');
                return;
            }


            // Total
            var $totalValue = $form.find('[data-calc-quantity="total_value"]');
            var $sum = $cost * $count;

            // Discount
            var $discountValue = false;
            if($procent)
            {
                $discountValue = parseFloat($sum / 100 * $procent);
            }
            if($discountValue)
            {
                $sum = $sum - $discountValue;
                //$sum = Math.ceil($sum);
                $discountTotal.find('[data-calc-discount="total_value"]').html($discountValue.toFixed(2));
                $discountTotal.removeClass('display-none');
            }
            else
            {
                $discountTotal.find('[data-calc-discount="total_value"]').html('0');
                $discountTotal.addClass('display-none');
            }

            // Commission
            let commissionProcent = Number($form.find('[name="payment"]:checked').attr('data-commission-percent') || 0);
            if(commissionProcent)
            {
                let commissionProcentValue = parseFloat($sum / 100 * commissionProcent);
                $sum = $sum + commissionProcentValue;
            }

            // Output
            $totalValue.html($sum.toFixed(2));
        }

        $document.on('change', '[data-quantity-number="value"]', function (event) {
            var $input = $(this);
            var $form = $input.closest('[data-calc-quantity="form"]');

            __formBuyCalculateTotal($form);
        });



        /*
        Закрыть уведомление
         */
        $document.on('click', '[data-btn-alert="close"]', function () {
            var $this = $(this);
            var $wrap = $this.closest('.alert').css({'opacity' : 0});
            setTimeout(function () {
                $wrap.remove();
            }, 600);
        });


        /*
        Проверка промокода
         */
        var $timerBoxSearch;
        $document.on('input', '.fn_promocode_check', function () {
            clearTimeout($timerBoxSearch);

            let $this = $(this);
            let $value = $this.val();
            let $form = $this.closest('form');
            let $notice = $form.find('.fn_promocode_info');
            let $isCart = $this.data('cart');

            let ms = 1500;
            $timerBoxSearch = setTimeout(function() {
                $.mlsAjax.preloaderShow({type: "frame", frame: $form});
                if($value.length >= 4)
                {
                    $.ajax({
                        'url' : '/promocode-check?promocode=' + $value,
                        'type' : 'GET',
                        'dataType' : "json",
                        'error' : function( $respones )
                        {
                            $.mlsAjax.preloaderHide({type: "frame", frame: $form});
                            $form.removeClass('loader--pending');
                            $notice.removeClass('show--success');
                            $notice.removeClass('notice--show');
                        },
                        'success' : function( $respones )
                        {
                            $.mlsAjax.preloaderHide({type: "frame", frame: $form});
                            $form.removeClass('loader--pending');
                            if($respones.status)
                            {
                                $notice.text($respones.message).removeClass('notice--show').addClass('show--success');
                                $this.attr('data-procent', $respones.procent);
                                $isCart ? __cartUpdate() : __formBuyCalculateTotal($form);
                            }
                            else
                            {
                                $notice.text($respones.message).removeClass('show--success').addClass('notice--show');
                                $this.attr('data-procent', 0);
                                $isCart ? __cartUpdate() : __formBuyCalculateTotal($form);
                            }
                        }
                    });
                }
                else
                {
                    $.mlsAjax.preloaderHide({type: "frame", frame: $form});
                    $form.addClass('loader--pending');
                    $notice.removeClass('show--success');
                    $notice.removeClass('notice--show');
                    $this.attr('data-procent', 0);
                    $isCart ? __cartUpdate() : __formBuyCalculateTotal($form);
                }
            }, ms);
        });


        /* Соглашение */
        $document.on('change', '[data-rules-check]', function () {
            var $this = $(this);
            var $form = $this.parents('form');
            if ($(this).is(':checked')) {
                $form.find('[data-rules-btn]').prop('disabled', false);
                $form.find('[data-rules-error]').hide();
            } else {
                $form.find('[data-rules-btn]').prop('disabled', true);
                $form.find('[data-rules-error]').show();
            }
        });


        /* Соглашение корзины */
        $document.on('change', '[data-cart-rules-check]', function () {
            __cartUpdate();
        });


        /*
        Payment commission Stripe
         */
        $document.on('change', '[name="payment"]', function () {
            let payment = $(this);
            let form = payment.closest('[data-calc-quantity="form"]');
            //let commissionPercent = payment.attr('data-commission-percent') || 0;

            __formBuyCalculateTotal(form);
        });

    });
})($);


function addToCart(_this, $options)
{
    let $this = $(_this);

    $this.addClass('apply--cart');
    setTimeout(function (){
        $this.removeClass('apply--cart');
    }, 400);

    cartLS.add($options);
}


function promocodeCheck($value, $form)
{
    var $notice = $form.find('.fn_promocode_info');
    let $isCart = false;
    $.ajax({
        'url' : '/promocode-check?promocode=' + $value,
        'type' : 'GET',
        'dataType' : "json",
        'error' : function( $respones )
        {
            $.mlsAjax.preloaderHide({type: "frame", frame: $form});
            $form.removeClass('loader--pending');
            $notice.removeClass('show--success');
            $notice.removeClass('notice--show');
        },
        'success' : function( $respones )
        {
            $.mlsAjax.preloaderHide({type: "frame", frame: $form});
            $form.removeClass('loader--pending');
            if($respones.status)
            {
                $notice.text($respones.message).removeClass('notice--show').addClass('show--success');
                $this.attr('data-procent', $respones.procent);
                $isCart ? __cartUpdate() : __formBuyCalculateTotal($form);
            }
            else
            {
                $notice.text($respones.message).removeClass('show--success').addClass('notice--show');
                $this.attr('data-procent', 0);
                $isCart ? __cartUpdate() : __formBuyCalculateTotal($form);
            }
        }
    });
}



/*
FAQ
 */
var $faqButton = document.body.querySelectorAll('.fn_faq_button');
if($faqButton)
{
    for (let i = 0; i < $faqButton.length; i++) {
        $faqButton[i].addEventListener("click", __faqToggle);
    }
}
function __faqToggle() {
    var $this = this;

    if($this.classList.contains('current'))
    {
        $this.classList.remove('current');
        var $contentCurrent = $this.nextElementSibling;
        $contentCurrent.style['max-height'] = '35px';
        $contentCurrent.style['opacity'] = '0';
        return false;
    }

    for (let i = 0; i < $faqButton.length; i++) {
        $faqButton[i].classList.remove('current');
        var $contentAll = $faqButton[i].nextElementSibling;
        $contentAll.style['max-height'] = '35px';
        $contentAll.style['opacity'] = '0';
    }

    $this.classList.add('current');
    var $content = $this.nextElementSibling;
    var $height = $content.getElementsByClassName('fn_height')[0].offsetHeight;
    $content.style['max-height'] = $height + 'px';
    $content.style['opacity'] = '1';
}






/*
Form submit
 */
function orderSubmit($this) {
    if($this.classList.contains('form_submit')) {
        return false;
    }
    $this.classList.add('form_submit');

    $.mlsAjax.preloaderShow({type: "frame", frame: $($this)});

    let $formResponseMessageSuccess = $this.getElementsByClassName('fn_response_message_success')[0];
    $formResponseMessageSuccess.style.display = 'none';
    let $formResponseMessageError = $this.getElementsByClassName('fn_response_message_error')[0];
    $formResponseMessageError.style.display = 'none';

    let data = new FormData($this);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/feedback', true);

    xhr.onload = function (e) {
        // Check for 419 status
        if(xhr.status === 419) {
            $formResponseMessageError.style.display = 'block';
            $formResponseMessageError.innerHTML = 'Token has expired, please refresh the page and try again.';
            $this.classList.remove('form_submit');

            $.mlsAjax.preloaderHide({type: "frame", frame: $($this)});
            return;
        }

        let json = JSON.parse(xhr.responseText);
        let messageTemplates = [];
        for (var key in json.messages) {
            if (!json.messages.hasOwnProperty(key)) continue;
            var obj = json.messages[key];
            messageTemplates.push(obj);
        }

        if(json.status === 'error') {
            $formResponseMessageError.style.display = 'block';
            $formResponseMessageError.innerHTML = messageTemplates.join('<br>');
            for (var key in json.messages) {
                if (!json.messages.hasOwnProperty(key)) continue;
                var obj = json.messages[key];
                var input = $this.querySelector('[name="' + key + '"]');
                if (input) {
                    input.classList.add('input--error');
                    input.addEventListener('input', function() {
                        this.classList.remove('input--error');
                    }, { once: true });
                }
            }
        } else {
            $formResponseMessageSuccess.style.display = 'block';
            $formResponseMessageSuccess.innerHTML = messageTemplates.join('<br>');
            $this.reset();
        }

        $this.classList.remove('form_submit');
        $this.classList.add('form_submited');
        $.mlsAjax.preloaderHide({type: "frame", frame: $($this)});
        $this.setAttribute('data-status', json.status);
    };

    xhr.send(data);


    // Check recaptcha
    // grecaptcha.ready(function() {
    //     grecaptcha.execute('6LdJwv4ZAAAAAHo_wM7-XNmCfB-SsQMhY7xf4dB9', {action: 'order'}).then(function(token) {
    //
    //
    //
    //     });
    // });
    return false;
}



function orderClose($this) {
    var $formSubmited = document.getElementsByClassName('fn_form_submit')[0];

    $formSubmited.classList.remove( 'form-submit');
    $formSubmited.classList.remove( 'form-submited');
    $formSubmited.classList.remove('fn_form_submit');

    if($formSubmited.getAttribute('data-status') === 'true')
    {
        $formSubmited.setAttribute('data-status', 'false');
        $formSubmited.reset();

        var inputs = $formSubmited.querySelectorAll( '.fn_file_select' );
        Array.prototype.forEach.call( inputs, function( input ) {
            input.dispatchEvent(new Event('change', { 'bubbles': true }));
        });
    }
    return false;
}


function orderCloseImportant()
{
    orderClose(false);
    document.removeEventListener('click', orderCloseImportant);
}


// Change event handler for the checkbox
document.getElementById('stockCheckbox').addEventListener('change', function() {
    document.body.classList.toggle('filtered--products-by-only-stock', this.checked);
});

// Checking the checkbox status on page load
window.addEventListener('DOMContentLoaded', (event) => {
    const checkbox = document.getElementById('stockCheckbox');
    document.body.classList.toggle('filtered--products-by-only-stock', checkbox.checked);
});

document.addEventListener('DOMContentLoaded', () => {
    // Функция для проверки элементов
    function checkProductHeads() {
        const productHeads = document.querySelectorAll('.product__heads');

        productHeads.forEach((head) => {
            let nextElement = head.nextElementSibling;
            let hasAvailableItem = false;

            // Проверяем последующие элементы
            while (nextElement && !nextElement.classList.contains('product__heads')) {
                if (nextElement.classList.contains('product__item') && !nextElement.classList.contains('aviable--outstock')) {
                    hasAvailableItem = true;
                    break;
                }
                nextElement = nextElement.nextElementSibling;
            }

            // Если нет доступных элементов, добавляем класс
            if (!hasAvailableItem) {
                head.classList.add('heads-empty');
            }
        });
    }

    // Вызываем функцию
    checkProductHeads();
});



/* END */
