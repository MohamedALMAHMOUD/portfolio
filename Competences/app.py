from flask import Flask, render_template, request
from passeword import passeword
from waitress import serve
from concurrent.futures import thread
app = Flask(__name__)


@app.route('/')
def index():
  return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
  output = request.form.to_dict()
  mdp = output['mdp']
  resultat = passeword(mdp)
  return render_template('result.html', resultat=resultat)

if __name__ == '__main__':
  app.run()
