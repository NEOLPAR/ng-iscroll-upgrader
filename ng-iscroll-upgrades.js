/** @license
 * AngularJS directive that upgrade the iscroll when change the content.
 * Author: Ricardo Berrocal
 * Version: 0.1.0 (2013/12/10)
 * Released under the MIT license
 */
angular.module('ngIscrollUpgrades', []).directive('ngIscrollRefresher', function ()
{
    return {
        replace: false,
        restrict: 'A',
        link: function (scope, element, attr)
        {
            var scroll_key = attr.ngIscroll;

            if (scroll_key === '') {
                scroll_key = attr.id;
            }

			if(attr.ngIscrollRefresher !== undefined) {
				scope.$watch(attr.ngIscrollRefresher, function (){
					if(scope.$parent.myScroll[scroll_key] !== undefined)
                        scope.$parent.myScroll[scroll_key].refresh();
				});
			}
        }
    };
});