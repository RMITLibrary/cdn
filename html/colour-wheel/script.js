var picker = {
    canvas: document.getElementById('picker'), // the picker canvas element
    load: function() {
        picker.context = picker.canvas.getContext('2d'); // set the canvas context

        picker.size = picker.wheel.size + picker.markers.outerSize; // set the picker size based on wheel size and some room for markers
        picker.center = picker.size / 2; // set the center of the picker

        picker.wheel.radius = picker.wheel.size / 2; // set the radius of the wheel
        picker.markers.outerRadius = picker.markers.outerSize / 2; // set the markers inner & outer radius
        picker.markers.innerRadius = picker.markers.innerSize / 2;

        picker.canvas.width = picker.size; // set the canvas size based on the marker / wheel size
        picker.canvas.height = picker.size;

        picker.wheel.image.onload = function() { // once the color_wheel img has been loaded
            picker.wheel.draw(); // draw the wheel
            picker.calculate({ 'x': picker.size - picker.markers.outerRadius - 1, 'y': picker.center }, 0); // calculate: marker 0 - far right
        };
        picker.wheel.image.src = 'cbimage.png'; // load the color_wheel img loacated at ./color_wheel.png embedded for cross domain issues with canvas and codepen

        // load drag events
        $('#picker').mousedown(picker.drag.down);
        $('body').mouseup(picker.drag.up);
        $('body').mousemove(picker.drag.move);
    },
    clearCanvas: function() { // clears the canvas
        picker.context.clearRect(0, 0, picker.canvas.width, picker.canvas.height);
    },
    wheel: {
        size: 480, // the wheel size
        image: new Image(), // the wheel image, loaded on picker.load
        draw: function() { // draws the wheel on the canvas
            picker.context.drawImage(picker.wheel.image,
                picker.markers.outerRadius, picker.markers.outerRadius,
                picker.wheel.size, picker.wheel.size);
        }
    },
    markers: {
        outerSize: 30, // the outer diameter of a marker
        innerSize: 22.5, // the inner diameter of a marker
        list: [], // the list of markers and the position
        selected: 0, // the selected markers
        draw: function() { // draws the markers in the above list onto the canvas
            // draw the container / outer circle
            for (var i = picker.markers.list.length - 1; i >= 0; i--) { // start at the last marker so the first marker will be on top
                var point = picker.markers.list[i];

                var theta = Math.atan((point.y - picker.center) / (point.x - picker.center));

                var counterClockwise = point.x - picker.center < 0;

                var theta1 = (3 * Math.PI / 2) + theta;
                var theta2 = theta1 - Math.PI;

                picker.markers.drawContainer(point, picker.markers.outerRadius, theta1, theta2, counterClockwise);
            }
            // draw the inner circle
            var selected = undefined;
            for (var i = picker.markers.list.length - 1; i >= 0; i--) {
                if (picker.markers.selected == i) {
                    selected = picker.markers.list[i];
                    selected.color = picker.colors.list[i].str;
                    continue;
                }
                picker.markers.drawCircle(picker.colors.list[i].str, picker.markers.list[i], picker.markers.innerRadius);
            }
            // draw selected marker - on top
            if (selected) {
                picker.markers.drawCircle('#FFF', selected, picker.markers.outerRadius);
                picker.markers.drawCircle(selected.color, selected, picker.markers.innerRadius);
            }
        },
        drawContainer: function(point, radius, theta1, theta2, counterClockwise) { // helper function for markers.draw
            picker.context.fillStyle = 'rgba(255, 255, 255, 0.5)';
            picker.context.beginPath();
            picker.context.moveTo(picker.center, picker.center);
            picker.context.arc(point.x, point.y, radius, theta1, theta2, counterClockwise);
            picker.context.lineTo(picker.center, picker.center);
            picker.context.fill();
            picker.context.closePath();
        },
        drawCircle: function(color, point, radius) { // helper function for markers.draw
            picker.context.fillStyle = color;
            picker.context.beginPath();
            picker.context.arc(point.x, point.y, radius, 0, 2 * Math.PI);
            picker.context.fill();
            picker.context.closePath();
        }
    },
    drag: { // handles marker draging
        markerDragging: -1, // the marker currently being dragged
        down: function(e) {
            // check if the click intersects the selected marker (i.e. give priority to the selected marker)
            if (picker.drag.intersects(e, picker.markers.list[picker.markers.selected])) {
                picker.drag.markerDragging = picker.markers.selected; // set the marker being dragged
            } else { // check if the click intersects the the other markers
                for (var i = picker.markers.list.length - 1; i >= 0; i--) {
                    if (picker.drag.intersects(e, picker.markers.list[i])) {
                        picker.markers.selected = i; // change the selected marker
                        $('.samples .col.selected').removeClass('selected');
                        $('.samples .col[data-sample="' + i + '"]').addClass('selected');
                        picker.drag.markerDragging = i; // set the marker being dragged
                        break;
                    }
                }
            }
            picker.drag.move(e); // call move incase the user clicks and doesn't move their mouse
        },
        up: function() {
            picker.drag.markerDragging = -1; // no longer dragging a marker
        },
        move: function(e) {
            if (picker.drag.markerDragging != -1) { // if a marker is being dragged
                picker.calculate({
                    'x': Math.floor(e.pageX - picker.canvas.offsetLeft),
                    'y': Math.floor(e.pageY - picker.canvas.offsetTop)
                }, picker.drag.markerDragging); // calculate 
            }
        },
        intersects: function(e, p) { // helper function checks if an event with a mouse location intersects a point
            var eX = Math.floor(e.pageX - picker.canvas.offsetLeft),
                eY = Math.floor(e.pageY - picker.canvas.offsetTop);
            return eX >= p.x - picker.markers.outerRadius && eX <= p.x + picker.markers.outerRadius &&
                eY >= p.y - picker.markers.outerRadius && eY <= p.y + picker.markers.outerRadius;
        }
    },
    calculate: function(point, i) { // calculates & draws marker positions & colors
        picker.clearCanvas(); // clear the canvas
        picker.wheel.draw(); // draw the color wheel so we can get the color off the canvas

        // make sure point is within the wheel
        if (picker.context.getImageData(point.x, point.y, 1, 1).data[3] != 255) { // if the pixel is not solid
            var r = Math.sqrt(Math.pow(point.x - picker.center, 2) + Math.pow(point.y - picker.center, 2));
            var extend = picker.center - picker.markers.outerRadius - 1 - r; // extend backwards to the outer most pixel
            point = picker.calc.extend(point, extend);
        }

        // switch currently active color type
        // calculate points, then get colors
        switch ($('#rules li.active').data('type')) {
            case 1: // analogous
                picker.points.analogous(point, i);
                picker.colors.analogous();
                break;
            case 2: // monochromatic
                picker.points.monochromatic(point, i);
                picker.colors.monochromatic();
                break;
            case 3: // triad
                picker.points.triad(point, i);
                picker.colors.triad();
                break;
            case 4: // complementary
                picker.points.complementary(point, i);
                picker.colors.complementary();
                break;
            case 5: // custom
                picker.points.custom(point, i);
                picker.colors.custom(i);
                break;
        }

        // update samples
        for (var i = 0; i < 5; i++) {
            $('.samples > div[data-sample="' + i + '"] .sample').css('background-color', picker.colors.list[i].str);
            $('.samples > div[data-sample="' + i + '"] .rgb.r').val(picker.colors.list[i].r);
            $('.samples > div[data-sample="' + i + '"] .rgb.g').val(picker.colors.list[i].g);
            $('.samples > div[data-sample="' + i + '"] .rgb.b').val(picker.colors.list[i].b);
            $('.samples > div[data-sample="' + i + '"] .hex').val(
                picker.calc.rgbToHex(picker.colors.list[i].r, picker.colors.list[i].g, picker.colors.list[i].b)
            );
        }

        picker.markers.draw(); // now draw the markers once we have colors / points
    },
    fromColor: function(rgb, i) { // not very accurate due to kuler's RYB color wheel
        var ryb = picker.calc.rgbToRyb(rgb.r, rgb.g, rgb.b);
        var hsl = picker.calc.rgbToHsl(ryb.r, ryb.y, ryb.b);

        if (hsl[2] < 0.5) { hsl[2] = 0.5 } // limit lightness

        var r = picker.wheel.radius * (1 - (hsl[2] - 0.5) * 2); // get the magnitude based on lightness
        var theta = 2 * Math.PI - picker.calc.degToRad(360 * hsl[0]); // get the direction based on hue

        var point = {
            'x': r * Math.cos(theta),
            'y': r * Math.sin(theta)
        };
        // point is relative to the center of the canvas so we add picker.center to position it relative to the origin of the canvas
        point.x += picker.center;
        point.y += picker.center;

        picker.calculate(point, i); // calculate from this point
    },
    points: {
        analogous: function(point, i) {
            picker.markers.list = [];
            var basePoint = point;
            if (i == 1) { // calcualte the base point from the given marker
                basePoint = picker.calc.rotate(point, picker.calc.degToRad(15));
            } else if (i == 2) {
                basePoint = picker.calc.rotate(point, picker.calc.degToRad(-15));
            } else if (i == 3) {
                basePoint = picker.calc.rotate(point, picker.calc.degToRad(30));
            } else if (i == 4) {
                basePoint = picker.calc.rotate(point, picker.calc.degToRad(-30));
            }
            picker.markers.list[0] = basePoint;
            picker.markers.list[1] = picker.calc.rotate(basePoint, picker.calc.degToRad(-15));
            picker.markers.list[2] = picker.calc.rotate(basePoint, picker.calc.degToRad(15));
            picker.markers.list[3] = picker.calc.rotate(basePoint, picker.calc.degToRad(-30));
            picker.markers.list[4] = picker.calc.rotate(basePoint, picker.calc.degToRad(30));
        },
        monochromatic: function(point, i) {
            picker.markers.list = [];
            var distance = picker.wheel.radius / 190 * 58; // 190 - kuler's radius, 58 - kuler's distance
            var basePoint;
            var subPoint;
            if (i == 0 || i == 3 || i == 4) { // calcualte the base point from the given marker
                basePoint = point;
                subPoint = picker.calc.extend(basePoint, -distance);
            } else if (i == 1 || i == 2) {
                subPoint = point;
                basePoint = picker.calc.extend(subPoint, distance);
            }
            picker.markers.list[0] = basePoint;
            picker.markers.list[1] = subPoint;
            picker.markers.list[2] = subPoint;
            picker.markers.list[3] = basePoint;
            picker.markers.list[4] = basePoint;
        },
        triad: function(point, i) {
            picker.markers.list = [];
            var basePoint;
            var triad1;
            var triad2;
            if (i == 0 || i == 3) { // calcualte the base point from the given marker
                basePoint = point;
                triad1 = picker.calc.rotate(basePoint, picker.calc.degToRad(-120));
                triad2 = picker.calc.rotate(basePoint, picker.calc.degToRad(120));
            }
            if (i == 1) {
                basePoint = picker.calc.rotate(point, picker.calc.degToRad(120));
                triad1 = point;
                triad2 = picker.calc.rotate(basePoint, picker.calc.degToRad(120));

            } else if (i == 2 || i == 4) {
                basePoint = picker.calc.rotate(point, picker.calc.degToRad(-120));
                triad1 = picker.calc.rotate(basePoint, picker.calc.degToRad(-120));
                triad2 = point;
            }
            picker.markers.list[0] = basePoint;
            picker.markers.list[1] = triad1;
            picker.markers.list[2] = triad2;
            picker.markers.list[3] = basePoint;
            picker.markers.list[4] = triad2;
        },
        complementary: function(point, i) {
            picker.markers.list = [];
            var basePoint;
            var subBasePoint;
            var complementPoint;
            if (i == 0 || i == 3) { // calcualte the base point from the given marker
                basePoint = point;
                subBasePoint = picker.calc.extend(point, -picker.markers.outerSize);
                complementPoint = picker.calc.rotate(basePoint, Math.PI);
            } else if (i == 1) {
                basePoint = picker.calc.extend(point, picker.markers.outerSize);
                subBasePoint = point;
                complementPoint = picker.calc.rotate(basePoint, Math.PI);
            } else if (i == 2 || i == 4) {
                basePoint = picker.calc.rotate(point, Math.PI);
                subBasePoint = picker.calc.extend(basePoint, -picker.markers.outerRadius);
                complementPoint = point;
            }
            picker.markers.list[0] = basePoint;
            picker.markers.list[1] = subBasePoint;
            picker.markers.list[2] = complementPoint;
            picker.markers.list[3] = basePoint;
            picker.markers.list[4] = complementPoint;
        },
        custom: function(point, i) {
            // only update given point
            picker.markers.list[i] = point;
        }
    },
    colors: {
        list: [],
        analogous: function() {
            for (var i = 0; i < picker.markers.list.length; i++) { // for each marker
                var rgba = picker.context.getImageData(picker.markers.list[i].x, picker.markers.list[i].y, 1, 1).data; // get the color from the canvas

                if (rgba[3] != 255) continue; // if the color isn't solid don't update

                if (i == 1 || i == 2) { // marker 1 & 2 are 91% darker
                    var amt = (1 - 0.91) * 255;
                    rgba[0] -= amt;
                    rgba[0] = rgba[0] < 0 ? 0 : rgba[0];
                    rgba[1] -= amt;
                    rgba[1] = rgba[1] < 0 ? 0 : rgba[1];
                    rgba[2] -= amt;
                    rgba[2] = rgba[2] < 0 ? 0 : rgba[2];
                }

                picker.colors.list[i] = { // update the colors list
                    r: rgba[0],
                    g: rgba[1],
                    b: rgba[2],
                    str: 'rgb(' + rgba[0] + ', ' + rgba[1] + ', ' + rgba[2] + ')'
                };
            }
        },
        monochromatic: function() {
            for (var i = 0; i < picker.markers.list.length; i++) { // for each marker
                var rgba = picker.context.getImageData(picker.markers.list[i].x, picker.markers.list[i].y, 1, 1).data; // get the color from the canvas

                if (rgba[3] != 255) continue; // if the color isn't solid don't update

                if (i == 2 || i == 3 || i == 4) { // marker 2 & 3 are 50% darker, marker 4 is 80% darker
                    var amt = (1 - (i == 4 ? 0.8 : 0.5)) * 255;
                    rgba[0] -= amt;
                    rgba[0] = rgba[0] < 0 ? 0 : rgba[0];
                    rgba[1] -= amt;
                    rgba[1] = rgba[1] < 0 ? 0 : rgba[1];
                    rgba[2] -= amt;
                    rgba[2] = rgba[2] < 0 ? 0 : rgba[2];
                }

                picker.colors.list[i] = { // update the colors list
                    r: rgba[0],
                    g: rgba[1],
                    b: rgba[2],
                    str: 'rgb(' + rgba[0] + ', ' + rgba[1] + ', ' + rgba[2] + ')'
                };
            }
        },
        triad: function() {
            for (var i = 0; i < picker.markers.list.length; i++) { // for each marker
                var rgba = picker.context.getImageData(picker.markers.list[i].x, picker.markers.list[i].y, 1, 1).data; // get the color from the canvas

                if (rgba[3] != 255) continue; // if the color isn't solid don't update

                if (i == 2 || i == 3 || i == 4) { // marker 3 & 4 are 70% darker, marker 2 is 80% darker
                    var amt = (1 - (i == 2 ? 0.8 : 0.7)) * 255;
                    rgba[0] -= amt;
                    rgba[0] = rgba[0] < 0 ? 0 : rgba[0];
                    rgba[1] -= amt;
                    rgba[1] = rgba[1] < 0 ? 0 : rgba[1];
                    rgba[2] -= amt;
                    rgba[2] = rgba[2] < 0 ? 0 : rgba[2];
                }

                picker.colors.list[i] = { // update the colors list
                    r: rgba[0],
                    g: rgba[1],
                    b: rgba[2],
                    str: 'rgb(' + rgba[0] + ', ' + rgba[1] + ', ' + rgba[2] + ')'
                };
            }
        },
        complementary: function() {
            for (var i = 0; i < picker.markers.list.length; i++) { // for each marker
                var rgba = picker.context.getImageData(picker.markers.list[i].x, picker.markers.list[i].y, 1, 1).data; // get the color from the canvas

                if (rgba[3] != 255) continue; // if the color isn't solid don't update

                if (i == 2 || i == 3) { // marker 2 & 3 are 70% darker
                    var amt = (1 - 0.7) * 255;
                    rgba[0] -= amt;
                    rgba[0] = rgba[0] < 0 ? 0 : rgba[0];
                    rgba[1] -= amt;
                    rgba[1] = rgba[1] < 0 ? 0 : rgba[1];
                    rgba[2] -= amt;
                    rgba[2] = rgba[2] < 0 ? 0 : rgba[2];
                }

                picker.colors.list[i] = { // update the colors list
                    r: rgba[0],
                    g: rgba[1],
                    b: rgba[2],
                    str: 'rgb(' + rgba[0] + ', ' + rgba[1] + ', ' + rgba[2] + ')'
                };
            }
        },
        custom: function(i) {
            // only update given point
            var rgba = picker.context.getImageData(picker.markers.list[i].x, picker.markers.list[i].y, 1, 1).data;
            if (rgba[3] != 255) return;
            picker.colors.list[i] = {
                r: rgba[0],
                g: rgba[1],
                b: rgba[2],
                str: 'rgb(' + rgba[0] + ', ' + rgba[1] + ', ' + rgba[2] + ')'
            };
        }
    },
    calc: {
        rotate: function(point, theta) { // rotates a point about the center of the wheel
            var cosTheta = Math.cos(theta),
                sinTheta = Math.sin(theta);
            var x = cosTheta * (point.x - picker.center) -
                sinTheta * (point.y - picker.center) + picker.center,
                y = sinTheta * (point.x - picker.center) +
                cosTheta * (point.y - picker.center) + picker.center;
            return { 'x': x, 'y': y };
        },
        extend: function(point, magnitude) { // extends a point relative to the center of the wheel
            var x = point.x - picker.center,
                y = point.y - picker.center;

            var r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            var theta = Math.PI;
            if (x != 0) {
                var theta = Math.atan(y / x) + (x >= 0 ? 0 : Math.PI);
            }

            r += magnitude;

            x = (r * Math.cos(theta)) + picker.center;
            y = (r * Math.sin(theta)) + picker.center;
            return { 'x': x, 'y': y };
        },
        // conversions
        degToRad: function(deg) { return deg * Math.PI / 180; },
        radToDeg: function(rad) { return rad * 180 / Math.PI; },
        // colors
        hexToRgb: function(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        },
        rgbToHex: function(r, g, b) {
            return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
        },
        rgbToHsl: function(r, g, b) {
            r /= 255, g /= 255, b /= 255;
            var max = Math.max(r, g, b),
                min = Math.min(r, g, b);
            var h, s, l = (max + min) / 2;
            if (max == min) {
                h = s = 0;
            } else {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break;
                }
                h /= 6;
            }
            return [h, s, l];
        },
        rgbToRyb: function(r, g, b) {
            var w = Math.min(r, g, b);
            r -= w;
            g -= w;
            b -= w;
            var mg = Math.max(r, g, b);
            var y = Math.min(r, g);
            r -= y;
            g -= y;
            if (b && g) {
                b /= 2.0;
                g /= 2.0;
            }
            y += g;
            b += g;
            var my = Math.max(r, y, b);
            if (my) {
                var n = mg / my;
                r *= n;
                y *= n;
                b *= n;
            }
            r += w;
            y += w;
            b += w;
            return { 'r': r, 'y': y, 'b': b };
        }
    }
};
$(picker.load); // load the picker

