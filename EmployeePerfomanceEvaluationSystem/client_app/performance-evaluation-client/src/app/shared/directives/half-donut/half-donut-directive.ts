import { Component, ElementRef, ViewChild, AfterViewInit, Input } from "@angular/core";
import { HalfDonutData } from '../../models/half-donut/half-donut-data';
import * as D3 from "d3";

@Component({
    selector: "half-donut",
    templateUrl: "./half-donut-component.html"
})
export class HalfDonutDirectiveComponent implements AfterViewInit {

    @ViewChild("containerPieChart") element: ElementRef;

    private host: D3.Selection;
    private svg: D3.Selection;
    private radius: number;
    private htmlElement: HTMLElement;
    @Input() pieData: HalfDonutData[];
    @Input() width: number = 250;
    @Input() height: number = 250;

    constructor() { }

    ngAfterViewInit() {
        this.htmlElement = this.element.nativeElement;
        this.host = D3.select(this.htmlElement);
        this.setup();
        this.buildSVG();
        this.populatePie();
    }

    private setup(): void {

        this.radius = Math.min(this.width, 2 * this.height) / 2;
    }

    private buildSVG(): void {
        this.host.html("");
        this.svg = this.host.append("svg")
                        .attr("viewBox", `0 0 ${this.width} ${this.height}`)
                        .attr("width", this.width)
                        .attr("height", this.height)
                        .append("g")
                        .attr("transform", `translate(${this.width / 2},${this.height})`);
    }


    private populatePie(): void {


        let color = ["#5EBBF8", "#F5F5F5"];

        let thickness = 25;
        let anglesRange = 0.5 * Math.PI

        var arc = D3.arc()              //this will create <path> elements for us using arc data
                    .innerRadius(this.radius)
                    .outerRadius(this.radius - thickness);

        var pie = D3.pie()           //this will create arc data for us given a list of values
                    .startAngle(anglesRange * -1)
                    .endAngle(anglesRange)
                   // .padAngle(.02) // some space between slices
                    .sort(null) //No! we don't want to order it by size
                        .value((d) => {
                            return d.value;
                        });    //we must tell it out to access the value of each element in our data array

        this.svg.selectAll("path")
            .data(pie(this.pieData))
            .enter()
            .append("path")
            .attr("fill", (d, i) => color[i])
            .attr("d", arc)

        //this.svg.append("text")
        //    .text(d => 20)
        //    .attr("dy", "-3rem")
        //    .attr("class", "label")
        //    .attr("text-anchor", "middle")

        
    }

}