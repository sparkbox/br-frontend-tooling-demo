(function() {
  window.INIT = {
    modules: [],
    register: function(module) {
      return this.modules.push(module);
    },
    start: function() {
      var module, _i, _len, _ref, _results;
      _ref = this.modules;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        module = _ref[_i];
        _results.push(module.init.call(module));
      }
      return _results;
    }
  };

}).call(this);

(function() {
  window.TOOLLIST = {
    toggleCheckListDropdown: function() {
      return this.$toolListTrigger.click(function() {
        var $toolListNote;
        $toolListNote = $(this).parents(this.$parentContainer).children(".js-list-dropdown");
        if ($toolListNote.is(":hidden")) {
          $(this).addClass("tool-list_is-open");
          return $toolListNote.slideDown("fast");
        } else {
          $(this).removeClass("tool-list_is-open");
          return $toolListNote.slideUp("fast");
        }
      });
    },
    init: function() {
      this.$toolListTrigger = $(".js-trigger-tool-list");
      this.$parentContainer = $(".tool-list-item");
      return TOOLLIST.toggleCheckListDropdown();
    }
  };

  INIT.register(TOOLLIST);

}).call(this);

(function() {
  window.GRAVATAR = {
    md5Email: function() {
      var avatarUrl, genericImg, hash, imgSize;
      hash = md5(window.emailHash['email']);
      imgSize = 100;
      genericImg = "mm";
      avatarUrl = "http://www.gravatar.com/avatar/" + hash + "?s=" + imgSize + "&d=" + genericImg;
      $(".js-gravatar-hash").remove();
      return $(".profile-avatar").attr("src", avatarUrl);
    },
    init: function() {
      return GRAVATAR.md5Email();
    }
  };

  INIT.register(GRAVATAR);

}).call(this);

(function() {
  window.APP = {
    common: {
      init: function() {
        return INIT.start();
      }
    }
  };

  $(function() {
    return APP.common.init();
  });

}).call(this);
