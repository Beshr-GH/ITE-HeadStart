import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProListComponent } from './pro-list/pro-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SignComponent } from './sign/sign.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DirectoryComponent } from './directory/directory.component';
import { HttpModule } from '@angular/http';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProListComponent,
    NavBarComponent,
    ProjectDetailsComponent,
    SignComponent,
    AboutUsComponent,
    DirectoryComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
       { path : '',
      component : HomeComponent
    } ,
    { path : 'home',
      component : HomeComponent
    } ,
      { path : 'det',
      component : DetailsComponent

    }
    ,
     { path : 'pro list',
      component : DetailsComponent

    },
     { path : 'pro details',
      component : ProjectDetailsComponent

    },
     { path : 'pro list/:test',
      component : ProListComponent

    },
    { path : 'pro list/:img/:name',
    component : ProListComponent

  }

    ,
     { path : 'pro list/:img/:name/pro details/:name2',
      component : ProjectDetailsComponent

    },
    { path : 'pro list/pro details',
    component : ProjectDetailsComponent

  },
    { path : 'pro list/pro details/pro details',
      component : ProjectDetailsComponent

    },
     { path : 'Enroll',
      component : SignComponent

    },
     { path : 'about us',
      component : AboutUsComponent

    }
    ]

  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
