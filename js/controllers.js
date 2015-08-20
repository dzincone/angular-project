

app.controller("mainPage", function($scope){
  $scope.postStatus = false,
  $scope.newPost = function(){
    if($scope.postStatus === false){
      $scope.postStatus = true
    } else {
      $scope.postStatus = false
    }
  },
  $scope.allComments = [],
  $scope.submitForm = function(){
    $scope.allComments.push({title: $scope.title, image: $scope.image, author: $scope.author, comment: $scope.comment,
    date: new Date, subComments: []})
    $scope.postStatus = false
    $scope.title = null
    $scope.author = null
    $scope.image = null
    $scope.comment = null
  }
})

app.controller("subComments", function($scope){
    $scope.subComments = [],
    $scope.subCommentStatus = false,
    $scope.showAddComment = function(){
      if($scope.subCommentStatus === false){
        $scope.subCommentStatus = true
      } else {
        $scope.subCommentStatus = false
      }
    },
    $scope.addComment = function(){
      $scope.subComments.push({name: $scope.subAuthor, text: $scope.subText});
      $scope.subCommentStatus = false;
      $scope.subAuthor = null
      $scope.subText = null
    },
    $scope.commentStatus = false,
    $scope.showSubComments = function(){
      if($scope.commentStatus === false){
        $scope.commentStatus = true
      } else {
        $scope.commentStatus = false
      }
    }
})

app.controller("smallComments", function($scope){
  $scope.voteCount = 0,
  $scope.upvote = function(){
    $scope.voteCount ++
  },
  $scope.downvote = function(){
    $scope.voteCount --
  }
})