$('#rules li').click(function() { // changing rule
    var $clicked = $(this);
    var $active = $('#rules li.active');
    if ($clicked[0] != $active[0]) {
        $active.removeClass('active');
        $clicked.addClass('active');
        picker.calculate({ // re-calculate the colors
                'x': picker.markers.list[picker.markers.selected].x,
                'y': picker.markers.list[picker.markers.selected].y
            },
            picker.markers.selected
        );
    }
});
$('.samples .col').click(function() { // change the selected marker
    var $clicked = $(this);
    var $selected = $('.samples .col.selected');
    if ($clicked[0] != $selected[0]) {
        $selected.removeClass('selected');
        $clicked.addClass('selected');
        picker.markers.selected = $clicked.data('sample'); // change selected
        picker.clearCanvas(); // redraw canvas - wheel & markers
        picker.wheel.draw();
        picker.markers.draw();
    }
});
$('.samples .rgb').change(function(e) { // input an RGB
    var $rgb = $(this);
    var sample = $rgb.parent().parent().data('sample');
    var r = 0,
        g = 0,
        b = 0;
    if ($rgb.hasClass('r')) { // get the rgb values
        r = parseInt($rgb.val());
        g = parseInt($rgb.siblings('.g').val());
        b = parseInt($rgb.siblings('.b').val());
    } else if ($rgb.hasClass('g')) {
        r = parseInt($rgb.siblings('.r').val());
        g = parseInt($rgb.val());
        b = parseInt($rgb.siblings('.b').val());
    } else {
        r = parseInt($rgb.siblings('.r').val());
        g = parseInt($rgb.siblings('.g').val());
        b = parseInt($rgb.val());
    }
    if (isNaN(r) || isNaN(g) || isNaN(b)) {
        e.preventDefault();
        return;
    }
    picker.fromColor({ 'r': r, 'g': g, 'b': b }, sample); // re-calculate from color
});
$('.samples .hex').change(function(e) { // input a HEX
    var $hex = $(this);
    var sample = $hex.parent().parent().data('sample');
    var rgb = picker.calc.hexToRgb($hex.val()); // convert hex to RGB
    if (rgb == null || isNaN(rgb.r) || isNaN(rgb.g) || isNaN(rgb.b)) {
        e.preventDefault();
        return;
    }
    picker.fromColor(rgb, sample); // re-calculate from color
});