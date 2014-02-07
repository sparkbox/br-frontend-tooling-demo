window.TOOLLIST =

  toggleCheckListDropdown: ->
    $(".js-toggle-list-dropdown").click ->
      this.next(".js-list-dropdown").toggleClass("js-list-dropdown--is-open");

  init: ->
    TOOLLIST.toggleCheckListDropdown()

INIT.register TOOLLIST