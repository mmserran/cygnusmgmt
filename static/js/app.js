'use strict';

/* Declare angular module */
var CygnusApp = angular.module('CygnusApp', ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);

/* directive to set height of navbar because when it is 'affix-d', the element is removed */
CygnusApp
  .directive('resize', function () {
    return {
      restrict: "C",
      link: function (scope, element, attrs) {
        console.log('test');
        element[0].style.height = '35px';
      }
    }
  })
;


function slideShowController($scope, $timeout) {
 var slidesInSlideshow = 4;
 var slidesTimeIntervalInMs = 3000; 
  
  $scope.slideshow = 1;
  var slideTimer =
    $timeout(function interval() {
      $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
      slideTimer = $timeout(interval, slidesTimeIntervalInMs);
    }, slidesTimeIntervalInMs);
}

/* Cygnus website main controller */
CygnusApp
  .controller('CygnusCtrl', ['$scope', '$window', '$timeout', function ($scope, $window, $timeout) {

    $scope.aside = {
      "title": "Title",
      "content": "Hello Aside<br />This is a multiline message!"
    };
    $scope.tooltip = {title: 'Hello Tooltip<br />This is a multiline message!', checked: false};

    $scope.founders = [
      { name:"Alex Sincioco", title:"CEO", quote:{title: 'Hello Tooltip<br />This is a multiline message!', checked: false},
        desc:"Holds a Bachelors degree in Accounting. Alex has an extensive accounting background spanning 20 years working in both privately held and publicly traded companies. As a previous business owner, he understands how challenging it is to handle day-to-day operations. Alex helps businesses in all stages of growth."},
      { name:"Wenli Huang", title:"CFO", quote:{title: 'Hello Tooltip<br />This is an example quote for Wenli', checked: false},
        desc:"A Certified Public Accountant that recently joined Cygnus. Wenli is experienced in business and individual income tax preparation and payroll tax preparation. She has earned a Bachelor of Science in Business Administration with a concentration in Finance from Santa Clara University." },
      { name:"Jerry Pamorada", title:"Product Development", quote:{title: 'Hello Tooltip<br />This is an example quote for Jerry', checked: false},
        desc:"A mechanical engineer by trade. Jerry earned his engineering degree at Don Bosco University, Philippines. He has 18 years of sales and marketing experience." },

    ]
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

    ]

  }])
;

