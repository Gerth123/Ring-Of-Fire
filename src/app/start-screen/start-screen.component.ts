import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'] 
})
export class StartScreenComponent {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  newGame() {
    // Start game
    this.router.navigateByUrl('/game');
  }
}

