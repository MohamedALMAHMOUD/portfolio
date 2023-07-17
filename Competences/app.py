from flask import Flask, render_template, request
from flask_frozen import Freezer
from myapplication import app
from passeword import passeword
from waitress import serve
from concurrent.futures import thread
freeze = Freeze(app)


@app.route('/')
def index():
  return render_template('index.html')

@app.route('/', methods=['POST'])
def result():
  output = request.form.to_dict()
  mdp = output['mdp']
  resultat = passeword(mdp)
  return render_template('index.html', resultat=resultat)

if __name__ == '__main__':
  freezer.freeze()
