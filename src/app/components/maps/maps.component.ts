import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  private map: google.maps.Map | undefined

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyCj3IdSNxrSuVk6A-OE_1u6N0FBr8aRJNI'
    })

    loader.load().then(() => {
      console.log('loaded gmaps')

      const location = { lat: -12.053539, lng: -77.085491 }

      this.map = new google.maps.Map(document.getElementById("map")!, {
        center: location,
        zoom: 17,
        
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    })
  }
}
