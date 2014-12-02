var NativeEventsListener = (function() {
                            
                            this.onReceivedEvent = function(eventData) {
                            
                            
                            var eventHandler = function(){};
                            
                            switch (eventData.eventType){
                            case "navBarLeftButtonClicked":
                            eventHandler = processNavBarLeftButtonClicked;
                            break;
                            default:
                            
                            }
                            eventHandler(eventData);
                            };
                            
                            function processNavBarLeftButtonClicked(eventData){
                            
                            $.mobile.changePage("#page1", {
                                                reverse: true
                                                });
                            
                            }
                            
                            return this;
                            }());