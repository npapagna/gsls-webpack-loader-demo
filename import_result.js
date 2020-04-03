{
  "shaders": [
    {
      "name": "vertex",
      "contents": "attribute vec2 b;varying vec2 a;void main(){a=b,gl_Position=vec4(b*2.-1.,0.,1.);}"
    },
    {
      "name": "colorFragment",
      "contents": "uniform vec4 c;void main(){gl_FragColor=c;}"
    },
    {
      "name": "textureFragment",
      "contents": "uniform sampler2D d;varying vec2 a;void main(){gl_FragColor=texture2D(d,a);}"
    }
  ],
  "renaming": {
    "position": "b",
    "color": "c",
    "texture": "d"
  }
}
