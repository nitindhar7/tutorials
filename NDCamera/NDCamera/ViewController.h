//
//  ViewController.h
//  NDCamera
//
//  Created by Nitin Dhar on 4/6/17.
//  Copyright © 2017 nitindhar. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <AVFoundation/AVFoundation.h>

@interface ViewController : UIViewController {
    IBOutlet UIView *frameForCapture;
    IBOutlet UIImageView *imageView;
}

- (IBAction)takePhoto:(id)sender;

@end

