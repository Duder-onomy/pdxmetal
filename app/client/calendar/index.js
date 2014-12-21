(function(d3, $, calendarData) {
    'use strict';

    var year,
        months,
        days;

    year = d3.select('#stage')
        .append('svg');

    months = year.selectAll('.month')
        .data(calendarData)
        .enter()
        .append('svg:g')
        .attr('class', 'month')
        .style('fill', '#fff')
        .style('stroke', '#555');

    days = months.selectAll('.day')
        .data(function(month) { return month; })
        .enter()
        .append('svg:rect');


    /*cells = rows.selectAll('.cell')
        .data(function (d) { return d; })
        .enter().append('svg:rect')
        .attr('class', 'cell')
        .attr('x', function(d) { return d.x; })
        .attr('y', function(d) { return d.y; })
        .attr('width', function(d) { return d.width; })
        .attr('height', function(d) { return d.height; })
        .on('mouseover', function() {
            d3.select(this)
                .style('fill', '#0F0');
        })
        .on('mouseout', function() {
            d3.select(this)
                .style('fill', '#FFF');
        })
        .on('click', function() {
            console.log(d3.select(this));
        })
        .style('fill', '#FFF')
        .style('stroke', '#555');*/

    /*function randomData(gridWidth, gridHeight, square) {
        var data = new Array();
        var gridItemWidth = gridWidth / 24;
        var gridItemHeight = (square) ? gridItemWidth : gridHeight / 7;
        var startX = gridItemWidth / 2;
        var startY = gridItemHeight / 2;
        var stepX = gridItemWidth;
        var stepY = gridItemHeight;
        var xpos = startX;
        var ypos = startY;
        var newValue = 0;
        var count = 0;

        for (var index_a = 0; index_a < 7; index_a++)
        {
            data.push(new Array());
            for (var index_b = 0; index_b < 24; index_b++)
            {
                newValue = Math.round(Math.random() * (100 - 1) + 1);
                data[index_a].push({
                    time: index_b,
                    value: newValue,
                    width: gridItemWidth,
                    height: gridItemHeight,
                    x: xpos,
                    y: ypos,
                    count: count
                });
                xpos += stepX;
                count += 1;
            }
            xpos = startX;
            ypos += stepY;
        }
        return data;
    }*/

})(window.d3, window.$, window.calendarData);
