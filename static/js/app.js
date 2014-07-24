'use strict';

/* Declare angular module */
var CygnusApp = angular.module('CygnusApp', ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);

CygnusApp
  .service('anchorSmoothScroll', function(){
    
    this.scrollTo = function(eID) {

      // This scrolling function 
      // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
      // http://jsfiddle.net/brettdewoody/y65G5/
      
      var startY = currentYPosition();
      var stopY = elmYPosition(eID);
      var distance = stopY > startY ? stopY - startY : startY - stopY;
      if (distance < 100) {
        scrollTo(0, stopY); return;
      }
      var speed = Math.round(distance / 100);
      if (speed >= 20) speed = 20;
      var step = Math.round(distance / 25);
      var leapY = stopY > startY ? startY + step : startY - step;
      var timer = 0;
      if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
          setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
          leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
      }
      for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
      }
      
      function currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
          return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) return document.body.scrollTop;
        return 0;
      }
      
      function elmYPosition(eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
          node = node.offsetParent;
          y += node.offsetTop;
        } return y;
      }

    };
    
  });

/* Cygnus website main controller */
CygnusApp
  .controller('CygnusCtrl', ['$scope', '$window', '$timeout', 'anchorSmoothScroll', function ($scope, $window, $timeout, anchorSmoothScroll) {
    $scope.aside = {
      "title": "Sitemap",
      "content": " "
    };

    $scope.gotoElement = function (eID){
      // set the location.hash to the id of
      // the element you wish to scroll to.

      // call $anchorScroll()
      anchorSmoothScroll.scrollTo(eID);
    };

    var slidesInSlideshow = 6;
    var slidesTimeIntervalInMs = 3200; 
     
     $scope.slideshow = 1;
      var slideTimer =
        $timeout(function interval() {
          $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
          slideTimer = $timeout(interval, slidesTimeIntervalInMs);
        }, slidesTimeIntervalInMs);

      $scope.services = [
        ["Accounts Payable", "accounts-payable"],
        ["Accounts Receivable", "accounts-receivable"],
        ["Payroll", "payroll"],
        ["General Ledger", "general-ledger"],
        ["Tax Preparation", "tax-preparation"],
        ["Other Services", "other-services"],
      ];
      
      var base_url = "/services/?init="
      $scope.dropdown = [
        {
          "text": $scope.services[0][0],
          "href": base_url.concat($scope.services[0][1])
        },
        {
          "text": $scope.services[1][0],
          "href": base_url.concat($scope.services[1][1])
        },
        {
          "text": $scope.services[2][0],
          "href": base_url.concat($scope.services[2][1])
        },
        {
          "text": $scope.services[3][0],
          "href": base_url.concat($scope.services[3][1])
        },
        {
          "text": $scope.services[4][0],
          "href": base_url.concat($scope.services[4][1])
        },
        {
          "text": $scope.services[5][0],
          "href": base_url.concat($scope.services[5][1])
        },
      ];


      $scope.tooltip = {title: 'Hello Tooltip<br />This is a multiline message!', checked: false};

      $scope.founders = [
        { name:"Alex Sincioco", title:"CEO", quote:{title: 'Hello Tooltip<br />This is a multiline message!', checked: false},
          desc:"Holds a Bachelors degree in Accounting. Alex has an extensive accounting background spanning 20 years working in both privately held and publicly traded companies. As a previous business owner, he understands how challenging it is to handle day-to-day operations. Alex helps businesses in all stages of growth."},
        { name:"Wenli Huang", title:"CFO", quote:{title: 'Hello Tooltip<br />This is an example quote for Wenli', checked: false},
          desc:"A Certified Public Accountant that recently joined Cygnus. Wenli is experienced in business and individual income tax preparation and payroll tax preparation. She has earned a Bachelor of Science in Business Administration with a concentration in Finance from Santa Clara University." },
        { name:"Jerry Pamorada", title:"Product Development", quote:{title: 'Hello Tooltip<br />This is an example quote for Jerry', checked: false},
          desc:"A mechanical engineer by trade. Jerry earned his engineering degree at Don Bosco University, Philippines. He has 18 years of sales and marketing experience." },

      ];

      $scope.height = $window.innerHeight - 34 - 1;

      $scope.team = [
        { name:"John", title:"", quote:{title: 'Accountant', checked: false},
          desc:"" },
        { name:"Meldy", title:"", quote:{title: 'Marketing', checked: false},
          desc:"" },
        { name:"Mark Anthony Serrano", title:"", quote:{title: 'Lead Developer', checked: false},
          desc:"" },
        { name:"Future", title:"", quote:{title: 'Human Resources', checked: false},
          desc:"" },
        { name:"Future", title:"", quote:{title: 'Verification  Operator', checked: false},
          desc:"" },
      ];



    }
  ])
;

