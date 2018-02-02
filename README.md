ngBorder
=======

A library that animates buttons when loading

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
Copy-paste the stylesheet <script> into your <body> and <link> into your head.

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
<script src="https://raw.githubusercontent.com/KimSunWook/ngBorder/master/ngBorder.css"></script>
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
<ng-border
  nlb-loading="loading"
  nlb-mode="'rotating-plane'"
  ng-click="save();">
  Save
</ng-border>
```

When loading takes a certain amount of time, such as saving or deleting, you can give the button an animation effect.

So you can easily prevent the user from clicking the button more than once when loading.

```
  angular.module('myApp', [
    'ngBorder',
    ...
  ]);
```

<br/>

Easy!
