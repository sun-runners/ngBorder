ngBorder
=======

ngBorder is an angularjs library that creates border animation

<br/>

DEMO
-------
https://kimsunwook.github.io/ngBorder

<br/>

INSTALL
-------

```
bower install ngBorder --save
```

<br/>

Quick start
-------
Copy-paste the stylesheet <script> into your <body> and <link> into your <head>.

```
<script src=".bower_components/ng-border/ngBorder.js"></script>
<link href=".bower_components/ng-border/ngBorder.css" rel="stylesheet">
```
or
```
<script src=".bower_components/ng-border/ngBorder.min.js"></script>
<link href=".bower_components/ng-border/ngBorder.min.css" rel="stylesheet">
```
or
```
<script src="https://raw.githubusercontent.com/KimSunWook/ngBorder/master/ngBorder.js"></script>
<link href="https://raw.githubusercontent.com/KimSunWook/ngBorder/master/ngBorder.css" rel="stylesheet">
```
or
```
<script src="https://raw.githubusercontent.com/KimSunWook/ngBorder/master/ngBorder.min.js"></script>
<link href="https://raw.githubusercontent.com/KimSunWook/ngBorder/master/ngBorder.min.css" rel="stylesheet">
```

<br/>

USAGE
-----

Make sure you include the module 'ngBorder' in your application config

```
var app = angular.module('myApp', [
  'ngBorder',
  ...
]);
```

You can choose among 32 modes from Border.css (https://github.com/gsco/Border.css).
  - border-corners
  - border-corners-rev
  - border-separate
  - border-separate-rev
  - border-box-top
  - border-box-right
  - border-box-bottom
  - border-box-left
  - border-box-top-rev
  - border-box-right-rev
  - border-box-bottom-rev
  - border-box-left-rev
  - border-parallel
  - border-parallel-rev
  - border-parallel-vert
  - border-parallel-vert-rev
  - border-undo-corners
  - border-undo-corners-rev
  - border-undo-separate
  - border-undo-separate-rev
  - border-undo-box-top
  - border-undo-box-right
  - border-undo-box-bottom
  - border-undo-box-left
  - border-undo-box-top-rev
  - border-undo-box-right-rev
  - border-undo-box-bottom-rev
  - border-undo-box-left-rev
  - border-undo-parallel
  - border-undo-parallel-rev
  - border-undo-parallel-vert
  - border-undo-parallel-vert-rev

```
<div
  ng-border="'border-corners'"
  ng-border-color="'#FF5722'"
  ng-border-width="'5px'">
</div>
```

Now you can apply the border animation effect to the desired element.

```
  angular.module('myApp', [
    'ngBorder',
    ...
  ]);
```

<br/>

Easy!
