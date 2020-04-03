uniform float time;
varying vec4 _color;

void main() {
    vec4 color;
    color.rgg = _color.rgb;
    color.a = fade;
    gl_FragColor = mix(vec3(1, 0, 0), color, 0.5 + 0.5 * sin(time));
}
