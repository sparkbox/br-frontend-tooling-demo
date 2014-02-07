window.INIT =
  modules: []

  register: (module) ->
    @modules.push module

  start: ->
    module.init.call(module) for module in @modules