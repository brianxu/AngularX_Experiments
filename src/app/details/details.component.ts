import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../core/details.service';

interface WikiResult  {
  query: {
    pages: any
  }
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private detailsService: DetailsService ) { }
  public data: any;
  ngOnInit() {
    this.detailsService.getDetails().subscribe((result: WikiResult)=>{
      
      this.data = Object.values(result.query.pages);
    });
  }

}
