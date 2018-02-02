(function(angular) {
  var ngBorderUID = {
    _current: 0,
    getNew: function() {
      this._current++;
      return this._current;
    }
  };
  angular.module('ngBorder', ['ng'])
    .directive('ngBorder', function($interval) {
      return {
        link: function(scope, element, attrs) {

          var ngBorder_id;

          // Append Function Section
          function appendDiv() {
            ngBorder_id = 'ngBorder_' + ngBorderUID.getNew();
            element[0].setAttribute('id', ngBorder_id);
            angular.element(element[0]).addClass(scope.ngBorder);
            var div = document.createElement('div');
            div.style.width = '100%';
            div.style.height = '100%';
            div.style.position = 'absolute';
            div.style.top = '0';
            div.classList.add('ngBorder');
            element[0].append(div);
          }

          // Get Function Section
          function getStyle() {
            var style = document.querySelectorAll('style#ngBorder');
            if (style.length >= 1) return style[0];
            style = document.createElement('style');
            head = document.head || document.getElementsByTagName('head')[0];
            style.type = 'text/css';
            style.id = 'ngBorder';
            head.appendChild(style);
            return style;
          };

          function getCss() {
            var css = '';
            if(scope.ngBorderColor){
              css += '#' + ngBorder_id + '[class*="border-"]:before,\n' +
              '#' + ngBorder_id + '[class*="border-"]:after,\n' +
              '#' + ngBorder_id + '[class*="border-"] > *.ngBorder:before,\n' +
              '#' + ngBorder_id + '[class*="border-"] > *.ngBorder:after,\n' +
              '#' + ngBorder_id + '[class*="border-undo-"]:before,\n' +
              '#' + ngBorder_id + '[class*="border-undo-"]:after,\n' +
              '#' + ngBorder_id + '[class*="border-undo-"] > *.ngBorder:before,\n' +
              '#' + ngBorder_id + '[class*="border-undo-"] > *.ngBorder:after {\n' +
              'background: ' + scope.ngBorderColor + ' !important; }\n';
            }
            if(scope.ngBorderWidth){
              css += '#' + ngBorder_id + '[class*="border-undo-"] > *.ngBorder:before,\n' +
              '#' + ngBorder_id + '[class*="border-undo-"] > *.ngBorder:after,\n' +
              '#' + ngBorder_id + '[class*="border-"] > *.ngBorder:before,\n' +
              '#' + ngBorder_id + '[class*="border-"] > *.ngBorder:after {\n' +
              'width: ' + scope.ngBorderWidth + '; }\n'
            }
            if(scope.ngBorderWidth){
              css += '#' + ngBorder_id + '[class*="border-"]:before,\n' +
              '#' + ngBorder_id + '[class*="border-"]:after,\n' +
              '#' + ngBorder_id + '[class*="border-undo-"]:before,\n' +
              '#' + ngBorder_id + '[class*="border-undo-"]:after {\n' +
              'height: ' + scope.ngBorderWidth + '; }';
            }
            return css;
          }

          // Remove Function Section
          function removeSpecialChar(obj) {
            var val = obj.value;
            var pattern = /[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9)]/gi; // 특수문자 제거
            if (pattern.test(val)) {
              obj.value = val.replace(pattern, "");
            }
          }

          // Set Function Section
          function setCss() {
            var css = getCss();
            var style = getStyle();
            if (style.innerHTML.indexOf(css) >= 1) return;
            if (style.styleSheet) {
              style.styleSheet.cssText = css;
            } else {
              style.appendChild(document.createTextNode(css));
            }
          };

          // Initialize Function Section
          function initialize() {
            appendDiv();
            setCss();
          };
          initialize();

        },
        scope: {
          ngBorder: "=ngBorder",
          ngBorderColor: "=ngBorderColor",
          ngBorderWidth: "=ngBorderWidth"
        },
        restrict: 'A'
      };
    });
})(angular);
