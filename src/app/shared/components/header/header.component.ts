import { Component, OnInit, AfterViewInit , Inject, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = true;

  items = [
    { title: 'Productos', url: '/ecommerce/products' },
    { title: 'Carrito de compra', url: '/ecommerce/shopping-cart' },
    { title: 'Validacion de compra', url: '/ecommerce/checkout' },
    { title: 'Ver mascotas', url: '/pages/blog' },
    { title: 'Generar cita', url: '/forms/form-elements' },
    { title: 'Mapa del sitio', url: '/pages/mapa-sitio' },
    { title: '', url: '/dashboard' },
  ];

  searchTerm: string;

  showResults = false;

  results: { title: string, url: string }[] = [];

  search() {
     this.results = this.items.filter((item) =>
      item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log(this.results); // muestra los elementos filtrados en la consola
    this.showResults = this.searchTerm.length > 0 && this.results.length > 0;
  }
  
  constructor(
    private layoutService: LayoutService,
    public navServices: NavService,
  ) {}
  
  ngOnInit(): void {
  }
  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }

  toggleSidebar(){
    if ((this.navServices.collapseSidebar = !this.navServices.collapseSidebar)) {
      document.querySelector('.app')?.classList.add('sidenav-toggled');
    }
    else {
      document.querySelector('.app')?.classList.remove('sidenav-toggled');
    }
  }

  toggleMobileSidebar(){
    if ((this.navServices.collapseSidebar = !this.navServices.collapseSidebar)) {
      document.querySelector('.sidebar-right')?.classList.add('sidebar-open');
    }
    else {
      document.querySelector('.sidebar-right')?.classList.remove('sidebar-open');
    }
  }

  darkmodeToggle(){
    let body:any = document.querySelector('body');

    if(body != !body){
      body.classList.toggle('dark-mode')
    }
  }
}
