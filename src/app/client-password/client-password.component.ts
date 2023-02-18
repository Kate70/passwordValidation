import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-client-password',
  templateUrl: './client-password.component.html',
  styleUrls: ['./client-password.component.css']
})

  export class ClientPasswordComponent implements OnChanges {
    bar0: string;
    bar2: string;
    bar3: string;
  
    @Input() public passwordToCheck: string;
  
    @Output() passwordStrength = new EventEmitter<boolean>();
  
    private colors = ['darkred', '#B40A1B', '#EAE114', '#35D073'];
  
    
  
    checkStrength(password: string) {
      
      let force = 0;  
      const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
      const letters = /[a-z]+/.test(password);
      const numbers = /[0-9]+/.test(password);
      const symbols = regex.test(password);
     
      const variants = [letters, numbers, symbols];
      
      let passed = 0;
      for (const item of variants) {
        passed += item === true ? 1 : 0;
      }
      force += 2 * password.length + (password.length >= 10 ? 1 : 0);
      force += passed * 10;
  
    
      force = password.length <= 6 ? Math.min(force, 10) : force;
  
      
      force = passed === 1 ? Math.min(force, 10) : force;
      force = passed === 2 ? Math.min(force, 30) : force;   
      force = passed === 3 ? Math.min(force, 40) : force;
  
      return force;
    }
  
    ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
      const password = changes['passwordToCheck'].currentValue;
  
      this.setColors(4, '#E6E7E8');
      if (password.length < 8){
        this.setColors(4, '#B40A1B');
      }
  
     else if (password) {
      
        const pwdStrength = this.checkStrength(password);   
        
        const color = this.getColor(pwdStrength);
        this.setColors(color.index, color.color);
       
      } 
    }
  
    private getColor(strength: number) {
      let index = 0;
  
      if (strength === 10) {
        index = 0;
      } else if (strength === 20) {
        index = 1;
      } else if (strength === 30) {
        index = 2;
      } else if (strength === 40) {
        index = 3;
      } else {
        index = 4;
      }   
      return {
        index: index + 1,
        color: this.colors[index],
      };
    }
  
    private setColors(count: number, color: string) {
      for (let n = 0; n < count; n++) {
        (this as any)['bar' + n] = color;
      }
    }
  }

