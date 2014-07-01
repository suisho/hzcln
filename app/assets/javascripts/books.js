var PageView = Backbone.Marionette.ItemView.extend({
  collectionView : BookView
})
var BookView = Backbone.Marionette.CollectionView.extend({
  el : ".book",
  childView : PageView,
})


Backbone.EachView = function(viewClass, selector){
  return $(selector).map(function(){
    return new viewClass({
      el : $(this)
    })
  })
}

$(function(){
  console.log("bp")

  var BookApplication = new Backbone.Marionette.Application()
  BookApplication.addRegions({
    container: "#container"
  })
  BookApplication.addInitializer(function(){
    var bookView = BookApplication.bookView = new BookView()
    console.log(Backbone.EachView(PageView, ".page"))

    $(".page").each(function(){
      var pageView = new PageView({
        el : $(this)
      })
      bookView.children.add(pageView)
    })

  })
  BookApplication.start()
})
  
