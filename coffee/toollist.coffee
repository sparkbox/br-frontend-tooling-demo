window.TOOLLIST =

  toggleCheckListDropdown: ->
    @$toolListTrigger.click ->
      $(this).children(".js-list-dropdown").toggleClass("js-list-dropdown--is-open");

  init: ->
    @$toolListTrigger = $(".js-toggle-list-dropdown")
    
    TOOLLIST.toggleCheckListDropdown()

INIT.register TOOLLIST