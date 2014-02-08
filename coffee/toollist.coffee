window.TOOLLIST =

  toggleCheckListDropdown: ->
    @$toolListTrigger.click ->
      $toolListNote = $(this).children(".js-list-dropdown")

      if $toolListNote.is(":hidden")
        $toolListNote.slideDown "fast"
      else
        $toolListNote.slideUp "fast"

  init: ->
    @$toolListTrigger = $(".js-toggle-list-dropdown")
    
    TOOLLIST.toggleCheckListDropdown()

INIT.register TOOLLIST