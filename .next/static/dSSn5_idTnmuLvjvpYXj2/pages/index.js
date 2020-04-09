(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    '+E+J': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var r = d(n('Yz+Y')),
        o = d(n('iCc5')),
        i = d(n('V7oC')),
        a = d(n('FYw3')),
        s = d(n('mRg0')),
        l = n('q1tI'),
        u = d(l),
        c = d(n('17x9'));
      function d(e) {
        return e && e.__esModule ? e : {default: e};
      }
      var f = n('ojxP');
      f('https://platform.twitter.com/widgets.js', 'twitter-embed');
      var p = (function(e) {
        function t() {
          return (
            (0, o.default)(this, t),
            (0, a.default)(
              this,
              (t.__proto__ || (0, r.default)(t)).apply(this, arguments)
            )
          );
        }
        return (
          (0, s.default)(t, e),
          (0, i.default)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this;
                f.ready('twitter-embed', function() {
                  window.twttr
                    ? window.twttr.widgets.createHashtagButton(
                        e.props.tag,
                        e.refs.embedContainer,
                        e.props.options
                      )
                    : console.error(
                        'Failure to load window.twttr, aborting load.'
                      );
                });
              }
            },
            {
              key: 'render',
              value: function() {
                return u.default.createElement('div', {ref: 'embedContainer'});
              }
            }
          ]),
          t
        );
      })(l.Component);
      (p.propTypes = {
        tag: c.default.string.isRequired,
        options: c.default.object
      }),
        (t.default = p);
    },
    '+PBF': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0}),
        (t.TwitterOnAirButton = t.TwitterVideoEmbed = t.TwitterDMButton = t.TwitterMomentShare = t.TwitterTweetEmbed = t.TwitterMentionButton = t.TwitterHashtagButton = t.TwitterFollowButton = t.TwitterShareButton = t.TwitterTimelineEmbed = void 0);
      var r = p(n('7g+e')),
        o = p(n('7dpD')),
        i = p(n('IXnv')),
        a = p(n('+E+J')),
        s = p(n('n3sa')),
        l = p(n('2NqX')),
        u = p(n('TyG7')),
        c = p(n('BWgq')),
        d = p(n('HnIM')),
        f = p(n('n3Kd'));
      function p(e) {
        return e && e.__esModule ? e : {default: e};
      }
      (t.TwitterTimelineEmbed = r.default),
        (t.TwitterShareButton = o.default),
        (t.TwitterFollowButton = i.default),
        (t.TwitterHashtagButton = a.default),
        (t.TwitterMentionButton = s.default),
        (t.TwitterTweetEmbed = l.default),
        (t.TwitterMomentShare = u.default),
        (t.TwitterDMButton = c.default),
        (t.TwitterVideoEmbed = d.default),
        (t.TwitterOnAirButton = f.default);
    },
    '2NqX': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var r = d(n('Yz+Y')),
        o = d(n('iCc5')),
        i = d(n('V7oC')),
        a = d(n('FYw3')),
        s = d(n('mRg0')),
        l = n('q1tI'),
        u = d(l),
        c = d(n('17x9'));
      function d(e) {
        return e && e.__esModule ? e : {default: e};
      }
      var f = n('ojxP');
      f('https://platform.twitter.com/widgets.js', 'twitter-embed');
      var p = (function(e) {
        function t() {
          return (
            (0, o.default)(this, t),
            (0, a.default)(
              this,
              (t.__proto__ || (0, r.default)(t)).apply(this, arguments)
            )
          );
        }
        return (
          (0, s.default)(t, e),
          (0, i.default)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this;
                f.ready('twitter-embed', function() {
                  window.twttr
                    ? window.twttr.widgets.createTweet(
                        e.props.tweetId,
                        e.refs.embedContainer,
                        e.props.options
                      )
                    : console.error(
                        'Failure to load window.twttr, aborting load.'
                      );
                });
              }
            },
            {
              key: 'render',
              value: function() {
                return u.default.createElement('div', {ref: 'embedContainer'});
              }
            }
          ]),
          t
        );
      })(l.Component);
      (p.propTypes = {
        tweetId: c.default.string.isRequired,
        options: c.default.object
      }),
        (t.default = p);
    },
    '7dpD': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var r = d(n('Yz+Y')),
        o = d(n('iCc5')),
        i = d(n('V7oC')),
        a = d(n('FYw3')),
        s = d(n('mRg0')),
        l = n('q1tI'),
        u = d(l),
        c = d(n('17x9'));
      function d(e) {
        return e && e.__esModule ? e : {default: e};
      }
      var f = n('ojxP');
      f('https://platform.twitter.com/widgets.js', 'twitter-embed');
      var p = (function(e) {
        function t() {
          return (
            (0, o.default)(this, t),
            (0, a.default)(
              this,
              (t.__proto__ || (0, r.default)(t)).apply(this, arguments)
            )
          );
        }
        return (
          (0, s.default)(t, e),
          (0, i.default)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this;
                f.ready('twitter-embed', function() {
                  window.twttr
                    ? window.twttr.widgets.createShareButton(
                        e.props.url,
                        e.refs.embedContainer,
                        e.props.options
                      )
                    : console.error(
                        'Failure to load window.twttr, aborting load.'
                      );
                });
              }
            },
            {
              key: 'render',
              value: function() {
                return u.default.createElement('div', {ref: 'embedContainer'});
              }
            }
          ]),
          t
        );
      })(l.Component);
      (p.propTypes = {
        url: c.default.string.isRequired,
        options: c.default.object
      }),
        (t.default = p);
    },
    '7g+e': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var r = p(n('P2sY')),
        o = p(n('Yz+Y')),
        i = p(n('iCc5')),
        a = p(n('V7oC')),
        s = p(n('FYw3')),
        l = p(n('mRg0')),
        u = n('q1tI'),
        c = p(u),
        d = p(n('17x9')),
        f = p(n('dAtF'));
      function p(e) {
        return e && e.__esModule ? e : {default: e};
      }
      var h = n('ojxP');
      h('https://platform.twitter.com/widgets.js', 'twitter-embed');
      var v = (function(e) {
        function t() {
          return (
            (0, i.default)(this, t),
            (0, s.default)(
              this,
              (t.__proto__ || (0, o.default)(t)).apply(this, arguments)
            )
          );
        }
        return (
          (0, l.default)(t, e),
          (0, a.default)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this;
                h.ready('twitter-embed', function() {
                  if (window.twttr) {
                    var t = (0, r.default)({}, e.props.options);
                    e.props.autoHeight &&
                      (t.height =
                        e.refs.embedContainer.parentNode.offsetHeight),
                      e.props.theme && (t.theme = e.props.theme),
                      e.props.linkColor && (t.linkColor = e.props.linkColor),
                      e.props.borderColor &&
                        (t.borderColor = e.props.borderColor),
                      e.props.lang && (t.lang = e.props.lang),
                      (t.chrome = ''),
                      e.props.noHeader && (t.chrome = t.chrome + ' noheader'),
                      e.props.noFooter && (t.chrome = t.chrome + ' nofooter'),
                      e.props.noBorders && (t.chrome = t.chrome + ' noborders'),
                      e.props.noScrollbar &&
                        (t.chrome = t.chrome + ' noscrollbar'),
                      e.props.transparent &&
                        (t.chrome = t.chrome + ' transparent'),
                      window.twttr.widgets.createTimeline(
                        {
                          sourceType: e.props.sourceType,
                          screenName: e.props.screenName,
                          userId: e.props.userId,
                          ownerScreenName: e.props.ownerScreenName,
                          slug: e.props.slug,
                          id: e.props.id || e.props.widgetId,
                          url: e.props.url
                        },
                        e.refs.embedContainer,
                        t
                      );
                  } else console.error('Failure to load window.twttr, aborting load.');
                });
              }
            },
            {
              key: 'render',
              value: function() {
                return c.default.createElement('div', {ref: 'embedContainer'});
              }
            }
          ]),
          t
        );
      })(u.Component);
      (v.propTypes = {
        sourceType: d.default.oneOf([
          'profile',
          'likes',
          'list',
          'collection',
          'URL',
          'widget'
        ]).isRequired,
        screenName: (0, f.default)(d.default.string, function(e) {
          return (
            !e.hasOwnProperty('userId') &&
            ('profile' === e.sourceType || 'likes' === e.sourceType)
          );
        }),
        userId: (0, f.default)(d.default.number, function(e) {
          return (
            !e.hasOwnProperty('screenName') &&
            ('profile' === e.sourceType || 'likes' === e.sourceType)
          );
        }),
        ownerScreenName: (0, f.default)(d.default.string, function(e) {
          return 'list' === e.sourceType && !e.hasOwnProperty('id');
        }),
        slug: (0, f.default)(d.default.string, function(e) {
          return 'list' === e.sourceType && !e.hasOwnProperty('id');
        }),
        id: (0, f.default)(
          d.default.oneOfType([d.default.number, d.default.string]),
          function(e) {
            return (
              ('list' === e.sourceType &&
                !e.hasOwnProperty('ownerScreenName') &&
                !e.hasOwnProperty('slug')) ||
              'collection' === e.sourceType
            );
          }
        ),
        url: (0, f.default)(d.default.string, function(e) {
          return 'url' === e.sourceType;
        }),
        widgetId: (0, f.default)(d.default.string, function(e) {
          return 'widget' === e.sourceType;
        }),
        options: d.default.object,
        autoHeight: d.default.bool,
        theme: d.default.oneOf(['dark', 'light']),
        linkColor: d.default.string,
        borderColor: d.default.string,
        noHeader: d.default.bool,
        noFooter: d.default.bool,
        noBorders: d.default.bool,
        noScrollbar: d.default.bool,
        transparent: d.default.bool,
        lang: d.default.string
      }),
        (t.default = v);
    },
    '8//2': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0}), (t.default = void 0);
      var r = l(n('q1tI')),
        o = n('ueNE'),
        i = l(n('pIsd')),
        a = l(n('BBPU')),
        s = n('x9Za');
      function l(e) {
        return e && e.__esModule ? e : {default: e};
      }
      function u(e) {
        return (u =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function c() {
        return (c =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(n, !0).forEach(function(t) {
                b(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function h(e) {
        return (h = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function v(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var g = (0, s.canUseDOM)() && n('jpXb'),
        m = (function(e) {
          function t(e) {
            var n;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
              (n = (function(e, t) {
                return !t || ('object' !== u(t) && 'function' !== typeof t)
                  ? v(e)
                  : t;
              })(this, h(t).call(this, e))),
              b(v(n), 'innerSliderRefHandler', function(e) {
                return (n.innerSlider = e);
              }),
              b(v(n), 'slickPrev', function() {
                return n.innerSlider.slickPrev();
              }),
              b(v(n), 'slickNext', function() {
                return n.innerSlider.slickNext();
              }),
              b(v(n), 'slickGoTo', function(e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                return n.innerSlider.slickGoTo(e, t);
              }),
              b(v(n), 'slickPause', function() {
                return n.innerSlider.pause('paused');
              }),
              b(v(n), 'slickPlay', function() {
                return n.innerSlider.autoPlay('play');
              }),
              (n.state = {breakpoint: null}),
              (n._responsiveMediaHandlers = []),
              n
            );
          }
          var n, l, d;
          return (
            (function(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {value: e, writable: !0, configurable: !0}
              })),
                t && y(e, t);
            })(t, e),
            (n = t),
            (l = [
              {
                key: 'media',
                value: function(e, t) {
                  g.register(e, t),
                    this._responsiveMediaHandlers.push({query: e, handler: t});
                }
              },
              {
                key: 'UNSAFE_componentWillMount',
                value: function() {
                  var e = this;
                  if (this.props.responsive) {
                    var t = this.props.responsive.map(function(e) {
                      return e.breakpoint;
                    });
                    t.sort(function(e, t) {
                      return e - t;
                    }),
                      t.forEach(function(n, r) {
                        var o;
                        (o =
                          0 === r
                            ? (0, i.default)({minWidth: 0, maxWidth: n})
                            : (0, i.default)({
                                minWidth: t[r - 1] + 1,
                                maxWidth: n
                              })),
                          (0, s.canUseDOM)() &&
                            e.media(o, function() {
                              e.setState({breakpoint: n});
                            });
                      });
                    var n = (0, i.default)({minWidth: t.slice(-1)[0]});
                    (0, s.canUseDOM)() &&
                      this.media(n, function() {
                        e.setState({breakpoint: null});
                      });
                  }
                }
              },
              {
                key: 'UNSAFE_componentWillUnmount',
                value: function() {
                  this._responsiveMediaHandlers.forEach(function(e) {
                    g.unregister(e.query, e.handler);
                  });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e,
                    t,
                    n = this;
                  (e = this.state.breakpoint
                    ? 'unslick' ===
                      (t = this.props.responsive.filter(function(e) {
                        return e.breakpoint === n.state.breakpoint;
                      }))[0].settings
                      ? 'unslick'
                      : f({}, a.default, {}, this.props, {}, t[0].settings)
                    : f({}, a.default, {}, this.props)).centerMode &&
                    (e.slidesToScroll, (e.slidesToScroll = 1)),
                    e.fade &&
                      (e.slidesToShow,
                      e.slidesToScroll,
                      (e.slidesToShow = 1),
                      (e.slidesToScroll = 1));
                  var i = r.default.Children.toArray(this.props.children);
                  (i = i.filter(function(e) {
                    return 'string' === typeof e ? !!e.trim() : !!e;
                  })),
                    e.variableWidth &&
                      (e.rows > 1 || e.slidesPerRow > 1) &&
                      (console.warn(
                        'variableWidth is not supported in case of rows > 1 or slidesPerRow > 1'
                      ),
                      (e.variableWidth = !1));
                  for (
                    var s = [], l = null, u = 0;
                    u < i.length;
                    u += e.rows * e.slidesPerRow
                  ) {
                    for (
                      var d = [], p = u;
                      p < u + e.rows * e.slidesPerRow;
                      p += e.slidesPerRow
                    ) {
                      for (
                        var h = [], v = p;
                        v < p + e.slidesPerRow &&
                        (e.variableWidth &&
                          i[v].props.style &&
                          (l = i[v].props.style.width),
                        !(v >= i.length));
                        v += 1
                      )
                        h.push(
                          r.default.cloneElement(i[v], {
                            key: 100 * u + 10 * p + v,
                            tabIndex: -1,
                            style: {
                              width: ''.concat(100 / e.slidesPerRow, '%'),
                              display: 'inline-block'
                            }
                          })
                        );
                      d.push(
                        r.default.createElement('div', {key: 10 * u + p}, h)
                      );
                    }
                    e.variableWidth
                      ? s.push(
                          r.default.createElement(
                            'div',
                            {key: u, style: {width: l}},
                            d
                          )
                        )
                      : s.push(r.default.createElement('div', {key: u}, d));
                  }
                  if ('unslick' === e) {
                    var y = 'regular slider ' + (this.props.className || '');
                    return r.default.createElement('div', {className: y}, s);
                  }
                  return (
                    s.length <= e.slidesToShow && (e.unslick = !0),
                    r.default.createElement(
                      o.InnerSlider,
                      c({ref: this.innerSliderRefHandler}, e),
                      s
                    )
                  );
                }
              }
            ]) && p(n.prototype, l),
            d && p(n, d),
            t
          );
        })(r.default.Component);
      t.default = m;
    },
    '9/5/': function(e, t, n) {
      (function(t) {
        var n = 'Expected a function',
          r = NaN,
          o = '[object Symbol]',
          i = /^\s+|\s+$/g,
          a = /^[-+]0x[0-9a-f]+$/i,
          s = /^0b[01]+$/i,
          l = /^0o[0-7]+$/i,
          u = parseInt,
          c = 'object' == typeof t && t && t.Object === Object && t,
          d = 'object' == typeof self && self && self.Object === Object && self,
          f = c || d || Function('return this')(),
          p = Object.prototype.toString,
          h = Math.max,
          v = Math.min,
          y = function() {
            return f.Date.now();
          };
        function b(e) {
          var t = typeof e;
          return !!e && ('object' == t || 'function' == t);
        }
        function g(e) {
          if ('number' == typeof e) return e;
          if (
            (function(e) {
              return (
                'symbol' == typeof e ||
                ((function(e) {
                  return !!e && 'object' == typeof e;
                })(e) &&
                  p.call(e) == o)
              );
            })(e)
          )
            return r;
          if (b(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = b(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = e.replace(i, '');
          var n = s.test(e);
          return n || l.test(e) ? u(e.slice(2), n ? 2 : 8) : a.test(e) ? r : +e;
        }
        e.exports = function(e, t, r) {
          var o,
            i,
            a,
            s,
            l,
            u,
            c = 0,
            d = !1,
            f = !1,
            p = !0;
          if ('function' != typeof e) throw new TypeError(n);
          function m(t) {
            var n = o,
              r = i;
            return (o = i = void 0), (c = t), (s = e.apply(r, n));
          }
          function w(e) {
            var n = e - u;
            return void 0 === u || n >= t || n < 0 || (f && e - c >= a);
          }
          function S() {
            var e = y();
            if (w(e)) return O(e);
            l = setTimeout(
              S,
              (function(e) {
                var n = t - (e - u);
                return f ? v(n, a - (e - c)) : n;
              })(e)
            );
          }
          function O(e) {
            return (l = void 0), p && o ? m(e) : ((o = i = void 0), s);
          }
          function k() {
            var e = y(),
              n = w(e);
            if (((o = arguments), (i = this), (u = e), n)) {
              if (void 0 === l)
                return (function(e) {
                  return (c = e), (l = setTimeout(S, t)), d ? m(e) : s;
                })(u);
              if (f) return (l = setTimeout(S, t)), m(u);
            }
            return void 0 === l && (l = setTimeout(S, t)), s;
          }
          return (
            (t = g(t) || 0),
            b(r) &&
              ((d = !!r.leading),
              (a = (f = 'maxWait' in r) ? h(g(r.maxWait) || 0, t) : a),
              (p = 'trailing' in r ? !!r.trailing : p)),
            (k.cancel = function() {
              void 0 !== l && clearTimeout(l),
                (c = 0),
                (o = u = i = l = void 0);
            }),
            (k.flush = function() {
              return void 0 === l ? s : O(y());
            }),
            k
          );
        };
      }.call(this, n('yLpj')));
    },
    BBPU: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0}), (t.default = void 0);
      var r,
        o = (r = n('q1tI')) && r.__esModule ? r : {default: r};
      var i = {
        accessibility: !0,
        adaptiveHeight: !1,
        afterChange: null,
        appendDots: function(e) {
          return o.default.createElement('ul', {style: {display: 'block'}}, e);
        },
        arrows: !0,
        autoplay: !1,
        autoplaySpeed: 3e3,
        beforeChange: null,
        centerMode: !1,
        centerPadding: '50px',
        className: '',
        cssEase: 'ease',
        customPaging: function(e) {
          return o.default.createElement('button', null, e + 1);
        },
        dots: !1,
        dotsClass: 'slick-dots',
        draggable: !0,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: null,
        nextArrow: null,
        onEdge: null,
        onInit: null,
        onLazyLoadError: null,
        onReInit: null,
        pauseOnDotsHover: !1,
        pauseOnFocus: !1,
        pauseOnHover: !0,
        prevArrow: null,
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: 'div',
        slidesPerRow: 1,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
        swipe: !0,
        swipeEvent: null,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        waitForAnimate: !0
      };
      t.default = i;
    },
    BJfS: function(e, t) {
      e.exports = function(e) {
        return e
          .replace(/[A-Z]/g, function(e) {
            return '-' + e.toLowerCase();
          })
          .toLowerCase();
      };
    },
    BWgq: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var r = d(n('Yz+Y')),
        o = d(n('iCc5')),
        i = d(n('V7oC')),
        a = d(n('FYw3')),
        s = d(n('mRg0')),
        l = n('q1tI'),
        u = d(l),
        c = d(n('17x9'));
      function d(e) {
        return e && e.__esModule ? e : {default: e};
      }
      var f = n('ojxP');
      f('https://platform.twitter.com/widgets.js', 'twitter-embed');
      var p = (function(e) {
        function t() {
          return (
            (0, o.default)(this, t),
            (0, a.default)(
              this,
              (t.__proto__ || (0, r.default)(t)).apply(this, arguments)
            )
          );
        }
        return (
          (0, s.default)(t, e),
          (0, i.default)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this;
                f.ready('twitter-embed', function() {
                  window.twttr
                    ? window.twttr.widgets.createDMButton(
                        e.props.id,
                        e.refs.embedContainer,
                        e.props.options
                      )
                    : console.error(
                        'Failure to load window.twttr, aborting load.'
                      );
                });
              }
            },
            {
              key: 'render',
              value: function() {
                return u.default.createElement('div', {ref: 'embedContainer'});
              }
            }
          ]),
          t
        );
      })(l.Component);
      (p.propTypes = {
        id: c.default.number.isRequired,
        options: c.default.object
      }),
        (t.default = p);
    },
    HnIM: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var r = d(n('Yz+Y')),
        o = d(n('iCc5')),
        i = d(n('V7oC')),
        a = d(n('FYw3')),
        s = d(n('mRg0')),
        l = n('q1tI'),
        u = d(l),
        c = d(n('17x9'));
      function d(e) {
        return e && e.__esModule ? e : {default: e};
      }
      var f = n('ojxP');
      f('https://platform.twitter.com/widgets.js', 'twitter-embed');
      var p = (function(e) {
        function t() {
          return (
            (0, o.default)(this, t),
            (0, a.default)(
              this,
              (t.__proto__ || (0, r.default)(t)).apply(this, arguments)
            )
          );
        }
        return (
          (0, s.default)(t, e),
          (0, i.default)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this;
                f.ready('twitter-embed', function() {
                  window.twttr
                    ? window.twttr.widgets.createVideo(
                        e.props.id,
                        e.refs.embedContainer
                      )
                    : console.error(
                        'Failure to load window.twttr, aborting load.'
                      );
                });
              }
            },
            {
              key: 'render',
              value: function() {
                return u.default.createElement('div', {ref: 'embedContainer'});
              }
            }
          ]),
          t
        );
      })(l.Component);
      (p.propTypes = {id: c.default.string.isRequired}), (t.default = p);
    },
    IX3V: function(e, t) {
      e.exports = {
        isFunction: function(e) {
          return 'function' === typeof e;
        },
        isArray: function(e) {
          return '[object Array]' === Object.prototype.toString.apply(e);
        },
        each: function(e, t) {
          for (var n = 0, r = e.length; n < r && !1 !== t(e[n], n); n++);
        }
      };
    },
    IXnv: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var r = d(n('Yz+Y')),
        o = d(n('iCc5')),
        i = d(n('V7oC')),
        a = d(n('FYw3')),
        s = d(n('mRg0')),
        l = n('q1tI'),
        u = d(l),
        c = d(n('17x9'));
      function d(e) {
        return e && e.__esModule ? e : {default: e};
      }
      var f = n('ojxP');
      f('https://platform.twitter.com/widgets.js', 'twitter-embed');
      var p = (function(e) {
        function t() {
          return (
            (0, o.default)(this, t),
            (0, a.default)(
              this,
              (t.__proto__ || (0, r.default)(t)).apply(this, arguments)
            )
          );
        }
        return (
          (0, s.default)(t, e),
          (0, i.default)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this;
                f.ready('twitter-embed', function() {
                  window.twttr
                    ? window.twttr.widgets.createFollowButton(
                        e.props.screenName,
                        e.refs.embedContainer,
                        e.props.options
                      )
                    : console.error(
                        'Failure to load window.twttr, aborting load.'
                      );
                });
              }
            },
            {
              key: 'render',
              value: function() {
                return u.default.createElement('div', {ref: 'embedContainer'});
              }
            }
          ]),
          t
        );
      })(l.Component);
      (p.propTypes = {
        screenName: c.default.string.isRequired,
        options: c.default.object
      }),
        (t.default = p);
    },
    KOnL: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0}),
        (t.NextArrow = t.PrevArrow = void 0);
      var r = a(n('q1tI')),
        o = a(n('TSYQ')),
        i = n('x9Za');
      function a(e) {
        return e && e.__esModule ? e : {default: e};
      }
      function s(e) {
        return (s =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function l() {
        return (l =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(n, !0).forEach(function(t) {
                d(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function h(e, t, n) {
        return t && p(e.prototype, t), n && p(e, n), e;
      }
      function v(e, t) {
        return !t || ('object' !== s(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function b(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {value: e, writable: !0, configurable: !0}
        })),
          t && g(e, t);
      }
      function g(e, t) {
        return (g =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var m = (function(e) {
        function t() {
          return f(this, t), v(this, y(t).apply(this, arguments));
        }
        return (
          b(t, e),
          h(t, [
            {
              key: 'clickHandler',
              value: function(e, t) {
                t && t.preventDefault(), this.props.clickHandler(e, t);
              }
            },
            {
              key: 'render',
              value: function() {
                var e = {'slick-arrow': !0, 'slick-prev': !0},
                  t = this.clickHandler.bind(this, {message: 'previous'});
                !this.props.infinite &&
                  (0 === this.props.currentSlide ||
                    this.props.slideCount <= this.props.slidesToShow) &&
                  ((e['slick-disabled'] = !0), (t = null));
                var n = {
                    key: '0',
                    'data-role': 'none',
                    className: (0, o.default)(e),
                    style: {display: 'block'},
                    onClick: t
                  },
                  i = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                  };
                return this.props.prevArrow
                  ? r.default.cloneElement(
                      this.props.prevArrow,
                      c({}, n, {}, i)
                    )
                  : r.default.createElement(
                      'button',
                      l({key: '0', type: 'button'}, n),
                      ' ',
                      'Previous'
                    );
              }
            }
          ]),
          t
        );
      })(r.default.PureComponent);
      t.PrevArrow = m;
      var w = (function(e) {
        function t() {
          return f(this, t), v(this, y(t).apply(this, arguments));
        }
        return (
          b(t, e),
          h(t, [
            {
              key: 'clickHandler',
              value: function(e, t) {
                t && t.preventDefault(), this.props.clickHandler(e, t);
              }
            },
            {
              key: 'render',
              value: function() {
                var e = {'slick-arrow': !0, 'slick-next': !0},
                  t = this.clickHandler.bind(this, {message: 'next'});
                (0, i.canGoNext)(this.props) ||
                  ((e['slick-disabled'] = !0), (t = null));
                var n = {
                    key: '1',
                    'data-role': 'none',
                    className: (0, o.default)(e),
                    style: {display: 'block'},
                    onClick: t
                  },
                  a = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                  };
                return this.props.nextArrow
                  ? r.default.cloneElement(
                      this.props.nextArrow,
                      c({}, n, {}, a)
                    )
                  : r.default.createElement(
                      'button',
                      l({key: '1', type: 'button'}, n),
                      ' ',
                      'Next'
                    );
              }
            }
          ]),
          t
        );
      })(r.default.PureComponent);
      t.NextArrow = w;
    },
    OS56: function(e, t, n) {
      'use strict';
      var r;
      Object.defineProperty(t, '__esModule', {value: !0}), (t.default = void 0);
      var o = ((r = n('8//2')) && r.__esModule ? r : {default: r}).default;
      t.default = o;
    },
    RNiq: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('ODXe'),
        o = n('h4VS'),
        i = n('q1tI'),
        a = n.n(i),
        s = n('vOnD'),
        l = n('8Kt/'),
        u = n.n(l),
        c = n('ff+w'),
        d = n('hd/a'),
        f = n('rQ2n'),
        p = n('d+M8'),
        h = n('xY5u'),
        v = n('o9Sz'),
        y = n('YFqc'),
        b = n.n(y),
        g = i.createElement;
      function m() {
        var e = Object(o.a)([
          '\n  @media screen and (min-width: 768px) {\n    display: flex;\n  }\n'
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = Object(o.a)([
          '\n  @media screen and (min-width: 768px) {\n    width: 33.33vw;\n    display: inline-block;\n  }\n'
        ]);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = Object(o.a)([
          '\n  display: block;\n  height: 200px;\n  position: relative;\n  background-color: ',
          ';\n  color: white;\n  text-decoration: none;\n\n  @media screen and (min-width: 768px) {\n    height: 350px;\n  }\n\n  @media screen and (min-width: 1241px) {\n    height: 550px;\n  }\n\n  &:hover {\n    ',
          ' {\n      opacity: 0;\n    }\n\n    ',
          ' {\n      line-height: 30px;\n      padding-top: 30px;\n\n      @media screen and (min-width: 1241px) {\n        line-height: 250px;\n      }\n    }\n\n    ',
          ' {\n      opacity: 1;\n      top: 40%;\n\n      @media screen and (min-width: 768px) {\n        top: 25%;\n      }\n\n      @media screen and (min-width: 1241px) {\n        top: 40%;\n      }\n    }\n  }\n'
        ]);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = Object(o.a)([
          '\n  position: absolute;\n  top: 70%;\n  bottom: 0;\n  left: 50px;\n  right: 50px;\n  transition: opacity 0.3s;\n  opacity: 0;\n  text-align: center;\n  transition: opacity 0.3s, top 0.3s;\n  font-size: 16px;\n  line-height: 22px;\n'
        ]);
        return (
          (O = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = Object(o.a)([
          '\n  height: 200px;\n  line-height: 200px;\n  text-align: center;\n  font-size: 30px;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: line-height 0.3s, padding 0.3s;\n\n  @media screen and (min-width: 768px) {\n    line-height: 350px;\n  }\n\n  @media screen and (min-width: 1241px) {\n    line-height: 550px;\n  }\n'
        ]);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      var _ = s.a.h2(k()),
        x = s.a.p(O()),
        T = s.a.a(
          S(),
          function(e) {
            return e.colour;
          },
          h.a,
          _,
          x
        ),
        j = s.a.li(w()),
        E = s.a.ul(m()),
        M = function(e) {
          var t = e.link,
            n = e.title,
            r = e.deck,
            o = e.image,
            i = e.colour;
          return g(
            j,
            {key: n},
            g(
              b.a,
              {href: t},
              g(T, {colour: i}, g(h.a, {url: o}), g(_, null, n), g(x, null, r))
            )
          );
        },
        P = function(e) {
          var t = e.cta;
          return g(E, null, t.map(M));
        },
        C = n('OS56'),
        L = n.n(C),
        z = i.createElement;
      function D() {
        var e = Object(o.a)([
          '\n  margin-bottom: 40px;\n\n  .slick-dots button::before {\n    font-size: 14px;\n  }\n'
        ]);
        return (
          (D = function() {
            return e;
          }),
          e
        );
      }
      function R() {
        var e = Object(o.a)([
          '\n  font-size: 24px;\n  line-height: 30px;\n  color: gray;\n  text-align: center;\n'
        ]);
        return (
          (R = function() {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = Object(o.a)([
          '\n  font-size: 24px;\n  line-height: 30px;\n  color: #333;\n  padding: 20px 40px 0;\n  text-align: center;\n'
        ]);
        return (
          (I = function() {
            return e;
          }),
          e
        );
      }
      var H = {
          dots: !0,
          infinite: !0,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !1,
          fade: !0
        },
        N = s.a.blockquote(I()),
        W = s.a.div(R()),
        q = Object(s.a)(L.a)(D()),
        A = function(e) {
          var t = e.quote,
            n = e.author;
          return z('div', {key: t}, z(N, null, t), z(W, null, n));
        },
        Y = function(e) {
          var t = e.quotes;
          return z(q, H, t.map(A));
        },
        F = n('lHlY'),
        B = i.createElement;
      function X() {
        var e = Object(o.a)([
          "\n  background-image: url('",
          "');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"
        ]);
        return (
          (X = function() {
            return e;
          }),
          e
        );
      }
      function V() {
        var e = Object(o.a)([
          '\n  background-color: ',
          ';\n  color: white;\n  padding: 35px;\n  line-height: 30px;\n  font-size: 16px;\n  margin-bottom: 20px;\n\n  @media screen and (min-width: 991px) {\n    width: calc(40% - 80px);\n    float: left;\n    margin-right: 20px;\n    height: 430px;\n    font-size: 24px;\n  }\n'
        ]);
        return (
          (V = function() {
            return e;
          }),
          e
        );
      }
      var U = s.a.div(V(), function(e) {
          return e.colour;
        }),
        G = s.a.div(X(), function(e) {
          return e.src;
        }),
        K = function(e) {
          var t = e.colour,
            n = e.text,
            r = e.image;
          return B(
            f.a,
            null,
            B(U, {colour: t, dangerouslySetInnerHTML: {__html: n}}),
            B(v.a, {mobileHeight: '400px'}, B(G, {src: r})),
            B(F.a, null)
          );
        },
        Z = n('wd/R'),
        J = n.n(Z),
        Q = n('pRT7'),
        $ = a.a.createElement;
      function ee() {
        var e = Object(o.a)([
          '\n  background: ',
          ';\n\n  @media screen and (min-width: 991px) {\n    float: right;\n    width: 40%;\n    height: 500px;\n    margin-bottom: 20px;\n  }\n'
        ]);
        return (
          (ee = function() {
            return e;
          }),
          e
        );
      }
      function te() {
        var e = Object(o.a)([
          '\n  background-color: ',
          ';\n  color: white;\n  padding: 0 35px 35px;\n\n  @media screen and (min-width: 991px) {\n    padding-bottom: 154px;\n    margin-bottom: 20px;\n  }\n'
        ]);
        return (
          (te = function() {
            return e;
          }),
          e
        );
      }
      function ne() {
        var e = Object(o.a)(['\n  color: white;\n']);
        return (
          (ne = function() {
            return e;
          }),
          e
        );
      }
      function re() {
        var e = Object(o.a)(['\n  color: ', ';\n']);
        return (
          (re = function() {
            return e;
          }),
          e
        );
      }
      function oe() {
        var e = Object(o.a)([
          '\n  border-bottom: 2px solid white;\n  padding-bottom: 20px;\n  margin-bottom: 20px;\n'
        ]);
        return (
          (oe = function() {
            return e;
          }),
          e
        );
      }
      function ie() {
        var e = Object(o.a)([
          '\n  padding: 35px;\n  background-color: ',
          ';\n  color: white;\n  line-height: 1.3em;\n'
        ]);
        return (
          (ie = function() {
            return e;
          }),
          e
        );
      }
      function ae() {
        var e = Object(o.a)([
          '\n  padding: 20px 35px;\n  color: ',
          ';\n  background: white;\n'
        ]);
        return (
          (ae = function() {
            return e;
          }),
          e
        );
      }
      var se = s.a.h3(ae(), function(e) {
          return e.colour;
        }),
        le = s.a.ul(ie(), function(e) {
          return e.colour;
        }),
        ue = s.a.li(oe()),
        ce = s.a.p(re(), function(e) {
          return e.colour;
        }),
        de = s.a.a(ne()),
        fe = s.a.div(te(), function(e) {
          return e.colour;
        }),
        pe = s.a.div(ee(), function(e) {
          return e.colour;
        }),
        he = function(e) {
          var t = e.colour,
            n = e.colourLight,
            r = Object(i.useState)([]),
            o = r[0],
            a = r[1],
            s = Object(i.useState)([]),
            l = s[0],
            u = s[1];
          return (
            Object(i.useEffect)(function() {
              Object(Q.c)('data/events/index.json').then(function(e) {
                var t = Object.values(e).map(function(e) {
                  return e.data;
                });
                u(
                  t
                    .filter(function(e) {
                      return e.dateTime;
                    })
                    .sort(function(e, t) {
                      return J()(e.dateTime).isAfter(t.dateTime) ? 1 : -1;
                    })
                    .filter(function(e) {
                      return J()().isBefore(e.dateTime);
                    })
                    .slice(0, 3)
                ),
                  a(!1);
              });
            }, []),
            o
              ? $('div', null)
              : $(
                  pe,
                  {colour: n},
                  $(se, {colour: t}, 'Events'),
                  $(
                    le,
                    {colour: n},
                    l.map(function(e) {
                      return $(
                        ue,
                        {key: e.title},
                        $(
                          b.a,
                          {href: '/events/'.concat(e.title)},
                          $(
                            de,
                            null,
                            $(
                              ce,
                              {colour: t},
                              J()(e.dateTime).format('dddd MMM Do YYYY')
                            ),
                            $(
                              'p',
                              null,
                              e.title
                                .split('-')
                                .map(function(e) {
                                  return e[0].toUpperCase() + e.substr(1);
                                })
                                .join(' ')
                            ),
                            $('p', null, J()(e.dateTime).format('kk:mm'))
                          )
                        )
                      );
                    })
                  ),
                  $(
                    fe,
                    {colour: n},
                    $(b.a, {href: '/events'}, $(de, null, 'More Events'))
                  )
                )
          );
        },
        ve = a.a.createElement;
      function ye() {
        var e = Object(o.a)([
          '\n  background-color: ',
          ';\n  color: white;\n  padding: 20px;\n  height: 400px;\n  margin-bottom: ',
          ';\n\n  @media screen and (min-width: 991px) {\n    width: calc(40% - 20px);\n    margin-right: 20px;\n    float: left;\n    height: 460px;\n  }\n\n  a {\n    color: white;\n  }\n'
        ]);
        return (
          (ye = function() {
            return e;
          }),
          e
        );
      }
      function be() {
        var e = Object(o.a)([
          '\n  @media screen and (min-width: 991px) {\n    width: calc(60% - 20px);\n    float: left;\n    margin-right: 20px;\n  }\n'
        ]);
        return (
          (be = function() {
            return e;
          }),
          e
        );
      }
      function ge() {
        var e = Object(o.a)(['\n  padding: 20px;\n']);
        return (
          (ge = function() {
            return e;
          }),
          e
        );
      }
      var me = s.a.div(ge()),
        we = Object(s.a)(v.a)(be()),
        Se = s.a.div(
          ye(),
          function(e) {
            return e.colour;
          },
          function(e) {
            return e.mobileMarginBottom || '20px';
          }
        );
      t.default = function() {
        var e = Object(i.useState)(!0),
          t = e[0],
          o = e[1],
          s = Object(i.useState)(''),
          l = s[0],
          y = s[1],
          b = Object(i.useState)(''),
          g = b[0],
          m = b[1],
          w = Object(i.useState)(''),
          S = w[0],
          O = w[1],
          k = Object(i.useState)(''),
          _ = k[0],
          x = k[1],
          T = Object(i.useState)(''),
          j = T[0],
          E = T[1],
          M = Object(i.useState)(''),
          C = M[0],
          L = M[1],
          z = Object(i.useState)(''),
          D = z[0],
          R = z[1],
          I = Object(i.useState)(''),
          H = I[0],
          N = I[1],
          W = Object(i.useState)([]),
          q = W[0],
          A = W[1],
          B = Object(i.useState)(''),
          X = B[0],
          V = B[1],
          U = Object(i.useState)(''),
          G = U[0],
          Z = U[1],
          J = Object(i.useState)([]),
          $ = J[0],
          ee = J[1];
        if (
          (Object(i.useEffect)(function() {
            Object(Q.c)('data/homepage.json').then(function(e) {
              y(e.header.title),
                m(e.header.image),
                O(Object(Q.d)(e.deck.image)),
                x(Object(Q.a)(e.deck.colour)),
                E(e.deck.text);
              var t = Object(Q.b)(Object(Q.g)(e)),
                n = Object(r.a)(t, 3),
                i = n[0],
                a = n[1],
                s = n[2];
              L(i),
                R(a),
                N(s),
                V(Object(Q.d)(e.eventsImage)),
                Z(Object(Q.d)(e.twitterImage)),
                ee(e.quotes),
                A(
                  e.cta.map(function(e) {
                    return (
                      (e.image = Object(Q.d)(e.image)),
                      (e.colour = Object(Q.a)(e.colour)),
                      e
                    );
                  })
                ),
                o(!1);
            });
          }, []),
          t)
        )
          return ve('div', null);
        n('+PBF').TwitterTimelineEmbed;
        return ve(
          a.a.Fragment,
          null,
          ve(u.a, null, ve('title', {key: 'title'}, 'Gateway Church, York')),
          ve(d.a, {
            colour: C,
            colourHex: D,
            colourHexLight: H,
            title: l,
            image: g,
            Header: p.a
          }),
          ve(
            'main',
            null,
            ve(P, {cta: q}),
            ve(
              me,
              null,
              ve(Y, {quotes: $}),
              ve(K, {colour: _, text: j, image: S}),
              ve(
                f.a,
                null,
                ve(
                  we,
                  {mobileHeight: '400px', mobileMarginBottom: '0'},
                  ve(h.a, {url: X})
                ),
                ve(he, {colour: D, colourLight: H}),
                ve(F.a, null)
              ),
              ve(
                f.a,
                null,
                ve(
                  Se,
                  {colour: D},
                  ve(
                    'a',
                    {
                      className: 'twitter-timeline',
                      'data-height': '400',
                      href:
                        'https://twitter.com/gatewayyork?ref_src=twsrc%5Etfw'
                    },
                    'Tweets by gatewayyork'
                  ),
                  ve('script', {
                    dangerouslySetInnerHTML: {__html: 'twitter'},
                    async: !0,
                    src: 'https://platform.twitter.com/widgets.js',
                    charSet: 'utf-8'
                  })
                ),
                ve(v.a, {mobileHeight: '400px'}, ve(h.a, {url: G}))
              )
            )
          ),
          ve(c.a, null)
        );
      };
    },
    TSYQ: function(e, t, n) {
      var r;
      !(function() {
        'use strict';
        var n = {}.hasOwnProperty;
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            if (r) {
              var i = typeof r;
              if ('string' === i || 'number' === i) e.push(r);
              else if (Array.isArray(r) && r.length) {
                var a = o.apply(null, r);
                a && e.push(a);
              } else if ('object' === i)
                for (var s in r) n.call(r, s) && r[s] && e.push(s);
            }
          }
          return e.join(' ');
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (r = function() {
                return o;
              }.apply(t, [])) || (e.exports = r);
      })();
    },
    TyG7: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var r = d(n('Yz+Y')),
        o = d(n('iCc5')),
        i = d(n('V7oC')),
        a = d(n('FYw3')),
        s = d(n('mRg0')),
        l = n('q1tI'),
        u = d(l),
        c = d(n('17x9'));
      function d(e) {
        return e && e.__esModule ? e : {default: e};
      }
      var f = n('ojxP');
      f('https://platform.twitter.com/widgets.js', 'twitter-embed');
      var p = (function(e) {
        function t() {
          return (
            (0, o.default)(this, t),
            (0, a.default)(
              this,
              (t.__proto__ || (0, r.default)(t)).apply(this, arguments)
            )
          );
        }
        return (
          (0, s.default)(t, e),
          (0, i.default)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this;
                f.ready('twitter-embed', function() {
                  window.twttr
                    ? window.twttr.widgets.createMoment(
                        e.props.momentId,
                        e.refs.shareMoment,
                        e.props.options
                      )
                    : console.error(
                        'Failure to load window.twttr, aborting load.'
                      );
                });
              }
            },
            {
              key: 'render',
              value: function() {
                return u.default.createElement('div', {ref: 'shareMoment'});
              }
            }
          ]),
          t
        );
      })(l.Component);
      (p.propTypes = {
        momentId: c.default.string.isRequired,
        options: c.default.object
      }),
        (t.default = p);
    },
    'UZv/': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0}), (t.Track = void 0);
      var r = a(n('q1tI')),
        o = a(n('TSYQ')),
        i = n('x9Za');
      function a(e) {
        return e && e.__esModule ? e : {default: e};
      }
      function s(e) {
        return (s =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function l() {
        return (l =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function c(e, t) {
        return !t || ('object' !== s(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(n, !0).forEach(function(t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var y = function(e) {
          var t, n, r, o, i;
          return (
            (r =
              (i = e.rtl ? e.slideCount - 1 - e.index : e.index) < 0 ||
              i >= e.slideCount),
            e.centerMode
              ? ((o = Math.floor(e.slidesToShow / 2)),
                (n = (i - e.currentSlide) % e.slideCount === 0),
                i > e.currentSlide - o - 1 &&
                  i <= e.currentSlide + o &&
                  (t = !0))
              : (t =
                  e.currentSlide <= i && i < e.currentSlide + e.slidesToShow),
            {
              'slick-slide': !0,
              'slick-active': t,
              'slick-center': n,
              'slick-cloned': r,
              'slick-current': i === e.currentSlide
            }
          );
        },
        b = function(e, t) {
          return e.key || t;
        },
        g = function(e) {
          var t,
            n = [],
            a = [],
            s = [],
            l = r.default.Children.count(e.children),
            u = (0, i.lazyStartIndex)(e),
            c = (0, i.lazyEndIndex)(e);
          return (
            r.default.Children.forEach(e.children, function(d, f) {
              var p,
                v = {
                  message: 'children',
                  index: f,
                  slidesToScroll: e.slidesToScroll,
                  currentSlide: e.currentSlide
                };
              p =
                !e.lazyLoad || (e.lazyLoad && e.lazyLoadedList.indexOf(f) >= 0)
                  ? d
                  : r.default.createElement('div', null);
              var g = (function(e) {
                  var t = {};
                  return (
                    (void 0 !== e.variableWidth && !1 !== e.variableWidth) ||
                      (t.width = e.slideWidth),
                    e.fade &&
                      ((t.position = 'relative'),
                      e.vertical
                        ? (t.top = -e.index * parseInt(e.slideHeight))
                        : (t.left = -e.index * parseInt(e.slideWidth)),
                      (t.opacity = e.currentSlide === e.index ? 1 : 0),
                      (t.transition =
                        'opacity ' +
                        e.speed +
                        'ms ' +
                        e.cssEase +
                        ', visibility ' +
                        e.speed +
                        'ms ' +
                        e.cssEase),
                      (t.WebkitTransition =
                        'opacity ' +
                        e.speed +
                        'ms ' +
                        e.cssEase +
                        ', visibility ' +
                        e.speed +
                        'ms ' +
                        e.cssEase)),
                    t
                  );
                })(h({}, e, {index: f})),
                m = p.props.className || '',
                w = y(h({}, e, {index: f}));
              if (
                (n.push(
                  r.default.cloneElement(p, {
                    key: 'original' + b(p, f),
                    'data-index': f,
                    className: (0, o.default)(w, m),
                    tabIndex: '-1',
                    'aria-hidden': !w['slick-active'],
                    style: h({outline: 'none'}, p.props.style || {}, {}, g),
                    onClick: function(t) {
                      p.props && p.props.onClick && p.props.onClick(t),
                        e.focusOnSelect && e.focusOnSelect(v);
                    }
                  })
                ),
                e.infinite && !1 === e.fade)
              ) {
                var S = l - f;
                S <= (0, i.getPreClones)(e) &&
                  l !== e.slidesToShow &&
                  ((t = -S) >= u && (p = d),
                  (w = y(h({}, e, {index: t}))),
                  a.push(
                    r.default.cloneElement(p, {
                      key: 'precloned' + b(p, t),
                      'data-index': t,
                      tabIndex: '-1',
                      className: (0, o.default)(w, m),
                      'aria-hidden': !w['slick-active'],
                      style: h({}, p.props.style || {}, {}, g),
                      onClick: function(t) {
                        p.props && p.props.onClick && p.props.onClick(t),
                          e.focusOnSelect && e.focusOnSelect(v);
                      }
                    })
                  )),
                  l !== e.slidesToShow &&
                    ((t = l + f) < c && (p = d),
                    (w = y(h({}, e, {index: t}))),
                    s.push(
                      r.default.cloneElement(p, {
                        key: 'postcloned' + b(p, t),
                        'data-index': t,
                        tabIndex: '-1',
                        className: (0, o.default)(w, m),
                        'aria-hidden': !w['slick-active'],
                        style: h({}, p.props.style || {}, {}, g),
                        onClick: function(t) {
                          p.props && p.props.onClick && p.props.onClick(t),
                            e.focusOnSelect && e.focusOnSelect(v);
                        }
                      })
                    ));
              }
            }),
            e.rtl ? a.concat(n, s).reverse() : a.concat(n, s)
          );
        },
        m = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
              c(this, d(t).apply(this, arguments))
            );
          }
          var n, o, i;
          return (
            (function(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {value: e, writable: !0, configurable: !0}
              })),
                t && f(e, t);
            })(t, e),
            (n = t),
            (o = [
              {
                key: 'render',
                value: function() {
                  var e = g(this.props),
                    t = this.props,
                    n = {
                      onMouseEnter: t.onMouseEnter,
                      onMouseOver: t.onMouseOver,
                      onMouseLeave: t.onMouseLeave
                    };
                  return r.default.createElement(
                    'div',
                    l(
                      {className: 'slick-track', style: this.props.trackStyle},
                      n
                    ),
                    e
                  );
                }
              }
            ]) && u(n.prototype, o),
            i && u(n, i),
            t
          );
        })(r.default.PureComponent);
      t.Track = m;
    },
    aaW0: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0}), (t.Dots = void 0);
      var r = i(n('q1tI')),
        o = i(n('TSYQ'));
      function i(e) {
        return e && e.__esModule ? e : {default: e};
      }
      function a(e) {
        return (a =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function c(e, t) {
        return !t || ('object' !== a(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var p = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            c(this, d(t).apply(this, arguments))
          );
        }
        var n, i, a;
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {value: e, writable: !0, configurable: !0}
            })),
              t && f(e, t);
          })(t, e),
          (n = t),
          (i = [
            {
              key: 'clickHandler',
              value: function(e, t) {
                t.preventDefault(), this.props.clickHandler(e);
              }
            },
            {
              key: 'render',
              value: function() {
                var e,
                  t = this,
                  n = (e = {
                    slideCount: this.props.slideCount,
                    slidesToScroll: this.props.slidesToScroll,
                    slidesToShow: this.props.slidesToShow,
                    infinite: this.props.infinite
                  }).infinite
                    ? Math.ceil(e.slideCount / e.slidesToScroll)
                    : Math.ceil(
                        (e.slideCount - e.slidesToShow) / e.slidesToScroll
                      ) + 1,
                  i = this.props,
                  a = {
                    onMouseEnter: i.onMouseEnter,
                    onMouseOver: i.onMouseOver,
                    onMouseLeave: i.onMouseLeave
                  },
                  u = Array.apply(
                    null,
                    Array(n + 1)
                      .join('0')
                      .split('')
                  ).map(function(e, n) {
                    var i = n * t.props.slidesToScroll,
                      a =
                        n * t.props.slidesToScroll +
                        (t.props.slidesToScroll - 1),
                      s = (0, o.default)({
                        'slick-active':
                          t.props.currentSlide >= i && t.props.currentSlide <= a
                      }),
                      l = {
                        message: 'dots',
                        index: n,
                        slidesToScroll: t.props.slidesToScroll,
                        currentSlide: t.props.currentSlide
                      },
                      u = t.clickHandler.bind(t, l);
                    return r.default.createElement(
                      'li',
                      {key: n, className: s},
                      r.default.cloneElement(t.props.customPaging(n), {
                        onClick: u
                      })
                    );
                  });
                return r.default.cloneElement(
                  this.props.appendDots(u),
                  (function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? s(n, !0).forEach(function(t) {
                            l(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : s(n).forEach(function(t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                    }
                    return e;
                  })({className: this.props.dotsClass}, a)
                );
              }
            }
          ]) && u(n.prototype, i),
          a && u(n, a),
          t
        );
      })(r.default.PureComponent);
      t.Dots = p;
    },
    bdgK: function(e, t, n) {
      'use strict';
      n.r(t),
        function(e) {
          var n = (function() {
              if ('undefined' !== typeof Map) return Map;
              function e(e, t) {
                var n = -1;
                return (
                  e.some(function(e, r) {
                    return e[0] === t && ((n = r), !0);
                  }),
                  n
                );
              }
              return (function() {
                function t() {
                  this.__entries__ = [];
                }
                return (
                  Object.defineProperty(t.prototype, 'size', {
                    get: function() {
                      return this.__entries__.length;
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.get = function(t) {
                    var n = e(this.__entries__, t),
                      r = this.__entries__[n];
                    return r && r[1];
                  }),
                  (t.prototype.set = function(t, n) {
                    var r = e(this.__entries__, t);
                    ~r
                      ? (this.__entries__[r][1] = n)
                      : this.__entries__.push([t, n]);
                  }),
                  (t.prototype.delete = function(t) {
                    var n = this.__entries__,
                      r = e(n, t);
                    ~r && n.splice(r, 1);
                  }),
                  (t.prototype.has = function(t) {
                    return !!~e(this.__entries__, t);
                  }),
                  (t.prototype.clear = function() {
                    this.__entries__.splice(0);
                  }),
                  (t.prototype.forEach = function(e, t) {
                    void 0 === t && (t = null);
                    for (var n = 0, r = this.__entries__; n < r.length; n++) {
                      var o = r[n];
                      e.call(t, o[1], o[0]);
                    }
                  }),
                  t
                );
              })();
            })(),
            r =
              'undefined' !== typeof window &&
              'undefined' !== typeof document &&
              window.document === document,
            o =
              'undefined' !== typeof e && e.Math === Math
                ? e
                : 'undefined' !== typeof self && self.Math === Math
                ? self
                : 'undefined' !== typeof window && window.Math === Math
                ? window
                : Function('return this')(),
            i =
              'function' === typeof requestAnimationFrame
                ? requestAnimationFrame.bind(o)
                : function(e) {
                    return setTimeout(function() {
                      return e(Date.now());
                    }, 1e3 / 60);
                  },
            a = 2;
          var s = 20,
            l = [
              'top',
              'right',
              'bottom',
              'left',
              'width',
              'height',
              'size',
              'weight'
            ],
            u = 'undefined' !== typeof MutationObserver,
            c = (function() {
              function e() {
                (this.connected_ = !1),
                  (this.mutationEventsAdded_ = !1),
                  (this.mutationsObserver_ = null),
                  (this.observers_ = []),
                  (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                  (this.refresh = (function(e, t) {
                    var n = !1,
                      r = !1,
                      o = 0;
                    function s() {
                      n && ((n = !1), e()), r && u();
                    }
                    function l() {
                      i(s);
                    }
                    function u() {
                      var e = Date.now();
                      if (n) {
                        if (e - o < a) return;
                        r = !0;
                      } else (n = !0), (r = !1), setTimeout(l, t);
                      o = e;
                    }
                    return u;
                  })(this.refresh.bind(this), s));
              }
              return (
                (e.prototype.addObserver = function(e) {
                  ~this.observers_.indexOf(e) || this.observers_.push(e),
                    this.connected_ || this.connect_();
                }),
                (e.prototype.removeObserver = function(e) {
                  var t = this.observers_,
                    n = t.indexOf(e);
                  ~n && t.splice(n, 1),
                    !t.length && this.connected_ && this.disconnect_();
                }),
                (e.prototype.refresh = function() {
                  this.updateObservers_() && this.refresh();
                }),
                (e.prototype.updateObservers_ = function() {
                  var e = this.observers_.filter(function(e) {
                    return e.gatherActive(), e.hasActive();
                  });
                  return (
                    e.forEach(function(e) {
                      return e.broadcastActive();
                    }),
                    e.length > 0
                  );
                }),
                (e.prototype.connect_ = function() {
                  r &&
                    !this.connected_ &&
                    (document.addEventListener(
                      'transitionend',
                      this.onTransitionEnd_
                    ),
                    window.addEventListener('resize', this.refresh),
                    u
                      ? ((this.mutationsObserver_ = new MutationObserver(
                          this.refresh
                        )),
                        this.mutationsObserver_.observe(document, {
                          attributes: !0,
                          childList: !0,
                          characterData: !0,
                          subtree: !0
                        }))
                      : (document.addEventListener(
                          'DOMSubtreeModified',
                          this.refresh
                        ),
                        (this.mutationEventsAdded_ = !0)),
                    (this.connected_ = !0));
                }),
                (e.prototype.disconnect_ = function() {
                  r &&
                    this.connected_ &&
                    (document.removeEventListener(
                      'transitionend',
                      this.onTransitionEnd_
                    ),
                    window.removeEventListener('resize', this.refresh),
                    this.mutationsObserver_ &&
                      this.mutationsObserver_.disconnect(),
                    this.mutationEventsAdded_ &&
                      document.removeEventListener(
                        'DOMSubtreeModified',
                        this.refresh
                      ),
                    (this.mutationsObserver_ = null),
                    (this.mutationEventsAdded_ = !1),
                    (this.connected_ = !1));
                }),
                (e.prototype.onTransitionEnd_ = function(e) {
                  var t = e.propertyName,
                    n = void 0 === t ? '' : t;
                  l.some(function(e) {
                    return !!~n.indexOf(e);
                  }) && this.refresh();
                }),
                (e.getInstance = function() {
                  return (
                    this.instance_ || (this.instance_ = new e()), this.instance_
                  );
                }),
                (e.instance_ = null),
                e
              );
            })(),
            d = function(e, t) {
              for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                var o = r[n];
                Object.defineProperty(e, o, {
                  value: t[o],
                  enumerable: !1,
                  writable: !1,
                  configurable: !0
                });
              }
              return e;
            },
            f = function(e) {
              return (e && e.ownerDocument && e.ownerDocument.defaultView) || o;
            },
            p = m(0, 0, 0, 0);
          function h(e) {
            return parseFloat(e) || 0;
          }
          function v(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            return t.reduce(function(t, n) {
              return t + h(e['border-' + n + '-width']);
            }, 0);
          }
          function y(e) {
            var t = e.clientWidth,
              n = e.clientHeight;
            if (!t && !n) return p;
            var r = f(e).getComputedStyle(e),
              o = (function(e) {
                for (
                  var t = {}, n = 0, r = ['top', 'right', 'bottom', 'left'];
                  n < r.length;
                  n++
                ) {
                  var o = r[n],
                    i = e['padding-' + o];
                  t[o] = h(i);
                }
                return t;
              })(r),
              i = o.left + o.right,
              a = o.top + o.bottom,
              s = h(r.width),
              l = h(r.height);
            if (
              ('border-box' === r.boxSizing &&
                (Math.round(s + i) !== t && (s -= v(r, 'left', 'right') + i),
                Math.round(l + a) !== n && (l -= v(r, 'top', 'bottom') + a)),
              !(function(e) {
                return e === f(e).document.documentElement;
              })(e))
            ) {
              var u = Math.round(s + i) - t,
                c = Math.round(l + a) - n;
              1 !== Math.abs(u) && (s -= u), 1 !== Math.abs(c) && (l -= c);
            }
            return m(o.left, o.top, s, l);
          }
          var b =
            'undefined' !== typeof SVGGraphicsElement
              ? function(e) {
                  return e instanceof f(e).SVGGraphicsElement;
                }
              : function(e) {
                  return (
                    e instanceof f(e).SVGElement &&
                    'function' === typeof e.getBBox
                  );
                };
          function g(e) {
            return r
              ? b(e)
                ? (function(e) {
                    var t = e.getBBox();
                    return m(0, 0, t.width, t.height);
                  })(e)
                : y(e)
              : p;
          }
          function m(e, t, n, r) {
            return {x: e, y: t, width: n, height: r};
          }
          var w = (function() {
              function e(e) {
                (this.broadcastWidth = 0),
                  (this.broadcastHeight = 0),
                  (this.contentRect_ = m(0, 0, 0, 0)),
                  (this.target = e);
              }
              return (
                (e.prototype.isActive = function() {
                  var e = g(this.target);
                  return (
                    (this.contentRect_ = e),
                    e.width !== this.broadcastWidth ||
                      e.height !== this.broadcastHeight
                  );
                }),
                (e.prototype.broadcastRect = function() {
                  var e = this.contentRect_;
                  return (
                    (this.broadcastWidth = e.width),
                    (this.broadcastHeight = e.height),
                    e
                  );
                }),
                e
              );
            })(),
            S = function(e, t) {
              var n = (function(e) {
                var t = e.x,
                  n = e.y,
                  r = e.width,
                  o = e.height,
                  i =
                    'undefined' !== typeof DOMRectReadOnly
                      ? DOMRectReadOnly
                      : Object,
                  a = Object.create(i.prototype);
                return (
                  d(a, {
                    x: t,
                    y: n,
                    width: r,
                    height: o,
                    top: n,
                    right: t + r,
                    bottom: o + n,
                    left: t
                  }),
                  a
                );
              })(t);
              d(this, {target: e, contentRect: n});
            },
            O = (function() {
              function e(e, t, r) {
                if (
                  ((this.activeObservations_ = []),
                  (this.observations_ = new n()),
                  'function' !== typeof e)
                )
                  throw new TypeError(
                    'The callback provided as parameter 1 is not a function.'
                  );
                (this.callback_ = e),
                  (this.controller_ = t),
                  (this.callbackCtx_ = r);
              }
              return (
                (e.prototype.observe = function(e) {
                  if (!arguments.length)
                    throw new TypeError(
                      '1 argument required, but only 0 present.'
                    );
                  if (
                    'undefined' !== typeof Element &&
                    Element instanceof Object
                  ) {
                    if (!(e instanceof f(e).Element))
                      throw new TypeError(
                        'parameter 1 is not of type "Element".'
                      );
                    var t = this.observations_;
                    t.has(e) ||
                      (t.set(e, new w(e)),
                      this.controller_.addObserver(this),
                      this.controller_.refresh());
                  }
                }),
                (e.prototype.unobserve = function(e) {
                  if (!arguments.length)
                    throw new TypeError(
                      '1 argument required, but only 0 present.'
                    );
                  if (
                    'undefined' !== typeof Element &&
                    Element instanceof Object
                  ) {
                    if (!(e instanceof f(e).Element))
                      throw new TypeError(
                        'parameter 1 is not of type "Element".'
                      );
                    var t = this.observations_;
                    t.has(e) &&
                      (t.delete(e),
                      t.size || this.controller_.removeObserver(this));
                  }
                }),
                (e.prototype.disconnect = function() {
                  this.clearActive(),
                    this.observations_.clear(),
                    this.controller_.removeObserver(this);
                }),
                (e.prototype.gatherActive = function() {
                  var e = this;
                  this.clearActive(),
                    this.observations_.forEach(function(t) {
                      t.isActive() && e.activeObservations_.push(t);
                    });
                }),
                (e.prototype.broadcastActive = function() {
                  if (this.hasActive()) {
                    var e = this.callbackCtx_,
                      t = this.activeObservations_.map(function(e) {
                        return new S(e.target, e.broadcastRect());
                      });
                    this.callback_.call(e, t, e), this.clearActive();
                  }
                }),
                (e.prototype.clearActive = function() {
                  this.activeObservations_.splice(0);
                }),
                (e.prototype.hasActive = function() {
                  return this.activeObservations_.length > 0;
                }),
                e
              );
            })(),
            k = 'undefined' !== typeof WeakMap ? new WeakMap() : new n(),
            _ = function e(t) {
              if (!(this instanceof e))
                throw new TypeError('Cannot call a class as a function.');
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.');
              var n = c.getInstance(),
                r = new O(t, n, this);
              k.set(this, r);
            };
          ['observe', 'unobserve', 'disconnect'].forEach(function(e) {
            _.prototype[e] = function() {
              var t;
              return (t = k.get(this))[e].apply(t, arguments);
            };
          });
          var x =
            'undefined' !== typeof o.ResizeObserver ? o.ResizeObserver : _;
          t.default = x;
        }.call(this, n('yLpj'));
    },
    dAtF: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var r = function(e, t, n, r) {
          return 'boolean' == typeof e
            ? e
            : 'function' == typeof e
            ? e(t, n, r)
            : !(!0 !== !!e) && !!e;
        },
        o = function(e, t) {
          return Object.hasOwnProperty.call(e, t);
        },
        i = function(e, t, n, r) {
          return r
            ? new Error(r)
            : new Error(
                'Required ' +
                  e[t] +
                  ' `' +
                  t +
                  '` was not specified in `' +
                  n +
                  '`.'
              );
        };
      t.default = function(e, t, n) {
        return (
          (function(e, t) {
            if ('function' != typeof e)
              throw new TypeError(
                'The typeValidator argument must be a function with the signature function(props, propName, componentName).'
              );
            if (t && 'string' != typeof t)
              throw new TypeError(
                'The error message is optional, but must be a string if provided.'
              );
          })(e, n),
          function(a, s, l) {
            for (
              var u = arguments.length, c = Array(3 < u ? u - 3 : 0), d = 3;
              d < u;
              d++
            )
              c[d - 3] = arguments[d];
            return r(t, a, s, l)
              ? o(a, s)
                ? e.apply(void 0, [a, s, l].concat(c))
                : i(a, s, l, n)
              : e.apply(void 0, [a, s, l].concat(c));
          }
        );
      };
    },
    jpXb: function(e, t, n) {
      var r = n('wZXL');
      e.exports = new r();
    },
    kCCV: function(e, t) {
      function n(e) {
        (this.options = e), !e.deferSetup && this.setup();
      }
      (n.prototype = {
        constructor: n,
        setup: function() {
          this.options.setup && this.options.setup(), (this.initialised = !0);
        },
        on: function() {
          !this.initialised && this.setup(),
            this.options.match && this.options.match();
        },
        off: function() {
          this.options.unmatch && this.options.unmatch();
        },
        destroy: function() {
          this.options.destroy ? this.options.destroy() : this.off();
        },
        equals: function(e) {
          return this.options === e || this.options.match === e;
        }
      }),
        (e.exports = n);
    },
    n3Kd: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var r = d(n('Yz+Y')),
        o = d(n('iCc5')),
        i = d(n('V7oC')),
        a = d(n('FYw3')),
        s = d(n('mRg0')),
        l = n('q1tI'),
        u = d(l),
        c = d(n('17x9'));
      function d(e) {
        return e && e.__esModule ? e : {default: e};
      }
      var f = n('ojxP');
      f('https://platform.twitter.com/widgets.js', 'twitter-embed');
      var p = (function(e) {
        function t() {
          return (
            (0, o.default)(this, t),
            (0, a.default)(
              this,
              (t.__proto__ || (0, r.default)(t)).apply(this, arguments)
            )
          );
        }
        return (
          (0, s.default)(t, e),
          (0, i.default)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this;
                f.ready('twitter-embed', function() {
                  window.twttr
                    ? window.twttr.widgets.createPeriscopeOnAirButton(
                        e.props.username,
                        e.refs.embedContainer,
                        e.props.options
                      )
                    : console.error(
                        'Failure to load window.twttr, aborting load.'
                      );
                });
              }
            },
            {
              key: 'render',
              value: function() {
                return u.default.createElement('div', {ref: 'embedContainer'});
              }
            }
          ]),
          t
        );
      })(l.Component);
      (p.propTypes = {
        username: c.default.string.isRequired,
        options: c.default.object
      }),
        (t.default = p);
    },
    n3sa: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var r = d(n('Yz+Y')),
        o = d(n('iCc5')),
        i = d(n('V7oC')),
        a = d(n('FYw3')),
        s = d(n('mRg0')),
        l = n('q1tI'),
        u = d(l),
        c = d(n('17x9'));
      function d(e) {
        return e && e.__esModule ? e : {default: e};
      }
      var f = n('ojxP');
      f('https://platform.twitter.com/widgets.js', 'twitter-embed');
      var p = (function(e) {
        function t() {
          return (
            (0, o.default)(this, t),
            (0, a.default)(
              this,
              (t.__proto__ || (0, r.default)(t)).apply(this, arguments)
            )
          );
        }
        return (
          (0, s.default)(t, e),
          (0, i.default)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this;
                f.ready('twitter-embed', function() {
                  window.twttr
                    ? window.twttr.widgets.createMentionButton(
                        e.props.screenName,
                        e.refs.embedContainer,
                        e.props.options
                      )
                    : console.error(
                        'Failure to load window.twttr, aborting load.'
                      );
                });
              }
            },
            {
              key: 'render',
              value: function() {
                return u.default.createElement('div', {ref: 'embedContainer'});
              }
            }
          ]),
          t
        );
      })(l.Component);
      (p.propTypes = {
        screenName: c.default.string.isRequired,
        options: c.default.object
      }),
        (t.default = p);
    },
    o9Sz: function(e, t, n) {
      'use strict';
      var r = n('h4VS');
      function o() {
        var e = Object(r.a)([
          '\n  position: relative;\n  height: ',
          ';\n  background: ',
          ';\n  overflow: hidden;\n  margin-bottom: ',
          ';\n\n  @media screen and (min-width: 991px) {\n    height: 500px;\n  }\n'
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      var i = n('vOnD').a.div(
        o(),
        function(e) {
          return e.mobileHeight || '200px';
        },
        function(e) {
          return e.color;
        },
        function(e) {
          return e.mobileMarginBottom || '20px';
        }
      );
      t.a = i;
    },
    pIsd: function(e, t, n) {
      var r = n('BJfS'),
        o = function(e) {
          var t = '',
            n = Object.keys(e);
          return (
            n.forEach(function(o, i) {
              var a = e[o];
              (function(e) {
                return /[height|width]$/.test(e);
              })((o = r(o))) &&
                'number' === typeof a &&
                (a += 'px'),
                (t +=
                  !0 === a
                    ? o
                    : !1 === a
                    ? 'not ' + o
                    : '(' + o + ': ' + a + ')'),
                i < n.length - 1 && (t += ' and ');
            }),
            t
          );
        };
      e.exports = function(e) {
        var t = '';
        return 'string' === typeof e
          ? e
          : e instanceof Array
          ? (e.forEach(function(n, r) {
              (t += o(n)), r < e.length - 1 && (t += ', ');
            }),
            t)
          : o(e);
      };
    },
    rxal: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0}), (t.default = void 0);
      var r = {
        animating: !1,
        autoplaying: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        dragging: !1,
        edgeDragged: !1,
        initialized: !1,
        lazyLoadedList: [],
        listHeight: null,
        listWidth: null,
        scrolling: !1,
        slideCount: null,
        slideHeight: null,
        slideWidth: null,
        swipeLeft: null,
        swiped: !1,
        swiping: !1,
        touchObject: {startX: 0, startY: 0, curX: 0, curY: 0},
        trackStyle: {},
        trackWidth: 0
      };
      t.default = r;
    },
    ueNE: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0}),
        (t.InnerSlider = void 0);
      var r = p(n('q1tI')),
        o = p(n('i8i4')),
        i = p(n('rxal')),
        a = p(n('9/5/')),
        s = p(n('TSYQ')),
        l = n('x9Za'),
        u = n('UZv/'),
        c = n('aaW0'),
        d = n('KOnL'),
        f = p(n('bdgK'));
      function p(e) {
        return e && e.__esModule ? e : {default: e};
      }
      function h() {
        return (h =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function v(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function y(e) {
        return (y =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function b(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(n, !0).forEach(function(t) {
                O(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function w(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function S(e, t) {
        return (S =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function O(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var k = (function(e) {
        function t(e) {
          var n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            (n = (function(e, t) {
              return !t || ('object' !== y(t) && 'function' !== typeof t)
                ? w(e)
                : t;
            })(this, m(t).call(this, e))),
            O(w(n), 'listRefHandler', function(e) {
              return (n.list = e);
            }),
            O(w(n), 'trackRefHandler', function(e) {
              return (n.track = e);
            }),
            O(w(n), 'adaptHeight', function() {
              if (n.props.adaptiveHeight && n.list) {
                var e = n.list.querySelector(
                  '[data-index="'.concat(n.state.currentSlide, '"]')
                );
                n.list.style.height = (0, l.getHeight)(e) + 'px';
              }
            }),
            O(w(n), 'UNSAFE_componentWillMount', function() {
              if (
                (n.ssrInit(),
                n.props.onInit && n.props.onInit(),
                n.props.lazyLoad)
              ) {
                var e = (0, l.getOnDemandLazySlides)(
                  g({}, n.props, {}, n.state)
                );
                e.length > 0 &&
                  (n.setState(function(t) {
                    return {lazyLoadedList: t.lazyLoadedList.concat(e)};
                  }),
                  n.props.onLazyLoad && n.props.onLazyLoad(e));
              }
            }),
            O(w(n), 'componentDidMount', function() {
              var e = g({listRef: n.list, trackRef: n.track}, n.props);
              n.updateState(e, !0, function() {
                n.adaptHeight(), n.props.autoplay && n.autoPlay('update');
              }),
                'progressive' === n.props.lazyLoad &&
                  (n.lazyLoadTimer = setInterval(n.progressiveLazyLoad, 1e3)),
                (n.ro = new f.default(function() {
                  n.state.animating
                    ? (n.onWindowResized(!1),
                      n.callbackTimers.push(
                        setTimeout(function() {
                          return n.onWindowResized();
                        }, n.props.speed)
                      ))
                    : n.onWindowResized();
                })),
                n.ro.observe(n.list),
                Array.prototype.forEach.call(
                  document.querySelectorAll('.slick-slide'),
                  function(e) {
                    (e.onfocus = n.props.pauseOnFocus ? n.onSlideFocus : null),
                      (e.onblur = n.props.pauseOnFocus ? n.onSlideBlur : null);
                  }
                ),
                window &&
                  (window.addEventListener
                    ? window.addEventListener('resize', n.onWindowResized)
                    : window.attachEvent('onresize', n.onWindowResized));
            }),
            O(w(n), 'UNSAFE_componentWillUnmount', function() {
              n.animationEndCallback && clearTimeout(n.animationEndCallback),
                n.lazyLoadTimer && clearInterval(n.lazyLoadTimer),
                n.callbackTimers.length &&
                  (n.callbackTimers.forEach(function(e) {
                    return clearTimeout(e);
                  }),
                  (n.callbackTimers = [])),
                window.addEventListener
                  ? window.removeEventListener('resize', n.onWindowResized)
                  : window.detachEvent('onresize', n.onWindowResized),
                n.autoplayTimer && clearInterval(n.autoplayTimer);
            }),
            O(w(n), 'UNSAFE_componentWillReceiveProps', function(e) {
              for (
                var t = g({listRef: n.list, trackRef: n.track}, e, {}, n.state),
                  o = !1,
                  i = 0,
                  a = Object.keys(n.props);
                i < a.length;
                i++
              ) {
                var s = a[i];
                if (!e.hasOwnProperty(s)) {
                  o = !0;
                  break;
                }
                if (
                  'object' !== y(e[s]) &&
                  'function' !== typeof e[s] &&
                  e[s] !== n.props[s]
                ) {
                  o = !0;
                  break;
                }
              }
              n.updateState(t, o, function() {
                n.state.currentSlide >= r.default.Children.count(e.children) &&
                  n.changeSlide({
                    message: 'index',
                    index:
                      r.default.Children.count(e.children) - e.slidesToShow,
                    currentSlide: n.state.currentSlide
                  }),
                  e.autoplay ? n.autoPlay('update') : n.pause('paused');
              });
            }),
            O(w(n), 'componentDidUpdate', function() {
              if (
                (n.checkImagesLoad(),
                n.props.onReInit && n.props.onReInit(),
                n.props.lazyLoad)
              ) {
                var e = (0, l.getOnDemandLazySlides)(
                  g({}, n.props, {}, n.state)
                );
                e.length > 0 &&
                  (n.setState(function(t) {
                    return {lazyLoadedList: t.lazyLoadedList.concat(e)};
                  }),
                  n.props.onLazyLoad && n.props.onLazyLoad(e));
              }
              n.adaptHeight();
            }),
            O(w(n), 'onWindowResized', function(e) {
              n.debouncedResize && n.debouncedResize.cancel(),
                (n.debouncedResize = (0, a.default)(function() {
                  return n.resizeWindow(e);
                }, 50)),
                n.debouncedResize();
            }),
            O(w(n), 'resizeWindow', function() {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              if (o.default.findDOMNode(n.track)) {
                var t = g(
                  {listRef: n.list, trackRef: n.track},
                  n.props,
                  {},
                  n.state
                );
                n.updateState(t, e, function() {
                  n.props.autoplay ? n.autoPlay('update') : n.pause('paused');
                }),
                  n.setState({animating: !1}),
                  clearTimeout(n.animationEndCallback),
                  delete n.animationEndCallback;
              }
            }),
            O(w(n), 'updateState', function(e, t, o) {
              var i = (0, l.initializedState)(e);
              (e = g({}, e, {}, i, {slideIndex: i.currentSlide})),
                (e = g({}, e, {left: (0, l.getTrackLeft)(e)}));
              var a = (0, l.getTrackCSS)(e);
              (t ||
                r.default.Children.count(n.props.children) !==
                  r.default.Children.count(e.children)) &&
                (i.trackStyle = a),
                n.setState(i, o);
            }),
            O(w(n), 'ssrInit', function() {
              if (n.props.variableWidth) {
                var e = 0,
                  t = 0,
                  o = [],
                  i = (0, l.getPreClones)(
                    g({}, n.props, {}, n.state, {
                      slideCount: n.props.children.length
                    })
                  ),
                  a = (0, l.getPostClones)(
                    g({}, n.props, {}, n.state, {
                      slideCount: n.props.children.length
                    })
                  );
                n.props.children.forEach(function(t) {
                  o.push(t.props.style.width), (e += t.props.style.width);
                });
                for (var s = 0; s < i; s++)
                  (t += o[o.length - 1 - s]), (e += o[o.length - 1 - s]);
                for (var u = 0; u < a; u++) e += o[u];
                for (var c = 0; c < n.state.currentSlide; c++) t += o[c];
                var d = {width: e + 'px', left: -t + 'px'};
                if (n.props.centerMode) {
                  var f = ''.concat(o[n.state.currentSlide], 'px');
                  d.left = 'calc('
                    .concat(d.left, ' + (100% - ')
                    .concat(f, ') / 2 ) ');
                }
                n.setState({trackStyle: d});
              } else {
                var p = r.default.Children.count(n.props.children),
                  h = g({}, n.props, {}, n.state, {slideCount: p}),
                  v = (0, l.getPreClones)(h) + (0, l.getPostClones)(h) + p,
                  y = (100 / n.props.slidesToShow) * v,
                  b = 100 / v,
                  m =
                    (-b * ((0, l.getPreClones)(h) + n.state.currentSlide) * y) /
                    100;
                n.props.centerMode && (m += (100 - (b * y) / 100) / 2);
                var w = {width: y + '%', left: m + '%'};
                n.setState({slideWidth: b + '%', trackStyle: w});
              }
            }),
            O(w(n), 'checkImagesLoad', function() {
              var e = document.querySelectorAll('.slick-slide img'),
                t = e.length,
                r = 0;
              Array.prototype.forEach.call(e, function(e) {
                var o = function() {
                  return ++r && r >= t && n.onWindowResized();
                };
                if (e.onclick) {
                  var i = e.onclick;
                  e.onclick = function() {
                    i(), e.parentNode.focus();
                  };
                } else
                  e.onclick = function() {
                    return e.parentNode.focus();
                  };
                e.onload ||
                  (n.props.lazyLoad
                    ? (e.onload = function() {
                        n.adaptHeight(),
                          n.callbackTimers.push(
                            setTimeout(n.onWindowResized, n.props.speed)
                          );
                      })
                    : ((e.onload = o),
                      (e.onerror = function() {
                        o(),
                          n.props.onLazyLoadError && n.props.onLazyLoadError();
                      })));
              });
            }),
            O(w(n), 'progressiveLazyLoad', function() {
              for (
                var e = [],
                  t = g({}, n.props, {}, n.state),
                  r = n.state.currentSlide;
                r < n.state.slideCount + (0, l.getPostClones)(t);
                r++
              )
                if (n.state.lazyLoadedList.indexOf(r) < 0) {
                  e.push(r);
                  break;
                }
              for (
                var o = n.state.currentSlide - 1;
                o >= -(0, l.getPreClones)(t);
                o--
              )
                if (n.state.lazyLoadedList.indexOf(o) < 0) {
                  e.push(o);
                  break;
                }
              e.length > 0
                ? (n.setState(function(t) {
                    return {lazyLoadedList: t.lazyLoadedList.concat(e)};
                  }),
                  n.props.onLazyLoad && n.props.onLazyLoad(e))
                : n.lazyLoadTimer &&
                  (clearInterval(n.lazyLoadTimer), delete n.lazyLoadTimer);
            }),
            O(w(n), 'slideHandler', function(e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r = n.props,
                o = r.asNavFor,
                i = r.beforeChange,
                a = r.onLazyLoad,
                s = r.speed,
                u = r.afterChange,
                c = n.state.currentSlide,
                d = (0, l.slideHandler)(
                  g({index: e}, n.props, {}, n.state, {
                    trackRef: n.track,
                    useCSS: n.props.useCSS && !t
                  })
                ),
                f = d.state,
                p = d.nextState;
              if (f) {
                i && i(c, f.currentSlide);
                var h = f.lazyLoadedList.filter(function(e) {
                  return n.state.lazyLoadedList.indexOf(e) < 0;
                });
                a && h.length > 0 && a(h),
                  n.setState(f, function() {
                    o && o.innerSlider.slideHandler(e),
                      p &&
                        (n.animationEndCallback = setTimeout(function() {
                          var e = p.animating,
                            t = v(p, ['animating']);
                          n.setState(t, function() {
                            n.callbackTimers.push(
                              setTimeout(function() {
                                return n.setState({animating: e});
                              }, 10)
                            ),
                              u && u(f.currentSlide),
                              delete n.animationEndCallback;
                          });
                        }, s));
                  });
              }
            }),
            O(w(n), 'changeSlide', function(e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r = g({}, n.props, {}, n.state),
                o = (0, l.changeSlide)(r, e);
              (0 === o || o) &&
                (!0 === t ? n.slideHandler(o, t) : n.slideHandler(o));
            }),
            O(w(n), 'clickHandler', function(e) {
              !1 === n.clickable && (e.stopPropagation(), e.preventDefault()),
                (n.clickable = !0);
            }),
            O(w(n), 'keyHandler', function(e) {
              var t = (0, l.keyHandler)(e, n.props.accessibility, n.props.rtl);
              '' !== t && n.changeSlide({message: t});
            }),
            O(w(n), 'selectHandler', function(e) {
              n.changeSlide(e);
            }),
            O(w(n), 'disableBodyScroll', function() {
              window.ontouchmove = function(e) {
                (e = e || window.event).preventDefault && e.preventDefault(),
                  (e.returnValue = !1);
              };
            }),
            O(w(n), 'enableBodyScroll', function() {
              window.ontouchmove = null;
            }),
            O(w(n), 'swipeStart', function(e) {
              n.props.verticalSwiping && n.disableBodyScroll();
              var t = (0, l.swipeStart)(e, n.props.swipe, n.props.draggable);
              '' !== t && n.setState(t);
            }),
            O(w(n), 'swipeMove', function(e) {
              var t = (0, l.swipeMove)(
                e,
                g({}, n.props, {}, n.state, {
                  trackRef: n.track,
                  listRef: n.list,
                  slideIndex: n.state.currentSlide
                })
              );
              t && (t.swiping && (n.clickable = !1), n.setState(t));
            }),
            O(w(n), 'swipeEnd', function(e) {
              var t = (0, l.swipeEnd)(
                e,
                g({}, n.props, {}, n.state, {
                  trackRef: n.track,
                  listRef: n.list,
                  slideIndex: n.state.currentSlide
                })
              );
              if (t) {
                var r = t.triggerSlideHandler;
                delete t.triggerSlideHandler,
                  n.setState(t),
                  void 0 !== r &&
                    (n.slideHandler(r),
                    n.props.verticalSwiping && n.enableBodyScroll());
              }
            }),
            O(w(n), 'slickPrev', function() {
              n.callbackTimers.push(
                setTimeout(function() {
                  return n.changeSlide({message: 'previous'});
                }, 0)
              );
            }),
            O(w(n), 'slickNext', function() {
              n.callbackTimers.push(
                setTimeout(function() {
                  return n.changeSlide({message: 'next'});
                }, 0)
              );
            }),
            O(w(n), 'slickGoTo', function(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (((e = Number(e)), isNaN(e))) return '';
              n.callbackTimers.push(
                setTimeout(function() {
                  return n.changeSlide(
                    {
                      message: 'index',
                      index: e,
                      currentSlide: n.state.currentSlide
                    },
                    t
                  );
                }, 0)
              );
            }),
            O(w(n), 'play', function() {
              var e;
              if (n.props.rtl)
                e = n.state.currentSlide - n.props.slidesToScroll;
              else {
                if (!(0, l.canGoNext)(g({}, n.props, {}, n.state))) return !1;
                e = n.state.currentSlide + n.props.slidesToScroll;
              }
              n.slideHandler(e);
            }),
            O(w(n), 'autoPlay', function(e) {
              n.autoplayTimer && clearInterval(n.autoplayTimer);
              var t = n.state.autoplaying;
              if ('update' === e) {
                if ('hovered' === t || 'focused' === t || 'paused' === t)
                  return;
              } else if ('leave' === e) {
                if ('paused' === t || 'focused' === t) return;
              } else if ('blur' === e && ('paused' === t || 'hovered' === t))
                return;
              (n.autoplayTimer = setInterval(
                n.play,
                n.props.autoplaySpeed + 50
              )),
                n.setState({autoplaying: 'playing'});
            }),
            O(w(n), 'pause', function(e) {
              n.autoplayTimer &&
                (clearInterval(n.autoplayTimer), (n.autoplayTimer = null));
              var t = n.state.autoplaying;
              'paused' === e
                ? n.setState({autoplaying: 'paused'})
                : 'focused' === e
                ? ('hovered' !== t && 'playing' !== t) ||
                  n.setState({autoplaying: 'focused'})
                : 'playing' === t && n.setState({autoplaying: 'hovered'});
            }),
            O(w(n), 'onDotsOver', function() {
              return n.props.autoplay && n.pause('hovered');
            }),
            O(w(n), 'onDotsLeave', function() {
              return (
                n.props.autoplay &&
                'hovered' === n.state.autoplaying &&
                n.autoPlay('leave')
              );
            }),
            O(w(n), 'onTrackOver', function() {
              return n.props.autoplay && n.pause('hovered');
            }),
            O(w(n), 'onTrackLeave', function() {
              return (
                n.props.autoplay &&
                'hovered' === n.state.autoplaying &&
                n.autoPlay('leave')
              );
            }),
            O(w(n), 'onSlideFocus', function() {
              return n.props.autoplay && n.pause('focused');
            }),
            O(w(n), 'onSlideBlur', function() {
              return (
                n.props.autoplay &&
                'focused' === n.state.autoplaying &&
                n.autoPlay('blur')
              );
            }),
            O(w(n), 'render', function() {
              var e,
                t,
                o,
                i = (0, s.default)('slick-slider', n.props.className, {
                  'slick-vertical': n.props.vertical,
                  'slick-initialized': !0
                }),
                a = g({}, n.props, {}, n.state),
                f = (0, l.extractObject)(a, [
                  'fade',
                  'cssEase',
                  'speed',
                  'infinite',
                  'centerMode',
                  'focusOnSelect',
                  'currentSlide',
                  'lazyLoad',
                  'lazyLoadedList',
                  'rtl',
                  'slideWidth',
                  'slideHeight',
                  'listHeight',
                  'vertical',
                  'slidesToShow',
                  'slidesToScroll',
                  'slideCount',
                  'trackStyle',
                  'variableWidth',
                  'unslick',
                  'centerPadding'
                ]),
                p = n.props.pauseOnHover;
              if (
                ((f = g({}, f, {
                  onMouseEnter: p ? n.onTrackOver : null,
                  onMouseLeave: p ? n.onTrackLeave : null,
                  onMouseOver: p ? n.onTrackOver : null,
                  focusOnSelect: n.props.focusOnSelect ? n.selectHandler : null
                })),
                !0 === n.props.dots &&
                  n.state.slideCount >= n.props.slidesToShow)
              ) {
                var v = (0, l.extractObject)(a, [
                    'dotsClass',
                    'slideCount',
                    'slidesToShow',
                    'currentSlide',
                    'slidesToScroll',
                    'clickHandler',
                    'children',
                    'customPaging',
                    'infinite',
                    'appendDots'
                  ]),
                  y = n.props.pauseOnDotsHover;
                (v = g({}, v, {
                  clickHandler: n.changeSlide,
                  onMouseEnter: y ? n.onDotsLeave : null,
                  onMouseOver: y ? n.onDotsOver : null,
                  onMouseLeave: y ? n.onDotsLeave : null
                })),
                  (e = r.default.createElement(c.Dots, v));
              }
              var b = (0, l.extractObject)(a, [
                'infinite',
                'centerMode',
                'currentSlide',
                'slideCount',
                'slidesToShow',
                'prevArrow',
                'nextArrow'
              ]);
              (b.clickHandler = n.changeSlide),
                n.props.arrows &&
                  ((t = r.default.createElement(d.PrevArrow, b)),
                  (o = r.default.createElement(d.NextArrow, b)));
              var m = null;
              n.props.vertical && (m = {height: n.state.listHeight});
              var w = null;
              !1 === n.props.vertical
                ? !0 === n.props.centerMode &&
                  (w = {padding: '0px ' + n.props.centerPadding})
                : !0 === n.props.centerMode &&
                  (w = {padding: n.props.centerPadding + ' 0px'});
              var S = g({}, m, {}, w),
                O = n.props.touchMove,
                k = {
                  className: 'slick-list',
                  style: S,
                  onClick: n.clickHandler,
                  onMouseDown: O ? n.swipeStart : null,
                  onMouseMove: n.state.dragging && O ? n.swipeMove : null,
                  onMouseUp: O ? n.swipeEnd : null,
                  onMouseLeave: n.state.dragging && O ? n.swipeEnd : null,
                  onTouchStart: O ? n.swipeStart : null,
                  onTouchMove: n.state.dragging && O ? n.swipeMove : null,
                  onTouchEnd: O ? n.swipeEnd : null,
                  onTouchCancel: n.state.dragging && O ? n.swipeEnd : null,
                  onKeyDown: n.props.accessibility ? n.keyHandler : null
                },
                _ = {className: i, dir: 'ltr'};
              return (
                n.props.unslick &&
                  ((k = {className: 'slick-list'}), (_ = {className: i})),
                r.default.createElement(
                  'div',
                  _,
                  n.props.unslick ? '' : t,
                  r.default.createElement(
                    'div',
                    h({ref: n.listRefHandler}, k),
                    r.default.createElement(
                      u.Track,
                      h({ref: n.trackRefHandler}, f),
                      n.props.children
                    )
                  ),
                  n.props.unslick ? '' : o,
                  n.props.unslick ? '' : e
                )
              );
            }),
            (n.list = null),
            (n.track = null),
            (n.state = g({}, i.default, {
              currentSlide: n.props.initialSlide,
              slideCount: r.default.Children.count(n.props.children)
            })),
            (n.callbackTimers = []),
            (n.clickable = !0),
            (n.debouncedResize = null),
            n
          );
        }
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {value: e, writable: !0, configurable: !0}
            })),
              t && S(e, t);
          })(t, e),
          t
        );
      })(r.default.Component);
      t.InnerSlider = k;
    },
    'vPd/': function(e, t, n) {
      var r = n('kCCV'),
        o = n('IX3V').each;
      function i(e, t) {
        (this.query = e),
          (this.isUnconditional = t),
          (this.handlers = []),
          (this.mql = window.matchMedia(e));
        var n = this;
        (this.listener = function(e) {
          (n.mql = e.currentTarget || e), n.assess();
        }),
          this.mql.addListener(this.listener);
      }
      (i.prototype = {
        constuctor: i,
        addHandler: function(e) {
          var t = new r(e);
          this.handlers.push(t), this.matches() && t.on();
        },
        removeHandler: function(e) {
          var t = this.handlers;
          o(t, function(n, r) {
            if (n.equals(e)) return n.destroy(), !t.splice(r, 1);
          });
        },
        matches: function() {
          return this.mql.matches || this.isUnconditional;
        },
        clear: function() {
          o(this.handlers, function(e) {
            e.destroy();
          }),
            this.mql.removeListener(this.listener),
            (this.handlers.length = 0);
        },
        assess: function() {
          var e = this.matches() ? 'on' : 'off';
          o(this.handlers, function(t) {
            t[e]();
          });
        }
      }),
        (e.exports = i);
    },
    vlRD: function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function() {
          return n('RNiq');
        }
      ]);
    },
    wZXL: function(e, t, n) {
      var r = n('vPd/'),
        o = n('IX3V'),
        i = o.each,
        a = o.isFunction,
        s = o.isArray;
      function l() {
        if (!window.matchMedia)
          throw new Error(
            'matchMedia not present, legacy browsers require a polyfill'
          );
        (this.queries = {}),
          (this.browserIsIncapable = !window.matchMedia('only all').matches);
      }
      (l.prototype = {
        constructor: l,
        register: function(e, t, n) {
          var o = this.queries,
            l = n && this.browserIsIncapable;
          return (
            o[e] || (o[e] = new r(e, l)),
            a(t) && (t = {match: t}),
            s(t) || (t = [t]),
            i(t, function(t) {
              a(t) && (t = {match: t}), o[e].addHandler(t);
            }),
            this
          );
        },
        unregister: function(e, t) {
          var n = this.queries[e];
          return (
            n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])),
            this
          );
        }
      }),
        (e.exports = l);
    },
    x9Za: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0}),
        (t.canUseDOM = t.slidesOnLeft = t.slidesOnRight = t.siblingDirection = t.getTotalSlides = t.getPostClones = t.getPreClones = t.getTrackLeft = t.getTrackAnimateCSS = t.getTrackCSS = t.checkSpecKeys = t.getSlideCount = t.checkNavigable = t.getNavigableIndexes = t.swipeEnd = t.swipeMove = t.swipeStart = t.keyHandler = t.changeSlide = t.slideHandler = t.initializedState = t.extractObject = t.canGoNext = t.getSwipeDirection = t.getHeight = t.getWidth = t.lazySlidesOnRight = t.lazySlidesOnLeft = t.lazyEndIndex = t.lazyStartIndex = t.getRequiredLazySlides = t.getOnDemandLazySlides = void 0);
      var r = i(n('q1tI')),
        o = i(n('i8i4'));
      function i(e) {
        return e && e.__esModule ? e : {default: e};
      }
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(n, !0).forEach(function(t) {
                l(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var u = function(e) {
        for (var t = [], n = c(e), r = d(e), o = n; o < r; o++)
          e.lazyLoadedList.indexOf(o) < 0 && t.push(o);
        return t;
      };
      t.getOnDemandLazySlides = u;
      t.getRequiredLazySlides = function(e) {
        for (var t = [], n = c(e), r = d(e), o = n; o < r; o++) t.push(o);
        return t;
      };
      var c = function(e) {
        return e.currentSlide - f(e);
      };
      t.lazyStartIndex = c;
      var d = function(e) {
        return e.currentSlide + p(e);
      };
      t.lazyEndIndex = d;
      var f = function(e) {
        return e.centerMode
          ? Math.floor(e.slidesToShow / 2) +
              (parseInt(e.centerPadding) > 0 ? 1 : 0)
          : 0;
      };
      t.lazySlidesOnLeft = f;
      var p = function(e) {
        return e.centerMode
          ? Math.floor((e.slidesToShow - 1) / 2) +
              1 +
              (parseInt(e.centerPadding) > 0 ? 1 : 0)
          : e.slidesToShow;
      };
      t.lazySlidesOnRight = p;
      var h = function(e) {
        return (e && e.offsetWidth) || 0;
      };
      t.getWidth = h;
      var v = function(e) {
        return (e && e.offsetHeight) || 0;
      };
      t.getHeight = v;
      var y = function(e) {
        var t,
          n,
          r,
          o,
          i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (t = e.startX - e.curX),
          (n = e.startY - e.curY),
          (r = Math.atan2(n, t)),
          (o = Math.round((180 * r) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
          (o <= 45 && o >= 0) || (o <= 360 && o >= 315)
            ? 'left'
            : o >= 135 && o <= 225
            ? 'right'
            : !0 === i
            ? o >= 35 && o <= 135
              ? 'up'
              : 'down'
            : 'vertical'
        );
      };
      t.getSwipeDirection = y;
      var b = function(e) {
        var t = !0;
        return (
          e.infinite ||
            (e.centerMode && e.currentSlide >= e.slideCount - 1
              ? (t = !1)
              : (e.slideCount <= e.slidesToShow ||
                  e.currentSlide >= e.slideCount - e.slidesToShow) &&
                (t = !1)),
          t
        );
      };
      t.canGoNext = b;
      t.extractObject = function(e, t) {
        var n = {};
        return (
          t.forEach(function(t) {
            return (n[t] = e[t]);
          }),
          n
        );
      };
      t.initializedState = function(e) {
        var t,
          n = r.default.Children.count(e.children),
          i = Math.ceil(h(o.default.findDOMNode(e.listRef))),
          a = Math.ceil(h(o.default.findDOMNode(e.trackRef)));
        if (e.vertical) t = i;
        else {
          var s = e.centerMode && 2 * parseInt(e.centerPadding);
          'string' === typeof e.centerPadding &&
            '%' === e.centerPadding.slice(-1) &&
            (s *= i / 100),
            (t = Math.ceil((i - s) / e.slidesToShow));
        }
        var l =
            o.default.findDOMNode(e.listRef) &&
            v(
              o.default.findDOMNode(e.listRef).querySelector('[data-index="0"]')
            ),
          c = l * e.slidesToShow,
          d = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
        e.rtl && void 0 === e.currentSlide && (d = n - 1 - e.initialSlide);
        var f = e.lazyLoadedList || [],
          p = u({currentSlide: d, lazyLoadedList: f});
        f.concat(p);
        var y = {
          slideCount: n,
          slideWidth: t,
          listWidth: i,
          trackWidth: a,
          currentSlide: d,
          slideHeight: l,
          listHeight: c,
          lazyLoadedList: f
        };
        return (
          null === e.autoplaying && e.autoplay && (y.autoplaying = 'playing'), y
        );
      };
      t.slideHandler = function(e) {
        var t = e.waitForAnimate,
          n = e.animating,
          r = e.fade,
          o = e.infinite,
          i = e.index,
          a = e.slideCount,
          l = e.lazyLoadedList,
          c = e.lazyLoad,
          d = e.currentSlide,
          f = e.centerMode,
          p = e.slidesToScroll,
          h = e.slidesToShow,
          v = e.useCSS;
        if (t && n) return {};
        var y,
          g,
          m,
          w = i,
          S = {},
          x = {};
        if (r) {
          if (!o && (i < 0 || i >= a)) return {};
          i < 0 ? (w = i + a) : i >= a && (w = i - a),
            c && l.indexOf(w) < 0 && l.push(w),
            (S = {animating: !0, currentSlide: w, lazyLoadedList: l}),
            (x = {animating: !1});
        } else
          (y = w),
            w < 0
              ? ((y = w + a), o ? a % p !== 0 && (y = a - (a % p)) : (y = 0))
              : !b(e) && w > d
              ? (w = y = d)
              : f && w >= a
              ? ((w = o ? a : a - 1), (y = o ? 0 : a - 1))
              : w >= a &&
                ((y = w - a), o ? a % p !== 0 && (y = 0) : (y = a - h)),
            (g = _(s({}, e, {slideIndex: w}))),
            (m = _(s({}, e, {slideIndex: y}))),
            o || (g === m && (w = y), (g = m)),
            c && l.concat(u(s({}, e, {currentSlide: w}))),
            v
              ? ((S = {
                  animating: !0,
                  currentSlide: y,
                  trackStyle: k(s({}, e, {left: g})),
                  lazyLoadedList: l
                }),
                (x = {
                  animating: !1,
                  currentSlide: y,
                  trackStyle: O(s({}, e, {left: m})),
                  swipeLeft: null
                }))
              : (S = {
                  currentSlide: y,
                  trackStyle: O(s({}, e, {left: m})),
                  lazyLoadedList: l
                });
        return {state: S, nextState: x};
      };
      t.changeSlide = function(e, t) {
        var n,
          r,
          o,
          i,
          a = e.slidesToScroll,
          l = e.slidesToShow,
          u = e.slideCount,
          c = e.currentSlide,
          d = e.lazyLoad,
          f = e.infinite;
        if (((n = u % a !== 0 ? 0 : (u - c) % a), 'previous' === t.message))
          (i = c - (o = 0 === n ? a : l - n)),
            d && !f && (i = -1 === (r = c - o) ? u - 1 : r);
        else if ('next' === t.message)
          (i = c + (o = 0 === n ? a : n)), d && !f && (i = ((c + a) % u) + n);
        else if ('dots' === t.message) {
          if ((i = t.index * t.slidesToScroll) === t.currentSlide) return null;
        } else if ('children' === t.message) {
          if ((i = t.index) === t.currentSlide) return null;
          if (f) {
            var p = E(s({}, e, {targetSlide: i}));
            i > t.currentSlide && 'left' === p
              ? (i -= u)
              : i < t.currentSlide && 'right' === p && (i += u);
          }
        } else if (
          'index' === t.message &&
          (i = Number(t.index)) === t.currentSlide
        )
          return null;
        return i;
      };
      t.keyHandler = function(e, t, n) {
        return e.target.tagName.match('TEXTAREA|INPUT|SELECT') || !t
          ? ''
          : 37 === e.keyCode
          ? n
            ? 'next'
            : 'previous'
          : 39 === e.keyCode
          ? n
            ? 'previous'
            : 'next'
          : '';
      };
      t.swipeStart = function(e, t, n) {
        return (
          'IMG' === e.target.tagName && e.preventDefault(),
          !t || (!n && -1 !== e.type.indexOf('mouse'))
            ? ''
            : {
                dragging: !0,
                touchObject: {
                  startX: e.touches ? e.touches[0].pageX : e.clientX,
                  startY: e.touches ? e.touches[0].pageY : e.clientY,
                  curX: e.touches ? e.touches[0].pageX : e.clientX,
                  curY: e.touches ? e.touches[0].pageY : e.clientY
                }
              }
        );
      };
      t.swipeMove = function(e, t) {
        var n = t.scrolling,
          r = t.animating,
          o = t.vertical,
          i = t.swipeToSlide,
          a = t.verticalSwiping,
          l = t.rtl,
          u = t.currentSlide,
          c = t.edgeFriction,
          d = t.edgeDragged,
          f = t.onEdge,
          p = t.swiped,
          h = t.swiping,
          v = t.slideCount,
          g = t.slidesToScroll,
          m = t.infinite,
          w = t.touchObject,
          S = t.swipeEvent,
          k = t.listHeight,
          x = t.listWidth;
        if (!n) {
          if (r) return e.preventDefault();
          o && i && a && e.preventDefault();
          var T,
            j = {},
            E = _(t);
          (w.curX = e.touches ? e.touches[0].pageX : e.clientX),
            (w.curY = e.touches ? e.touches[0].pageY : e.clientY),
            (w.swipeLength = Math.round(
              Math.sqrt(Math.pow(w.curX - w.startX, 2))
            ));
          var M = Math.round(Math.sqrt(Math.pow(w.curY - w.startY, 2)));
          if (!a && !h && M > 10) return {scrolling: !0};
          a && (w.swipeLength = M);
          var P = (l ? -1 : 1) * (w.curX > w.startX ? 1 : -1);
          a && (P = w.curY > w.startY ? 1 : -1);
          var C = Math.ceil(v / g),
            L = y(t.touchObject, a),
            z = w.swipeLength;
          return (
            m ||
              (((0 === u && 'right' === L) ||
                (u + 1 >= C && 'left' === L) ||
                (!b(t) && 'left' === L)) &&
                ((z = w.swipeLength * c),
                !1 === d && f && (f(L), (j.edgeDragged = !0)))),
            !p && S && (S(L), (j.swiped = !0)),
            (T = o ? E + z * (k / x) * P : l ? E - z * P : E + z * P),
            a && (T = E + z * P),
            (j = s({}, j, {
              touchObject: w,
              swipeLeft: T,
              trackStyle: O(s({}, t, {left: T}))
            })),
            Math.abs(w.curX - w.startX) < 0.8 * Math.abs(w.curY - w.startY)
              ? j
              : (w.swipeLength > 10 && ((j.swiping = !0), e.preventDefault()),
                j)
          );
        }
      };
      t.swipeEnd = function(e, t) {
        var n = t.dragging,
          r = t.swipe,
          o = t.touchObject,
          i = t.listWidth,
          a = t.touchThreshold,
          l = t.verticalSwiping,
          u = t.listHeight,
          c = t.currentSlide,
          d = t.swipeToSlide,
          f = t.scrolling,
          p = t.onSwipe;
        if (!n) return r && e.preventDefault(), {};
        var h = l ? u / a : i / a,
          v = y(o, l),
          b = {
            dragging: !1,
            edgeDragged: !1,
            scrolling: !1,
            swiping: !1,
            swiped: !1,
            swipeLeft: null,
            touchObject: {}
          };
        if (f) return b;
        if (!o.swipeLength) return b;
        if (o.swipeLength > h) {
          var g, S;
          switch ((e.preventDefault(), p && p(v), v)) {
            case 'left':
            case 'up':
              (S = c + w(t)), (g = d ? m(t, S) : S), (b.currentDirection = 0);
              break;
            case 'right':
            case 'down':
              (S = c - w(t)), (g = d ? m(t, S) : S), (b.currentDirection = 1);
              break;
            default:
              g = c;
          }
          b.triggerSlideHandler = g;
        } else {
          var O = _(t);
          b.trackStyle = k(s({}, t, {left: O}));
        }
        return b;
      };
      var g = function(e) {
        for (
          var t = e.infinite ? 2 * e.slideCount : e.slideCount,
            n = e.infinite ? -1 * e.slidesToShow : 0,
            r = e.infinite ? -1 * e.slidesToShow : 0,
            o = [];
          n < t;

        )
          o.push(n),
            (n = r + e.slidesToScroll),
            (r += Math.min(e.slidesToScroll, e.slidesToShow));
        return o;
      };
      t.getNavigableIndexes = g;
      var m = function(e, t) {
        var n = g(e),
          r = 0;
        if (t > n[n.length - 1]) t = n[n.length - 1];
        else
          for (var o in n) {
            if (t < n[o]) {
              t = r;
              break;
            }
            r = n[o];
          }
        return t;
      };
      t.checkNavigable = m;
      var w = function(e) {
        var t = e.centerMode
          ? e.slideWidth * Math.floor(e.slidesToShow / 2)
          : 0;
        if (e.swipeToSlide) {
          var n,
            r = o.default
              .findDOMNode(e.listRef)
              .querySelectorAll('.slick-slide');
          if (
            (Array.from(r).every(function(r) {
              if (e.vertical) {
                if (r.offsetTop + v(r) / 2 > -1 * e.swipeLeft)
                  return (n = r), !1;
              } else if (r.offsetLeft - t + h(r) / 2 > -1 * e.swipeLeft) return (n = r), !1;
              return !0;
            }),
            !n)
          )
            return 0;
          var i = !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
          return Math.abs(n.dataset.index - i) || 1;
        }
        return e.slidesToScroll;
      };
      t.getSlideCount = w;
      var S = function(e, t) {
        return t.reduce(function(t, n) {
          return t && e.hasOwnProperty(n);
        }, !0)
          ? null
          : console.error('Keys Missing:', e);
      };
      t.checkSpecKeys = S;
      var O = function(e) {
        var t, n;
        S(e, [
          'left',
          'variableWidth',
          'slideCount',
          'slidesToShow',
          'slideWidth'
        ]);
        var r = e.slideCount + 2 * e.slidesToShow;
        e.vertical ? (n = r * e.slideHeight) : (t = j(e) * e.slideWidth);
        var o = {opacity: 1, transition: '', WebkitTransition: ''};
        e.useTransform
          ? (o = s({}, o, {
              WebkitTransform: e.vertical
                ? 'translate3d(0px, ' + e.left + 'px, 0px)'
                : 'translate3d(' + e.left + 'px, 0px, 0px)',
              transform: e.vertical
                ? 'translate3d(0px, ' + e.left + 'px, 0px)'
                : 'translate3d(' + e.left + 'px, 0px, 0px)',
              msTransform: e.vertical
                ? 'translateY(' + e.left + 'px)'
                : 'translateX(' + e.left + 'px)'
            }))
          : e.vertical
          ? (o.top = e.left)
          : (o.left = e.left);
        return (
          e.fade && (o = {opacity: 1}),
          t && (o.width = t),
          n && (o.height = n),
          window &&
            !window.addEventListener &&
            window.attachEvent &&
            (e.vertical
              ? (o.marginTop = e.left + 'px')
              : (o.marginLeft = e.left + 'px')),
          o
        );
      };
      t.getTrackCSS = O;
      var k = function(e) {
        S(e, [
          'left',
          'variableWidth',
          'slideCount',
          'slidesToShow',
          'slideWidth',
          'speed',
          'cssEase'
        ]);
        var t = O(e);
        return (
          e.useTransform
            ? ((t.WebkitTransition =
                '-webkit-transform ' + e.speed + 'ms ' + e.cssEase),
              (t.transition = 'transform ' + e.speed + 'ms ' + e.cssEase))
            : e.vertical
            ? (t.transition = 'top ' + e.speed + 'ms ' + e.cssEase)
            : (t.transition = 'left ' + e.speed + 'ms ' + e.cssEase),
          t
        );
      };
      t.getTrackAnimateCSS = k;
      var _ = function(e) {
        if (e.unslick) return 0;
        S(e, [
          'slideIndex',
          'trackRef',
          'infinite',
          'centerMode',
          'slideCount',
          'slidesToShow',
          'slidesToScroll',
          'slideWidth',
          'listWidth',
          'variableWidth',
          'slideHeight'
        ]);
        var t,
          n,
          r = e.slideIndex,
          i = e.trackRef,
          a = e.infinite,
          s = e.centerMode,
          l = e.slideCount,
          u = e.slidesToShow,
          c = e.slidesToScroll,
          d = e.slideWidth,
          f = e.listWidth,
          p = e.variableWidth,
          h = e.slideHeight,
          v = e.fade,
          y = e.vertical;
        if (v || 1 === e.slideCount) return 0;
        var b = 0;
        if (
          (a
            ? ((b = -x(e)),
              l % c !== 0 && r + c > l && (b = -(r > l ? u - (r - l) : l % c)),
              s && (b += parseInt(u / 2)))
            : (l % c !== 0 && r + c > l && (b = u - (l % c)),
              s && (b = parseInt(u / 2))),
          (t = y ? r * h * -1 + b * h : r * d * -1 + b * d),
          !0 === p)
        ) {
          var g,
            m = o.default.findDOMNode(i);
          if (
            ((g = r + x(e)),
            (t = (n = m && m.childNodes[g]) ? -1 * n.offsetLeft : 0),
            !0 === s)
          ) {
            (g = a ? r + x(e) : r), (n = m && m.children[g]), (t = 0);
            for (var w = 0; w < g; w++)
              t -= m && m.children[w] && m.children[w].offsetWidth;
            (t -= parseInt(e.centerPadding)),
              (t += n && (f - n.offsetWidth) / 2);
          }
        }
        return t;
      };
      t.getTrackLeft = _;
      var x = function(e) {
        return e.unslick || !e.infinite
          ? 0
          : e.variableWidth
          ? e.slideCount
          : e.slidesToShow + (e.centerMode ? 1 : 0);
      };
      t.getPreClones = x;
      var T = function(e) {
        return e.unslick || !e.infinite ? 0 : e.slideCount;
      };
      t.getPostClones = T;
      var j = function(e) {
        return 1 === e.slideCount ? 1 : x(e) + e.slideCount + T(e);
      };
      t.getTotalSlides = j;
      var E = function(e) {
        return e.targetSlide > e.currentSlide
          ? e.targetSlide > e.currentSlide + M(e)
            ? 'left'
            : 'right'
          : e.targetSlide < e.currentSlide - P(e)
          ? 'right'
          : 'left';
      };
      t.siblingDirection = E;
      var M = function(e) {
        var t = e.slidesToShow,
          n = e.centerMode,
          r = e.rtl,
          o = e.centerPadding;
        if (n) {
          var i = (t - 1) / 2 + 1;
          return parseInt(o) > 0 && (i += 1), r && t % 2 === 0 && (i += 1), i;
        }
        return r ? 0 : t - 1;
      };
      t.slidesOnRight = M;
      var P = function(e) {
        var t = e.slidesToShow,
          n = e.centerMode,
          r = e.rtl,
          o = e.centerPadding;
        if (n) {
          var i = (t - 1) / 2 + 1;
          return parseInt(o) > 0 && (i += 1), r || t % 2 !== 0 || (i += 1), i;
        }
        return r ? t - 1 : 0;
      };
      t.slidesOnLeft = P;
      t.canUseDOM = function() {
        return !(
          'undefined' === typeof window ||
          !window.document ||
          !window.document.createElement
        );
      };
    }
  },
  [['vlRD', 0, 1, 6, 5, 2, 3, 4, 9]]
]);
