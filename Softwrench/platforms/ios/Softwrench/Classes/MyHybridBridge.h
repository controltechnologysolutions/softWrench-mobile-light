//
//  MyHybridBridge.h
// 
//
//

#import <Cordova/CDV.h>

@interface MyHybridBridge : CDVPlugin

-(void)reportEvent:(NSDictionary*)eventData;

@end