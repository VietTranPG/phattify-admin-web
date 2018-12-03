import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';
import * as moment from 'moment';
declare const AmCharts: any;
import './../../../assets/charts/amchart/amcharts.js';
import './../../../assets/charts/amchart/gauge.js';
import './../../../assets/charts/amchart/pie.js';
import './../../../assets/charts/amchart/serial.js';
import './../../../assets/charts/amchart/light.js';
import './../../../assets/charts/amchart/ammap.js';
import './../../../assets/charts/amchart/usaLow.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public summmury = {
    Android: 0,
    AndroidInMonth: 0,
    Ios: 0,
    IosInMonth: 0,
    Mentee: 0,
    MenteeInMonth: 0,
    Mentor: 0,
    MentorInMonth: 0,
    TotalUser: 0,
    TotalUserInMonth: 0,
  };
  constructor(private _api: ApiService) {
    this.getSummury();
  }
  ngOnInit() {

    setTimeout(() => {
      AmCharts.makeChart('product-sales-chart', {
        'type': 'serial',
        'theme': 'light',
        'dataDateFormat': 'YYYY-MM-DD',
        'precision': 2,
        'valueAxes': [{
          'id': 'v1',
          'title': 'Sales',
          'position': 'left',
          'autoGridCount': false,
          'labelFunction': function (value) {
            return '$' + Math.round(value) + 'M';
          }
        }, {
          'id': 'v2',
          'gridAlpha': 0.1,
          'autoGridCount': false
        }],
        'graphs': [{
          'id': 'g1',
          'valueAxis': 'v2',
          'lineThickness': 0,
          'fillAlphas': 0.9,
          'lineColor': '#448aff',
          'type': 'smoothedLine',
          'title': 'Laptop',
          'useLineColorForBulletBorder': true,
          'valueField': 'market1',
          'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
        }, {
          'id': 'g2',
          'valueAxis': 'v2',
          'fillAlphas': 0.9,
          'bulletColor': '#ff5252',
          'lineThickness': 0,
          'lineColor': '#ff5252',
          'type': 'smoothedLine',
          'title': 'TV',
          'useLineColorForBulletBorder': true,
          'valueField': 'market2',
          'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
        }, {
          'id': 'g3',
          'valueAxis': 'v2',
          'fillAlphas': 0.9,
          'bulletColor': '#9ccc65',
          'lineThickness': 0,
          'lineColor': '#9ccc65',
          'type': 'smoothedLine',
          'title': 'Mobile',
          'useLineColorForBulletBorder': true,
          'valueField': 'sales1',
          'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
        }],
        'chartCursor': {
          'pan': true,
          'valueLineEnabled': true,
          'valueLineBalloonEnabled': true,
          'cursorAlpha': 0,
          'valueLineAlpha': 0.2
        },
        'categoryField': 'date',
        'categoryAxis': {
          'parseDates': true,
          'gridAlpha': 0,
          'minorGridEnabled': true
        },
        'legend': {
          'position': 'top',
        },
        'balloon': {
          'borderThickness': 1,
          'shadowAlpha': 0
        },
        'export': {
          'enabled': true
        },
        'dataProvider': [{
          'date': '2013-01-01',
          'market1': 0,
          'market2': 0,
          'sales1': 0
        }, {
          'date': '2013-02-01',
          'market1': 0,
          'market2': 0,
          'sales1': 40
        }, {
          'date': '2013-03-01',
          'market1': 0,
          'market2': 0,
          'sales1': 0
        }, {
          'date': '2013-04-01',
          'market1': 30,
          'market2': 0,
          'sales1': 0
        }, {
          'date': '2013-05-01',
          'market1': 0,
          'market2': 20,
          'sales1': 0
        }, {
          'date': '2013-06-01',
          'market1': 25,
          'market2': 0,
          'sales1': 0
        }, {
          'date': '2013-07-01',
          'market1': 0,
          'market2': 0,
          'sales1': 0
        }, {
          'date': '2013-08-01',
          'market1': 0,
          'market2': 0,
          'sales1': 30
        }, {
          'date': '2013-09-01',
          'market1': 0,
          'market2': 0,
          'sales1': 0
        }, {
          'date': '2013-10-01',
          'market1': 0,
          'market2': 50,
          'sales1': 0
        }, {
          'date': '2013-11-01',
          'market1': 0,
          'market2': 0,
          'sales1': 65
        }, {
          'date': '2013-12-01',
          'market1': 0,
          'market2': 0,
          'sales1': 0
        }]
      });
    }, 75);
  }
  getSummury() {
    let req = {
      startTime: moment().startOf('month').utc().format('YYYY-MM-DD HH:mm'),
      endTime: moment().endOf('month').utc().format('YYYY-MM-DD HH:mm')
    }
    this._api.getSummary(req).then(res => {
      console.log(res['status']);
      if (res['status'] == "success") {
        this.summmury = res['data'];
      }
    }).catch(err => {
      console.log(err);
    })
  }
}
