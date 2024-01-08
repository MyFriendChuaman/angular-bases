import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'inonman';
  public age:  number = 45;

  changeHero():void{
    this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 25;
  }

  get capitalizadName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  resetForm(): void {
    this.name = 'inonman';
    this.age = 45;
  }

}
