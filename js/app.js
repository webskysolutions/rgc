// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/social/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/about.html"
        }
      }
    })

     .state('app.administration', {
      url: "/administration",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/administration.html"
        }
      }
    })
      .state('app.exams-results', {
      url: "/exams-results",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/exams-results.html"
        }
      }
    })
    .state('app.mainoffice-contacts', {
      url: "/mainoffice-contacts",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/mainoffice-contacts.html"
        }
      }
    })
    .state('app.news-epaper', {
      url: "/news-epaper",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/news-epaper.html"
        }
      }
    })
    .state('app.student-portal', {
      url: "/student-portal",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/student-portal.html"
        }
      }
    })


    .state('app.start', {
      url: "/start",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/start-fullscreen.html"
        }
      }
    })

    .state('app.fgrid', {
      url: "/fgrid",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/friend-grid.html"
        }
      }
    })

    .state('app.flist', {
      url: "/flist",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/friends.html"
        }
      }
    })

    .state('app.newpost', {
      url: "/newpost",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/new-post.html"
        }
      }
    })

    .state('app.email', {
      url: "/email",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/send-email.html"
        }
      }
    })    

    .state('app.profile', {
      url: "/profile",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/profile.html",
        }
      }
    })

    .state('app.timeline', {
      url: "/timeline",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/timeline.html",
        }
      }
    })

    .state('app.editprofile', {
      url: "/editprofile",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/profile-edit.html",
        }
      }
    })

    .state('app.profiletwo', {
      url: "/profiletwo",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/profile2.html",
        }
      }
    })

    .state('app.profilethree', {
      url: "/profilethree",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/profile3.html",
        }
      }
    })

    .state('app.news', {
      url: "/news",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/news.html",
        }
      }
    })

    .state('app.viewpost', {
      url: "/viewpost",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/view-post.html",
        }
      }
    })

    .state('app.viewposttwo', {
      url: "/viewposttwo",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/view-post-2.html",
        }
      }
    })

    .state('app.invite', {
      url: "/invite",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/social-invite-friend.html",
        }
      }
    })

    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/start');
});

