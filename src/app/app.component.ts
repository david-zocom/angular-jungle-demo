import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title: string = 'The jungle';
	animals: string[] = ['humans', 'fesk', 'jettemoa'];
	friendAnimal: string = 'zebra';

	onMakeFriendsClick() {
		console.log('You made a new friend!');
	}
}
