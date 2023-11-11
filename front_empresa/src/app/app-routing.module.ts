import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { MisvisComponent } from './paginas/misvis/misvis.component';
import { ComoComprarComponent } from './paginas/como-comprar/como-comprar.component';
import { ComoVendoComponent } from './paginas/como-vendo/como-vendo.component';
import { PreguntasFrecuentesComponent } from './paginas/preguntas-frecuentes/preguntas-frecuentes.component';
import { PoliticaDeDevolucionesComponent } from './paginas/politica-de-devoluciones/politica-de-devoluciones.component';
import { TerminosYCondicionesComponent } from './paginas/terminos-y-condiciones/terminos-y-condiciones.component';
import { QuienesSomosComponent } from './paginas/quienes-somos/quienes-somos.component';
import { MiBalanceComponent } from './paginas/mi-balance/mi-balance.component';
import { FantasiaLibrosComponent } from './paginas/fantasia-libros/fantasia-libros.component';
import { HispanoamericanosLibrosComponent } from './paginas/hispanoamericanos-libros/hispanoamericanos-libros.component';
import { RomanceLibrosComponent } from './paginas/romance-libros/romance-libros.component';
import { ClasicosLibrosComponent } from './paginas/clasicos-libros/clasicos-libros.component';
import { AventurasComicsComponent } from './paginas/aventuras-comics/aventuras-comics.component';
import { ComediasComicComponent } from './paginas/comedias-comic/comedias-comic.component';
import { RomanceComicComponent } from './paginas/romance-comic/romance-comic.component';
import { BelicaComicComponent } from './paginas/belica-comic/belica-comic.component';
import { KodomoComponent } from './paginas/kodomo/kodomo.component';
import { ShonenComponent } from './paginas/shonen/shonen.component';
import { ShojoComponent } from './paginas/shojo/shojo.component';
import { SeinenComponent } from './paginas/seinen/seinen.component';
import { RegistroComponent } from './paginas/registro/registro.component';

const routes: Routes = [

 {path:'login',component:LoginComponent},
 {path:'inicio',component:InicioComponent},
 {path:'quienes-somos',component:QuienesSomosComponent},
 {path:'contacto',component:ContactoComponent},
 {path:'misvis',component:MisvisComponent},
 {path:'como-comprar',component:ComoComprarComponent},
 {path:'como-vendo',component:ComoVendoComponent},
 {path:'preguntas-frecuentes',component:PreguntasFrecuentesComponent},
 {path:'politica-de-devoluciones',component:PoliticaDeDevolucionesComponent},
 {path:'terminos-y-condiciones',component:TerminosYCondicionesComponent},
 {path:'mi-balance',component:MiBalanceComponent},
 {path:'fantasia-libros',component:FantasiaLibrosComponent},
 {path:'hispanoamericanos-libros',component:HispanoamericanosLibrosComponent},
 {path:'romance-libros',component:RomanceLibrosComponent},
 {path:'clasicos-libros',component:ClasicosLibrosComponent},
 {path:'aventura-comics',component:AventurasComicsComponent},
 {path:'comedia-comics',component:ComediasComicComponent},
 {path:'romance-comics',component:RomanceComicComponent},
 {path:'belica-comics',component:BelicaComicComponent},
 {path:'kodomo',component:KodomoComponent},
 {path:'shonen',component:ShonenComponent},
 {path:'shojo',component:ShojoComponent},
 {path:'seinen',component:SeinenComponent},
 {path:'registro',component:RegistroComponent},

 { path: '', redirectTo: 'inicio', pathMatch: 'full' },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
