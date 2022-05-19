import { Component, Renderer2 } from '@angular/core';
import { DataService } from './shared/services/data-service/data.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'History', url: '/history', icon: 'time' }
  ]

  public isDarkTheme: boolean = false

  constructor(
    private renderer: Renderer2,
    private dataSerivce: DataService
  ) {}

  ngOnInit() {
    this.getDeviceConfig()
  }

  getDeviceConfig() {
    this.dataSerivce.getDeviceConfig().then(r => {

      if(r) {
        this.isDarkTheme = r.isDarkTheme
      }

    })
  }

  onToggleColorTheme(event) {

    const result = event?.detail?.checked

    this.renderer.setAttribute(document.body, 'color-theme', result ? 'dark' : 'light' )

    if(result !== this.isDarkTheme) {
      this.dataSerivce.setDeviceConfig({isDarkTheme: result})
      this.getDeviceConfig()
    }

  }
}
