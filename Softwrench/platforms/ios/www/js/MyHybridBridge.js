var MyHybridBridge = (function() {
                      var PLUGIN_NAME 						= "MyHybridBridge";
                      var ACTION_BIND_LISTENER 				= "ACTION_BIND_LISTENER";
                      var ACTION_SET_NAVBAR_TITLE 			= "ACTION_SET_NAVBAR_TITLE";
                      var ACTION_UPDATE_NAVBAR_LEFT_BUTTON 	= "ACTION_UPDATE_NAVBAR_LEFT_BUTTON";
                      
                     
                      
                      this.bindListener = function(listener) {
                     
                      alert("jhdfv kdv");
                      cordova.exec(listener, listener, PLUGIN_NAME, ACTION_BIND_LISTENER,	[]);
                      };
                      
                      this.setNavBarTitle = function (title)	{
                                           cordova.exec(null, null, PLUGIN_NAME, ACTION_SET_NAVBAR_TITLE, [title]);
                      };
                      
                      this.updateNavBarLeftButton = function(title) {
                                           cordova.exec(null, null, PLUGIN_NAME, ACTION_UPDATE_NAVBAR_LEFT_BUTTON, [title]);
                      };
                      
                      return this;
                      }());