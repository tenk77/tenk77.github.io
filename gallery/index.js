/* Gallery Module */
(function(e) {
    e.fn.extend({
        smoothGallery: function(t) {
            var n = {
                animSpeed: 180,
                delaySpeed: 50,
                visibleRows: 2,
                animEasing: "easeOutQuart"
            };
            var t = e.extend(n, t);
            return this.each(function() {
                jQuery.fn.reverse = [].reverse;
                setHeight = function() {
                    var n = e(".sg-item").outerHeight(),
                        r = n * t.visibleRows,
                        i = parseInt(e(".sg-item").css("top")),
                        s = Math.round(Math.abs(i) / n) * n;
                    e(".sg-item").css("top", "-" + s + "px");
                    e(".sg").css("height", r)
                };
                modalHeight = function() {
                    if (e(".sg-modal").length) {
                        var t = parseInt(e(".sg-modal img").height()),
                            n = parseInt(e(window).height());
                        if (n < t + 50) {
                            e(".sg-modal img").css("height", n - 20);
                            e("#bug").html("smaller")
                        }
// else {
//     e(".sg-modal img").css("height", "auto");
//     e("#bug").html(t + "" + n)
// }
                    }
                };
                e(".sg-up").addClass("sg-disabled");
                e(".sg").show();
                setHeight();
                e(window).resize(function() {
                    setHeight();
                    modalHeight()
                });
                slideDown = function() {
                    if (e(".sg-item").is(":animated")) {
                        return false
                    } else {
                        var n = parseInt(e(".sg-item").last().css("top")),
                            r = parseInt(e(".sg-item").last().outerHeight()),
                            i = parseInt(e(".sg-item").last().outerWidth()),
                            s = e(".sg-item").length,
                            o = parseInt(e(".sg").width()),
                            u = parseInt(e(".sg").height()),
                            a = Math.floor(o / i),
                            f = Math.ceil(s / a),
                            l = f * r,
                            c = u / r * r;
                        if (n <= -(l - c)) {} else {
                            e(".sg-up").removeClass("sg-disabled");
                            e(".sg-item").each(function(n) {
                                itemHeight2 = parseInt(e(".sg-item").outerHeight());
                                e(this).delay(t.delaySpeed * n).animate({
                                    top: "-=" + itemHeight2 + "px"
                                }, t.animSpeed, t.animEasing)
                            });
                            if (n <= -(l - c) + r) {
                                e(".sg-down").addClass("sg-disabled")
                            }
                        }
                        event.preventDefault()
                    }
                };
                e(document.body).on("click", ".sg-down", function(e) {
                    slideDown()
                });
                e(document).keydown(function(e) {
                    if (e.keyCode == 40) {
                        slideDown();
                        return false
                    }
                });
                slideUp = function() {
                    if (e(".sg-item").is(":animated")) {
                        return false
                    } else {
                        if (e(".sg-item").first().css("top") == "0px") {} else {
                            e(".sg-down").removeClass("sg-disabled");
                            e(".sg-item").reverse().each(function(n) {
                                itemHeight2 = parseInt(e(".sg-item").outerHeight());
                                e(this).delay(t.delaySpeed * n).animate({
                                    top: "+=" + itemHeight2 + "px"
                                }, t.animSpeed, t.animEasing)
                            });
                            var n = parseInt(e(".sg-item").last().outerHeight());
                            if (parseInt(e(".sg-item").first().css("top")) == 0 - n) {
                                e(".sg-up").addClass("sg-disabled")
                            }
                        }
                        event.preventDefault()
                    }
                };
                e(document.body).on("click", ".sg-up", function(e) {
                    slideUp()
                });
                e(document).keydown(function(e) {
                    if (e.keyCode == 38) {
                        slideUp();
                        return false
                    }
                });
                e(document.body).on("click", ".sg-item a", function(t) {
                    var n = e(this).attr("title"),
                        r = e(this).attr("href");
                    if (e(this).attr("title")) {
                        e("body").append('<div class="sg-modal"><div class="sg-modal-h"><div class="sg-modal-v"><div class="sg-modal-img-wrap"><img src="' + r + '"/><a href="#" id="sg-close">&times;</a></div><br><div class="sg-caption">' + n + "</div></div></div></div>")
                    } else {
                        e("body").append('<div class="sg-modal"><div class="sg-modal-h"><div class="sg-modal-v"><div class="sg-modal-img-wrap"><img src="' + r + '"/><a href="#" id="sg-close">&times;</a></div></div></div></div>')
                    }
                    e(".sg-modal").fadeIn(300, function() {
                        modalHeight()
                    });
                    t.preventDefault()
                });
                e(document.body).on("click", "#sg-close", function(t) {
                    e(".sg-modal").fadeOut(300, function() {
                        e(this).remove()
                    });
                    t.preventDefault()
                })
            })
        }
    })
})(jQuery);