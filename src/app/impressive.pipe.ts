import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impressive'
})
export class ImpressivePipe implements PipeTransform {

  impressiveWords: string[] = ['Breathtaking', 'Amazing', 'Stunning', 'Astounding', 'Astonishing', 'Awe-inspiring', 'Stupendous', 'Staggering', 'Extraordinary', 'Incredible', 'Unbelievable'];

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${[this.getRandomWord()]} ${value}`;
  }

  private getRandomWord(): string {
    const randomIndex: number = Math.floor(Math.random() * this.impressiveWords.length);
    return this.impressiveWords[randomIndex];
  }

}

