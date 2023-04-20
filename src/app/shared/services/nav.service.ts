import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

//Menu Bar
export interface Menu {
    headTitle?: string,
    path?: string;
    title?: string;
    icon?: string;
    type?: string;
    badgeType?: string;
    badgeValue?: string;
    badgeClass?: string;
    active?: boolean;
    bookmark?: boolean;
    children?: Menu[];
}

@Injectable({
    providedIn: 'root'
})

export class NavService implements OnDestroy {

    private unsubscriber: Subject<any> = new Subject();
    public screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

    public megaMenu: boolean = false;
    public megaMenuCollapse: boolean = window.innerWidth < 1199 ? true : false;
    public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
    public fullScreen: boolean = false;
    constructor(
        private router: Router
    ) {
        this.setScreenWidth(window.innerWidth);
        fromEvent(window, 'resize').pipe(
            debounceTime(1000),
            takeUntil(this.unsubscriber)
        ).subscribe((evt: any) => {
            this.setScreenWidth(evt.target.innerWidth);
            if (evt.target.innerWidth < 991) {
                this.collapseSidebar = false;
                this.megaMenu = false;
            }
            if (evt.target.innerWidth < 1199) {
                this.megaMenuCollapse = true;
            }
        });
        if (window.innerWidth < 991) {
            this.router.events.subscribe(event => {
                this.collapseSidebar = false;
                this.megaMenu = false;
            });
        }
    }


    ngOnDestroy() {
        this.unsubscriber.next();
        this.unsubscriber.complete();
    }

    private setScreenWidth(width: number): void {
        this.screenWidth.next(width);
    }

    MENUITEMS: Menu[] = [
        { headTitle: 'Principal' },
        {
            path: '/dashboard', title: 'Veterinaria Amor Animal', type: 'link', icon: 'home', badgeType: 'danger', badgeValue: 'Hot', active: false
        },


        { headTitle: 'Tienda Mascotas' },
        {
            title: 'Productos', icon: 'shopping-cart', type: 'sub', badgeType: 'danger', badgeValue: '3', active: false,
            children: [
                { path: '/ecommerce/products', title: 'Productos', type: 'link' },
                { path: '/ecommerce/shopping-cart', title: 'Carrito de Compra', type: 'link' },
                { path: '/ecommerce/checkout', title: 'Validacion Compra', type: 'link' },
            ]
        },


        { headTitle: 'Adopta una mascota' },
        {

                // { path: '/pages/profile', title: 'Profile', type: 'link' },
                path: '/pages/blog', title: 'Ver mascotas', type: 'link', icon: 'heart'


        },




    { headTitle: 'Citas' },
        {
            path: '/forms/form-elements', title: 'Generar Cita', type: 'link', icon: 'book'
        },

        { headTitle: 'Mapa del Sitio' },
        {

                // { path: '/pages/profile', title: 'Profile', type: 'link' },
                path: '/pages/mapa-sitio', title: 'Mapa del Sitio', type: 'link', icon: 'map'


        },
        { headTitle: 'ERROR PAGES' },
        {
            title: 'Error Pages', icon: 'info', type: 'sub', active: false,
            children: [
                { path: '/error/error400', title: '400', type: 'link' },
                { path: '/error/error401', title: '401', type: 'link' },
                { path: '/error/error403', title: '403', type: 'link' },
                { path: '/error/error404', title: '404', type: 'link' },
                { path: '/error/error500', title: '500', type: 'link' },
                { path: '/error/error503', title: '503', type: 'link' },
            ]
        }
    ];

    //array
    items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
