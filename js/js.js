$(function(){
  
    // 點擊按鈕，選單縮放
    $("div.hamburg").on("click", function(){
      $("nav>div").slideToggle();
    });
    
  });

  $(function(){

    // 點擊
    $(".icon>img").on("click", function(){
      
      // -open 的樣式切換
      $(this).closest("div.user1").slideToggle();
      
    });
  
  });
  
  