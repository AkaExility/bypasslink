(async function () {
  'use strict';

  function _0x3117fe() {
    console.log("Đang đổi nhiệm vụ...");
    const _0x2806bf = document.querySelector("#btn-baoloi");
    if (!_0x2806bf) {
      return;
    }
    _0x2806bf.click();
    setTimeout(() => {
      const _0x3d1fd2 = document.querySelector("#lydo_doima > center > a:nth-child(2)");
      if (_0x3d1fd2) {
        _0x3d1fd2.click();
      }
      setTimeout(() => {
        const _0x227e44 = document.querySelector("#lydo_doima > label:nth-child(8) > input[type=radio]");
        if (_0x227e44) {
          _0x227e44.click();
        }
        setTimeout(() => {
          const _0x1e36de = document.querySelector("#dongy_doima > a");
          if (_0x1e36de) {
            _0x1e36de.click();
          }
        }, 500);
      }, 500);
    }, 500);
  }
  function _0x314556() {
    return new Promise((_0x2c092c, _0x512fdd) => {
      const _0x23e955 = document.querySelector("p#TK1").textContent.trim().toLowerCase();
      const _0x2d003b = document.querySelector("img#halt_nv") || document.querySelector("img#hinh_nv");
      const _0x500219 = _0x2d003b ? _0x2d003b.src : null;
      if (_0x500219.includes("placehold.co")) {
        setTimeout(() => {
          _0x314556().then(_0x2c092c)["catch"](_0x512fdd);
        }, 100);
        return;
      }
      const _0x2edaf9 = "https://api.ocr.space/parse/imageurl?apikey=K81664733488957&isOverlayRequired=true&OCREngine=2&url=" + _0x500219;
      const _0x341337 = new XMLHttpRequest();
      _0x341337.open("GET", _0x2edaf9, true);
      _0x341337.onload = function () {
        if (_0x341337.status === 200) {
          const _0x366f86 = JSON.parse(_0x341337.responseText);
          const _0x5c3bd7 = _0x366f86.ParsedResults[0];
          const _0x4227f1 = _0x5c3bd7.TextOverlay.Lines.filter(_0x1138c4 => _0x1138c4.LineText.match(/\b[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+\b/) && _0x1138c4.Words && _0x1138c4.Words.some(_0x5d231f => _0x5d231f.Top < 170)).map(_0x4f2029 => _0x4f2029.LineText);
          let _0x1a33b5 = '';
          if (_0x23e955 === "188bet") {
            _0x1a33b5 = "https://165.22.63.250" + _0x4227f1 + '/';
          } else {
            if (_0x23e955 === "w88") {
              _0x1a33b5 = "https://188.166.185.213/";
            } else {
              if (_0x23e955 === "bk8") {
                _0x1a33b5 = "https://188.166.189.40/";
              } else {
                if (_0x23e955 === "fb88") {
                  _0x1a33b5 = "https://fb88" + _0x4227f1 + '/';
                } else {
                  if (_0x23e955 === "m88") {
                    _0x1a33b5 = "https://bet88" + _0x4227f1 + '/';
                  } else {
                    if (_0x23e955 === "vn88") {
                      _0x1a33b5 = "https://vn88mo.com/";
                    } else if (_0x23e955 === "v9bet") {
                      _0x1a33b5 = "https://188.166.224.89/";
                    } else {
                      _0x1a33b5 = "Chưa nhận diện được URL!";
                    }
                  }
                }
              }
            }
          }
          _0x2c092c(_0x1a33b5);
        } else {
          _0x512fdd("Lỗi khi tải dữ liệu: " + _0x341337.status);
        }
      };
      _0x341337.send();
    });
  }
  function _0x38e633(_0x594611) {
    const _0xade705 = Date.now();
    return _0xade705 + ',' + "https://www.google.com/" + ',' + _0x594611 + ",IOS900,hidden,null";
  }
  ;
  function _0x4ddee6(_0x52c717) {
    return new Promise((_0x3d3321, _0x41f9f2) => {
      const _0x52a54b = _0x38e633();
      const _0x2096a8 = new XMLHttpRequest();
      const _0x2acd95 = "https://traffic-user.net/GET_VUATRAFFIC.php?data=" + _0x52a54b + "&clk=" + _0x52c717;
      _0x2096a8.open("POST", _0x2acd95, true);
      _0x2096a8.onload = function () {
        if (_0x2096a8.status === 200) {
          const _0x441d84 = _0x2096a8.responseText;
          const _0xbfc361 = _0x441d84.match(/localStorage\.codexn\s*=\s*'([^']+)'/)?.[1];
          if (_0xbfc361) {
            localStorage.codexn = _0xbfc361;
            _0x3d3321(_0xbfc361);
          } else {
            console.error("Không thể lấy mã codexn");
            _0x41f9f2("Lỗi! Đổi nhiệm vụ khác và thử lại");
          }
        } else {
          _0x41f9f2("Lỗi: " + _0x2096a8.status);
        }
      };
      _0x2096a8.onerror = () => _0x41f9f2("Lỗi mạng hoặc yêu cầu không thành công");
      _0x2096a8.send();
    });
  }
  function _0x35e7f6(_0x482f38, _0x1d87dd, _0x1a6626, _0x12497e) {
    return new Promise((_0x2660a5, _0x4381dd) => {
      const _0xb03b86 = "https://traffic-user.net/GET_MA.php?codexn=" + _0x482f38 + "&url=" + _0x1d87dd + "&loai_traffic=" + _0x1a6626 + "&clk=" + _0x12497e;
      const _0xa9b99c = new XMLHttpRequest();
      _0xa9b99c.open("POST", _0xb03b86, true);
      _0xa9b99c.onload = function () {
        if (_0xa9b99c.status === 200) {
          const _0xa2654e = _0xa9b99c.responseText;
          const _0x28fad2 = _0xa2654e.match(/sessionStorage\.setItem\("ymnclk", (\d+)\)/)?.[1];
          if (_0x28fad2) {
            sessionStorage.setItem("ymnclk", _0x28fad2);
            _0x2660a5(_0x28fad2);
          } else {
            const _0x5b5bc3 = new DOMParser().parseFromString(_0xa2654e, "text/html");
            const _0x3a40f5 = _0x5b5bc3.querySelector("span#layma_me_vuatraffic");
            if (_0x3a40f5) {
              _0x2660a5(_0x3a40f5.textContent.trim());
            } else {
              _0x4381dd("URL Lỗi! Vui lòng kiểm tra lại.");
            }
          }
        } else {
          _0x4381dd("Lỗi: " + _0xa9b99c.status);
        }
      };
      _0xa9b99c.onerror = () => _0x4381dd("Lỗi mạng hoặc yêu cầu không thành công");
      _0xa9b99c.send();
    });
  }
  function _0x1170a1(_0x531cf7) {
    const _0x7bca35 = document.querySelector("#gt-form")?.["getAttribute"]("action") || '';
    const _0x1df601 = "https://yeumoney.com" + _0x7bca35;
    const _0x37bbda = new FormData();
    _0x37bbda.append("code", _0x531cf7);
    _0x37bbda.append("keyword", '');
    _0x37bbda.append("dieuhanh", document.querySelector("input[name=\"dieuhanh\"]")?.["value"] || '');
    _0x37bbda.append("pix", document.querySelector("input[name=\"pix\"]")?.["value"] || '');
    _0x37bbda.append("lvp", document.querySelector("input[name=\"lvp\"]")?.["value"] || '');
    _0x37bbda.append("ref", "$ref");
    _0x37bbda.append("trinhduyet", document.getElementById("trinhduyet")?.["value"] || '');
    _0x37bbda.append("id_traffic", document.getElementById("id_donhang")?.["value"] || '');
    _0x37bbda.append("check_index", '1');
    const _0x55e349 = new URLSearchParams(_0x37bbda).toString();
    GM_xmlhttpRequest({
      'method': "POST",
      'url': _0x1df601,
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded",
        'User-Agent': navigator.userAgent,
        'Referer': "https://yeumoney.com/",
        'Cookie': document.cookie
      },
      'data': _0x55e349,
      'onload': function (_0xb8f5b8) {
        window.location.href = _0xb8f5b8.finalUrl;
      },
      'onerror': function (_0x5d58f7) {
        const _0x5a7098 = _0x5d58f7.error;
        const _0x1569ed = _0x5a7098.match(/https?:\/\/[^\s"]+/);
        window.location.href = _0x1569ed;
      }
    });
  }
  async function _0x3a18c8(_0x1020ee) {
    try {
      const _0x11c3fd = await _0x4ddee6(null);
      const _0x1942ae = _0x1020ee.replace(/\/$/, '');
      const _0x2814b3 = await _0x35e7f6(_0x11c3fd, _0x1942ae, "https://www.google.com/", null);
      const _0x523045 = await _0x4ddee6(_0x2814b3);
      const _0x2ad37b = _0x1020ee + "admin";
      const _0x456a88 = await _0x35e7f6(_0x523045, _0x2ad37b, _0x1020ee, _0x2814b3);
      return _0x456a88;
    } catch (_0x1aad12) {
      console.error("Lỗi trong startBypass:", _0x1aad12);
      return null;
    }
  }
  async function _0x547c7a() {
    try {
      const _0x5a645b = new Date();
      const _0x4cf689 = _0x5a645b.getDate().toString();
      const _0x37752c = document.getElementById("docs-title-input-label-inner") || document.querySelector(".docs-ml-header-document-title-text");
      const _0x39412c = _0x37752c.textContent || _0x37752c.innerText;
      if (!_0x39412c.includes("TÌM MÃ BƯỚC 2")) {
        const _0xffb891 = localStorage.getItem("dayBypassed");
        if (_0xffb891 === _0x4cf689) {
          console.log("Đã bypass hôm nay.");
          return null;
        }
        if (_0x39412c.includes("BACKUP KHÓA HỌC 2K7 FREE")) {
          const _0x1625e9 = confirm("Bạn có muốn Bypass không?!");
          if (!_0x1625e9) {
            localStorage.setItem("dayBypassed", _0x4cf689);
            return null;
          }
        } else {
          return null;
        }
      }
      localStorage.setItem("dayBypassed", _0x4cf689);
      const _0x53374d = window.location.href;
      const _0x3ae151 = _0x53374d.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      if (!_0x3ae151) {
        console.error("Không tìm thấy Sheet ID.");
        return null;
      }
      const _0x4e7de8 = "https://sheets.googleapis.com/v4/spreadsheets/" + _0x3ae151 + "?fields=sheets(data(rowData(values(userEnteredValue,hyperlink))))&key=" + "AIzaSyDTEFhPROUdMvEg7pTPF13rTRCfgXbJLJo";
      const _0x29a6d8 = await fetch(_0x4e7de8);
      if (!_0x29a6d8.ok) {
        console.error("Lỗi khi gọi API:", _0x29a6d8.statusText);
        return null;
      }
      const _0x4abd6a = await _0x29a6d8.json();
      const _0x458bfa = _0x4abd6a.sheets?.[0]?.["data"]?.[0]?.["rowData"] || [];
      for (let _0x222f02 of _0x458bfa) {
        for (let _0x57727c of _0x222f02.values || []) {
          const _0x992bd4 = _0x57727c.hyperlink;
          if (_0x992bd4 && _0x992bd4.includes("https://yeumoney.com/")) {
            return _0x992bd4;
          }
        }
      }
      console.warn("Không tìm thấy hyperlink hợp lệ.");
      return null;
    } catch (_0x323401) {
      console.error("Lỗi:", _0x323401.message);
      return null;
    }
  }
  async function _0x455c38() {
    if (!document.title.includes("Điểm danh ngày")) {
      return null;
    }
    window.onbeforeunload = null;
    function _0x87e508(_0x37402f, _0x439759) {
      setTimeout(() => {
        if (!_0x37402f.classList.contains("checked")) {
          _0x37402f.click();
        }
      }, _0x439759);
    }
    function _0x33b935(_0xe79001, _0x32610b) {
      setTimeout(() => {
        if (!_0xe79001.classList.contains("checked")) {
          _0xe79001.click();
        }
      }, _0x32610b);
    }
    var _0x4b56cf = document.querySelectorAll("div[role=\"checkbox\"]");
    _0x4b56cf.forEach((_0x391a0d, _0x5c9641) => {
      _0x87e508(_0x391a0d, _0x5c9641 * 300);
    });
    var _0x5c8ca8 = document.querySelectorAll("div[role=\"radiogroup\"]");
    _0x5c8ca8.forEach(_0x26a3ad => {
      var _0x131c89 = _0x26a3ad.querySelectorAll("div[role=\"radio\"]");
      _0x131c89.forEach((_0x296c1c, _0x57c325) => {
        _0x33b935(_0x296c1c, _0x57c325 * 300);
      });
    });
    setTimeout(() => {
      var _0xd59432 = document.querySelector("form");
      if (_0xd59432) {
        _0xd59432.submit();
      }
    }, (_0x4b56cf.length + _0x5c8ca8.length) * 300 + 200);
  }
  function _0x57282f(_0x4df70e) {
    const _0x2e768f = document.createElement("div");
    _0x2e768f.style.position = "fixed";
    _0x2e768f.style.top = "10px";
    _0x2e768f.style.right = "10px";
    _0x2e768f.style.backgroundColor = "#f9f9f9";
    _0x2e768f.style.border = "1px solid #ccc";
    _0x2e768f.style.padding = "10px";
    _0x2e768f.style.zIndex = "9999";
    _0x2e768f.style.width = "350px";
    _0x2e768f.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    _0x2e768f.style.borderRadius = "10px";
    const _0x295556 = document.createElement('h4');
    _0x295556.textContent = "Script By AkaDz";
    _0x295556.style.margin = '0';
    _0x295556.style.marginBottom = "10px";
    _0x295556.style.fontSize = "10px";
    _0x295556.style.fontStyle = "italic";
    _0x295556.style.textAlign = "center";
    _0x295556.style.backgroundImage = "linear-gradient(90deg, red, orange, brown, green, blue, indigo, violet, indigo, blue, green, brown, orange, red)";
    _0x295556.style.backgroundSize = "200% auto";
    _0x295556.style.color = "transparent";
    _0x295556.style.backgroundClip = "text";
    _0x295556.style.webkitBackgroundClip = "text";
    _0x295556.style.animation = "rainbowMove 5s linear infinite";
    const _0x4b2bd3 = document.createElement("style");
    _0x4b2bd3.textContent = "\n        @keyframes rainbowMove {\n            0% { background-position: 0% 50%; }\n            100% { background-position: 100% 50%; }\n        }\n    ";
    document.head.appendChild(_0x4b2bd3);
    _0x2e768f.appendChild(_0x295556);
    const _0x2e0735 = document.createElement('h3');
    _0x2e0735.textContent = "Nhập Key Bypass:";
    _0x2e0735.style.margin = '0';
    _0x2e0735.style.fontWeight = "bold";
    _0x2e0735.style.marginBottom = "5px";
    _0x2e0735.style.fontSize = "16px";
    _0x2e0735.style.color = "darkred";
    _0x2e768f.appendChild(_0x2e0735);
    const _0x2695f5 = document.createElement("input");
    _0x2695f5.type = "password";
    _0x2695f5.placeholder = "Nhập key của bạn";
    _0x2695f5.style.width = "100%";
    _0x2695f5.style.marginBottom = "10px";
    _0x2695f5.style.padding = "8px";
    _0x2695f5.style.fontSize = "14px";
    _0x2695f5.style.border = "1px solid #ccc";
    _0x2695f5.style.borderRadius = "5px";
    _0x2e768f.appendChild(_0x2695f5);
    const _0xc1f5ff = {
      'ewcQdxhRUBtjyQsNheoA': null,
      'YbwGjULxiqcUIvhTsewT': null,
      'chqghRcTvAiYjseBjXza': null,
      'oAgoPqoVaihw7MV4uZGP': null,
      'LiNgOcPxyucGEIbtnoJn': null,
      'GDsjOoQVvqxrbDBeTTfI': null,
      'hCPniDaMhJINjJBQknqk': null,
      'EUXULgATKaGlyGhFfJyq': null,
      'WuBcqtZXIVmiWDBHXSrS': null,
      'uIZrIFOBrLQtEnLCOgEs': null,
      'ulceVpvfnzJYpwRFETtt': null,
      'VtnDcmsRFDEteCkWYFRR': null,
      'FdFzomCHlcwtbDkISxYv': null,
      'NZmnInLoXvChidmyzUjR': null,
      'LJGrynJycjpepeNvUMot': null,
      'gqdMnkbqdcUsyRBGOATZ': null,
      'BjyCqCLyWqFrrvgTcnLR': null,
      'jxnsBAZGTIAtFeVJzQYO': null,
      'HJzMcaXYBQHLEESYIspa': null,
      'IykAsHxQCRhRTkDIOJiZ': null,
      'gmNENBkylhKxgbgiticQ': null,
      'HGiACDMdyFsNerUZvkYy': null,
      'knAsdxfHZwlSOANaiJyK': null,
      'HkUKFFeVhRoYecwPfZnQ': null,
      'VCDIzhPGcHjZYMfxCZkk': null,
      'NlmTSAUyQNWFFzpPxvfJ': null,
      'GzExPWxwDIPdSZYTYSBa': null,
      'wBFMngnslkbmBRjCoxST': null,
      'WhKsVkNhAuOsVhgPtUgM': null,
      'nUqdqyqSzXlQNkADPaPU': null,
      'lhcjAbSKajSFhHZZXzDW': null,
      'MJLXpOPWLJdyFxwxWGRn': null,
      'iGYqTdTbcdlaoNerHnqB': null,
      'YKIRfNKSBFGivocDfqkK': null,
      'AdtGfCGJzkqcuABfEHeY': null,
      'vHPEMUuyxNJTJODfEVCx': null,
      'JalzNlpPUrtbPagmtHeH': null,
      'nQWnoEeTKUYKWQjloydJ': null,
      'LaWYKSIZaSMcfHqEDVJi': null,
      'BRqXNtLJwHVZJDFVViTZ': null,
      'iyYtqtVWAxUIApltnrJZ': null,
      'CYPZpOFAGjzkCTknsxKF': null,
      'JAXmKJXBukuSCbsUCIGM': null,
      'CfgYOtFCzZFIvZmVjdll': null,
      'xxsysEJRFKembrJqYgHc': null,
      'ytaujPrtPZBMlFOCxiZB': null,
      'wNwPkLvdfsuDDCzPuZFF': null,
      'sgCqImFVrCcFHRcZzlSw': null,
      'jeyyxLSCdxvCPmlSyjpQ': null,
      'EiGiiNgOjIafRiWfodKS': null,
      'eKswcKvOccptgCmNgxAA': null,
      'FiXqaLpPolhqewsuelNH': null,
      'wCZAwIbxtZVfbIWeXBQF': null,
      'PfyKSIQakTlfYvMrYtZh': null,
      'HrZNWVQuDllQBlaTVdHg': null,
      'KgtIariFrLGADNeDUPuk': null,
      'IrqcdbABnYReTnNcpcUC': null,
      'moghdgklCKRYNhYkMtvd': null,
      'zSDFWsQMtZPPqjOmRFaG': null,
      'aBpqIhAfeFyubNhHGtkK': null,
      'FsldbCdqtUoXcNzMizer': null,
      'lwTguSTbrpihyavpfELm': null,
      'pHLmAnElOzWHwCWFlQVD': null,
      'NVvLMvOJzlLmpUSgyNdV': null,
      'dVlReZlExnyszpnErCVc': null,
      'FONwIfkbyCZBvUOXCpAC': null,
      'XvXXpfJvJfdFaxPziMYI': null,
      'UDBYASUULVtdArCXseaV': null,
      'aIQlCqjSKWMkdWIVLbAb': null,
      'PNaBZXSmzrGMtJySUxkI': null,
      'EgcKnlkHbpZgOwPDYjjJ': null,
      'DxyCPfWqAdzcjENbleEQ': null,
      'mouESThvLoqdVAWeJRpJ': null,
      'ssTxeoVdlmgGHaCCXcSX': null,
      'WStwacLcUOIsZSpsaaGO': null,
      'GJptCeBkkqiBIfofIwPQ': null,
      'uIRMqqKTNSgSTNaZYUpD': null,
      'VzkqvPBjmpqVsMHHsYRs': null,
      'jdSqzvqntrXXgiViuuMS': null,
      'bmQugvjeNzmGGYhVwyGw': null,
      'iVRsvEjZflWqHfOUGXnE': null,
      'iyWlieAqYRljwWnaKoHR': null,
      'RDoquWUVrfpcCazdTwaK': null,
      'DZYAmjxfIksFIFdXbtOO': null,
      'asLSsRIbSNCUsATKajOQ': null,
      'qkOYwuQWygwQzIVAKFfC': null,
      'ccGFZedKOTpiEIEQqnfQ': null,
      'LePsLCriZbsuEVanIoMi': null,
      'yBfHTdYVjMvlxRcpDLVv': null,
      'YJFHDnRCiquzcpeamyad': null,
      'zvDsvYlDEmUJHjfYzYyU': null,
      'EKqEZEHyRALdrzJKAhcL': null,
      'cLEzovfGSooqqcYeGOTZ': null,
      'UouzfsbXUiDUXZqTkJoP': null,
      'dTbfeHVjnkiUKjyRMvDC': null,
      'AFXFDZizOtBdePfYKlVv': null,
      'ajJfCEzwEJetANdyocys': null,
      'obkRAMgLmilbpIANTbaN': null,
      'lKaRKtsccREADkkxVNWU': null,
      'AKAFpKYTdrifSbSQWohm': null,
      'TbuCjczBYSYPCJfwJlGl': null,
      'lQZAnmMXOmVSuOBobDXT': null,
      'LUYYrVxkdVLVxjFEJgJP': null,
      'zrfFUzZvGmFVBVEIqGqu': null,
      'jVnkbAQEfRcOSZPHoREO': null,
      'vzWGlQmHPzkBGObSOkMI': null,
      'ycOeKRnpXgXtHGcNhOpu': null,
      'VFrlWrgHTJGPSZnvKgbo': null,
      'CylkSseTVaGvCFaPmyRF': null,
      'oYPFcSLmUpiOwfYrVTcp': null,
      'KdbiwZOuZkHvMzBkRUji': null,
      'fSolFfXRvbTdqtuIrRCH': null,
      'HKhPDgXHKqvmmCFSgwsR': null,
      'cAloGUdYbMAmUBwIMEGH': null,
      'qOHOuDYCCgzKevdXGNLj': null,
      'KUJAWqJGRqgIbMsMxVhr': null,
      'nMREXNMQeOVcXcjoDOYH': null,
      'KVrZfaikOTfzZquVkPtW': null,
      'FRMHOjofBEZmzlwIYtHO': null,
      'YZUBBLHOeZYUgoOMQrLv': null,
      'MHcadowieKabReJlbKqe': null,
      'coxYxoCKwDKMgYCpyjzL': null,
      'WaxZyoddvTUMYxypxzRN': null,
      'nfYBoKSuMJoEUnPdNeuF': null,
      'ycTgrsBUANYQatyTwRTS': null,
      'kQlZYuyvlWiWSXZQkQIQ': null,
      'UGxXrvdiCDXuXhVNZPvc': null,
      'HexEbFApWRkXxdaOVWEZ': null,
      'AGiCcfHIokSKrnRgzrja': null,
      'ZBhNYGxILdqcnCZqFtEG': null,
      'XALeqAWMzrMVGMAHfoao': null,
      'xwxzHAFDtkwuZOnPNVBd': null,
      'kIilbGJbsZBXtLQLuJRG': null,
      'GcddGrcCEMsxoCkkZrte': null,
      'KEOSJdVzdXGdDckwDvOZ': null,
      'TAzGYVFCafQCnWhBFkly': null,
      'TIAIjIPoABfkLncWBJWd': null,
      'hDkLKQfRoqRemEmwhvpQ': null,
      'GZIXXothVzUNuJTmtBiN': null,
      'TUtGEeRwqjnBwTeXjlUP': null,
      'DUmNfKoqdEuTzpBiaRMZ': null,
      'YlRJWNuByDUVoRFCJamV': null,
      'bTIbKWZIUVZPmCArrmRC': null,
      'IfdaxSFtZfctrXSiUlmk': null,
      'gbcFGOHtliqhPSOJjMry': null,
      'KpKMpIoNUBbuatgjVPEm': null,
      'XrqezmiumHukmoPCpsTb': null,
      'pQGkSgeKlnkazwWIkniU': null,
      'sWNTdXHBvfwgpmQAFunU': null,
      'ziwKvwruqIeMFURFLhiM': null,
      'tuCojDqaEHBIWfzGvqHK': null,
      'HDJPQZsvBiQaZaYeKVZg': null,
      'iNeXurBYFMUOMbGwRUXC': null,
      'OSjVLbeVwOZOkmYBsouN': null,
      'gEMAEduhJnkmUdDKuTRy': null,
      'tncBvhaJCnSeTeIccbte': null,
      'wxEIxMHlNxEQhztEKMhl': null,
      'MwWUZXwEsPNGyzKeWtji': null,
      'XmNXemzrEaasdUqELpvd': null,
      'ZfjKswtYRnQZEPpVQSiI': null,
      'IHcHjMZanWMhywYmtLwV': null,
      'GMwFgXsYcYmOYhGqapkP': null,
      'lelGexyjQPvGaIbyiKdC': null,
      'ayrurajqHPTWkCqXAxJX': null,
      'ZjeXDCjaWccTCgSknOrh': null,
      'rfKHPQiCzmoJmhMyaxyf': null,
      'klUjIOxELkRJOrhaxiNF': null,
      'HPDlTAymSdPoqYdFMiXn': null,
      'hBKkGanLQByeBcEmkEZP': null,
      'jzfFkNaMubGfDoWlEsMm': null,
      'xygQLnEHMEJoGGcidCTn': null,
      'lqtjhAvNrCFEHJpSSywp': null,
      'uxxnSLUybVzkiuLuOXfQ': null,
      'AKkPXNRPCpQTmiizjiHm': null,
      'zKNkbJGqQLSOphvLcIqL': null,
      'frvKmOuEpfZgxkYpiKdd': null,
      'qIHzWjmbHCmtyMYlQvnm': null,
      'crASinPSoJUMFBpVLWKI': null,
      'IZFghZmYyagGaKdDcZUz': null,
      'bkXMWRFNGPONAMVLoPsw': null,
      'IkfXXZxkpfJYoFGCzIIM': null,
      'ubCKTXRtBCbkoNtJOMXt': null,
      'DiwdxCUPZbXUcetlHOsQ': null,
      'DIDslNKLdgBxdyitTxDT': null,
      'OXYJMnMozFXSBNWJBFGa': null,
      'gUnfizpLaYcWlyVCJMMs': null,
      'gkorLSETWdfbhvImxAPg': null,
      'UVLgecguGzvYetqWPVAj': null,
      'xSWTBDeiDlhOxahyhQcI': null,
      'pmREqEcXfHnlQqKcGFkQ': null,
      'WTlPpQwdMyrOxuTmpKAw': null,
      'JGSmbWyVvHveyJxmZmim': null,
      'cAlkmqBCKlQkQyxVCcaw': null,
      'XoKIITMBQiJXOWBGdTNr': null,
      'dogowyfnsvoIoaMRTiPI': null,
      'bQthcMbeMBEfDhFdlmrZ': null,
      'UFSZijcywhkGSdaUHCil': null,
      'uWVhtjbZNHabmXaDPXAY': null,
      'ZXPQJwjWNeRmColURWkr': null,
      'iOylCMqdeladQSOwXfet': null,
      'ZMIGcjPIVmeRSfqQcYXV': null,
      'UwEqNTnpXuRGnGSdrQyJ': null,
      'TZUzmaRdQJMcLkmdyVXj': null,
      'HjMGSpxRufprZAepFYTL': null,
      'xompEEYufPyupcplMwCu': null,
      'CtFejNfalKAuMERvxGnD': null,
      'vecjGTtmFEaxFbZhXdYh': null,
      'hNbmJJAijZUHPoyhfpQX': null,
      'iWpjJyjCKpaQKSOCPhNe': null,
      'DVOGPYehpYAOFbMdpzIZ': null,
      'YvNgHzNXiMZpIFHjwDQJ': null,
      'DIcFqLoSHTQBwJLHxndV': null,
      'mRUbDKMcQxjKcVTWzyHx': null,
      'wVEDgougdufNggrlxivl': null,
      'gmhjUDTLlsRZDayOnNKr': null,
      'rNxxALiNofEeLjQFLgfK': null,
      'blQEWvoYUmirpSSuctDA': null,
      'rJvRxiXxckdaSZzjvTyw': null,
      'UedKuyxdIBKHOgkuvvsN': null,
      'kIiPFwrICHfYPWNHxgjH': null,
      'bGVXDKboNxHHReHxxJhh': null,
      'RadBrRYcXMdNbcawEUzV': null,
      'JmnNwRvcAeRKGlydikWa': null,
      'HcUkgKEMpVJzztgrGpMs': null,
      'YIKHxmznEnyEPcuiyWwN': null,
      'VVLovIkWGmRJpkPEwIYa': null,
      'JYBKuXlgXNWcNKMipcYe': null,
      'RRCdflZVtvuWXRjVWDrb': null,
      'SGjPsipgOEFVCsLXNXRf': null,
      'SlvbxZzmTbGVpfgaotER': null,
      'oygUazrCUDRHdiyLKbBm': null,
      'VTLMenVxwMfLkhydIRdO': null,
      'FqQFkjHmvzQjxYNKpILu': null,
      'AlqODChEzIWIddbUzCVr': null,
      'SyTVQEyLJiKvaPZFlUSM': null,
      'nviSczykECZSdixDbVBW': null,
      'EUTTehCwXYNXalkDaWOU': null,
      'AJkEZSmpZSFtUdBIOoZD': null,
      'TKwuHUhxuXgmfMfbcYTf': null,
      'tNggPKDnZbCeweESXCPv': null,
      'XjFMIhJgAsnZeXERhvxN': null,
      'RecAuCjvxLcclopfkReb': null,
      'hcJAmixrrzROgbbAMQkK': null,
      'iKEpFGqlsXDdpLHwGtLe': null,
      'PQUdztXipndTYFtufiBu': null,
      'iAxCUHJmzyEJZobCmoDq': null,
      'EHHvdKqQgJwdThVQBlXx': null,
      'NjxgBVizfJrIamvtitKp': null,
      'JBGTPnjelmMcMEDffRLC': null,
      'IYNQNBVDzpysrpOwmwUH': null,
      'zEjfxhYAKrqECKQrybHc': null,
      'PubaQDdvZxRvNyUqTIzl': null,
      'cfpDHSPVQWYwThAGTThI': null,
      'GBkbShlmrmGgklidkyRq': null,
      'nhwZQhMThBjDpiNmkoWD': null,
      'ImWwvjRgfjweQsifNfco': null,
      'xPRDMITkcwYDSAWqDSUy': null,
      'SVCGopwaMdPsTkzNDdJY': null,
      'hTDdwRFOwwCpEDXGBuRF': null,
      'NHHygJyqHhzylaqrBLWW': null,
      'DwbcOVTyyRQvVIUwnZvK': null,
      'qvRbjaFzgXzKIgwMsXgd': null,
      'visIUhEoUgLlGPWGhhSJ': null,
      'tRCtXnOKeMdXSaSaqLzE': null,
      'hBKZffioWDPlrYvGefBq': null,
      'bwhcgAQvqtAwsIeoEwgC': null,
      'ChmYheRGHdbIEVLgjxEj': null,
      'LdfrAVfsRWBZENjgPtgY': null,
      'aBjOQgaSGgypgpajXNbb': null,
      'hRykzYwSyVPiaFJlNsOd': null,
      'YxsAlejjmbyRCwUJTLhI': null,
      'xfeOHIYnpQQDEobNxfiX': null,
      'xcjINsKeZFrUnczgPEFy': null,
      'wUaRwhwHABnAPyXjOSbM': null,
      'KwPxuGzdSbzabCKydQon': null,
      'zdPoFNOfwOHCUdZxyeOn': null,
      'wQgXKRToIuNUyluALGKC': null,
      'RaWEwguPpTEQlYCVEzIf': null,
      'YvxkPhHofBLDEosqJYBU': null,
      'EmZDKAIlUuPzZJOgwhZz': null,
      'FxoqqxivdFVebFyqfXIb': null,
      'BgrOfHJVqEvEbdpwwRTc': null,
      'WbzfGxBSQxEFMeQFgZWj': null,
      'iZfIxERccuoveXzzKUtd': null,
      'zPhDvkDDPjkjGKHLrksJ': null,
      'HmaqfhzsbPJzmihuJtEX': null,
      'TlCNDcShtHHMXLpeIJUk': null,
      'EAwESpuqYMlslKJDOAyN': null,
      'YctOmybQbnnSLzukUUzt': null,
      'xSKbemZiUOevAvanlCQJ': null,
      'ZTidlVtgwSUZyGThduEc': null,
      'PilHDKFrTaylfVyaKHQt': null,
      'SbwMXgAdqjFTGsnClnnw': null,
      'EBXDwVChtXwZFqTnQlnw': null,
      'PyNIXgPstvYPzbquJXiN': null,
      'wePgSWcqarfkYLjxkmgf': null,
      'wLgxUkLHjfHPhMQexWyc': null,
      'yvmhklMTQlcEPRbjNxOF': null,
      'kQqSopIRmFfxLmoUUMgl': null,
      'FSNEUyiiYbCqOQOwtYCY': null,
      'rHjMWxXYCEkvesdVUCkA': null,
      'GegJQIFXEPmGSnFjQaek': null,
      'HyRZfPZOeNndLuxJaplE': null,
      'pvdRgTQQnsrrKKdFFlrw': null,
      'ijEiPWGjhdEyszNPqzuY': null,
      'cEyNyoauHwEDrOklPKoo': null,
      'RaMJkDrQUnwjheGKfmvx': null,
      'FerINjPwHpmWKlYZGkUC': null,
      'rFMRMjyfwrrZaXDYzIxP': null,
      'KGgDdoWaoXquoCnpSTAc': null,
      'FzEBCIMnFapumAehlqCH': null,
      'GjaQFQQZkhbRQsUuIqzl': null,
      'YwmkClvEQisegcjvDfdo': null,
      'lROsgJQqrApSMQtCqqAv': null,
      'AIVCipZacTbyiXJOeAOa': null,
      'UMhXeMEqZrcYLKrebiKF': null,
      'SrlZWCevsRaLQbHSlunm': null,
      'dtpMLqaYnuAizmEvnkxQ': null,
      'kdWvHzdSMQgXNpdOdyRZ': null,
      'qBzeXvTlonnjmaVvAYGX': null,
      'gSCwtvGHHsDUdtRIOtqr': null,
      'JbFLwwdTFQnhmVqbLJCR': null,
      'wZhYBiATCffRwaXSRHhf': null,
      'drXeDWQnpvOMFfzHRlBg': null,
      'NvhMAkMwAWHPCISjpxQW': null,
      'hwwijrGYzZMmTPgIrttZ': null,
      'devgWcWWNvieilxxWnry': null,
      'zhiFVCBbKqGlsesHkpMF': null,
      'JMfEMgiqsIYYRaHMSjoX': null,
      'pQkPtWDubdawkihYpxdc': null,
      'QkeuPDWdASbOXJXwSeKZ': null,
      'LMzgnbxiGUTTildlaTrA': null,
      'XWNHUFGPvENsbZSzfnEL': null,
      'jelMArDQFHFaIHTCHsHK': null,
      'NQkcRmXrfDYiGsTTUyVO': null,
      'uqqLaGbWEVYavMwwZSXf': null,
      'uaqeKiJGfTgINWlzXNyw': null,
      'KKGUZBIzillrRBQbCGxY': null,
      'yewzsqCEHJNPDnsuEDts': null,
      'VbGXareBvdqDKAcVLvUt': null,
      'xrjykgOyJsGYJSEaKVCh': null,
      'VbIFWorBQXcKvFhWwDlA': null,
      'VdhTuCfJNJRYMDiEqpAd': null,
      'oJkumisgyyNWbPBuHnmF': null,
      'XccLMSLJqnCKnYXBhdSX': null,
      'cwibllfKXrHrHQRKaOkz': null,
      'hNxvFOobcMvtxDhvfbjD': null,
      'LzkkkCCpujMdTzTimlrn': null,
      'bmFhsluFsZIjuVvufIqu': null,
      'SSLaADyRPyOkBkvvbCTT': null,
      'NkKNiofuSemgwYddMVTC': null,
      'efubMCwgfelTinBEJlGA': null,
      'jNrxDBrgmblWVbhwGNIT': null,
      'LCeLayZOyKidFEroNbbD': null,
      'PJDFSsTWwxYYRDeYOBJN': null,
      'xXCwmHMMONWfDDIAhBHo': null,
      'LuHlaoouOxeKmCXzlZsG': null,
      'AcHPkNfWCbGhXMkNxpJS': null,
      'jwAbmgYifSSnCEckhRqM': null,
      'hzwvhCPkaZjNpJTZYHMY': null,
      'NfoOsGFOhaXzTSqkDiNp': null,
      'XwZEulTNCsWeNTZqETuV': null,
      'BCsNgqHczbwcilZRPlVD': null,
      'MgkpJhbheqcmqwmkLCKW': null,
      'iXlkfnAWQbxDEDItNuEr': null,
      'VChoVYrlfCXIiIAhTkmK': null,
      'zEZfNUzHYMUMzyvkIcEN': null,
      'QTEExVRUuVJirohuXOcm': null,
      'GDFKFiNGWrDpyqyhFpzH': null,
      'ALkoaCwZiTESOqhGwTgj': null,
      'QPFUqZxgMAuUgVXrtJKc': null,
      'lDvhMggiTlOyqQBqgYlk': null,
      'juedWtBaapMjDciylVmd': null,
      'HxaTruLvZRIKOEqZCnJj': null,
      'SaMpigIWzABPcsvORIdK': null,
      'fUFnUSvrlgPnevFoBzVt': null,
      'amofOyRcXfggVCIXEZcf': null,
      'ULAmrEnRNEewcusbAbzv': null,
      'YdJyRzpvfmQXMHqoAkXB': null,
      'RlmpiOQujiLpctBaZVkp': null,
      'mAwmXcUhGltAvAvbKjCJ': null,
      'uodknyPbbJDNRfGyYiEN': null,
      'nIBapjocVgwbSoLkuCVR': null,
      'ylUNotKtlayalCKaqfWh': null,
      'ECKQHDcmYPjMIcygkguM': null,
      'UodqoZMOYahiRSYmlHgh': null,
      'pzlicuyrgusnlOavUCQx': null,
      'dBemgINTvDRDDkKlEQyl': null,
      'iiFOwYmjKKHOMOhvEKBV': null,
      'ntCvRiemdkqtBXgNjQpS': null,
      'ErGHwyKmzdInwZYeIJaU': null,
      'uBCymhlLBmPKUKYCbMQn': null,
      'oKfbaTreVlnMSsyPwRYQ': null,
      'tELazZaiAAYtSKoDebHn': null,
      'kNQcXsYekyObugdiDtdx': null,
      'IMXyZbLnyWGEFCWOXNUA': null,
      'zCDGdPtzFrllMHLdsWLi': null,
      'oZLolxrcffXpNuKpRTVY': null,
      'isfFrLkJZtuNyQgZpjVl': null,
      'rqMderbDHyLeyJyfzfml': null,
      'WrJbXEBDElliJUHZLcwV': null,
      'IsnZHUQvZKzopbSzeYDq': null,
      'UOjCtBPHdpQBDRMrxosu': null,
      'jpQyaWvqikjpmLJgTEOt': null,
      'QjJYZkDMnIqjSAoqfiAY': null,
      'BQWnrZQBdJjFWdHQdeOv': null,
      'GVbpHhMdfEvYPHqjkRRU': null,
      'GQOkZfSVBzPFNasDSioz': null,
      'AktjDyuyyRKDIusZzHLw': null,
      'KWIbURMNrOzowAaGHtRz': null,
      'EdiBSLCDdnvkjbZPXeub': null,
      'ksTUXibYXZgNAZzhQKvJ': null,
      'OFhVquNdDDJVZgMwmhnd': null,
      'qOWMKXWoEyrmNTDipGQu': null,
      'LTmwjgmlcZTdPWPXrMti': null,
      'hDFelaUUXxcKaVZGMgmn': null,
      'bTrgXrJQDqjEbjZGaPAe': null,
      'uLcDpqBQFdaxMKwfDPtK': null,
      'xLsTOFbJixMqDTYXPAgi': null,
      'VjssTObrfSZBLFeVglmF': null,
      'NOPIMuxTRyqOZtvmsXud': null,
      'HdQBOuDIsQLFJPvGjGGh': null,
      'TWOxzgVZdspLDYQgBNyA': null,
      'NseLlYeUgGXAPigZqBoo': null,
      'sxHazvQJhxLcGKqciIHW': null,
      'vjLQHlYGTUgDzEyNUtsc': null,
      'fVQogSzbgXwDEnXFbVsr': null,
      'HfBrOyqUnbaGzhzagzKe': null,
      'atORqJzqRCgVICnYtNWo': null,
      'CQFTQWDZRKJuYVHTnAOX': null,
      'ruxOoomLqqLSQdgxCrOa': null,
      'cEDryZUehQLchQzENhxq': null,
      'oyNgeiixKjiJLkiYnrhB': null,
      'gzpwObGxjfnvxXRDEcYP': null,
      'YOnrGxvslabpIxrbmxkB': null,
      'HFbdAydLbZqPeSYrSjfH': null,
      'tbTWKOstLKvnSqucADeD': null,
      'iHObJwknwfsNdnIwwgcv': null,
      'PfRlgtmkEojzXKSZsBLn': null,
      'AZZmVzFSVRKqhmveETWA': null,
      'DNgvGwvkeMqMMfoMjEVC': null,
      'vnhhyYfbshvyygZcSFwt': null,
      'diiOPZcKDxeubtDVDorP': null,
      'dIWlXMMaHbhSHfDCwebU': null,
      'vVSukvbeejBLmUOhoLJx': null,
      'XtCFexcHJRbmIhAbssFg': null,
      'DOYTOVjIYqCPFsbJmaMJ': null,
      'kxaeMzOYOCqsfPhEEtqP': null,
      'WXxHJjtFjEvsHihnKqVq': null,
      'miGfAlAtRFfAfwijEetQ': null,
      'GpjLQGzsDthYXrviCiXa': null,
      'HUTtTEKEmYeKVQHYSWUT': null,
      'RYLRePuMoVrxpWAsgNUw': null,
      'vkBuNVpliLPAohmttYRv': null,
      'ZhrAoqwxFevIuEhpKcXp': null,
      'ARPzHFQWSBbvTGLTXXjJ': null,
      'KbkHPlEeDFsDbyUrJmGb': null,
      'nlmIrZDcmxdhAvFSFsWM': null,
      'ykKPdbDQLotojDCFnojm': null,
      'StCdjYlHVKgWeYgIaUbX': null,
      'PAxDFYggPSiENFsIAlrh': null,
      'KCGuZdukTFLdCWqzHufJ': null,
      'RUopLLDMDjYNvrYFpJTx': null,
      'VtNyhfCgoWvpLAzvYGHR': null,
      'BHBLhUwusYAmJYtpZcfS': null,
      'HcACozuSmXbfdGbmpkvq': null,
      'UDXCugeBnnwWofTvaDvO': null,
      'dNhtvsHzFuwHNcEmiLSZ': null,
      'kEARMwjlcaYSMZnQYgaZ': null,
      'EYZKDMUOtDhSZCpbkdfY': null,
      'kJSgObURqxXjWZWeRksN': null,
      'kAGDFCibRSmbOgSoiYKW': null,
      'ZZOMAjwiNtHgDtVVgPrJ': null,
      'wEryhZtgWOIqjtCmSydG': null,
      'vIwaANMFAhGDRxZWPuAj': null,
      'MvcHnGdPBszkeIUZyJLG': null,
      'APmahnLXIDuJTNIwOwNR': null,
      'vIhOdXGRzBJyMLxjNUYF': null,
      'PsgXETseongGHMnPFjKf': null,
      'vtxGJZjdHERtejdhVpMj': null,
      'bPqpBZZFJrUOYTTqzwWh': null,
      'oWkRXLWJijBGOutsotbO': null,
      'JvcoehKdeObMdLAvavBp': null,
      'zzMelQRAPnnbsVmrgtkJ': null,
      'TSHnUEbKJfiKuaAsIGuN': null,
      'coivKoTAWvlWTDUistqc': null,
      'GqgWxHxOOBUIDIgfPZrw': null,
      'ophmnoMnJqTniIUcmKtl': null,
      'gxmsmwiXwZbrinencDiO': null,
      'dMnvaxqVOeGETGYwspwd': null,
      'fkROWWYvdEamUdzVKSxZ': null,
      'rsOAoDeMhDCyDceLecjp': null,
      'zZxTFhckekQnEomDNAUk': null,
      'cZOPlcBPlxAnNdpXqsbm': null,
      'mcBpoeZVqDaGGZeJvTkB': null,
      'hqDMkmVOzxXAQHpCUZxy': null,
      'nqGBuUjCcfSoQOWEVdWQ': null,
      'ReFeqckALzGalQJMAtiH': null,
      'YuYYyQaeyiFXieEMIdaK': null,
      'dZiALjMqPiKLjeBhNQQK': null,
      'efYgCgYisHodAXoABbcW': null,
      'rbAiBJsDMrgbxjSOFqLY': null,
      'PeQfYtAXSsDfKCIPWFyc': null,
      'cyCwjuDqRMruGyfcPWmZ': null,
      'WpPqlmSQJmRtRGPKIxQQ': null,
      'ZOwBnjIIwaqkVpFIPuHP': null,
      'BvrANhEacyPaoZUagdUX': null,
      'fomQcPaMAWbdEPXPrvbC': null,
      'ffAjEXyBHaDCROzLUJvH': null,
      'bpKtgTXJMHkbbFuPJvHl': null,
      'WDxcxxHmMYOfnLsciJdy': null,
      'xZLUgtHlIXcZhApECPse': null,
      'HiouYpfvpIGniMIXwFRd': null,
      'bGAxyUyLQHZeirmXHCEn': null,
      'dcPLEJYTBPROkixcGdik': null,
      'qQrQJnjViquRIZMTJray': null,
      'OUUDpvYBAOePvdQHLilP': null,
      'yGZoJOEVcMtRTSBUijXP': null,
      'heuJFlFgmtNPfTQCsiRe': null,
      'qviZfvUmwjtiEZcjIRbw': null,
      'BlvkWQswytRCPvwTbSRQ': null,
      'GpkqKmiaSSTMEhpcDhPJ': null,
      'whOBjobCDggwByTPfaDO': null,
      'ektmYrqLthwYyDOzaNYU': null,
      'aOcHodpuDsFITSQTbNyC': null,
      'GXkNRenxkfVxfaMLPyaO': null,
      'tiAsneYafQwZxrbBTOPV': null,
      'hXhciEdOyDhRheFxhZpM': null,
      'YLMntAlSDaDtQBADeJLh': null,
      'rXtYSVtyGlJBQdYIVbME': null,
      'AoFUhzDdeoBIYNumBnjQ': null,
      'EuEbHUqccIaVDQZYbEob': null,
      'oRClgHITjONcQumtjkNz': null,
      'lKszFEKcfGiGVPzGnViw': null,
      'VYJlYbAYAvgnejsdySsI': null,
      'GFEXXOQaVDuGLglPgbGI': null,
      'dJJnCwRuVAgVaFYkbcRF': null,
      'WyfbaOBMONqkQsLdBudu': null,
      'mNAHqUwvHSstmQjxhRpC': null,
      'dQyyJUMulYynFfNTJTVr': null,
      'efAUIUYyHVyuvVHxwvvF': null,
      'bdVxpLjsndubARKeKYLU': null,
      'XmAYDksYxvfAhvUXyZkd': null,
      'MzcEFDQRdomNbTFHZtBA': null,
      'NouqUSmkCOKEJHQKSROW': null,
      'mPQqOQSgJRikTdrencds': null,
      'mYBPkVlKyHIrHqxbuULY': null,
      'taGoKsbxintyNPuwdPZy': null,
      'LDcxaENRYLLkPrZVklcf': null,
      'uyHbpHNPDNGjZzxIlqZj': null,
      'dBwCTVGqqVfyyeDajUuG': null,
      'ZCCLvQIpibgALYLUwUGq': null,
      'pLVQletZLiXldvRWqvvk': null,
      'vECOqcoMgkjajuLeWESW': null,
      'SPfzUqDeRdBcGYHKNVMk': null,
      'hKjLOHHQFTVQgCiempHZ': null,
      'OJYINfSJpRxhxiyBFAHB': null,
      'ExzFamJmeEvXpgWhPKGD': null,
      'pxZeYjUhVgLycKtQMAQA': null,
      'OVKHTWsBtIpGtvNwXsxQ': null,
      'mSVryHAYcSgsvOVvoMkR': null,
      'jVEHfOsPzSWcYzlpIVlY': null,
      'IZOiHjcqdqsmwgDkUCUJ': null,
      'cGnJLlvmAtXMNBSxnKnV': null,
      'iMOcifseiJRwgvlFfzjn': null,
      'AxaiIVzvFESmFJpJVesm': null,
      'tiIwXbWSnVzzHAhFuGzq': null,
      'MrFHcdsYWRQAnTCgprGH': null,
      'ALHwVVRmynogjolLlDtG': null,
      'miwufQbKcVGZAEeDaZbc': null,
      'zGzwlOcNpgnEkzdqmccU': null,
      'XuaEZoFMOrKRTnQaBEaD': null,
      'PDoZxqqcPxhVhnyerMJT': null,
      'dwcjFxmLMHCQSbzzuubg': null,
      'WmokmUKvkzBIfvZDNJzI': null,
      'pZVkWqnnjaJwgFgDSUHJ': null,
      'YmNqbuMYdUculnTQbNrP': null,
      'ITQzbQIaBDGoOrXADtSn': null,
      'kgmkkkqKbVcmdppFvNkO': null,
      'oyxRjLLFdUvfCSXhEweI': null,
      'TsDuAULqlIcBKdDvJwlF': null,
      'LvjqvNQTDNfgmesjExka': null,
      'UIMsCyZoxIEkDNRuVZqe': null,
      'BmgWUhZsVwqIAQnnxtME': null,
      'WuXjQyhWpgcGMWAZjvNq': null,
      'LyEftcaUvrBRSwqqOJyL': null,
      'jIWkVPMfgIgRMDAoZPLx': null,
      'fTyziktuVJlQveylnorJ': null,
      'LhPzxzwuCmwmxfViSNfE': null,
      'rIsTRoHVjirweZKqcLRH': null,
      'sArlShkjlKlyuvxGlrpF': null,
      'leglvAcmyhHHsKkAKYSL': null,
      'VXYktgchkdqphqgPONPI': null,
      'HwZVdbkwZtUAxUZjzpMy': null,
      'NZqDpOyfnxWmUuePtHuH': null,
      'KKXdaBbymJAgNaKypHLX': null,
      'ZBetGlMYbUYwueClNmCs': null,
      'iPgfhxnArXsPVpMnBEjA': null,
      'bcuowfZWVxCqOGewdsWd': null,
      'evrPbvkKLyUjNYqjDyEP': null,
      'lITGGhLmwPEfSdlQLHUp': null,
      'IoXHNdnkjKLhuCmSeqJH': null,
      'xIHGqlHBSehgzXRtuCUI': null,
      'iTrhFODvFWjpgrOlQytT': null
    };
    async function _0x5cf745() {
      try {
        const _0xe55e35 = await fetch("https://api64.ipify.org?format=json");
        const _0x1f1a8f = await _0xe55e35.json();
        return _0x1f1a8f.ip;
      } catch (_0x89dd15) {
        console.error("Không thể lấy địa chỉ IP:", _0x89dd15);
        return "Không xác định";
      }
    }
    async function _0x3f6ddd() {
      let _0x27121a = localStorage.getItem("deviceID");
      if (!_0x27121a) {
        const _0x5ede66 = navigator.userAgent;
        const _0x19b309 = navigator.platform;
        const _0x27bb27 = navigator.language;
        const _0x3bb4b2 = _0x5ede66 + _0x19b309 + _0x27bb27;
        const _0x36c819 = new TextEncoder();
        const _0x4b433d = _0x36c819.encode(_0x3bb4b2);
        const _0x423488 = await crypto.subtle.digest("SHA-256", _0x4b433d);
        const _0x284386 = Array.from(new Uint8Array(_0x423488));
        const _0x4b0344 = _0x284386.map(_0x21f072 => _0x21f072.toString(16).padStart(2, '0')).join('');
        _0x27121a = _0x4b0344.substring(0, 16);
        localStorage.setItem("deviceID", _0x27121a);
      }
      return _0x27121a;
    }
    async function _0x303df4(_0x18ab90) {
      const _0x357cca = await _0x5cf745();
      const _0x5ed656 = await _0x3f6ddd();
      const _0x5f18ce = {
        'username': "Key Check Logger",
        'avatar_url': "https://i.pinimg.com/736x/af/9a/80/af9a80b73145513f5cc6b964e0a51bc2.jpg",
        'embeds': [{
          'title': "**✅ Key Hợp Lệ!**",
          'color': 0xff00,
          'fields': [{
            'name': "**Device ID**",
            'value': '`' + _0x5ed656 + '`',
            'inline': true
          }, {
            'name': "**IP Address**",
            'value': '' + _0x357cca,
            'inline': true
          }, {
            'name': "**Key Nhập**",
            'value': '`' + _0x18ab90 + '`',
            'inline': false
          }],
          'footer': {
            'text': "Bypass System",
            'icon_url': "https://i.pinimg.com/736x/1d/70/b6/1d70b67f9959d7aa2cb8a5eb467ebb61.jpg"
          },
          'timestamp': new Date().toISOString()
        }]
      };
      fetch("https://discord.com/api/webhooks/1347138212233089046/PZNY1sODz3tw-b_jBmQXjaChFYVH5KiMHaD37GEE5tg8C5hIejRUOo1cazVdZsFZ16WH", {
        'method': "POST",
        'headers': {
          'Content-Type': "application/json"
        },
        'body': JSON.stringify(_0x5f18ce)
      })["catch"](_0x3b5c5b => console.error("Lỗi gửi Webhook:", _0x3b5c5b));
    }
    async function _0x395b9e() {
      const _0x6b52cb = _0x2695f5.value;
      const _0x5aa1c5 = Object.keys(_0xc1f5ff).includes(_0x6b52cb);
      if (_0x5aa1c5) {
        await _0x303df4(_0x6b52cb);
      }
      return _0x5aa1c5;
    }
    function _0x3751ff() {
      _0x395b9e().then(_0x38bef2 => {
        _0x126df2.disabled = !_0x38bef2;
        _0x49afc2.disabled = !_0x38bef2;
      });
    }
    _0x2695f5.addEventListener("input", _0x3751ff);
    const _0x42c4e6 = document.createElement('h3');
    _0x42c4e6.textContent = "Nhập URL nhiệm vụ:";
    _0x42c4e6.style.margin = '0';
    _0x42c4e6.style.fontWeight = "bold";
    _0x42c4e6.style.marginBottom = "10px";
    _0x42c4e6.style.fontSize = "16px";
    _0x42c4e6.style.color = "darkred";
    _0x2e768f.appendChild(_0x42c4e6);
    const _0x1abfe5 = document.createElement("input");
    _0x1abfe5.readOnly = false;
    _0x1abfe5.placeholder = "Nếu để trống sẽ sử dụng URL nhận diện!";
    _0x1abfe5.style.width = "100%";
    _0x1abfe5.style.marginBottom = "10px";
    _0x1abfe5.style.padding = "8px";
    _0x1abfe5.style.fontSize = "14px";
    _0x2e768f.appendChild(_0x1abfe5);
    const _0x121149 = document.createElement('h4');
    _0x121149.textContent = "URL nhận diện (OCR): " + _0x4df70e;
    _0x121149.style.margin = '0';
    _0x121149.style.marginBottom = "10px";
    _0x121149.style.fontSize = "13px";
    _0x121149.style.color = "brown";
    _0x2e768f.appendChild(_0x121149);
    const _0x32b932 = document.createElement("div");
    _0x32b932.style.display = "flex";
    _0x32b932.style.alignItems = "center";
    _0x32b932.style.marginBottom = "10px";
    _0x32b932.style.fontSize = "14px";
    _0x32b932.style.color = "chocolate";
    const _0x594c11 = document.createElement("input");
    _0x594c11.type = "checkbox";
    _0x594c11.id = "fetchCode";
    _0x594c11.checked = GM_getValue("fetchCode", false);
    _0x594c11.disabled = true;
    const _0x867e6d = document.createElement("label");
    _0x867e6d.htmlFor = "fetchCode";
    _0x867e6d.textContent = "Auto chuyển trang";
    _0x867e6d.style.marginLeft = "5px";
    _0x867e6d.style.marginRight = "15px";
    const _0x49afc2 = document.createElement("input");
    _0x49afc2.type = "checkbox";
    _0x49afc2.id = "autoStart";
    _0x49afc2.checked = GM_getValue("autoStart", false);
    _0x49afc2.disabled = true;
    const _0x50e59d = document.createElement("label");
    _0x50e59d.htmlFor = "autoStart";
    _0x50e59d.textContent = "Auto Bypass (90%)";
    _0x50e59d.style.marginLeft = "5px";
    _0x32b932.appendChild(_0x594c11);
    _0x32b932.appendChild(_0x867e6d);
    _0x32b932.appendChild(_0x49afc2);
    _0x32b932.appendChild(_0x50e59d);
    _0x2e768f.appendChild(_0x32b932);
    const _0x3e4b4b = document.createElement("div");
    _0x3e4b4b.style.display = "flex";
    _0x3e4b4b.style.justifyContent = "space-between";
    _0x3e4b4b.style.fontSize = "14px";
    const _0x126df2 = document.createElement("button");
    _0x126df2.textContent = "Bắt đầu Bypass";
    _0x126df2.style.flex = '1';
    _0x126df2.style.padding = "7px";
    _0x126df2.style.backgroundColor = "#4CAF50";
    _0x126df2.style.color = "#fff";
    _0x126df2.style.border = "none";
    _0x126df2.style.cursor = "pointer";
    _0x126df2.style.marginRight = "5px";
    _0x126df2.style.borderRadius = "5px";
    _0x126df2.disabled = true;
    _0x126df2.onclick = async () => {
      try {
        _0x126df2.disabled = true;
        _0x1abfe5.readOnly = true;
        const _0x23fd74 = _0x1abfe5.value || _0x4df70e;
        _0x1abfe5.value = "Đang xử lý...";
        const _0x552c46 = await _0x3a18c8(_0x23fd74);
        if (_0x552c46) {
          let _0xfe7009 = 2;
          const _0xbd3936 = setInterval(() => {
            _0x1abfe5.value = "Vui lòng chờ: " + _0xfe7009 + " giây";
            _0xfe7009--;
            if (_0xfe7009 < 0) {
              clearInterval(_0xbd3936);
              if (_0x594c11.checked) {
                _0x1abfe5.value = "Code: " + _0x552c46 + " - Đang chuyển trang...";
                _0x1170a1(_0x552c46);
              } else {
                _0x1abfe5.value = "Code: " + _0x552c46;
              }
              _0x126df2.disabled = false;
            }
          }, 1000);
        } else {
          _0x1abfe5.readOnly = false;
          console.error("Không có mã trả về từ startBypass");
          _0x1abfe5.value = "Lỗi! Vui lòng xem lại URL.";
        }
        sessionStorage.removeItem("ymnclk");
        localStorage.removeItem("codexn");
      } catch (_0x5d9360) {
        console.error("Lỗi khi gọi startBypass:", _0x5d9360);
      }
    };
    _0x3e4b4b.appendChild(_0x126df2);
    const _0x3ead99 = document.createElement("button");
    _0x3ead99.textContent = "Đổi Nhiệm Vụ";
    _0x3ead99.style.flex = '1';
    _0x3ead99.style.padding = "7px";
    _0x3ead99.style.backgroundColor = "#F44336";
    _0x3ead99.style.color = "#fff";
    _0x3ead99.style.border = "none";
    _0x3ead99.style.cursor = "pointer";
    _0x3ead99.style.borderRadius = "5px";
    _0x3ead99.onclick = async () => {
      _0x1abfe5.readOnly = true;
      _0x1abfe5.value = "Đang Đổi Nhiệm Vụ...";
      _0x3117fe();
    };
    _0x3e4b4b.appendChild(_0x3ead99);
    _0x2e768f.appendChild(_0x3e4b4b);
    document.body.appendChild(_0x2e768f);
    _0x2695f5.addEventListener("input", function () {
      const _0x2b21f3 = _0x2695f5.value.trim();
      if (_0xc1f5ff.hasOwnProperty(_0x2b21f3)) {
        GM_setValue("bypassKey", _0x2b21f3);
        _0x594c11.disabled = false;
        _0x49afc2.disabled = false;
        _0x126df2.disabled = false;
        _0x2695f5.style.border = "2px solid green";
      } else {
        _0x594c11.disabled = true;
        _0x49afc2.disabled = true;
        _0x126df2.disabled = true;
        _0x2695f5.style.border = "2px solid red";
      }
    });
    if (_0x49afc2.checked) {
      _0x126df2.click();
    }
  }
  const _0x225ce1 = window.location.href;
  window.onload = () => {
    if (_0x225ce1.includes("https://yeumoney.com/")) {
      _0x314556().then(_0x3184e8 => {
        _0x57282f(_0x3184e8);
      })["catch"](_0x5859be => {
        console.error("Lỗi khi nhận diện URL:", _0x5859be);
        _0x57282f("Lỗi! Tự nhập URL hoặc Reload");
      });
    } else {
      if (_0x225ce1.includes("https://docs.google.com/spreadsheets/")) {
        _0x547c7a().then(_0x3415a8 => {
          if (_0x3415a8) {
            window.location.href = _0x3415a8;
          }
        })["catch"](_0xc4cd11 => console.error("Lỗi khi gọi hàm:", _0xc4cd11));
      } else if (_0x225ce1.includes("https://docs.google.com/forms/")) {
        _0x455c38();
      }
    }
  };
})();
