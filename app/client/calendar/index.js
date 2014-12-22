(function(d3, $, calendarData) {
    'use strict';

    var daySize = '20';

    // Append an svg to the stage.
    var svg = d3.select('#stage').append('svg');

    var g = svg.append('g');

    var zoom = d3.behavior.zoom()
        .translate([0, 0])
        .scale(1)
        .scaleExtent([1, 8])
        .on('zoom', zoomed);

    // Append 10 rectangles to the svg;
    g.selectAll('.day')
        .data(d3.range(1, 20))
        .enter()
        .append('rect')
        .attr('width', daySize)
        .attr('height', daySize)
        .attr('x', function(d) {
            return d * daySize;
        })
        /*.attr('y', function(d) {
            return d * daySize;
        })*/
        .attr('class', 'day')
        .on('click', function(d) {

            /*if (active.node() === this) {
                return reset();
            };*/
            /*active.classed('active', false);*/
            /*active = d3.select(this).classed('active', true);*/
            var bounds = this.getBBox();
            /*var dx = x;
            var dy = bounds[1][1] - bounds[0][1];
            var x = (bounds[0][0] + bounds[1][0]) / 2;
            var y = (bounds[0][1] + bounds[1][1]) / 2;*/

            var scale = 0.9 / Math.max(bounds.width / 960, bounds.height / 500),
                translate = [960 / 2 - scale * bounds.width, 500 / 2 - scale * bounds.height];

            g.transition()
                .duration(750)
                .call(zoom.translate(translate).scale(scale).event);
        });

    function zoomed() {
        g.style('stroke-width', 1.5 / d3.event.scale + 'px');
        g.attr('transform', 'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')');
    }


    /*var svg = d3.select('#stage').selectAll('svg')
        .data(d3.range(1, 20))
        .enter()
            .append('svg')*/
            /*.attr('width', width)*/
            /*.attr('height', height)*/
            /*.attr('class', 'RdYlGn')*/
            /*.append('g');*/
            /*.attr('transform', 'translate(' + ((width - cellSize * 53) / 2) + ',' + (height - cellSize * 7 - 1) + ')');*/



    /*var width = 960,
        height = 136,
        cellSize = 17; // cell size

    var day = d3.time.format('%w'),
        week = d3.time.format('%U'),
        percent = d3.format('.1%'),
        format = d3.time.format('%Y-%m-%d');

    var color = d3.scale.quantize()
        .domain([-0.05, 0.05])
        .range(d3.range(11).map(function(d) { return 'q' + d + '-11'; }));

    var svg = d3.select('#stage').selectAll('svg')
        .data(d3.range(2013, 2015))
        .enter().append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('class', 'RdYlGn')
        .append('g')
        .attr('transform', 'translate(' + ((width - cellSize * 53) / 2) + ',' + (height - cellSize * 7 - 1) + ')');

    svg.append('text')
        .attr('transform', 'translate(-6,' + cellSize * 3.5 + ')rotate(-90)')
        .style('text-anchor', 'middle')
        .text(function(d) { return d; });

    var rect = svg.selectAll('.day')
        .data(function(d) { return d3.time.days(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
        .enter().append('rect')
        .attr('class', 'day')
        .attr('width', cellSize)
        .attr('height', cellSize)
        .attr('x', function(d) { return week(d) * cellSize; })
        .attr('y', function(d) { return day(d) * cellSize; })
        .datum(format);

    rect.append('title')
        .text(function(d) { return d; });

    svg.selectAll('.month')
        .data(function(d) { return d3.time.months(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
        .enter().append('path')
        .attr('class', 'month')
        .attr('d', monthPath);

    function monthPath(t0) {
        var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
            d0 = +day(t0), w0 = +week(t0),
            d1 = +day(t1), w1 = +week(t1);

        return 'M' + (w0 + 1) * cellSize + ',' + d0 * cellSize +
            'H' + w0 * cellSize + 'V' + 7 * cellSize +
            'H' + w1 * cellSize + 'V' + (d1 + 1) * cellSize +
            'H' + (w1 + 1) * cellSize + 'V' + 0 +
            'H' + (w0 + 1) * cellSize + 'Z';
    }*/

})(window.d3, window.$, window.calendarData);
