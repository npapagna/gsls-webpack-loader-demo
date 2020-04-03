uniform sampler2D texture;
uniform vec4 color;
attribute vec2 position;
varying vec2 coord;

export void vertex() {
    coord = position;
    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
}

export void colorFragment() {
    gl_FragColor = color;
}

export void textureFragment() {
    gl_FragColor = texture2D(texture, coord);
}
