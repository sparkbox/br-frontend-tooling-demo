window.TOOLLIST =

  toggleCheckListDropdown: ->
    @$toolListTrigger.click ->
      $toolListNote = $(this).parents(@$parentContainer).children(".js-list-dropdown")

      if $toolListNote.is(":hidden")
        $(this).addClass "tool-list_is-open"
        $toolListNote.slideDown "fast"
      else
        $(this).removeClass "tool-list_is-open"
        $toolListNote.slideUp "fast"

  init: ->
    @$toolListTrigger = $(".js-trigger-tool-list")
    @$parentContainer = $(".tool-list-item")
    
    TOOLLIST.toggleCheckListDropdown()

INIT.register TOOLLIST