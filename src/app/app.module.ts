import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera'
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';





 

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { ReportPage } from '../pages/report/report';

import { CameraPage } from '../pages/camera/camera';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps} from '@ionic-native/google-maps';
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'rafaelcarrillo09@gmail.com'
  }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    GalleryPage,
    ReportPage,
    
    CameraPage
  ],
  imports: [
     IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    BrowserModule,
      IonicStorageModule.forRoot()
    
    
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    GalleryPage,
 ReportPage,
    CameraPage
  ],
  providers: [
    Geolocation,
    Camera,
    StatusBar,
    IonicStorageModule,
    Storage,
    SplashScreen,
    GoogleMaps,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
