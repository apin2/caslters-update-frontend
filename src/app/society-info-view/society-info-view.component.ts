import { Component } from '@angular/core';

@Component({
  selector: 'app-society-info-view',
  templateUrl: './society-info-view.component.html',
  styleUrls: ['./society-info-view.component.scss']
})
export class SocietyInfoViewComponent {
  layer:any="";
  layerNew:any="";
  layer_compliance:any="";

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'pie';
  public barChartLegend = true;
  public barChartData = [
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  clickelayer1(layer:any){
    if(this.layer==layer){
      this.layer='';
    }else{
    this.layer=layer;
    }
  }

  click_layer(layer_compliance:any){
    this.layer_compliance=layer_compliance;
  }

  clicklayer1(layerNew:any){
    this.layerNew=layerNew;
  }

}
