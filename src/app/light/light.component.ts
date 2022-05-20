import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent {
  @Input() isLightOn!: boolean;

  titleOn = "On";
  imageOnUrl = "assets/lighton.jpg";
  titleOff = "Off";
  imageOffUrl = "assets/lightoff.jpg";
  header = "The Light!"
}
