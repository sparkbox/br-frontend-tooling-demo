window.GRAVATAR =
  
  md5Email: ->
    hash = md5 window.emailHash['email']
    imgSize = 100
    genericImg = "mm"
    avatarUrl = "http://www.gravatar.com/avatar/#{hash}?s=#{imgSize}&d=#{genericImg}"
    
    $(".js-gravatar-hash").remove()
    $(".profile-avatar").attr "src", avatarUrl

  init: ->
    GRAVATAR.md5Email()

INIT.register GRAVATAR
