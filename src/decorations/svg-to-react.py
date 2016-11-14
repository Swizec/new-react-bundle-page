
import os

# from http://stackoverflow.com/questions/4303492/how-can-i-simplify-this-conversion-from-underscore-to-camelcase-in-python
def dash_to_camelcase(value):
    def camelcase():
        yield str.lower
        while True:
            yield str.capitalize

    c = camelcase()
    return "".join(c.next()(x) if x else '-' for x in value.split("-"))

for subdir, dirs, files in os.walk('./top'):
    for file in files:
        path = os.path.join(subdir, file)
        name, ext = file.split('.')

        with open(path, 'r') as f:
            svg = f.read()

            svg = svg.replace('<svg', 'import React from "react"; export const %s = () => (<svg' % dash_to_camelcase(name), 1) \
                     .replace('class=', 'className=') \
                     .replace('preserveaspectratio=', 'preserveAspectRatio=') \
                     .replace('viewbox=', 'viewBox=') \
                     .replace('stroke-width=', 'strokeWidth=') \
                     .replace('</svg>', '</svg>)')

            with open(os.path.join(subdir, name+'.js'), 'w') as out:
                out.write(svg)
