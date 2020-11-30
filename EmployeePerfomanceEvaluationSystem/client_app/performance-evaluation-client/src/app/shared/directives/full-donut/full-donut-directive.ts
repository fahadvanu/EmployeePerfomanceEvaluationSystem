import { Component, ElementRef, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { FullDonutData } from '../../models/full-donut/full-donut-data';
import * as D3 from "d3";

@Component({
    selector: "full-donut",
    templateUrl: "./full-donut-directive.html",
    styleUrls: ['./full-donut-directive.css'],
    encapsulation: ViewEncapsulation.None
})
export class FullDonutDirective implements AfterViewInit, OnChanges {

    @ViewChild("containerDonutChart") element: ElementRef;

    private host: D3.Selection;
    private svg: D3.Selection;
    private radius: number;
    private htmlElement: HTMLElement;
    @Input() pieData: FullDonutData[];
    @Input() width: number = 250;
    @Input() height: number = 250;

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.pieData.currentValue != null) {

            if (this.svg != undefined) {
                this.setup();
                this.buildSVG();
                this.populatePie();
            }
        }

    }

    ngAfterViewInit() {

        this.htmlElement = this.element.nativeElement;
        this.host = D3.select(this.htmlElement);
        this.setup();
        this.buildSVG();
        this.populatePie();
    }

    private setup(): void {

        this.radius = Math.min(this.width, this.height) / 2;

    }

    private buildSVG(): void {

        this.host.html("");
        this.svg = this.host.append("svg")
                            .attr("viewBox", `0 0 ${this.width} ${this.height}`)
                            .attr("width", 2 * this.radius)
                            .attr("height", 2 * this.radius)
                            .append("g")
                            .attr("transform", `translate(${this.radius},${this.radius})`);
    }

    private populatePie(): void {


        let color = ["#003F5C", "#FFA600", "#BC5090",  "#FF6361", "#47B39C"];

        let tooltip = this.host
                        .append('div')
                        .attr('class', 'tooltip_donut');

        tooltip.append('div')
            .attr('class', 'label');

        tooltip.append('div')
            .attr('class', 'count');

        tooltip.append('div')
            .attr('class', 'percent');

        var arc = D3.arc()            
                    .innerRadius(this.radius * .75)
                    .outerRadius(this.radius);

        var pie = D3.pie()          
                    .padAngle(.02) 
                    .sort(null)
                    .value((d) => {
                        return d.value;
                    });   


        let paths = this.svg.selectAll("path")
                        .remove()
                        .exit()
                        .data(pie(this.pieData))
                        .enter()
                        .append("path")
                        .attr("fill", (d, i) => color[i])
                        .attr("d", arc)
                        .on('mouseover', (d, i) => {

                            let total = D3.sum(this.pieData.map((d) => {
                                return d.value;
                            }));

                            let current_pie_data = i.data;
                            let percent = Math.round(1000 * current_pie_data.value / total) / 10;
                            tooltip.select('.label').html(current_pie_data.label);
                            tooltip.select('.count').html(current_pie_data.value + '/' + total);
                            tooltip.select('.percent').html(percent + '%');
                            tooltip.style('display', 'block');
                        })
                        .on('mouseout', () => {
                            tooltip.style('display', 'none');
                        });       

      
    }

}