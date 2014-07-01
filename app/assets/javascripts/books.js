(function($){
  $(function(){
    var PageView = Backbone.Marionette.ItemView.extend({
      collectionView : BookView
    })


    var BookView = Backbone.Marionette.CollectionView.extend({
      el : ".book",
      childView : PageView,
      initialize : function(){
        var self = this
        this.$(".page").each(function(){
          var pageView = new PageView({
            el : $(this)
          })
          self.children.add(pageView)
        })
      }
    })

    var BookApplication = new Backbone.Marionette.Application()
    BookApplication.addRegions({
      container: "#container"
    })
    BookApplication.start()
    var bookView = new BookView()
    console.log(bookView.children)
  })
})(jQuery)
