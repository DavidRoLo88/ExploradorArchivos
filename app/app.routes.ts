import { Routes } from '@angular/router';

export const routes: Routes = [

{
    path : '',
    loadComponent : () => import('./explorador/pantallas/ventana-maestra/ventana-maestra'),
    children : [

        {
            path : 'principal',
            loadComponent : () => import('./explorador/componentes/vista-principal/vista-principal'),
        },
        {
            path : 'mis-documentos',
            loadComponent : () => import('./explorador/componentes/ventana-documentos/ventana-documentos'),
            //component : VentanaDocumentos
        },
        
        {
            path : 'mis-imagenes',
            loadComponent : () => import('./explorador/componentes/ventana-documentos/ventana-documentos'),
        },

    ]
},

{
    path : '**',
    redirectTo : '',
}

];
