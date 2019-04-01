import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CarsPageComponent} from "./cars-page/cars-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {AboutCarComponent} from "./about-car/about-car.component";

const appRoutes: Routes =[

    {path: 'cars', component: CarsPageComponent, children: [
            {path: 'cars/:id/:name', component: AboutCarComponent }
        ] },
    {path: '', component: HomePageComponent }
]

@NgModule({

    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}