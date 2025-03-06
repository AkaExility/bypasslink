var a0_0x5a3f42 = a0_0x3e686c(this, function () {
  var _0x595a12;
  try {
    var _0x33770a = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x595a12 = _0x33770a();
  } catch (_0xaf7dec) {
    _0x595a12 = window;
  }
  var _0x18057e = _0x595a12.console = _0x595a12.console || {};
  var _0x2596d7 = ['log', "warn", "info", "error", "exception", 'table', "trace"];
  for (var _0x43385b = 0; _0x43385b < _0x2596d7.length; _0x43385b++) {
    var _0x5c3c12 = a0_0x3e686c.constructor.prototype.bind(a0_0x3e686c);
    var _0x341c96 = _0x2596d7[_0x43385b];
    var _0x3368b6 = _0x18057e[_0x341c96] || _0x5c3c12;
    _0x5c3c12.__proto__ = a0_0x3e686c.bind(a0_0x3e686c);
    _0x5c3c12.toString = _0x3368b6.toString.bind(_0x3368b6);
    _0x18057e[_0x341c96] = _0x5c3c12;
  }
});
(function () {
  var _0x3efb19;
  try {
    var _0x43e1ec = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x3efb19 = _0x43e1ec();
  } catch (_0x543b95) {
    _0x3efb19 = window;
  }
  _0x3efb19.setInterval(a0_0x55f10d, 2000);
})();
(() => {
  'use strict';

  var _0x1fb580 = {
    0x38: (_0x1e2419, _0x14b33c, _0x1c77e9) => {
      _0x1e2419.exports = function (_0x552313) {
        var _0x7c4361 = _0x1c77e9.nc;
        if (_0x7c4361) {
          _0x552313.setAttribute("nonce", _0x7c4361);
        }
      };
    },
    0x48: _0x453530 => {
      var _0x47d01f = [];
      function _0x4de418(_0x53d7f9) {
        var _0x284952 = -1;
        for (var _0x237d6e = 0; _0x237d6e < _0x47d01f.length; _0x237d6e++) {
          if (_0x47d01f[_0x237d6e].identifier === _0x53d7f9) {
            _0x284952 = _0x237d6e;
            break;
          }
        }
        return _0x284952;
      }
      function _0xbce544(_0x3304d0, _0xc2477a) {
        var _0x52f65e = {};
        var _0x375765 = [];
        for (var _0x1d6e74 = 0; _0x1d6e74 < _0x3304d0.length; _0x1d6e74++) {
          var _0x1680dd = _0x3304d0[_0x1d6e74];
          var _0x2fa929 = _0xc2477a.base ? _0x1680dd[0] + _0xc2477a.base : _0x1680dd[0];
          var _0x407ae9 = _0x52f65e[_0x2fa929] || 0;
          var _0x225a45 = ''.concat(_0x2fa929, " ").concat(_0x407ae9);
          _0x52f65e[_0x2fa929] = _0x407ae9 + 1;
          var _0x219209 = {
            css: _0x1680dd[1],
            media: _0x1680dd[2],
            sourceMap: _0x1680dd[3],
            supports: _0x1680dd[4],
            "layer": _0x1680dd[5]
          };
          var _0x3c7bf1 = _0x4de418(_0x225a45);
          var _0x4c9a80 = _0x219209;
          if (-1 !== _0x3c7bf1) {
            _0x47d01f[_0x3c7bf1].references++;
            _0x47d01f[_0x3c7bf1].updater(_0x4c9a80);
          } else {
            var _0x596ee0 = _0x45fabf(_0x4c9a80, _0xc2477a);
            var _0x4ce54f = {
              identifier: _0x225a45,
              updater: _0x596ee0,
              references: 0x1
            };
            _0xc2477a.byIndex = _0x1d6e74;
            _0x47d01f.splice(_0x1d6e74, 0, _0x4ce54f);
          }
          _0x375765.push(_0x225a45);
        }
        return _0x375765;
      }
      function _0x45fabf(_0x176706, _0x545ebb) {
        var _0x440e57 = _0x545ebb.domAPI(_0x545ebb);
        _0x440e57.update(_0x176706);
        return function (_0x3997ac) {
          if (_0x3997ac) {
            if (_0x3997ac.css === _0x176706.css && _0x3997ac.media === _0x176706.media && _0x3997ac.sourceMap === _0x176706.sourceMap && _0x3997ac.supports === _0x176706.supports && _0x3997ac.layer === _0x176706.layer) {
              return;
            }
            _0x440e57.update(_0x176706 = _0x3997ac);
          } else {
            _0x440e57.remove();
          }
        };
      }
      _0x453530.exports = function (_0x20a3cf, _0x41005e) {
        var _0x3e7673 = _0xbce544(_0x20a3cf = _0x20a3cf || [], _0x41005e = _0x41005e || {});
        return function (_0x6a09ff) {
          _0x6a09ff = _0x6a09ff || [];
          for (var _0x4dd226 = 0; _0x4dd226 < _0x3e7673.length; _0x4dd226++) {
            var _0x3ad621 = _0x4de418(_0x3e7673[_0x4dd226]);
            _0x47d01f[_0x3ad621].references--;
          }
          var _0x3b720a = _0xbce544(_0x6a09ff, _0x41005e);
          for (var _0x12f790 = 0; _0x12f790 < _0x3e7673.length; _0x12f790++) {
            var _0x5b606b = _0x4de418(_0x3e7673[_0x12f790]);
            if (0 === _0x47d01f[_0x5b606b].references) {
              _0x47d01f[_0x5b606b].updater();
              _0x47d01f.splice(_0x5b606b, 1);
            }
          }
          _0x3e7673 = _0x3b720a;
        };
      };
    },
    0x71: _0x389bc0 => {
      _0x389bc0.exports = function (_0x36e9cc, _0x5af526) {
        if (_0x5af526.styleSheet) {
          _0x5af526.styleSheet.cssText = _0x36e9cc;
        } else {
          for (; _0x5af526.firstChild;) {
            _0x5af526.removeChild(_0x5af526.firstChild);
          }
          _0x5af526.appendChild(document.createTextNode(_0x36e9cc));
        }
      };
    },
    0x9c: (_0x506366, _0x3d9cda, _0x1a9863) => {
      var _0x58b8bb = {
        A: () => _0x511d2e
      };
      _0x1a9863.d(_0x3d9cda, _0x58b8bb);
      var _0x4bd10a = _0x1a9863(601);
      var _0x222aa1 = _0x1a9863.n(_0x4bd10a);
      var _0x5a8229 = _0x1a9863(314);
      var _0x511d2e = _0x1a9863.n(_0x5a8229)()(_0x222aa1());
      _0x511d2e.push([_0x506366.id, ":root{--yma-primary-color:#4CAF50;--yma-primary-light:#81C784;--yma-primary-dark:#388E3C;--yma-background:rgba(255, 255, 255, 0.98);--yma-text-color:#2c3e50;--yma-border-radius:16px;--yma-shadow:0 8px 32px rgba(76, 175, 80, 0.15);--yma-transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.yma-floating-card{position:fixed;bottom:20px;right:20px;width:380px;background:var(--yma-background);border-radius:var(--yma-border-radius);box-shadow:var(--yma-shadow);padding:24px;font-family:Roboto,sans-serif;transform:translateY(0);transition:var(--yma-transition);backdrop-filter:blur(10px);border:1px solid rgba(76,175,80,.1);z-index:999999}.yma-floating-card:hover{transform:translateY(-5px);box-shadow:0 15px 40px rgba(76,175,80,.2)}.yma-card-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px}.yma-header-left{display:flex;align-items:center;gap:12px}.yma-header-left i{color:var(--yma-primary-color);font-size:22px}.yma-btn i,.yma-checkbox-wrapper i{font-size:16px}.yma-card-title{font-size:18px;font-weight:600;color:var(--yma-text-color);letter-spacing:.5px}.yma-btn,.yma-url-input{font-size:15px;transition:var(--yma-transition)}.yma-checkbox-wrapper i,.yma-input-group i,.yma-minimize-btn{color:var(--yma-primary-color)}.yma-minimize-btn{background:rgba(76,175,80,.1);border:none;cursor:pointer;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:var(--yma-transition)}.yma-minimize-btn:hover{background:rgba(76,175,80,.2);transform:scale(1.05)}.yma-input-group{position:relative;margin-bottom:24px}.yma-input-group i{position:absolute;left:16px;top:50%;transform:translateY(-50%);font-size:16px}.yma-url-input{width:100%;padding:14px 16px 14px 48px;border:2px solid rgba(76,175,80,.2);border-radius:12px;background:rgba(255,255,255,.9)}.yma-url-input:focus{border-color:var(--yma-primary-color);outline:0;box-shadow:0 0 0 4px rgba(76,175,80,.1)}.yma-checkbox-group{display:flex;flex-direction:column;gap:16px;margin:24px 0}.yma-checkbox-wrapper,.yma-minimized{cursor:pointer;display:flex;align-items:center}.yma-checkbox-wrapper{gap:12px;padding:10px;border-radius:10px;transition:var(--yma-transition);background:rgba(76,175,80,.05)}.yma-checkbox-wrapper:hover{background:rgba(76,175,80,.1);transform:translateX(4px)}.yma-custom-checkbox{width:20px;height:20px;cursor:pointer;accent-color:var(--yma-primary-color)}.yma-button-group{display:flex;gap:16px}.yma-btn{flex:1;padding:14px 24px;border:none;border-radius:12px;font-weight:500;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;letter-spacing:.5px;white-space:nowrap}.yma-btn-primary{background:var(--yma-primary-color);color:#fff}.yma-btn-secondary,.yma-copyright i,.yma-notification i{color:var(--yma-primary-color)}.yma-btn-primary:hover{background:var(--yma-primary-dark)}.yma-btn-secondary{background:rgba(76,175,80,.1)}.yma-btn-secondary:hover{background:rgba(76,175,80,.2)}.yma-btn:hover{transform:translateY(-2px);box-shadow:0 5px 15px rgba(76,175,80,.2)}.yma-btn:active,.yma-notification.show{transform:translateY(0)}.yma-minimized{width:60px;height:60px;border-radius:30px;padding:0;background:var(--yma-background);justify-content:center}.yma-minimized .yma-card-content,.yma-minimized .yma-card-title,.yma-minimized .yma-copyright,.yma-minimized .yma-header-left,.yma-minimized .yma-notification{display:none}.yma-minimized .yma-card-header{margin:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.yma-minimized .yma-minimize-btn{background:0 0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;border-radius:30px}.yma-minimized .yma-minimize-btn i{font-size:20px}.yma-minimized .yma-minimize-btn:hover{background:0 0;transform:scale(1.1)}.yma-notification{display:none;background:rgba(76,175,80,.1);border-left:4px solid var(--yma-primary-color);padding:14px 16px;border-radius:10px;margin-bottom:20px;align-items:center;gap:12px;font-size:14px;color:var(--yma-text-color);opacity:0;transform:translateY(-10px);transition:var(--yma-transition)}.yma-notification.show{display:flex;opacity:1}.yma-notification i{font-size:18px}.yma-notification-message{flex:1;line-height:1.5}.yma-copyright{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:20px;border-top:1px solid rgba(76,175,80,.1);font-size:13px;color:#888;transition:var(--yma-transition);background:linear-gradient(135deg,rgba(76,175,80,.05),rgba(76,175,80,.1));padding:10px;border-radius:8px}.yma-copyright-name,.yma-copyright-name::after{background:linear-gradient(90deg,#4caf50,#2196f3,#9c27b0)}.yma-copyright i{font-size:16px;animation:2s infinite pulse}.yma-copyright-name{-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-weight:600;letter-spacing:.5px;position:relative}.yma-copyright-name::after{content:'';position:absolute;bottom:-2px;left:0;width:100%;height:1px;transform:scaleX(0);transform-origin:left;transition:transform .3s}.yma-copyright:hover .yma-copyright-name::after{transform:scaleX(1)}.yma-copyright:hover{box-shadow:0 4px 12px rgba(76,175,80,.15);transform:translateY(-2px)}@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}@media screen and (max-width:768px){.yma-floating-card{padding:15px}.yma-card-title{font-size:16px}.yma-btn,.yma-checkbox-wrapper{font-size:14px}.yma-btn{padding:10px 15px}}@media screen and (max-width:480px){.yma-input-group i,.yma-url-input{font-size:14px}.yma-floating-card{width:calc(100% - 40px);bottom:10px;right:20px;left:20px}.yma-button-group{flex-direction:column;gap:8px}.yma-btn{width:100%}.yma-checkbox-group{gap:10px}.yma-url-input{padding:10px 15px 10px 40px}}@media screen and (max-width:360px){.yma-floating-card{padding:12px}.yma-card-header{margin-bottom:15px}.yma-minimized{width:50px;height:50px;border-radius:25px;padding:12px}}@media screen and (max-height:600px){.yma-floating-card{bottom:10px}.yma-checkbox-group{margin:10px 0}.yma-input-group{margin-bottom:10px}}", '']);
    },
    0x13a: _0x4378fd => {
      _0x4378fd.exports = function (_0x212f43) {
        var _0x42d957 = [];
        _0x42d957.toString = function () {
          return this.map(function (_0x2b3fbb) {
            var _0x420375 = '';
            var _0x4043ee = undefined !== _0x2b3fbb[5];
            if (_0x2b3fbb[4]) {
              _0x420375 += "@supports (".concat(_0x2b3fbb[4], ") {");
            }
            if (_0x2b3fbb[2]) {
              _0x420375 += "@media ".concat(_0x2b3fbb[2], " {");
            }
            if (_0x4043ee) {
              _0x420375 += "@layer".concat(_0x2b3fbb[5].length > 0 ? " ".concat(_0x2b3fbb[5]) : '', " {");
            }
            _0x420375 += _0x212f43(_0x2b3fbb);
            if (_0x4043ee) {
              _0x420375 += '}';
            }
            if (_0x2b3fbb[2]) {
              _0x420375 += '}';
            }
            if (_0x2b3fbb[4]) {
              _0x420375 += '}';
            }
            return _0x420375;
          }).join('');
        };
        _0x42d957.i = function (_0x38e932, _0x2c538b, _0x497f67, _0x470b00, _0x50a02d) {
          if ("string" == typeof _0x38e932) {
            _0x38e932 = [[null, _0x38e932, undefined]];
          }
          var _0x52a823 = {};
          if (_0x497f67) {
            for (var _0x235355 = 0; _0x235355 < this.length; _0x235355++) {
              var _0x10dfd9 = this[_0x235355][0];
              if (null != _0x10dfd9) {
                _0x52a823[_0x10dfd9] = true;
              }
            }
          }
          for (var _0x11da78 = 0; _0x11da78 < _0x38e932.length; _0x11da78++) {
            var _0x107d02 = [].concat(_0x38e932[_0x11da78]);
            if (!(_0x497f67 && _0x52a823[_0x107d02[0]])) {
              if (undefined !== _0x50a02d) {
                if (!(undefined === _0x107d02[5])) {
                  _0x107d02[1] = "@layer".concat(_0x107d02[5].length > 0 ? " ".concat(_0x107d02[5]) : '', " {").concat(_0x107d02[1], '}');
                }
                _0x107d02[5] = _0x50a02d;
              }
              if (_0x2c538b) {
                if (_0x107d02[2]) {
                  _0x107d02[1] = "@media ".concat(_0x107d02[2], " {").concat(_0x107d02[1], '}');
                  _0x107d02[2] = _0x2c538b;
                } else {
                  _0x107d02[2] = _0x2c538b;
                }
              }
              if (_0x470b00) {
                if (_0x107d02[4]) {
                  _0x107d02[1] = "@supports (".concat(_0x107d02[4], ") {").concat(_0x107d02[1], '}');
                  _0x107d02[4] = _0x470b00;
                } else {
                  _0x107d02[4] = ''.concat(_0x470b00);
                }
              }
              _0x42d957.push(_0x107d02);
            }
          }
        };
        return _0x42d957;
      };
    },
    0x21c: _0x42d53e => {
      _0x42d53e.exports = function (_0x38dadf) {
        var _0x3356ca = document.createElement("style");
        _0x38dadf.setAttributes(_0x3356ca, _0x38dadf.attributes);
        _0x38dadf.insert(_0x3356ca, _0x38dadf.options);
        return _0x3356ca;
      };
    },
    0x259: _0x2c3f00 => {
      _0x2c3f00.exports = function (_0x5a61a5) {
        return _0x5a61a5[1];
      };
    },
    0x293: _0x283978 => {
      var _0x595457 = {};
      _0x283978.exports = function (_0x267e04, _0x3a0054) {
        var _0x284542 = function (_0xc8029a) {
          if (undefined === _0x595457[_0xc8029a]) {
            var _0x1bf923 = document.querySelector(_0xc8029a);
            if (window.HTMLIFrameElement && _0x1bf923 instanceof window.HTMLIFrameElement) {
              try {
                _0x1bf923 = _0x1bf923.contentDocument.head;
              } catch (_0x46239b) {
                _0x1bf923 = null;
              }
            }
            _0x595457[_0xc8029a] = _0x1bf923;
          }
          return _0x595457[_0xc8029a];
        }(_0x267e04);
        if (!_0x284542) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        _0x284542.appendChild(_0x3a0054);
      };
    },
    0x339: _0x4a27e8 => {
      _0x4a27e8.exports = function (_0x192cc6) {
        var _0x2c598b = {
          update: function () {},
          remove: function () {}
        };
        if ("undefined" == typeof document) {
          return _0x2c598b;
        }
        var _0x448ec1 = _0x192cc6.insertStyleElement(_0x192cc6);
        return {
          'update': function (_0x551775) {
            !function (_0x13b3c1, _0x69766e, _0x40946e) {
              var _0x2a7842 = '';
              if (_0x40946e.supports) {
                _0x2a7842 += "@supports (".concat(_0x40946e.supports, ") {");
              }
              if (_0x40946e.media) {
                _0x2a7842 += "@media ".concat(_0x40946e.media, " {");
              }
              var _0x4b5c53 = undefined !== _0x40946e.layer;
              if (_0x4b5c53) {
                _0x2a7842 += "@layer".concat(_0x40946e.layer.length > 0 ? " ".concat(_0x40946e.layer) : '', " {");
              }
              _0x2a7842 += _0x40946e.css;
              if (_0x4b5c53) {
                _0x2a7842 += '}';
              }
              if (_0x40946e.media) {
                _0x2a7842 += '}';
              }
              if (_0x40946e.supports) {
                _0x2a7842 += '}';
              }
              var _0x4d7ee1 = _0x40946e.sourceMap;
              if (_0x4d7ee1 && "undefined" != typeof btoa) {
                _0x2a7842 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(_0x4d7ee1)))), " */");
              }
              _0x69766e.styleTagTransform(_0x2a7842, _0x13b3c1, _0x69766e.options);
            }(_0x448ec1, _0x192cc6, _0x551775);
          },
          'remove': function () {
            !function (_0x18214b) {
              if (null === _0x18214b.parentNode) {
                return false;
              }
              _0x18214b.parentNode.removeChild(_0x18214b);
            }(_0x448ec1);
          }
        };
      };
    }
  };
  var _0x223756 = {};
  function _0x689d62(_0x2aac1b) {
    var _0x35a1dd = _0x223756[_0x2aac1b];
    if (undefined !== _0x35a1dd) {
      return _0x35a1dd.exports;
    }
    var _0x4b8b61 = _0x223756[_0x2aac1b] = {
      'id': _0x2aac1b,
      'exports': {}
    };
    _0x1fb580[_0x2aac1b](_0x4b8b61, _0x4b8b61.exports, _0x689d62);
    return _0x4b8b61.exports;
  }
  _0x689d62.n = _0x77d621 => {
    var _0xd9550c = _0x77d621 && _0x77d621.__esModule ? () => _0x77d621["default"] : () => _0x77d621;
    _0x689d62.d(_0xd9550c, {
      'a': _0xd9550c
    });
    return _0xd9550c;
  };
  _0x689d62.d = (_0x4141a0, _0x4f37cd) => {
    for (var _0x3c25e3 in _0x4f37cd) if (_0x689d62.o(_0x4f37cd, _0x3c25e3) && !_0x689d62.o(_0x4141a0, _0x3c25e3)) {
      Object.defineProperty(_0x4141a0, _0x3c25e3, {
        'enumerable': true,
        'get': _0x4f37cd[_0x3c25e3]
      });
    }
  };
  _0x689d62.o = (_0x4756b3, _0x906887) => Object.prototype.hasOwnProperty.call(_0x4756b3, _0x906887);
  _0x689d62.nc = undefined;
  var _0x3e45cc = {
    '188bet': "https://165.22.63.250",
    'w88': "https://188.166.185.213",
    'm88': "https://bet88se.com/",
    'fb88': "https://fb88ik.com/",
    'bk8': "https://188.166.189.40/",
    'v9bet': "https://188.166.224.89/",
    'vn88': "https://vn88mo.com/"
  };
  function _0xcce62c(_0x11160b) {
    _0xcce62c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x4f774f) {
      return typeof _0x4f774f;
    } : function (_0x1cd98d) {
      return _0x1cd98d && "function" == typeof Symbol && _0x1cd98d.constructor === Symbol && _0x1cd98d !== Symbol.prototype ? "symbol" : typeof _0x1cd98d;
    };
    return _0xcce62c(_0x11160b);
  }
  function _0x596c18(_0x2d7f3e, _0x3f1fd2) {
    _0x596c18 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_0xc780b6, _0x2884fd) {
      _0xc780b6.__proto__ = _0x2884fd;
      return _0xc780b6;
    };
    return _0x596c18(_0x2d7f3e, _0x3f1fd2);
  }
  function _0x2a49d2() {
    try {
      var _0x9d263f = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (_0x1cf01f) {}
    return (_0x2a49d2 = function () {
      return !!_0x9d263f;
    })();
  }
  function _0x921ac1() {
    _0x921ac1 = function () {
      return _0x53f558;
    };
    var _0xdcd15b;
    var _0x53f558 = {};
    var _0x384957 = Object.prototype;
    var _0x3d36ac = _0x384957.hasOwnProperty;
    var _0x2906ac = Object.defineProperty || function (_0x213440, _0x5acb01, _0x3cac7d) {
      _0x213440[_0x5acb01] = _0x3cac7d.value;
    };
    var _0x4780e6 = "function" == typeof Symbol ? Symbol : {};
    var _0x1a1bb0 = _0x4780e6.iterator || "@@iterator";
    var _0x882582 = _0x4780e6.asyncIterator || "@@asyncIterator";
    var _0x404bb2 = _0x4780e6.toStringTag || "@@toStringTag";
    function _0x4f8795(_0x7468df, _0x504519, _0x31ae50) {
      var _0x2b95a7 = {
        value: _0x31ae50,
        enumerable: true,
        configurable: true,
        writable: true
      };
      Object.defineProperty(_0x7468df, _0x504519, _0x2b95a7);
      return _0x7468df[_0x504519];
    }
    try {
      _0x4f8795({}, '');
    } catch (_0x43c984) {
      _0x4f8795 = function (_0x46b7ba, _0x5bfd49, _0x2bafce) {
        return _0x46b7ba[_0x5bfd49] = _0x2bafce;
      };
    }
    function _0x1b05bb(_0x189d14, _0x371b87, _0x2fa863, _0x3f6139) {
      var _0x383764 = _0x371b87 && _0x371b87.prototype instanceof _0x2132fe ? _0x371b87 : _0x2132fe;
      var _0x48c850 = Object.create(_0x383764.prototype);
      var _0x321f8c = new _0x314e39(_0x3f6139 || []);
      _0x2906ac(_0x48c850, "_invoke", {
        'value': _0x43dc7e(_0x189d14, _0x2fa863, _0x321f8c)
      });
      return _0x48c850;
    }
    function _0x4b4b20(_0x25f1fa, _0x20306d, _0x3ec4aa) {
      try {
        return {
          'type': "normal",
          'arg': _0x25f1fa.call(_0x20306d, _0x3ec4aa)
        };
      } catch (_0x5f108e) {
        var _0xb3a789 = {
          "type": "throw",
          "arg": _0x5f108e
        };
        return _0xb3a789;
      }
    }
    _0x53f558.wrap = _0x1b05bb;
    var _0x570b1d = {};
    function _0x2132fe() {}
    function _0x3c88c7() {}
    function _0x2dc0fe() {}
    var _0x3122ef = {};
    _0x4f8795(_0x3122ef, _0x1a1bb0, function () {
      return this;
    });
    var _0x2be9bb = Object.getPrototypeOf;
    var _0x207491 = _0x2be9bb && _0x2be9bb(_0x2be9bb(_0x3d15c7([])));
    if (_0x207491 && _0x207491 !== _0x384957 && _0x3d36ac.call(_0x207491, _0x1a1bb0)) {
      _0x3122ef = _0x207491;
    }
    var _0x39edc6 = _0x2dc0fe.prototype = _0x2132fe.prototype = Object.create(_0x3122ef);
    function _0x13618c(_0x1c04c9) {
      ["next", "throw", "return"].forEach(function (_0x568fcf) {
        _0x4f8795(_0x1c04c9, _0x568fcf, function (_0x4548c4) {
          return this._invoke(_0x568fcf, _0x4548c4);
        });
      });
    }
    function _0x523b72(_0x4611b7, _0xe773c3) {
      function _0x3cd75a(_0x1005ac, _0x4d39d0, _0x3f4bdc, _0x56e8bd) {
        var _0x336b89 = _0x4b4b20(_0x4611b7[_0x1005ac], _0x4611b7, _0x4d39d0);
        if ("throw" !== _0x336b89.type) {
          var _0x3ae2e4 = _0x336b89.arg;
          var _0xc165fe = _0x3ae2e4.value;
          return _0xc165fe && "object" == _0xcce62c(_0xc165fe) && _0x3d36ac.call(_0xc165fe, "__await") ? _0xe773c3.resolve(_0xc165fe.__await).then(function (_0x323217) {
            _0x3cd75a("next", _0x323217, _0x3f4bdc, _0x56e8bd);
          }, function (_0x5df7e6) {
            _0x3cd75a("throw", _0x5df7e6, _0x3f4bdc, _0x56e8bd);
          }) : _0xe773c3.resolve(_0xc165fe).then(function (_0x42d1f4) {
            _0x3ae2e4.value = _0x42d1f4;
            _0x3f4bdc(_0x3ae2e4);
          }, function (_0xc6273b) {
            return _0x3cd75a("throw", _0xc6273b, _0x3f4bdc, _0x56e8bd);
          });
        }
        _0x56e8bd(_0x336b89.arg);
      }
      var _0x45304a;
      _0x2906ac(this, "_invoke", {
        'value': function (_0x3ff65f, _0x204ba9) {
          function _0x5a000c() {
            return new _0xe773c3(function (_0x432974, _0x24a846) {
              _0x3cd75a(_0x3ff65f, _0x204ba9, _0x432974, _0x24a846);
            });
          }
          return _0x45304a = _0x45304a ? _0x45304a.then(_0x5a000c, _0x5a000c) : _0x5a000c();
        }
      });
    }
    function _0x43dc7e(_0x349bf3, _0x5dc752, _0x26199b) {
      var _0x1c0eb7 = "suspendedStart";
      return function (_0x44116f, _0x2f7009) {
        if (_0x1c0eb7 === "executing") {
          throw Error("Generator is already running");
        }
        if (_0x1c0eb7 === "completed") {
          if ("throw" === _0x44116f) {
            throw _0x2f7009;
          }
          var _0x309c2d = {
            "value": _0xdcd15b,
            "done": true
          };
          return _0x309c2d;
        }
        _0x26199b.method = _0x44116f;
        for (_0x26199b.arg = _0x2f7009;;) {
          var _0x47005f = _0x26199b.delegate;
          if (_0x47005f) {
            var _0x3a2b22 = _0x271a42(_0x47005f, _0x26199b);
            if (_0x3a2b22) {
              if (_0x3a2b22 === _0x570b1d) {
                continue;
              }
              return _0x3a2b22;
            }
          }
          if ("next" === _0x26199b.method) {
            _0x26199b.sent = _0x26199b._sent = _0x26199b.arg;
          } else {
            if ("throw" === _0x26199b.method) {
              if (_0x1c0eb7 === "suspendedStart") {
                _0x1c0eb7 = "completed";
                throw _0x26199b.arg;
              }
              _0x26199b.dispatchException(_0x26199b.arg);
            } else if ("return" === _0x26199b.method) {
              _0x26199b.abrupt("return", _0x26199b.arg);
            }
          }
          _0x1c0eb7 = "executing";
          var _0x420e4d = _0x4b4b20(_0x349bf3, _0x5dc752, _0x26199b);
          if ("normal" === _0x420e4d.type) {
            _0x1c0eb7 = _0x26199b.done ? "completed" : "suspendedYield";
            if (_0x420e4d.arg === _0x570b1d) {
              continue;
            }
            var _0x10bf60 = {
              "value": _0x420e4d.arg,
              "done": _0x26199b.done
            };
            return _0x10bf60;
          }
          if ("throw" === _0x420e4d.type) {
            _0x1c0eb7 = "completed";
            _0x26199b.method = "throw";
            _0x26199b.arg = _0x420e4d.arg;
          }
        }
      };
    }
    function _0x271a42(_0x57e14a, _0x495a05) {
      var _0x2996ea = _0x495a05.method;
      var _0x3fdc6f = _0x57e14a.iterator[_0x2996ea];
      if (_0x3fdc6f === _0xdcd15b) {
        _0x495a05.delegate = null;
        if (!("throw" === _0x2996ea && _0x57e14a.iterator["return"] && (_0x495a05.method = "return", _0x495a05.arg = _0xdcd15b, _0x271a42(_0x57e14a, _0x495a05), "throw" === _0x495a05.method))) {
          if ("return" !== _0x2996ea) {
            _0x495a05.method = "throw";
            _0x495a05.arg = new TypeError("The iterator does not provide a '" + _0x2996ea + "' method");
          }
        }
        return _0x570b1d;
      }
      var _0x1b4d29 = _0x4b4b20(_0x3fdc6f, _0x57e14a.iterator, _0x495a05.arg);
      if ("throw" === _0x1b4d29.type) {
        _0x495a05.method = 'throw';
        _0x495a05.arg = _0x1b4d29.arg;
        _0x495a05.delegate = null;
        return _0x570b1d;
      }
      var _0x172fa6 = _0x1b4d29.arg;
      return _0x172fa6 ? _0x172fa6.done ? (_0x495a05[_0x57e14a.resultName] = _0x172fa6.value, _0x495a05.next = _0x57e14a.nextLoc, "return" !== _0x495a05.method && (_0x495a05.method = "next", _0x495a05.arg = _0xdcd15b), _0x495a05.delegate = null, _0x570b1d) : _0x172fa6 : (_0x495a05.method = "throw", _0x495a05.arg = new TypeError("iterator result is not an object"), _0x495a05.delegate = null, _0x570b1d);
    }
    function _0x3dd994(_0x25d645) {
      var _0x3c1fa1 = {
        tryLoc: _0x25d645[0]
      };
      if (1 in _0x25d645) {
        _0x3c1fa1.catchLoc = _0x25d645[1];
      }
      if (2 in _0x25d645) {
        _0x3c1fa1.finallyLoc = _0x25d645[2];
        _0x3c1fa1.afterLoc = _0x25d645[3];
      }
      this.tryEntries.push(_0x3c1fa1);
    }
    function _0x5a5f1e(_0x3e839a) {
      var _0x538ef2 = _0x3e839a.completion || {};
      _0x538ef2.type = "normal";
      delete _0x538ef2.arg;
      _0x3e839a.completion = _0x538ef2;
    }
    function _0x314e39(_0x5b7603) {
      var _0x17644a = {
        tryLoc: 'root'
      };
      this.tryEntries = [_0x17644a];
      _0x5b7603.forEach(_0x3dd994, this);
      this.reset(true);
    }
    function _0x3d15c7(_0x53558a) {
      if (_0x53558a || '' === _0x53558a) {
        var _0x1df106 = _0x53558a[_0x1a1bb0];
        if (_0x1df106) {
          return _0x1df106.call(_0x53558a);
        }
        if ("function" == typeof _0x53558a.next) {
          return _0x53558a;
        }
        if (!isNaN(_0x53558a.length)) {
          var _0x294f31 = -1;
          var _0x4ebf10 = function _0x4e0261() {
            for (; ++_0x294f31 < _0x53558a.length;) {
              if (_0x3d36ac.call(_0x53558a, _0x294f31)) {
                _0x4e0261.value = _0x53558a[_0x294f31];
                _0x4e0261.done = false;
                return _0x4e0261;
              }
            }
            _0x4e0261.value = _0xdcd15b;
            _0x4e0261.done = true;
            return _0x4e0261;
          };
          return _0x4ebf10.next = _0x4ebf10;
        }
      }
      throw new TypeError(_0xcce62c(_0x53558a) + " is not iterable");
    }
    _0x3c88c7.prototype = _0x2dc0fe;
    _0x2906ac(_0x39edc6, "constructor", {
      'value': _0x2dc0fe,
      'configurable': true
    });
    _0x2906ac(_0x2dc0fe, "constructor", {
      'value': _0x3c88c7,
      'configurable': true
    });
    _0x3c88c7.displayName = _0x4f8795(_0x2dc0fe, _0x404bb2, "GeneratorFunction");
    _0x53f558.isGeneratorFunction = function (_0x32f773) {
      var _0x4b83f4 = "function" == typeof _0x32f773 && _0x32f773.constructor;
      return !!_0x4b83f4 && (_0x4b83f4 === _0x3c88c7 || "GeneratorFunction" === (_0x4b83f4.displayName || _0x4b83f4.name));
    };
    _0x53f558.mark = function (_0x2d3e03) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(_0x2d3e03, _0x2dc0fe);
      } else {
        _0x2d3e03.__proto__ = _0x2dc0fe;
        _0x4f8795(_0x2d3e03, _0x404bb2, "GeneratorFunction");
      }
      _0x2d3e03.prototype = Object.create(_0x39edc6);
      return _0x2d3e03;
    };
    _0x53f558.awrap = function (_0x2ec8cc) {
      var _0xa2236b = {
        __await: _0x2ec8cc
      };
      return _0xa2236b;
    };
    _0x13618c(_0x523b72.prototype);
    _0x4f8795(_0x523b72.prototype, _0x882582, function () {
      return this;
    });
    _0x53f558.AsyncIterator = _0x523b72;
    _0x53f558.async = function (_0x353e22, _0x370486, _0x4e1ef4, _0x4ac378, _0x3d33a8) {
      if (undefined === _0x3d33a8) {
        _0x3d33a8 = Promise;
      }
      var _0x566b0a = new _0x523b72(_0x1b05bb(_0x353e22, _0x370486, _0x4e1ef4, _0x4ac378), _0x3d33a8);
      return _0x53f558.isGeneratorFunction(_0x370486) ? _0x566b0a : _0x566b0a.next().then(function (_0x4abd08) {
        return _0x4abd08.done ? _0x4abd08.value : _0x566b0a.next();
      });
    };
    _0x13618c(_0x39edc6);
    _0x4f8795(_0x39edc6, _0x404bb2, "Generator");
    _0x4f8795(_0x39edc6, _0x1a1bb0, function () {
      return this;
    });
    _0x4f8795(_0x39edc6, "toString", function () {
      return "[object Generator]";
    });
    _0x53f558.keys = function (_0x3320ca) {
      var _0x13af45 = Object(_0x3320ca);
      var _0x3ba8f5 = [];
      for (var _0x279320 in _0x13af45) _0x3ba8f5.push(_0x279320);
      _0x3ba8f5.reverse();
      return function _0x50ea64() {
        for (; _0x3ba8f5.length;) {
          var _0x5ef618 = _0x3ba8f5.pop();
          if (_0x5ef618 in _0x13af45) {
            _0x50ea64.value = _0x5ef618;
            _0x50ea64.done = false;
            return _0x50ea64;
          }
        }
        _0x50ea64.done = true;
        return _0x50ea64;
      };
    };
    _0x53f558.values = _0x3d15c7;
    _0x314e39.prototype = {
      'constructor': _0x314e39,
      'reset': function (_0x4668b2) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = _0xdcd15b;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = _0xdcd15b;
        this.tryEntries.forEach(_0x5a5f1e);
        if (!_0x4668b2) {
          for (var _0x445b2b in this) if ('t' === _0x445b2b.charAt(0) && _0x3d36ac.call(this, _0x445b2b) && !isNaN(+_0x445b2b.slice(1))) {
            this[_0x445b2b] = _0xdcd15b;
          }
        }
      },
      'stop': function () {
        this.done = true;
        var _0x432b5e = this.tryEntries[0].completion;
        if ("throw" === _0x432b5e.type) {
          throw _0x432b5e.arg;
        }
        return this.rval;
      },
      'dispatchException': function (_0xe69091) {
        if (this.done) {
          throw _0xe69091;
        }
        var _0x122f3a = this;
        function _0x1499c6(_0x5e7b9c, _0x17057d) {
          _0x48f207.type = "throw";
          _0x48f207.arg = _0xe69091;
          _0x122f3a.next = _0x5e7b9c;
          if (_0x17057d) {
            _0x122f3a.method = 'next';
            _0x122f3a.arg = _0xdcd15b;
          }
          return !!_0x17057d;
        }
        for (var _0x2c83b2 = this.tryEntries.length - 1; _0x2c83b2 >= 0; --_0x2c83b2) {
          var _0x4067c0 = this.tryEntries[_0x2c83b2];
          var _0x48f207 = _0x4067c0.completion;
          if ('root' === _0x4067c0.tryLoc) {
            return _0x1499c6('end');
          }
          if (_0x4067c0.tryLoc <= this.prev) {
            var _0x35c20a = _0x3d36ac.call(_0x4067c0, "catchLoc");
            var _0x1cd730 = _0x3d36ac.call(_0x4067c0, "finallyLoc");
            if (_0x35c20a && _0x1cd730) {
              if (this.prev < _0x4067c0.catchLoc) {
                return _0x1499c6(_0x4067c0.catchLoc, true);
              }
              if (this.prev < _0x4067c0.finallyLoc) {
                return _0x1499c6(_0x4067c0.finallyLoc);
              }
            } else {
              if (_0x35c20a) {
                if (this.prev < _0x4067c0.catchLoc) {
                  return _0x1499c6(_0x4067c0.catchLoc, true);
                }
              } else {
                if (!_0x1cd730) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < _0x4067c0.finallyLoc) {
                  return _0x1499c6(_0x4067c0.finallyLoc);
                }
              }
            }
          }
        }
      },
      'abrupt': function (_0x285436, _0xd7152e) {
        for (var _0x3390ef = this.tryEntries.length - 1; _0x3390ef >= 0; --_0x3390ef) {
          var _0x550d31 = this.tryEntries[_0x3390ef];
          if (_0x550d31.tryLoc <= this.prev && _0x3d36ac.call(_0x550d31, "finallyLoc") && this.prev < _0x550d31.finallyLoc) {
            var _0x93e55c = _0x550d31;
            break;
          }
        }
        if (_0x93e55c && ("break" === _0x285436 || "continue" === _0x285436) && _0x93e55c.tryLoc <= _0xd7152e && _0xd7152e <= _0x93e55c.finallyLoc) {
          _0x93e55c = null;
        }
        var _0x36df5f = _0x93e55c ? _0x93e55c.completion : {};
        _0x36df5f.type = _0x285436;
        _0x36df5f.arg = _0xd7152e;
        return _0x93e55c ? (this.method = "next", this.next = _0x93e55c.finallyLoc, _0x570b1d) : this.complete(_0x36df5f);
      },
      'complete': function (_0x39ed38, _0x2be000) {
        if ("throw" === _0x39ed38.type) {
          throw _0x39ed38.arg;
        }
        if ("break" === _0x39ed38.type || "continue" === _0x39ed38.type) {
          this.next = _0x39ed38.arg;
        } else if ("return" === _0x39ed38.type) {
          this.rval = this.arg = _0x39ed38.arg;
          this.method = "return";
          this.next = "end";
        } else if ("normal" === _0x39ed38.type && _0x2be000) {
          this.next = _0x2be000;
        }
        return _0x570b1d;
      },
      'finish': function (_0x31a432) {
        for (var _0x862dbb = this.tryEntries.length - 1; _0x862dbb >= 0; --_0x862dbb) {
          var _0x555665 = this.tryEntries[_0x862dbb];
          if (_0x555665.finallyLoc === _0x31a432) {
            this.complete(_0x555665.completion, _0x555665.afterLoc);
            _0x5a5f1e(_0x555665);
            return _0x570b1d;
          }
        }
      },
      'catch': function (_0xa7424d) {
        for (var _0x36f9d8 = this.tryEntries.length - 1; _0x36f9d8 >= 0; --_0x36f9d8) {
          var _0xd53af2 = this.tryEntries[_0x36f9d8];
          if (_0xd53af2.tryLoc === _0xa7424d) {
            var _0x35f2fa = _0xd53af2.completion;
            if ("throw" === _0x35f2fa.type) {
              var _0x338be2 = _0x35f2fa.arg;
              _0x5a5f1e(_0xd53af2);
            }
            return _0x338be2;
          }
        }
        throw Error("illegal catch attempt");
      },
      'delegateYield': function (_0x1c7255, _0x9f0450, _0x5f3c88) {
        this.delegate = {
          'iterator': _0x3d15c7(_0x1c7255),
          'resultName': _0x9f0450,
          'nextLoc': _0x5f3c88
        };
        if ("next" === this.method) {
          this.arg = _0xdcd15b;
        }
        return _0x570b1d;
      }
    };
    return _0x53f558;
  }
  function _0x347b95(_0x564593, _0x3c748f, _0x447d8f, _0x170c0f, _0x4cad15, _0x4e30da, _0x5d9fc9) {
    try {
      var _0x66346e = _0x564593[_0x4e30da](_0x5d9fc9);
      var _0x526ae8 = _0x66346e.value;
    } catch (_0x20b25b) {
      return void _0x447d8f(_0x20b25b);
    }
    if (_0x66346e.done) {
      _0x3c748f(_0x526ae8);
    } else {
      Promise.resolve(_0x526ae8).then(_0x170c0f, _0x4cad15);
    }
  }
  var _0x1b6fac = {
    'formatDate': function (_0x5068c6) {
      return new Date(_0x5068c6).toLocaleDateString("vi-VN");
    },
    'log': function (_0x5804d0) {
      var _0x4ffa7e = new Date().toLocaleTimeString("vi-VN");
      console.log("[Script Log ".concat(_0x4ffa7e, "]: ").concat(_0x5804d0));
    },
    'logData': function (_0x1b979d) {
      var _0xad825 = new Date().toLocaleTimeString("vi-VN");
      console.log("[Script Log Data ".concat(_0xad825, "]: "), _0x1b979d);
    },
    'getTimestamp': function () {
      return new Date().getTime() - 100000;
    },
    'getImgQuestionId': function () {
      return document.getElementById("hinh_nv") ? document.getElementById("hinh_nv").getAttribute("src") : null;
    },
    'getKeyword': function () {
      return document.getElementById('TK1') ? document.getElementById('TK1').textContent : null;
    },
    'sleep': function (_0x580d1e) {
      _0x52dfad = _0x921ac1().mark(function _0x309456() {
        return _0x921ac1().wrap(function (_0xbed7b8) {
          for (;;) {
            switch (_0xbed7b8.prev = _0xbed7b8.next) {
              case 0:
                _0xbed7b8.next = 2;
                return new Promise(function (_0x4c6c5e) {
                  return setTimeout(_0x4c6c5e, _0x580d1e);
                });
              case 2:
                return _0xbed7b8.abrupt("return", _0xbed7b8.sent);
              case 3:
              case "end":
                return _0xbed7b8.stop();
            }
          }
        }, _0x309456);
      });
      return function () {
        var _0x544bae = this;
        return new Promise(function (_0x13c5eb, _0x562e40) {
          var _0x17bb9a = _0x52dfad.apply(_0x544bae, arguments);
          function _0x53bf46(_0x52a677) {
            _0x347b95(_0x17bb9a, _0x13c5eb, _0x562e40, _0x53bf46, _0x1513e2, "next", _0x52a677);
          }
          function _0x1513e2(_0xc679cd) {
            _0x347b95(_0x17bb9a, _0x13c5eb, _0x562e40, _0x53bf46, _0x1513e2, "throw", _0xc679cd);
          }
          _0x53bf46(undefined);
        });
      }();
      var _0x52dfad;
    },
    'random': function () {
      var _0x149169 = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 5;
      var _0xc423f8 = '';
      for (var _0x5eee1f = 0; _0x5eee1f < _0x149169; _0x5eee1f++) {
        _0xc423f8 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random()));
      }
      return _0xc423f8;
    },
    'getCodexn': function (_0x15f8ed) {
      return _0x15f8ed.match(/<script>([\s\S]*?)<\/script>/)[1].match(/localStorage\.codexn = '([^']+)';/)[1];
    },
    'saveCodexn': function (_0x5ce6a7) {
      window.localStorage.setItem("codexn", _0x5ce6a7);
    },
    'regexMa': function (_0x2c577c, _0xa07160) {
      var _0x1c61c = new DOMParser().parseFromString(_0x2c577c, "text/html");
      var _0x4712ea = _0xa07160 ? _0x1c61c.querySelector("#layma_me_tfudirect") : _0x1c61c.querySelector("#layma_me_vuatraffic");
      return _0x4712ea ? _0x4712ea.textContent.trim() : null;
    },
    'setURL': function (_0x75b94f) {
      document.getElementById("urlInput").value = _0x75b94f;
    },
    'isTypeDr': function () {
      return document.querySelector(".box-step-getCode > span > img").getAttribute("src").includes("/theme_v2/assets/img/img-get-code-dr.webp");
    },
    'getDataBodyForGetDirect': function (_0x4a0730) {
      var _0x2fc9f6 = new DOMParser().parseFromString(_0x4a0730, "text/html");
      return {
        'TOP_NUT': _0x2fc9f6.getElementById("top_nut_tfudirect").value,
        'LEFT_NUT': _0x2fc9f6.getElementById("lef_nut_tfudirect").value,
        'NO_NUT': _0x2fc9f6.getElementById("lef_nut_tfudirect").name
      };
    },
    'getCodexnd': function (_0x49c7ff) {
      return _0x49c7ff.match(/<script>([\s\S]*?)<\/script>/)[1].match(/localStorage\.codexnd = '([^']+)';/)[1];
    },
    'saveCodexnd': function (_0x191222) {
      window.localStorage.setItem("codexnd", _0x191222);
    },
    'getClk': function (_0x4ddd66) {
      var _0x47c7ac = _0x4ddd66.match(/sessionStorage\.setItem\("tfudclk",\s*(\d+)\)/);
      return _0x47c7ac ? _0x47c7ac[1] : null;
    },
    'setBackTime': function () {
      try {
        var _0x484722 = window.Date;
        var _0x936fb8 = Date.prototype.getTime;
        var _0x40c211 = Date.now;
        window.Date = function () {
          var _0x5c2458 = arguments.length;
          var _0x175407 = new Array(_0x5c2458);
          for (var _0x56a11e = 0; _0x56a11e < _0x5c2458; _0x56a11e++) {
            _0x175407[_0x56a11e] = arguments[_0x56a11e];
          }
          if (0 === _0x175407.length) {
            var _0xb0d5d9 = new _0x484722();
            _0xb0d5d9.setTime(_0xb0d5d9.getTime() - 80000);
            return _0xb0d5d9;
          }
          return function (_0x21b2a4, _0x2b075d, _0x24389c) {
            if (_0x2a49d2()) {
              return Reflect.construct.apply(null, arguments);
            }
            var _0x26c952 = [null];
            _0x26c952.push.apply(_0x26c952, _0x2b075d);
            var _0x5a0ed5 = new (_0x21b2a4.bind.apply(_0x21b2a4, _0x26c952))();
            if (_0x24389c) {
              _0x596c18(_0x5a0ed5, _0x24389c.prototype);
            }
            return _0x5a0ed5;
          }(_0x484722, _0x175407);
        };
        window.Date.prototype = _0x484722.prototype;
        window.Date.now = function () {
          return _0x40c211() - 80000;
        };
        Date.prototype.getTime = function () {
          return this._isAdjusted ? _0x936fb8.call(this) : _0x936fb8.call(this) - 80000;
        };
        _0x1b6fac.logData("Time now", new Date().toISOString());
      } catch (_0x812da3) {
        console.error("Lỗi khi set thời gian:", _0x812da3);
      }
    }
  };
  var _0x196044 = {
    'timer': null,
    'start': function (_0x2b89e6, _0x33c039, _0x545f10) {
      var _0xaab712 = this;
      if (this.timer) {
        this.stop();
      }
      var _0x5a8984 = _0x2b89e6;
      if (_0x33c039) {
        _0x33c039(_0x5a8984);
      }
      this.timer = setInterval(function () {
        _0x5a8984--;
        if (_0x33c039) {
          _0x33c039(_0x5a8984);
        }
        if (_0x5a8984 <= 0) {
          _0xaab712.stop();
          if (_0x545f10) {
            _0x545f10();
          }
        }
      }, 1000);
    },
    'stop': function () {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  };
  function _0x1a105f(_0x15b827) {
    _0x1a105f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x20e36c) {
      return typeof _0x20e36c;
    } : function (_0x461dcd) {
      return _0x461dcd && "function" == typeof Symbol && _0x461dcd.constructor === Symbol && _0x461dcd !== Symbol.prototype ? "symbol" : typeof _0x461dcd;
    };
    return _0x1a105f(_0x15b827);
  }
  function _0x19f335() {
    _0x19f335 = function () {
      return _0xeb0ff4;
    };
    var _0x3f5308;
    var _0xeb0ff4 = {};
    var _0x3f2548 = Object.prototype;
    var _0x5ce705 = _0x3f2548.hasOwnProperty;
    var _0x1c8b44 = Object.defineProperty || function (_0x2aad8d, _0x375988, _0x18b0db) {
      _0x2aad8d[_0x375988] = _0x18b0db.value;
    };
    var _0x2e8f4e = "function" == typeof Symbol ? Symbol : {};
    var _0x5ccbee = _0x2e8f4e.iterator || "@@iterator";
    var _0x481958 = _0x2e8f4e.asyncIterator || "@@asyncIterator";
    var _0x288466 = _0x2e8f4e.toStringTag || "@@toStringTag";
    function _0xf865fa(_0x383799, _0x283bfb, _0x3a1acd) {
      var _0x3744c2 = {
        value: _0x3a1acd,
        enumerable: true,
        configurable: true,
        writable: true
      };
      Object.defineProperty(_0x383799, _0x283bfb, _0x3744c2);
      return _0x383799[_0x283bfb];
    }
    try {
      _0xf865fa({}, '');
    } catch (_0xafdd97) {
      _0xf865fa = function (_0x54a8cc, _0x1ecbd2, _0x576c7d) {
        return _0x54a8cc[_0x1ecbd2] = _0x576c7d;
      };
    }
    function _0x359578(_0x5afaa2, _0x3f9910, _0x2df59c, _0x2e623d) {
      var _0x5d3ac9 = _0x3f9910 && _0x3f9910.prototype instanceof _0x13bdbf ? _0x3f9910 : _0x13bdbf;
      var _0x68c0e4 = Object.create(_0x5d3ac9.prototype);
      var _0x207433 = new _0x2edefd(_0x2e623d || []);
      _0x1c8b44(_0x68c0e4, "_invoke", {
        'value': _0x5affd7(_0x5afaa2, _0x2df59c, _0x207433)
      });
      return _0x68c0e4;
    }
    function _0x5c02b4(_0x15a9e9, _0x2cb92a, _0x2507d5) {
      try {
        return {
          'type': "normal",
          'arg': _0x15a9e9.call(_0x2cb92a, _0x2507d5)
        };
      } catch (_0x3ea88e) {
        var _0x5ae4dc = {
          type: "throw",
          arg: _0x3ea88e
        };
        return _0x5ae4dc;
      }
    }
    _0xeb0ff4.wrap = _0x359578;
    var _0x58427d = {};
    function _0x13bdbf() {}
    function _0x537505() {}
    function _0x31b13b() {}
    var _0x326a42 = {};
    _0xf865fa(_0x326a42, _0x5ccbee, function () {
      return this;
    });
    var _0x74becc = Object.getPrototypeOf;
    var _0x3fa290 = _0x74becc && _0x74becc(_0x74becc(_0x272f4c([])));
    if (_0x3fa290 && _0x3fa290 !== _0x3f2548 && _0x5ce705.call(_0x3fa290, _0x5ccbee)) {
      _0x326a42 = _0x3fa290;
    }
    var _0x263958 = _0x31b13b.prototype = _0x13bdbf.prototype = Object.create(_0x326a42);
    function _0x15f241(_0x24e507) {
      ["next", "throw", "return"].forEach(function (_0x3760bb) {
        _0xf865fa(_0x24e507, _0x3760bb, function (_0x2cd1fe) {
          return this._invoke(_0x3760bb, _0x2cd1fe);
        });
      });
    }
    function _0x5cd076(_0x5ecd91, _0x235860) {
      function _0x3f1f9f(_0x53eb48, _0x33d9d7, _0x413e5f, _0x3b40d1) {
        var _0x2b8b81 = _0x5c02b4(_0x5ecd91[_0x53eb48], _0x5ecd91, _0x33d9d7);
        if ("throw" !== _0x2b8b81.type) {
          var _0x44d5b4 = _0x2b8b81.arg;
          var _0x4f5b07 = _0x44d5b4.value;
          return _0x4f5b07 && "object" == _0x1a105f(_0x4f5b07) && _0x5ce705.call(_0x4f5b07, "__await") ? _0x235860.resolve(_0x4f5b07.__await).then(function (_0x1b886f) {
            _0x3f1f9f("next", _0x1b886f, _0x413e5f, _0x3b40d1);
          }, function (_0xf7b54b) {
            _0x3f1f9f("throw", _0xf7b54b, _0x413e5f, _0x3b40d1);
          }) : _0x235860.resolve(_0x4f5b07).then(function (_0xd616b7) {
            _0x44d5b4.value = _0xd616b7;
            _0x413e5f(_0x44d5b4);
          }, function (_0x35f645) {
            return _0x3f1f9f("throw", _0x35f645, _0x413e5f, _0x3b40d1);
          });
        }
        _0x3b40d1(_0x2b8b81.arg);
      }
      var _0x3aca29;
      _0x1c8b44(this, "_invoke", {
        'value': function (_0x421f56, _0x12dc62) {
          function _0x3d4b37() {
            return new _0x235860(function (_0x237045, _0x4d291a) {
              _0x3f1f9f(_0x421f56, _0x12dc62, _0x237045, _0x4d291a);
            });
          }
          return _0x3aca29 = _0x3aca29 ? _0x3aca29.then(_0x3d4b37, _0x3d4b37) : _0x3d4b37();
        }
      });
    }
    function _0x5affd7(_0x141899, _0x5892e2, _0x5f02ec) {
      var _0x2d8047 = "suspendedStart";
      return function (_0x8a76c5, _0x1bb380) {
        if (_0x2d8047 === "executing") {
          throw Error("Generator is already running");
        }
        if (_0x2d8047 === "completed") {
          if ("throw" === _0x8a76c5) {
            throw _0x1bb380;
          }
          var _0x4fc798 = {
            "value": _0x3f5308,
            "done": true
          };
          return _0x4fc798;
        }
        _0x5f02ec.method = _0x8a76c5;
        for (_0x5f02ec.arg = _0x1bb380;;) {
          var _0xc302bc = _0x5f02ec.delegate;
          if (_0xc302bc) {
            var _0x25311d = _0x247418(_0xc302bc, _0x5f02ec);
            if (_0x25311d) {
              if (_0x25311d === _0x58427d) {
                continue;
              }
              return _0x25311d;
            }
          }
          if ("next" === _0x5f02ec.method) {
            _0x5f02ec.sent = _0x5f02ec._sent = _0x5f02ec.arg;
          } else {
            if ("throw" === _0x5f02ec.method) {
              if (_0x2d8047 === "suspendedStart") {
                _0x2d8047 = "completed";
                throw _0x5f02ec.arg;
              }
              _0x5f02ec.dispatchException(_0x5f02ec.arg);
            } else if ("return" === _0x5f02ec.method) {
              _0x5f02ec.abrupt("return", _0x5f02ec.arg);
            }
          }
          _0x2d8047 = "executing";
          var _0x38ee10 = _0x5c02b4(_0x141899, _0x5892e2, _0x5f02ec);
          if ("normal" === _0x38ee10.type) {
            _0x2d8047 = _0x5f02ec.done ? "completed" : "suspendedYield";
            if (_0x38ee10.arg === _0x58427d) {
              continue;
            }
            var _0x5e553c = {
              "value": _0x38ee10.arg,
              "done": _0x5f02ec.done
            };
            return _0x5e553c;
          }
          if ('throw' === _0x38ee10.type) {
            _0x2d8047 = "completed";
            _0x5f02ec.method = 'throw';
            _0x5f02ec.arg = _0x38ee10.arg;
          }
        }
      };
    }
    function _0x247418(_0xca2c9d, _0x55d642) {
      var _0x7452dc = _0x55d642.method;
      var _0x5a620f = _0xca2c9d.iterator[_0x7452dc];
      if (_0x5a620f === _0x3f5308) {
        _0x55d642.delegate = null;
        if (!("throw" === _0x7452dc && _0xca2c9d.iterator["return"] && (_0x55d642.method = "return", _0x55d642.arg = _0x3f5308, _0x247418(_0xca2c9d, _0x55d642), "throw" === _0x55d642.method))) {
          if ("return" !== _0x7452dc) {
            _0x55d642.method = "throw";
            _0x55d642.arg = new TypeError("The iterator does not provide a '" + _0x7452dc + "' method");
          }
        }
        return _0x58427d;
      }
      var _0x2f4a0f = _0x5c02b4(_0x5a620f, _0xca2c9d.iterator, _0x55d642.arg);
      if ("throw" === _0x2f4a0f.type) {
        _0x55d642.method = "throw";
        _0x55d642.arg = _0x2f4a0f.arg;
        _0x55d642.delegate = null;
        return _0x58427d;
      }
      var _0x3ec037 = _0x2f4a0f.arg;
      return _0x3ec037 ? _0x3ec037.done ? (_0x55d642[_0xca2c9d.resultName] = _0x3ec037.value, _0x55d642.next = _0xca2c9d.nextLoc, "return" !== _0x55d642.method && (_0x55d642.method = "next", _0x55d642.arg = _0x3f5308), _0x55d642.delegate = null, _0x58427d) : _0x3ec037 : (_0x55d642.method = "throw", _0x55d642.arg = new TypeError("iterator result is not an object"), _0x55d642.delegate = null, _0x58427d);
    }
    function _0x2d4a58(_0x5484b1) {
      var _0x201c18 = {
        tryLoc: _0x5484b1[0]
      };
      if (1 in _0x5484b1) {
        _0x201c18.catchLoc = _0x5484b1[1];
      }
      if (2 in _0x5484b1) {
        _0x201c18.finallyLoc = _0x5484b1[2];
        _0x201c18.afterLoc = _0x5484b1[3];
      }
      this.tryEntries.push(_0x201c18);
    }
    function _0x54608a(_0xb8792b) {
      var _0x32a6db = _0xb8792b.completion || {};
      _0x32a6db.type = "normal";
      delete _0x32a6db.arg;
      _0xb8792b.completion = _0x32a6db;
    }
    function _0x2edefd(_0x419b7b) {
      var _0x5def07 = {
        tryLoc: 'root'
      };
      this.tryEntries = [_0x5def07];
      _0x419b7b.forEach(_0x2d4a58, this);
      this.reset(true);
    }
    function _0x272f4c(_0x31a458) {
      if (_0x31a458 || '' === _0x31a458) {
        var _0x5c3d24 = _0x31a458[_0x5ccbee];
        if (_0x5c3d24) {
          return _0x5c3d24.call(_0x31a458);
        }
        if ("function" == typeof _0x31a458.next) {
          return _0x31a458;
        }
        if (!isNaN(_0x31a458.length)) {
          var _0x317aa9 = -1;
          var _0x1b0bd6 = function _0x3204d6() {
            for (; ++_0x317aa9 < _0x31a458.length;) {
              if (_0x5ce705.call(_0x31a458, _0x317aa9)) {
                _0x3204d6.value = _0x31a458[_0x317aa9];
                _0x3204d6.done = false;
                return _0x3204d6;
              }
            }
            _0x3204d6.value = _0x3f5308;
            _0x3204d6.done = true;
            return _0x3204d6;
          };
          return _0x1b0bd6.next = _0x1b0bd6;
        }
      }
      throw new TypeError(_0x1a105f(_0x31a458) + " is not iterable");
    }
    _0x537505.prototype = _0x31b13b;
    _0x1c8b44(_0x263958, "constructor", {
      'value': _0x31b13b,
      'configurable': true
    });
    _0x1c8b44(_0x31b13b, "constructor", {
      'value': _0x537505,
      'configurable': true
    });
    _0x537505.displayName = _0xf865fa(_0x31b13b, _0x288466, "GeneratorFunction");
    _0xeb0ff4.isGeneratorFunction = function (_0x285878) {
      var _0x4594bc = "function" == typeof _0x285878 && _0x285878.constructor;
      return !!_0x4594bc && (_0x4594bc === _0x537505 || "GeneratorFunction" === (_0x4594bc.displayName || _0x4594bc.name));
    };
    _0xeb0ff4.mark = function (_0x5155e5) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(_0x5155e5, _0x31b13b);
      } else {
        _0x5155e5.__proto__ = _0x31b13b;
        _0xf865fa(_0x5155e5, _0x288466, "GeneratorFunction");
      }
      _0x5155e5.prototype = Object.create(_0x263958);
      return _0x5155e5;
    };
    _0xeb0ff4.awrap = function (_0x1dc736) {
      var _0x984079 = {
        __await: _0x1dc736
      };
      return _0x984079;
    };
    _0x15f241(_0x5cd076.prototype);
    _0xf865fa(_0x5cd076.prototype, _0x481958, function () {
      return this;
    });
    _0xeb0ff4.AsyncIterator = _0x5cd076;
    _0xeb0ff4.async = function (_0xc11ce8, _0x192270, _0x52b8ca, _0x23d221, _0x4a2dff) {
      if (undefined === _0x4a2dff) {
        _0x4a2dff = Promise;
      }
      var _0x1ba913 = new _0x5cd076(_0x359578(_0xc11ce8, _0x192270, _0x52b8ca, _0x23d221), _0x4a2dff);
      return _0xeb0ff4.isGeneratorFunction(_0x192270) ? _0x1ba913 : _0x1ba913.next().then(function (_0x1f89f2) {
        return _0x1f89f2.done ? _0x1f89f2.value : _0x1ba913.next();
      });
    };
    _0x15f241(_0x263958);
    _0xf865fa(_0x263958, _0x288466, "Generator");
    _0xf865fa(_0x263958, _0x5ccbee, function () {
      return this;
    });
    _0xf865fa(_0x263958, "toString", function () {
      return "[object Generator]";
    });
    _0xeb0ff4.keys = function (_0x44047f) {
      var _0x1063cc = Object(_0x44047f);
      var _0x370b41 = [];
      for (var _0x271add in _0x1063cc) _0x370b41.push(_0x271add);
      _0x370b41.reverse();
      return function _0x54eb04() {
        for (; _0x370b41.length;) {
          var _0x5e00bf = _0x370b41.pop();
          if (_0x5e00bf in _0x1063cc) {
            _0x54eb04.value = _0x5e00bf;
            _0x54eb04.done = false;
            return _0x54eb04;
          }
        }
        _0x54eb04.done = true;
        return _0x54eb04;
      };
    };
    _0xeb0ff4.values = _0x272f4c;
    _0x2edefd.prototype = {
      'constructor': _0x2edefd,
      'reset': function (_0x3af095) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = _0x3f5308;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = _0x3f5308;
        this.tryEntries.forEach(_0x54608a);
        if (!_0x3af095) {
          for (var _0x165f33 in this) if ('t' === _0x165f33.charAt(0) && _0x5ce705.call(this, _0x165f33) && !isNaN(+_0x165f33.slice(1))) {
            this[_0x165f33] = _0x3f5308;
          }
        }
      },
      'stop': function () {
        this.done = true;
        var _0x3caead = this.tryEntries[0].completion;
        if ("throw" === _0x3caead.type) {
          throw _0x3caead.arg;
        }
        return this.rval;
      },
      'dispatchException': function (_0x5435aa) {
        if (this.done) {
          throw _0x5435aa;
        }
        var _0x1ed2b3 = this;
        function _0x4cad9e(_0x1747a1, _0x10be58) {
          _0x35e530.type = "throw";
          _0x35e530.arg = _0x5435aa;
          _0x1ed2b3.next = _0x1747a1;
          if (_0x10be58) {
            _0x1ed2b3.method = "next";
            _0x1ed2b3.arg = _0x3f5308;
          }
          return !!_0x10be58;
        }
        for (var _0x4d5077 = this.tryEntries.length - 1; _0x4d5077 >= 0; --_0x4d5077) {
          var _0x33d201 = this.tryEntries[_0x4d5077];
          var _0x35e530 = _0x33d201.completion;
          if ("root" === _0x33d201.tryLoc) {
            return _0x4cad9e("end");
          }
          if (_0x33d201.tryLoc <= this.prev) {
            var _0x5f2be7 = _0x5ce705.call(_0x33d201, "catchLoc");
            var _0x4154bd = _0x5ce705.call(_0x33d201, "finallyLoc");
            if (_0x5f2be7 && _0x4154bd) {
              if (this.prev < _0x33d201.catchLoc) {
                return _0x4cad9e(_0x33d201.catchLoc, true);
              }
              if (this.prev < _0x33d201.finallyLoc) {
                return _0x4cad9e(_0x33d201.finallyLoc);
              }
            } else {
              if (_0x5f2be7) {
                if (this.prev < _0x33d201.catchLoc) {
                  return _0x4cad9e(_0x33d201.catchLoc, true);
                }
              } else {
                if (!_0x4154bd) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < _0x33d201.finallyLoc) {
                  return _0x4cad9e(_0x33d201.finallyLoc);
                }
              }
            }
          }
        }
      },
      'abrupt': function (_0xa852b7, _0x3dd0d7) {
        for (var _0x11970a = this.tryEntries.length - 1; _0x11970a >= 0; --_0x11970a) {
          var _0x3b6c08 = this.tryEntries[_0x11970a];
          if (_0x3b6c08.tryLoc <= this.prev && _0x5ce705.call(_0x3b6c08, "finallyLoc") && this.prev < _0x3b6c08.finallyLoc) {
            var _0x1724b8 = _0x3b6c08;
            break;
          }
        }
        if (_0x1724b8 && ("break" === _0xa852b7 || "continue" === _0xa852b7) && _0x1724b8.tryLoc <= _0x3dd0d7 && _0x3dd0d7 <= _0x1724b8.finallyLoc) {
          _0x1724b8 = null;
        }
        var _0x50f9ff = _0x1724b8 ? _0x1724b8.completion : {};
        _0x50f9ff.type = _0xa852b7;
        _0x50f9ff.arg = _0x3dd0d7;
        return _0x1724b8 ? (this.method = "next", this.next = _0x1724b8.finallyLoc, _0x58427d) : this.complete(_0x50f9ff);
      },
      'complete': function (_0x438e64, _0x1801dd) {
        if ("throw" === _0x438e64.type) {
          throw _0x438e64.arg;
        }
        if ("break" === _0x438e64.type || "continue" === _0x438e64.type) {
          this.next = _0x438e64.arg;
        } else if ("return" === _0x438e64.type) {
          this.rval = this.arg = _0x438e64.arg;
          this.method = "return";
          this.next = "end";
        } else if ("normal" === _0x438e64.type && _0x1801dd) {
          this.next = _0x1801dd;
        }
        return _0x58427d;
      },
      'finish': function (_0x1bf585) {
        for (var _0x2edb66 = this.tryEntries.length - 1; _0x2edb66 >= 0; --_0x2edb66) {
          var _0x3d5cfb = this.tryEntries[_0x2edb66];
          if (_0x3d5cfb.finallyLoc === _0x1bf585) {
            this.complete(_0x3d5cfb.completion, _0x3d5cfb.afterLoc);
            _0x54608a(_0x3d5cfb);
            return _0x58427d;
          }
        }
      },
      'catch': function (_0x3f6df5) {
        for (var _0x36de88 = this.tryEntries.length - 1; _0x36de88 >= 0; --_0x36de88) {
          var _0x1a126b = this.tryEntries[_0x36de88];
          if (_0x1a126b.tryLoc === _0x3f6df5) {
            var _0x1a5215 = _0x1a126b.completion;
            if ("throw" === _0x1a5215.type) {
              var _0x5f4c2e = _0x1a5215.arg;
              _0x54608a(_0x1a126b);
            }
            return _0x5f4c2e;
          }
        }
        throw Error("illegal catch attempt");
      },
      'delegateYield': function (_0x2a2cc4, _0x4ab6ca, _0x9208d9) {
        this.delegate = {
          'iterator': _0x272f4c(_0x2a2cc4),
          'resultName': _0x4ab6ca,
          'nextLoc': _0x9208d9
        };
        if ("next" === this.method) {
          this.arg = _0x3f5308;
        }
        return _0x58427d;
      }
    };
    return _0xeb0ff4;
  }
  function _0x20f911(_0xc67547, _0x5c2f51, _0x488348, _0x2bbaba, _0xf8cb21, _0x471fd8, _0x4bd013) {
    try {
      var _0x35d303 = _0xc67547[_0x471fd8](_0x4bd013);
      var _0x55ddfd = _0x35d303.value;
    } catch (_0x4b2401) {
      return void _0x488348(_0x4b2401);
    }
    if (_0x35d303.done) {
      _0x5c2f51(_0x55ddfd);
    } else {
      Promise.resolve(_0x55ddfd).then(_0x2bbaba, _0xf8cb21);
    }
  }
  function _0x4cf680(_0x54bfbc) {
    return function () {
      var _0x1cc455 = this;
      return new Promise(function (_0x285d64, _0xd5a3a8) {
        var _0x158cec = _0x54bfbc.apply(_0x1cc455, arguments);
        function _0x475bcc(_0xb3e6a3) {
          _0x20f911(_0x158cec, _0x285d64, _0xd5a3a8, _0x475bcc, _0x435a0f, "next", _0xb3e6a3);
        }
        function _0x435a0f(_0x38a5a7) {
          _0x20f911(_0x158cec, _0x285d64, _0xd5a3a8, _0x475bcc, _0x435a0f, 'throw', _0x38a5a7);
        }
        _0x475bcc(undefined);
      });
    };
  }
  var _0x54af23;
  var _0x42572c;
  var _0x4122c0;
  _0x54af23 = {
    'getOrc': function (_0x147ae0, _0x133e4d) {
      return _0x4cf680(_0x19f335().mark(function _0xa4aef2() {
        var _0x47a0ba;
        var _0x5f2b6b;
        return _0x19f335().wrap(function (_0x4e4cd7) {
          for (;;) {
            switch (_0x4e4cd7.prev = _0x4e4cd7.next) {
              case 0:
                _0x4e4cd7.next = 2;
                return fetch("https://api.ocr.space/parse/imageurl?apikey=".concat(_0x147ae0, "&isOverlayRequired=true&OCREngine=2&url=").concat(_0x133e4d));
              case 2:
                if ((_0x47a0ba = _0x4e4cd7.sent).ok) {
                  _0x4e4cd7.next = 6;
                  break;
                }
                _0x1b6fac.log("Error: ".concat(_0x47a0ba.statusText));
                return _0x4e4cd7.abrupt("return", null);
              case 6:
                _0x4e4cd7.next = 8;
                return _0x47a0ba.json();
              case 8:
                _0x5f2b6b = _0x4e4cd7.sent;
                return _0x4e4cd7.abrupt("return", _0x5f2b6b);
              case 10:
              case "end":
                return _0x4e4cd7.stop();
            }
          }
        }, _0xa4aef2);
      }))();
    },
    'getVuaTraffic': function (_0x31f102, _0x417667) {
      var _0x8c31b1 = this;
      return _0x4cf680(_0x19f335().mark(function _0x37884d() {
        var _0x395ab7;
        return _0x19f335().wrap(function (_0x3be61e) {
          for (;;) {
            switch (_0x3be61e.prev = _0x3be61e.next) {
              case 0:
                _0x395ab7 = ''.concat("https://traffic-user.net", "/GET_VUATRAFFIC.php?data=").concat(_0x31f102, ",https://www.google.com/,undefined,IOS900,hidden,null&clk=").concat(_0x417667);
                return _0x3be61e.abrupt("return", _0x8c31b1.postReturnText(_0x395ab7));
              case 2:
              case "end":
                return _0x3be61e.stop();
            }
          }
        }, _0x37884d);
      }))();
    },
    'getMa': function (_0x5afce5, _0x3365c3, _0x52e7a0) {
      var _0x3667ed = this;
      return _0x4cf680(_0x19f335().mark(function _0x1bbbb7() {
        var _0x189cf1;
        return _0x19f335().wrap(function (_0x136084) {
          for (;;) {
            switch (_0x136084.prev = _0x136084.next) {
              case 0:
                _0x189cf1 = ''.concat("https://traffic-user.net", "/GET_MA.php?codexn=").concat(_0x5afce5, "&url=").concat(_0x3365c3, "&loai_traffic=https://www.google.com/&clk=").concat(_0x52e7a0);
                return _0x136084.abrupt("return", _0x3667ed.postReturnText(_0x189cf1));
              case 2:
              case "end":
                return _0x136084.stop();
            }
          }
        }, _0x1bbbb7);
      }))();
    },
    'getDirectData': function (_0x1d3f54, _0x15f6b4, _0x945a9d, _0x59b9e9) {
      var _0x5985ed = this;
      return _0x4cf680(_0x19f335().mark(function _0x196875() {
        var _0x5c1374;
        var _0x685066;
        return _0x19f335().wrap(function (_0x48ae6c) {
          for (;;) {
            switch (_0x48ae6c.prev = _0x48ae6c.next) {
              case 0:
                _0x5c1374 = ''.concat("https://traffic-user.net", "/GET_DIRECT.php?data=").concat(_0x1d3f54, ',').concat(_0x15f6b4, ',').concat(_0x945a9d, ",IOS900,hidden,null&clk=").concat(_0x59b9e9);
                (_0x685066 = new FormData()).append('NO', '');
                return _0x48ae6c.abrupt("return", _0x5985ed.postReturnText(_0x5c1374, _0x685066));
              case 4:
              case "end":
                return _0x48ae6c.stop();
            }
          }
        }, _0x196875);
      }))();
    },
    'getDirectToken': function (_0x5c932b, _0x244fd1, _0x474837, _0x2ff69f, _0x1aa02d) {
      var _0x59217b = this;
      return _0x4cf680(_0x19f335().mark(function _0x5c3c82() {
        var _0x24538f;
        var _0xb83928;
        return _0x19f335().wrap(function (_0x20c7cf) {
          for (;;) {
            switch (_0x20c7cf.prev = _0x20c7cf.next) {
              case 0:
                _0x24538f = ''.concat("https://traffic-user.net", "/GET_DIRECT.php?token=").concat(_0x5c932b, ',').concat(_0x244fd1, ',').concat(_0x474837, ",IOS900,hidden,nullNO&clk=").concat(_0x2ff69f);
                (_0xb83928 = new FormData()).append("url_order", _0x244fd1);
                _0xb83928.append('ref', _0x1aa02d.ref);
                _0xb83928.append("TOP_NUT", _0x1aa02d.TOP_NUT);
                _0xb83928.append("LEFT_NUT", _0x1aa02d.LEFT_NUT);
                _0xb83928.append("NO_NUT", _0x1aa02d.NO_NUT);
                return _0x20c7cf.abrupt("return", _0x59217b.postReturnText(_0x24538f, _0xb83928));
              case 8:
              case "end":
                return _0x20c7cf.stop();
            }
          }
        }, _0x5c3c82);
      }))();
    },
    'getMd': function (_0x1e99b3, _0x349e86, _0x3a4c2a, _0x2ce519) {
      var _0x3b01f2 = this;
      return _0x4cf680(_0x19f335().mark(function _0x176577() {
        var _0x176ec5;
        return _0x19f335().wrap(function (_0x498caf) {
          for (;;) {
            switch (_0x498caf.prev = _0x498caf.next) {
              case 0:
                _0x176ec5 = ''.concat("https://traffic-user.net", "/GET_MD.php?codexnd=").concat(_0x1e99b3, "&url=").concat(_0x349e86, "&loai_traffic=").concat(_0x3a4c2a, '&clk=').concat(_0x2ce519);
                return _0x498caf.abrupt("return", _0x3b01f2.postReturnText(_0x176ec5));
              case 2:
              case "end":
                return _0x498caf.stop();
            }
          }
        }, _0x176577);
      }))();
    },
    'submitCode': function (_0x4d5681) {
      return _0x4cf680(_0x19f335().mark(function _0x51e2ef() {
        var _0x3410c6;
        var _0x353f07;
        var _0x4e5b88;
        var _0x2a1ad9;
        var _0x39dbf1;
        var _0x1ff8c5;
        var _0x5dedb3;
        var _0x2f5b9b;
        var _0x37fc1f;
        var _0x36a759;
        var _0x27baf1;
        return _0x19f335().wrap(function (_0x35d2a6) {
          for (;;) {
            switch (_0x35d2a6.prev = _0x35d2a6.next) {
              case 0:
                _0x5dedb3 = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : '';
                _0x2f5b9b = (null === (_0x3410c6 = document.querySelector("#gt-form")) || undefined === _0x3410c6 ? undefined : _0x3410c6.getAttribute("action")) || '';
                _0x37fc1f = "https://yeumoney.com" + _0x2f5b9b;
                (_0x36a759 = new FormData()).append('code', _0x4d5681);
                _0x36a759.append("keyword", '');
                _0x36a759.append("dieuhanh", (null === (_0x353f07 = document.querySelector("input[name=\"dieuhanh\"]")) || undefined === _0x353f07 ? undefined : _0x353f07.value) || '');
                _0x36a759.append("pix", (null === (_0x4e5b88 = document.querySelector("input[name=\"pix\"]")) || undefined === _0x4e5b88 ? undefined : _0x4e5b88.value) || '');
                _0x36a759.append("lvp", (null === (_0x2a1ad9 = document.querySelector("input[name=\"lvp\"]")) || undefined === _0x2a1ad9 ? undefined : _0x2a1ad9.value) || '');
                _0x36a759.append("ref", _0x5dedb3);
                _0x36a759.append("trinhduyet", (null === (_0x39dbf1 = document.getElementById("trinhduyet")) || undefined === _0x39dbf1 ? undefined : _0x39dbf1.value) || '');
                _0x36a759.append("id_traffic", (null === (_0x1ff8c5 = document.getElementById("id_donhang")) || undefined === _0x1ff8c5 ? undefined : _0x1ff8c5.value) || '');
                _0x36a759.append("check_index", '1');
                _0x27baf1 = new URLSearchParams(_0x36a759).toString();
                return _0x35d2a6.abrupt("return", new Promise(function (_0x29e56f, _0x392e62) {
                  GM_xmlhttpRequest({
                    'method': "POST",
                    'url': _0x37fc1f,
                    'headers': {
                      'Content-Type': "application/x-www-form-urlencoded",
                      'User-Agent': navigator.userAgent,
                      'Referer': "https://yeumoney.com/",
                      'Cookie': document.cookie
                    },
                    'data': _0x27baf1,
                    'onload': function (_0x5afa2f) {
                      if (_0x5afa2f.finalUrl) {
                        _0x29e56f(_0x5afa2f.finalUrl);
                      } else {
                        _0x29e56f(_0x5afa2f.responseText);
                      }
                    },
                    'onerror': function (_0x42ef25) {
                      var _0x2b8d68;
                      _0x1b6fac.logData(_0x42ef25);
                      var _0x1b34c4 = null === (_0x2b8d68 = _0x42ef25.error) || undefined === _0x2b8d68 ? undefined : _0x2b8d68.toString().match(/https?:\/\/[^\s"]+/);
                      _0x1b6fac.logData(_0x1b34c4);
                      _0x29e56f(_0x1b34c4 ? _0x1b34c4[0] : null);
                    }
                  });
                }));
              case 15:
              case "end":
                return _0x35d2a6.stop();
            }
          }
        }, _0x51e2ef);
      }))();
    },
    'postReturnText': function (_0x571b74) {
      return _0x4cf680(_0x19f335().mark(function _0x2e2f63() {
        var _0x254496;
        return _0x19f335().wrap(function (_0x3bd0ba) {
          for (;;) {
            switch (_0x3bd0ba.prev = _0x3bd0ba.next) {
              case 0:
                var _0x289aed = {
                  method: "POST"
                };
                _0x3bd0ba.next = 2;
                return fetch(_0x571b74, _0x289aed);
              case 2:
                if ((_0x254496 = _0x3bd0ba.sent).ok) {
                  _0x3bd0ba.next = 6;
                  break;
                }
                _0x1b6fac.log("Error: ".concat(_0x254496.statusText));
                return _0x3bd0ba.abrupt("return", null);
              case 6:
                return _0x3bd0ba.abrupt("return", _0x254496.text());
              case 7:
              case "end":
                return _0x3bd0ba.stop();
            }
          }
        }, _0x2e2f63);
      }))();
    }
  };
  _0x4122c0 = function (_0x398a74, _0x2c1f65) {
    return _0x4cf680(_0x19f335().mark(function _0x22f4ee() {
      var _0x4be74;
      return _0x19f335().wrap(function (_0x2fb9f4) {
        for (;;) {
          switch (_0x2fb9f4.prev = _0x2fb9f4.next) {
            case 0:
              _0x2fb9f4.next = 2;
              return fetch(_0x398a74, {
                'method': "POST",
                'body': _0x2c1f65
              });
            case 2:
              if ((_0x4be74 = _0x2fb9f4.sent).ok) {
                _0x2fb9f4.next = 6;
                break;
              }
              _0x1b6fac.log("Error: ".concat(_0x4be74.statusText));
              return _0x2fb9f4.abrupt("return", null);
            case 6:
              return _0x2fb9f4.abrupt("return", _0x4be74.text());
            case 7:
            case "end":
              return _0x2fb9f4.stop();
          }
        }
      }, _0x22f4ee);
    }))();
  };
  if ((_0x42572c = function (_0x4c647e) {
    var _0x26f4e2 = function (_0x5d4056) {
      if ("object" != _0x1a105f(_0x5d4056) || !_0x5d4056) {
        return _0x5d4056;
      }
      var _0x1fc4e7 = _0x5d4056[Symbol.toPrimitive];
      if (undefined !== _0x1fc4e7) {
        var _0x32ec77 = _0x1fc4e7.call(_0x5d4056, "string");
        if ("object" != _0x1a105f(_0x32ec77)) {
          return _0x32ec77;
        }
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(_0x5d4056);
    }(_0x4c647e);
    return "symbol" == _0x1a105f(_0x26f4e2) ? _0x26f4e2 : _0x26f4e2 + '';
  }(_0x42572c = "postReturnText")) in _0x54af23) {
    Object.defineProperty(_0x54af23, _0x42572c, {
      'value': _0x4122c0,
      'enumerable': true,
      'configurable': true,
      'writable': true
    });
  } else {
    _0x54af23[_0x42572c] = _0x4122c0;
  }
  var _0x359e38 = _0x689d62(72);
  var _0x297b8f = _0x689d62.n(_0x359e38);
  var _0xe20894 = _0x689d62(825);
  var _0x369491 = _0x689d62.n(_0xe20894);
  var _0x1acad3 = _0x689d62(659);
  var _0x26cd8a = _0x689d62.n(_0x1acad3);
  var _0x24f254 = _0x689d62(56);
  var _0x42f32e = _0x689d62.n(_0x24f254);
  var _0x4729c2 = _0x689d62(540);
  var _0x4b3891 = _0x689d62.n(_0x4729c2);
  var _0x594aae = _0x689d62(113);
  var _0xe86a2c = _0x689d62.n(_0x594aae);
  var _0x45be08 = _0x689d62(156);
  var _0x36aa6e = {};
  function _0x367f54(_0x2ea23a) {
    _0x367f54 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x148437) {
      return typeof _0x148437;
    } : function (_0x4e6681) {
      return _0x4e6681 && "function" == typeof Symbol && _0x4e6681.constructor === Symbol && _0x4e6681 !== Symbol.prototype ? "symbol" : typeof _0x4e6681;
    };
    return _0x367f54(_0x2ea23a);
  }
  function _0x1c98ba(_0x5af612, _0x1c4dfc, _0x52775c) {
    if ((_0x1c4dfc = function (_0x4fed7c) {
      var _0x3d2bcf = function (_0x3d36e4) {
        if ("object" != _0x367f54(_0x3d36e4) || !_0x3d36e4) {
          return _0x3d36e4;
        }
        var _0xadb5c9 = _0x3d36e4[Symbol.toPrimitive];
        if (undefined !== _0xadb5c9) {
          var _0x5c6c96 = _0xadb5c9.call(_0x3d36e4, "string");
          if ("object" != _0x367f54(_0x5c6c96)) {
            return _0x5c6c96;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(_0x3d36e4);
      }(_0x4fed7c);
      return "symbol" == _0x367f54(_0x3d2bcf) ? _0x3d2bcf : _0x3d2bcf + '';
    }(_0x1c4dfc)) in _0x5af612) {
      Object.defineProperty(_0x5af612, _0x1c4dfc, {
        'value': _0x52775c,
        'enumerable': true,
        'configurable': true,
        'writable': true
      });
    } else {
      _0x5af612[_0x1c4dfc] = _0x52775c;
    }
    return _0x5af612;
  }
  function _0x1d4dba() {
    _0x1d4dba = function () {
      return _0x5f2231;
    };
    var _0x510c28;
    var _0x5f2231 = {};
    var _0x562a65 = Object.prototype;
    var _0x43f986 = _0x562a65.hasOwnProperty;
    var _0x435bbd = Object.defineProperty || function (_0x4f3e45, _0x56623e, _0x4732c0) {
      _0x4f3e45[_0x56623e] = _0x4732c0.value;
    };
    var _0x4caa00 = "function" == typeof Symbol ? Symbol : {};
    var _0x1d73cf = _0x4caa00.iterator || "@@iterator";
    var _0x52b4a9 = _0x4caa00.asyncIterator || "@@asyncIterator";
    var _0x427fe3 = _0x4caa00.toStringTag || "@@toStringTag";
    function _0x31871b(_0x36cf18, _0x343505, _0x40db37) {
      var _0x85159b = {
        "value": _0x40db37,
        enumerable: true,
        configurable: true,
        writable: true
      };
      Object.defineProperty(_0x36cf18, _0x343505, _0x85159b);
      return _0x36cf18[_0x343505];
    }
    try {
      _0x31871b({}, '');
    } catch (_0x47f46b) {
      _0x31871b = function (_0x579de1, _0x39a989, _0x103f54) {
        return _0x579de1[_0x39a989] = _0x103f54;
      };
    }
    function _0x425bf5(_0x2fd682, _0x442e8f, _0x2f79fd, _0x275c0e) {
      var _0x1ee57d = _0x442e8f && _0x442e8f.prototype instanceof _0x3aceb9 ? _0x442e8f : _0x3aceb9;
      var _0x1f1d23 = Object.create(_0x1ee57d.prototype);
      var _0x2fa3a4 = new _0x458bd6(_0x275c0e || []);
      _0x435bbd(_0x1f1d23, "_invoke", {
        'value': _0x33a4d9(_0x2fd682, _0x2f79fd, _0x2fa3a4)
      });
      return _0x1f1d23;
    }
    function _0x51b382(_0x261e2d, _0x230f9b, _0x3c5a26) {
      try {
        return {
          'type': "normal",
          'arg': _0x261e2d.call(_0x230f9b, _0x3c5a26)
        };
      } catch (_0x4abf31) {
        var _0x25bf31 = {
          "type": "throw",
          "arg": _0x4abf31
        };
        return _0x25bf31;
      }
    }
    _0x5f2231.wrap = _0x425bf5;
    var _0x50b3be = {};
    function _0x3aceb9() {}
    function _0x3e3545() {}
    function _0x59b38a() {}
    var _0xadab01 = {};
    _0x31871b(_0xadab01, _0x1d73cf, function () {
      return this;
    });
    var _0x49c61a = Object.getPrototypeOf;
    var _0x57fd2e = _0x49c61a && _0x49c61a(_0x49c61a(_0x1aff53([])));
    if (_0x57fd2e && _0x57fd2e !== _0x562a65 && _0x43f986.call(_0x57fd2e, _0x1d73cf)) {
      _0xadab01 = _0x57fd2e;
    }
    var _0x37f671 = _0x59b38a.prototype = _0x3aceb9.prototype = Object.create(_0xadab01);
    function _0x3517ff(_0x4bacac) {
      ["next", "throw", "return"].forEach(function (_0x112afc) {
        _0x31871b(_0x4bacac, _0x112afc, function (_0x590830) {
          return this._invoke(_0x112afc, _0x590830);
        });
      });
    }
    function _0x39800d(_0x5640e3, _0x243967) {
      function _0x569c66(_0x3331a9, _0x2f47bc, _0x4ba14a, _0x5711e2) {
        var _0xb17ac5 = _0x51b382(_0x5640e3[_0x3331a9], _0x5640e3, _0x2f47bc);
        if ("throw" !== _0xb17ac5.type) {
          var _0x316fd7 = _0xb17ac5.arg;
          var _0x1d3319 = _0x316fd7.value;
          return _0x1d3319 && "object" == _0x367f54(_0x1d3319) && _0x43f986.call(_0x1d3319, "__await") ? _0x243967.resolve(_0x1d3319.__await).then(function (_0x571d9c) {
            _0x569c66("next", _0x571d9c, _0x4ba14a, _0x5711e2);
          }, function (_0x1e875f) {
            _0x569c66('throw', _0x1e875f, _0x4ba14a, _0x5711e2);
          }) : _0x243967.resolve(_0x1d3319).then(function (_0x353b67) {
            _0x316fd7.value = _0x353b67;
            _0x4ba14a(_0x316fd7);
          }, function (_0x24f75c) {
            return _0x569c66('throw', _0x24f75c, _0x4ba14a, _0x5711e2);
          });
        }
        _0x5711e2(_0xb17ac5.arg);
      }
      var _0x3c86fa;
      _0x435bbd(this, "_invoke", {
        'value': function (_0x48dd7f, _0x2e0ae1) {
          function _0x5764d6() {
            return new _0x243967(function (_0x458420, _0x146570) {
              _0x569c66(_0x48dd7f, _0x2e0ae1, _0x458420, _0x146570);
            });
          }
          return _0x3c86fa = _0x3c86fa ? _0x3c86fa.then(_0x5764d6, _0x5764d6) : _0x5764d6();
        }
      });
    }
    function _0x33a4d9(_0x5b00c9, _0x24ea70, _0x198526) {
      var _0x539088 = "suspendedStart";
      return function (_0x4a3bfc, _0x2425c2) {
        if (_0x539088 === "executing") {
          throw Error("Generator is already running");
        }
        if (_0x539088 === "completed") {
          if ("throw" === _0x4a3bfc) {
            throw _0x2425c2;
          }
          var _0x1407bf = {
            "value": _0x510c28,
            "done": true
          };
          return _0x1407bf;
        }
        _0x198526.method = _0x4a3bfc;
        for (_0x198526.arg = _0x2425c2;;) {
          var _0x2cad8c = _0x198526.delegate;
          if (_0x2cad8c) {
            var _0x58a8ff = _0x20effa(_0x2cad8c, _0x198526);
            if (_0x58a8ff) {
              if (_0x58a8ff === _0x50b3be) {
                continue;
              }
              return _0x58a8ff;
            }
          }
          if ("next" === _0x198526.method) {
            _0x198526.sent = _0x198526._sent = _0x198526.arg;
          } else {
            if ("throw" === _0x198526.method) {
              if (_0x539088 === "suspendedStart") {
                _0x539088 = "completed";
                throw _0x198526.arg;
              }
              _0x198526.dispatchException(_0x198526.arg);
            } else if ("return" === _0x198526.method) {
              _0x198526.abrupt("return", _0x198526.arg);
            }
          }
          _0x539088 = "executing";
          var _0x128dae = _0x51b382(_0x5b00c9, _0x24ea70, _0x198526);
          if ("normal" === _0x128dae.type) {
            _0x539088 = _0x198526.done ? "completed" : "suspendedYield";
            if (_0x128dae.arg === _0x50b3be) {
              continue;
            }
            var _0x2806e9 = {
              "value": _0x128dae.arg,
              done: _0x198526.done
            };
            return _0x2806e9;
          }
          if ("throw" === _0x128dae.type) {
            _0x539088 = "completed";
            _0x198526.method = "throw";
            _0x198526.arg = _0x128dae.arg;
          }
        }
      };
    }
    function _0x20effa(_0x121e92, _0x4265aa) {
      var _0x26b3c7 = _0x4265aa.method;
      var _0x20da56 = _0x121e92.iterator[_0x26b3c7];
      if (_0x20da56 === _0x510c28) {
        _0x4265aa.delegate = null;
        if (!("throw" === _0x26b3c7 && _0x121e92.iterator["return"] && (_0x4265aa.method = "return", _0x4265aa.arg = _0x510c28, _0x20effa(_0x121e92, _0x4265aa), "throw" === _0x4265aa.method))) {
          if ("return" !== _0x26b3c7) {
            _0x4265aa.method = "throw";
            _0x4265aa.arg = new TypeError("The iterator does not provide a '" + _0x26b3c7 + "' method");
          }
        }
        return _0x50b3be;
      }
      var _0x50e6e7 = _0x51b382(_0x20da56, _0x121e92.iterator, _0x4265aa.arg);
      if ("throw" === _0x50e6e7.type) {
        _0x4265aa.method = "throw";
        _0x4265aa.arg = _0x50e6e7.arg;
        _0x4265aa.delegate = null;
        return _0x50b3be;
      }
      var _0x24c453 = _0x50e6e7.arg;
      return _0x24c453 ? _0x24c453.done ? (_0x4265aa[_0x121e92.resultName] = _0x24c453.value, _0x4265aa.next = _0x121e92.nextLoc, "return" !== _0x4265aa.method && (_0x4265aa.method = "next", _0x4265aa.arg = _0x510c28), _0x4265aa.delegate = null, _0x50b3be) : _0x24c453 : (_0x4265aa.method = "throw", _0x4265aa.arg = new TypeError("iterator result is not an object"), _0x4265aa.delegate = null, _0x50b3be);
    }
    function _0x3e9d4f(_0x5608d) {
      var _0x585a9f = {
        tryLoc: _0x5608d[0]
      };
      if (1 in _0x5608d) {
        _0x585a9f.catchLoc = _0x5608d[1];
      }
      if (2 in _0x5608d) {
        _0x585a9f.finallyLoc = _0x5608d[2];
        _0x585a9f.afterLoc = _0x5608d[3];
      }
      this.tryEntries.push(_0x585a9f);
    }
    function _0x345b33(_0x28fc6d) {
      var _0x116dc7 = _0x28fc6d.completion || {};
      _0x116dc7.type = "normal";
      delete _0x116dc7.arg;
      _0x28fc6d.completion = _0x116dc7;
    }
    function _0x458bd6(_0x4d7015) {
      var _0x16b9e0 = {
        tryLoc: "root"
      };
      this.tryEntries = [_0x16b9e0];
      _0x4d7015.forEach(_0x3e9d4f, this);
      this.reset(true);
    }
    function _0x1aff53(_0x1fde78) {
      if (_0x1fde78 || '' === _0x1fde78) {
        var _0x361abd = _0x1fde78[_0x1d73cf];
        if (_0x361abd) {
          return _0x361abd.call(_0x1fde78);
        }
        if ("function" == typeof _0x1fde78.next) {
          return _0x1fde78;
        }
        if (!isNaN(_0x1fde78.length)) {
          var _0x35efdd = -1;
          var _0x1b3c20 = function _0x5bb806() {
            for (; ++_0x35efdd < _0x1fde78.length;) {
              if (_0x43f986.call(_0x1fde78, _0x35efdd)) {
                _0x5bb806.value = _0x1fde78[_0x35efdd];
                _0x5bb806.done = false;
                return _0x5bb806;
              }
            }
            _0x5bb806.value = _0x510c28;
            _0x5bb806.done = true;
            return _0x5bb806;
          };
          return _0x1b3c20.next = _0x1b3c20;
        }
      }
      throw new TypeError(_0x367f54(_0x1fde78) + " is not iterable");
    }
    _0x3e3545.prototype = _0x59b38a;
    _0x435bbd(_0x37f671, "constructor", {
      'value': _0x59b38a,
      'configurable': true
    });
    _0x435bbd(_0x59b38a, "constructor", {
      'value': _0x3e3545,
      'configurable': true
    });
    _0x3e3545.displayName = _0x31871b(_0x59b38a, _0x427fe3, "GeneratorFunction");
    _0x5f2231.isGeneratorFunction = function (_0x3d0a2f) {
      var _0x3a6003 = "function" == typeof _0x3d0a2f && _0x3d0a2f.constructor;
      return !!_0x3a6003 && (_0x3a6003 === _0x3e3545 || "GeneratorFunction" === (_0x3a6003.displayName || _0x3a6003.name));
    };
    _0x5f2231.mark = function (_0x1af1b6) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(_0x1af1b6, _0x59b38a);
      } else {
        _0x1af1b6.__proto__ = _0x59b38a;
        _0x31871b(_0x1af1b6, _0x427fe3, "GeneratorFunction");
      }
      _0x1af1b6.prototype = Object.create(_0x37f671);
      return _0x1af1b6;
    };
    _0x5f2231.awrap = function (_0x46e55a) {
      var _0x5b591a = {
        __await: _0x46e55a
      };
      return _0x5b591a;
    };
    _0x3517ff(_0x39800d.prototype);
    _0x31871b(_0x39800d.prototype, _0x52b4a9, function () {
      return this;
    });
    _0x5f2231.AsyncIterator = _0x39800d;
    _0x5f2231.async = function (_0x449392, _0x357aa2, _0x275416, _0x2e3323, _0x27fb9f) {
      if (undefined === _0x27fb9f) {
        _0x27fb9f = Promise;
      }
      var _0xb07c88 = new _0x39800d(_0x425bf5(_0x449392, _0x357aa2, _0x275416, _0x2e3323), _0x27fb9f);
      return _0x5f2231.isGeneratorFunction(_0x357aa2) ? _0xb07c88 : _0xb07c88.next().then(function (_0x2425a0) {
        return _0x2425a0.done ? _0x2425a0.value : _0xb07c88.next();
      });
    };
    _0x3517ff(_0x37f671);
    _0x31871b(_0x37f671, _0x427fe3, "Generator");
    _0x31871b(_0x37f671, _0x1d73cf, function () {
      return this;
    });
    _0x31871b(_0x37f671, "toString", function () {
      return "[object Generator]";
    });
    _0x5f2231.keys = function (_0x35b229) {
      var _0x47f6e5 = Object(_0x35b229);
      var _0x550715 = [];
      for (var _0x6669c2 in _0x47f6e5) _0x550715.push(_0x6669c2);
      _0x550715.reverse();
      return function _0x163110() {
        for (; _0x550715.length;) {
          var _0x231271 = _0x550715.pop();
          if (_0x231271 in _0x47f6e5) {
            _0x163110.value = _0x231271;
            _0x163110.done = false;
            return _0x163110;
          }
        }
        _0x163110.done = true;
        return _0x163110;
      };
    };
    _0x5f2231.values = _0x1aff53;
    _0x458bd6.prototype = {
      'constructor': _0x458bd6,
      'reset': function (_0x2a3d9c) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = _0x510c28;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = _0x510c28;
        this.tryEntries.forEach(_0x345b33);
        if (!_0x2a3d9c) {
          for (var _0x1abb98 in this) if ('t' === _0x1abb98.charAt(0) && _0x43f986.call(this, _0x1abb98) && !isNaN(+_0x1abb98.slice(1))) {
            this[_0x1abb98] = _0x510c28;
          }
        }
      },
      'stop': function () {
        this.done = true;
        var _0x4e3d5e = this.tryEntries[0].completion;
        if ("throw" === _0x4e3d5e.type) {
          throw _0x4e3d5e.arg;
        }
        return this.rval;
      },
      'dispatchException': function (_0x1eafb2) {
        if (this.done) {
          throw _0x1eafb2;
        }
        var _0x3d42e8 = this;
        function _0x51068a(_0x36e468, _0x348578) {
          _0x1be473.type = "throw";
          _0x1be473.arg = _0x1eafb2;
          _0x3d42e8.next = _0x36e468;
          if (_0x348578) {
            _0x3d42e8.method = "next";
            _0x3d42e8.arg = _0x510c28;
          }
          return !!_0x348578;
        }
        for (var _0x3df032 = this.tryEntries.length - 1; _0x3df032 >= 0; --_0x3df032) {
          var _0x484f73 = this.tryEntries[_0x3df032];
          var _0x1be473 = _0x484f73.completion;
          if ('root' === _0x484f73.tryLoc) {
            return _0x51068a("end");
          }
          if (_0x484f73.tryLoc <= this.prev) {
            var _0x4a3157 = _0x43f986.call(_0x484f73, "catchLoc");
            var _0x2529f8 = _0x43f986.call(_0x484f73, "finallyLoc");
            if (_0x4a3157 && _0x2529f8) {
              if (this.prev < _0x484f73.catchLoc) {
                return _0x51068a(_0x484f73.catchLoc, true);
              }
              if (this.prev < _0x484f73.finallyLoc) {
                return _0x51068a(_0x484f73.finallyLoc);
              }
            } else {
              if (_0x4a3157) {
                if (this.prev < _0x484f73.catchLoc) {
                  return _0x51068a(_0x484f73.catchLoc, true);
                }
              } else {
                if (!_0x2529f8) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < _0x484f73.finallyLoc) {
                  return _0x51068a(_0x484f73.finallyLoc);
                }
              }
            }
          }
        }
      },
      'abrupt': function (_0x25f197, _0x542ee0) {
        for (var _0xc2c021 = this.tryEntries.length - 1; _0xc2c021 >= 0; --_0xc2c021) {
          var _0x39700b = this.tryEntries[_0xc2c021];
          if (_0x39700b.tryLoc <= this.prev && _0x43f986.call(_0x39700b, "finallyLoc") && this.prev < _0x39700b.finallyLoc) {
            var _0x34aa32 = _0x39700b;
            break;
          }
        }
        if (_0x34aa32 && ("break" === _0x25f197 || "continue" === _0x25f197) && _0x34aa32.tryLoc <= _0x542ee0 && _0x542ee0 <= _0x34aa32.finallyLoc) {
          _0x34aa32 = null;
        }
        var _0x556a55 = _0x34aa32 ? _0x34aa32.completion : {};
        _0x556a55.type = _0x25f197;
        _0x556a55.arg = _0x542ee0;
        return _0x34aa32 ? (this.method = "next", this.next = _0x34aa32.finallyLoc, _0x50b3be) : this.complete(_0x556a55);
      },
      'complete': function (_0x224936, _0x1324b1) {
        if ("throw" === _0x224936.type) {
          throw _0x224936.arg;
        }
        if ("break" === _0x224936.type || "continue" === _0x224936.type) {
          this.next = _0x224936.arg;
        } else if ("return" === _0x224936.type) {
          this.rval = this.arg = _0x224936.arg;
          this.method = "return";
          this.next = "end";
        } else if ("normal" === _0x224936.type && _0x1324b1) {
          this.next = _0x1324b1;
        }
        return _0x50b3be;
      },
      'finish': function (_0x40440f) {
        for (var _0x1105ef = this.tryEntries.length - 1; _0x1105ef >= 0; --_0x1105ef) {
          var _0x13a466 = this.tryEntries[_0x1105ef];
          if (_0x13a466.finallyLoc === _0x40440f) {
            this.complete(_0x13a466.completion, _0x13a466.afterLoc);
            _0x345b33(_0x13a466);
            return _0x50b3be;
          }
        }
      },
      'catch': function (_0x5740cb) {
        for (var _0x26853f = this.tryEntries.length - 1; _0x26853f >= 0; --_0x26853f) {
          var _0x160240 = this.tryEntries[_0x26853f];
          if (_0x160240.tryLoc === _0x5740cb) {
            var _0x10a456 = _0x160240.completion;
            if ("throw" === _0x10a456.type) {
              var _0x639e79 = _0x10a456.arg;
              _0x345b33(_0x160240);
            }
            return _0x639e79;
          }
        }
        throw Error("illegal catch attempt");
      },
      'delegateYield': function (_0x534b6e, _0x3feb03, _0x1091bd) {
        this.delegate = {
          'iterator': _0x1aff53(_0x534b6e),
          'resultName': _0x3feb03,
          'nextLoc': _0x1091bd
        };
        if ("next" === this.method) {
          this.arg = _0x510c28;
        }
        return _0x50b3be;
      }
    };
    return _0x5f2231;
  }
  function _0x2534fa(_0x16f3f8, _0x23a61c, _0x177b3e, _0x40c5ab, _0x85a3d1, _0x3c232b, _0x455dc8) {
    try {
      var _0x19ea30 = _0x16f3f8[_0x3c232b](_0x455dc8);
      var _0x2ece65 = _0x19ea30.value;
    } catch (_0x3fb31b) {
      return void _0x177b3e(_0x3fb31b);
    }
    if (_0x19ea30.done) {
      _0x23a61c(_0x2ece65);
    } else {
      Promise.resolve(_0x2ece65).then(_0x40c5ab, _0x85a3d1);
    }
  }
  function _0x25f231(_0xdaf4c4) {
    return function () {
      var _0x2fad45 = this;
      return new Promise(function (_0x13bb18, _0x1bc3a9) {
        var _0x39f24b = _0xdaf4c4.apply(_0x2fad45, arguments);
        function _0x3e42a5(_0x1d4eeb) {
          _0x2534fa(_0x39f24b, _0x13bb18, _0x1bc3a9, _0x3e42a5, _0x59ac42, "next", _0x1d4eeb);
        }
        function _0x59ac42(_0x5546a3) {
          _0x2534fa(_0x39f24b, _0x13bb18, _0x1bc3a9, _0x3e42a5, _0x59ac42, 'throw', _0x5546a3);
        }
        _0x3e42a5(undefined);
      });
    };
  }
  _0x36aa6e.styleTagTransform = _0xe86a2c();
  _0x36aa6e.setAttributes = _0x42f32e();
  _0x36aa6e.insert = _0x26cd8a().bind(null, "head");
  _0x36aa6e.domAPI = _0x369491();
  _0x36aa6e.insertStyleElement = _0x4b3891();
  _0x297b8f()(_0x45be08.A, _0x36aa6e);
  if (_0x45be08.A && _0x45be08.A.locals) {
    _0x45be08.A.locals;
  }
  var _0x1402ce = _0x1c98ba(_0x1c98ba(_0x1c98ba(_0x1c98ba({
    'createCard': function () {
      var _0x31095e = document.createElement("link");
      _0x31095e.rel = "stylesheet";
      _0x31095e.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600&display=swap";
      document.head.appendChild(_0x31095e);
      var _0x27a92b = document.createElement("link");
      _0x27a92b.rel = "stylesheet";
      _0x27a92b.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
      document.head.appendChild(_0x27a92b);
      var _0x1bbed8 = document.createElement("meta");
      _0x1bbed8.name = "viewport";
      _0x1bbed8.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
      document.head.appendChild(_0x1bbed8);
      var _0x56ad7f = document.createElement("div");
      _0x56ad7f.innerHTML = "\n            <div class=\"yma-floating-card\" id=\"toolCard\">\n                <div class=\"yma-card-header\">\n                    <div class=\"yma-header-left\">\n                        <i class=\"fas fa-tools\"></i>\n                        <span class=\"yma-card-title\">Công cụ hỗ trợ</span>\n                    </div>\n                    <button class=\"yma-minimize-btn\" id=\"minimizeBtn\">\n                        <i class=\"fas fa-minus\"></i>\n                    </button>\n                </div>\n                <div class=\"yma-notification\" id=\"notification\">\n                    <i class=\"fas fa-info-circle\"></i>\n                    <span class=\"yma-notification-message\">Thông báo sẽ hiển thị ở đây</span>\n                </div>\n                <div class=\"yma-card-content\">\n                    <div class=\"yma-input-group\">\n                        <i class=\"fas fa-link\"></i>\n                        <input type=\"text\" class=\"yma-url-input\" placeholder=\"Nhập URL...\" id=\"urlInput\">\n                    </div>\n                    <div class=\"yma-checkbox-group\">\n                        <label class=\"yma-checkbox-wrapper\">\n                            <input type=\"checkbox\" class=\"yma-custom-checkbox\" checked id=\"autoNavigateCheck\">\n                            <i class=\"fas fa-random\"></i>\n                            <span>Tự động chuyển trang</span>\n                        </label>\n                        <label class=\"yma-checkbox-wrapper\">\n                            <input type=\"checkbox\" class=\"yma-custom-checkbox\" checked id=\"autoBypassCheck\">\n                            <i class=\"fas fa-shield-alt\"></i>\n                            <span>Tự động bypass</span>\n                        </label>\n                    </div>\n                    <div class=\"yma-button-group\">\n                        <button class=\"yma-btn yma-btn-primary\" id=\"bypassBtn\">\n                            <i class=\"fas fa-rocket\"></i>\n                            Bypass\n                        </button>\n                        <button class=\"yma-btn yma-btn-secondary\" id=\"changeQuestBtn\">\n                            <i class=\"fas fa-sync-alt\"></i>\n                            Đổi nhiệm vụ\n                        </button>\n                    </div>\n                </div>\n            </div>\n        ";
      document.body.appendChild(_0x56ad7f);
      this.initializeEvents();
    },
    'initializeEvents': function () {
      var _0x480e8d = this;
      return _0x25f231(_0x1d4dba().mark(function _0x410961() {
        var _0x49b4e6;
        var _0x502688;
        var _0x2d31c3;
        var _0x4e19ae;
        var _0x27ca87;
        var _0x4dd361;
        var _0x590c57;
        var _0x410e13;
        var _0x4eb0cd;
        return _0x1d4dba().wrap(function (_0x9853d2) {
          for (;;) {
            switch (_0x9853d2.prev = _0x9853d2.next) {
              case 0:
                _0x49b4e6 = document.getElementById("minimizeBtn");
                _0x502688 = document.getElementById("toolCard");
                _0x2d31c3 = document.getElementById("notification");
                _0x4e19ae = false;
                _0x49b4e6.addEventListener("click", function () {
                  if (_0x4e19ae = !_0x4e19ae) {
                    _0x502688.classList.add("yma-minimized");
                    _0x49b4e6.innerHTML = "<i class=\"fas fa-plus\"></i>";
                    _0x502688.querySelector(".yma-card-content").style.display = 'none';
                    _0x502688.querySelector(".yma-header-left").style.display = 'none';
                    _0x2d31c3.dataset.wasShowing = _0x2d31c3.classList.contains("show") ? "true" : "false";
                    _0x2d31c3.classList.remove("show");
                    _0x2d31c3.style.display = 'none';
                  } else {
                    _0x502688.classList.remove("yma-minimized");
                    _0x49b4e6.innerHTML = "<i class=\"fas fa-minus\"></i>";
                    _0x502688.querySelector(".yma-card-content").style.display = "block";
                    _0x502688.querySelector(".yma-header-left").style.display = "flex";
                    if ("true" === _0x2d31c3.dataset.wasShowing) {
                      _0x2d31c3.classList.add("show");
                      _0x2d31c3.style.display = "flex";
                    }
                  }
                });
                _0x27ca87 = document.getElementById("bypassBtn");
                _0x4dd361 = document.getElementById("changeQuestBtn");
                _0x590c57 = document.getElementById("autoNavigateCheck");
                _0x410e13 = document.getElementById("autoBypassCheck");
                _0x4eb0cd = document.getElementById("urlInput");
                _0x27ca87.addEventListener("click", function () {
                  if (_0x410e13.checked) {
                    _0x480e8d.autoBypass(_0x590c57.checked);
                  } else {
                    if (!_0x4eb0cd.value) {
                      return void _0x480e8d.showNotification("Vui lòng nhập URL", 3000);
                    }
                    if (document.querySelector(".box-step-getCode > span > img").getAttribute("src").includes("/theme_v2/assets/img/img-get-code-dr.webp")) {
                      _0x480e8d.handleBypassUsingUrlV2(_0x4eb0cd.value, _0x590c57.checked);
                    } else {
                      _0x480e8d.handleBypassUsingUrlV1(_0x4eb0cd.value, _0x590c57.checked);
                    }
                  }
                });
                _0x4dd361.addEventListener("click", function () {
                  _0x480e8d.handleChangeQuest();
                });
                _0x9853d2.next = 14;
                return _0x1b6fac.sleep(1000);
              case 14:
                _0x27ca87.click();
              case 15:
              case "end":
                return _0x9853d2.stop();
            }
          }
        }, _0x410961);
      }))();
    },
    'handleChangeQuest': function () {
      return _0x25f231(_0x1d4dba().mark(function _0xbac645() {
        return _0x1d4dba().wrap(function (_0x43da16) {
          for (;;) {
            switch (_0x43da16.prev = _0x43da16.next) {
              case 0:
                document.getElementById("btn-baoloi").click();
                _0x43da16.next = 4;
                return _0x1b6fac.sleep(200);
              case 4:
                document.querySelector("a[onclick=\"lydo_doima()\"]").click();
                _0x43da16.next = 8;
                return _0x1b6fac.sleep(200);
              case 8:
                document.querySelector("input[type=\"radio\"][value=\"khac\"]").parentElement.click();
                _0x43da16.next = 13;
                return _0x1b6fac.sleep(200);
              case 13:
                document.getElementById("dongy_doima").querySelector('a').click();
              case 16:
              case "end":
                return _0x43da16.stop();
            }
          }
        }, _0xbac645);
      }))();
    },
    'handleBypassUsingUrlV1': function (_0x21ba4f, _0xfbced) {
      var _0x3d2830 = this;
      return _0x25f231(_0x1d4dba().mark(function _0x34b71c() {
        var _0xa7beda;
        var _0x3ef532;
        var _0x40e18d;
        var _0x4c6ade;
        var _0x412977;
        var _0x1eb825;
        var _0xa536bc;
        var _0x3a9523;
        return _0x1d4dba().wrap(function (_0x162428) {
          for (;;) {
            switch (_0x162428.prev = _0x162428.next) {
              case 0:
                _0xa7beda = new Date().getTime() - 100000;
                _0x162428.next = 3;
                return _0x54af23.getVuaTraffic(_0xa7beda, null);
              case 3:
                if (_0x3ef532 = _0x162428.sent) {
                  _0x162428.next = 6;
                  break;
                }
                return _0x162428.abrupt("return");
              case 6:
                _0x40e18d = _0x3ef532.match(/<script>([\s\S]*?)<\/script>/)[1].match(/localStorage\.codexn = '([^']+)';/)[1];
                _0x1b6fac.saveCodexn(_0x40e18d);
                _0x162428.next = 10;
                return _0x54af23.getMa(_0x40e18d, _0x21ba4f, null);
              case 10:
                _0x4c6ade = _0x162428.sent;
                _0x412977 = _0x1b6fac.regexMa(_0x4c6ade, false);
                _0x1b6fac.log(_0x412977);
                if (_0x412977) {
                  _0x162428.next = 15;
                  break;
                }
                return _0x162428.abrupt("return");
              case 15:
                window.localStorage.removeItem("codexn");
                _0x1eb825 = new Date().getTime() - 100000;
                _0x162428.next = 19;
                return _0x54af23.getVuaTraffic(_0x1eb825, _0xa7beda);
              case 19:
                if (_0xa536bc = _0x162428.sent) {
                  _0x162428.next = 22;
                  break;
                }
                return _0x162428.abrupt("return");
              case 22:
                _0x40e18d = _0xa536bc.match(/<script>([\s\S]*?)<\/script>/)[1].match(/localStorage\.codexn = '([^']+)';/)[1];
                _0x1b6fac.saveCodexn(_0x40e18d);
                _0x162428.next = 26;
                return _0x54af23.getMa(_0x40e18d, _0x21ba4f, _0xa7beda);
              case 26:
                _0x3a9523 = _0x162428.sent;
                if (_0x412977 = _0x1b6fac.regexMa(_0x3a9523)) {
                  _0x162428.next = 30;
                  break;
                }
                return _0x162428.abrupt("return");
              case 30:
                _0x196044.start(3, function (_0x882570) {
                  _0x3d2830.showNotification("Vui lòng chờ ".concat(_0x882570, " giây..."));
                }, _0x25f231(_0x1d4dba().mark(function _0x6e47c5() {
                  return _0x1d4dba().wrap(function (_0x434ad6) {
                    for (;;) {
                      switch (_0x434ad6.prev = _0x434ad6.next) {
                        case 0:
                          _0x3d2830.showNotification("Đã hết thời gian chờ. Code của bạn là: ".concat(_0x412977));
                          if (_0xfbced) {
                            _0x3d2830.autoNavigate(_0x412977);
                          }
                        case 2:
                        case "end":
                          return _0x434ad6.stop();
                      }
                    }
                  }, _0x6e47c5);
                })));
              case 31:
              case "end":
                return _0x162428.stop();
            }
          }
        }, _0x34b71c);
      }))();
    },
    'handleBypassUsingUrlV2': function (_0x1ca8b8, _0x14e475) {
      var _0x536db5 = this;
      return _0x25f231(_0x1d4dba().mark(function _0x148463() {
        var _0x26acde;
        var _0x4ff3e7;
        var _0x37ea9f;
        var _0x49aa89;
        var _0x1c308d;
        var _0x903c4;
        var _0x132c5f;
        var _0x5f17eb;
        var _0x1f246a;
        var _0x46bf0a;
        var _0x587d89;
        var _0x3152e1;
        return _0x1d4dba().wrap(function (_0x4dab9e) {
          for (;;) {
            switch (_0x4dab9e.prev = _0x4dab9e.next) {
              case 0:
                _0x26acde = new Date().getTime() - 100000;
                _0x4dab9e.next = 3;
                return _0x54af23.getDirectData(_0x26acde, _0x1ca8b8, '', null);
              case 3:
                if (_0x4ff3e7 = _0x4dab9e.sent) {
                  _0x4dab9e.next = 6;
                  break;
                }
                return _0x4dab9e.abrupt("return");
              case 6:
                (_0x37ea9f = _0x1b6fac.getDataBodyForGetDirect(_0x4ff3e7)).ref = '';
                _0x4dab9e.next = 10;
                return _0x54af23.getDirectToken(_0x26acde, _0x1ca8b8, '', null, _0x37ea9f);
              case 10:
                if (_0x49aa89 = _0x4dab9e.sent) {
                  _0x4dab9e.next = 13;
                  break;
                }
                return _0x4dab9e.abrupt("return");
              case 13:
                _0x1c308d = _0x49aa89.match(/<script>([\s\S]*?)<\/script>/)[1].match(/localStorage\.codexnd = '([^']+)';/)[1];
                _0x1b6fac.saveCodexnd(_0x1c308d);
                _0x4dab9e.next = 17;
                return _0x54af23.getMd(_0x1c308d, _0x1ca8b8, '', null);
              case 17:
                if (_0x903c4 = _0x4dab9e.sent) {
                  _0x4dab9e.next = 20;
                  break;
                }
                return _0x4dab9e.abrupt("return");
              case 20:
                if (_0x132c5f = _0x1b6fac.regexMa(_0x903c4, true)) {
                  _0x4dab9e.next = 23;
                  break;
                }
                return _0x4dab9e.abrupt("return");
              case 23:
                _0x5f17eb = _0x1b6fac.getClk(_0x903c4);
                _0x4dab9e.next = 26;
                return _0x54af23.getDirectData(new Date().getTime() - 100000, _0x1ca8b8, _0x1ca8b8, _0x5f17eb);
              case 26:
                if (_0x1f246a = _0x4dab9e.sent) {
                  _0x4dab9e.next = 29;
                  break;
                }
                return _0x4dab9e.abrupt("return");
              case 29:
                (_0x37ea9f = _0x1b6fac.getDataBodyForGetDirect(_0x1f246a)).ref = _0x1ca8b8;
                _0x4dab9e.next = 33;
                return _0x54af23.getDirectToken(_0x5f17eb, _0x1ca8b8, _0x1ca8b8, _0x5f17eb, _0x37ea9f);
              case 33:
                if (_0x46bf0a = _0x4dab9e.sent) {
                  _0x4dab9e.next = 36;
                  break;
                }
                return _0x4dab9e.abrupt("return");
              case 36:
                _0x587d89 = _0x46bf0a.match(/<script>([\s\S]*?)<\/script>/)[1].match(/localStorage\.codexnd = '([^']+)';/)[1];
                _0x1b6fac.saveCodexnd(_0x587d89);
                _0x4dab9e.next = 40;
                return _0x54af23.getMd(_0x587d89, _0x1ca8b8, _0x1ca8b8, _0x5f17eb);
              case 40:
                if (_0x3152e1 = _0x4dab9e.sent) {
                  _0x4dab9e.next = 43;
                  break;
                }
                return _0x4dab9e.abrupt("return");
              case 43:
                if (_0x132c5f = _0x1b6fac.regexMa(_0x3152e1, true)) {
                  _0x4dab9e.next = 46;
                  break;
                }
                return _0x4dab9e.abrupt("return");
              case 46:
                _0x196044.start(3, function (_0x4bea8d) {
                  _0x536db5.showNotification("Vui lòng chờ ".concat(_0x4bea8d, " giây..."));
                }, _0x25f231(_0x1d4dba().mark(function _0xc68ae() {
                  return _0x1d4dba().wrap(function (_0xe12f2) {
                    for (;;) {
                      switch (_0xe12f2.prev = _0xe12f2.next) {
                        case 0:
                          _0x536db5.showNotification("Đã hết thời gian chờ. Code của bạn là: ".concat(_0x132c5f));
                          if (_0x14e475) {
                            _0x536db5.autoNavigate(_0x132c5f);
                          }
                        case 2:
                        case 'end':
                          return _0xe12f2.stop();
                      }
                    }
                  }, _0xc68ae);
                })));
              case 47:
              case "end":
                return _0x4dab9e.stop();
            }
          }
        }, _0x148463);
      }))();
    },
    'showNotification': function (_0x2dec62, _0x2fc35e) {
      var _0x4c77cc = document.getElementById("notification");
      _0x4c77cc.querySelector(".yma-notification-message").textContent = _0x2dec62;
      _0x4c77cc.classList.add("show");
      setTimeout(function () {
        _0x4c77cc.classList.remove("show");
      }, _0x2fc35e);
    }
  }, "showNotification", function (_0x54e6e4) {
    var _0x21607b = document.getElementById("notification");
    _0x21607b.querySelector(".yma-notification-message").textContent = _0x54e6e4;
    _0x21607b.classList.add("show");
  }), "handleOrc", function () {
    return _0x25f231(_0x1d4dba().mark(function _0xd854c1() {
      var _0x4f7b24;
      var _0x194086;
      var _0x5280ba;
      return _0x1d4dba().wrap(function (_0x49a809) {
        for (;;) {
          switch (_0x49a809.prev = _0x49a809.next) {
            case 0:
              _0x4f7b24 = "K81664733488957";
              if (_0x194086 = document.getElementById("hinh_nv") ? document.getElementById("hinh_nv").getAttribute("src") : null) {
                _0x49a809.next = 4;
                break;
              }
              return _0x49a809.abrupt("return");
            case 4:
              _0x49a809.next = 6;
              return _0x54af23.getOrc(_0x4f7b24, _0x194086);
            case 6:
              if (_0x5280ba = _0x49a809.sent) {
                _0x49a809.next = 9;
                break;
              }
              return _0x49a809.abrupt("return");
            case 9:
              _0x1b6fac.logData(_0x5280ba);
            case 10:
            case "end":
              return _0x49a809.stop();
          }
        }
      }, _0xd854c1);
    }))();
  }), "autoBypass", function (_0x3243cd) {
    var _0x43e883 = this;
    return _0x25f231(_0x1d4dba().mark(function _0x24c594() {
      var _0x2e2465;
      var _0x6ca33;
      return _0x1d4dba().wrap(function (_0x5e2a33) {
        for (;;) {
          switch (_0x5e2a33.prev = _0x5e2a33.next) {
            case 0:
              if (_0x2e2465 = document.getElementById('TK1') ? document.getElementById('TK1').textContent : null) {
                _0x5e2a33.next = 3;
                break;
              }
              return _0x5e2a33.abrupt("return");
            case 3:
              if (!document.querySelector(".box-step-getCode > span > img").getAttribute("src").includes("/theme_v2/assets/img/img-get-code-dr.webp")) {
                _0x5e2a33.next = 8;
                break;
              }
              _0x1b6fac.setURL(_0x2e2465);
              _0x5e2a33.next = 7;
              return _0x43e883.handleBypassUsingUrlV2(_0x2e2465, _0x3243cd);
            case 7:
              return _0x5e2a33.abrupt("return");
            case 8:
              if (_0x6ca33 = _0x3e45cc[_0x2e2465]) {
                _0x5e2a33.next = 12;
                break;
              }
              _0x43e883.showNotification("Không tìm thấy URL phù hợp", 3000);
              return _0x5e2a33.abrupt("return");
            case 12:
              _0x1b6fac.setURL(_0x6ca33);
              _0x5e2a33.next = 15;
              return _0x43e883.handleBypassUsingUrlV1(_0x6ca33, _0x3243cd);
            case 15:
            case "end":
              return _0x5e2a33.stop();
          }
        }
      }, _0x24c594);
    }))();
  }), "autoNavigate", function (_0xb050dc) {
    var _0x1341ac = this;
    return _0x25f231(_0x1d4dba().mark(function _0x5a9861() {
      var _0x118b37;
      var _0x2c9a49;
      var _0x55aa65;
      return _0x1d4dba().wrap(function (_0x1d72a7) {
        for (;;) {
          switch (_0x1d72a7.prev = _0x1d72a7.next) {
            case 0:
              _0x1d72a7.prev = 0;
              _0x1d72a7.next = 3;
              return _0x54af23.submitCode(_0xb050dc);
            case 3:
              if (_0x118b37 = _0x1d72a7.sent) {
                _0x1341ac.showNotification("Liên kết đích: ".concat(_0x118b37, ". Đang chuyển hướng..."));
                window.location.href = _0x118b37;
              }
              _0x1d72a7.next = 17;
              break;
            case 7:
              _0x1d72a7.prev = 7;
              _0x1d72a7.t0 = _0x1d72a7["catch"](0);
              console.error("Lỗi khi chuyển hướng với mã:", _0x1d72a7.t0);
              _0x1341ac.showNotification("Có lỗi xảy ra: ".concat(_0x1d72a7.t0.message, ". Đang thử phương pháp thay thế..."));
              if (_0x2c9a49 = document.querySelector("input[name=\"code\"][placeholder=\"Nhập mã vào đây\"]")) {
                _0x1d72a7.next = 14;
                break;
              }
              return _0x1d72a7.abrupt("return");
            case 14:
              _0x2c9a49.value = _0xb050dc;
              if (_0x55aa65 = document.getElementById("btn-xac-nhan")) {
                _0x55aa65.click();
              }
            case 17:
            case "end":
              return _0x1d72a7.stop();
          }
        }
      }, _0x5a9861, null, [[0, 7]]);
    }))();
  });
  function _0x4c0ef8() {
    var _0x1097f7 = document.getElementById("toolCard");
    if (_0x1097f7) {
      var _0x557b3e = _0x1097f7.querySelector(".yma-card-content");
      if (_0x557b3e) {
        if (_0x557b3e.querySelector(".yma-copyright")) {
          var _0x5746d5 = _0x557b3e.querySelector(".yma-copyright");
          if (!_0x5746d5._hasClickHandler) {
            _0x5746d5.style.cursor = "pointer";
            _0x5746d5.addEventListener("click", function () {
              window.open("https://github.com/thjvjpxz/bypass-yeumoney", "_blank");
            });
            _0x5746d5._hasClickHandler = true;
          }
          if (!_0x5746d5.querySelector(".yma-github-note")) {
            var _0x13c77c = document.createElement("div");
            _0x13c77c.className = "yma-github-note";
            _0x13c77c.textContent = "Click vào đây để cập nhật tool mới nhất (Free)";
            _0x13c77c.style.fontSize = "12px";
            _0x13c77c.style.color = '#888';
            _0x13c77c.style.marginTop = "5px";
            _0x13c77c.style.textAlign = "center";
            _0x13c77c.style.fontStyle = "italic";
            _0x13c77c.style.opacity = "0.8";
            _0x13c77c.style.transition = "opacity 0.3s ease";
            _0x5746d5.style.flexDirection = "column";
            _0x5746d5.appendChild(_0x13c77c);
            _0x5746d5.addEventListener("mouseenter", function () {
              _0x13c77c.style.opacity = '1';
            });
            _0x5746d5.addEventListener("mouseleave", function () {
              _0x13c77c.style.opacity = "0.8";
            });
          }
        } else {
          var _0x1ea08d = document.createElement("div");
          _0x1ea08d.className = "yma-copyright";
          _0x1ea08d.style.display = "flex";
          _0x1ea08d.style.alignItems = "center";
          _0x1ea08d.style.justifyContent = "center";
          _0x1ea08d.style.flexDirection = "column";
          _0x1ea08d.style.gap = "8px";
          _0x1ea08d.style.marginTop = "20px";
          _0x1ea08d.style.paddingTop = "15px";
          _0x1ea08d.style.borderTop = "1px solid rgba(76, 175, 80, 0.1)";
          _0x1ea08d.style.fontSize = "13px";
          _0x1ea08d.style.color = '#888';
          _0x1ea08d.style.transition = "all 0.3s ease";
          _0x1ea08d.style.background = "linear-gradient(135deg, rgba(76, 175, 80, 0.05), rgba(76, 175, 80, 0.1))";
          _0x1ea08d.style.padding = '10px';
          _0x1ea08d.style.borderRadius = '8px';
          _0x1ea08d.style.cursor = "pointer";
          _0x1ea08d.addEventListener("click", function () {
            window.open("https://github.com/thjvjpxz/bypass-yeumoney", "_blank");
          });
          var _0x57917e = document.createElement("div");
          _0x57917e.style.display = "flex";
          _0x57917e.style.alignItems = "center";
          _0x57917e.style.justifyContent = "center";
          _0x57917e.style.gap = "8px";
          var _0x1c9a2f = document.createElement('i');
          _0x1c9a2f.className = "fas fa-code";
          _0x1c9a2f.style.color = "var(--yma-primary-color)";
          _0x1c9a2f.style.fontSize = "16px";
          _0x1c9a2f.style.animation = "pulse 2s infinite";
          var _0x961ce8 = document.createElement('span');
          _0x961ce8.textContent = "Developed by ";
          var _0x3174d7 = document.createElement("span");
          _0x3174d7.className = "yma-copyright-name";
          _0x3174d7.textContent = "@thjvjpxz";
          _0x3174d7.style.background = "linear-gradient(90deg, #4CAF50, #2196F3, #9C27B0)";
          _0x3174d7.style.webkitBackgroundClip = "text";
          _0x3174d7.style.backgroundClip = "text";
          _0x3174d7.style.webkitTextFillColor = "transparent";
          _0x3174d7.style.fontWeight = "600";
          _0x3174d7.style.letterSpacing = "0.5px";
          _0x3174d7.style.position = "relative";
          var _0x241862 = document.createElement('div');
          _0x241862.className = "yma-github-note";
          _0x241862.textContent = "Click vào đây để cập nhật tool mới nhất (Free)";
          _0x241862.style.fontSize = "12px";
          _0x241862.style.color = "#888";
          _0x241862.style.marginTop = "5px";
          _0x241862.style.textAlign = "center";
          _0x241862.style.fontStyle = "italic";
          var _0x28ec7a = document.createElement("style");
          _0x28ec7a.textContent = "\n            @keyframes pulse {\n                0% { transform: scale(1); }\n                50% { transform: scale(1.1); }\n                100% { transform: scale(1); }\n            }\n            \n            .yma-copyright:hover {\n                box-shadow: 0 4px 12px rgba(76, 175, 80, 0.15);\n                transform: translateY(-2px);\n                cursor: pointer;\n            }\n            \n            .yma-copyright-name-after {\n                content: '';\n                position: absolute;\n                bottom: -2px;\n                left: 0;\n                width: 100%;\n                height: 1px;\n                background: linear-gradient(90deg, #4CAF50, #2196F3, #9C27B0);\n                transform: scaleX(0);\n                transform-origin: left;\n                transition: transform 0.3s ease;\n            }\n            \n            .yma-copyright:hover .yma-copyright-name-after {\n                transform: scaleX(1);\n            }\n            \n            .yma-github-note {\n                opacity: 0.8;\n                transition: opacity 0.3s ease;\n            }\n            \n            .yma-copyright:hover .yma-github-note {\n                opacity: 1;\n            }\n        ";
          document.head.appendChild(_0x28ec7a);
          var _0x2227fe = document.createElement('span');
          var _0x1e49ca = {
            childList: true,
            subtree: true
          };
          _0x2227fe.className = "yma-copyright-name-after";
          _0x2227fe.style.position = "absolute";
          _0x2227fe.style.bottom = "-2px";
          _0x2227fe.style.left = '0';
          _0x2227fe.style.width = "100%";
          _0x2227fe.style.height = "1px";
          _0x2227fe.style.background = "linear-gradient(90deg, #4CAF50, #2196F3, #9C27B0)";
          _0x2227fe.style.transform = "scaleX(0)";
          _0x2227fe.style.transformOrigin = 'left';
          _0x2227fe.style.transition = "transform 0.3s ease";
          _0x3174d7.appendChild(_0x2227fe);
          _0x1ea08d.addEventListener("mouseenter", function () {
            _0x1ea08d.style.boxShadow = "0 4px 12px rgba(76, 175, 80, 0.15)";
            _0x1ea08d.style.transform = "translateY(-2px)";
            _0x2227fe.style.transform = "scaleX(1)";
            _0x241862.style.opacity = '1';
          });
          _0x1ea08d.addEventListener("mouseleave", function () {
            _0x1ea08d.style.boxShadow = 'none';
            _0x1ea08d.style.transform = "translateY(0)";
            _0x2227fe.style.transform = "scaleX(0)";
            _0x241862.style.opacity = "0.8";
          });
          _0x961ce8.appendChild(_0x3174d7);
          _0x57917e.appendChild(_0x1c9a2f);
          _0x57917e.appendChild(_0x961ce8);
          _0x1ea08d.appendChild(_0x57917e);
          _0x1ea08d.appendChild(_0x241862);
          _0x557b3e.appendChild(_0x1ea08d);
          new MutationObserver(function (_0x5713ae) {
            _0x5713ae.forEach(function (_0xf1e111) {
              if (_0xf1e111.removedNodes) {
                _0xf1e111.removedNodes.forEach(function (_0x299bd3) {
                  if (_0x299bd3 === _0x1ea08d || _0x299bd3.classList && _0x299bd3.classList.contains("yma-copyright")) {
                    setTimeout(function () {
                      if (!_0x557b3e.querySelector(".yma-copyright")) {
                        _0x557b3e.appendChild(_0x1ea08d);
                      }
                    }, 100);
                  }
                });
              }
            });
          }).observe(_0x557b3e, _0x1e49ca);
        }
      }
    }
  }
  function _0x2e7bd7(_0x518947) {
    _0x2e7bd7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x4ba961) {
      return typeof _0x4ba961;
    } : function (_0x1b3fc4) {
      return _0x1b3fc4 && "function" == typeof Symbol && _0x1b3fc4.constructor === Symbol && _0x1b3fc4 !== Symbol.prototype ? "symbol" : typeof _0x1b3fc4;
    };
    return _0x2e7bd7(_0x518947);
  }
  function _0x5f0535() {
    _0x5f0535 = function () {
      return _0x5e168c;
    };
    var _0x1ca0fa;
    var _0x5e168c = {};
    var _0x2cb5a3 = Object.prototype;
    var _0x465c22 = _0x2cb5a3.hasOwnProperty;
    var _0x43beb2 = Object.defineProperty || function (_0x5e10d1, _0x3bb61b, _0x239084) {
      _0x5e10d1[_0x3bb61b] = _0x239084.value;
    };
    var _0x3b118d = "function" == typeof Symbol ? Symbol : {};
    var _0x560f78 = _0x3b118d.iterator || "@@iterator";
    var _0x4a8a1a = _0x3b118d.asyncIterator || "@@asyncIterator";
    var _0x15bbaa = _0x3b118d.toStringTag || "@@toStringTag";
    function _0x3ee501(_0x1a8e9b, _0x1e6371, _0xe7839) {
      var _0x2563b4 = {
        value: _0xe7839,
        enumerable: true,
        configurable: true,
        writable: true
      };
      Object.defineProperty(_0x1a8e9b, _0x1e6371, _0x2563b4);
      return _0x1a8e9b[_0x1e6371];
    }
    try {
      _0x3ee501({}, '');
    } catch (_0x3a3e16) {
      _0x3ee501 = function (_0x4eea5a, _0x562b6f, _0x2c7924) {
        return _0x4eea5a[_0x562b6f] = _0x2c7924;
      };
    }
    function _0x46595c(_0x466e9a, _0x19a6db, _0x33f469, _0xf2a43c) {
      var _0x347833 = _0x19a6db && _0x19a6db.prototype instanceof _0x251f31 ? _0x19a6db : _0x251f31;
      var _0x2ef25d = Object.create(_0x347833.prototype);
      var _0x5ef233 = new _0x26cfdf(_0xf2a43c || []);
      _0x43beb2(_0x2ef25d, "_invoke", {
        'value': _0x1ae72b(_0x466e9a, _0x33f469, _0x5ef233)
      });
      return _0x2ef25d;
    }
    function _0x2a9bec(_0x334523, _0x5a6b15, _0x40bc3e) {
      try {
        return {
          'type': "normal",
          'arg': _0x334523.call(_0x5a6b15, _0x40bc3e)
        };
      } catch (_0x327c09) {
        var _0x3e82ea = {
          type: "throw",
          "arg": _0x327c09
        };
        return _0x3e82ea;
      }
    }
    _0x5e168c.wrap = _0x46595c;
    var _0x242361 = {};
    function _0x251f31() {}
    function _0x4b1648() {}
    function _0x55437c() {}
    var _0xdf0c6b = {};
    _0x3ee501(_0xdf0c6b, _0x560f78, function () {
      return this;
    });
    var _0x14cdfd = Object.getPrototypeOf;
    var _0x5cf81d = _0x14cdfd && _0x14cdfd(_0x14cdfd(_0x35dbd4([])));
    if (_0x5cf81d && _0x5cf81d !== _0x2cb5a3 && _0x465c22.call(_0x5cf81d, _0x560f78)) {
      _0xdf0c6b = _0x5cf81d;
    }
    var _0x347330 = _0x55437c.prototype = _0x251f31.prototype = Object.create(_0xdf0c6b);
    function _0x4628f1(_0x3aadc7) {
      ['next', 'throw', "return"].forEach(function (_0x27b75c) {
        _0x3ee501(_0x3aadc7, _0x27b75c, function (_0x4ac3e8) {
          return this._invoke(_0x27b75c, _0x4ac3e8);
        });
      });
    }
    function _0x1c6839(_0x103a11, _0xb114f0) {
      function _0x441165(_0x1edfe2, _0x3c0b0a, _0x47a034, _0x2defd) {
        var _0x2ed5ee = _0x2a9bec(_0x103a11[_0x1edfe2], _0x103a11, _0x3c0b0a);
        if ("throw" !== _0x2ed5ee.type) {
          var _0x3852bc = _0x2ed5ee.arg;
          var _0x9d041 = _0x3852bc.value;
          return _0x9d041 && "object" == _0x2e7bd7(_0x9d041) && _0x465c22.call(_0x9d041, "__await") ? _0xb114f0.resolve(_0x9d041.__await).then(function (_0x514185) {
            _0x441165("next", _0x514185, _0x47a034, _0x2defd);
          }, function (_0xd848d9) {
            _0x441165("throw", _0xd848d9, _0x47a034, _0x2defd);
          }) : _0xb114f0.resolve(_0x9d041).then(function (_0x378acc) {
            _0x3852bc.value = _0x378acc;
            _0x47a034(_0x3852bc);
          }, function (_0x1332df) {
            return _0x441165("throw", _0x1332df, _0x47a034, _0x2defd);
          });
        }
        _0x2defd(_0x2ed5ee.arg);
      }
      var _0x207ed8;
      _0x43beb2(this, "_invoke", {
        'value': function (_0x3d1aec, _0x32d7e2) {
          function _0x491a6a() {
            return new _0xb114f0(function (_0x1397d6, _0x286e5c) {
              _0x441165(_0x3d1aec, _0x32d7e2, _0x1397d6, _0x286e5c);
            });
          }
          return _0x207ed8 = _0x207ed8 ? _0x207ed8.then(_0x491a6a, _0x491a6a) : _0x491a6a();
        }
      });
    }
    function _0x1ae72b(_0x33d986, _0x35660b, _0xfec236) {
      var _0x43b872 = "suspendedStart";
      return function (_0x205798, _0x194afb) {
        if (_0x43b872 === "executing") {
          throw Error("Generator is already running");
        }
        if (_0x43b872 === "completed") {
          if ("throw" === _0x205798) {
            throw _0x194afb;
          }
          var _0xcc6755 = {
            "value": _0x1ca0fa,
            done: true
          };
          return _0xcc6755;
        }
        _0xfec236.method = _0x205798;
        for (_0xfec236.arg = _0x194afb;;) {
          var _0x4ec522 = _0xfec236.delegate;
          if (_0x4ec522) {
            var _0x2aadfd = _0x3a1e86(_0x4ec522, _0xfec236);
            if (_0x2aadfd) {
              if (_0x2aadfd === _0x242361) {
                continue;
              }
              return _0x2aadfd;
            }
          }
          if ("next" === _0xfec236.method) {
            _0xfec236.sent = _0xfec236._sent = _0xfec236.arg;
          } else {
            if ("throw" === _0xfec236.method) {
              if (_0x43b872 === "suspendedStart") {
                _0x43b872 = "completed";
                throw _0xfec236.arg;
              }
              _0xfec236.dispatchException(_0xfec236.arg);
            } else if ("return" === _0xfec236.method) {
              _0xfec236.abrupt("return", _0xfec236.arg);
            }
          }
          _0x43b872 = "executing";
          var _0x5389ac = _0x2a9bec(_0x33d986, _0x35660b, _0xfec236);
          if ("normal" === _0x5389ac.type) {
            _0x43b872 = _0xfec236.done ? "completed" : "suspendedYield";
            if (_0x5389ac.arg === _0x242361) {
              continue;
            }
            var _0x438e47 = {
              "value": _0x5389ac.arg,
              "done": _0xfec236.done
            };
            return _0x438e47;
          }
          if ("throw" === _0x5389ac.type) {
            _0x43b872 = "completed";
            _0xfec236.method = "throw";
            _0xfec236.arg = _0x5389ac.arg;
          }
        }
      };
    }
    function _0x3a1e86(_0x40c28a, _0x26c470) {
      var _0x2b4c69 = _0x26c470.method;
      var _0x55fc61 = _0x40c28a.iterator[_0x2b4c69];
      if (_0x55fc61 === _0x1ca0fa) {
        _0x26c470.delegate = null;
        if (!("throw" === _0x2b4c69 && _0x40c28a.iterator["return"] && (_0x26c470.method = "return", _0x26c470.arg = _0x1ca0fa, _0x3a1e86(_0x40c28a, _0x26c470), 'throw' === _0x26c470.method))) {
          if ("return" !== _0x2b4c69) {
            _0x26c470.method = "throw";
            _0x26c470.arg = new TypeError("The iterator does not provide a '" + _0x2b4c69 + "' method");
          }
        }
        return _0x242361;
      }
      var _0x1e93e2 = _0x2a9bec(_0x55fc61, _0x40c28a.iterator, _0x26c470.arg);
      if ("throw" === _0x1e93e2.type) {
        _0x26c470.method = "throw";
        _0x26c470.arg = _0x1e93e2.arg;
        _0x26c470.delegate = null;
        return _0x242361;
      }
      var _0x1e42db = _0x1e93e2.arg;
      return _0x1e42db ? _0x1e42db.done ? (_0x26c470[_0x40c28a.resultName] = _0x1e42db.value, _0x26c470.next = _0x40c28a.nextLoc, "return" !== _0x26c470.method && (_0x26c470.method = "next", _0x26c470.arg = _0x1ca0fa), _0x26c470.delegate = null, _0x242361) : _0x1e42db : (_0x26c470.method = 'throw', _0x26c470.arg = new TypeError("iterator result is not an object"), _0x26c470.delegate = null, _0x242361);
    }
    function _0x2de966(_0xe3bfa3) {
      var _0x55fdaa = {
        tryLoc: _0xe3bfa3[0]
      };
      if (1 in _0xe3bfa3) {
        _0x55fdaa.catchLoc = _0xe3bfa3[1];
      }
      if (2 in _0xe3bfa3) {
        _0x55fdaa.finallyLoc = _0xe3bfa3[2];
        _0x55fdaa.afterLoc = _0xe3bfa3[3];
      }
      this.tryEntries.push(_0x55fdaa);
    }
    function _0x1d1a14(_0x401c9c) {
      var _0x30fc03 = _0x401c9c.completion || {};
      _0x30fc03.type = "normal";
      delete _0x30fc03.arg;
      _0x401c9c.completion = _0x30fc03;
    }
    function _0x26cfdf(_0x5296fd) {
      var _0x490cb7 = {
        tryLoc: 'root'
      };
      this.tryEntries = [_0x490cb7];
      _0x5296fd.forEach(_0x2de966, this);
      this.reset(true);
    }
    function _0x35dbd4(_0x407151) {
      if (_0x407151 || '' === _0x407151) {
        var _0x3dc75c = _0x407151[_0x560f78];
        if (_0x3dc75c) {
          return _0x3dc75c.call(_0x407151);
        }
        if ("function" == typeof _0x407151.next) {
          return _0x407151;
        }
        if (!isNaN(_0x407151.length)) {
          var _0x5afc96 = -1;
          var _0x1cce5e = function _0x31c33d() {
            for (; ++_0x5afc96 < _0x407151.length;) {
              if (_0x465c22.call(_0x407151, _0x5afc96)) {
                _0x31c33d.value = _0x407151[_0x5afc96];
                _0x31c33d.done = false;
                return _0x31c33d;
              }
            }
            _0x31c33d.value = _0x1ca0fa;
            _0x31c33d.done = true;
            return _0x31c33d;
          };
          return _0x1cce5e.next = _0x1cce5e;
        }
      }
      throw new TypeError(_0x2e7bd7(_0x407151) + " is not iterable");
    }
    _0x4b1648.prototype = _0x55437c;
    _0x43beb2(_0x347330, "constructor", {
      'value': _0x55437c,
      'configurable': true
    });
    _0x43beb2(_0x55437c, "constructor", {
      'value': _0x4b1648,
      'configurable': true
    });
    _0x4b1648.displayName = _0x3ee501(_0x55437c, _0x15bbaa, "GeneratorFunction");
    _0x5e168c.isGeneratorFunction = function (_0x3bd93e) {
      var _0x4b34c2 = "function" == typeof _0x3bd93e && _0x3bd93e.constructor;
      return !!_0x4b34c2 && (_0x4b34c2 === _0x4b1648 || "GeneratorFunction" === (_0x4b34c2.displayName || _0x4b34c2.name));
    };
    _0x5e168c.mark = function (_0x11581e) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(_0x11581e, _0x55437c);
      } else {
        _0x11581e.__proto__ = _0x55437c;
        _0x3ee501(_0x11581e, _0x15bbaa, "GeneratorFunction");
      }
      _0x11581e.prototype = Object.create(_0x347330);
      return _0x11581e;
    };
    _0x5e168c.awrap = function (_0x513f8d) {
      var _0x538305 = {
        __await: _0x513f8d
      };
      return _0x538305;
    };
    _0x4628f1(_0x1c6839.prototype);
    _0x3ee501(_0x1c6839.prototype, _0x4a8a1a, function () {
      return this;
    });
    _0x5e168c.AsyncIterator = _0x1c6839;
    _0x5e168c.async = function (_0x3bc861, _0x27223d, _0x173042, _0x46460a, _0x572db6) {
      if (undefined === _0x572db6) {
        _0x572db6 = Promise;
      }
      var _0x117d9a = new _0x1c6839(_0x46595c(_0x3bc861, _0x27223d, _0x173042, _0x46460a), _0x572db6);
      return _0x5e168c.isGeneratorFunction(_0x27223d) ? _0x117d9a : _0x117d9a.next().then(function (_0x47fd8b) {
        return _0x47fd8b.done ? _0x47fd8b.value : _0x117d9a.next();
      });
    };
    _0x4628f1(_0x347330);
    _0x3ee501(_0x347330, _0x15bbaa, "Generator");
    _0x3ee501(_0x347330, _0x560f78, function () {
      return this;
    });
    _0x3ee501(_0x347330, "toString", function () {
      return "[object Generator]";
    });
    _0x5e168c.keys = function (_0x28ec70) {
      var _0x553a09 = Object(_0x28ec70);
      var _0x499a77 = [];
      for (var _0x38df33 in _0x553a09) _0x499a77.push(_0x38df33);
      _0x499a77.reverse();
      return function _0x4de811() {
        for (; _0x499a77.length;) {
          var _0x3cdaa8 = _0x499a77.pop();
          if (_0x3cdaa8 in _0x553a09) {
            _0x4de811.value = _0x3cdaa8;
            _0x4de811.done = false;
            return _0x4de811;
          }
        }
        _0x4de811.done = true;
        return _0x4de811;
      };
    };
    _0x5e168c.values = _0x35dbd4;
    _0x26cfdf.prototype = {
      'constructor': _0x26cfdf,
      'reset': function (_0x8253f8) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = _0x1ca0fa;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = _0x1ca0fa;
        this.tryEntries.forEach(_0x1d1a14);
        if (!_0x8253f8) {
          for (var _0x238544 in this) if ('t' === _0x238544.charAt(0) && _0x465c22.call(this, _0x238544) && !isNaN(+_0x238544.slice(1))) {
            this[_0x238544] = _0x1ca0fa;
          }
        }
      },
      'stop': function () {
        this.done = true;
        var _0x1ce509 = this.tryEntries[0].completion;
        if ("throw" === _0x1ce509.type) {
          throw _0x1ce509.arg;
        }
        return this.rval;
      },
      'dispatchException': function (_0x43fc1a) {
        if (this.done) {
          throw _0x43fc1a;
        }
        var _0x163d83 = this;
        function _0x75febc(_0x41c8f9, _0x8b122a) {
          _0x3cc821.type = "throw";
          _0x3cc821.arg = _0x43fc1a;
          _0x163d83.next = _0x41c8f9;
          if (_0x8b122a) {
            _0x163d83.method = "next";
            _0x163d83.arg = _0x1ca0fa;
          }
          return !!_0x8b122a;
        }
        for (var _0x4d268a = this.tryEntries.length - 1; _0x4d268a >= 0; --_0x4d268a) {
          var _0x3a40f0 = this.tryEntries[_0x4d268a];
          var _0x3cc821 = _0x3a40f0.completion;
          if ('root' === _0x3a40f0.tryLoc) {
            return _0x75febc("end");
          }
          if (_0x3a40f0.tryLoc <= this.prev) {
            var _0x48fbf2 = _0x465c22.call(_0x3a40f0, "catchLoc");
            var _0x384604 = _0x465c22.call(_0x3a40f0, "finallyLoc");
            if (_0x48fbf2 && _0x384604) {
              if (this.prev < _0x3a40f0.catchLoc) {
                return _0x75febc(_0x3a40f0.catchLoc, true);
              }
              if (this.prev < _0x3a40f0.finallyLoc) {
                return _0x75febc(_0x3a40f0.finallyLoc);
              }
            } else {
              if (_0x48fbf2) {
                if (this.prev < _0x3a40f0.catchLoc) {
                  return _0x75febc(_0x3a40f0.catchLoc, true);
                }
              } else {
                if (!_0x384604) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < _0x3a40f0.finallyLoc) {
                  return _0x75febc(_0x3a40f0.finallyLoc);
                }
              }
            }
          }
        }
      },
      'abrupt': function (_0x48112c, _0x258032) {
        for (var _0x4dee70 = this.tryEntries.length - 1; _0x4dee70 >= 0; --_0x4dee70) {
          var _0x181d2f = this.tryEntries[_0x4dee70];
          if (_0x181d2f.tryLoc <= this.prev && _0x465c22.call(_0x181d2f, "finallyLoc") && this.prev < _0x181d2f.finallyLoc) {
            var _0x2be27e = _0x181d2f;
            break;
          }
        }
        if (_0x2be27e && ("break" === _0x48112c || "continue" === _0x48112c) && _0x2be27e.tryLoc <= _0x258032 && _0x258032 <= _0x2be27e.finallyLoc) {
          _0x2be27e = null;
        }
        var _0x7921c0 = _0x2be27e ? _0x2be27e.completion : {};
        _0x7921c0.type = _0x48112c;
        _0x7921c0.arg = _0x258032;
        return _0x2be27e ? (this.method = "next", this.next = _0x2be27e.finallyLoc, _0x242361) : this.complete(_0x7921c0);
      },
      'complete': function (_0x5171cd, _0x1f4bca) {
        if ("throw" === _0x5171cd.type) {
          throw _0x5171cd.arg;
        }
        if ("break" === _0x5171cd.type || "continue" === _0x5171cd.type) {
          this.next = _0x5171cd.arg;
        } else if ("return" === _0x5171cd.type) {
          this.rval = this.arg = _0x5171cd.arg;
          this.method = "return";
          this.next = "end";
        } else if ("normal" === _0x5171cd.type && _0x1f4bca) {
          this.next = _0x1f4bca;
        }
        return _0x242361;
      },
      'finish': function (_0xbd33a5) {
        for (var _0x40a789 = this.tryEntries.length - 1; _0x40a789 >= 0; --_0x40a789) {
          var _0x2a601c = this.tryEntries[_0x40a789];
          if (_0x2a601c.finallyLoc === _0xbd33a5) {
            this.complete(_0x2a601c.completion, _0x2a601c.afterLoc);
            _0x1d1a14(_0x2a601c);
            return _0x242361;
          }
        }
      },
      'catch': function (_0x4271ce) {
        for (var _0x45d034 = this.tryEntries.length - 1; _0x45d034 >= 0; --_0x45d034) {
          var _0x115c51 = this.tryEntries[_0x45d034];
          if (_0x115c51.tryLoc === _0x4271ce) {
            var _0x3fac8a = _0x115c51.completion;
            if ("throw" === _0x3fac8a.type) {
              var _0x3bf236 = _0x3fac8a.arg;
              _0x1d1a14(_0x115c51);
            }
            return _0x3bf236;
          }
        }
        throw Error("illegal catch attempt");
      },
      'delegateYield': function (_0x1683c7, _0x10d020, _0x10d0c2) {
        this.delegate = {
          'iterator': _0x35dbd4(_0x1683c7),
          'resultName': _0x10d020,
          'nextLoc': _0x10d0c2
        };
        if ('next' === this.method) {
          this.arg = _0x1ca0fa;
        }
        return _0x242361;
      }
    };
    return _0x5e168c;
  }
  function _0x4d7d08(_0x1a99a7, _0x108a83, _0x46b6d5, _0x1ceb13, _0x54441a, _0x322d3f, _0x1dd3df) {
    try {
      var _0x327f5f = _0x1a99a7[_0x322d3f](_0x1dd3df);
      var _0x119ad1 = _0x327f5f.value;
    } catch (_0x3f2fe1) {
      return void _0x46b6d5(_0x3f2fe1);
    }
    if (_0x327f5f.done) {
      _0x108a83(_0x119ad1);
    } else {
      Promise.resolve(_0x119ad1).then(_0x1ceb13, _0x54441a);
    }
  }
  function _0x27e1c8(_0x566e3f) {
    return function () {
      var _0x5cdf1a = this;
      return new Promise(function (_0x61122f, _0x4c96b7) {
        var _0x44865a = _0x566e3f.apply(_0x5cdf1a, arguments);
        function _0x2684c9(_0xee3e8) {
          _0x4d7d08(_0x44865a, _0x61122f, _0x4c96b7, _0x2684c9, _0x536134, "next", _0xee3e8);
        }
        function _0x536134(_0x5c5f6c) {
          _0x4d7d08(_0x44865a, _0x61122f, _0x4c96b7, _0x2684c9, _0x536134, "throw", _0x5c5f6c);
        }
        _0x2684c9(undefined);
      });
    };
  }
  _0x27e1c8(_0x5f0535().mark(function _0x4fbab8() {
    var _0x28b8e2;
    return _0x5f0535().wrap(function (_0x30e8cc) {
      for (;;) {
        switch (_0x30e8cc.prev = _0x30e8cc.next) {
          case 0:
            _0x28b8e2 = function () {
              if (!document.getElementById("toolCard")) {
                _0x1402ce.createCard();
                setTimeout(function () {
                  _0x4c0ef8();
                  setInterval(function () {
                    var _0x1af9d7 = document.querySelector(".yma-copyright");
                    if (_0x1af9d7) {
                      if (!_0x1af9d7.innerHTML.trim().includes("@thjvjpxz")) {
                        var _0x945caa = _0x1af9d7.className;
                        var _0x32dfb8 = _0x1af9d7.getAttribute("style") || '';
                        _0x1af9d7.innerHTML = "<i class=\"fas fa-code\"></i><span>Developed by <span class=\"yma-copyright-name\">@thjvjpxz</span></span><div class=\"yma-github-note\">Click vào đây để cập nhật tool mới nhất (Free)</div>";
                        _0x1af9d7.className = _0x945caa;
                        if (_0x32dfb8) {
                          _0x1af9d7.setAttribute("style", _0x32dfb8);
                        }
                        var _0x1dec4b = _0x1af9d7.querySelector('i');
                        if (_0x1dec4b) {
                          _0x1dec4b.className = "fas fa-code";
                          _0x1dec4b.style.color = "var(--yma-primary-color)";
                          _0x1dec4b.style.fontSize = "16px";
                          _0x1dec4b.style.animation = "pulse 2s infinite";
                        }
                        var _0x1d897e = _0x1af9d7.querySelector(".yma-copyright-name");
                        if (_0x1d897e) {
                          _0x1d897e.className = "yma-copyright-name";
                          _0x1d897e.style.background = "linear-gradient(90deg, #4CAF50, #2196F3, #9C27B0)";
                          _0x1d897e.style.webkitBackgroundClip = "text";
                          _0x1d897e.style.backgroundClip = "text";
                          _0x1d897e.style.webkitTextFillColor = "transparent";
                          _0x1d897e.style.fontWeight = "600";
                          _0x1d897e.style.letterSpacing = "0.5px";
                          _0x1d897e.style.position = "relative";
                        }
                        Object.defineProperty(_0x1af9d7, "innerHTML", {
                          'get': function () {
                            return "<i class=\"fas fa-code\"></i><span>Developed by <span class=\"yma-copyright-name\">@thjvjpxz</span></span><div class=\"yma-github-note\">Click vào đây để cập nhật tool mới nhất (Free)</div>";
                          },
                          'set': function () {
                            return "<i class=\"fas fa-code\"></i><span>Developed by <span class=\"yma-copyright-name\">@thjvjpxz</span></span><div class=\"yma-github-note\">Click vào đây để cập nhật tool mới nhất (Free)</div>";
                          }
                        });
                      }
                    } else {
                      _0x4c0ef8();
                    }
                  }, 1000);
                }, 1000);
              }
            };
            _0x1b6fac.setBackTime();
            ["load", "DOMContentLoaded"].forEach(function (_0x41d9ff) {
              window.addEventListener(_0x41d9ff, _0x27e1c8(_0x5f0535().mark(function _0x3250d9() {
                return _0x5f0535().wrap(function (_0x1a0988) {
                  for (;;) {
                    switch (_0x1a0988.prev = _0x1a0988.next) {
                      case 0:
                        _0x1a0988.prev = 0;
                        _0x1a0988.next = 3;
                        return _0x1b6fac.sleep(1000);
                      case 3:
                        _0x28b8e2();
                        _0x1a0988.next = 9;
                        break;
                      case 6:
                        _0x1a0988.prev = 6;
                        _0x1a0988.t0 = _0x1a0988['catch'](0);
                        console.error("Lỗi khởi tạo:", _0x1a0988.t0);
                      case 9:
                      case "end":
                        return _0x1a0988.stop();
                    }
                  }
                }, _0x3250d9, null, [[0, 6]]);
              })));
            });
            setTimeout(_0x28b8e2, 5000);
          case 4:
          case "end":
            return _0x30e8cc.stop();
        }
      }
    }, _0x4fbab8);
  }))();
})();
