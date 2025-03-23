import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface CardapioItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.scss'
})
export class CardapioComponent {

  menuItems = [
    { name: 'Alcatra', description: 'Alcatra grelhada no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 150.00, image: '/alcatra.jpg' },
    { name: 'Maminha', description: 'Maminha grelhada no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 130.00, image: '/maminha.jpg' },
    { name: 'Cupim', description: 'Cupim grelhado no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 135.00, image: '/cupim.jpg' },
    { name: 'Fritas', description: 'Cupim grelhado no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 105.00, image: '/fritas.jpg' },
    { name: 'Bife Ancho', description: 'Bife Ancho grelhado no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 155.00, image: '/bifeancho.jpg' },
    { name: 'Picanha Suína', description: 'Picanha Suína grelhada no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 165.00, image: '/picanhasuina.jpg' },
    { name: 'Costeleta de Cordeiro', description: 'Costeleta de Cordeiro assada no ponto ideal. Acompanha farofa, vinagrete e molho de hortelã.', price: 170.00, image: '/costeletacordeiro.jpg' },
    { name: 'Costeleta de Porco', description: 'Costeleta de Porco assada no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 120.00, image: '/costeletaporco.jpg' },
    { name: 'Linguiça', description: 'Linguiça assada no ponto ideal. Acompanha farofa, vinagrete e molho de hortelã.', price: 100.00, image: '/linguiça.jpg' },
    { name: 'Filé Mignon', description: 'Filé Mignon grelhado no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 120.00, image: '/filemignon.jpg' },
    { name: 'Rib', description: 'Rib assada no ponto ideal. Acompanha farofa, vinagrete e molho barbecue.', price: 100.00, image: '/rib.jpg' },
    { name: 'Farofa', description: 'Filé Mignon grelhado no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 90.00, image: '/farofa.jpg' },
    { name: 'Contra Filé', description: 'Contra Filé grelhado no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 120.00, image: '/contrafile.jpg' },
    { name: 'Arroz Carreteiro', description: 'Filé Mignon grelhado no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 110.00, image: '/arrozcarreteiro.jpg' },
    { name: 'Mandioca Frita', description: 'Filé Mignon grelhado no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 85.00, image: '/mandioca.jpg' },
    { name: 'T-Bone', description: 'T-Bone grelhado no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 170.00, image: '/tbone.jpg' },
    { name: 'Fraldinha', description: 'Fraldinha grelhada no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 155.00, image: '/fraldinha.jpg' },
    { name: 'Pão de Queijo', description: 'Filé Mignon grelhado no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 130.00, image: '/paodequeijo.jpg' },
    { name: 'Pão de Alho', description: 'Salsicha grelhada no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 70.00, image: '/paodealho.jpg' },
    { name: 'Salsicha', description: 'Salsicha grelhada no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 85.00, image: '/salsicha.jpg' },
    { name: 'Acém', description: 'Acém grelhado no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 125.00, image: '/acem.jpg' },
    { name: 'Paleta de Cordeiro', description: 'Paleta de Cordeiro assada no ponto ideal. Acompanha farofa, vinagrete e molho de hortelã.', price: 200.00, image: '/paletacordeiro.jpg' },
    { name: 'Feijoada', description: 'Filé Mignon grelhado no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 140.00, image: '/feijoada.jpg' },
    { name: 'Pastel', description: 'Filé Mignon grelhado no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 145.00, image: '/pastel.jpg' },
    { name: 'Vinagrete', description: 'Filé Mignon grelhado no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 60.00, image: '/vinagrete.jpg' },
    { name: 'Frango Grelhado', description: 'Frango grelhado no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 125.00, image: '/frango.jpg' },
    { name: 'Salmão', description: 'Salmão assado no ponto ideal. Acompanha farofa, vinagrete e molho da casa.', price: 155.00, image: '/salmao.jpg' },
  ];

  cart: CardapioItem[] = [];
  isModalOpen = false;
  address = '';
  showAddressWarning = false;

  get total(): number {
    return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  addToCart(name: string, price: number) {
    const existingItem = this.cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ name, price, quantity: 1 });
    }
  }

  removeItemCart(name: string) {
    const index = this.cart.findIndex(item => item.name === name);
    if (index !== -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
      } else {
        this.cart.splice(index, 1);
      }
    }
  }

  checkout() {
    if (this.cart.length === 0) return;

    if (!this.address.trim()) {
      this.showAddressWarning = true;
      return;
    }

    const cartItems = this.cart.map(item => `${item.name} Quantidade: (${item.quantity}) Preço: R$${item.price}`).join(' | ');
    const phone = '5511996221043';
    const message = encodeURIComponent(cartItems + ` Endereço: ${this.address}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');

    this.cart = [];
    this.address = '';
    this.showAddressWarning = false;
  }
}
