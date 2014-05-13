ng-iscroll-upgrader
===================

AngularJS directive that upgrade the iscroll when change the content.

Example
=======
If you have a news page and reload it when push a bottom or with infinite scroll, you only need to put the next code where you call to iscroll:
```html
ng-iscroll ng-iscroll-delay="800" ng-iscroll-refresher="news"
```
Where "news" is the AngularJS repeater:
```html
<li ng-repeat="news in newsList">
  {{ news.title }}
</li>
```
